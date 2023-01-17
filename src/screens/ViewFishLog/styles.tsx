import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const FishContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;

export const FishProfile = styled.Image`
  align-self: center;
  margin-top: ${RFValue(52, 640)}px;
  border-radius: ${RFValue(88, 640)}px;
  height: ${RFValue(156, 640)}px;
  width: ${RFValue(156, 640)}px;
`;

export const PropertyRow = styled.View`
  flex-direction: row;
  padding: 0px ${RFValue(16, 640)}px;
  width: 100%;
  justify-content: space-around;
  /* align-items: ; */
  margin-top: ${RFValue(10, 640)}px;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  margin: ${RFValue(10, 640)}px ${RFValue(22, 640)}px;
`;

export const RegisterButtonView = styled.View`
  align-items: center;
`;

export const MapViewImage = styled.Image`
  align-self: center;
  width: ${RFValue(145, 640)}px;
  height: ${RFValue(145, 640)}px;
  margin: ${RFValue(20, 640)}px 0;
`;
