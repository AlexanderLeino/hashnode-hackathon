import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return(
    <nav className="nav">
        <div className="nav-mobile">
            <div className="nav-burger"
              onClick={() => setToggle(!toggle)}
              onKeyPress={() => setToggle(!toggle)}
              role='button'
              tabIndex={0}
            >
                <span className="burger"></span>
                <span className="burger-text">Menu</span>
            </div>
            <div className={`nav-main ${toggle ? 'active' : '' }`}>
              <ul>
                  <NavLink
                    className="link"
                    onClick={() => {
                        setToggle(!toggle);
                      }}
                      onKeyPress={() => {
                        setToggle(!toggle);
                      }}
                      style={({ isActive }) => ({ color: isActive ? 'white' : '' })}
                      to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="link"
                    onClick={() => {
                        setToggle(!toggle);
                      }}
                      onKeyPress={() => {
                        setToggle(!toggle);
                      }}
                      style={({ isActive }) => ({ color: isActive ? 'white' : '' })}
                      to="group"
                  >
                    Group
                  </NavLink>
                  <NavLink
                    className="link"
                    onClick={() => {
                        setToggle(!toggle);
                      }}
                      onKeyPress={() => {
                        setToggle(!toggle);
                      }}
                      style={({ isActive }) => ({ color: isActive ? 'white' : '' })}
                      to="explore"
                  >
                      Explore
                  </NavLink>

              </ul>
            </div>
        </div>
        <div className="nav-responsive">
          <div style={{margin:"1rem"}}>
            <AccountCircleIcon fontSize='large' />
          </div>
            <div className='links'>
              <NavLink
                className="link"
                  style={({ isActive }) => ({ color: isActive ? '#3949ab' : '#000000' })}
                  to="/"
              >
                <HomeIcon />
              </NavLink>
              <NavLink
                className="link"
                  style={({ isActive }) => ({ color: isActive ? '#3949ab' : '#000000' })}
                  to="group"
              >
                <GroupIcon/>
              </NavLink>
              <NavLink
                className="link"
                  style={({ isActive }) => ({ color: isActive ? '#3949ab' : '#000000' })}
                  to="explore"
              >
                <TravelExploreIcon/>
              </NavLink>
          </div>
        </div>
    </nav>
  )
};
export default Nav