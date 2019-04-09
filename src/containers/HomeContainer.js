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
            <AppFrame 
                header='Inicio'
                body={
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <CustomersActions>
                            <button onClick={this.handleOnClick} >Listado de clientes</button>
                        </CustomersActions>        
                    </div>  
                } />
        );
    }
};

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);