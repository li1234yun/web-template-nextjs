import Box from '@mui/system/Box'
import CollectionScrollContent from 'components/base/CollectionScroll/CollectionScrollContent'
import CollectionScrollSetting from 'components/base/CollectionScroll/CollectionScrollSetting'
import CollectionScrollSideBar from 'components/base/CollectionScroll/CollectionScrollSideBar'
import { CollectionHeaderItem } from 'components/base/CollectionScroll/types'
import { useEffect, useState } from 'react'

interface CollectionScrollProps {
  classes?: {
    root?: string
    sidebar?: string
    main?: string
    setting?: string
    content?: string
  }
}

function CollectionScroll({ classes }: CollectionScrollProps): JSX.Element {
  // 获取所有的收藏夹
  const sites = [
    {
      title: '笔记',
      sites: [
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              title: '百度一下，你就知道',
              sites: [
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
      ],
    },
    {
      title: '知识',
      sites: [
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              title: '百度一下，你就知道',
              sites: [
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
      ],
    },
    {
      title: '收藏夹',
      sites: [
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          url: 'https://www.baidu.com',
          title: '百度一下，你就知道',
          favicon: 'tmp/favicon.ico',
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              title: '百度一下，你就知道',
              sites: [
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  url: 'https://www.baidu.com',
                  title: '百度一下，你就知道',
                  favicon: 'tmp/favicon.ico',
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
                {
                  title: '百度一下，你就知道',
                  sites: [
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                    {
                      url: 'https://www.baidu.com',
                      title: '百度一下，你就知道',
                      favicon: 'tmp/favicon.ico',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
        {
          title: '百度一下，你就知道',
          sites: [
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
            {
              url: 'https://www.baidu.com',
              title: '百度一下，你就知道',
              favicon: 'tmp/favicon.ico',
            },
          ],
        },
      ],
    },
  ]

  // 获取顶级目录
  const sidebarItems: CollectionHeaderItem[] = sites.map((item, index) => ({
    name: item.title,
    order: index,
    level: 0,
    index: index,
  }))

  const [currentCollectionHeaderItem, setCurrentCollectionHeaderItem] = useState(sidebarItems.length > 0 ? sidebarItems[0] : undefined)
  const [activeSidebarItem, setActiveSidebarItem] = useState<CollectionHeaderItem | undefined>(undefined)
  const [scrollToCollectionItems, setScrollToCollectionItems] = useState<CollectionHeaderItem[]>([])

  const handleCollectionHeaderChange = (items: CollectionHeaderItem[]) => {
    console.log('header change:', items)

    // 设置当滑动到顶部时的默认选择
    if (items.length === 0 && sidebarItems.length > 0) {
      items = [sidebarItems[0]]
    }

    setScrollToCollectionItems(items)
    if (items.length > 0) {
      setActiveSidebarItem(items[0])
    }
  }

  const handleSettingCollectionItemClick = (item: CollectionHeaderItem) => {
    console.log('setting collection item click:', item)
    setCurrentCollectionHeaderItem(item)
  }

  const handleSidebarItemClick = (item: CollectionHeaderItem): void => {
    console.log('handle sidebar item click:', item)
    setCurrentCollectionHeaderItem(item)
    setScrollToCollectionItems([item])
  }

  useEffect(() => {
    // 设置面包屑初始状态
    if (sidebarItems.length > 0) {
      const item = sidebarItems[0]
      setActiveSidebarItem(item)
      setScrollToCollectionItems([item])
    }
  }, [])

  return (
    <div className={classes?.root}>
      {/* Top Setting */}
      <div className={classes?.setting}>
        <CollectionScrollSetting
          collectionHeaderItems={scrollToCollectionItems}
          onCollectionHeaderItemClick={handleSettingCollectionItemClick}
        />
      </div>

      <Box sx={{ display: 'flex' }}>
        {/* SideBar */}
        <Box sx={{ width: '120px' }}>
          <CollectionScrollSideBar
            sidebarItems={sidebarItems}
            activeSidebarItem={activeSidebarItem}
            onSidebarItemClick={handleSidebarItemClick}
          />
        </Box>

        {/* Content */}
        <Box className={classes?.content} sx={{ width: '100%' }}>
          <CollectionScrollContent
            sites={sites}
            onCollectionHeaderChange={handleCollectionHeaderChange}
            currentCollectionHeaderItem={currentCollectionHeaderItem}
          />
        </Box>
      </Box>
    </div>
  )
}

export default CollectionScroll
