import React from 'react'
import {chunk} from 'lodash'
import {Row,Col,Container} from 'reactstrap'


export const GridGenerator = ({ cols, children }) => 
{
    const colWidth = 12 / cols
    const rows = chunk(React.Children.toArray(children), cols)
    return (
        <Container>
        {rows.map((cols) => (
            <Row>
            {cols.map((col) => (
                <Col xs={12} sm={6} md={6} lg={colWidth}>
                {col}
                </Col>
            ))}
            </Row>
        ))}
        </Container>
    )
}