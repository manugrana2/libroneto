import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
const StyledLink = styled(Link)({
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
  
  export const LinkTab = ({ to, label }) => {
    return (
      <StyledLink to={to}>
        {label}
      </StyledLink>
    );
  };
