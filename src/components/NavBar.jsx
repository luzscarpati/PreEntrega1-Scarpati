import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">¿Quiénes Somos?</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Turnos Disponibles</a></li>
        <li><CartWidget/>1</li>
      </ul>
    </nav>
  );
};

export default NavBar;
