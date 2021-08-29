import { withStyles } from '@material-ui/styles'
import { BookmarkItem, parseBookmarkFile } from 'utils/bookmark'
import { ChangeEventHandler, useState } from 'react'
import { Theme } from '@material-ui/core'

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
    borderRadius: theme.shape.borderRadius,
    border: 'dashed 1px gray',
    height: '6rem',
    '& :hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  input: {
    display: 'none',
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#777777',
    cursor: 'pointer',
  },
})

interface PropType {
  classes: {
    root: string
    input: string
    label: string
  }
  convertData?: boolean
  onChange: (e: BookmarkItem) => void
}

function UploadBookmark({
  classes,
  onChange,
  convertData = false,
}: PropType): JSX.Element {
  const [tip, setTip] = useState<string>('点击上传导出的收藏夹')
  const fileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('file input change:', e)
    if (!e.target.files || e.target.files.length === 0) {
      alert('无效的上传文件')
      return
    }

    // 获取上传的文件
    const uploadFile = e.target.files[0]
    console.log('upload file:', uploadFile)
    if (uploadFile.type !== 'text/html') {
      alert('无效的书签文件')
      return
    }

    // 解析html文件
    const reader = new FileReader()
    reader.readAsText(uploadFile)
    reader.onload = (e) => {
      console.log('file reader onload:', e, convertData)
      const r = parseBookmarkFile(e.target?.result as string, true, convertData)
      console.log('parse bookmark file result:', r, JSON.stringify(r))
      setTip(uploadFile.name)
      onChange(r)
    }
  }

  return (
    <div className={classes.root}>
      <input
        type="file"
        className={classes.input}
        id="upload"
        onChange={fileChange}
      />
      <label className={classes.label} htmlFor="upload">
        <div>{tip}</div>
      </label>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(UploadBookmark)
