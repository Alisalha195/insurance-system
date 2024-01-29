import {useState} from 'react'

import Employees from './Employees'

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Box, Toolbar, Typography, Container, Link , ListSubheader, List, ListItemButton , ListItem ,ListItemIcon ,ListItemText ,Collapse ,} from '@mui/material';

import Groups3Icon from '@mui/icons-material/Groups3';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';



import InboxIcon  from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon   from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


const Company = ({company}) => {
	

	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
	
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://source.unsplash.com/random?wallpapers"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {company.name}
            </Typography>


            <List
              sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}
              component="div"
              aria-labelledby="nested-list-subheader"
                
            >
              <ListItem>
                <ListItemIcon>
                  <Groups3Icon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
                <ListItemText primary={company.totalNumberOfEmployees} />
              </ListItem>


              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <VerticalSplitIcon />
                </ListItemIcon>
                <ListItemText primary="Sections" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                {
                  company.sections.map((section) => (
                    <ListItem key={section.name} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        
                      </ListItemIcon>
                      <ListItemText primary={section.name} />
                    </ListItem>
                  ))
                }

                  
                </List>
              </Collapse>
            </List>

          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
    
	
	)
}
export default Company