import { Box } from '@mui/material'
import Link from 'next/link'

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "With SSR", href:"/with-ssr" }
]

export default function MainNav() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        gap: '1rem',
        padding: '2rem',
        backgroundColor: 'var(--rsd-accent-main,#333)',
        color:'primary.contrastText'
      }}
    >
      {menuItems.map(item => {
        return (
          <Link
            key={item.href}
            href={item.href}
            color="secondary"
            passHref
          >
            <a>{item.label}</a>
          </Link>
        )
      })

      }
    </Box>
  )
}