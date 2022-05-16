import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectForm = (props) => {

  const handleChange = () => {
    console.log("size changed")
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Size</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={35}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={25}>Small</MenuItem>
        <MenuItem value={35}>Medium</MenuItem>
        <MenuItem value={45}>Large</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectForm
