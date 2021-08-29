import { withStyles } from '@material-ui/styles'
import { InputBase, Theme } from '@material-ui/core'
import React, { ChangeEventHandler } from 'react'

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: theme.shape.borderRadius,
    minHeight: '7rem',
    padding: '0 3rem',
  },
  input: {
    width: '100%',
    fontSize: '16px',
    fontStyle: 'italic',
    textAlign: 'center',
  },
})

interface PropType {
  classes?: {
    root: string
    input: string
  }
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string | null
  inputRef?: React.Ref<any>
}

function SettingMotto({
  classes,
  onChange,
  value = null,
  inputRef,
}: PropType): JSX.Element {
  return (
    <div className={classes?.root}>
      <InputBase
        name="motto"
        inputRef={inputRef}
        // defaultValue={value}
        multiline
        placeholder="写给自己的一句话"
        value={value}
        onChange={onChange}
        classes={{ input: classes?.input, root: 'w-full' }}
      />
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(SettingMotto)
