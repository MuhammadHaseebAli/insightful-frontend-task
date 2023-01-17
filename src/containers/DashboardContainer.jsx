import { connect } from "react-redux";
import Dashboard from "../components/dashboard/Dashboard";
import { dashboardDataSet } from '../redux/actionCreators'

const DashboardContainer = (props) => {
    return <Dashboard {...props}/>
}

const mapStateToProps = (state) => ({
  employees: state.dashboard.employees,
  dashboardSummary: state.dashboard.summary
});
  
const mapDispatchToProps = () => ({
    dashboardDataSet
});
  
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
  
