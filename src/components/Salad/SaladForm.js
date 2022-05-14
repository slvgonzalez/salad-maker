import React from 'react'
import Form from '../../layouts/Form'
import Input from '../../controls/Input'
import Select from '../../controls/Select'
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
          <Select
            label="Size"
            name="type"
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
