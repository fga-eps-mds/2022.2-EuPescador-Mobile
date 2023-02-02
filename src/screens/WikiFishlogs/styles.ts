import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {RFValue} from 'react-native-responsive-fontsize';

export const PageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const TitleButtonsContainer = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  width: 100%;
  padding: 5px ${RFValue(16, 640)}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0095d9;
  /* align-items: center; */
`;

export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
  padding: 8px 12px;
`;

// export const TitleHighlight = styled.View`
//   height: ${RFValue(1, 640)}px;
//   width: 100%;
//   background-color: ${({theme}) => theme.colors.secondary};
// `;

export const TitleText = styled.Text<{
  wiki: boolean;
  fishLogTab: boolean;
  mapTab: boolean;
}>`
  font-size: ${RFValue(13)}px;
  font-weight: 700;
  color: black;
`;

export const ChooseTab = styled.View`
  padding-top: 20px;
`;
