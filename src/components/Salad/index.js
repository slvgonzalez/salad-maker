import React from 'react'
import { Typography } from '@mui/material';
import SaladForm from './SaladForm'

const Salad = ({list}) => {

  console.log(list)

  const displaySalads = (list) => {
    list.map((salad) => <SaladForm salad={salad} /> )
  }

  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        align='center'>
          List of Salads
      </Typography>
      {displaySalads(list)}
    </>
  )
}

export default Salad
