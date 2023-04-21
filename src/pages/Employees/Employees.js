import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Grid, FormControlLabel, Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { EmployeesList } from '../../components/EmployeesList/EmployeesList';
export const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Añadir nuevo empleado' : 'Gestionar Empleados';
    }
  }, [showForm]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setShowForm(false);
  };
  const [isActive, setIsActive] = useState(true);

  const handleActiveChange = (event) => {
    setIsActive(event.target.checked);
  }

  return (
    <div style={{ marginBottom: '90px' }}>
      <h1 style={{ textAlign: 'center' }} ref={headerRef}>Gestionar Proveedores</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            <AddIcon />Registrar Empleado
          </Button>
        )}
        {showForm && (
          <Button variant="outlined" color="secondary" onClick={() => setShowForm(false)}>
            <CancelIcon />Cancelar
          </Button>
        )}
      </div>
      {showForm && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Nombre"
                {...register('name', { required: 'Este campo es obligatorio' })}
                error={!!errors.name}
                helperText={errors.name?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Apellido"
                {...register('lastname', { required: 'Este campo es obligatorio' })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Dirección"
                {...register('address', { required: false })}
                error={!!errors.address}
                helperText={errors.address?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="email"
                label="Correo Electrónico"
                {...register('email', { required: false })}
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="tel"
                label="Teléfono"
                {...register('phone', { required: false, valueAsNumber: true })}
                error={!!errors.phone}
                helperText={errors.units?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Costo Mensual"
                {...register('biz', { required: false })}
                error={!!errors.biz}
                helperText={errors.biz?.message}
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive}
                    onChange={handleActiveChange}
                    color="primary"
                  />
                }
                label={isActive ? 'Activo' : 'Inactivo'}
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px', float: 'right' }}>
                Guardar
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
      {!showForm ? <EmployeesList /> : ''}
    </div>
  );
};
