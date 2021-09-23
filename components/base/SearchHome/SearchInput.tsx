import { Box, Button, InputBase, ThemeOptions } from '@mui/material'


interface SearchInputProps {
  options: any
  classes?: {
    root: string
    input: string
    button: string
  }
}

function SearchInput({ options, classes }: SearchInputProps): JSX.Element {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      maxWidth: '48rem',
      margin: 'auto',
      border: '1px solid #333',
      borderRadius: 'shape?.borderRadius',
      '&:hover': {
        // border: '2px solid #000',
      },
    }}>
      <InputBase fullWidth sx={{ padding: '3px 12px' }} />
      <Button sx={{
        borderTopRightRadius: 'shape.borderRadius',
        borderBottomRightRadius: 'shape?.borderRadius',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: '120px',
        borderLeft: '1px solid #333',
        padding: '8px',
      }}>搜 索</Button>
    </Box>
  )
}

export default SearchInput
