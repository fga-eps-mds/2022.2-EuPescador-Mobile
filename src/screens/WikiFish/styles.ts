import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageBackground } from 'react-native';


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
