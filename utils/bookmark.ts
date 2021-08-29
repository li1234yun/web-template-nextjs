/**
 * 解析书签
 * @param e: 待解析书签容器
 */

export interface BookmarkItem {
  url?: string | null
  date?: string | null
  name: string
  icon?: string | null
  children?: BookmarkItem[]
}

function convertTimestamp(
  timestamp: string | null,
  convertDate: boolean
): string | null {
  console.log(timestamp, convertDate)
  if (!convertDate) {
    return timestamp
  }

  // Convert
  if (!timestamp) {
    return null
  }
  const tm = parseInt(timestamp)
  if (isNaN(tm)) {
    return null
  }
  return new Date(tm).toISOString()
}

function parse(
  e: Element,
  includeIcon = false,
  convertDate = false
): BookmarkItem {
  const marksEl = e.children[1]
  const children: BookmarkItem[] = []
  const marks = {
    // url: '',
    date: convertTimestamp(e.children[0].getAttribute('add_date'), convertDate),
    name: e.children[0].innerHTML,
    children: children,
  }

  for (let i = 1; i < marksEl.children.length; i++) {
    const childEl = marksEl.children[i]
    if (
      childEl.children.length === 1 &&
      childEl.children[0].tagName.toLowerCase() === 'a'
    ) {
      const el = childEl.children[0]
      const item: BookmarkItem = {
        url: el.getAttribute('href'),
        date: convertTimestamp(el.getAttribute('add_date'), convertDate),
        name: el.innerHTML,
      }
      if (includeIcon) {
        item.icon = el.getAttribute('icon')
      }
      children.push(item)
    } else if (childEl.children.length === 3) {
      children.push(parse(childEl, includeIcon, convertDate))
    }
  }

  return marks
}

/**
 * Parse browser bookmark file
 * @param htmlText: bookmark string
 * @param includeIcon: if include icon
 * @param convertDate: if convert date
 */
export function parseBookmarkFile(
  htmlText: string,
  includeIcon = true,
  convertDate = false
): BookmarkItem {
  const el = document.createElement('html')
  el.innerHTML = htmlText

  console.log('element:', el, includeIcon, convertDate)
  // parse bookmark html

  const body = el.getElementsByTagName('body')[0]
  return parse(body, includeIcon, convertDate)
}
