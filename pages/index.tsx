import LayoutHome from 'components/layout/LayoutHome'
import { ReactElement } from 'react'
import SearchHome from 'components/base/SearchHome'

export default function Home(): JSX.Element {
  return <div>
    {/*SearchHome*/}
    <SearchHome />

    {/*Collection*/}
  </div>
}

// Home Layout
Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>
}
