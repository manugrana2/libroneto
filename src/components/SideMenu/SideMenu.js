import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <Button onClick={() => handleClick('/sales')}>Gestionar Ventas</Button>
            <Button onClick={() => handleClick('/expenses')}>Gestionar Gastos</Button>
            <Button onClick={() => handleClick('/clients')}>Gestionar Clientes</Button>
            <Button onClick={() => handleClick('/providers')}>Gestionar Proveedores</Button>
            <Button onClick={() => handleClick('/employees')}>Gestionar Empleados</Button>
            <Button onClick={() => handleClick('/reports')}>Generar reporte</Button>
        </Box>
    );
};
