import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Footer extends React.Component{
    
      render() {
        return (
            <footer id="myFooter">
                <Container >
                    <Row>
                        <Col className="col-sm-12 col-md-4">
                            <h2 className="logo"><a href="#"> Moore Properties </a></h2>
                        </Col>
                        <Col className="col-sm-6 col-md-3">
                            <h5>Get started</h5>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/manager-main">Property Manager Portal</Link></li>
                                <li><Link to="/tenant-main">Tenant Portal</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div color="dark" className="footer-copyright">
                    <p>© 2019 Moore Properties </p>
                </div>
            </footer>
        );
      }
    }