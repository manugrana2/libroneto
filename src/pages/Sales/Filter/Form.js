import { Button, TextField, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
export default function Form({setShowForm}) {
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
    )
}