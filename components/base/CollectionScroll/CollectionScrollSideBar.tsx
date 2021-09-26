import Box from '@mui/system/Box'
import CollectionScrollSideBarItem from 'components/base/CollectionScroll/CollectionScrollSideBarItem'
import { CollectionHeaderItem } from 'components/base/CollectionScroll/types'
import { useEffect, useState } from 'react'

interface CollectionScrollSideBarProps {
  classes?: {
    root: string
    items: string
  }
  sidebarItems: CollectionHeaderItem[]
  activeSidebarItem?: CollectionHeaderItem
  onSidebarItemClick?: (item: CollectionHeaderItem) => void
}

function CollectionScrollSideBar({
  classes,
  sidebarItems,
  activeSidebarItem,
  onSidebarItemClick,
}: CollectionScrollSideBarProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(
    activeSidebarItem ? activeSidebarItem.order : 0
  )
  const handleSidebarItemClick = (item: CollectionHeaderItem) => {
    setActiveIndex(item.order)
    if (onSidebarItemClick) {
      onSidebarItemClick(item)
    }
  }

  // Watch Active Sidebar Item
  useEffect(() => {
    if (activeSidebarItem) {
      setActiveIndex(activeSidebarItem.order)
    }
  }, [activeSidebarItem])

  return (
    <Box
      sx={{
        height: '100%',
        width: '100px',
      }}
      className={classes?.root}
    >
      {sidebarItems.map((item, index) => (
        <CollectionScrollSideBarItem
          item={item}
          key={index}
          active={activeIndex === index}
          onItemClick={handleSidebarItemClick}
        />
      ))}
    </Box>
  )
}

export default CollectionScrollSideBar
