import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const App = () => {
 return (
 <div>
  <NavBar/>
  <ItemListContainer greeting ="Mirá los turnos disponibles"/>
 </div>  
 );
};

export default App;