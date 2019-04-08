import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        dni: "1115453654",
        name: "Yeison Betancourt",
        age: "25",
    },
    {
        dni: "1115032455",
        name: "Alejandra Ospina",
        age: "25",
    },
    {
        dni: "1115123434",
        name: "Jorge Castaño",
        age: "26 ",
    }
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push("/customers/new")
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={"/customers/"}
                />
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                    />
            </div>
        )
    }
}

CustomersContainer.propTypes = {};

export default withRouter(CustomersContainer);
