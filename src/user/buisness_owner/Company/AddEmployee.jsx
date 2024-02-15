import {useState, useEffect} from 'react';

import {auth, db} from "../../../firebase/firebase";
import {getDoc,setDoc,getDocs , doc, collection, count, getCountFromServer } from "firebase/firestore"

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Drawer,Alert  ,Box, Toolbar, Typography, Container, Dialog, DialogActions ,DialogContent,DialogContentText, Link, Tabs,DialogTitle , Tab ,TextField,FormControl,InputLabel,Select,MenuItem } from '@mui/material';

import CompaniesHelpers from "../../../assets/CompaniesHelpers";
import {getAllCompanies,beginReadingCompanyDocByName,getCompanyByName,getCompanyByOwnerID} from "../../../assets/CompaniesHelpers";

import {wait} from "../../../assets/timeMethods"
const employeesRef = collection(db,"Employees")  


const sevices = [
	{
		companyID : "id1" ,
		salary: "3000" ,
		startDate: "15/12/2020" ,
		endDate: "15/12/2020" ,
		isPaid:false,
		isFinished:false ,
		
	} , 
	{

	}
]

const AddEmployee = ({viewEmployeeForm , toggleViewEmployeeForm, setAddedSuccessAlert , getEmployeesCount ,companiesList,selectedCompany,setSelectedCompany,userID}) => {

	
	const [firstName , setFirstName] = useState("")
	const [lastName , setLastName] = useState("")
	const [email , setEmail] = useState("")
	const [password , setPassword] = useState("")
	// const [services , setEmployeeName] = useState([])
	

	
	const handleCompanySelection = (event) => {
		// console.log("Testing : ",getAllCompanies())

		// beginReadingCompanyDocByName(userID,"Dorea")
		// let c = "waiting"
		// 
		// setTimeout(()=> {
		//     c = getCompanyByName()
		// 	console.log("company is : "  ,c )
		// },3000)

		
		setSelectedCompany(event.target.value)
	}
	const handleClickOpen = () => {
		toggleViewEmployeeForm(true);
	};

	const handleClose = () => {
		toggleViewEmployeeForm(false);
	};

	const InputFieldsValid = () => {
		return !(firstName == "" || lastName=="")
	}
	const saveEmployee = async (event) => {

		event.preventDefault();
		if(InputFieldsValid()) {
			console.log('saved')
			toggleViewEmployeeForm(false)
			setAddedSuccessAlert(true)
			setTimeout(()=>{
				setAddedSuccessAlert(false)
			},2000)
			
			const newEmployee = doc(employeesRef)
		    await setDoc(newEmployee, {

		      // uID : getUserID() ,
		      firstName : firstName ,
		      lastName : lastName ,
		      company : selectedCompany
		      
		    })
		    getEmployeesCount()
		     
		    // console.log(firstName);
		    handleClose();
		} else {
			console.log('some inputs are not valid')
		}

	}
	return (
		<>

			<Dialog

		        maxWidth="xl"
		       
				fullWidth={true}
				open={viewEmployeeForm}
				onClose={handleClose}
// 				PaperProps={{
// 
// 				  // onSubmit: () => saveEmployee(event)
// 				  
// 				}}

				sx={{backgroundColor:"ddd" }} 
			>
			<DialogTitle>Add Employee</DialogTitle>
			<DialogContent>
			  <DialogContentText>
			    choose a company before adding new employee 
			  </DialogContentText>
			  <Box ml={2}>
			  		<FormControl fontSize="large" sx={{width:"20%", fontSize:"10px"}}>
                    <InputLabel id="Company">Company</InputLabel>
                    <Select
                      labelId="Company"
                      id="simple-select"
                      value={selectedCompany}
                      label="Company"
                      onChange={handleCompanySelection}
                      style={{color: "#555"}}
                    >
                    
                    {

                    	companiesList && companiesList.map((item,index) => { 

                    		return <MenuItem key={index} 
				                    		 value={item.companyName}
		                    		>
		                    		  {item.companyName}
		                    	   </MenuItem>
                    		 
                    	})
                    	
                    }
                    
                    </Select> 

                    
                  </FormControl>

			  	</Box>
			  	
				<Container component="main" maxWidth="xl" >
				<CssBaseline />

				</Container>
				<Grid container spacing={2} component='form'  onSubmit={saveEmployee} noValidate sx={{ mt: 1 }}>
					<Grid item xs={12} md={4}>
						
					    <TextField
					      margin="normal"
					      required
					      fullWidth
					      id="firstName"
					      label="First Name"
					      name="firstName"
					      
					      autoFocus
					      onChange={(e)=>setFirstName(e.target.value)}
					    />
				    </Grid>
				    <Grid item xs={12} md={4}>
					    <TextField
					      margin="normal"
					      required
					      fullWidth
					      id="lastName"
					      label="Last Name"
					      name="lastName"
					      
					      autoFocus
					      onChange={(e)=>setLastName(e.target.value)}
					    />
					</Grid>  
					 
					    
					  
					  
					<Grid item sm={12}>
						
						<Box width="50%" alignItems="center">
							<Button variant="outlined" 
								onClick={handleClose} 
								sx={{mr:"20px", pt:"2px" , pb:"2px"}}
							>
								cancel
							</Button>
						
						
							<Button
						      type="submit"
						      // fullWidth
						      variant="contained"
						      sx={{mr:"20px", pt:"2px" , pb:"2px"}}
						    >
						      save
						    </Button>
						</Box>
						
						
					
					</Grid>
				</Grid>
				
			</DialogContent>
			
			
			  
			  
			
			</Dialog>
		</>
	)
}
export default AddEmployee