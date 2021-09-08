import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import FieldSendCode from 'components/form/FormField/FormFieldSendCode'
import FormFieldPassword from 'components/form/FormField/FormFieldPassword'
import FormFieldPhone from 'components/form/FormField/FormFieldPhone'

interface ResetAccountForm {
  phone: string
  code: string
  password: string
  confirmPassword: string
}

function FormResetAccount(): JSX.Element {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      phone: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
  })
  const { handleSubmit, setError } = form

  const onSubmit = (data: ResetAccountForm) => {
    console.log('submit data:', data)
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'required',
        message: '密码不一致',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFieldPhone name="phone" form={form} />

      <FieldSendCode
        form={form}
        formRules={{ required: true }}
        sendTargetFieldName="phone"
        codeType="phone"
        name="code"
      />

      <FormFieldPassword
        name="password"
        label="请输入密码"
        form={form}
        formRules={{ required: true }}
      />

      <FormFieldPassword
        name="confirmPassword"
        label="请再次输入密码"
        form={form}
        formRules={{ required: true }}
      />

      <Button
        variant="contained"
        disableElevation
        type="submit"
        color="success"
        fullWidth
        className="my-3 text-sm text-white"
      >
        重&nbsp;&nbsp;&nbsp;置
      </Button>
    </form>
  )
}

export default FormResetAccount
