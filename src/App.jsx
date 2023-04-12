import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ItemListContainer saludo={'Bienvenido a Scuba Divers Uruguay'}/>   
    </div>
  );
}

export default App;
