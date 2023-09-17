import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import CheckOut from './components/CheckOut/CheckOut';
import { Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='checkout' element={<CheckOut/>}></Route>
      </Routes>
      <hr />
    </CartProvider>
  );
};

export default App;