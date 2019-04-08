import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer'

class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers()
        }
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }

    handleSubmit = values => {
        const { id } = values
        this.props.updateCustomer(id, values)
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl 
                            {...this.props.customer} 
                            onSubmit={this.handleSubmit} 
                            onBack={this.handleOnBack}
                            />;
            }
        } /> 
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                    />
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = { fetchCustomers, updateCustomer }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));
