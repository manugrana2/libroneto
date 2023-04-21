import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  width: 200,
  height: 160,
  margin: 16,
  padding: 24,
  borderRadius: 4,
  backgroundColor: 'white',
  backgroundSize: '120px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.1)',
  },
  '&:hover span': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', justifyContent: 'center', gap: '5px' }}>
        <CustomButton component={Link} to="/sales">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://static.vecteezy.com/system/resources/previews/011/357/780/original/3d-icon-growing-bar-chart-with-rising-arrow-front-axis-view-free-png.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Gestionar Ventas
          </h2>
        </CustomButton>
        <CustomButton component={Link} to="/expenses">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/5501/5501371.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Gestionar Gastos
          </h2>
        </CustomButton>
        <CustomButton component={Link} to="/clients">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/1924/1924844.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Gestionar Clientes
          </h2>
        </CustomButton>
        <CustomButton component={Link} to="/suppliers">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/2942/2942322.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Gestionar Proveedores
          </h2>
        </CustomButton>
        <CustomButton component={Link} to="/employees">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/554/554846.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Gestionar Empleados
          </h2>
        </CustomButton>
        <CustomButton component={Link} to="/reports">
          <h2 style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" style={{ width: '40%', margin: 'auto' }} />
            </div>
            Generar reporte
          </h2>
        </CustomButton>
      </div>
    </div>
  );
};

export default Home;
