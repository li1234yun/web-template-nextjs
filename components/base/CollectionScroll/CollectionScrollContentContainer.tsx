import CollectionScrollCollectionItem from 'components/base/CollectionScroll/CollectionScrollCollectionItem'
import CollectionScrollCollectionHeader from 'components/base/CollectionScroll/CollectionScrollCollectionHeader'
import { randomStr } from 'utils/utils'
import { SiteItem } from 'components/base/CollectionScroll/types'
import React from 'react'

interface CollectionScrollContentContainerProps {
  classes?: {
    root: string
  }
  sites: SiteItem[]
  order?: number
  level?: number
  headerClassNamePrefix?: string
}

function CollectionScrollContentContainer({
  classes,
  sites,
  order = 0,
  level = 0,
  headerClassNamePrefix,
}: CollectionScrollContentContainerProps): JSX.Element {
  return (
    <>
      {sites.map((item, index) => {
        const str = randomStr()
        // 计算order
        let realOrder = order
        if (level === 0) {
          realOrder = index
        }

        if (Array.isArray(item.sites)) {
          return (
            <React.Fragment
              key={`container-${item.title}-${level}-${index}-${str}`}
            >
              <CollectionScrollCollectionHeader
                title={item.title}
                order={realOrder}
                level={level}
                index={index}
                headerClassNamePrefix={headerClassNamePrefix}
              />
              <CollectionScrollContentContainer
                sites={item.sites}
                order={realOrder}
                level={level + 1}
                classes={classes}
              />
            </React.Fragment>
          )
        } else {
          return (
            <CollectionScrollCollectionItem
              title={item.title}
              favicon={item.favicon}
              url={item.url}
              key={`item-${item.title}-${level}-${index}-${str}`}
            />
          )
        }
      })}
    </>
  )
}

export default CollectionScrollContentContainer
