import React from 'react';
import logo from "../assets/logo.png";
import logo_english from "../assets/logo_english.png";

const About = () => {
    return (
        <div className="home">
            <header className="home-header">
                <div>
                    <img src={logo} className="home-logo" alt="logo"/>
                    <img src={logo_english} className="home-logo" alt="logo"/>
                </div>
                <p>
                    Shree Basic School Sahapur, Kalika-2, Chitwan
                </p>
                <p>
                    This website is under maintenance. Contact school administration for further information.
                </p>
                <a
                    className="home-link"
                    href="/result">Result-2077
                </a>
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
};

export default About;
