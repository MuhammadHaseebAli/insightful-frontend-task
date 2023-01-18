import { DASHBOARD_DATA_SET, SAVE_EMPLOYEES_DATA } from '../actions';

const dashboard = (state = { employees: [], summary: {} }, action) => {
  switch (action.type) {
    case DASHBOARD_DATA_SET:
      return action.payload;

    case SAVE_EMPLOYEES_DATA:
      let newEmployeesData = [...state.employees];
      let changedData = action.payload;

      for (let empID in changedData) {
        for (let i = 0; i < newEmployeesData.length; i++) {
          if (newEmployeesData[i].id === parseInt(empID)) {
            newEmployeesData[i] = changedData[empID]
          }
        }
      }
      return { ...state, employees: newEmployeesData }
    default:
      return state;
  }
};

export default dashboard;