import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './styles/NavBarStyles.css'


const NavbarComponent = () => {
   return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tu Pilcha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navLinks'>Remeras</Nav.Link>
            <Nav.Link href="#features" className='navLinks'>Hoodies</Nav.Link>
            <Nav.Link href="#pricing" className='navLinks'>Pantalones</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    )
}


export default NavbarComponent
