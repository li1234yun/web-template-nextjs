import { Language } from '@mui/icons-material'
import Box from '@mui/system/Box'

interface CollectionScrollCollectionItemProps {
  favicon?: string
  title: string
  url: string
  classes?: {
    root: string
    icon: string
    title: string
  }
}

function CollectionScrollCollectionItem(
  props: CollectionScrollCollectionItemProps
): JSX.Element {
  return (
    <>
      <Box
        component="a"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          '&:hover': {
            color: 'blue',
            borderTop: '1px dashed #aaaaaa',
            borderBottom: '1px dashed #aaaaaa',
          },
          height: '24px',
        }}
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
        className={props.classes?.root}
      >
        {props.favicon ? (
          <Box
            component="img"
            sx={{
              height: '16px',
              width: '16px'
            }}
            className={props.classes?.icon}
            src={props.favicon}
            alt={`${props.title} favicon`}
          />
        ) : (
          <Language
            sx={{
              height: '15px',
              width: '15px',
            }}
          />
        )}
        <Box
          sx={{
            fontSize: '14px',
            padding: '0 3px',
          }}
        >
          {props.title}
        </Box>
      </Box>
    </>
  )
}

export default CollectionScrollCollectionItem
