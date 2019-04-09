import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from '../components/CustomersActions';
import { CUSTOMER_VIEW } from '../constants/permissions';
import { accessControl } from './../helpers/accessControl';

const CustomerData = ({ id, name, dni, age, onBack, isDelele, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
            <CustomersActions>
                <button type="button" onClick={onBack}>Volver</button>
                {isDelele && <button type="button" onClick={() => {onDelete(id)}}>Eliminar</button>}
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData); 