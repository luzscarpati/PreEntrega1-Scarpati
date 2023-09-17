import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import CheckOut from './components/CheckOut/CheckOut';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <NavBar />
      < CheckOut/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <hr />
    </div>
  );
};

export default App;