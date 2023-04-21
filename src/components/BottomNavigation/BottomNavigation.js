import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const BottomNavWrapper = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#f2f2f2',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
});

const HomeButton = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
});

const BottomNavigation = () => {
  return (
    <BottomNavWrapper>
      <div></div>
      <HomeButton to="/">
        <HomeIcon />
      </HomeButton>
      <div></div>
    </BottomNavWrapper>
  );
};

export default BottomNavigation;
