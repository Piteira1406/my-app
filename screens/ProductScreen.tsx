// screens/ProductScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes';
//import api from '../services/api';

type Props = {
  route: RouteProp<RootStackParamList, 'Product'>;
};

export default function ProductScreen({ route }: Props) {
  const { id } = route.params;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text variant="titleLarge">{product.name}</Text>
      <Text variant="bodyMedium">Preço: €{product.price}</Text>
      <Button mode="contained" onPress={() => console.log('Adicionar ao carrinho')}>
        Adicionar ao Carrinho
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
}); 
