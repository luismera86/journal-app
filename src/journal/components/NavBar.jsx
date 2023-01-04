import { AppBar, IconButton, Toolbar } from '@mui/material'

import { MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar position='fixed' sx={{ sm: `calc(100% - ${drawerWidth}px)`, md: `${drawerWidth}px`}}> {/* lo que hacemos es que en pantallas pequeñas small calcule el 100% del ancho de la pantalla menos el drawerWith que va a ocupar el silderbar y en pantallas medianas medium solo descuente el drawerWhit */}
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
