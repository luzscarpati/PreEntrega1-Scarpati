import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailConteiner';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Mira los productos"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Busca por categoría"} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <hr />
    </div>
  );
};

export default App;