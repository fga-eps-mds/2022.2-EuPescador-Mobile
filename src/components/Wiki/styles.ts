import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import {DefaultButton} from '../Button';

export const PageContainer = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const SearchBarContainer = styled(Searchbar)`
  width: 80%;
  border-radius: ${RFValue(8, 640)}px;
  color: gray;
  background-color: white;
  margin-right: 8px;
`;

export const PesquisaContainer = styled.View`
  display: flex;
  max-height: 40px;
  flex-direction: row;
  width: 80%;
  margin-bottom: 16px;
`;

export const MyButton = styled.TouchableOpacity`
  width: 20%;
  background-color: ${({theme, type}) =>
    type === 'primary'
      ? theme.colors.secondary_dark
      : theme.colors.on_background};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(8, 640)}px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
`;

export const PesquisarButton = styled.Button`
  width: ${RFValue(242, 640)}px;
  border-radius: ${RFValue(8, 640)}px;
  color: gray;
  background-color: red;
`;

export const FishBodyContainer = styled.View`
  margin: 15px 16px;
`;

export const RowContainer = styled.View`
  width: ${RFValue(328, 640)}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${RFValue(16, 640)}px;
  background-color: ${({theme}) => theme.colors.background};
  color: black;
`;
export const TitleContainer = styled.View`
  width: 100%;
  padding-left: ${RFValue(16, 640)}px;
  margin-top: ${RFValue(32, 640)}px;
  margin-bottom: ${RFValue(11, 640)}px;
  flex-direction: row;
`;

export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
`;

export const TitleHighlight = styled.View`
  height: ${RFValue(1, 640)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const TitleText = styled.Text<{wiki: boolean}>`
  font-family: ${({theme}) =>
    p =>
      p.wiki ? theme.fonts.regular : theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  margin-right: ${RFValue(16, 640)}px;
`;

export const NoResultContainer = styled.View`
  align-self: center;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const BoldText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16, 640)}px;
  text-align: center;
  margin-bottom: ${RFValue(16, 640)}px;
  padding: 0 ${RFValue(34, 640)}px;
`;

export const RegularText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  text-align: center;
  margin-bottom: ${RFValue(16, 640)}px;
  padding: 0 ${RFValue(24, 640)}px;
`;

export const SearchImage = styled.Image`
  height: ${RFValue(80, 640)}px;
  width: ${RFValue(80, 640)}px;
  margin-bottom: ${RFValue(16, 640)}px;
  margin-top: ${RFValue(55, 640)}px;
`;

export const Spacer = styled.View`
  width: 16px;
`;
