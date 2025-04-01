import React from 'react';
import { Card, Text } from 'react-native-paper';
import { Product } from '../types/Product';

type Props = { product: Product; onPress: () => void };

export default function ProductCard({ product, onPress }: Props) {
  return (
    <Card onPress={onPress} style={{ margin: 8 }}>
      <Card.Cover source={{ uri: product.image }} />
      <Card.Title title={product.name} subtitle={`€${product.price}`} />
    </Card>
  );
}
