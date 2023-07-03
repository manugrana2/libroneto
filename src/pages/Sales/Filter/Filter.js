import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { InputAdornment, Alert, Fade, Input } from '@mui/material';
import './Filter.css';
import { parse, isValid } from 'date-fns';
import Search from './Search';

export default function Filter({ dispatch }) {
    // Keep record of the type of filter to be applied
    const [filter, setFilter] = React.useState('Ninguno');

    // To keep record of each filter option value
    const [filterValues, setFilterValues] = React.useState({
        'sell-state': 'Ninguno',
        'from-date': 'yyyy-MM-dd',
        'to-date': 'yyyy-MM-dd',
        'from-value': '',
        'to-value': '',
        'seller-id': '',
        'seller-lastname': '',
        'seller-name': '',
        'client-name': '',
        'client-id': '',
        'client-lastname': '',
        'product-name': '',
        'product-ref': '',
    });

    // For the filtered options that will be used to display active filters chip
    const [filterOption, setFilterOption] =
        React.useState();

    // For the state of the errors in the filters values
    const [valueError, setValueError] = React.useState(false);

    // Updates the filters values
    const valueChange = (id) => (event) => {
        if (id == null) {
            id = event.target.id
        }
        setFilterValues({ ...filterValues, [id]: event.target.value });
        console.log(id, " : ", event.target.value);
    };

    // To display the different options depending on the filter
    const filterChange = (event) => {
        setFilter(event.target.value);
        console.log(filter)
    };

    // Add the filter to the list of active filters and dispatch it tho the Sales page
    const addFilterValue = (event) => {
        // Logic for the date filter
        console.log('The targed it is ', event.target.id);
        if (event.target.id === "date-filter") {
            dispatch({ type: 'date-fitler', from: filterValues['from-date'], to: filterValues['to-date'] });
        }
        // Logic to filter by value
        if (event.target.id === "value-filter") {
            dispatch({ type: 'value-filter', from: filterValues['from-value'], to: filterValues['to-value'] });
        }
        //logic to filter by seller
        if (event.target.id === "seller-filter") {
            dispatch({ type: 'seller-filter', name: filterValues['seller-name'], lastname: filterValues['seller-lastname'], id: filterValues['seller-id'] });
        }
        //Logic to filter by client
        if (event.target.id === "client-filter") {
            dispatch({ type: 'client-filter', name: filterValues['client-name'], lastname: filterValues['client-lastname'], id: filterValues['client-id'] });
        }
        //Logic to filter by product
        if (event.target.id === "product-filter") {
            dispatch({ type: 'product-filter', name: filterValues['product-name'], ref: filterValues['product-ref'] });
        }
        //Logic to filter by state
        if (event.target.id === "state-filter") {
            dispatch({ type: 'state-filter', state: filterValues['sell-state'] });
        }
    }

    const displayErrors = () => {
        setValueError(true);
        setTimeout(() => {
            setValueError(false);
        }, 4000);
    };

    return (
        <div className='filter-option'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant='standard'>
                <InputLabel htmlFor="filter-by">Filtrar por</InputLabel>
                <Select
                    labelId="filter-by"
                    id="demo-select-small"
                    value={filter}
                    label="Filtro"
                    onChange={filterChange}
                >
                    <MenuItem value="Ninguno">
                        <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={1}>Fecha</MenuItem>
                    <MenuItem value={2}>Valor</MenuItem>
                    <MenuItem value={3}>Vendedor</MenuItem>
                    <MenuItem value={4}>Cliente</MenuItem>
                    <MenuItem value={5}>Producto</MenuItem>
                    <MenuItem value={6}>Estado</MenuItem>

                </Select>
            </FormControl>
            {/*When there is not filter selected */}
            {filter === 'Ninguno' && (
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Search></Search>
                </>
            )}
            {/*When the date filter is selected */}
            {filter == 1 && (
                <>
                    <FormControl>
                        <label htmlFor="from-date">Desde</label>
                        <input
                            name="date"
                            type="date"
                            id="from-date"
                            onChange={valueChange('from-date')}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <label htmlFor="to-date">Hasta</label>
                        <input
                            name="date"
                            type="date"
                            id="to-date"
                            onChange={valueChange('to-date')}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        {/*Render the add enabled button only when the data is valid*/}
                        {isValid(parse(filterValues['from-date'], 'yyyy-MM-dd', new Date())) && isValid(parse(filterValues['to-date'], 'yyyy-MM-dd', new Date())) ? (
                            <Button variant="outlined" startIcon={''} onClick={addFilterValue} id="date-filter">
                                Añadir filtro
                            </Button>
                        ) : (
                            <>
                                <Button variant="outlined" startIcon={''} onClick={displayErrors} id="date-filter" className='Mui-disabled' style={{ pointerEvents: 'all' }}>
                                    Añadir filtro
                                </Button>
                            </>
                        )
                        }
                    </FormControl>
                    {(filter == 1) && (
                        <Fade in={valueError}>
                            <Alert severity="error" style={{ marginTop: '100px', position: 'fixed' }}>Verifica que las fechas sean válidas</Alert>
                        </Fade>
                    )}
                </>
            )}
            {/*When the value filter is selected */}
            {filter == 2 && (
                <>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="from-value">Desde</InputLabel>
                        <Input
                            id="from-value"
                            placeholder='0'
                            onChange={valueChange('from-value')}
                            value={filterValues['from-value']}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="to-value">Hasta</InputLabel>
                        <Input
                            id="to-value"
                            placeholder='0'
                            onChange={valueChange('to-value')}
                            value={filterValues['to-value']}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        {/*Render the add enabled button only when the data is valid*/}
                        {filterValues['from-value'] < filterValues['to-value'] && filterValues['to-value'] > 0 ? (
                            <Button variant="outlined" startIcon={''} onClick={addFilterValue} id="value-filter">
                                Añadir filtro
                            </Button>
                        ) : (
                            <>
                                <Button variant="outlined" startIcon={''} onClick={displayErrors} id="value-filter" className='Mui-disabled' style={{ pointerEvents: 'all' }}>
                                    Añadir filtro
                                </Button>
                            </>
                        )
                        }
                    </FormControl>
                    {(filter == 2) && (
                        <Fade in={valueError}>
                            <Alert severity="error" style={{ marginTop: '100px', position: 'fixed' }}>Verifica que los valores sean válidos</Alert>
                        </Fade>
                    )}
                </>
            )}
            {/*When the seller filter is selected */}
            {filter == 3 && (
                <>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="seller-name">Nombre</InputLabel>
                        <Input
                            id="seller-name"
                            placeholder={'Nombre del vendedor'}
                            onChange={valueChange("seller-name")}
                            value={filterValues['seller-name']}
                        />
                    </FormControl>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="seller-lastname">Apellido</InputLabel>
                        <Input
                            id="seller-lastname"
                            onChange={valueChange("seller-lastname")}
                            placeholder={'Apellido del vendedor'}
                            value={filterValues['seller-lastname']}
                        />
                    </FormControl>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="seller-id">Nro de documento</InputLabel>
                        <Input
                            type='number'
                            id="seller-id"
                            onChange={valueChange('seller-id')}
                            value={filterValues['seller-id']}
                            placeholder={'Nro de Documento del vendedor'}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        {/*Render the add enabled button only when the data is valid*/}
                        {filterValues['seller-name'] != '' || filterValues['seller-lastname'] != '' || filterValues['seller-id'] != '' ? (
                            <Button variant="outlined" startIcon={''} onClick={addFilterValue} id="seller-filter">
                                Añadir filtro
                            </Button>
                        ) : (
                            <>
                                <Button variant="outlined" startIcon={''} onClick={displayErrors} id="seller-filter" className='Mui-disabled' style={{ pointerEvents: 'all' }}>
                                    Añadir filtro
                                </Button>
                            </>
                        )
                        }
                    </FormControl>
                    {(filter == 3) && (
                        <Fade in={valueError}>
                            <Alert severity="error" style={{ marginTop: '100px', position: 'fixed' }}>Añade por lo menos un campo</Alert>
                        </Fade>
                    )}
                </>
            )}
            {/*When the client filter is selected */}
            {filter == 4 && (
                <>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="client-name">Nombre</InputLabel>
                        <Input
                            id="client-name"
                            placeholder={'Nombre del cliente'}
                            onChange={valueChange('client-name')}
                            value={filterValues['client-name']}
                        />
                    </FormControl>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="client-lastname">Apellido</InputLabel>
                        <Input
                            id="client-lastname"
                            placeholder={'Apellido del cliente'}
                            onChange={valueChange('client-lastname')}
                            value={filterValues['client-lastname']}
                        />
                    </FormControl>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="client-id">Nro de Identidad</InputLabel>
                        <Input
                            id="client-id"
                            type='number'
                            placeholder={'Número de indentidad'}
                            onChange={valueChange('client-id')}
                            value={filterValues['client-id']}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        {filterValues['client-name'] != '' || filterValues['client-lastname'] != '' || filterValues['client-id'] != '' ? (
                            <Button variant="outlined" startIcon={''} onClick={addFilterValue} id="client-filter">
                                Añadir filtro
                            </Button>
                        ) : (
                            <>
                                <Button variant="outlined" startIcon={''} onClick={displayErrors} id="client-filter" className='Mui-disabled' style={{ pointerEvents: 'all' }}>
                                    Añadir filtro
                                </Button>
                            </>
                        )
                        }
                    </FormControl>
                    {(filter == 4) && (
                        <Fade in={valueError}>
                            <Alert severity="error" style={{ marginTop: '100px', position: 'fixed' }}>Añade por lo menos un campo</Alert>
                        </Fade>
                    )}
                </>
            )}
            {/*When the product filter is selected */}
            {filter == 5 && (
                <>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="product-name">Nombre</InputLabel>
                        <Input
                            id="product-name"
                            placeholder={'Nombre del producto'}
                            onChange={valueChange('product-name')}
                            value={filterValues['product-name']}
                        />
                    </FormControl>
                    <div>o</div>
                    <FormControl variant="standard" size='small'>
                        <InputLabel htmlFor="product-ref">Referencia</InputLabel>
                        <Input
                            id="product-ref"
                            placeholder={'Referencia del Producto'}
                            onChange={valueChange('product-ref')}
                            value={filterValues['product-ref']}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        {filterValues['product-name'] != '' || filterValues['product-ref'] != '' ? (
                            <Button variant="outlined" startIcon={''} onClick={addFilterValue} id="product-filter">
                                Añadir filtro
                            </Button>
                        ) : (
                            <>
                                <Button variant="outlined" startIcon={''} onClick={displayErrors} id="product-filter" className='Mui-disabled' style={{ pointerEvents: 'all' }}>
                                    Añadir filtro
                                </Button>
                            </>
                        )
                        }
                    </FormControl>
                    {(filter == 5) && (
                        <Fade in={valueError}>
                            <Alert severity="error" style={{ marginTop: '100px', position: 'fixed' }}>Añade por lo menos un campo</Alert>
                        </Fade>
                    )}
                </>
            )}
            {/*When the state filter is selected */}
            {filter == 6 && (
                <>
                    <FormControl sx={{ m: 1, minWidth: 180 }} size="small" variant='standard'>
                        <InputLabel htmlFor="sell-state">Seleccione estado</InputLabel>
                        <Select
                            id="sell-state"
                            label="Estado"
                            placeholder='Estado de la venta'
                            onChange={valueChange('sell-state')}
                            value={filterValues['sell-state']}
                        >
                            <MenuItem value="Ninguno">
                                <em>Ninguno</em>
                            </MenuItem>
                            <MenuItem value={1}>Pagada</MenuItem>
                            <MenuItem value={2}>Pendiente por cobrar</MenuItem>
                            <MenuItem value={3}>Entregada</MenuItem>
                            <MenuItem value={4}>Pendiente por entregar</MenuItem>
                            <MenuItem value={5}>Cancelada/Devuelta</MenuItem>
                            <MenuItem value={6}>Reembolsada</MenuItem>
                            <MenuItem value={6}>Eliminada</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{ marginTop: '20px' }}>
                        <Button variant="outlined" startIcon={''} id="state-filter" onClick={addFilterValue}>
                            Añadir filtro
                        </Button>
                    </FormControl>
                </>
            )}
        </div>
    );
}