import React from 'react';
import { styled } from '@mui/system';

const StyledMainContent = styled('div')({
  minHeight: 'calc(100vh - 46px - 56px)', // Asegúrate de restar la altura de AppBar y BottomNavigation

  // Agrega esta regla de estilo para pantallas menores de 462px de ancho
  '@media (max-width: 462px)': {
  padding: '10px',
  flexGrow: 1,
  display: 'flex', // Agrega esta línea
  justifyContent: 'center', // Agrega esta línea
  alignItems: 'center', // Agrega esta línea
  minHeight: 'calc(100vh - 46px - 56px)', // Asegúrate de restar la altura de AppBar y BottomNavigation
  }
});

export const MainContent = ({ children }) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};
