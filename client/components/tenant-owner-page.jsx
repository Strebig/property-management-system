import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TenantOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ownerInfo: []
        };
        this.getOwnerInfo = this.getOwnerInfo.bind(this);
    }
    componentDidMount(){
        this.getOwnerInfo();
    }
    getOwnerInfo(){
        fetch('/api/tenants/tenant-owner.php')
        .then(response=>response.json())
        .then(tenantList=>{
            this.setState({ ownerInfo: tenantList });
        })
    }
    render(){
        return(
            <div>
                <Row>
                    <Col className="header-background">
                        <h1 className="property-detail-header text-center display-3">{this.state.ownerInfo.business_name} Portal</h1>
                        <h3 className="property-detail-header text-center display-5">{this.state.ownerInfo.street_address}, Unit: {this.state.ownerInfo.unit_number}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="details-header text-center py-2">
                        <Container>
                            <Nav pills>
                                <Col>
                                    <NavItem>
                                        <Link style={{color: "white"}} to="/tenant-main">Tenant Summary</Link>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <Link className='active' to="/tenant-owner">Property Information</Link>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <Link style={{color: "white"}} to="/tenant-request">Request Repairs</Link>
                                    </NavItem>
                                </Col>
                            </Nav>
                        </Container>
                    </Col>
                </Row>
                <Container className='my-5'>
                    <Row className='col-4 offset-2'><h4>Contact Information: </h4></Row>
                    <Row className='col-4 offset-4'>
                        <div className='col-sm-auto'>
                            <b>Property Name:</b> {this.state.ownerInfo.property_name}
                        </div>
                        <div className='col-sm-auto'>
                            <b>Manager Contact: </b> {this.state.ownerInfo.manager_contact}
                        </div>
                        <div className='col-sm-auto'>
                            <b>Manager Phone: </b> {this.state.ownerInfo.manager_phone}
                        </div>
                        <div className='col-sm-auto'>
                            <b>Manager Email: </b> {this.state.ownerInfo.manager_email ? this.state.ownerInfo.manager_email : 'N/A'}
                        </div>
                    </Row>
                    <Row className='col-4 offset-2'><h4>Property Info: </h4></Row>
                    <Row className='col-4 offset-4'>
                        <div className='col-auto'>
                            <b>Street Address: </b> {this.state.ownerInfo.street_address}
                        </div>
                        <div className='col-auto'>
                            <b>City: </b> {this.state.ownerInfo.city}
                        </div>
                        <div className='col-auto'>
                            <b>State: </b> {this.state.ownerInfo.state}
                        </div>
                        <div className='col-auto'>
                            <b>Zip: </b> {this.state.ownerInfo.zip}
                        </div>
                    </Row>
                    <Row className='col-4 offset-2'><h4>Additional Info: </h4></Row>
                    <Row className='col-4 offset-4'>
                        <div className='col-auto'>
                            <b>Parking Spaces: </b> {this.state.ownerInfo.parking_spaces}
                        </div>
                        <div className='col-auto'>
                            <b>Square Footage: </b> {this.state.ownerInfo.sqft}
                        </div>
                    </Row>
                </Container>
                <div className='tempHeight'></div>
            </div>
        );
    }
}
