import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


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
            {salad.size}
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
