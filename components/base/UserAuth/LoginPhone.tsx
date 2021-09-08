import FormLoginPhone from 'components/form/FormLoginPhone'
import { Button, Divider, IconButton } from '@mui/material'
import Image from 'next/image'
import alipaySVG from 'public/img/alipay.svg'
import wechatSVG from 'public/img/wechat.svg'
import githubSVG from 'public/img/github.svg'
import React, { ReactEventHandler } from 'react'

interface LoginPhoneProps {
  onAccountLoginClick: ReactEventHandler
}

function LoginPhone({ onAccountLoginClick }: LoginPhoneProps): JSX.Element {
  return (
    <div>
      <FormLoginPhone />
      <div>
        <Divider className="mt-1" />

        {/*Third Login*/}
        <div className="flex items-center justify-center">
          <div className="mx-3">
            <IconButton classes={{ root: 'p-1 m-1' }}>
              <Image
                src={alipaySVG}
                alt="alipay login"
                height="30px"
                width="30px"
              />
            </IconButton>
          </div>

          <div className="mx-3">
            <IconButton classes={{ root: 'p-1 m-1' }}>
              <Image
                src={wechatSVG}
                alt="wechat login"
                height="30px"
                width="30px"
              />
            </IconButton>
          </div>

          <div className="mx-3">
            <IconButton classes={{ root: 'p-1 m-1' }}>
              <Image
                src={githubSVG}
                alt="github login"
                height="30px"
                width="30px"
              />
            </IconButton>
          </div>
        </div>

        {/*Footer*/}
        <div className="flex items-center justify-between text-xs mt-1 mb-0">
          <div>
            注册登录即表示同意{' '}
            <span className="text-blue-500 text-xs">用户协议</span>
          </div>
          <div>
            <Button className="text-xs" onClick={onAccountLoginClick}>
              账号登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPhone
