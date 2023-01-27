import React from 'react';
import { Text } from './styles';
import { View } from 'react-native';

interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return <Text>{text}</Text>
}
