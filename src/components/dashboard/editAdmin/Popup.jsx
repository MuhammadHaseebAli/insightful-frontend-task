import {useState, useEffect, useRef, memo} from 'react';
import {
    Button, 
    CircularProgress, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle
} from "@mui/material";
import EditEmployeeSection from './EditEmployeeSection';
import { useDispatch, useSelector } from 'react-redux';
import { SaveEmployeesData } from '../../../redux/actionCreators';

const Popup = ({isOpen, setOpen, employees, selectedEmployeesIds}) => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const changeEmployeesData = useSelector(state => state.editEmployee);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSave = () => {
      setIsLoading(true);

      dispatch(SaveEmployeesData(changeEmployeesData));
      
      //putting this to mock API calling experience
      setTimeout(()=>{
        setIsLoading(false);
        setOpen(false);
      },3000);

    }

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
    <Button variant="contained" disabled={isLoading} onClick={handleClose}>Cancel</Button>
      <Button variant="contained" disabled={isLoading} onClick={handleSave}>{isLoading && <CircularProgress size={20} />}Save</Button>
    </DialogActions>
  </Dialog>
}

export default memo(Popup);
