import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import PageContent from '~/components/layout/PageContent';

const Home: NextPage = () => {
  console.log("Home page...frontend")
  return (
    <PageContent
      sx={{
        flex:1
      }}
    >
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          gap: '2rem',
          padding:'3rem',
          backgroundColor:'var(--rsd-primary-main)'
        }}
      >
        <Button
          variant='contained'
          color="primary"
        >
          Primary button
        </Button>
        <Button
          variant='contained'
          color="secondary">
          Secondary button
        </Button>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          gap: '2rem',
          padding:'3rem',
          backgroundColor:'var(--rsd-secondary-main)'
        }}
      >
        <Button
          variant='contained'
          color="primary"
        >
          Primary button
        </Button>
        <Button
          variant='contained'
          color="secondary">
          Secondary button
        </Button>
      </Box>
    </PageContent>
  );
};

export default Home;
