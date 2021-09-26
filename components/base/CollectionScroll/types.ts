/*
Types
 */

export interface SiteItem {
  title: string
  url?: string
  favicon?: string
  sites?: SiteItem[]
}

// Collection Header Item Type
export interface CollectionHeaderItem {
  name: string
  // 第一级遍历顺序
  order: number
  // 目录级数
  level: number
  // 当前级数的次序
  index: number
}
