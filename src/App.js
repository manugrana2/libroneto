import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar';
import { MainContent } from './components/MainContent/MainContent';
import { Navigation } from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import { Sales } from './pages/Sales/Sales';
import { Expenses } from './pages/Expenses/Expenses';
import { Clients } from './pages/Clients/Clients';
import { Employees } from './pages/Employees/Employees';
import { Reports } from './pages/Reports/Reports';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import { LinkTab } from './components/LinkTab/LinkTab';
import { styled } from '@mui/system';
import { Suppliers } from './pages/Suppliers/Suppliers';

const StyledTab = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '#E5E5E5',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#C9C9C9',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },

  '&:focus': {
    outline: 'none',
  },
});

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </MainContent>
       <BottomNavigation/> 
      </div>
    </Router>
  );
}

export default App;
