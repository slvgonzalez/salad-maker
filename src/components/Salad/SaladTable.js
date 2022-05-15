import React from 'react';
import { TableBody, TableCell, TableRow } from "@mui/material";


const SaladTable = ({ salad, products, types}) => {

  console.log(types)
  console.log(products)



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
      {
        salad.ingredients.map((ingredient) => {
          return (
            <TableRow key={ingredient.id}>
              <TableCell>
                Id: {ingredient.id}
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
