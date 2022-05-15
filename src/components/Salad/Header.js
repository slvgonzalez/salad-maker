import React from 'react';
import { TableCell, TableRow } from "@mui/material";

const Header = ({ props }) => {

  console.log("aqui los props del header")
  console.log(props)

  const handleChange = (e) => {
    const val = e.target.value;
  };

  return (
    <TableRow>
      <TableCell>
        {props.name}
      </TableCell>
      <TableCell>
        {props.size}
      </TableCell>
    </TableRow>
  );
};

export default Header;
