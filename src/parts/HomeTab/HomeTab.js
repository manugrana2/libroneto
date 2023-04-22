import { styled } from '@mui/system';
import Button from '@mui/material/Button';


const HomeTab = styled(Button)({
  width: 200,
  height: 160,
  margin: 16,
  padding: 24,
  borderRadius: 4,
  backgroundColor: 'white',
  backgroundSize: '120px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.1)',
  },
  '&:hover span': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

export default HomeTab;