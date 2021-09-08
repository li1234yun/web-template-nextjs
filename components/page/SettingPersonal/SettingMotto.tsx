import { Box, InputBase } from '@mui/material'
import React, { ChangeEventHandler } from 'react'

interface PropType {
  classes?: {
    root: string
    input: string
  }
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string | null
  inputRef?: React.Ref<any>
}

function SettingMotto({
  classes,
  onChange,
  value = null,
  inputRef,
}: PropType): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 'shape.borderRadius',
        minHeight: '7rem',
        padding: '0 3rem',
      }}
    >
      <InputBase
        name="motto"
        inputRef={inputRef}
        // defaultValue={value}
        multiline
        placeholder="写给自己的一句话"
        value={value}
        onChange={onChange}
        sx={{
          width: '100%',
          fontSize: '16px',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
        classes={{ input: classes?.input, root: 'w-full' }}
      />
    </Box>
  )
}

export default SettingMotto
