import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: #0095D9;
  font-weight: bold;
  opacity: 1;
`;
