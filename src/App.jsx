import './App.css'
import {useState, useEffect, Suspense,lazy} from 'react';
import {Navigate, Routes , Route} from 'react-router-dom'
// import { auth} from './firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from './user/common_files/pages/HomePage/HomePage'
import Login from './user/common_files/pages/Auth/Login'
import Signup from './user/common_files/pages/Auth/Signup'
import AdminDashboard  from './admin/pages/Dashboard/AdminDashboard'
import User from './user/common_files/User/User'

const BownerDashboard =  lazy(()=> import('./user/buisness_owner/pages/Dashboard/BownerDashboard')) 

// import BownerDashboard  from './user/buisness_owner/pages/Dashboard/BownerDashboard'
import EmpDashboard  from './user/employee/pages/Dashboard/EmpDashboard'

import Company from './user/buisness_owner/Company/Company'
import AddCompany from './user/buisness_owner/Company/AddCompany'
import RemoveCompany from './user/buisness_owner/Company/RemoveCompany'


function App() {

  const auth = getAuth();
  const[authUser, setAuthUser] = useState("")
  const[isLoading, setIsLoading] = useState(true)

  

  const checkAuthUser =  async ()=> {
    

    onAuthStateChanged(auth, (user) => {
      // console.log('not waiting')
      if (user) {
        
        const uid = user.uid;
        setAuthUser(uid)
        localStorage.setItem("loggedinUser", uid)

        console.log(uid)
      } else {
        setAuthUser("")

        console.log("user is signed out")
      }
    })
     
  }

  useEffect(()=>{
    checkAuthUser()

  }, [authUser])

  return (
    <>
    <Suspense >
    
      <Routes>  

        <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/>
        <Route path="/home" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/>
        <Route path="/admin" element={<AdminDashboard /> }/>

        <Route path="/login" element={authUser ?<Navigate to='/' /> :<Login /> }/>
        <Route path="/signup" element={<Signup /> }/>
      	
        <Route path="/B-owner/:id/dashboard" element={
          <Suspense >
            <BownerDashboard  isLoading={isLoading}  
                              setIsLoading={setIsLoading}
                              authUser={authUser}
            /> 
          </Suspense>
        }/>
        <Route path="/emp/dashboard" element={<EmpDashboard /> }/>

      	<Route path="/user/:id" element={<User /> }/>
      	<Route path="/company" element={<Company /> }/>
      	<Route path="/add-company" element={<AddCompany /> }/>
        <Route path="/remove-company" element={<RemoveCompany /> }/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
