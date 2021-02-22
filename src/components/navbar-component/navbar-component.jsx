import React from 'react'
import './navbar-styles.scss'
import { Container,Navbar,Form, FormControl, Button } from 'react-bootstrap'
const NavbarComponent = () =>
(
    <Container>
        <Navbar expand='lg' variant='dark'>
            <Navbar.Brand href='#' className='Navbar-brand'>VODEO</Navbar.Brand>
            <Form inline className='search-input mx-auto'>
                <FormControl type='text' placeholder='SEARCH' className='mr-2 search-input-field'/>
                <Button variant='outline-light' className='search-button'><i className="fas fa-search"></i></Button>
            </Form>
            <button className="btn btn-lg user-button">
                <i className="fas fa-user-circle fa-lg text-light"></i>
            
            </button>
        </Navbar>
        <div className='navbar-titles text-center my-3'>
            <span className='navbar-title p-3'>
                Browse
            </span>
            <span className='navbar-title p-3'>
                Trailers
            </span>
            <span className='navbar-title p-3'>
                most popular
            </span>
            <span className='navbar-title p-3'>
                About
            </span>
        </div>
    </Container>
)

export default NavbarComponent