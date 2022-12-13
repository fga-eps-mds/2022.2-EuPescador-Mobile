import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
`;
export const TitleContainer = styled.View`
  margin-left: ${RFValue(20, 640)}px;
  margin-top: ${RFValue(32, 640)}px;
  margin-bottom: ${RFValue(20, 640)}px;
  flex-direction: row;
`;
export const TitleHighlight = styled.View`
  height: ${RFValue(1, 640)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const TitleText = styled.Text<{admin: boolean; superAdmin: boolean}>`
  font-family: ${({theme}) =>
    p =>
      p.admin && p.superAdmin ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  margin-right: ${RFValue(16, 640)}px;
  color: black;
`;

export const InputScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const InputContainer = styled.View`
  align-self: center;
  text-align: left;
`;

export const InputView = styled.View`
  align-self: center;
  align-items: center;
  height: ${RFValue(39, 640)}px;
  flex-direction: row;
  border: ${RFValue(1, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
`;

export const InputBox = styled.View`
  margin-bottom: ${RFValue(32, 640)}px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(39, 640)}px;
  width: ${RFValue(258, 640)}px;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  color: black;
`;

export const InputMask = styled(TextInputMask)`
  height: ${RFValue(39, 640)}px;
  width: ${RFValue(258, 640)}px;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  color: black;
`;

export const CityStateView = styled.View`
  justify-content: space-between;
  height: ${RFValue(39, 640)}px;
  flex-direction: row;
`;

export const HalfInputView = styled.View`
  align-items: center;
  height: ${RFValue(39, 640)}px;
  width: ${RFValue(140, 640)}px;
  flex-direction: row;
  border: ${RFValue(1, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.colors.on_error};
  font-size: ${RFValue(12, 640)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin: ${RFValue(2, 640)}px 0 ${RFValue(8, 640)}px 0;
`;

// export const MaterialInputIcon = styled(MaterialIcons)`
//   font-size: ${RFValue(20, 640)}px;
//   color: #c4c4c4;
//   margin: 0 ${RFValue(11, 640)}px;
// `;

// export const ComunityInputIcon = styled(MaterialCommunityIcons)`
//   font-size: ${RFValue(20, 640)}px;
//   color: #c4c4c4;
//   margin: 0 ${RFValue(11, 640)}px;
// `;

export const RegisterButtonView = styled.View`
  align-items: center;
`;
