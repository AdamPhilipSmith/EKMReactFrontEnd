import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/Employee";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,withStyles } from "@material-ui/core";
import EmployeeForm from "./EmployeeForm";
import { CallMissedSharp } from "@material-ui/icons";


const styles = theme =>({
    root:{
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }      
    },
    paper:{
        // maybe change
        margin: theme.spacing(3),
        padding:theme.spacing(3)
    }
})

const Employees = ({classes, ...props}) => {
   // const [x,setX] = useState(0)
    //setX(5)

    //useEffect(()=>{
        //props.fetchAllEmployees()
    //},[])


    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <EmployeeForm />        
            </Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.EmployeeList.map((record,index)=>{
                                    return(<TableRow key={index} hover>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.position}</TableCell>
                                    </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>         
            </Grid>
        </Grid>
        </Paper>
            
     );
}

const mapStateToProps = state =>({
    
        EmployeeList: state.Employee.list 
})

const mapActionToProps ={
    fetchAllEmployees : actions.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles) (Employees));