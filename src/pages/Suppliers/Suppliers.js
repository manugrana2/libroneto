import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Grid, FormControlLabel, Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { SuppliersList } from '../../components/SuppliersList/SuppliersList';

export const Suppliers = () => {
  const [showForm, setShowForm] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Registrar Proveedor' : 'Gestionar Proveedores';
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

  return (
    <div style={{ marginBottom: '90px' }}>
      <h1 style={{ textAlign: 'center' }} ref={headerRef}>Gestionar Proveedores</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            <AddIcon />Registrar Proveedor
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
                label="Nombre del Contacto"
                {...register('contact_name', { required: 'Este campo es obligatorio' })}
                error={!!errors.supplier}
                helperText={errors.supplier?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Apellido del Contacto"
                {...register('contact_name', { required: 'Este campo es obligatorio' })}
                error={!!errors.supplier}
                helperText={errors.supplier?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Dirección"
                {...register('address', { required: false })}
                error={!!errors.supplier}
                helperText={errors.supplier?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="email"
                label="Correo Electrónico"
                {...register('email', { required: false })}
                error={!!errors.unitPrice}
                helperText={errors.unitPrice?.message}
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
                label="Empresa"
                {...register('biz', { required: false })}
                error={!!errors.biz}
                helperText={errors.biz?.message}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px', float: 'right' }}>
                Guardar
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
      {!showForm ? <SuppliersList /> : ''}
    </div>
  );
};
