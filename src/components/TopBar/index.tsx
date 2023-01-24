import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {
  Box,
  HeaderIcon,
  HeaderText,
  IconContainer,
  IconText,
  InstructionButton,
  InstructionButtonIcon,
  // Spacer,
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
      <InstructionButton
        onPress={() => {
          // setShowModal(true);
        }}>
        <InstructionButtonIcon name="info" />
      </InstructionButton>

      <Image
        source={require('../../assets/logo_2-eupescador.png')}
        style={{
          flex: 1,
          height: 150,
          width: 200,
          resizeMode: 'contain',
          padding: '20%',
        }}
      />

      <TouchableOpacity
        style={{width: '25%', alignItems: 'center'}}
        onPress={buttonFunction}>
        <IconContainer>
          <HeaderIcon name={icon} />
          <IconText>{iconText}</IconText>
        </IconContainer>
      </TouchableOpacity>
    </Box>
  );
}
