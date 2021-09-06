import { Button, InputBase, ThemeOptions } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = (theme: ThemeOptions) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '48rem',
    margin: 'auto',
    border: '1px solid #333',
    borderRadius: theme.shape?.borderRadius,
    '&:hover': {
      // border: '2px solid #000',
    },
  },
  input: {
    padding: '3px 12px',
  },
  button: {
    borderTopRightRadius: theme.shape?.borderRadius,
    borderBottomRightRadius: theme.shape?.borderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: '120px',
    borderLeft: '1px solid #333',
    padding: '8px',
  },
})

interface SearchInputProps {
  options: any
  classes: {
    root: string
    input: string
    button: string
  }
}

function SearchInput({ options, classes }: SearchInputProps): JSX.Element {
  return (
    <div className={classes.root}>
      <InputBase fullWidth classes={{ root: classes.input }} />
      <Button classes={{ root: classes.button }}>搜 索</Button>
    </div>
  )
}

export default withStyles(styles, {withTheme: true})(SearchInput)
