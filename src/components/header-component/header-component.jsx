import React from 'react'
import './header-styles.scss'
import NavbarComponent from '../navbar-component/navbar-component'
import { Container,Row,Col } from 'react-bootstrap'
import CarouselComponent from '../carousel-component/carousel-component'


const HeaderComponent = () =>
(
    
    <div className='main-header'>
        <NavbarComponent/>
        <Container className='header-section' fluid>
            <hr className='bg-light'/> 
        </Container>
        <Container fluid className='header-carousel'>
            <CarouselComponent/>
        </Container>
       
    </div>
    
    
)

export default HeaderComponent