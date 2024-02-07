
import {useState} from 'react'
import {useNavigate} from 'react-router-dom' 


import { Container, Box  ,Typography, Link, Button} from '@mui/material';
// import  from '@mui/material/Typography';

import Navbar from '../../Layout/Navbar'

const HomePage = ({user}) => {

	const navigate = useNavigate()

	const handleNavigateToLogin = () => {
		console.log(user)
		// if(checkRememberUserLogedin()) {
		// 	console.log("Loged in already")
		// 	navigate("/home")
		// }
		// else
		// 	navigate("/login")
	}

	const checkRememberUserLogedin = () => {
	    // const rememberUserLogedin = localStorage.getItem("rememberUserLogedin")
	    // return rememberUserLogedin
	    return true;
	      
	}
	// const [auth, setAuth] = useState(false)
	return (
		<>
			<Navbar  />
			<Container  maxWidth="1900px" > 
				
				<Box mt={4} justifyContent="center"
				     sx={{flexGrow: 1 ,
				          border:"2px solid #ccc",
				          borderRadius :"5px",
				          backgroundColor: "#eee",
				          color:"#444",

				     }}
			    >
					<Typography variant="h5" 
							    textAlign="center"
								sx={{fontWeight :"600"}}
				    >
						this is the application home page , <br/>
						the information in this page is general <br/>
						intro about the app .
					</Typography>
					
					<Button variant="outlined"
							onClick = {()=>  handleNavigateToLogin()}
					>
						Login
					</Button>
					
						
				</Box>
				
			</Container>
		</>
		
	)


}
export default HomePage

