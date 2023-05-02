import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ItemListContainer saludo={'Bienvenido a Tu Pilcha'}/>   
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
