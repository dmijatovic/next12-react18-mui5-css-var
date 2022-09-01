import { Box } from '@mui/material'
import Link from 'next/link'
import PageContent from './PageContent'

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "With SSR", href: "/with-ssr" },
  { label: "Custom Drag", href:"/custom-drag" },
  { label: "DND kit", href:"/dnd-kit" }
]

export default function MainNav() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        gap: '1rem',
        padding: '2rem 0rem',
        backgroundColor: 'var(--rsd-primary-main,#333)',
        color:'primary.contrastText'
      }}
    >
      <PageContent sx={{
        backgroundColor:'var(--rsd-primary-main)'
      }}>
        {menuItems.map(item => {
          return (
            <Link
              key={item.href}
              href={item.href}
              color="secondary"
              passHref
            >
              <a style={{
                color: 'var(--rsd-primary-contractText,#333)',
                paddingRight: '2rem'
              }}>{item.label}</a>
            </Link>
          )
        })
        }
      </PageContent>
    </Box>
  )
}