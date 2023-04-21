import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Grid, Input, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { ExpensesList } from '../../components/ExpensesList/ExpensesList';

export const Expenses = () => {
  const [showForm, setShowForm] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Registrar Gasto' : 'Gestionar Gastos';
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
      <h1 style={{ textAlign: 'center' }} ref={headerRef}>Gestionar Gastos</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            <AddIcon/> Registrar Gasto
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
                label="Descripción"
                {...register('description', { required: 'Este campo es obligatorio' })}
                error={!!errors.description}
                helperText={errors.description?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                type="number"
                label="Valor"
                {...register('value', { required: 'Este campo es obligatorio', valueAsNumber: true })}
                error={!!errors.value}
                helperText={errors.value?.message}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Entidad"
                {...register('entity', { required: 'Este campo es obligatorio' })}
                error={!!errors.entity}
                helperText={errors.entity?.message}
                margin="normal"
              />
              <InputLabel htmlFor="file-input">Recibo:</InputLabel>
              <Input
                id="file-input"
                type="file"
                fullWidth
                label="Recibo"
                {...register('receipt', { required: 'Este campo es obligatorio' })}
                error={!!errors.receipt}
                helperText={errors.receipt?.message}
                margin="normal"

              />
              <TextField
                fullWidth
                label="Pagador"
                {...register('spender', { required: 'Este campo es obligatorio' })}
                error={!!errors.spender}
                helperText={errors.spender?.message}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px', float: 'right' }}>
                Guardar
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
      {!showForm ? <ExpensesList/>:''}
    </div>
  );
};
