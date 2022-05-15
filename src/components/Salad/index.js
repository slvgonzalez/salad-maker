import React from 'react'
import { Button, TableBody, Typography } from '@mui/material';
import SaladForm from './SaladForm'
import SaladHeader from './SaladHeader'
import { AddCircle } from '@mui/icons-material';

const Salad = ({list}) => {

  const displaySalads = (list) => {
    console.log("Aqui el mapeo")
    console.log(list);

    return (
      list.map((salad) => (
        <TableBody>
          <SaladHeader props={salad}/>
        </TableBody>
    ))
    )
  }

  const addSalad = () => {
    console.log("Add Salad pressed")
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
          onClick={ addSalad }
          >
            Create Salad
          </Button>
      </div>
      { displaySalads(list) }
    </>
  )
}

export default Salad
