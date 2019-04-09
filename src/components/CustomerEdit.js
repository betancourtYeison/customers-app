import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';
import { Prompt } from 'react-router-dom';

const validate = values => {
    const error = {};
    if (!values.name){
        error.name = "Este campo es requerido"
    }
    if (!values.dni){
        error.dni = "Este campo es requerido"
    }
    if (!values.age){
        error.age = "Este campo es requerido"
    }
    return error;
};

class CustomerEdit extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus()
        }
    }
    
    renderField = ({ input, meta, type, label, withFocus, id }) => (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                ref={withFocus && (txt => this.txt = txt)} 
                {...input} 
                type={!type ? "text" : type}
                />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
    
    // isRequired = value => (
    //     !value && "Este campo es requerido"
    // );
    
    isNumber = value => (
        isNaN(Number(value)) && "El campo debe ser un número"
    );
    
    toUpperCase = value => (
        value && value.toUpperCase()
    );
    
    toNumber = value => (
        value && Number(value)
    );
    
    // onlyGrow = (value, previousValue, values) => (
    //     value && previousValue && value > previousValue ? value : previousValue
    // );

    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props
        return (
            <div>
                <h2>Datos del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        id="name"
                        name="name" 
                        component={this.renderField} 
                        type="text"
                        // validate={this.isRequired}
                        label="Nombre:"
                        parse={this.toUpperCase}
                        // format={this.toUpperCase}
                        />
                    <Field 
                        id="dni"
                        name="dni" 
                        component={this.renderField} 
                        type="text" 
                        // validate={this.isRequired}
                        label="DNI:"
                        />
                    <Field 
                        id="age"
                        name="age" 
                        component={this.renderField} 
                        type="number" 
                        // validate={[isRequired, isNumber]}
                        validate={this.isNumber}
                        label="Edad:"
                        parse={this.toNumber}
                        // normalize={onlyGrow}
                        />
                    <CustomersActions>
                        <button 
                            type="submit" 
                            disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button 
                            type="button" 
                            disabled={submitting} 
                            onClick={onBack}>
                            Cancelar
                        </button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continua" />
                </form>
            </div>
        );
    }
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    }
)(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);