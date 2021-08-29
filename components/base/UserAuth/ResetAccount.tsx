import FormResetAccount from 'components/form/FormResetAccount'
import { Button } from '@material-ui/core'
import { ReactEventHandler } from 'react'

interface ResetAccountProps {
  onPhoneLoginClick: ReactEventHandler
}

function ResetAccount({onPhoneLoginClick}: ResetAccountProps): JSX.Element {
  return <div>
    <FormResetAccount />

    {/*Footer*/}
    <div className="w-full flex items-center justify-between text-xs">
      <Button size='small' onClick={onPhoneLoginClick}>手机号登录</Button>
    </div>
  </div>
}

export default ResetAccount
