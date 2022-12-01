import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './global/styles/theme';
import HomeScreen from './screens/HomeScreen';

// import { Container } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
