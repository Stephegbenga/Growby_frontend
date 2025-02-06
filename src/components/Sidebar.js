import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Inbox,
  Bot,
  Settings,
  Code,
  Sliders,
  Briefcase
} from 'lucide-react';
import './Sidebar.css';

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
            <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <LayoutDashboard className="sidebar-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Users className="sidebar-icon" />
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/campaigns" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Megaphone className="sidebar-icon" />
              Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Inbox className="sidebar-icon" />
              Inbox
            </NavLink>
          </li>
          <li>
            <NavLink to="/chatbot-flow" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Bot className="sidebar-icon" />
              Chatbot Flow
            </NavLink>
          </li>
          <li>
            <NavLink to="/automation" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Sliders className="sidebar-icon" />
              Automation
            </NavLink>
          </li>
          <li>
            <NavLink to="/ai-chatbot" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Bot className="sidebar-icon" />
              AI Chatbot
            </NavLink>
          </li>
          <li>
            <NavLink to="/templates" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Code className="sidebar-icon" />
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink to="/setup" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Settings className="sidebar-icon" />
              API Setup
            </NavLink>
          </li>
          <li>
            <NavLink to="/waba" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <Briefcase className="sidebar-icon" />
              My WABA
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;