
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ElderlyIcon from '@mui/icons-material/Elderly';

const Logo = () => {
	return (
		<Link href="/home" color="#fff">
			<IconButton
	            size="large"
	            edge="end"
	            color="inherit"
	            aria-label="menu"
	            sx={{ mr: 1 }}
		        >
	            <ElderlyIcon />
	            <Typography     variant="h6"
					            noWrap
					            sx={{
					              mr: 2,
					              display: { xs: 'none', md: 'flex' },
					              fontFamily: 'monospace',
					              fontWeight: 700,
					              letterSpacing: '.3rem',
					              color: 'inherit',
					              textDecoration: 'none',
					            }}
                >
		            Insuraly
				</Typography>
            </IconButton>
        </Link>
	)
}

export default Logo