import './App.css'
import {Routes , Route} from 'react-router-dom'
import HomePage from './user/common_files/HomePage/HomePage'
import Dashboard from './admin/pages/Dashboard/Dashboard'
import User from './user/common_files/User/User'
import Company from './user/buisness_owner/Company/Company'
import AddCompany from './user/buisness_owner/Company/AddCompany'
import RemoveCompany from './user/buisness_owner/Company/RemoveCompany'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage /> }/>
      	<Route path="/admin" element={<Dashboard /> }/>
      	<Route path="/user/:id" element={<User /> }/>
      	<Route path="/company" element={<Company /> }/>
      	<Route path="/add-company" element={<AddCompany /> }/>
        <Route path="/remove-company" element={<RemoveCompany /> }/>
      </Routes>
    </>
  )
}

export default App
