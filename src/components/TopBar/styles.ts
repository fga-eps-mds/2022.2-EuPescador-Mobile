import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Box = styled.View`
  /* height: ${RFValue(82)}px; */
  width: 100%;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderIcon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  color: black;
`;
export const IconText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: black;
`;

export const HeaderText = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const InstructionButton = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
`;

export const InstructionButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  /* margin-left: auto; */
  color: ${({theme}) => theme.colors.on_background};
`;
