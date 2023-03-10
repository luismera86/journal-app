import { Grid, Typography } from '@mui/material'

import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', bgcolor: 'primary.main', borderRadius: 3 }}
    >
      <Grid item>
        <StarOutline  sx={{fontSize: 100, color: 'white'}}/>
      </Grid>
      <Grid>
        <Typography color='white' variant='h5'>Seleccione o crea una entrada</Typography>
      </Grid>
    </Grid>
  )
}
