import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput} from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Link } from '.react-router';

export default class AddUnit extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.addunit();
    }

    addunit(){
        let data = {
            property_id: 3,
            unit_number: 555,
            sqft: 5555,
            rent: 5555,
            status: 'Occupied'
            };
        fetch('/api/unit/add_unit.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res.text())
                return res.json();
            })
            .then((res)=> console.log(res,'hit'));
    }
    render(){
        return(
            <Form>
                <Row>
                <h1 className="mx-auto mb-4">Add Unit</h1>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="propertyName">Property Name</Label>
                            <Input type="text" name="property" id="property_id" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="unitNum">Unit Number</Label>
                            <Input type="text" name="unit" id="unit_id" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="units">Sq ft.</Label>
                            <Input type="text" name="units" id="units" placeholder="" />
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row form>
                <Col md={4}>
                        <FormGroup>
                            <Label for="rent">Monthly Rent</Label>
                            <Input type="text" name="rent" id="rentAmount" placeholder="$" />
                        </FormGroup>
                </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="rent">Due Date</Label>
                            <Input type="date" name="rent" id="rentDate" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <CustomInput className="mb-2"  type="switch" id="customSwitch" name="customSwitch" label="Vacant"  />
                <Button className="mr-2" color="danger">
                    <Link to="add-property" style={{color: "white"}}>Back to Add Property</Link>
                </Button>
                <Button color="info">
                    <Link to="manager-main"style={{color: "white"}} >Create New Property</Link>
                    </Button>
            </Form>
        );
    }
}