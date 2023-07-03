import React from 'react';
import { Link } from 'react-router-dom';
import HomeTab from '../../parts/HomeTab/HomeTab';
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className='home-tabs'>
        <div className='tabs-list'>
          <HomeTab component={Link} to="/sales">
            <h2 >
              <div className='tab-img-container'>
                <img className='tab-img' src="https://static.vecteezy.com/system/resources/previews/011/357/780/original/3d-icon-growing-bar-chart-with-rising-arrow-front-axis-view-free-png.png" alt='Sales tab' />
              </div>
              Gestionar Ventas
            </h2>
          </HomeTab>
          <HomeTab component={Link} to="/expenses">
            <h2>
              <div className='tab-img-container'>
                <img className='tab-img' src="https://cdn-icons-png.flaticon.com/512/5501/5501371.png" alt='Expenses tab' />
              </div>
              Gestionar Gastos
            </h2>
          </HomeTab>
          <HomeTab component={Link} to="/clients">
            <h2>
              <div className='tab-img-container'>
                <img className='tab-img' src="https://cdn-icons-png.flaticon.com/512/1924/1924844.png" alt='Suppliers Tab' />
              </div>
              Gestionar Clientes
            </h2>
          </HomeTab>
          <HomeTab component={Link} to="/suppliers">
            <h2>
              <div className='tab-img-container'>
                <img className='tab-img' src="https://cdn-icons-png.flaticon.com/128/2942/2942322.png" alt='Suppliers Tab' />
              </div>
              Gestionar Proveedores
            </h2>
          </HomeTab>
          <HomeTab component={Link} to="/employees">
            <h2>
              <div className='tab-img-container'>
                <img className='tab-img' src="https://cdn-icons-png.flaticon.com/512/554/554846.png" alt='Employees Tab' />
              </div>
              Gestionar Empleados
            </h2>
          </HomeTab>
          <HomeTab component={Link} to="/reports">
            <h2>
              <div className='tab-img-container'>
                <img className='tab-img' src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" alt='Reports tab' />
              </div>
              Generar reporte
            </h2>
          </HomeTab>
        </div>
      </div>
    </div>
  );
};

export default Home;
