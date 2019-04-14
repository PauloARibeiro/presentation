import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// FULL SCREEN SHENANIGANS
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    document.documentElement.requestFullscreen();
  }
});
