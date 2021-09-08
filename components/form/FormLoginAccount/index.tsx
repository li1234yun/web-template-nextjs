import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import FormFieldPassword from 'components/form/FormField/FormFieldPassword'
import { userLogin } from 'api/user'

interface AccountLoginForm {
  account: string
  password: string
}

function FormLoginAccount(): JSX.Element {
  const defaultForm: AccountLoginForm = {
    account: '',
    password: '',
  }

  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultForm,
  })
  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = form

  const onSubmit = (data: AccountLoginForm) => {
    console.log('submit data:', data)
    userLogin(data).then((res) => {
      console.log('user login res:', res)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="account"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            onFocus={() => clearErrors('account')}
            error={!!errors.account}
            label={errors.account ? '账号不能为空' : '请输入手机号码/用户名'}
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
        )}
      />

      <FormFieldPassword
        name="password"
        form={form}
        formRules={{ required: true }}
      />

      <Button
        variant="contained"
        disableElevation
        type="submit"
        fullWidth
        className="my-3 text-sm text-white"
        onClick={() => {
          console.log('submit button click')
        }}
      >
        登&nbsp;&nbsp;&nbsp;录
      </Button>
    </form>
  )
}

export default FormLoginAccount
