import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageBackground} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

export const PageContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
`;

export const TitleButtonsContainer = styled.ScrollView.attrs({
  horizontal: true,
  backgroundColor: 'red',
})`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  width: 100%;
  padding: 5px ${RFValue(16, 640)}px;
  margin-bottom: ${RFValue(11, 640)}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0095d999;
  /* align-items: center; */
`;

export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
  padding: 8px 12px;
`;

// export const TitleHighlight = styled.View`
//   height: ${RFValue(20, 640)}px;
//   width: 100%;
//   background-color: white;
// `;

export const TitleText = styled.Text<{
  wiki: boolean;
  fishLogTab: boolean;
  mapTab: boolean;
}>`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
  color: black;
`;

export const InstructionButton = styled.TouchableOpacity``;

export const InstructionButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 640)}px;
  /* margin-left: auto; */
  color: ${({theme}) => theme.colors.on_background};
`;

export const ChooseTab = styled.View`
  padding-top: 20px;
`;
