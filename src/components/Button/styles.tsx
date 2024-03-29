import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonTypes {
  type: "primary" | "secondary"
}

export const Button = styled.TouchableOpacity<ButtonTypes>`
  width: ${RFValue(298, 640)}px;
  height: ${RFValue(47, 640)}px;
  border-radius: ${RFValue(20, 640)}px;
  background-color: ${({ theme, type }) => type === "primary" ? theme.colors.secondary_dark : theme.colors.on_background};
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(8, 640)}px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16, 640)}px;
  font-weight: bold;
  `;
