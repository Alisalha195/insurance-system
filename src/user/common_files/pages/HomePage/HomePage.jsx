
import {useState} from 'react'
import {useNavigate} from 'react-router-dom' 


import { Container, Box  ,Typography, Link, Button} from '@mui/material';
// import  from '@mui/material/Typography';

import Navbar from '../../Layout/Navbar'

const HomePage = () => {

	const navigate = useNavigate()
	const handleNavigateToSignin = () => {
		alert("dgdfgdfgdf")
	}
	const [auth, setAuth] = useState(false)
	return (
		<>
			<Navbar auth={auth} setAuth={setAuth} />
			<Container  maxWidth="1900px" > 
				
				{ auth &&
				 
					<Box sx={{border:"1px solid #666"}}>
						
					</Box>
				}

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
							onClick = {()=> navigate("/signin")}
					>
						signin
					</Button>
					
						
				</Box>
				
			</Container>
		</>
		
	)
}
export default HomePage

