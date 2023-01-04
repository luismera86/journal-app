import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar position='fixed' sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
      {/* lo que hacemos es que en pantallas pequeñas small calcule el 100% del ancho de la pantalla menos el drawerWith que va a ocupar el silderbar */}
      <Toolbar>
        <IconButton color='inherit' edge='start' sx={{mr: 2, display: {sm: 'none'} }}>{/* En pantallas pequeñas no va a aparecer */}
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div' > Journal App</Typography>
          <IconButton color='error'>
            <LogoutOutlined /> 
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
