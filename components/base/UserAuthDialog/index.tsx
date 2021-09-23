import { Dialog, DialogContent } from '@mui/material'
import UserAuth from 'components/base/UserAuth'
import { ReactEventHandler } from 'react'

interface UserAuthDialogProps {
  open: boolean
  onClose: ReactEventHandler
}

export default function UserAuthDialog({
  open = false,
  onClose,
}: UserAuthDialogProps): JSX.Element {
  return (
    <>
      <Dialog open={open} onClose={onClose} className="overflow-y-hidden">
        <DialogContent classes={{ root: 'overflow-y-hidden p-0' }}>
          <UserAuth />
        </DialogContent>
      </Dialog>
    </>
  )
}
