import { Divider, Drawer, Toolbar, Typography } from '@mui/material'

import { Box } from '@mui/system'

export const SideBar = ({ drawerWhit = 240 }) => {
  return (
    /* documentación de flex-shrink https://developer.mozilla.org/es/docs/Web/CSS/flex-shrink#:~:text=La%20propiedad%20CSS%20flex%2Dshrink,de%20su%20contenedor%20flex%20container.
     */
    <Box component='nav' sx={{ width: { sm: drawerWhit }, flexShrink: { sm: 0 } }}>
      <Drawer variant='permanent' open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWhit } }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Luis Mera
          </Typography>
        </Toolbar>
        <Divider />
      </Drawer>
    </Box>
  )
}
