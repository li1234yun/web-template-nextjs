import { Box, Chip } from '@mui/material'
import { useState } from 'react'

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

  const handleTagClick = (e: MouseEvent) => {
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
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',

      '& > *': {
        margin: '3px',
      },
    }}>

      {tags.map((item, index) => (
        <Chip
          key={index}
          label={item}
          onClick={handleTagClick}
          variant="outlined"
          classes={{
            root: selectedTag.indexOf(item) !== -1 ? 'bg-gray-300' : '',
          }}
        />
      ))}
    </Box>

  )
}

export default SelectorTag
