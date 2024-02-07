import {useState, useEffect} from 'react';

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack,Paper ,MenuList , MenuItem, Icon, Drawer,Alert  ,Box, Toolbar, Typography, Container,Dialog,DialogTitle,DialogContent, Link, Tabs , Tab ,TextField,IconButton,List , ListItem , ListItemText, ListItemButton , Fab } from '@mui/material';

import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


const AddSections = ({viewSectionForm,toggleViewSectionForm,sections,setSections}) => {


	// const[sections , setSections] = useState([])
	// const[sectionsAreEmpty , setSectionsAreEmpty] = useState(true)
	const[sectionName , setSectionName] = useState("")


	const sectionNameisValid = () => {
		return (sectionName != "")
	}
	const addSectionToList = () => {
		if(sectionNameisValid()) {
			const newSection = {
			id:sections.length,
			name:sectionName
		}
		
		setSections([...sections , newSection])
		setSectionName("")
		}
		
	}
	const handleClose = () => {
		toggleViewSectionForm(false);
	};

	const saveSection = () => {
		console.log('section saved')
	}

	const removeSectionFromList = (id) => {
		console.log('removed!')
		setSections(
			sections.filter((section) => (section.id != id))
		)
	}
	
	return(
		<>
			<Dialog

		        maxWidth="xl"
		       
				fullWidth={true}
				open={viewSectionForm}
				onClose={handleClose}

				sx={{backgroundColor:"ddd" }} 
			>
			<DialogTitle sx={{color:"#555" }}>Add Sections To Company</DialogTitle>
			<DialogContent>
			  {/* <DialogContentText> */}
			  {/*   choose a company before adding new employee  */}
			  {/* </DialogContentText> */}
				<Container component="main" maxWidth="xl" >
				<CssBaseline />

				</Container>
				<Grid container spacing={2} component='form'  onSubmit={saveSection} noValidate sx={{ mt: 1 }}>
					<Grid item xs={12} md={4}>
						
					    <TextField
					      margin="normal"
					      required
					      fullWidth
					      id="sectionName"
					      label="New Section Name"
					      name="sectionName"
					      value={sectionName}
					      autoFocus
					      onChange={(e)=>setSectionName(e.target.value)}
					    />
				    </Grid>
				     
					<Grid item xs={12} md={2} sx={{lineHeight:3}}>
					<IconButton onClick={()=>addSectionToList()}>
						<Typography variant="h6">
							add
						</Typography>
						<KeyboardArrowRightSharpIcon ml={5} />
						
					</IconButton>
					</Grid>

					{/* Sections Menu */}
					<Grid item xs={12} md={6}>


						<List
					      sx={{
					        width: '100%',

					        maxWidth: 380,
					        bgcolor: 'background.paper',
					        position: 'relative',
					        overflow: 'auto',
					        maxHeight: 300,
					        minHeight: 300,
					        border :"1px solid #eee"
					        
					      }}
					      
					    >
					      { (sections.length < 1) 
					      ? 
					       <ListItemText sx={{color:"#aaa", textAlign:"center"}} primary="No Sections" />
					      :sections.map((section) => (
					       	          
					              <ListItem key={section.id}
						 //              secondaryAction={
						 //              <CloseSharpIcon
						 //                edge="end"
       // 
						 //              />
						 //            }
						            
					              >
					                
					              {/* <ListItemButton> */}
						              
						              <ListItemText sx={{width:"80%"}} primary={section.name} />
						              <ListItemButton onClick={()=>removeSectionFromList(section.id)}>
							              <CloseSharpIcon fontSize="small"/>
						            </ListItemButton>
					              </ListItem>

					      )) }
					    </List>
				    </Grid>

					 
					{/* Control Buttons */}
					<Grid item sm={12}>
						
						<Box width="50%" alignItems="center">
							<Button variant="outlined" 
								onClick={handleClose} 
								sx={{mr:"20px", pt:"2px" , pb:"2px"}}
							>
								Done
							</Button>
						
							{/* <Button */}
						 {/*      type="submit" */}
						 {/*       */}
						 {/*      // fullWidth */}
						 {/*      variant="contained" */}
						 {/*      sx={{mr:"20px", pt:"2px" , pb:"2px"}} */}
						 {/*    > */}
						 {/*      Done */}
						 {/*    </Button> */}
						</Box>
					</Grid>
				</Grid>
				
			</DialogContent>

			</Dialog>
		</>
	)
}

export default AddSections