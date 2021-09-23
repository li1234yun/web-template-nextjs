import { Box } from '@mui/material'
import SearchHome from 'components/base/SearchHome'
import LayoutHome from 'components/layout/LayoutHome'
import TabContent from 'components/page/TabContent'
import { ReactElement } from 'react'

export default function Home(): JSX.Element {
  return (
    <Box>
      {/*SearchHome*/}
      <SearchHome />

      {/*Tabs*/}
      <Box className="flex justify-center">
        <Box className="flex-grow flex justify-center" style={{ maxWidth: '1024px' }}>
          <TabContent classes={{ root: 'flex-grow' }} />
        </Box>
      </Box>
    </Box>
  )
}

// Home Layout
Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>
}
