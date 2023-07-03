import React from 'react';
import { AppBar as MuiAppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { Settings } from '@mui/icons-material';

export const AppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LibroNeto
        </Typography>
        <IconButton color="inherit" onClick={handleClick}>
          <Settings />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem>Cerrar sesión</MenuItem>
          <MenuItem>Cambiar contraseña</MenuItem>
          <MenuItem>Editar datos de la empresa</MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;