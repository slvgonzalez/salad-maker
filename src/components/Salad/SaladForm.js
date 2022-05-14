import React from 'react'
import Form from '../../layouts/Form'
import Input from '../../controls/Input'
import { Grid } from '@mui/material'


const SaladForm = () => {
  return (
    <Form >
      <Grid container>
        <Grid item xs={6}>
          <Input
            disabled
            name="saladName"
            label="Salad Name"
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
