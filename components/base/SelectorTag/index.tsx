import { createStyles, withStyles } from '@material-ui/styles'
import { Chip } from '@material-ui/core'
import { useState } from 'react'

const styles = createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',

    '& > *': {
      margin: '3px',
    },
  },

  clip: {
    background: 'rgb(189, 189, 189)',
  },
})

interface PropType {
  tags?: string[]
  classes?: {
    root: string
    clip: string
  }
}

function SelectorTag({
  tags = ['Vue', 'React', 'Angular'],
  classes,
}: PropType): JSX.Element {
  const [selectedTag, setSelectedTag] = useState([])

  const handleTagClick = (e) => {
    console.log('handle tag click:', e)
    const tag = e.target.innerText
    let isExist = false

    // Copy array
    const tagArray = [...selectedTag]
    while (true) {
      const index = tagArray.indexOf(tag)
      if (index !== -1) {
        isExist = true
        tagArray.splice(index, 1)
      } else {
        if (!isExist) {
          tagArray.push(tag)
        }
        break
      }
    }

    setSelectedTag(tagArray)
    // setSelectedTag(e.target.innerText)
  }

  return (
    <div className={classes?.root}>
      {tags.map((item, index) => (
        <Chip
          key={index}
          label={item}
          onClick={handleTagClick}
          variant="outlined"
          classes={{
            root: selectedTag.indexOf(item) !== -1 ? classes?.clip : '',
          }}
        />
      ))}
    </div>
  )
}

export default withStyles(styles)(SelectorTag)
