import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

export const PageContainer = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const SearchBarContainer = styled(Searchbar)`
  width: ${RFValue(242)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(8, 640)}px;
  border: 1px solid ${({theme}) => theme.colors.on_background};
  background-color: ${({theme}) => theme.colors.background};
`;

export const FishBodyContainer = styled.View`
  margin: 0px 16px;
`;

export const RowContainer = styled.View`
  width: ${RFValue(328, 640)}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${RFValue(16, 640)}px;
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
