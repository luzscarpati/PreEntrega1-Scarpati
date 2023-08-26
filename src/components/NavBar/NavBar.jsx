import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
 return (
  <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div className='container-fluid'>
   <a className="navbar-brand navbar-nav" href="#">
    <img src="./src/assets/img/butterfly.png" alt="Logo La Tienda" width="60" height="54"/>
    <h1>La Tienda</h1>
   </a>
  <ul className='navbar-nav'>
    <li className='nav-item'>
     <a href='#' className='nav-link'>Pantallas</a>
    </li>
    <li className='nav-item'>
     <a href='#' className='nav-link'>Accesorios</a>
    </li>
    <li className='nav-item'>
     <a href='#' className='nav-link'>Compus y Consolas</a>
    </li>
  </ul>
  <CartWidget/>
  </div>
 </nav>
 );
  };

export default NavBar;
