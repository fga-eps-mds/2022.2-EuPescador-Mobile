import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {IFishLog} from '../FishLogCard';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-left: ${RFValue(8, 640)}px;
  margin-top: 15px;
`;

export const OptionsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(12, 640)}px;
`;

export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
  flex-direction: row;
`;

export const TitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  margin-right: ${RFValue(8, 640)}px;
`;

export const ButtonView = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin-right: ${RFValue(7, 640)}px;
`;
export const ExportButton = styled.TouchableOpacity`
  flex-direction: row;
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(39, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
  background-color: ${({theme}) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: space-around;
`;

export const ExportButtonText = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
`;

export const CancelButtonText = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
`;

export const DownloadIcon = styled(MaterialIcons)`
  font-size: ${RFValue(16, 640)}px;
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const DownloadIconBottom = styled(MaterialIcons)`
  font-size: ${RFValue(18, 640)}px;
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const FilterIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 640)}px;
  color: black;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ExportAllView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(8, 640)}px;
  margin-left: ${RFValue(8, 640)}px;
`;

export const ExportAllText = styled.Text`
  font-size: ${RFValue(12, 640)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const AddIcon = styled(MaterialIcons)`
  font-size: ${RFValue(36, 640)}px;
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const AddButtonView = styled.View`
  flex: 1;
  position: absolute;
  bottom: 3%;
  right: 22%;

  flex-direction: row;
  align-items: flex-end;
`;

export const AddLogButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
`;
export const AddLogView = styled.View`
  flex-direction: row;
  width: ${RFValue(56, 640)}px;
  height: ${RFValue(56, 640)}px;
  border-radius: ${RFValue(56, 640)}px;
  background-color: ${({theme}) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: space-around;
`;

export const ExportSelectedView = styled.View`
  flex: 1;
  position: absolute;
  bottom: 3%;
  right: 3%;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
`;

export const ExportSelectedButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
`;
export const ExportSelectedText = styled.Text`
  color: white;
  font-size: ${RFValue(11, 640)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const ExportSelectedButtonView = styled.View`
  flex-direction: row;
  width: ${RFValue(180, 640)}px;
  height: ${RFValue(35, 640)}px;
  border-radius: ${RFValue(50, 640)}px;
  background-color: ${({theme}) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: space-evenly;
  padding-left: ${RFValue(5, 640)}px;
`;

export const NotLoggedText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20, 640)}px;
`;
export const FishCardList = styled(
  FlatList as new () => FlatList<IFishLog>,
).attrs({
  numColumns: 2,
  columnWrapperStyle: {justifyContent: 'space-around'},
  contentContainerStyle: {
    alignItems: 'stretch',
    paddingBottom: RFValue(156),
  },
})``;

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
