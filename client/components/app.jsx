import React from 'react';
import Header from './header';
import Footer from './footer'
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './landing-page';
import ManagerMain from './manager-main-page';
import PropertyDetailPage from './property-detail-page';
import  AddProperty  from './add-property-page';
import  TenantMain from './tenant-main-page';
import TenantOwner from './tenant-owner-page';
import AddUnit from './add-unit-page';
import AddTenant from './add-tenants-page';
import TenantRequest from './tenant-requests';
import ManagerReview from './manager-requests';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            properties: {}
        }
    }

    render(){

        const Layout = ({ children }) => {
            return (
                <React.Fragment>
                    <Row>
                        <Header/>
                    </Row>
                    {children}
                    <Row>
                        <Footer/>
                    </Row>
                </React.Fragment>
            )
        }

        return(
            <Router>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/manager-main" component={ManagerMain} />  
                        <Route exact path="/tenant-main" component={TenantMain} />                    
                        <Route exact path="/tenant-owner" component={TenantOwner} />
                        <Route exact path="/tenant-request" component={TenantRequest} />
                        <Route exact path="/add-property" component={AddProperty} />
                        <Route path="/property/:id" component={PropertyDetailPage} />
                        <Route path="/property/:id/add-unit/" component={AddUnit} />
                        <Route path="/property/:id/add-tenant" component={AddTenant} />
                        <Route path="/property/:id/manager-review" component={ManagerReview} />
                    </Layout>
                </Switch>
            </Router>
        );
    }
}