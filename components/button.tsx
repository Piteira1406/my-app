import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

export default function Button(props) {
  return (
    <PaperButton mode="contained" {...props} style={{ marginVertical: 8 }} />
  );
}
