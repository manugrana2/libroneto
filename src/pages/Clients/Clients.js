import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, Grid, FormControlLabel, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm } from 'react-hook-form';
import { ClientsList } from '../../parts/ClientsList/ClientsList';

export const Clients = () => {
  const [showForm, setShowForm] = useState(false);
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
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Registrar Cliente' : 'Gestionar Clientes';
    }
  }, [showForm]);

  return (
    <div style={{ marginBottom: '90px' }}>
      <h1 style={{ textAlign: 'center' }} ref={headerRef}>Gestionar Clientes</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            <AddIcon /> Registrar Cliente
          </Button>
        )}
        {showForm && (
          <Button variant="outlined" color="secondary" onClick={() => setShowForm(false)}>
            <CancelIcon /> Cancelar
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
                {...register('last_name', { required: 'Este campo es obligatorio' })}
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Dirección"
                {...register('address', { required: 'Este campo es obligatorio' })}
                error={!!errors.address}
                helperText={errors.address?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Teléfono"
                {...register('phone', { required: 'Este campo es obligatorio' })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                {...register('email', { required: 'Este campo es obligatorio' })}
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Switch
                    {...register('on_charge')}
                    name="on_charge"
                    color="primary"
                  />
                }
                label="En cargo"
                labelPlacement="start"
                style={{ marginTop: '16px' }}
              />
              <TextField
                fullWidth
                label="Empresa"
                {...register('company', { required: 'Este campo es obligatorio' })}
                error={!!errors.company}
                helperText={errors.company?.message}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '16px', float: 'right' }}
              >
                Guardar
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
      {!showForm ? <ClientsList/>:''}
    </div>
  );
};

