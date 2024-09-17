import React from 'react'
import './style.scss'
import './_global.scss'
import LogoImg from "../../assets/Logo.svg"
import SearchLogo from "../../assets/search.svg"
import UserLogo from "../../assets/user.svg"
import BurgerLogo from "../../assets/burger.svg"
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Index = () => {
  return (
    <div>
        <header className='header'>
            <nav className='nav container'>
             <NavLink to="/">
             <img className='logoImg ' src={LogoImg} alt="logo" />
             </NavLink>
                <ul className='ul__list'>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Model S</NavLink></li>
                <li><NavLink to="/model-3" className={({ isActive }) => (isActive ? "active" : "inactive")}>Model 3</NavLink></li>
                <li><NavLink to="/model-x" className={({ isActive }) => (isActive ? "active" : "inactive")}>Model X</NavLink></li>
                <li><NavLink to="/model-y" className={({ isActive }) => (isActive ? "active" : "inactive")}>Model Y</NavLink></li>
              </ul>

              <div className='search__box'>
                <div className='search__box__inner'>
                <img src={SearchLogo} alt="search-logo" />
                <input 
                  className='search__input'
                  type="text"
                  placeholder='Search'
                />
                </div>
                    
                <div className='user__box'>
                <img src={UserLogo} alt="user-logo" />
                
                </div>

                <div className='burger__box'>
                <img src={BurgerLogo} alt="burger-logo" />
                </div>
              </div>

            </nav>
        </header>
    </div>
  )
}

export default Index