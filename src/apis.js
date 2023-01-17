import  { employeesList, summary } from './data';

const fetchDashboardData = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve({employees: employeesList, summary });
        }, 5000);
      }); 
}

export {
  fetchDashboardData
}