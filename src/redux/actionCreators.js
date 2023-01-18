import { DASHBOARD_DATA_SET, SAVE_EMPLOYEES_DATA, UPDATED_EMPLOYEE_DATA } from './actions';

export const dashboardDataSet = (payload) => {
  return {
    type: DASHBOARD_DATA_SET,
    payload,
  };
};

export const updateEmployeeData = (payload) => {
  return {
    type: UPDATED_EMPLOYEE_DATA,
    payload,
  };
};


export const SaveEmployeesData = (payload) => {
  return {
    type: SAVE_EMPLOYEES_DATA,
    payload,
  };
};

