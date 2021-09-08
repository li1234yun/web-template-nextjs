import { Controller, UseFormReturn } from 'react-hook-form'
import vars from 'utils/vars'
import { TextField } from '@mui/material'

interface FormFieldPhoneProps {
  name: string
  form: UseFormReturn<any>
}

function FormFieldPhone({ name, form }: FormFieldPhoneProps): JSX.Element {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = form

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true, pattern: vars.phoneRegex, maxLength: 11 }}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            error={!!errors?.[name]}
            label={!!errors?.[name] ? '无效的手机号码' : '请输入手机号码'}
            variant="outlined"
            // helperText="无效的手机号码"
            size="small"
            fullWidth
            onFocus={() => clearErrors(name)}
            // margin="dense"
          />
        )
      }}
    />
  )
}

export default FormFieldPhone
