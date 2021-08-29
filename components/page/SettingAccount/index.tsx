import FormContactBind from 'components/form/FormContractBind'
import SettingHeader from 'components/base/SettingHeader'

export default function SettingAccount(): JSX.Element {
  return (
    <div>
      <div>
        <SettingHeader header="邮箱绑定" divider />
        <FormContactBind type="email" />
      </div>

      <div>
        <SettingHeader header="手机绑定" divider />
        <FormContactBind type="phone" />
      </div>
    </div>
  )
}
