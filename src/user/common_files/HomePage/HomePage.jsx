
import {useState} from 'react'


import { Container, Box } from '@mui/material';
import Navbar from '../Layout/Navbar'

const HomePage = () => {
	const [auth, setAuth] = useState(false)
	return (
		<>
			<Navbar auth={auth} setAuth={setAuth} />
			<Container  maxWidth="1900px" > 
				
				{
					auth && 
						<Box sx={{border:"1px solid #666"}}>
							dd
						</Box>
				}
				
			</Container>
		</>
		
	)
}
export default HomePage

