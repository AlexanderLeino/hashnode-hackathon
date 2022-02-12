import React from 'react'
import './DashboardMenu.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaWpexplorer } from 'react-icons/fa'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import Auth from '../utils/auth'

function DashboardMenu() {
    const handleLogOut = () => {
        Auth.logout();
      };
  return (
    <div>
        <div className='dashboardIcons'>
            <AiOutlineHome className='icon' size={40} />
            <FaWpexplorer className='icon' size={40} />
            <AiOutlineUsergroupDelete className='icon' size={40} />
            <button width='200px' onClick={handleLogOut}></button>
        </div>
    </div>
    )
}

export default DashboardMenu;
