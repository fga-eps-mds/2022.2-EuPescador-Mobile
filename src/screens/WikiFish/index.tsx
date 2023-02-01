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
  id: string;
  commonName: string;
  photo: string;
  scientificName: string;
  funFact: string;
  largeGroup: string;
  group: string;
  family: string;
  food: string;
  maxSize: number;
  maxWeight: number;
  habitat: string;
  isEndemicInfo: string;
  isThreatenedInfo: string;
  wasIntroducedInfo: string;
  hasSpawningSeasonInfo: string;
};

export const WikiFish: FC<IFish> = ({navigation, route}: any) => {
  const [fish, setFish] = useState<IFish>({
    id: '',
    commonName: '',
    photo: '',
    scientificName: '',
    funFact: '',
    largeGroup: '',
    group: '',
    family: '',
    food: '',
    maxSize: 0,
    maxWeight: 0,
    habitat: '',
    isEndemicInfo: '',
    isThreatenedInfo: '',
    wasIntroducedInfo: '',
    hasSpawningSeasonInfo: '',
  });

  const {fish_id} = route.params;

  const [isLoading, setIsLoading] = useState(true);

  const getFishProperties = async () => {
    try {
      const biblio = storage.getString('biblioteca');

      let data: {allFishWiki: IFish[]};
      if (biblio) {
        data = JSON.parse(biblio);
      } else {
        return;
      }

      const fishLocalStorage = data['allFishWiki'].find(item => {
        if (item.id === fish_id) {
          return true;
        }
      });

      if (!fishLocalStorage) {
        return;
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

      setFish(fishLocalStorage);

      setIsLoading(true);

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
            {fish?.photo ? (
              <ProfileImage source={{uri: fish?.photo}} />
            ) : (
              <NoFishImagePhoto />
            )}

            <DescriptionContainer>
              <Title text={fish?.commonName} />
              <RegularText text={fish.scientificName} />
              <FishDescription>
                <RegularText text={fish?.funFact ? `"${fish?.funFact}"` : ''} />
              </FishDescription>
            </DescriptionContainer>

            <ColumnContainer>
              <PropertyColumn>
                <PropertyContainer>
                  <Property property="Grande Grupo" value={fish?.largeGroup} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Família" value={fish.family} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Tamanho Máx(cm)"
                    value={fish.maxSize?.toString() || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Habitat" value={fish.habitat} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Ameaçado?"
                    value={fish.isThreatenedInfo || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Foi indroduzido?"
                    value={fish.wasIntroducedInfo || '-'}
                  />
                </PropertyContainer>
              </PropertyColumn>

              <PropertyColumn>
                <PropertyContainer>
                  <Property property="Grupo" value={fish.group} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property property="Alimentação" value={fish.food} />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Peso Máx(kg)"
                    value={fish.maxWeight?.toString() || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Endêmico?"
                    value={fish.isEndemicInfo || '-'}
                  />
                </PropertyContainer>

                <PropertyContainer>
                  <Property
                    property="Faz piracema?"
                    value={fish.hasSpawningSeasonInfo || '-'}
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
