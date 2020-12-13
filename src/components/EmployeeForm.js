
import React, {useState} from "react";
import { Grid, Select, TextField, ThemeProvider, withStyles, FormControl, InputLabel, MenuItem, Button } from "@material-ui/core";
import useForm from "./useForm";
import {connect} from "react-redux";
import * as actions from "../actions/Employee";

const styles = theme =>({
    root:{
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        minWidth: 230,
        }
    },
    formControl:{
        //maybe change
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin:{
        margin: theme.spacing(1),
    }


})
const initialFieldValues ={
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    position: '',
    address: ''
}

const EmployeeForm = ({classes, ...props}) => {
    

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    //allows UI select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    //stops label overlapping border
    React.useEffect(() => {
        setLabelWidth(60);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        //below code causes error stopping code running. Issue with 'post' property
        //props.createEmployee(values,()=>{window.alert('inserted.')})
    
    }

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="outlined"
                    className={classes.formControl}>
                        <InputLabel>Position</InputLabel>
                        <Select
                            name="position"
                            value={values.position}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                            >
                                <MenuItem value=""> Select Position</MenuItem>
                                <MenuItem value="Development"> Development</MenuItem>
                                <MenuItem value="Sales"> Sales</MenuItem>
                                <MenuItem value="Management"> Management</MenuItem>
                                <MenuItem value="Other"> Other</MenuItem>

                            </Select>
                    </FormControl>
                     
                    
                  
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                        variant="contained"
                        className={classes.smMargin}
                        
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>    
            </Grid>
        </form>
    );
}

const mapStateToProps = state =>({   
    employeeList: state.Employee.list 
})

const mapActionToProps ={
    createEmployee : actions.create,
    updateEmployee : actions.update
}

export default connect(mapStateToProps, mapActionToProps) (withStyles(styles)(EmployeeForm));