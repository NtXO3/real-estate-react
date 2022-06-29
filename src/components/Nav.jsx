import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <Link to='/'><img src={Logo} alt="" className='nav__logo--link' /></Link>
                <div className="nav__account">
                    <button className="btn nav__login">Log in</button>
                    <button className="btn btn__primary">Sign up</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
