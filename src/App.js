import React from 'react';
import logo from './logo.png';
import logo_english from './logo_english.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo_english} className="App-logo" alt="logo" />
        </div> 
        <p>
          Shree Basic School Sahapur, Kalika-2, Chitwan
        </p>
        <p>
          This website is under maintenance. Contact school administration for further information.
        </p>
        <a
        className="App-link"
        href="mailto:sahapurschool@gmail.com">Send Email</a>
        <a
          className="App-link"
          href="https://www.facebook.com/SahapurSchool/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook 
        </a>
      </header>
    </div>
  );
}

export default App;
