import { Divider, Tab, Tabs } from '@material-ui/core'
import React, { SyntheticEvent, useState } from 'react'
import TabPanel from 'components/base/TabPanel'
import SettingAccount from 'components/page/SettingAccount'
import SettingPersonal from 'components/page/SettingPersonal'
import SettingCollection from 'components/page/SettingCollection'

interface SettingEntryObj {
  name: string
  component?: React.ReactNode
}

export default function UserSetting(): JSX.Element {
  const settingEntries: SettingEntryObj[] = [
    {
      name: '个人资料',
      component: <SettingPersonal />,
    },
    {
      name: '账号管理',
      component: <SettingAccount />,
    },
    {
      name: '收藏设置',
      component: <SettingCollection />,
    },
    {
      name: '其它设置',
      component: <div>其它设置</div>,
    },
  ]
  const tabIdPrefix = 'user-setting-tab-'
  const tabPanelIdPrefix = 'user-setting-tab-panel-'

  const [tabIndex, setTabIndex] = useState(0)
  const handleChange = (e: SyntheticEvent, value: number) => {
    setTabIndex(value)
  }

  return (
    <div className="flex h-full bg-white">
        <div className="w-36 pt-4">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabIndex}
            onChange={handleChange}
            classes={{ indicator: 'left-0' }}
          >
            {settingEntries.map((v, i) => {
              return (
                <Tab
                  key={i}
                  label={v.name}
                  value={i}
                  id={tabIdPrefix + i.toString()}
                  aria-controls={tabPanelIdPrefix + i.toString()}
                  style={{ fontSize: '16px' }}
                />
              )
            })}
          </Tabs>
        </div>

        <div>
          <Divider orientation="vertical" />
        </div>

        <div className="w-full mx-7 py-7">
          {settingEntries.map((v, i) => {
            return (
              <TabPanel
                key={i}
                value={tabIndex}
                index={i}
                idPrefix={tabPanelIdPrefix}
                ariaLabelledByPrefix={tabIdPrefix}
              >
                {v.component}
              </TabPanel>
            )
          })}
        </div>
    </div>
  )
}
