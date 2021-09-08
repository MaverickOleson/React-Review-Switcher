import './style/App.css';
import reviews from './Data';
import React, {useState} from 'react';
import {FaQuoteRight} from 'react-icons/fa';

function App() {
  const [Reviews, SetReviews] = useState(reviews);
  var id = 0;
  return (
    <div className="App">
      <div className="img-container">
        <h3><FaQuoteRight/></h3>
        <div>
          <img src={Reviews[id].image}/>
        </div>
      </div>
      <h3>{`${(Reviews[id].name).split(' ')[0].charAt(0).toUpperCase()}${(Reviews[id].name).split(' ')[0].slice(1)} ${(Reviews[id].name).split(' ')[1].charAt(0).toUpperCase()}${(Reviews[id].name).split(' ')[1].slice(1)}`}</h3>
      <p>{(Reviews[id].job).toUpperCase()}</p>
      <p className='para'>{Reviews[id].text}</p>
      <h3></h3>
      <button>asdf</button>
    </div>
  );
}

export default App;
