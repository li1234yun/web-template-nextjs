import { Box } from '@mui/system'
import SwiperIndicatorItem from 'components/base/SwiperIndicator/SwiperIndicatorItem'
import { SyntheticEvent } from 'react'

interface IndicatorIndexChangeFunc {
  (e: SyntheticEvent, index: number): void
}

interface SiteSwiperIndicatorProps {
  classes?: {
    root: string
  }
  count: number
  currentIndex: number
  indicatorIndexChange?: IndicatorIndexChangeFunc
}

/**
 * Site Swiper Indicator
 * @constructor
 */
function SwiperIndicator({
  classes,
  count,
  currentIndex = 0,
  indicatorIndexChange,
}: SiteSwiperIndicatorProps): JSX.Element {
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(
      <SwiperIndicatorItem
        active={currentIndex === i}
        indicatorClick={(e) => indicatorIndexChange(e, i)}
        key={i}
      />
    )
  }
  return <Box sx={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>{items}</Box>
}

export default SwiperIndicator
