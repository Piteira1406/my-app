import React from 'react';
import { Appbar } from 'react-native-paper';

type Props = { title: string };

export default function Header({ title }: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
