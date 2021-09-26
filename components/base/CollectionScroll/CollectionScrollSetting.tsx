import { SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import { Breadcrumbs, Link } from '@mui/material'
import Box from '@mui/system/Box'
import { CollectionHeaderItem } from 'components/base/CollectionScroll/types'
import { useEffect, useState } from 'react'

interface CollectionScrollSettingProps {
  classes?: {
    root: string
  }
  collectionHeaderItems: CollectionHeaderItem[]

  onCollectionHeaderItemClick?(item: CollectionHeaderItem): void
}

function CollectionScrollSetting({
  classes,
  collectionHeaderItems,
  onCollectionHeaderItemClick,
}: CollectionScrollSettingProps): JSX.Element {
  const [currentCollectionHeaderItems, setCurrentCollectionHeaderItems] =
    useState<CollectionHeaderItem[]>([])

  const handleCollectionHeaderItemClick = (item: CollectionHeaderItem, index: number) => {
    setCurrentCollectionHeaderItems(
      currentCollectionHeaderItems.slice(0, index + 1)
    )

    // call callback
    if (onCollectionHeaderItemClick) {
      onCollectionHeaderItemClick(item);
    }
  }

  useEffect(() => {
    setCurrentCollectionHeaderItems(collectionHeaderItems)
  }, [collectionHeaderItems])

  return (
    <Box
      className={classes?.root}
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        padding: '0 16px',
      }}
    >
      {/* Bread Crumbs */}
      <div className="">
        <Breadcrumbs>
          {currentCollectionHeaderItems.length > 0 &&
            currentCollectionHeaderItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                onClick={() => handleCollectionHeaderItemClick(item, index)}
              >
                {item.name}
              </Link>
            ))}
        </Breadcrumbs>
      </div>

      {/* Icon Buttons */}
      <div>
        <SearchOutlined />
        <SettingsOutlined />
      </div>
    </Box>
  )
}

export default CollectionScrollSetting
