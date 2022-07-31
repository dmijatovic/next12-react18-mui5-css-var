import Box from '@mui/material/Box';
import PageContent from './PageContent';

export default function PageFooter() {
  return (
    <Box component="footer"
      sx={{
        backgroundColor: 'var(--rsd-secondary-main)',
        color: 'var(--rsd-secondary-contrastText)',
      }}
    >
      <PageContent sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: 'var(--rsd-secondary-main)',
        color: 'var(--rsd-secondary-contrastText)',
        padding:'2rem 0rem'
      }}>
        <div>
          Left footer section
        </div>
        <div>
          Right footer section
        </div>
      </PageContent>
    </Box>
  )
}