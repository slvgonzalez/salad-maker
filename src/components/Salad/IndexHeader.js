import React from 'react'
import { Button, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const IndexHeader = () => {

  const addSalad = () => {
    console.log("Add Salad pressed")
  }

  return (
    <div className='wrapper'>
      <Typography
        gutterBottom
        variant="h5"
        align='center'>
          List of Salads
        </Typography>
        <Button
        variant="outlined"
        startIcon={<AddCircle />}
        onClick={ addSalad }
        >
          Create Salad
        </Button>
    </div>
  )
}

export default IndexHeader
