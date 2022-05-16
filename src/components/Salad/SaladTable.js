import React from 'react';
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import SelectForm from '../SelectForm';
import { AddCircle } from '@mui/icons-material';


const SaladTable = ({salad, ingredients, types}) => {


  const handleChange = (e) => {
    const val = e.target.value;
  };

  const findProduct = (id) => {
    const productFound = ingredients.find(ingredient => ingredient.id === id)
    return (productFound)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            {salad.name}
          </TableCell>
          <TableCell>
            <SelectForm types={types.saladTypes} salad={salad}/>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          salad.ingredients.map((ingredient) => {
            const product = findProduct(ingredient.id)
            return (
              <TableRow key={ingredient.id}>
                <TableCell>
                  {product.name}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Add" size="small" onClick={console.log("add serving")}>
                   <AddCircle fontSize="inherit" />
                  </IconButton>
                  Servings: {ingredient.numOfServings}
                </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
};

export default SaladTable;
