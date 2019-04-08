import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

    renderCustomerListContainer = () => <h1>Customer List Container</h1>;

    renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={HomeContainer}  />
                    <Route exact path="/customers" component={CustomersContainer} />
                    <Switch>
                        <Route path="/customers/new" component={this.renderCustomerNewContainer} />
                        <Route path="/customers/:dni" component={this.renderCustomerListContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
