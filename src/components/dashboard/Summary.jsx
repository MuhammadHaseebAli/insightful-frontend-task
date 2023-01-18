import { Grid } from "@mui/material";
import Card from "./Card";

const Summary = ({ isLoading, dashboardSummary }) => {

    return <Grid container>
        <Card cardText='Total Employees' cardValue={dashboardSummary.totalEmployees} isLoading={isLoading} color="#625CE0" />
        <Card cardText='Total Clocked in Time' cardValue={dashboardSummary.totalClockedInTime} isLoading={isLoading} color="#FAB912" />
        <Card cardText='Total Amount Paid' cardValue={dashboardSummary.totalAmountPaidRegular} isLoading={isLoading} color="#F56A83" />
        <Card cardText='Total Overtime Amount Paid' cardValue={dashboardSummary.totalAmountPaidOvertime} isLoading={isLoading} color="#5BB9E1" />
    </Grid>
}

export default Summary;