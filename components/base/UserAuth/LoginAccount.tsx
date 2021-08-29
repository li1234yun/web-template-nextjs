import { Button } from '@material-ui/core'
import { ReactEventHandler } from 'react'
import FormLoginAccount from 'components/form/FormLoginAccount'

interface LoginAccountProps {
  onPhoneLoginClick: ReactEventHandler
  onResetClick: ReactEventHandler
}

function LoginAccount({onPhoneLoginClick, onResetClick}: LoginAccountProps): JSX.Element {
  return (
    <div>
      <FormLoginAccount />

      {/*Footer*/}
      <div className="w-full flex items-center justify-between text-xs">
        <Button size='small' onClick={onPhoneLoginClick}>手机号登录</Button>
        <Button size='small' onClick={onResetClick}>忘记密码</Button>
      </div>
    </div>
  )
}

export default LoginAccount
