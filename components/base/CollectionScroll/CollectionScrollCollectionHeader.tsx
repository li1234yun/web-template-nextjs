import Box from '@mui/system/Box'

interface CollectionScrollCollectionHeaderProps {
  classes?: {
    root: string
    title: string

    // level classes
    level1: string
    level2: string
    level3: string
  }
  title: string
  level: number
  order: number
  index: number
  headerClassNamePrefix?: string
}

function CollectionScrollCollectionHeader({
  classes,
  title,
  headerClassNamePrefix = 'scroll-header',
  level,
  order,
  index,
}: CollectionScrollCollectionHeaderProps): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '12px 0 5px',
      }}
      data-order={order}
      data-level={level}
      data-index={index}
      className={`${classes?.root}
        ${headerClassNamePrefix} ${[
        headerClassNamePrefix,
        order.toString(),
        level.toString(),
        index.toString(),
      ].join('-')}
        `}
    >
      <Box
        sx={{
          fontSize: (20 - 2 * level).toString() + 'px',
        }}
      >
        {title}
      </Box>
    </Box>
  )
}

export default CollectionScrollCollectionHeader
