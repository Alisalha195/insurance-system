import {useState, useEffect} from 'react';
import {getDoc, doc, collection, count, getCountFromServer } from "firebase/firestore"
import {auth, db} from "../../../../firebase/firebase";

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Drawer,Alert ,Collapse ,Fade ,Box, Toolbar, Typography, Container, Link, Tabs , Tab ,IconButton } from '@mui/material';


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import Logo from '../../../../assets/Logo'
import Navbar from '../../../common_files/Layout/Navbar' 
import CompaniesList from '../../Company/CompaniesList'
import NotAuth from "../../../common_files/pages/Auth/NotAuth"
import AddCompany from '../../Company/AddCompany'
import AddEmployee from '../../Company/AddEmployee'


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const companiesRef = collection(db , "companies")
const employeesRef = collection(db , "Employees")



const BownerDashboard = ()=> {
  
   const userID = auth.currentUser?.uid 
   const[companiesCount, setCompaniesCount] = useState(" ")
   const[employeesCount, setEmployeesCount] = useState(" ")
   const[viewCompanyForm, setViewCompanyForm] = useState(false)
   const[viewEmployeeForm, setViewEmployeeForm] = useState(false)
   const [addedSuccessAlert , setAddedSuccessAlert] = useState(false)

  const toggleViewCompanyForm = (state)  => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setViewCompanyForm(prevstate => state)
  }

  const toggleViewEmployeeForm = (state)  => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setViewEmployeeForm(prevstate => state)
  }

  const getCompaniesCount = async () => {
      const snapshot = await getCountFromServer(companiesRef);

      setCompaniesCount (snapshot.data().count);
  }

  const getEmployeesCount = async () => {
      const snapshot = await getCountFromServer(employeesRef);

      setEmployeesCount (snapshot.data().count);
  }
  useEffect(()=>{
    
    getCompaniesCount()
  }, [])

  useEffect(()=>{
    
    getEmployeesCount()
  }, [])

  return ( userID ? 
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        
           {/* <CompaniesList  userID={userID}/> */}
        <Box mt={5}>  
         <Stack direction="row" spacing={5} justifyContent="center">

           {/* Companies Element  */}
           <Box p={5} sx={{backgroundColor:"#2c3c54" , color:"#fff", borderRadius:"8px"}}>
             <Typography variant="h4">Companies</Typography>
             <Box sx={{textAlign:"center"}}>
               <IconButton sx={{color:"#fff"}}>
                 {companiesCount}
               </IconButton>
             </Box>
             
             <Box width="100%" > 
               <Fab size="small" color="primary" aria-label="add" 
                     onClick={()=>toggleViewCompanyForm(true)}>
                <AddIcon />
               </Fab>
             </Box>

            <AddCompany viewCompanyForm={viewCompanyForm}
                        toggleViewCompanyForm = {toggleViewCompanyForm}
                        setAddedSuccessAlert={setAddedSuccessAlert}
                        getCompaniesCount ={getCompaniesCount}  />

           </Box>

           {/* Employees Element  */}
           <Box p={5} sx={{backgroundColor:"#4e2c42", color:"#fff",  borderRadius:"8px"}}>
             <Typography variant="h4">Employees</Typography>
             <Box sx={{textAlign:"center"}}>
               <IconButton sx={{color:"#fff"}}>
                 {employeesCount}
               </IconButton>
             </Box>
             <Box width="100%" > 
               <Fab size="small" color="primary" aria-label="add" 
                     onClick={()=>toggleViewEmployeeForm(true)}>
                <AddIcon />
               </Fab>
             </Box>
           </Box>
           <AddEmployee viewEmployeeForm={viewEmployeeForm}
                        toggleViewEmployeeForm = {toggleViewEmployeeForm}
                        setAddedSuccessAlert={setAddedSuccessAlert}
                        getEmployeesCount={getEmployeesCount}
                           />
         </Stack>
         </Box>

         
      </main>  
      {addedSuccessAlert && 
        
          <Box width="20%" ml={5} sx={{position:"absolute" , bottom:"50px"}}>
            <Alert severity="success" sx={{color:"#229320",transition:"all 2s ease-out"}}>Added Successfully</Alert>
          </Box>
        
      }
    </ThemeProvider>
    : <NotAuth />

  );
}

export default BownerDashboard