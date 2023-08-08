import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
 return (
  <nav>
  <div className="container">
   <a className="navbar-brand" href="#">
    <img src="./src/assets/img/mariposa.jpg" alt="Logo HealthCare" width="60" height="54"/>
    <h1>HealthCare</h1>
   </a>
  </div>
  <ul>
    <li>
     <a href='#'>¿Quiénes Somos?</a>
    </li>
    <li>
     <a href='#'>Obstetricia</a>
    </li>
    <li>
     <a href='#'>Ginecología</a>
    </li>
    <li>
     <a href='#'>IVE-ILE</a>
    </li>
  </ul>
  <div>CartWidget</div>
 </nav>
 );
  };

export default NavBar;
