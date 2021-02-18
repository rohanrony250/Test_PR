import React from "react";
import './carousel-styles.scss'
import { Carousel, Card, CardDeck, Container } from 'react-bootstrap'
import Music from '../../resources/music.jpg'
import Gaming from '../../resources/gaming.jpg'
import Movies from '../../resources/movieclips.png'
import Brofist from '../../resources/pewdiepie.png'
import Reactjs from '../../resources/reactjs.png'
import Whatif from '../../resources/WhatIf.png'
const CarouselComponent = () =>
(
        <Carousel className='carousel-items'>
            <Carousel.Item>
                <CardDeck>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Reactjs} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>     
                    </Card>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Whatif} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>   
                    </Card>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Movies} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>   
                    </Card>
                </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
                <CardDeck>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Music} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>   
                    </Card>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Gaming} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>   
                    </Card>
                    <Card className='carousel-card'>
                        <Card.Img variant='top' src={Brofist} style={{objectFit: 'cover', height: '37vh', width: "100%"}} className='card-image'/>   
                    </Card>
                </CardDeck>
            </Carousel.Item>
        </Carousel>
     
)


export default CarouselComponent


