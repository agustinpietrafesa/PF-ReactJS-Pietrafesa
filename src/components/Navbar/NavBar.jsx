import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './styles/NavBarStyles.css'
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
   return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
              <Link to={'/'} className='logo'>
              Tu Pilcha
              </Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/category/Remera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >Remeras</Nav.Link>
            <Nav.Link as={Link} to={`/category/Pantalón`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >Pantalones</Nav.Link>
            <Nav.Link as={Link} to={`/category/Hoodie`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >Hoodies</Nav.Link>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    )
}


export default NavbarComponent
