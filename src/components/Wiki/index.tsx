import React, { useState, useEffect, useReducer } from 'react';
import { ActivityIndicator } from 'react-native';
import { FishWiki } from '../../interfaces/FishWiki';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import { FilterButton } from '../FilterButton';
import {
  SearchBarContainer,
  RowContainer,
  NoResultContainer,
  BoldText,
  RegularText,
  SearchImage,
  FishBodyContainer,
  PesquisarButton,
  PesquisaContainer,
  SearchButton,
  MyButton,
  ButtonText,
} from './styles';
import { WikiFishList } from '../WikiFishList';
import { storage } from "../../App";


export const Wiki = (
  { navigation,
    filterQuery,
  }: any
) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [fishes, setFishes] = useState<FishWiki[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ignored, setIgnored] = useState(0);
  

  const handleNavigation = (id: string) => {
    navigation.navigate(
      'WikiFish' as never,
      {
        fish_id: id,
      } as never,
    );
  };
  
  const updateFishes = async () => {
    setIsLoading(true);
    try {
      const data = await GetWikiFishes();
      setFishes(data);
      storage.set('biblioteca', JSON.stringify(data));
    } catch (error: any) {
      const biblio = storage.getString('biblioteca');
      if (biblio) {
        setFishes(JSON.parse(biblio));
      }
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if(searchQuery==="")
      updateFishes()
  }, [searchQuery]);

  useEffect(() => {
      updateFishes()
  }, []);


  return (
    <FishBodyContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
        <PesquisaContainer>
            <SearchBarContainer
              placeholder="Pesquisar"
              placeholderTextColor="rgba(0, 0, 0, 0.7)"
              onChangeText={setSearchQuery}
              value={searchQuery}
              iconColor="#202E00"
              />

            <MyButton onPress={updateFishes} type="primary">
              <ButtonText>Buscar</ButtonText>
            </MyButton>
          </PesquisaContainer>
          {fishes && fishes["allFishWiki"].length > 0 && fishes["allFishWiki"].filter(fish => {
            if (
              !searchQuery ||
              fish.commonName!
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim()) ||
              fish.scientificName!
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            ) {
              return fish;
            }
          }).length ? (
            <WikiFishList
              fishData={
                fishes["allFishWiki"].filter(item => {
                if (
                  !searchQuery ||
                  item.commonName!
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase().trim()) ||
                  item.scientificName!
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase().trim())
                ) {
                  return item;
                }
              })}
              type="fishWiki"
              handleNavigation={handleNavigation}
            />
          ) : (
            <NoResultContainer>
              <SearchImage source={require('../../assets/search.png')} />
              {searchQuery ? (
                <>
                  <BoldText>Não encontramos nada com o termo digitado</BoldText>
                  <RegularText>
                    Por favor, verifique sua pesquisa e tente novamente para obter
                    resultados.
                  </RegularText>
                </>
              ) : (

                filterQuery ? (

                  <>
                    <BoldText>Não encontramos nada com os filtros utilizados</BoldText>
                    <RegularText>
                      Por favor, verifique sua pesquisa e tente novamente para obter
                      resultados.
                    </RegularText>
                  </>

                ) : (
                  <>
                    <BoldText>Não encontramos nada na biblioteca</BoldText>
                    <RegularText>
                      Por favor, verifique sua conexão e tente novamente para obter
                      resultados.
                    </RegularText>
                  </>
                )
              )}
            </NoResultContainer>

          )}
        </>
      )
      }
    </FishBodyContainer >
  );
};
