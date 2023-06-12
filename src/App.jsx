import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element = { <Cart/> } />
            <Route path='/checkout' element = { <Checkout/> } />
          </Routes>
        </DataProvider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
