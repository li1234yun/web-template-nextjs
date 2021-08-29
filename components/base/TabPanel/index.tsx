import clsx from 'clsx'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  idPrefix?: string
  ariaLabelledByPrefix?: string
  classes?: {
    root: string
  }
  style?: React.CSSProperties
}

function TabPanel({
  classes,
  children,
  idPrefix,
  ariaLabelledByPrefix,
  index,
  value,
  ...other
}: TabPanelProps) {
  // const { children, value, index, idPrefix, ariaLabelledByPrefix, ...other } = props
  return (
    <div
      role="tab-panel"
      hidden={value !== index}
      id={idPrefix + index.toString()}
      aria-labelledby={ariaLabelledByPrefix + index.toString()}
      {...other}
      className={clsx('w-100', classes?.root)}
    >
      {value === index && children}
    </div>
  )
}

export default TabPanel
