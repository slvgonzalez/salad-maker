import React from 'react';
import { TableBody, TableCell, TableRow } from "@mui/material";


const SaladTable = ({salad, ingredients, types}) => {


  const handleChange = (e) => {
    const val = e.target.value;
  };

  const findProduct = (id) => {
    const productFound = ingredients.find(ingredient => ingredient.id === id)
    return (productFound)
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
          const product = findProduct(ingredient.id)
          return (
            <TableRow key={ingredient.id}>
              <TableCell>
                {product.name}
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
