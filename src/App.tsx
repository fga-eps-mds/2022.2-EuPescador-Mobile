import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AuthProvider} from './contexts/authContext';
import {theme} from './global/styles/theme';
import Navigation from './navigation/Navigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
