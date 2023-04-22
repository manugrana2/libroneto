import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { useForm } from 'react-hook-form';

const sampleData = [
  {
    id: 1,
    name: 'Cliente 1',
    last_name: 'Apellido 1',
    address: 'Dirección 1',
    phone: '123456789',
    email: 'cliente1@example.com',
    company: 'Empresa 1',
  },
  // ... (Agrega más datos de ejemplo aquí)
];

const EditForm = ({ open, handleClose, data }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('last_name', data.last_name);
      setValue('address', data.address);
      setValue('phone', data.phone);
      setValue('email', data.email);
      setValue('company', data.company);
    }
  }, [data, setValue]);

  const onSubmit = (updatedData) => {
    console.log(updatedData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Cliente</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, actualice la información del cliente en el formulario a continuación.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ... (Agrega los campos de formulario aquí) */}
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
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Guardar
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const SuppliersList = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleOpen(row)}>
                    Editar
                  </Button>
                  <Button color="secondary">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditForm open={open} handleClose={handleClose} data={selectedData} />
    </div>
  );
};

