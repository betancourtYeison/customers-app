import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Route exact path="/" component={HomeContainer}  />
                    <Route exact path="/customers" component={CustomersContainer} />
                    <Switch>
                        <Route path="/customers/new" component={NewCustomerContainer} />
                        <Route path="/customers/:dni" 
                                render={props => <CustomerContainer dni={props.match.params.dni} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
