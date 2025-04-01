// screens/ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { UserContext } from '../context/usercontext';

export default function ProfileScreen() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <Text>Não autenticado.</Text>;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Perfil</Text>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
