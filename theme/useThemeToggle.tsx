import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkTheme, lightTheme } from '.';

export default function useThemeToggle() {
  const systemTheme = useColorScheme();
  const [mode, setMode] = useState<'light' | 'dark'>(systemTheme || 'light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then(saved => {
      if (saved === 'light' || saved === 'dark') {
        setMode(saved);
      }
    });
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    AsyncStorage.setItem('theme', newMode);
  };

  return {
    theme: mode === 'dark' ? darkTheme : lightTheme,
    toggleTheme,
    mode,
  };
}
