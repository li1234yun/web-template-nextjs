import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import clsx from 'clsx'

interface FormContactBindProps {
  value?: string
  type: 'email' | 'phone'
  classes?: {
    root: string
  }
}

function FormContactBind({
                           classes,
                           value,
                           type,
                         }: FormContactBindProps): JSX.Element {
  const [isModify, setIsModify] = useState(false)
  const [code, setCode] = useState("")

  return (
    <form className={clsx('my-4 h-16', classes?.root)}>
      <div className="flex items-center">
        <TextField
          label={type === 'phone' ? '手机号码' : '邮箱地址'}
          size="small"
          className="w-64"
          value={value}
          disabled={!isModify}
        />
        &nbsp;&nbsp;&nbsp;
        <TextField
          hidden={!isModify}
          label={type === 'phone' ? '手机验证码' : '邮箱验证码'}
          size="small"
          className={isModify ? 'w-64' : 'hidden'}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          className="mx-3"
          type="button"
          onClick={() => setIsModify(!isModify)}
        >
          {isModify ? '保 存' : '更 改'}
        </Button>
      </div>
    </form>
  )
}

export default FormContactBind
