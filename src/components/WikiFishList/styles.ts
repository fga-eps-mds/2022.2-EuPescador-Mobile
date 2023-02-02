import styled from "styled-components/native";
import { FlatList } from "react-native";
import { IFishLog, IFish } from "../FishLogCard";
import { RFValue } from "react-native-responsive-fontsize";

export const FishCardList = styled(
    FlatList as new () => FlatList<IFishLog | IFish>,
).attrs({
    numColumns: 2,
    contentContainerStyle: {
        width:RFValue(150,300),
        alignItems: 'stretch',
        padding:0,
    },
})``;
