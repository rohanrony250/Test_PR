import React from 'react'
import './navbar-styles.scss'
import { Container,Navbar,Form, FormControl, Button } from 'react-bootstrap'
const NavbarComponent = () =>
(
    <Container>
        <Navbar expand='lg' variant='dark'>
            <Navbar.Brand href='#' className='Navbar-brand'>VODEO</Navbar.Brand>
            <Form inline className='mx-auto search-input'>
                <FormControl type='text' placeholder='SEARCH' className='mr-2 search-input-field'/>
                <Button variant='outline-light' className='search-button'><i class="fas fa-search"></i></Button>
            </Form>
        </Navbar>
        <div className='navbar-titles text-center my-3'>
            <span className='navbar-title  ml-3 p-3'>
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