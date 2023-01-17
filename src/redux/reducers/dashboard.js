import { DASHBOARD_DATA_SET } from '../actions';

const dashboard = (state = {employees: [], summary: {}}, action) => {
  switch (action.type) {
    case DASHBOARD_DATA_SET:
      return action.payload;
    default:
      return state;
  }
};

export default dashboard;