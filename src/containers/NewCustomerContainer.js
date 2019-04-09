import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { insertCustomer } from '../actions/insertCustomer';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {

    handleOnBack = () => {
        this.props.history.goBack()
    }

    handleOnSubmitSuccess = () =>{
        this.props.history.goBack()
    }

    handleOnSubmit = values => {
        return this.props.insertCustomer(values).then(r => {
            if (r.error) throw new SubmissionError(r.payload)
        });
    }

    renderBody = customers => (
        <CustomerEdit 
            {...this.props.customer} 
            onSubmit={this.handleOnSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack}
            />
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Creación de nuevo cliente'}
                    body={this.renderBody()}
                    />
            </div>
        )
    }
}

NewCustomerContainer.propTypes = {};

NewCustomerContainer.defaultProps = {};

const mapStateToProps = state => ({})

const mapDispatchToProps = { insertCustomer }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCustomerContainer));
