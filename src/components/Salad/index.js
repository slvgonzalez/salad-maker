import React from 'react';
import { Button, Table } from '@mui/material';
import SaladTable from './SaladTable';


const Salad = (props) => {
  console.log(props)

  const list = props.list

  const displaySalads = (list) => {

    const types = props.types
    const ingredients = props.products
    return (
      list.map((salad) => (
        <Table key={salad.id}>
          <SaladTable  salad={salad} ingredients={ ingredients } types={ types }/>
        </Table>
      ))
    )
  }

  return (
    <>
      { displaySalads(list) }
    </>
  )
}

export default Salad
