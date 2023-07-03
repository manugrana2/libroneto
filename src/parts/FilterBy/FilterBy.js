import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterBy({updateFilter}) {
    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
        console.log(filter);
        alert(filter);
    };
    React.useEffect(()=>{
        alert(filter);
    },[filter])

    return (
        <div className='filter-option'>
            <span><small>Añadir Filtro</small></span>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="filter-by">Filtro</InputLabel>
                <Select
                    labelId="filter-by"
                    id="demo-select-small"
                    value={age}
                    label="Filtro"
                    onChange={()=> console.log('filter changed')}
                >
                    <MenuItem value={1}>Fecha</MenuItem>
                    <MenuItem value={2}>Precio</MenuItem>
                    <MenuItem value={3}>Vendedor</MenuItem>
                    <MenuItem value={4}>Cliente</MenuItem>
                    <MenuItem value={5}>Producto</MenuItem>
                    <MenuItem value={6}>Valor Total</MenuItem>
                    <MenuItem value={7}>Estado</MenuItem>

                </Select>
            </FormControl>
        </div>
    );
}