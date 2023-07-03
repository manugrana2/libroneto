import { Link } from 'react-router-dom';
import './HomeTab.css'
const HomeTab = ({ children, to }) => {
  return (<div className='tab'>
    <Link to={to} className='tab-link'>
      {children}
    </Link></div>)
}

export default HomeTab;