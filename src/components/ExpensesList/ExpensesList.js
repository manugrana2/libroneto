import React, { useState, useEffect } from 'react';
import { DialogContentText, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const sampleData = [
  { id: 1, description: 'Gasto 1', value: 100, entity: 'Entidad 1', receipt: 'Recibo 1', spender: 'Pagador 1'},
  { id: 2, description: 'Gasto 2', value: 150, entity: 'Entidad 2', receipt: 'Recibo 2', spender: 'Pagador 2'},
  { id: 3, description: 'Gasto 3', value: 200, entity: 'Entidad 3', receipt: 'Recibo 3', spender: 'Pagador 3'},
];

const EditForm = ({ open, handleClose, data }) => {
  const [description, setDescription] = useState(data ? data.description : '');
  const [value, setValue] = useState(data ? data.value : 0);
  const [entity, setEntity] = useState(data ? data.entity : '');
  const [receipt, setReceipt] = useState(data ? data.receipt : '');
  const [spender, setSpender] = useState(data ? data.spender : '');

  useEffect(() => {
    if (data) {
      setDescription(data.description);
      setValue(data.value);
      setEntity(data.entity);
      setReceipt(data.receipt);
      setSpender(data.spender);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      description,
      value,
      entity,
      receipt,
      spender,
    };

    // Make your API call here to update the expense
    console.log('Updated data:', updatedData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Gasto</DialogTitle>
      <DialogContent>
        <DialogContentText>Por favor, actualice los detalles del gasto:</DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Descripción"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Valor"
            type="number"
            fullWidth
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
          <TextField
            margin="dense"
            label="Entidad"
            type="text"
            fullWidth
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Recibo"
            type="text"
            fullWidth
            value={receipt}
            onChange={(e) => setReceipt(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Pagador"
            type="text"
            fullWidth
            value={spender}
            onChange={(e) => setSpender(e.target.value)}
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

export const ExpensesList = () => {
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
                <TableCell>Descripción</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Entidad</TableCell>
                <TableCell>Recibo</TableCell>
                <TableCell>Pagador</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.entity}</TableCell>
                  <TableCell>{row.receipt}</TableCell>
                  <TableCell>{row.spender}</TableCell>
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
  
