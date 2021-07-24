import { makeStyles } from '@material-ui/styles'
import { ReactNode } from 'react'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
})

export default function Home(): ReactNode {
  const classes = useStyles()

  return (
    <div>
      <button className={classes.root}>Hello</button>
    </div>
  )
}
