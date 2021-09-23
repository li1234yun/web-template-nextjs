import Box from '@mui/system/Box'
import SwiperIndicator from 'components/base/SwiperIndicator/SwiperIndicator'
import { useEffect, useRef, useState } from 'react'


interface SwiperProps {
  classes?: {
    root: string
    container: string
    item: string
    indicator: string
  }
  items: JSX.Element[]
}

function Swiper({ classes, items }: SwiperProps): JSX.Element {
  const containerRef = useRef(null)
  const timer = useRef(null)
  const [index, setIndex] = useState(0)

  /**
   * 计算滚动位置
   * @param currentScrollLeft
   * @param scrollElWith
   * @param totalScrollWidth
   */
  const computeScroll = (
    currentScrollLeft: number,
    scrollElWith: number,
    totalScrollWidth: number
  ): number => {
    // 当前index count
    const totalCount = Math.floor(totalScrollWidth / scrollElWith)
    // 判断滚动偏移是否满足滚动要求
    let index = Math.round(currentScrollLeft / scrollElWith)
    if (index >= totalCount) {
      index = index - totalCount
    }
    setIndex(index)
    console.log('current scroll left:', currentScrollLeft, 'index:', index)
    return scrollElWith * index
  }

  useEffect(() => {
    console.log('current ref:', containerRef)
    // 当数量小于等于1时，禁用滚动
    if (items.length <= 1) {
      return
    }

    containerRef.current.addEventListener('wheel', (e) => {
      // console.log('mouse wheel event:', e)
      // 阻止原生滚动事件
      e.preventDefault()

      // 获取滚动位置
      let scrollLeft = containerRef.current.scrollLeft
      const scrollTotalWidth = containerRef.current.scrollWidth
      const scrollItemWidth = containerRef.current.offsetWidth

      // 即时水平滚动偏移值
      const bufferOffset = 0
      const scrollBehavior = 'smooth'
      let offset = scrollLeft + e.deltaY * 5.5 // 放大偏移倍数

      // 判断offset在第一元素和最后元素的情况
      if (offset < 0 && offset + bufferOffset < 0) {
        offset = scrollTotalWidth - (offset + bufferOffset)
      } else if (offset > scrollTotalWidth - scrollItemWidth + bufferOffset) {
        offset = offset - bufferOffset
      }

      // 进行取余
      offset = offset % scrollTotalWidth
      containerRef.current.scrollTo({
        top: 0,
        left: offset,
        behavior: scrollBehavior,
      })

      // 防抖
      if (timer.current) {
        clearTimeout(timer.current)
      }

      timer.current = setTimeout(() => {
        // 计算滚动最后的位置进行位置矫正
        console.log('TIME OUT: starting position correct...')
        // 计算是否滚动
        scrollLeft = computeScroll(offset, scrollItemWidth, scrollTotalWidth)

        containerRef.current.scrollTo({
          top: 0,
          left: scrollLeft,
          behavior: 'smooth',
        })
      }, 700)
    })
  }, [index, items.length])

  const indicatorIndexChange = (e, v) => {
    // 设置当前index
    setIndex(v)

    // 滚动至特定index
    containerRef.current.scrollTo({
      top: 0,
      left: containerRef.current.offsetWidth * v,
      behavior: 'smooth',
    })
  }

  return (
    <Box sx={{ overflowX: 'auto' }}>
      {/* Content */}
      <Box sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'hidden',
      }} ref={containerRef}>
        {items.map((item, index) => (
          <Box className="swiper-item" sx={{ width: '100%', flexShrink: 0, }} key={index}>
            {item}
          </Box>
        ))}
      </Box>

      {/* Indicator */}
      <Box sx={{ textAlign: 'center' }}>
        <SwiperIndicator
          count={items.length}
          currentIndex={index}
          indicatorIndexChange={indicatorIndexChange}
        />
      </Box>
    </Box >
  )
}

export default Swiper
