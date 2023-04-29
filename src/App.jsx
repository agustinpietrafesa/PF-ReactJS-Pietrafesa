import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ItemListContainer saludo={'Bienvenido a Tu Pilcha'}/>   
      <ItemCount inicial={1} stock={10} onAdd={(cantidad)=>(console.log(cantidad))} />
    </div>
  );
}

export default App;
