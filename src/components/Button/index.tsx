import React from 'react';
import { Button, ButtonText } from './styles';
import { ActivityIndicator } from 'react-native';

interface Props {
  text: string;
  type?: 'primary' | 'secondary';
  buttonFunction: VoidFunction;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function DefaultButton({
  text,
  type = 'primary',
  buttonFunction,
  loading,
  style,
}: Props) {
  return (
    <Button onPress={buttonFunction} type={type} style={{width: 338}}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}


export function DefaultMiniButton({
  text,
  type = 'primary',
  buttonFunction,
  loading,
  style,
}: Props) {
  return (
    <Button onPress={buttonFunction} type={type} style={{width: 200}}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}

export function MapButton({
  text,
  type = 'primary',
  buttonFunction,
  loading,
  style,
}: Props) {
  return (
    <Button onPress={buttonFunction} type={type} style={{width: 150}}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}

export function ViewFishLogButton({
  text,
  type = 'primary',
  buttonFunction,
  loading,
  style,
}: Props) {
  return (
    <Button onPress={buttonFunction} type={type} style={{width: 200, marginTop:10}}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}