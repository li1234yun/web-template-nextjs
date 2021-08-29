import {
  Alert,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
} from '@material-ui/core'
import { Controller, UseFormReturn } from 'react-hook-form'
import { makeStyles } from '@material-ui/styles'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

interface FieldSendCodeProps {
  name: string
  form: UseFormReturn<any>
  sendTargetFieldName: string
  codeType: 'phone' | 'email'
  sendInterval?: number // unit: second
  errMsg?: string
  formRules?: RegisterOptions
}

const useStyles = makeStyles({
  root: {
    '& > .MuiOutlinedInput-root': {
      paddingRight: '2px',
    },
  },
})

function FormFieldSendCode({
  name,
  form,
  sendTargetFieldName,
  codeType,
  sendInterval = 60,
  errMsg,
  formRules,
}: FieldSendCodeProps): JSX.Element {
  errMsg = errMsg
    ? errMsg
    : codeType === 'phone'
    ? '手机号码不正确'
    : '邮件地址不正确'
  const classes = useStyles()

  const {
    control,
    clearErrors,
    trigger,
    getValues,
    formState: { errors },
  } = form

  const [openMessage, setOpenMessage] = useState(false)
  const [resetSecond, setResetSecond] = useState<number>(0)
  const [disableSend, setDisableSend] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timer | null>(null)

  useEffect(() => {
    console.log('enter component')
    return () => {
      console.log('exit component', timer)
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])

  const handleSendCode = async () => {
    const result = await trigger(sendTargetFieldName)
    if (!result) {
      if (!openMessage) {
        setOpenMessage(true)
      }
      return
    }

    // Send Code
    setDisableSend(true)

    const value = getValues(sendTargetFieldName)
    console.log('send code:', value)
    const sendOK = true
    if (sendOK) {
      setResetSecond(sendInterval)
      let n = sendInterval + 1

      timer.current = setInterval(() => {
        n = n - 1
        console.log('current reset second:', n, timer)
        if (n > 0) {
          setResetSecond(n)
        } else {
          if (timer.current) {
            clearInterval(timer.current)
            timer.current = null
            setDisableSend(false)
          }
        }
      }, 1000)
      console.log('before set timer')
    }
  }
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={formRules}
        render={({ field }) => (
          <TextField
            {...field}
            classes={{ root: classes.root }}
            error={!!errors?.[name]}
            label={!!errors?.[name] ? '验证码错误' : '验证码'}
            // helperText='验证码错误'
            size="small"
            fullWidth
            margin="dense"
            type="text"
            onFocus={() => clearErrors(name)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="text"
                    onClick={handleSendCode}
                    disabled={disableSend}
                    className="relative"
                  >
                    发送验证码
                    <div
                      className={clsx(
                        'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-blue-500',
                        disableSend ? 'text-lg' : 'hidden'
                      )}
                    >
                      {resetSecond}
                    </div>
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        autoHideDuration={1500}
      >
        <Alert severity="warning">{errMsg}</Alert>
      </Snackbar>
    </>
  )
}

export default FormFieldSendCode
