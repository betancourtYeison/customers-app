import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../logo.svg';
import './../App.css';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push("/customers")
    }

    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>  
                    } />
            </header>
        );
    }
};

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);