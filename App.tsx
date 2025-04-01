
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { lightTheme, darkTheme } from './theme';
import useThemeToggle from './theme/useThemeToggle';
import { UserProvider } from './context/usercontext';

export default function App() {
  const { theme } = useThemeToggle();

  return (
    <UserProvider>
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  </UserProvider>
  );
}

