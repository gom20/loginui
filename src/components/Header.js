import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { render } from '@testing-library/react';

function Header()  {
    return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link className='text-link' to="/">Home</Link></Navbar.Brand>
        <Nav>          
          <Nav.Link><Link className='text-link' to="/login">Login</Link> / <Link className='text-link' to="/join">Register</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    )
}

export default Header;
