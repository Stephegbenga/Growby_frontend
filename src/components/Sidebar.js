import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

/* 
   Import whichever icons you like from react-icons.
   Below are some examples using Font Awesome icons (prefixed with Fa).
*/
import { 
  FaTachometerAlt, 
  FaUserFriends, 
  FaUsers, 
  FaBullhorn, 
  FaInbox, 
  FaRobot, 
  FaTools, 
  FaList, 
  FaCode, 
  FaCog 
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Brand / Logo Section */}
      <div className="sidebar-header">
        <h2>Growby</h2>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink 
              to="/dashboard" 
              end 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaTachometerAlt className="sidebar-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaUserFriends className="sidebar-icon" />
              Contacts
            </NavLink>
          </li>
         
          <li>
            <NavLink 
              to="/campaigns" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaBullhorn className="sidebar-icon" />
              Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/inbox" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaInbox className="sidebar-icon" />
              Inbox
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/chatbot-flow" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaRobot className="sidebar-icon" />
              Chatbot Flow
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/automation" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaTools className="sidebar-icon" />
              Automation
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/templates" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaCode className="sidebar-icon" />
            Templates
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/setup" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaCog className="sidebar-icon" />
            Api Setup
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/waba" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <FaCog className="sidebar-icon" />
              My WABA
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
