import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', bgcolor: 'primary.main', p: 4 }}
    >
      <Grid item className='box-shadow' xs={3} sx={{ bgcolor: 'white', p: 3, borderRadius: 2, width: {sm: 450}  }}>
        <Typography variant='h5' sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}
