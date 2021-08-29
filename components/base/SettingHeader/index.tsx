import { Divider } from '@material-ui/core'
import clsx from 'clsx'

interface PropType {
  classes?: {
    root?: string
    header?: string
  }
  header: string
  divider?: boolean
}

function SettingHeader({
  classes,
  header,
  divider = false,
}: PropType): JSX.Element {
  return (
    <div className={clsx('mt-6 mb-3', classes?.root)}>
      <div className={clsx('mb-2 text-gray-500', classes?.header)}>
        {header}
      </div>
      {divider ? <Divider /> : null}
    </div>
  )
}

export default SettingHeader
