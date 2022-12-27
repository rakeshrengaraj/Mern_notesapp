import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return(
        <div className='footer'>
            <Container>
                <Row>
                    <Col>Copyright &copy; Notes App</Col>
                </Row>
            </Container>
        </div>
    )
}


export default Footer;