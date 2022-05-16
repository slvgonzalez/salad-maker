import { Container, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import SaladDesigner from './components/Salad/SaladDesigner';


function App() {

  return (
    <Container maxWidth="md">
      <Typography
        gutterBottom
        variant="h2"
        align='center'>
          Welcome to
      </Typography>
      <SaladDesigner />

    </Container>
  );
}

export default App;
