import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AuthProvider} from './contexts/authContext';
import {LocationProvider} from './contexts/locationContext';
import {theme} from './global/styles/theme';
import Navigation from './navigation/Navigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <AuthProvider>
      <LocationProvider>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <Navigation />
          </ThemeProvider>
        </NavigationContainer>
      </LocationProvider>
    </AuthProvider>
  );
}
