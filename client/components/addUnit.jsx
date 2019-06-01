import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddUnit extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Form>
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
                            <Input type="text" name="rent" id="rent" placeholder="$" />
                        </FormGroup>
                </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="rent">Due Date</Label>
                            <Input type="date" name="rent" id="rent" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup check>
                            <Label >
                            <Input type="checkbox" />{' '}
                            Occupied
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="info">Submit</Button>
            </Form>
        );
    }
}