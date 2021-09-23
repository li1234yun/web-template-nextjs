import { SitePropsType } from "components/base/Site"
import SiteSwiper from "components/base/SiteSwiper"
import { useState } from "react"

function TabContentFavorite(): JSX.Element {
  const [sites, setSites] = useState<SitePropsType[]>([{
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '天猫购物节',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '2345网址导航',
    url: 'https://www.2345.com/',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: 'hao123',
    url: 'https://www.hao123.com/',
    favicon: 'tmp/hao123.ico',
  },
  {
    title: 'hao360',
    url: 'https://hao.360.com/',
    favicon: 'tmp/hao360.ico',
  },
  {
    title: 'QQ导航',
    url: 'https://hao.qq.com/',
    favicon: 'tmp/haoqq.ico',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
    favicon: 'tmp/favicon.ico',
  }])

  return <SiteSwiper sites={sites} row={5} />
}

export default TabContentFavorite
