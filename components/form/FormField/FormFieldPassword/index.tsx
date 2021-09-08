import { Controller, UseFormReturn } from 'react-hook-form'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { useState } from 'react'

interface FormFieldPasswordProps {
  name: string
  label?: string
  form: UseFormReturn<any>
  formRules: RegisterOptions
}

function FormFieldPassword({
  name,
  label = '请输入密码',
  form,
  formRules,
}: FormFieldPasswordProps): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    control,
    clearErrors,
    formState: { errors },
  } = form
  return (
    <Controller
      name={name}
      control={control}
      rules={formRules}
      render={({ field }) => (
        <TextField
          {...field}
          onFocus={() => clearErrors(name)}
          label={
            errors?.[name]
              ? errors?.[name]?.message
                ? errors?.[name]?.message
                : '密码不能为空'
              : label
          }
          error={!!errors?.[name]}
          size="small"
          fullWidth
          margin="dense"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

export default FormFieldPassword
