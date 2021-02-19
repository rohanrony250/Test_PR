import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './trending-preview.styles.scss'
const TrendingView = () =>
(

    <div className='mt-5 text-center text-white'>
        <Container>
            <Row>
                <Col>
                    <h1 className='trending-topic'>
                        TRENDING TOPICS
                    </h1>
                </Col>
            </Row>
        </Container>
    </div>

)

export default TrendingView