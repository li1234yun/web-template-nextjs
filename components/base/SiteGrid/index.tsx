import Box from '@mui/system/Box'
import { SitePropsType } from 'components/base/Site'
import SiteCircle from 'components/base/SiteCircle'

interface PropsType {
  sites: SitePropsType[]
  classes?: {
    root: string
    node: string
  }
}

function SiteGrid({ sites, classes }: PropsType): JSX.Element {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
    }}>
      {sites.map((item, index) => (
        <Box sx={{}} key={index}>
          {/* <Site {...item} /> */}
          <SiteCircle {...item} />
        </Box>
      ))}
    </Box>
  )
}

export default SiteGrid
