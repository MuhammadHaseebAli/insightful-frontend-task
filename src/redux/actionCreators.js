import { DASHBOARD_DATA_SET } from './actions';

export const dashboardDataSet = (payload) => {
    return {
      type: DASHBOARD_DATA_SET,
      payload,
    };
};