import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24, 640)}px;
  line-height: ${RFValue(30, 640)}px;
  color: ${({ theme }) => theme.colors.on_primary};
  margin: ${RFValue(4, 640)}px 0;
  font-weight: bold;
  text-align: center;
`;
