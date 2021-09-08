import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { SendRounded, Visibility } from '@mui/icons-material'

export default function FormRegister() {
  return (
    <form>
      <TextField
        label="请输入用户名"
        fullWidth
        helperText
        variant="outlined"
        margin="dense"
        size="small"
        defaultValue=""
      />
      <TextField
        error={false}
        label="请输入手机号"
        defaultValue=""
        variant="outlined"
        helperText=""
        size="small"
        fullWidth
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small">
                <SendRounded />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        error={false}
        label="请输入密码"
        defaultValue=""
        helperText=""
        size="small"
        fullWidth
        margin="dense"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small">
                <Visibility />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        error={false}
        label="请再次输入密码"
        defaultValue=""
        helperText=""
        size="small"
        fullWidth
        margin="dense"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small">
                <Visibility />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        disableElevation
        type="button"
        fullWidth
        className="my-3 text-sm text-white"
      >
        注&nbsp;&nbsp;&nbsp;册
      </Button>
    </form>
  )
}
