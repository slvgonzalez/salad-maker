import React from 'react';
import { TableBody, TableCell, TableRow } from "@mui/material";

const SaladTable = ({ salad }) => {

  console.log("aqui los ingredients")
  console.log(salad.ingredients)

  const listIngredients = salad.ingredients.map((ingredient) => {
    return (
    <TableRow>
      <TableCell>
        Id: {ingredient.id}
      </TableCell>
      <TableCell>
        Servings: {ingredient.numOfServings}
      </TableCell>
    </TableRow>
    )
  })

  console.log("aqui los props del header")
  console.log(salad)

  const handleChange = (e) => {
    const val = e.target.value;
  };

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
      { listIngredients }
    </TableBody>
  );
};

export default SaladTable;
