import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {
    DraftButtonCountCircle,
    DraftButtonCountText,
    DraftButtonLabel,
    DraftButtonTouchable
} from "./styles";
import { storage } from "../../App";
export const DraftButton = () => {
    const [drafts, setDrafts] = useState([]);
    const navigation = useNavigation();
    const getDrafts = async () => {
        const draftsData = await storage.getString('drafts');
        if (draftsData)
            setDrafts(JSON.parse(draftsData));

    }

    const handleDraft = () => {
        navigation.navigate("Drafts" as never);
    }

    useEffect(() => {
        getDrafts();
    }, [])
    return (
        <DraftButtonTouchable onPress={handleDraft}>
            <DraftButtonLabel>Rascunhos</DraftButtonLabel>
            <DraftButtonCountCircle>
                <DraftButtonCountText>{drafts.length}</DraftButtonCountText>
            </DraftButtonCountCircle>
        </DraftButtonTouchable>
    );
}