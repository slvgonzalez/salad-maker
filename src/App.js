import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import SaladDesigner from './components/Salad/SaladDesigner';
import Button from './controls/Button';


function App() {

  return (
    <Container maxWidth="md">
      <Typography
        gutterBottom
        variant="h2"
        align='center'>
          Mel's Kitchen
      </Typography>
      <SaladDesigner />

    </Container>
  );
}

export default App;
