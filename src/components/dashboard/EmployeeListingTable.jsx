import { Box, Grid, Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const EmployeeTableContainer = styled(Grid)(() => ({
      padding: 10
}));

const TableHeadingSection = styled(Grid)(() => ({
      marginTop: 20,
      marginBottom: 10
}));

const BulkEditButton = styled(Button)(() => ({
      marginLeft: 'auto !important'
}));


const TableBox = styled(Box)(() => ({
      height: 400
 }));

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 265,
    },
    {
      field: 'totalAmountPaidRegular',
      headerName: 'Total Amount Paid (Regular Hours)',
      type: 'number',
      width: 270
    },
    {
        field: 'totalAmountPaidOvertime',
        headerName: 'Total Amount Paid (Overtime)',
        type: 'number',
        width: 240
      }
];

const EmployeeListingTable = ({ employees, isLoading, selectedEmployees, setSelectedEmployees, setIsPopupOpen }) => {

    const onSelectChange = (row) => {
        setSelectedEmployees(row);
    }

    return <EmployeeTableContainer>
    <TableHeadingSection container>
    <Typography variant="h6" gutterBottom>
        Employees
    </Typography>
    <BulkEditButton 
    variant="contained" 
    startIcon={<ModeEditIcon />} 
    disabled={!selectedEmployees.length}
    onClick={()=>{
      setIsPopupOpen(true);
    }}
    >
        Bulk Edit
    </BulkEditButton>
    </TableHeadingSection>
    <TableBox>
    <DataGrid
    rows={employees}
    columns={columns}
    pageSize={10}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
    disableColumnMenu={true}
    loading={isLoading}
    onSelectionModelChange={onSelectChange}
  />
  </TableBox>
    </EmployeeTableContainer>
}

export default EmployeeListingTable;