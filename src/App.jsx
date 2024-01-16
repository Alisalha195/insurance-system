import './App.css'
import {Routes , Route} from 'react-router-dom'
import HomePage from './user/common_files/pages/HomePage/HomePage'
import Login from './user/common_files/pages/Auth/Login'
import Signup from './user/common_files/pages/Auth/Signup'
import {Dashboard as AdminDashboard} from './admin/pages/Dashboard/Dashboard'
import User from './user/common_files/User/User'

import {Dashboard as BownerDashboard} from './user/buisness_owner/pages/Dashboard/Dashboard'
import {Dashboard as EmpDashboard} from './user/employee/pages/Dashboard/Dashboard'


import Company from './user/buisness_owner/Company/Company'
import AddCompany from './user/buisness_owner/Company/AddCompany'
import RemoveCompany from './user/buisness_owner/Company/RemoveCompany'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/admin" element={<AdminDashboard /> }/>

        <Route path="/login" element={<Login /> }/>
        <Route path="/signup" element={<Signup /> }/>
      	
        <Route path="/B-owner/dashboard" element={<BownerDashboard /> }/>
        <Route path="/emp/dashboard" element={<EmpDashboard /> }/>

      	<Route path="/user/:id" element={<User /> }/>
      	<Route path="/company" element={<Company /> }/>
      	<Route path="/add-company" element={<AddCompany /> }/>
        <Route path="/remove-company" element={<RemoveCompany /> }/>
      </Routes>
    </>
  )
}

export default App
