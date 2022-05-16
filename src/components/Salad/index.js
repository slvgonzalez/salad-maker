import React from 'react';
import { Button } from '@mui/material';
import SaladTable from './SaladTable';


const Salad = (props) => {
  console.log(props)

  const allSalads = props.list

  // const calculateCost = () => {
  //   console.log("calculamos coste")
  // }

  // const calculatePrice = () => {
  //   console.log("calculamos precio")
  // }

  // const calculateHoursFresh = () => {
  //   console.log("calculamos aguante")
  // }

  // const ensaladas = allSalads.map((ensalada) => {
  //   return (
      // id: {ensalada.id},
      // name: {ensalada.name},
      // type: {ensalada.type},
      // ingredients: {ensalada.ingredients},
      // cost: {calculateCost()},
      // price: {calculatePrice()},
      // hoursFresh: {calculateHoursFresh()}
  //   )
  // })

  console.log("aqui las ensaladas")
  // console.log(ensaladas)

  const displaySalads = (allSalads) => {
    const types = props.types
    const ingredients = props.products
    return (
      allSalads.map((salad) => (
        <div className='wrapper' key={salad.id}>
          <SaladTable  salad={salad} ingredients={ ingredients } types={ types }/>
          <Button variant="text" onClick={() => console.log("add ingrdient")}>ADD INGREDIENT</Button>
        </div >
      ))
    )
  }

  return (
    <>
      { displaySalads(allSalads) }
    </>
  )
}

export default Salad
