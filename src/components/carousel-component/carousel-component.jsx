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
   
        <Carousel>
            <Carousel.Item className='pt-5'>
                <CardDeck>
                    <Card>

                    </Card>
                </CardDeck>
            </Carousel.Item>
        </Carousel>
     
)


export default CarouselComponent


