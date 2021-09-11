import './style/App.css';
import reviews from './Data';
import React, {useState} from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

function App() {
  const [Reviews, setReviews] = useState(reviews);
  //reviews data set as Reviews with useState with a setReviews function
  const [Id, setId] = useState(0);
  //id set to usestate with a setReviews function, allowing the id being used to be updated
  var rating = Reviews[Id].rating;
  //rating item from object
  function randomize(exclusion){
    var random = Math.ceil(Math.random() * Reviews.length) - 1;
    return (random !== exclusion) ? random : randomize(exclusion);
  }
  //random number between 0 and one less than the length of the the reviews object, but, if the random number generated is the same as the exclusion (number being excluded), the function triggers itself again
  function rate(starNum){
    starNum++;
    //starNum incremented, to account for the index numbers being different than the number of the star
    var {id, name, job, image, text} = Reviews[Id];
    //Reviews variables deconstructed
    (starNum !== Math.ceil(rating)) ? setReviews(Reviews.map(review => review = (review.id !== id) ? review : {id, rating: starNum, name, job, image, text})) : (rating === starNum - 0.5) ? setReviews(Reviews.map(review => review = (review.id !== id) ? review : {id, rating: starNum - 1, name, job, image, text})): setReviews(Reviews.map(review => review = (review.id !== id) ? review : {id, rating: starNum - 0.5, name, job, image, text}));
    //if the starNum is not the rating rounded up, setReviews will change the current review's rating in the Reviews array starNum. If the rating is 0.5 less than the starNum, the rating will be 1 less than the starNum, otherwise, it will be 0.5 less than the starNum
  }
  function stars(){
    var stars = [];
    //stars array will contain elements
    function setStar(i){
      stars[i] = (rating > i) ? (rating - i === 0.5)
        ? <BsStarHalf key={i} onClick={()=>rate(i)}/> : <BsStarFill key={i} onClick={()=>rate(i)}/>
        : <BsStar key={i} onClick={()=>rate(i)}/>; 
    }
    //if the index of stars[i] is greater than the rating while, subtracted from the rating, is also equal to 0.5, a half star will be returned, but while it isgreater than the rating and not equal to 0.5, a filled star will be returned. If the index of the stars is not greater than the rating, an empty star will be returned. All these elmeents have a key, which is set to the i (index) variable, and an onclick that triggers the rate function with a parameter of i
    setStar(0);
    setStar(1);
    setStar(2);
    setStar(3);
    setStar(4);
    //setStar function activated with indexes 0 through 4
    return stars;
    //stars array returned
  }
  return (
    <div className="App">
      <h3 className='quote'><FaQuoteRight/></h3>
      <div>
        <img src={Reviews[Id].image} alt='�'/>
      </div>
      <h3>{`${(Reviews[Id].name).split(' ')[0].charAt(0).toUpperCase()}${(Reviews[Id].name).split(' ')[0].slice(1)} ${(Reviews[Id].name).split(' ')[1].charAt(0).toUpperCase()}${(Reviews[Id].name).split(' ')[1].slice(1)}`}</h3>
      {/* in concatenation, the name item of the current review is split into two words, the first letter is taken from it and is capitalized, then the rest of the word, without the first letter, is taken. A space seperates the forthcoming values, in this concatenation, and then the second word's first letter is capitalized while the remainder of the word is added to it*/}
      <p className='job'>{(Reviews[Id].job).toUpperCase()}</p>
      {/* job item of current review is completely capitalized */}
      <p className='para'>{Reviews[Id].text}</p>
      <h2 className='rating'>{stars()}</h2>
      {/* stars function added to rating, containing an array of elements */}
      <h1 className='arrows'><MdKeyboardArrowLeft onClick={()=>{setId((Id === 0) ? Reviews.length - 1 : Id - 1)}}/><MdKeyboardArrowRight onClick={()=>{setId((Id + 1 === Reviews.length) ? 0 : Id + 1)}}/></h1>
      {/* the first arrow sets the Id variable to one less than the length of the Reviews variable if it is equal to 0, otherwise it will be set to one less than itself. The first arrow sets the Id variable to 0 if it is equal to the length of the Reviews variable, otherwise it will be set to one more than itself  */}
      <button onClick={()=>setId(randomize(Id))}>Surprise me</button>
      {/* Id variable is set randomly using the randomize function */}
    </div>
  );
}

export default App;
