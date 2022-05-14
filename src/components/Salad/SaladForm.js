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
          <Input
            disabled
            name="saladName"
            label="Salad Name"
            value={values.name}
          />
          <Select
            label="Size"
            name="type"
            value={values.size}
            options = {[
              { size: 'Select a size' },
              { size: 'small', targetCost: 1.5, targetWeight: 150 },
              { size: 'medium', targetCost: 2.5, targetWeight: 300 },
              { size: 'large', targetCost: 3.5, targetWeight: 550 },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            disabled
            name="saladSize"
            label="Size"
          />
        </Grid>

      </Grid>
    </Form>
  )
}

export default SaladForm
