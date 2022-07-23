// SPDX-FileCopyrightText: 2021 - 2022 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2021 - 2022 dv4all
//
// SPDX-License-Identifier: Apache-2.0

import {MouseEvent, ChangeEvent} from 'react'
import Head from 'next/head'
import {GetServerSidePropsContext} from 'next'
import {useRouter} from 'next/router'

import TablePagination from '@mui/material/TablePagination'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import {app} from '../config/app'
import {rowsPerPageOptions} from '../config/pagination'
import Searchbox from '../components/form/Searchbox'

const pageTitle = `Projects | ${app.title}`

export default function ProjectsIndexPage({count,page,rows,projects=[]}:
  {count:number,page:number,rows:number,projects:any[]
}) {
  // use next router (hook is only for browser)
  const router = useRouter()
  // use media query hook for small screen logic
  const smallScreen = useMediaQuery('(max-width:600px)')
  // adjust grid min width for mobile
  const minWidth = smallScreen ? '18rem' : '26rem'

  function handleChangePage(
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ){
    router.push(`/projects?page=${newPage}&rows=${rows}`)
  }

  function handleChangeRowsPerPage(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ){
    router.push(`/projects?page=0&rows=${parseInt(event.target.value)}`)
  }

  function handleSearch(searchFor:string){
    console.log("handleSearch...", searchFor)
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Box
        component="article"
        sx={{
          margin:'auto',
          padding:'3rem'
        }}
      >
        <Box
          component="header"
          sx={{
            display: 'flex',
            justifyContent:'space-between'
          }}
        >
          <Typography component="h1">
            {pageTitle}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Searchbox
              placeholder="Search for project"
              onSearch={handleSearch}
            />
            <TablePagination
              component="nav"
              count={count}
              page={page}
              labelRowsPerPage="Per page"
              onPageChange={handleChangePage}
              rowsPerPage={rows}
              rowsPerPageOptions={rowsPerPageOptions}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                paddingLeft:'1rem'
              }}
              />
          </Box>
        </Box>
        <Box>
          Nothing to see here ...
        </Box>
      </Box>
    </>
  )
}

// fetching data server side
// see documentation https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // extract from page-query
  // const {search, rows, page} = ssrProjectsParams(context)
  // make api call, we do not pass the token
  // when token is passed it will return not published items too
  // const projects = await getProjectList({
  //   searchFor: search,
  //   rows,
  //   page,
  //   //baseUrl within docker network
  //   baseUrl: process.env.POSTGREST_URL
  // })

  return {
    // pass this to page component as props
    props: {
      count: 0,
      page:0,
      rows:12,
      projects: []
    },
  }
}
