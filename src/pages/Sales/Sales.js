import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Grid, FormControlLabel, Switch } from '@mui/material';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { SalesList } from '../../components/SalesList/SalesList';

export const Sales = () => {
  const [showForm, setShowForm] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Registrar Venta' : 'Gestionar Ventas';
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
    <div style={{marginBottom: '90px'}}>
      <h1 style={{ textAlign: 'center' }} ref={headerRef}>Gestionar Ventas</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            <AddIcon/>Registrar Venta
          </Button>
        )}
        {showForm && (
          <Button variant="outlined" color="secondary" onClick={() => setShowForm(false)}>
            <CancelIcon/>Cancelar
          </Button>
        )}
      </div>
      {showForm && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Producto"
                {...register('product', { required: 'Este campo es obligatorio' })}
                error={!!errors.product}
                helperText={errors.product?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="number"
                label="Unidades"
                {...register('units', { required: 'Este campo es obligatorio', valueAsNumber: true })}
                error={!!errors.units}
                helperText={errors.units?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="number"
                label="Precio Unitario"
                {...register('unitPrice', { required: 'Este campo es obligatorio', valueAsNumber: true })}
                error={!!errors.unitPrice}
                helperText={errors.unitPrice?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Vendedor"
                {...register('seller', { required: 'Este campo es obligatorio' })}
                error={!!errors.seller}
                helperText={errors.seller?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="date"
                label="Fecha"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register('date', { required: 'Este campo es obligatorio' })}
                error={!!errors.date}
                helperText={errors.date?.message}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px', float: 'right' }}>
                Guardar
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
      {!showForm ? <SalesList/>:''}
    </div>
  );
};
