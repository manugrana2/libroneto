import { Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import './Title.css'
export default function Title({showForm,setShowForm}){
    return(
        <div className="sales-title">
            <h1>{showForm? 'Registrar venta':'Gestionar Ventas'}</h1>
            {!showForm && (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)} className='title-action-btn'>
            <AddIcon />Registrar Venta
          </Button>
        )}
        {showForm && (
          <Button variant="outlined" color="secondary" onClick={() => setShowForm(false)} className='title-action-btn'>
            <CancelIcon />Cancelar
          </Button>
        )}
        </div>
    )
}