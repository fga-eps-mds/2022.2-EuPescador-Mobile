import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageBackground} from 'react-native';

// export const HomeContainer = styled(ImageBackground)`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   padding: ${RFValue(51, 640)}px;
//   z-index: -3;
// `;

export const NewFishLogContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: -3;
`;

export const ElementsImagesFish = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ButtonPhotoFishContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: ${RFValue(30, 640)}px;
`;

export const ImageContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  background: #0095d9;
  border-radius: 20px;
  padding: 10px;

  margin-top: 8px;
  width: 174px;
  height: 40px;
`;

export const FishLogImageContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  flex-direction: row;

  border-radius: ${RFValue(88, 640)}px;
  height: ${RFValue(112, 640)}px;
  width: ${RFValue(112, 640)}px;

  border: 3px;
  border-style: dashed;
  border-color: #0095d9;

  margin-top: ${RFValue(41, 640)}px;
  margin-left: 30px;
`;

export const FishLogImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 61349843px;
`;

export const TopIcon = styled(MaterialIcons)`
  font-size: ${RFValue(20, 640)}px;
  color: white;
`;

export const TextClick = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16, 640)}px;
  font-weight: 700;
  line-height: ${RFValue(16, 640)}px;
  color: white;
  margin-top: ${RFValue(4, 640)}px;
  margin-left: 5px;
`;

export const InputContainer = styled.View`
  align-self: center;
  text-align: left;
  align-items: center;
  margin-top: ${RFValue(33, 640)}px;
  width: 100%;
`;

export const InputView = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
  border: ${RFValue(3, 640)}px #0095d9;
  border-radius: ${RFValue(15, 640)}px;
  margin-top: ${RFValue(10, 640)}px;
  width: ${RFValue(300, 640)}px;
  height: ${RFValue(50, 640)}px;
  background: white;
  font-weight: 700;
`;

export const InputBox = styled.View`
  margin-bottom: ${RFValue(32, 640)}px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(40, 640)}px;
  width: 95%;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14, 640)}px;
  margin-left: ${RFValue(4, 640)}px;
  color: black;
`;

export const OptionList = styled.ScrollView`
  margin: ${RFValue(6, 640)}px ${RFValue(7, 640)}px;
`;

export const OptionListItem = styled.TouchableOpacity`
  margin: ${RFValue(2, 640)}px ${RFValue(2, 640)}px;
`;

export const OptionsContainer = styled.View`
  height: ${RFPercentage(30)}px;
  width: ${RFValue(258, 640)}px;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.background};
  elevation: 8;
`;

export const RowView = styled.View`
  justify-content: center;
  height: ${RFValue(40, 640)}px;
  width: ${RFValue(258, 640)}px;
  flex-direction: row;
  margin-top: ${RFValue(10, 640)}px;
`;

export const BoxView = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(10, 640)}px;
  margin-bottom: ${RFValue(10, 640)}px;
`;

export const HalfInputView = styled.View`
  align-items: center;
  width: ${RFValue(140, 640)}px;
  height: ${RFValue(50, 640)}px;
  flex-direction: row;
  margin-right: ${RFValue(10, 640)}px;
  border: ${RFValue(3, 640)}px #0095d9;
  border-radius: ${RFValue(15, 640)}px;
  background: white;
`;

export const AddLocaleButton = styled.TouchableOpacity`
  margin-top: ${RFValue(36, 640)}px;
  width: ${RFValue(156, 640)}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const AddLocaleButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(18, 640)}px;
  color: ${({theme}) => theme.colors.on_background};
`;

export const AddLocaleButtonLabel = styled.Text`
  font-size: ${RFValue(14, 640)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  text-decoration: underline;
  color: ${({theme}) => theme.colors.on_background};
`;

export const SendButtonView = styled.View`
  align-items: center;
  margin-top: ${RFValue(36, 640)}px;
  padding-bottom: ${RFValue(20, 640)}px; ;
`;

export const SendButton = styled.TouchableOpacity`
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(40, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
  background-color: ${({theme}) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: center;
`;

export const SendButtonText = styled.Text`
  color: ${({theme}) => theme.colors.on_secondary_dark};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16, 640)}px;
  font-weight: 700;
`;

export const NewFishlogScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
  },
})`
   ;
`;
