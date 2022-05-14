import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Salad from './components/Salad/index.js';

function App() {

  return (
    <Container maxWidth="md">
      <Typography
        gutterBottom
        variant="h2"
        align='center'>
          Mel's Kitchen
      </Typography>
      <Salad />
    </Container>
  );
}

export default App;
