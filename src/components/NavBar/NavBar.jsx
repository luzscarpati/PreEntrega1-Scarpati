import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
 return (
  <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div className='container-fluid'>
   <a className="navbar-brand navbar-nav" href="#">
    <img src="./src/assets/img/butterfly.png" alt="Logo HealthCare" width="60" height="54"/>
    <h1>HealthCare</h1>
   </a>
  <ul className='navbar-nav'>
    <li className='nav-item'>
     <a href='#' className='nav-link'>¿Quiénes Somos?</a>
    </li>
    <li className='nav-item'>
     <a href='#' className='nav-link'>Obstetricia</a>
    </li>
    <li className='nav-item'>
     <a href='#' className='nav-link'>Ginecología</a>
    </li>
    <li className='nav-item'>
     <a href='#' className='nav-link'>IVE-ILE</a>
    </li>
  </ul>
  <CartWidget/>
  </div>
 </nav>
 );
  };

export default NavBar;
