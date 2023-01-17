import { Box, Paper } from "@mui/material";
import { useCallback } from 'react'
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../apis";
import EmployeeListingTable from "./EmployeeListingTable";
import Summary from "./Summary";
import { useDispatch } from 'react-redux';
import { dashboardDataSet } from "../../redux/actionCreators";
import { styled } from '@mui/material/styles';
import Popup from "./editAdmin/Popup";

const RootBox = styled(Box)(() => ({
    marginTop : 25,
    padding: 10
}))

const Dashboard = ({employees, dashboardSummary}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [isPopupOpen, setIsPopupOpen] =  useState(false);

  const setDashboardData = useCallback(() => {
    setIsLoading(true);
    fetchDashboardData().then((response)=>{
        console.log(response)
        dispatch(dashboardDataSet(response));
    }).finally(()=>{
        setIsLoading(false);
    });
  },[dispatch]);

  useEffect(()=>{
   setDashboardData();
  },[setDashboardData]);
  
  return <RootBox>
        <Paper>
            <Summary isLoading={isLoading} dashboardSummary={dashboardSummary} />
            <EmployeeListingTable 
            isLoading={isLoading} 
            employees={employees} 
            selectedEmployees={selectedEmployees} 
            setSelectedEmployees={setSelectedEmployees}
            setIsPopupOpen={setIsPopupOpen}
            />
            <Popup isOpen={isPopupOpen} setOpen={setIsPopupOpen} employees={employees} selectedEmployeesIds={selectedEmployees} />
        </Paper>
    </RootBox>
}

export default Dashboard;
