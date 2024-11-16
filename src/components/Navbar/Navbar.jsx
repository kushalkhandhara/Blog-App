import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"; 
import { FaBloggerB } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import "./Navbar.css";


function Navbar1() {
  return (
    <Navbar expand="lg" className="py-4"   >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBloggerB size={40}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3 align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
            <Nav.Link as={Link} to="/account"><MdAccountCircle size={35}/></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;