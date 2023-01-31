import React, {useState, useEffect, FC} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {ActivityIndicator, ScrollView} from 'react-native';
import {
  FishContainer,
  FishDescription,
  PropertyContainer,
  PropertyColumn,
  ColumnContainer,
  DescriptionContainer,
  ScrollContainer,
  RegisterButton,
  ButtonView,
  ExportButton,
  DownloadIcon,
  ExportButtonText,
  AddButtonView,
  AddLogButton,
  AddLogView,
  AddIcon
} from './styles';
import {GetOneWikiFish} from '../../services/wikiServices/getOneWikiFish';
import {ProfileImage} from '../../components/ProfileImage';
import {Property} from '../../components/Property';
import {Title} from '../../components/Title';
import {HalfToneText} from '../../components/HalfToneText';
import {RegularText} from '../../components/RegularText';
import {NoFishImagePhoto} from '../../components/NoFishImagePhoto';
import {storage} from '../../global/config/storage';

type IFish = {
  fish_id: string;
};

export const WikiFish: FC<IFish> = ({navigation, route}: any) => {
  const [fishName, setFishName] = useState('');
  const [fishPhoto, setFishPhoto] = useState('');
  const [fishSpecies, setFishSpecies] = useState('');
  const [fishFunFact, setFishFuNFact] = useState('');
  const [fishLargeGroup, setFishLargeGroup] = useState('');
  const [fishGroup, setFishGroup] = useState('');
  const [fishFamily, setFishFamily] = useState('');
  const [fishFeed, setFishFeed] = useState('');
  const [fishMaxSize, setFishMaxSize] = useState(0);
  const [fishMaxWeight, setFishMaxWeight] = useState(0);
  const [fishHabitat, setFishHabitat] = useState('');
  const [fishIsEndemic, setFishIsEndemic] = useState('');
  const [fishIsThreatened, setFishIsThreatened] = useState('');
  const [fishWasIntroduced, setFishWasIntroduced] = useState('');
  const [fishHasSpawningSeason, setFishHasSpawningSeason] = useState('');
  const {fish_id} = route.params;
  const [isLoading, setIsLoading] = useState(true);

  const getFishProperties = async () => {
    try {
      const biblio = storage.getString('biblioteca');
      let data = '';
      if (biblio) {
        data = JSON.parse(biblio);
      }
      const fish = data['allFishWiki'].find(item => item.id === fish_id);
      setIsLoading(true);
      setFishName(fish.commonName);
      setFishSpecies(fish.scientificName);
      setFishFuNFact(fish.funFact);
      setFishLargeGroup(fish.largeGroup);
      setFishGroup(fish.group);
      setFishFamily(fish.family);
      setFishFeed(fish.food);
      setFishHabitat(fish.habitat);
      setFishMaxSize(fish.maxSize);
      setFishMaxWeight(fish.maxWeight);
      setFishWasIntroduced(fish.wasIntroducedInfo);
      setFishIsEndemic(fish.isEndemicInfo);
      setFishIsThreatened(fish.isThreatenedInfo);
      setFishHasSpawningSeason(fish.hasSpawningSeasonInfo);
      if (fish.photo) {
        setFishPhoto(fish.photo);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const screenIsFocus = useIsFocused();

  useEffect(() => {
    getFishProperties();
  }, [screenIsFocus]);

  function setShowModalRegister(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

  return (
    <FishContainer source={require('../../assets/background_1-eupescador.png')}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollContainer>
          <ScrollView
            style={{width: '100%', height: '100%'}}
            contentContainerStyle={{width: '100%'}}>
            {fishPhoto ? (
              <ProfileImage source={{uri: fishPhoto}} />
            ) : (
              <NoFishImagePhoto />
            )}

            <DescriptionContainer>
              <Title text={fishName} />
              <RegularText text={fishSpecies} />
              <FishDescription>
                <RegularText text={fishFunFact ? `"${fishFunFact}"` : ''} />
              </FishDescription>
            </DescriptionContainer>

            <ColumnContainer>
              <PropertyColumn>
                <PropertyContainer>
                  <Property property="Grande Grupo" value={fishLargeGroup} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Família" value={fishFamily} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Tamanho Máx(cm)"
                    value={fishMaxSize?.toString() || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Habitat" value={fishHabitat} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Ameaçado?"
                    value={fishIsThreatened || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Foi indroduzido?"
                    value={fishWasIntroduced || '-'}
                  />
                </PropertyContainer>
              </PropertyColumn>

              <PropertyColumn>
                <PropertyContainer>
                  <Property property="Grupo" value={fishGroup} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Alimentação" value={fishFeed} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Peso Máx(kg)"
                    value={fishMaxWeight?.toString() || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Endêmico?" value={fishIsEndemic || '-'} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Faz piracema?"
                    value={fishHasSpawningSeason || '-'}
                  />
                </PropertyContainer>
              </PropertyColumn>
            </ColumnContainer>

            <AddButtonView>
              <AddLogButton
                onPress={() => {
                  navigation.navigate('NewFishLog', {'fishInfos': {'name': fishName, 'group': fishGroup, 'largeGroup': fishLargeGroup, 'species': fishSpecies} })
                }}>
                <AddLogView>
                  <AddIcon name="add" />
                </AddLogView>
              </AddLogButton>
            </AddButtonView>
          </ScrollView>
        </ScrollContainer>
      )}
    </FishContainer>
  );
};
