import { useState } from 'react'
import SearchEntry from './SearchEntry'
import SearchInput from './SearchInput'

export default function SearchHome(): JSX.Element {
  const [searches, setSearches] = useState([
    {
      label: '百度',
      url: 'https://www.baidu.com/s?wd=',
      logo: 'img/baidu.svg',
    },
    {
      label: '知乎',
      url: 'https://www.zhihu.com',
      logo: 'public/img/zhihu.svg',
    },
    {
      label: '谷歌',
      url: 'https://www.google.com',
      logo: 'public/img/google.svg',
    },
  ])

  // console.log(setSearches)
  return (
    <div>
      {/* Entry */}
      <div className="text-center">
        <SearchEntry />
      </div>

      {/* Input */}
      <div className="my-2">
        <SearchInput options={searches} />
      </div>
    </div>
  )
}
