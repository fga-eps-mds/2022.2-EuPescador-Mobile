import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniIcons from 'react-native-vector-icons/Ionicons'

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(16, 640)}px;
  margin-top: ${RFValue(20, 640)}px;
  width:100%;
`;

export const ImageTopBarContainer = styled.View`
  justify-items: center;
`;

export const InstructionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width:25%;
`;

export const IconContainer = styled.View`
  align-items: center;
`;

export const HeaderIcon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  color: black;
`;

export const IconText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: black;
`;

export const HeaderText = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;


export const InstructionButtonIcon = styled(IoniIcons)`
  color: ${({ theme }) => theme.colors.on_background}; 
`;

export const ImageTopBar = styled.Image`
  width: ${RFValue(140, 600)}px;
  height: ${RFValue(75, 640)}px;
`;


export const BackText = styled.Text`
  color: black;
  font-size: ${RFValue(16, 640)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: bold; 
`;
