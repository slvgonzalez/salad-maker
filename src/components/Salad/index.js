import React from 'react'
import { Button, Table, Typography } from '@mui/material';
import SaladTable from './SaladTable'
import { AddCircle } from '@mui/icons-material';

const Salad = ({list, products}) => {

  const displaySalads = (list, products) => {
    return (
      list.map((salad) => (
        <Table key={salad.id}>
          <SaladTable  salad={salad} produtcs={ products }/>
        </Table>
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
