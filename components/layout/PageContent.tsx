import { SxProps, Theme } from '@mui/material';
import Container from '@mui/material/Container';

export default function PageContent({children,sx}:{children:any,sx?:SxProps<Theme>}) {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        backgroundColor: 'var(--rsd-background-default,#fff)',
        ...sx
      }}
    >
      {children}
    </Container>
  )
}