import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
import Image from 'next/image'

import baiduSVG from 'public/img/baidu.svg'
import googleSVG from 'public/img/google.svg'
import zhihuSVG from 'public/img/zhihu.svg'

export default function SearchEntry(): JSX.Element {
  const [entry, setEntry] = useState('baidu')

  const handleSelectChange = (e: SelectChangeEvent) => {
    console.log('select change event:', e)
    setEntry(e.target.value)
  }

  return (
    <FormControl
      classes={{
        root: 'border-0 hover:border-0',
      }}
    >
      <Select
        value={entry}
        onChange={handleSelectChange}
        classes={{
          // root: 'border-0 hover:border-0',
          select: 'px-0 focus:bg-transparent',
          icon: 'hidden',
          nativeInput: 'hidden',
        }}
        input={<InputBase />}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          // getContentAnchorEl: null,
        }}
      >
        <MenuItem value="baidu">
          <Image src={baiduSVG} alt="logo" width="150px" height="70px" />
        </MenuItem>
        <MenuItem value="google">
          <Image src={googleSVG} alt="logo" width="150px" height="70px" />
        </MenuItem>
        <MenuItem value="zhihu">
          <Image src={zhihuSVG} alt="logo" width="150px" height="70px" />
        </MenuItem>
      </Select>
    </FormControl>
  )
}
