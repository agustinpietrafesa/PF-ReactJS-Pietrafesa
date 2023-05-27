import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <CartProvider>
            <NavbarComponent />
              <Routes>
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='/category/:categoryId' element={<ItemListContainer />} />
                  <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<Cart/>} /> 
                  <Route path='/checkout' element={<Checkout />} />
                  <Route path='*' element={<h1>404 Not Found</h1>} />
              </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
