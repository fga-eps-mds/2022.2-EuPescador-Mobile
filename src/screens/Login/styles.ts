import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const LoginContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-size: contain;
`;

export const HomeLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(64, 640)}px;
`;
export const HomeAppImage = styled.Image`
  width: ${RFValue(225, 600)}px;
  height: ${RFValue(130, 640)}px;
  margin-bottom: ${RFValue(16, 640)}px;
`;
export const HomeAppTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15, 640)}px;
  line-height: ${RFValue(22, 640)}px;
  color: ${({theme}) => theme.colors.on_background};
`;
export const HomeAppTitleBlue = styled(HomeAppTitle)`
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`;

export const InputContainer = styled.View`
  align-self: center;
  text-align: left;
  
`;

export const InputView = styled.View`
  align-self: center;
  align-items: center;
  height: ${RFValue(43, 640)}px;
  width: ${RFValue(270, 640)}px;
  flex-direction: row;
  border: 2px solid #0095d9;
  color: #0095d9;
  border-radius: 20px;
  background-color: white;
  padding: 8px;
`;

export const InputBox = styled.View`
  margin-bottom: ${RFValue(10, 640)}px;
`;

export const NotAccountText = styled.Text`
  self-align: center;
  font-weight: bold;
  color: black;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(39, 640)}px;
  width: ${RFValue(258, 640)}px;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  margin: 0 ${RFValue(11, 640)}px;
  color: #0095d9;
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.on_error};
  font-size: ${RFValue(12, 640)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin: ${RFValue(2, 640)}px 0 ${RFValue(8, 640)}px ${RFValue(7, 640)}px;
`;

export const LoginButtonView = styled.View`
  align-items: center;
  width: ${RFValue(270, 600)}px;
  margin: ${RFValue(25, 640)}px 0px 5px 0px;
`;

export const ForgotPasswordContainer = styled.View`
  align-items: center;
  margin: ${RFValue(-5, 640)}px 0px 15px 0px;
`;

export const ForgotPasswordLogLink = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: #0095d9;
  text-decoration: underline;
`;

export const HomePhraseContainer = styled.View`
  flex-direction: row;
  margin: ${RFValue(4, 640)}px 0px;
`;
export const HomeRegularText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10.5, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({theme}) => theme.colors.on_background};
`;
export const HomeLogLink = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(10.5, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({theme}) => theme.colors.on_background};
`;
