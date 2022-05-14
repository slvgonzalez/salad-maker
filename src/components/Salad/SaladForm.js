import React, { useState } from 'react'
import Form from '../../layouts/Form'
import Button from '../../controls/Button'
import Input from '../../controls/Input'
import Select from '../../controls/Select'
import { Grid } from '@mui/material'

const generateSaladModelObject = () => ({
    id: 1,
    name:"",
    type: "medium",
    ingredients:[],
    cost: 0,
    price: 0,
    hoursFresh:0,
    currentStock:0,
    deletedProductsId:""
  }
)



const SaladForm = () => {

  const [values, setValues] = useState(generateSaladModelObject());

  // const handleInputChange = e = {
  //   const {name, values} = e.target
  //   setValues({...values, })
  // }

  return (
    <Form >
      <Grid container>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
        </Grid>

      </Grid>
    </Form>
  )
}

export default SaladForm
