import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers()
        }
    }

    handleOnDelete = values => {
        const { id } = values
        return this.props.updateCustomer(id).then(r => {
            if (r.error) throw new SubmissionError(r.payload)
        });
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }

    handleOnSubmitSuccess = () =>{
        this.props.history.goBack()
    }

    handleOnSubmit = values => {
        const { id } = values
        return this.props.updateCustomer(id, values).then(r => {
            if (r.error) throw new SubmissionError(r.payload)
        });
    }
    
    renderCustomerControl = (isEdit, isDelelete) => {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return <CustomerControl 
                    {...this.props.customer} 
                    onSubmit={this.handleOnSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                    isDelele={!!isDelelete}
                    onDelete={this.handleOnDelete}
                    />;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match: isEdit }) => 
                (<Route path="/customers/:dni/del" children={
                    ({ match: isDelelete }) => (this.renderCustomerControl(isEdit, isDelelete))} />)
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
