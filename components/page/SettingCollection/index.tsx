import UploadBookmark from 'components/base/UploadBookmark'
import SettingHeader from 'components/base/SettingHeader'
import { BookmarkItem } from 'utils/bookmark'
import { Button } from '@material-ui/core'
import { useState } from 'react'

function SettingCollection(): JSX.Element {
  const [bookmark, setBookmark] = useState<null | BookmarkItem>(null)
  const handleUploadCollection = (e: BookmarkItem) => {
    setBookmark(e)
  }

  return (
    <div>
      <div>
        <SettingHeader header="收藏设置" divider />

        <div>
          <UploadBookmark onChange={handleUploadCollection} convertData={true}/>
        </div>
      </div>

      <div className="my-3">
        <Button fullWidth variant="contained" disableElevation disabled={!bookmark}>
          上传
        </Button>
      </div>
    </div>
  )
}

export default SettingCollection
