import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const FishContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(51, 640)}px;
`;

export const FishDescription = styled.View`
  align-self: center;
`;

export const ScrollContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const PropertyContainer = styled.View`
  margin-bottom: ${RFValue(8, 640)}px;
  padding: 0px ${RFValue(36, 640)}px;
  width: 100%;
`;

export const PropertyColumn = styled.View`
  width: 70%;
  padding: 15px 0px;
`;

export const ColumnContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: ${RFValue(10, 640)}px;
  margin-bottom: ${RFValue(16, 640)}px;
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 0px;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  margin: ${RFValue(10, 640)}px ${RFValue(22, 640)}px;
`;

export const ButtonView = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin-right: ${RFValue(7, 640)}px;
`;

export const AddButtonView = styled.View`
  flex: 1;
  position: absolute;
  bottom: 3%;
  right: 22%;

  flex-direction: row;
  align-items: flex-end;
`;

export const AddLogButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
`;
export const AddLogView = styled.View`
  flex-direction: row;
  width: ${RFValue(56, 640)}px;
  height: ${RFValue(56, 640)}px;
  border-radius: ${RFValue(56, 640)}px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: space-around;
`;

export const AddIcon = styled(MaterialIcons)`
  font-size: ${RFValue(36, 640)}px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.bold};
`;