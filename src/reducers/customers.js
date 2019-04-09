import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, UPDATE_CUSTOMER, INSERT_CUSTOMER } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const newCustomer = action.payload;
        const newCustomers = state.reduce((acc, customer) => {
            if (customer.id === newCustomer.id){
                return [...acc, newCustomer];
            }else{
                return [...acc, customer];
            }
        }, []);
        return newCustomers;
    },
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload]
}, []);