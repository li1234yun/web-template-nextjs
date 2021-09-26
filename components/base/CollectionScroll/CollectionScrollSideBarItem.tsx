import { useEffect, useRef, useState } from "react";
import { Popover, Typography } from '@mui/material'
import { CollectionHeaderItem } from 'components/base/CollectionScroll/types'
import Box from '@mui/system/Box'

interface CollectionScrollSideBarItemProps {
  item: CollectionHeaderItem
  classes?: {
    root: string
    item: string
    popover: string
    active: string
  }
  active?: boolean
  onItemClick?: (item: CollectionHeaderItem) => void
}

function CollectionScrollSideBarItem({
  item,
  classes,
  active = false,
  onItemClick,
}: CollectionScrollSideBarItemProps): JSX.Element {
  const ref = useRef<HTMLElement>(null)
  const [showPop, setShowPop] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (ref.current.scrollWidth > ref.current.offsetWidth) {
      setShowPop(true)
    }
  })

  const handlePopOpen = (e) => {
    if (showPop) {
      setAnchorEl(e.currentTarget)
    }
  }

  const handlePopClose = (e) => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '2.4rem',
        width: '100%',
        fontSize: active ? '20px' : '16px',
        color: active ? '#3b82f6' : '',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
          fontSize: '20px',
          color: '#3b82f6',
        },
      }}
      ref={ref}
      className={`${classes?.root} ${active ? classes?.active : ''}`}
      onClick={() => onItemClick && onItemClick(item)}
    >
      <Box
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
        onMouseOver={handlePopOpen}
        onMouseLeave={handlePopClose}
        className={classes?.item}
      >
        {item.name}
      </Box>
      {showPop && (
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handlePopClose}
          classes={{ root: classes?.popover }}
        >
          <Typography>{item.name}</Typography>
        </Popover>
      )}
    </Box>
  )
}

export default CollectionScrollSideBarItem
