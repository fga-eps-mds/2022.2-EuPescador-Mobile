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
  ButtonView,
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
            contentContainerStyle={{width: '100%'}}
            showsVerticalScrollIndicator={false}>
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
          </ScrollView>
          <AddButtonView>
              <AddLogButton
                onPress={() => {
                  navigation.navigate('NewFishLog' as never, {isNewRegister: true, 'fishInfos': {'name': fish.commonName, 'group': fish.group, 'largeGroup': fish.largeGroup, 'species': fish.scientificName} })
                }}>
                <AddLogView>
                  <AddIcon name="add" />
                </AddLogView>
              </AddLogButton>
            </AddButtonView>
        </ScrollContainer>
      )}
    </FishContainer>
  );
};
