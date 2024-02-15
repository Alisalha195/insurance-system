import {useState, useEffect, Suspense,lazy} from 'react';
import {getDoc,getDocs, doc, query ,where,collection, count, getCountFromServer } from "firebase/firestore"
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

import {getAllCompanies,getCompanyByName,getCompanyDocByOwnerID,getAllCompaniesCount} from "../../../../assets/CompaniesHelpers";

// import AddCompany from '../../Company/AddCompany'
// import AddEmployee from '../../Company/AddEmployee'
const AddCompany =  lazy(()=> import('../../Company/AddCompany')) 
const AddEmployee =  lazy(()=> import('../../Company/AddEmployee')) 


const defaultTheme = createTheme();


const companiesRef = collection(db , "companies")
const employeesRef = collection(db , "Employees")



const BownerDashboard = ({isLoading,setIsLoading,authUser})=> {
  
  const userID = authUser 
  const[companiesCount, setCompaniesCount] = useState(" ")
  const[employeesCount, setEmployeesCount] = useState(" ")
  const[viewCompanyForm, setViewCompanyForm] = useState(false)
  const[viewEmployeeForm, setViewEmployeeForm] = useState(false)
  const[addedSuccessAlert , setAddedSuccessAlert] = useState(false)

  const [companiesList , setCompaniesList] = useState([])
  const [selectedCompany, setSelectedCompany] = useState("not selected")


  const getCompaniesFromDB = async() => {
   
    try {

    // const results = await getDocs(companiesRef)

      const q = query(companiesRef , where("uID","==",userID) )

      const results = await getDocs(q)

      // console.log(results)
      const fiteredResults = []
      results.forEach((doc) => {
      
        const Company = {
          companyID : doc.id ,
          companyName :  doc.data().name
        }

        fiteredResults.push(Company)
      }) 

      setCompaniesList(fiteredResults)
      
    } catch(err) {
       console.error(err);
    }

    // const results = await getDocs(companiesRef)
     
  }

  useEffect(() => {

    // console.log("Testing :",getAllCompanies())
    // const s = getAllCompaniesCount()
    // console.log(s)
    if(!isLoading)
      getCompaniesFromDB()

    
  },[isLoading])

//   useEffect(()=>{
//     const getCompaniesFromDB = async () => {
//       try {
//         const q = query(companiesCollectionRef , where("userID","==",userID) )
//         const data = await getDocs(q)
//         data.forEach((doc)=> {
//           // console.log(doc.id, doc.data().title)
//         })
//         // const filteredData = data.docs.map((doc)=>({...doc.data() , id: doc.id }))
// 
//       } catch(err) {
//         
//         console.error(err);
//       }
//       
//     }
//     getCompaniesFromDB()
//   }, [])

  useEffect(()=>{
    if(companiesList.length > 0 )
      setSelectedCompany(companiesList[0].companyName)
  },[companiesList])

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
      
    },2000)
    
    
  },[])

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

      // setCompaniesCount (getAllCompaniesCount());
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

  if(isLoading) 
    return (
      <Box>
        <Typography variant="h2">Now Loading ...</Typography>
      </Box>
    )
  return ( userID ? 
    <Suspense >
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        
           
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

           {/* <Suspense fallback={<p>Loading....</p>}> */}
           <AddEmployee viewEmployeeForm={viewEmployeeForm}
                        toggleViewEmployeeForm = {toggleViewEmployeeForm}
                        setAddedSuccessAlert={setAddedSuccessAlert}
                        getEmployeesCount={getEmployeesCount}
                        companiesList={companiesList}
                        selectedCompany={selectedCompany}
                        setSelectedCompany={setSelectedCompany}
                        userID={userID}
                           />

           {/* </Suspense> */}
         </Stack>
         </Box>

      </main>

      {addedSuccessAlert && 
        
          <Box width="20%" ml={5} sx={{position:"absolute" , bottom:"50px"}}>
            <Alert severity="success" sx={{color:"#229320",transition:"all 2s ease-out"}}>Added Successfully</Alert>
          </Box>
        
      }
    </ThemeProvider>
    </Suspense>

    : 
      <Suspense fallback={<h3>Loading...</h3>}>
        <NotAuth />
      </Suspense>

  );
}

export default BownerDashboard