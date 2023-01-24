import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  HeaderIcon,
  HeaderText,
  IconContainer,
  IconText,
  InstructionButton,
  InstructionButtonIcon,
  ImageTopBar,
  ImageTopBarContainer,
  BackText
  // Spacer,
} from './styles';

interface Props {
  iconLeft: string;
  sizeIconLeft: number;
  buttonFunctionLeft: ()=> void;
  title: string;
  icon: string;
  iconText: string;
  textBack: boolean
  buttonFunction: () => void;
}

export function TopBar({iconLeft,sizeIconLeft, buttonFunctionLeft,title, icon, iconText, buttonFunction, textBack}: Props) {
  return (
    <Box>
      <InstructionButton
        onPress={buttonFunctionLeft}>
        <InstructionButtonIcon name={iconLeft} size={sizeIconLeft} color="black"/>
        {textBack?
        <BackText>Voltar</BackText>
        : null}
      </InstructionButton>

      <ImageTopBarContainer>
        <ImageTopBar source={require('../../assets/logo_2-eupescador.png')}/>
      </ImageTopBarContainer>

      <TouchableOpacity
        style={{
        width:'25%', 
        alignItems: 'center',
        justifyContent: 'center', 
        flexDirection: 'row',
        position: 'relative'
      }}
        onPress={buttonFunction}>
          <HeaderIcon name={icon} />
          <IconText>{iconText}</IconText>
      </TouchableOpacity>
    </Box>
  );
}
