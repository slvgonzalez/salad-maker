import React from 'react'
import { Button as MuiButton } from '@mui/material';


export default function Button(props) {

    const { children, color, variant, onClick, className, ...other } = props;

    return (
        <MuiButton
            className={className || ''}
            variant={variant || "contained"}
            color={color || "default"}
            onClick={onClick}
            {...other}>
            {children}
        </MuiButton>
    )
}
