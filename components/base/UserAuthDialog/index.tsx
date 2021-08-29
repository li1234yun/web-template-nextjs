import { Dialog, DialogContent, DialogContentText } from '@material-ui/core'
import { ReactEventHandler } from 'react'
import UserAuth from 'components/base/UserAuth'

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
