// components/SalesList/SalesList.js

import React, { useState, useEffect } from 'react';
import { DialogContentText, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const sampleData = [
  { id: 1, product: 'Producto 1', seller: 'Vendedor 1', subtotal: 100, unidades: 10},
  { id: 2, product: 'Producto 2', seller: 'Vendedor 2', subtotal: 150, units: 15},
  { id: 3, product: 'Producto 3', seller: 'Vendedor 3', subtotal: 200, units: 20},
];

const EditForm = ({ open, handleClose, data }) => {
const [seller, setSeller] = useState(data ? data.seller : '');
  const [subtotal, setSubtotal] = useState(data ? data.subtotal : 0);
  const [units, setUnits] = useState(data ? data.units : 0);
  useEffect(() => {
    if (data) {
      setSeller(data.seller);
      setSubtotal(data.subtotal);
      setUnits(data.units);
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      seller,
      subtotal,
      units,
    };

    // Make your API call here to update the sale
    console.log('Updated data:', updatedData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Venta</DialogTitle>
      <DialogContent>
        <DialogContentText>Por favor, actualice los detalles de la venta:</DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Vendedor"
            type="text"
            fullWidth
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Subtotal"
            type="number"
            fullWidth
            value={subtotal}
            onChange={(e) => setSubtotal(parseFloat(e.target.value))}
          />
          <TextField
            margin="dense"
            label="Unidades"
            type="number"
            fullWidth
            value={units}
            onChange={(e) => setUnits(parseInt(e.target.value))}
          />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
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

export default EditForm;

export const SalesList = () => {
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
              <TableCell>Producto</TableCell>
              <TableCell>Vendedor</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.seller}</TableCell>
                <TableCell>{row.subtotal}</TableCell>
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
