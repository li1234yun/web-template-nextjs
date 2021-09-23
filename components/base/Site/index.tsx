import { Language } from '@mui/icons-material'
import Box from '@mui/material/Box'

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

function Site({ title, url, favicon, classes }: PropsType) {
  return (
    <Box sx={{
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        border: '1px dashed #ccc',
        color: '#3B82F6',
        cursor: 'pointer',
        backgroundColor: 'rgba(250, 250, 250)',
      }
    }}>
      <Box
        component='a'
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          fontSize: '15px',
          textDecoration: 'none',
          padding: '0 1px',
          '&:hover': {
            // textDecoration: 'underline',
            // border: '1px dashed #ccc',
            color: '#3B82F6',
          }
        }}
      >
        {favicon ? (
          <Box
            component="img"
            src={favicon}
            alt={`${title} favicon`}
            sx={{
              height: '16px',
              width: '16px',
              marginRight: '3px',
            }}
          />
        ) : (
          <Language sx={{
            height: '16px',
            width: '16px',
            marginRight: '3px'
          }} />
        )}
        <span>{title}</span>
      </Box>
    </Box>
  )
}

export default Site
