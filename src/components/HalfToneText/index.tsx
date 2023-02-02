import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
  size:number
}

export function HalfToneText({ text,size }: Props) {
  return <Text style={{fontSize:size}}>{text}</Text>;
}
