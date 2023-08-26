import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/img/butterfly.png';


const NavBar = () => {
 return (
  <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div className='container-fluid'>
    <Link to="/" className="navbar-brand navbar-nav">
      <img src={logo} alt="Logo La Tienda" width="60" height="54"/>
      <h1>La Tienda</h1>
    </Link>
  <ul className='navbar-nav'>
    <li className='nav-item'>
      <NavLink to="/category/screens" className='nav-link'>Pantallas</NavLink>
    </li>
    <li className='nav-item'>
    <NavLink to="/category/accessories" className='nav-link'>Accesorios</NavLink>
    </li>
    <li className='nav-item'>
    <NavLink to="/category/pcs" className='nav-link'>Compus y Consolas</NavLink>
    </li>
  </ul>
  <CartWidget/>
  </div>
 </nav>
 );
  };

export default NavBar;
