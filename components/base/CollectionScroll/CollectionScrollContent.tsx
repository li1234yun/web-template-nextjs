import Box from '@mui/system/Box'
import CollectionScrollContentContainer from 'components/base/CollectionScroll/CollectionScrollContentContainer'
import {
  CollectionHeaderItem,
  SiteItem
} from 'components/base/CollectionScroll/types'
import { useEffect, useRef } from 'react'

interface CollectionScrollContentProps {
  classes?: {
    root: string
  }
  sites: SiteItem[]
  currentCollectionHeaderItem?: CollectionHeaderItem
  onCollectionHeaderChange?: (items: CollectionHeaderItem[]) => void
}

function CollectionScrollContent({
  classes,
  sites,
  currentCollectionHeaderItem,
  onCollectionHeaderChange,
}: CollectionScrollContentProps): JSX.Element {
  const containerRef = useRef(null)
  const timerRef = useRef(null)
  const headerClassNamePrefix = 'scroll-header'

  const computeHeaders = () => {
    // 当container ref 不存在时取消计算
    if (!containerRef.current) {
      return
    }

    // 获取所有的标题
    const allHeaders = containerRef.current.getElementsByClassName(
      headerClassNamePrefix
    )
    // console.log('all headers:', allHeaders)
    const levelHeaders = []
    const passHeaders = []
    for (let i = 0; i < allHeaders.length; i++) {
      const h = allHeaders[i]

      if (containerRef.current.scrollTop > h.offsetTop) {
        // 将其放入历史队列
        passHeaders.push(h)

        const hLevel = parseInt(h.dataset.level)
        if (levelHeaders.length < hLevel) {
          levelHeaders.push(h)
        } else {
          levelHeaders.splice(hLevel, levelHeaders.length, h)
        }
      }
    }

    console.log('level headers:', levelHeaders)
    // 返回当前的标题
    const headers = []
    levelHeaders.forEach((item) => {
      // console.log('header dom item:', item)
      headers.push({
        name: item.innerText,
        order: parseInt(item.dataset.order),
        level: parseInt(item.dataset.level),
        index: parseInt(item.dataset.index),
      })
    })

    // 触发标题改变事件
    onCollectionHeaderChange(headers)
    // console.log('current headers:', headers)
  }

  const handleWheelScroll = () => {
    // console.log('handle wheel scroll')
    // 清除之前的定时器
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      // 计算headers
      computeHeaders()
    }, 300)
  }

  // 设置监听元素滚动事件
  useEffect(() => {
    // 监听容器元素的滚动事件
    const containerEl = containerRef.current
    containerEl.addEventListener('wheel', handleWheelScroll)

    // 清除监控事件
    return () => {
      containerEl.removeEventListener('wheel', handleWheelScroll)
    }
  })

  // 设置监听当前改变事件
  useEffect(() => {
    if (containerRef.current) {
      // 查找对应的元素并滚动至对应的元素
      const className = [
        headerClassNamePrefix,
        currentCollectionHeaderItem.order.toString(),
        currentCollectionHeaderItem.level.toString(),
        currentCollectionHeaderItem.index.toString(),
      ].join('-')
      const headerEls = containerRef.current.getElementsByClassName(className)
      if (headerEls.length !== 1) {
        console.warn('Match header elements length not eq 1.', headerEls)
        return
      }

      // 滚动到该元素
      console.log('current collection header item:', containerRef.current)
      const headerEl = headerEls[0]
      containerRef.current.scrollTo({
        top: headerEl.offsetTop,
        left: 0,
        behavior: 'smooth',
      })

      // console.log('get header element:', className, headerEls)
    }
  }, [currentCollectionHeaderItem])

  return (
    <Box
      ref={containerRef}
      sx={{
        height: '300px',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <CollectionScrollContentContainer
        sites={sites}
        headerClassNamePrefix={headerClassNamePrefix}
      />
    </Box>
  )
}

export default CollectionScrollContent
