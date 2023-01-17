import {useState, useEffect, useRef} from 'react';
import {
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle
} from "@mui/material";
import EditEmployeeSection from './EditEmployeeSection';

const Popup = ({isOpen, setOpen, employees, selectedEmployeesIds}) => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = useRef(null);
    useEffect(() => {
      if (isOpen) {
        // const { current: descriptionElement } = descriptionElementRef;
        // if (descriptionElement !== null) {
        //   descriptionElement.focus();
        // }

        let filteredEmployees =  employees.filter((emp)=>{
            return selectedEmployeesIds.includes(emp.id);
        });

        setSelectedEmployees(filteredEmployees);
      }
    }, [isOpen, setSelectedEmployees, selectedEmployeesIds, employees]);

    return <Dialog
    open={isOpen}
    onClose={handleClose}
    scroll={'paper'}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    maxWidth="lg"
  >
    <DialogTitle id="scroll-dialog-title">Update Employee(s) Data</DialogTitle>
    <DialogContent dividers={true}>
      <DialogContentText
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
      >
      {selectedEmployees.map((item)=>{
        return <EditEmployeeSection employee = {item}/>;
      })}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Save</Button>
    </DialogActions>
  </Dialog>
}

export default Popup;
