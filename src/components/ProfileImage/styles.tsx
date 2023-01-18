import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Image = styled.Image`
  align-self: center;
  margin-top: ${RFValue(16, 640)}px;
  border-radius: 20px;
  height: ${RFValue(160, 640)}px;
  width: ${RFValue(200, 640)}px;
`;
