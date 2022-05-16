import React from 'react';
import { TableBody, TableCell, TableRow } from "@mui/material";


const SaladTable = (props) => {

  console.log(props)
  const salad = props.salad


  const handleChange = (e) => {
    const val = e.target.value;
  };

  const findProduct = (id, products) => {
    const productFound = products.find(ingredient => ingredient.id === id)
    return productFound
  }

  return (
    <TableBody>
      <TableRow>
        <TableCell>
          {salad.name}
        </TableCell>
        <TableCell>
          {salad.size}
        </TableCell>
      </TableRow>
      {
        salad.ingredients.map((ingredient) => {
          return (
            <TableRow key={ingredient.id}>
              <TableCell>
                Find Product function
              </TableCell>
              <TableCell>
                Servings: {ingredient.numOfServings}
              </TableCell>
            </TableRow>
          )
        })
      }
    </TableBody>
  );
};

export default SaladTable;
