import {useState, useEffect} from 'react';

import {auth, db} from "../../../firebase/firebase";
import {getDoc,setDoc , doc, collection, count, getCountFromServer } from "firebase/firestore"

import AddSections from "./AddSections"

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack,Paper ,MenuList , MenuItem, Icon, Drawer,Alert  ,Box, Toolbar, Typography, Container, Link, Tabs , Tab ,TextField,IconButton , Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

const companiesRef = collection(db,"companies")

const AddCompany = ({ viewCompanyForm , toggleViewCompanyForm, setAddedSuccessAlert , getCompaniesCount}) => {

	const [companyName , setCompanyName] = useState("")
	const [companyField , setCompanyField] = useState("")
	const [companyAddress , setCompanyAddress] = useState("") 
	const [sections , setSections] = useState([])
	const [companyEmployeesCount , setCompanyEmployeesCount] = useState("")
	const [viewSectionForm , setViewSectionForm] = useState(false)
	const [companySections , setCompanySections] = useState([])
	
	const getUserID = () => {
		const userID = auth.currentUser?.uid;
		return userID;
	}

	const InputFieldsValid = () => {
		return !(companyName == "" || companyField=="" || companyAddress =="")
	}
	const saveCompany = async() => {
		event.preventDefault();
		if (InputFieldsValid()) {

			toggleViewCompanyForm(false)
			setAddedSuccessAlert(true)
			setTimeout(()=>{
				setAddedSuccessAlert(false)
			},2000)

			const newCompany = doc(companiesRef)
		    await setDoc(newCompany, {

		      uID : getUserID() ,
		      name : companyName ,
		      field : companyField ,
		      address : companyAddress,
		      sections: sections
		      
		    })
		    getCompaniesCount()
		} else {
			console.log('some fields are not valid')
		}
	}

	const handleClose = () => {
		toggleViewCompanyForm(false);
	};

	const toggleViewSectionForm = (state) => {
		setViewSectionForm(prevstate => state)
	}
	return (
		<>

			<Drawer
				anchor={"left"}
				open={viewCompanyForm}
				
				sx={{color:"#aaa" }}
				onClose={()=>toggleViewCompanyForm( false)}

				PaperProps={{ style: { width: '80%' } }}

			>
				<Box maxWidth="100%"  sx={{alignItems:"center" , m:8}}>
					<Box maxWidth="80%"  sx={{alignItems:"center"}}> 
						<Typography component="h1" variant="h5">
							Add New Company
						</Typography>

						<Grid container component="form" spacing={2} onSubmit={saveCompany} noValidate >
					        <CssBaseline />
					        <Grid item md={4}>
					        	<TextField
					              margin="normal"
					              required
					              fullWidth
					              id="name"
					              label="Name"
					              name="name"
					              
					              autoFocus
					              onChange={(e)=>setCompanyName(e.target.value)}
					            />
					        </Grid>
					        <Grid item md={4}>
					        	<TextField
					              margin="normal"
					              required
					              fullWidth
					              id="field"
					              label="Field"
					              name="field"
					              
					              autoFocus
					              onChange={(e)=>setCompanyField(e.target.value)}
					            />
					        </Grid>
					        <Grid item md={4}>
					        	<TextField
					              margin="normal"
					              required
					              fullWidth
					              id="address"
					              label="Address"
					              name="address"
					              
					              autoFocus
					              onChange={(e)=>setCompanyAddress(e.target.value)}
					            />
					        </Grid>
	
							<Grid item sm={12}>
								<Box>
									
									<IconButton  size="small"  aria-label="add" p={15}

				                     onClick={()=>toggleViewSectionForm(true)}
				                     >
										      
										<Typography variant="h6" sx={{display:"inline"}}>
											Sections 
										
										</Typography>
										<KeyboardArrowRightSharpIcon ml={5} />
										
						               </IconButton>
									<AddSections viewSectionForm={viewSectionForm}
												toggleViewSectionForm={toggleViewSectionForm}
												sections={sections}
												setSections={setSections}
									/>
								</Box>
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
								      variant="contained"
								      sx={{mr:"20px", pt:"2px" , pb:"2px"}}
								    >
								      save
								    </Button>
								</Box>
							</Grid>

				      </Grid>
					</Box>
				</Box>
			</Drawer>
		</>
	)
}
export default AddCompany