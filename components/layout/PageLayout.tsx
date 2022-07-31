import Box from '@mui/material/Box'
import MainNav from './MainNav'
import PageFooter from './PageFooter'


export default function PageLayout({children}:{children:any}) {
  return (
    <Box component="article"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight:'100vh',
        backgroundColor:'var(--rsd-background-default,#fff)'
      }}
    >
      <MainNav />
      {children}
      <PageFooter />
    </Box>
  )
}