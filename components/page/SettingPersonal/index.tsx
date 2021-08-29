import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import SettingMotto from 'components/page/SettingPersonal/SettingMotto'
import SelectorLocation from 'components/base/SelectorLocation'
import SelectorTag from 'components/base/SelectorTag'
import allIndustries from 'public/data/industries'
import InputImage from 'components/base/InputImage'
import { Controller, useForm } from 'react-hook-form'
import SettingHeader from 'components/base/SettingHeader'
import { DatePicker } from '@material-ui/lab'

export default function SettingPersonal(): JSX.Element {
  const [nickname, setNickName] = useState<string>('')
  const [birth, setBirth] = useState<Date | null>(null)
  const [sex, setSex] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [motto, setMotto] = useState<string>('')
  const [area, setArea] = useState({})
  const [industry, setIndustry] = useState<string>('')

  const { register, handleSubmit, control, reset } = useForm()

  const formSubmit = (data: any) => {
    console.log('submit data:', data)
  }

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex justify-between items-center w-full">
          {/* Avatar */}
          <div className="w-36 h-36 flex justify-center p-4">
            <InputImage
              fileSizeLimit={4000}
              onChange={(e) => {
                setAvatar(e.currentTarget.value)
              }}
            />
          </div>

          {/* Basic Input */}
          <div className="flex-grow ml-12">
            <Controller
              name="nickname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  error={nickname.trim() === ""}
                  label="昵称"
                  size="small"
                  // helperText={ nickname.trim() === "" && "昵称不能为空" }
                  value={nickname}
                  fullWidth
                  onChange={(e) => setNickName(e.target.value)}
                />
              )}
            />

            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="生日"
                  views={['year', 'month', 'day']}
                  mask="____-__-__"
                  // date="2021-08-17"
                  onChange={(v) => setBirth(v)}
                  value={birth}
                  // openPicker={}
                  // rawValue={new Date('2000-01-01')}
                  inputFormat="yyyy-MM-dd"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      fullWidth
                      className="my-3"
                    />
                  )}
                />
              )}
            />

            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <FormControl component="fieldset" {...field}>
                  {/* <FormLabel component="legend">性别</FormLabel> */}
                  <RadioGroup
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="M"
                      control={<Radio size="small" />}
                      label="男"
                    />
                    <FormControlLabel
                      value="W"
                      control={<Radio size="small" />}
                      label="女"
                    />
                    <FormControlLabel
                      value=""
                      control={<Radio size="small" />}
                      label="保密"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
        </div>

        <div className="my-3">
          {/* Motto */}
          <SettingMotto
            // inputRef={register}
            value={motto}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMotto(e.target.value)
            }
          />

          {/* Divider */}
          <Divider className="mt-3 mb-7" />

          {/* Location */}
          <div>
            <SettingHeader header="所在地区" />

            <SelectorLocation
              size="small"
              onAreaChange={(e, v) => {
                setArea(v)
              }}
            />
          </div>

          {/* Industry */}
          <div>
            <SettingHeader header="所属行业" />
            <TextField
              id="standard-select-currency"
              select
              label="行业选择"
              size="small"
              // helperText="Please select your currency"
              fullWidth
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {allIndustries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Hobby */}
          <div>
            <SettingHeader header="兴趣爱好" />
            <SelectorTag />
          </div>
        </div>

        <div>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
          >
            更 新
          </Button>
        </div>
      </form>
    </div>
  )
}
