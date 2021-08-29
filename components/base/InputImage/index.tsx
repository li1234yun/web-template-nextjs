import { Avatar } from '@material-ui/core'
import { randomStr } from 'utils/utils'
import React, { ChangeEventHandler, useRef, useState } from 'react'
import clsx from 'clsx'

interface PropType {
  classes?: {
    root?: string
    input?: string
    label?: string
    avatar?: string
  }
  height?: string
  width?: string
  fileSizeLimit?: number // unit: Kib
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function InputImage({
  classes,
  onChange,
  fileSizeLimit,
}: PropType): JSX.Element {
  const inputId = 'inputImage-' + randomStr()
  const [imgSrc, setImgSrc] = useState('')

  const inputEl = useRef<HTMLInputElement>(null)

  const inputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e)
    const uploadFiles = e.target.files
    if (uploadFiles == null || uploadFiles.length === 0) {
      return
    }

    const file = uploadFiles[0]
    if (fileSizeLimit && file.size / 1024 > fileSizeLimit) {
      alert(`上传文件大小超过限制(${fileSizeLimit}KiB)`)

      if (inputEl && inputEl.current) {
        inputEl.current.value = ''
      }
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      console.log('File reader result:', reader.result)
      setImgSrc(reader.result as string)
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={clsx('w-full', classes?.root)}>
      <input
        ref={inputEl}
        id={inputId}
        accept="image/*"
        className={clsx('hidden', classes?.input)}
        type="file"
        onChange={inputChange}
      />
      <label htmlFor={inputId} className="relative">
        <Avatar
          src={imgSrc}
          classes={{
            root: clsx(
              classes?.avatar,
              imgSrc ? 'bg-gray-100 hover:bg-gray-200' : '',
              'h-full w-full cursor-pointer'
            ),
          }}
        />
      </label>
    </div>
  )
}

export default InputImage
