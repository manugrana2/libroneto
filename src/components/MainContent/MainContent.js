import React from 'react';
import { styled } from '@mui/system';

const StyledMainContent = styled('div')({
  minHeight: 'calc(100vh - 46px - 56px)', // Asegúrate de restar la altura de AppBar y BottomNavigation

  // Agrega esta regla de estilo para pantallas menores de 462px de ancho
 
});

export const MainContent = ({ children }) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};
