import { Button } from '@mui/material'
import UserAuthDialog from 'components/base/UserAuthDialog'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface NavbarProps {
  height?: string
  maxWidth?: string
  fixed?: boolean
}

function Navbar({
  height = '50px',
  maxWidth = 'none',
  fixed = true,
}: NavbarProps): JSX.Element {
  const [openAuthDialog, setOpenAuthDialog] = useState(false)
  return (
    <nav
      style={{ height: height }}
      className={clsx(
        'flex w-full justify-center px-4 bg-blue-100',
        fixed && 'fixed top-0 left-0 right-0'
      )}
    >
      <div
        className="flex items-center justify-between w-full"
        style={{ maxWidth: maxWidth }}
      >
        {/*Left Side*/}
        <div className="w-32 text-center">
          <Image
            src="https://www.baidu.com/img/flexible/logo/pc/result.png"
            height="30px"
            width="70px"
            alt="logo"
          />
        </div>

        {/*Center*/}
        <div className="flex-grow"></div>

        {/*Right Side*/}
        <div className="w-32 text-center">
          <Button onClick={() => setOpenAuthDialog(true)}>登 录</Button>
        </div>
      </div>

      <UserAuthDialog
        open={openAuthDialog}
        onClose={() => setOpenAuthDialog(false)}
      />
    </nav>
  )
}

export default Navbar
