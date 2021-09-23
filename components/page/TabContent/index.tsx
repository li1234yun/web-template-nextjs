import { Box, Tab, Tabs } from '@mui/material'
import TabContentFavorite from 'components/page/TabContentFavorite'
import TabContentCollection from 'components/page/TabContentCollection'
import TabContentRecommend from 'components/page/TabContentRecommend'
import TabContentExplore from 'components/page/TabContentExplore'
import { ReactNode, useState } from 'react'
import TabPanel from 'components/base/TabPanel'
import clsx from 'clsx'

interface TabContentProps {
  classes?: {
    root?: string
  }
}

interface TabContentItem {
  name: string
  component: ReactNode
}

function TabContent({ classes }: TabContentProps): JSX.Element {
  const tabs: TabContentItem[] = [
    {
      name: '最爱',
      component: <TabContentFavorite />,
    },
    {
      name: '收藏',
      component: <TabContentCollection />,
    },
    {
      name: '推荐',
      component: <TabContentRecommend />,
    },
    {
      name: '探索',
      component: <TabContentExplore />,
    },
  ]
  const tabIdPrefix = 'content-tab-'
  const tabPanelIdPrefix = 'content-tab-panel-'

  const [tabIndex, setTabIndex] = useState<number>(0)

  return (
    <Box className={clsx(classes?.root)}>
      {/*Header*/}
      <Tabs
        value={tabIndex}
        onChange={(e, v) => setTabIndex(v)}
        centered
        TabIndicatorProps={{ hidden: true }}
      >
        {tabs.map((item, i) => (
          <Tab
            label={item.name}
            id={tabIdPrefix + i.toString()}
            aria-controls={tabIdPrefix + i.toString()}
            key={i}
            disableRipple
            sx={{
              '&.Mui-selected': {
                fontSize: '20px !important',
                transition: 'all 0.1s',
              },
            }}
          />
        ))}
      </Tabs>

      {/*Content*/}
      <div>
        {tabs.map((item, i) => (
          <TabPanel
            index={i}
            value={tabIndex}
            key={i}
            idPrefix={tabPanelIdPrefix}
            ariaLabelledByPrefix={tabIdPrefix}
          >
            {item.component}
          </TabPanel>
        ))}
      </div>
    </Box>
  )
}

export default TabContent
