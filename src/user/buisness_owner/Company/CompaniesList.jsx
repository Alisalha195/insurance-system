
import {useState , useEffect} from 'react'

import Company from "./Company" 

import {updateProfile} from "firebase/auth";

import {db, auth} from "../../../firebase/firebase"
import {getDocs, collection,  deleteDoc, deleteField ,query , where, doc , setDoc , addDoc, updateDoc , serverTimestamp } from "firebase/firestore"

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Box, Toolbar, Typography, Container, Link , ListSubheader, List, ListItemButton , ListItem ,ListItemIcon ,ListItemText ,Collapse ,} from '@mui/material';

import Groups3Icon from '@mui/icons-material/Groups3';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';

import InboxIcon  from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon   from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const CompaniesList = ({userID}) => {

  const [companies , setCompanies] = useState([])

  const companiesCollectionRef = collection(db, "companies")

  const testSetFun = async () => { 

    console.log("db :" , db)

    
    // const newCompanyID = doc(companiesCollectionRef)

      // await setDoc(newCompanyID, {Title : "dfdfgdfgdfg"})
      // await updateDoc(doc(companiesCollectionRef , "xJ0sDC4mwYmEwZEfrPgM") , {
      //  name: deleteField()
      // }  )

      // await deleteDoc(doc(companiesCollectionRef, "j0vWXhj0jdtaT2dv7kBb"))
  }


// 	const companies = [
//     {
//       id: "1" ,
//       name: "Ecom" , 
//       address: "Damascus" ,
//       rank: "4" ,
//       totalNumberOfEmployees: "35" ,
//       sections : [
//         {
//           name: "IT" ,
//           NumberOfEmployees: "24" ,
// 
//         } , 
//         {
//           name: "Management" ,
//           NumberOfEmployees: "11" ,
// 
//         } 
//       ] ,
//     },
//     {
//       id: "2" ,
//       name: "Zera" , 
//       address: "Aleppo" ,
//       rank: "3" ,
//       totalNumberOfEmployees: "40" ,
//       sections : [
//         {
//           name: "IT" ,
//           NumberOfEmployees: "22" ,
// 
//         } , 
//         {
//           name: "Management" ,
//           NumberOfEmployees: "18" ,
// 
//         }  
// 
//       ] ,
//     } 
//   ]

  useEffect(()=>{
    const getCompaniesFromDB = async () => {
      try {
        const data = await getDocs(companiesCollectionRef)
        const filteredData = data.docs.map((doc)=>({...doc.data() , id: doc.id }))
        // console.log(filteredData)
        // const ref = doc(db, "companies","fTgAf9Xn4F0YNmyQ5lp6")
        // console.log(ref.data())
        setCompanies(filteredData)

      } catch(err) {
        
        console.error(err);
      }
      
    }

    getCompaniesFromDB()   
  } , [])

  useEffect(()=>{
    const getCompaniesFromDB = async () => {
      try {
        const q = query(companiesCollectionRef , where("userID","==",userID) )
        const data = await getDocs(q)
        data.forEach((doc)=> {
          // console.log(doc.id, doc.data().title)
        })
        // const filteredData = data.docs.map((doc)=>({...doc.data() , id: doc.id }))
        // console.log(filteredData)
        // setCompanies(filteredData)

      } catch(err) {
        
        console.error(err);
      }
      
    }
    getCompaniesFromDB()
  }, [])


  

	return (
		<Container sx={{ py: 8 }} maxWidth="xl">
      <Box my={3}>
        <Button variant="outlined" onClick={() => testSetFun()}>
          change doc
        </Button>
      </Box>
      <Grid container spacing={3}>
        
        {/* {companies.map((company) => ( */}
        {/*   <Grid item key={company.name} xs={12} sm={6} md={3}> */}
        {/*     <Company key={company.name} company={company} /> */}
        {/*   </Grid> */}
        {/* ))} */}
        
      </Grid>
    </Container>
	)
}
 
export default CompaniesList