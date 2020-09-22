import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
