import React from 'react'
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
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

  const addSalad = () => {

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
          <Button
          color="success"
          variant="outlined"
          startIcon={<AddCircle />}
          gutterBottom
          >
            Create Salad
          </Button>
      </div>
      { displaySalads(list) }
    </>
  )
}

export default Salad
