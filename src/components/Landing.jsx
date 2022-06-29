import React from 'react';
import Hero from '../assets/img/house-banner.png'

const Landing = () => {
    return (
        <section id="landing">
            <div className="container">
                <div className="row">
                    <div className="landing__wrapper">
                        <div className="landing__description">
                            <h1 className="landing__title"><span className="text__primary">Rent</span> Your Dream House With Us.</h1>
                            <p className="landing__para">HomeLand offers Quality Real Estate across the entirety of North America. Find your new Dream House and move in within a month!</p>
                        </div>
                        <figure className="landing__img--wrapper">
                            <img src={Hero} alt="" className="landing__img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
