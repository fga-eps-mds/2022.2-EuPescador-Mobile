import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {
  Box,
  HeaderIcon,
  HeaderText,
  IconContainer,
  IconText,
  Spacer,
} from './styles';

interface Props {
  title: string;
  icon: string;
  iconText: string;
  buttonFunction: () => void;
}

export function TopBar({title, icon, iconText, buttonFunction}: Props) {
  return (
    <Box>
      <HeaderText>{title}</HeaderText>

      <Image
        source={require('../../assets/logo_2-eupescador.png')}
        style={{height: 150, width: 200, resizeMode: 'contain'}}
      />

      <TouchableOpacity onPress={buttonFunction}>
        <IconContainer>
          <HeaderIcon name={icon} />
          <IconText>{iconText}</IconText>
        </IconContainer>
      </TouchableOpacity>
    </Box>
  );
}
