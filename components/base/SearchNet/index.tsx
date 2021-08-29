import { Input, Theme } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = (theme: Theme) => ({})

interface SearchNetProps {
  classes?: {
    root?: string
  }
}
function SearchNet({ classes }: SearchNetProps): JSX.Element {
  return <Input></Input>
}

export default withStyles(styles, { withTheme: true })(SearchNet)
