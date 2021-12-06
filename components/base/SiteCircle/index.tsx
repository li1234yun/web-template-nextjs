import { Box } from '@mui/system'

export interface SitePropsType {
  title: string
  url: string
  favicon?: string
}

interface PropsType extends SitePropsType {
  classes?: {
    root?: string
    favicon?: string
    link?: string
  }
}

function SiteCircle({ title, url, favicon, classes }: PropsType): JSX.Element {
  return (
    <Box>
      <Box
        sx={{
          display: 'inline-block',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
        component="a"
        href={url}
      >
        {/* Favicon */}
        <Box>
          <Box component="img" src={favicon} />
        </Box>

        {/* Name */}
        <Box>{title}</Box>
      </Box>
    </Box>
  )
}

export default SiteCircle
