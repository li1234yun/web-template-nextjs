import { Box } from '@mui/system'
import { EventHandler } from 'react'


interface SwiperIndicatorItemProps {
  classes?: {
    root: string
    active: string
  }
  active?: boolean
  indicatorClick?: EventHandler<any>
}

function SwiperIndicatorItem({
  classes,
  active,
  indicatorClick,
}: SwiperIndicatorItemProps): JSX.Element {
  return (
    <Box
      sx={{
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        backgroundColor: active ? '#777777' : 'rgba(200, 200, 200, 0.7)',
        // boxSizing: 'border-box',
        margin: '3px',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={indicatorClick}
    />
  )
}

export default SwiperIndicatorItem
