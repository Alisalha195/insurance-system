import Employees from './Employees'

import { Box } from '@mui/material';

const Company = () => {
	return (
		<>
			<h2>Employees</h2>
			<Box sx={{ p: 2,color:"#666" , border: '1px solid grey' }}>
				<Employees />
			</Box>
		</>
		
	)
}
export default Company