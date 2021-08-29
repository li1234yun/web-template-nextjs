/*
中国地区省市区数据
来源：国家统计局
Github repo: https://github.com/modood/Administrative-divisions-of-China
 */

import { createStyles, withStyles } from '@material-ui/styles'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import areaData from 'public/data/pca.json'
import { MenuItem, TextField } from '@material-ui/core'

const styles = createStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    columnGap: '0.3rem',
  },
})

interface PropType {
  classes?: {
    root: string
  }
  size?: 'small' | 'medium'
  onAreaChange?: (e:ChangeEvent<HTMLInputElement>, value:AreaType) => void
}

interface AreaType {
  province?: string
  city?: string
  district?: string
}

function SelectorLocation({
  classes,
  size,
  onAreaChange,
}: PropType): JSX.Element {
  const provinces = Object.keys(areaData)

  const [area, setArea] = useState<AreaType>({
    province: '',
    city: '',
    district: '',
  })

  const [cityChoices, setCityChoices] = useState<string[]>([])
  const [districtChoices, setDistrictChoices] = useState<string[]>([])

  const handleProvinceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = e.target.value
    if (!v) {
      return
    }

    const province = v
    const cities: string[] = Object.keys(areaData[v])
    setCityChoices(cities)
    const districts = areaData[v][cities[0]]
    setDistrictChoices(districts)
    setArea({
      province: province,
      city: cities[0],
      district: districts[0],
    })

    if (onAreaChange) {
      onAreaChange(e, area)
    }
  }

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    if (!v) {
      return
    }

    const districts = areaData[area.province][v]
    setDistrictChoices(districts)

    setArea({
      province: area.province,
      city: v,
      district: districts[0],
    })

    if (onAreaChange) {
      onAreaChange(e, area)
    }
  }

  const handleDistrictChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArea({
      province: area.province,
      city: area.city,
      district: e.target.value,
    })

    if (onAreaChange) {
      onAreaChange(e, area)
    }
  }

  return (
    <div className={classes?.root}>
      {/* Province */}
      <TextField
        select
        label="省份选择"
        size={size}
        value={area.province}
        onChange={handleProvinceChange}
      >
        {provinces.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      {/* City */}
      <TextField
        select
        label="城市选择"
        size={size}
        value={area.city}
        disabled={cityChoices.length === 0}
        onChange={handleCityChange}
      >
        {cityChoices.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      {/* District */}
      <TextField
        select
        label="区域选择"
        size={size}
        value={area.district}
        disabled={districtChoices.length === 0}
        onChange={handleDistrictChange}
      >
        {districtChoices.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default withStyles(styles)(SelectorLocation)
