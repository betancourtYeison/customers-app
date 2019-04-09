import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';
import { Prompt } from 'react-router-dom';

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
);

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

// const isRequired = value => (
//     !value && "Este campo es requerido"
// );

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const toUpperCase = value => (
    value && value.toUpperCase()
);

const toNumber = value => (
    value && Number(value)
);

// const onlyGrow = (value, previousValue, values) => (
//     value && previousValue && value > previousValue ? value : previousValue
// );

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
    return (
        <div>
            <h2>Datos del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    type="text"
                    // validate={isRequired}
                    label="Nombre:"
                    parse={toUpperCase}
                    // format={toUpperCase}
                    />
                <Field 
                    name="dni" 
                    component={MyField} 
                    type="text" 
                    // validate={isRequired}
                    label="DNI:"
                    />
                <Field 
                    name="age" 
                    component={MyField} 
                    type="number" 
                    // validate={[isRequired, isNumber]}
                    validate={isNumber}
                    label="Edad:"
                    parse={toNumber}
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