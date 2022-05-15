import React from 'react'
import { IconButton, Tooltip, Typography } from '@mui/material';
import SaladForm from './SaladForm'
import Header from './Header'
import { AddCircle } from '@mui/icons-material';

const Salad = ({list}) => {

  console.log(list)

  const displaySalads = (list) => {
    list.map((salad) => (
      < div ClassName="card">
        <Header props={salad}/>
        <SaladForm salad={salad} />
      </ div >
    ))
  }

  return (
    <>
      <div className='wrapper'>
        <Typography
          gutterBottom
          variant="h5"
          align='center'>
            List of Salads
        </Typography>
        <Tooltip title="Create a salad">
          <IconButton>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </div>
      { displaySalads(list) }
    </>
  )
}

export default Salad
