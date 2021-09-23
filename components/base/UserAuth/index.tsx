import LoginAccount from 'components/base/UserAuth/LoginAccount'
import LoginPhone from 'components/base/UserAuth/LoginPhone'
import ResetAccount from 'components/base/UserAuth/ResetAccount'
import React, { useState } from 'react'

interface UserAuthProps {
  mode?: string
  classes?: {
    title?: string
  }
}

function UserAuth({
  mode = 'login_phone',
  classes = { title: 'text-gray-700 text-xl mb-3' },
}: UserAuthProps): JSX.Element {
  const loginPhoneFormMode = 'login_phone'
  const loginAccountFormMode = 'login_account'
  const resetAccountFormMode = 'reset_account'
  const [formMode, setFormMode] = useState(mode)

  const form = (mode: string): JSX.Element => {
    switch (mode) {
      case loginAccountFormMode:
        return (
          <>
            <div className={classes.title}>欢迎回来</div>
            <LoginAccount
              onPhoneLoginClick={() => setFormMode(loginPhoneFormMode)}
              onResetClick={() => setFormMode(resetAccountFormMode)}
            />
          </>
        )
      case resetAccountFormMode:
        return (
          <>
            <div className={classes.title}>重置密码</div>
            <ResetAccount
              onPhoneLoginClick={() => setFormMode(loginPhoneFormMode)}
            />
          </>
        )
      default:
        return (
          <>
            <div className={classes.title}>欢迎回来</div>
            <LoginPhone
              onAccountLoginClick={() => setFormMode(loginAccountFormMode)}
            />
          </>
        )
    }
  }
  return (
    <div className="w-80 flex flex-col items-center px-4 pt-7 pb-2">
      {/*<Avatar*/}
      {/*  alt="Logo"*/}
      {/*  src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"*/}
      {/*  className="w-20 h-20"*/}
      {/*/>*/}

      {/* Auth Form */}
      {form(formMode)}
    </div>
  )
}

export default UserAuth
