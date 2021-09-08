import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import FormFieldSendCode from 'components/form/FormField/FormFieldSendCode'
import FormFieldPhone from 'components/form/FormField/FormFieldPhone'

interface LoginForm {
  account: string
  code: string
}

function FormLoginPhone(): JSX.Element {
  const defaultForm: LoginForm = {
    account: '',
    code: '',
  }

  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultForm,
  })
  const { handleSubmit } = form

  const onSubmit = (data: LoginForm) => {
    console.log('submit data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFieldPhone name="account" form={form} />

      <FormFieldSendCode
        name="code"
        form={form}
        sendTargetFieldName="account"
        codeType="phone"
        sendInterval={3}
        formRules={{ required: { value: true, message: '验证码不能为空' } }}
      />

      <Button
        type="submit"
        variant="contained"
        disableElevation
        fullWidth
        className="my-3 text-sm text-white"
      >
        登&nbsp;&nbsp;&nbsp;录
      </Button>
    </form>
  )
}

export default FormLoginPhone
