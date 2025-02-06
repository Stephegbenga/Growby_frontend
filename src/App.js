import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar';

// Import your page components
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Inbox from './pages/Inbox';
import ChatbotFlow from './pages/ChatbotFlow';
import Automation from './pages/Automation';
import Contacts from './pages/Contacts';
import Templates from './pages/Templates';
import Waba from "./pages/Waba";
import Setup from './pages/Setup';
import Login from './pages/Login';

// Layout Wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="app-container">
      {/* Show Sidebar only if NOT on Login Page */}
      {!isLoginPage && <Sidebar />}
      
      {/* Main content */}
      <div style={{ marginLeft: !isLoginPage ? '220px' : '0', padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page without Sidebar */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes with Sidebar */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/chatbot-flow" element={<ChatbotFlow />} />
                <Route path="/automation" element={<Automation />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/waba" element={<Waba />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

//kkkk
export default App;

