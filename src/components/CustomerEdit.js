import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';

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
)

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    type="text"
                    // validate={isRequired}
                    label="Nombre:"
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
                    />
                <CustomersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button type="button" onClick={onBack}>Cancelar</button>
                </CustomersActions>
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