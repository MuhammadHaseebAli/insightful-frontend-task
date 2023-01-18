import { UPDATED_EMPLOYEE_DATA, CLEAR_UPDATED_EMPLOYEE_DATA } from '../actions';

const editEmployee = (state = {}, action) => {
    switch (action.type) {
        case UPDATED_EMPLOYEE_DATA:
            let employee = action.payload
            let newState = state;
            newState[employee.id] = action.payload;
            return newState;
        case CLEAR_UPDATED_EMPLOYEE_DATA:
            return {};

        default:
            return state;
    }
};

export default editEmployee;