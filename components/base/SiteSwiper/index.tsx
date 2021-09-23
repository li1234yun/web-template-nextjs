import { SitePropsType } from 'components/base/Site'
import SiteGrid from 'components/base/SiteGrid'
import Swiper from 'components/base/Swiper'


interface SiteSwiperProps {
  classes?: {
    root: string
  }
  sites: SitePropsType[]
  row?: number
  column?: number
}

function SiteSwiper({
  sites,
  row = 3,
  column = 8,
}: SiteSwiperProps): JSX.Element {
  // 根据站点数量计算展示的数量
  const siteGrids = []
  for (let i = 0; i < Math.ceil(sites.length / (row * column)); i++) {
    siteGrids.push(
      <SiteGrid sites={sites.slice(i * row * column, (i + 1) * row * column)} />
    )
  }

  return <Swiper items={siteGrids} />
}

export default SiteSwiper
