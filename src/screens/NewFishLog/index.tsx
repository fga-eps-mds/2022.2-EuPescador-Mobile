import React, { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import {
  Alert,
  PermissionsAndroid,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import { RegularText } from '../../components/RegularText';
import { HalfToneText } from '../../components/HalfToneText';
import { ActivityIndicator, Switch } from 'react-native-paper';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { GetOneFishLog } from '../../services/fishLogService/getOneFishLog';
import { UpdateFishLog } from '../../services/fishLogService/updateFishLog';
import { TopBar } from '../../components/TopBar';
// import { data } from "../../utils/dataFishes";
import {
  NewFishLogContainer,
  ImageContainer,
  FishLogImage,
  TopIcon,
  TextClick,
  InputContainer,
  InputView,
  InputBox,
  Input,
  RowView,
  BoxView,
  HalfInputView,
  SendButtonView,
  SendButton,
  SendButtonText,
  OptionList,
  OptionsContainer,
  OptionListItem,
  AddLocaleButton,
  AddLocaleButtonLabel,
  AddLocaleButtonIcon,
  NewFishlogScroll,
  ElementsImagesFish,
  ButtonPhotoFishContainer,
  FishLogImageContainer,
} from './styles';
import { storage } from '../../global/config/storage';
import { Title } from '../../components/Title';

export interface IFish {
  _id: string;
  largeGroup: string;
  group: string;
  commonName: string;
  scientificName: string;
  family: string;
  food: string;
  habitat: string;
  maxSize: number;
  maxWeight: number;
  isEndemic: string;
  isThreatened: string;
  hasSpawningSeason: string;
  wasIntroduced: string;
  funFact: string;
  photo: string;
}

export function NewFishLog({navigation, route}: any) {
  const currentRoute = useNavigation();

  const [isNew, setIsNew] = useState(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState<Boolean>(false);
  const [canEdit, setCanEdit] = useState<Boolean>(false);
  const [fishes, setFishes] = useState<IFish[]>([]);
  const [fishPhoto, setFishPhoto] = useState<string | undefined | undefined>();
  const [fishName, setFishName] = useState<string | undefined>();
  const [fishLargeGroup, setFishLargeGroup] = useState<string | undefined>('');
  const [fishGroup, setFishGroup] = useState<string | undefined>();
  const [fishSpecies, setFishSpecies] = useState<string | undefined>();
  const [fishWeight, setFishWeight] = useState<string | undefined>();
  const [fishLength, setFishLength] = useState<string | undefined>();
  const [fishLatitude, setFishLatitude] = useState<string | undefined>();
  const [fishLongitude, setFishLongitude] = useState<string | undefined>();
  const [dropLargeGroup, setDropLargeGroup] = useState(false);
  const [dropGroup, setDropGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isDraft, setIsDraft] = useState(false);
  const [draftId, setDraftId] = useState<string | null>(null);
  const [fishFamily, setFishFamily] = useState<string | undefined>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [location, setLocation] = useState<GeoPosition>();
  // Modify this
  const [catchDate,setCatchDate] = useState<string|undefined>(); 
  const [catchHour, setCatchHour] = useState<string|undefined>();

  const netInfo = useNetInfo();
  const isOn = useNetInfo().isConnected;
  const getFishOptions = async () => {
    let newFishes: IFish[] = [];
    try {
      const wikiData = await GetWikiFishes();
      // for (let i = 0; i < wikiData.length; i++) {
      //   if (!newFishes.includes(wikiData[i])) {
      //     newFishes.push(wikiData[i]);
      //   }
      // }
      // await storage.set('@eupescador/FishesNames', JSON.stringify(newFishes));
      // setFishes(newFishes);
    } catch (error) {
      console.log(error);
    }
  };

  const setFishProps = async (fish: IFish) => {
    setFishName(fish.commonName);
    setFishSpecies(fish.scientificName);
    setFishFamily(fish.family);
    setFishLargeGroup(fish.largeGroup);
    setFishGroup(fish.group);
  };

  const getData = async () => {
    const userAdmin = await storage.getString('@eupescador/userAdmin');
    const userSuperAdmin = await storage.getString(
      '@eupescador/userSuperAdmin',
    );
    const token = await storage.getString('@eupescador/token');
    if (token) {
      getFishLogProperties(token);
    }
    if (userAdmin === 'true') {
      setIsAdmin(true);
      setIsSuperAdmin(false);
      setCanEdit(true);
    } else if (userSuperAdmin === 'true') {
      setIsAdmin(false);
      setIsSuperAdmin(true);
      setCanEdit(true);
    } else {
      setIsAdmin(false);
      setIsSuperAdmin(false);
      setCanEdit(false);
    }
  };

  const getOfflineFishOptions = async () => {
    const newFishes: any = storage.getString('@eupescador/FishesNames');
    setFishes(JSON.parse(newFishes));
  };

  const getFishLogProperties = async (token: string) => {
    try {
      const { log_id } = route.params;
      const log: any = await GetOneFishLog(log_id, token);
      if (log.photo) {
        const log64 = Buffer.from(log.photo).toString('base64');
        setFishPhoto(log64);
      }
      setFishName(log?.name || undefined);
      setFishSpecies(log?.species || undefined);
      setFishLargeGroup(log?.largeGroup || undefined);
      setFishGroup(log?.group || undefined);
      setFishWeight(log?.weight?.toString() || undefined);
      setFishLength(log?.length?.toString() || undefined);
      setFishFamily(log?.family || undefined);
      setFishLongitude(log?.coordenates?.longitude?.toString() || undefined);
      setFishLatitude(log?.coordenates?.latitude?.toString() || undefined);
      setIsVisible(log?.visible || undefined);
    } catch (error) {
      console.log(error);
    }
  };

  async function requestPermission() {
    // const permissionResult =
    // await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (permissionResult.granted === false) {
    //   Alert.alert('Error', 'É preciso permissão para colocar uma foto');
    // }
  }

  async function openCamera() {
    await requestPermission();

    const result = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });

    if (!result.assets) {
      return;
    }

    if (!result.assets[0].height) {
      return;
    }

    setFishPhoto(result.assets[0].base64);

    // const pickerResult = await ImagePicker.launchCameraAsync({
    //   base64: true,
    //   allowsEditing: true,
    //   quality: 0.1,
    // });
    // if (pickerResult.cancelled === true) {
    //   return;
    // }
    /*   if (pickerResult.height > 2200) {
      Alert.alert("Ops!", "Imagem muito grande!", [
        {
          text: "Ok",
        },
      ]);
      return;
    } */
    // setFishPhoto(pickerResult.base64);
  }

  async function pickImage() {
    // await requestPermission();

    // const pickerResult = await ImagePicker.launchImageLibraryAsync({
    //   allowsEditing: true,
    //   quality: 0.1,
    //   width: 200,
    //   height: 200,
    //   aspect: [1, 1],
    //   base64: true,
    // });

    // if (pickerResult.cancelled === true) {
    //   return;
    // }

    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });

    if (!result.assets) {
      return;
    }

    if (!result.assets[0].height) {
      return;
    }

    setFishPhoto(result.assets[0].base64);
    // /*    if (pickerResult.height > 2200) {
    //   Alert.alert("Ops!", "Imagem muito grande!", [
    //     {
    //       text: "Ok",
    //     },
    //   ]);
    //   return;
    // } */
    // setFishPhoto(pickerResult.base64);
  }

  const handleEditFishLog = async () => {
    let alertMessage = '';
    let alertTitle = '';
    const { log_id } = route.params;
    let reviewed = false;
    if (isAdmin || isSuperAdmin) {
      reviewed = true;
    }

    try {
      await UpdateFishLog(
        log_id,
        fishName,
        fishLargeGroup,
        fishGroup,
        fishSpecies,
        fishLatitude,
        fishLongitude,
        fishPhoto,
        fishLength,
        fishWeight,
        reviewed,
        isAdmin,
        isSuperAdmin,
        isVisible,
      );
      alertMessage = 'Registro atualizado com sucesso';
      alertTitle = 'Editar registro';
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'WikiFishlogs' }],
      });
      navigation.dispatch(resetAction);
    } catch (error: any) {
      if (error.response.status === 400) alertTitle = 'Sem informação';
      alertMessage = error.response.data.message;
    }
    if (alertMessage) {
      Alert.alert(alertTitle, alertMessage, [
        {
          text: 'Ok',
        },
      ]);
    }
  };

  const deleteDraft = async () => {
    if (isDraft) {
      const drafts = await storage.getString('drafts');
      if (drafts) {
        let draftList: [] = JSON.parse(drafts);
        if (draftId) draftList.splice(parseInt(draftId), 1);
        await storage.set('drafts', JSON.stringify(draftList));
      }
    }
  };

  const handleCreateFishLog = async () => {
    let alertMessage = '';
    const connection = await NetInfo.fetch();
    try {
      setIsLoading(true);
      if (connection.isConnected) {
        await createFishLog(
          fishPhoto,
          fishName,
          fishLargeGroup,
          fishGroup,
          fishSpecies,
          fishWeight,
          fishLength,
          fishLatitude,
          fishLongitude,
          isVisible,
        );
        alertMessage = 'Registro criado com sucesso!';
        await deleteDraft();
      } else {
        const userId = await storage.getString('@eupescador/userId');
        const coordenates = {
          latitude: parseFloat(fishLatitude!),
          longitude: parseFloat(fishLongitude!),
        };
        const fish = {
          userId,
          fishPhoto,
          name: fishName,
          largeGroup: fishLargeGroup,
          group: fishGroup,
          species: fishSpecies,
          length: parseFloat(fishLength!),
          weight: parseFloat(fishWeight!),
          coordenates,
        };

        const response = await storage.getString('@eupescador/newfish');

        let listFish = [];
        if (response) {
          listFish = JSON.parse(response);
          listFish.push(fish);
          await storage.set('@eupescador/newfish', JSON.stringify(listFish));
        } else {
          listFish.push(fish);
          await storage.set('@eupescador/newfish', JSON.stringify(listFish));
        }

        Alert.alert('Registro', 'Seu registro foi salvo com sucesso!');
      }

      setIsLoading(false);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'WikiFishlogs' }],
      });
      navigation.dispatch(resetAction);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      if (error.response.status === 400)
        alertMessage =
          'Informe no mínimo o grande grupo, espécie ou foto do peixe';
      else if (error.response.status === 413)
        alertMessage = 'Falha ao criar registro! Arquivo muito grande';
      else alertMessage = 'Falha ao criar registro!';
    }
    if (alertMessage) {
      Alert.alert('Registro', alertMessage, [
        {
          text: 'Ok',
        },
      ]);
    }
  };

  const saveDraft = async () => {
    setIsLoading(true);
    let drafts = storage.getString('drafts');
    const newDraft = {
      photoString: fishPhoto,
      name: fishName,
      largeGroup: fishLargeGroup,
      group: fishGroup,
      species: fishSpecies,
      weight: fishWeight,
      length: fishLength,
      latitude: fishLatitude,
      longitude: fishLongitude,
      visible: isVisible,
    };
    let newDrafts;
    if (drafts != null) {
      let oldDrafts = JSON.parse(drafts);
      if (isDraft) {
        if (draftId) {
          oldDrafts[parseInt(draftId)] = newDraft;
          newDrafts = oldDrafts;
        }
      } else {
        newDrafts = [...oldDrafts, newDraft];
      }
    } else {
      newDrafts = [newDraft];
    }
    storage.set('drafts', JSON.stringify(newDrafts));
    setIsLoading(false);
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: 'WikiFishlogs' }],
    });
    navigation.dispatch(resetAction);
    Alert.alert(
      'Rascunho salvo',
      'Seu rascunho foi salvo com sucesso, quando você tiver acesso a internet pode editar as informações que quiser e enviar para nosso servidor.',
    );
  };

  const getSendButton = () => {
    let text = isNew || !canEdit ? 'Enviar' : 'Revisar';
    let handleButton: () => void;
    if (isNew) {
      if (true) {
        handleButton = handleCreateFishLog;
      } else {
        text = 'Salvar rascunho';
        handleButton = saveDraft;
      }
    } else {
      handleButton = handleEditFishLog;
    }

    return (
      <SendButton onPress={handleButton}>
        <SendButtonText>{text}</SendButtonText>
      </SendButton>
    );
  };

  const loadData = async () => {
    setIsLoading(true);
    const connection = await NetInfo.fetch();
    const hasConnection = !!connection.isConnected;
    setIsConnected(hasConnection);
    getFishOptions();
    const { data, isNewRegister, isFishLogDraft, fishLogDraftId } = route.params;
    setIsNew(isNewRegister);
    if (data != null) {
      setIsAdmin(data?.isAdmin);
      setFishName(data?.name);
      setFishLargeGroup(data?.largeGroup);
      setFishGroup(data?.group);
      setFishSpecies(data?.species);
      setFishWeight(data?.weight);
      setFishLength(data?.length);
      setFishFamily(data?.family);
      setFishLatitude(data?.latitude?.toString());
      setFishLongitude(data?.longitude?.toString());
      setIsVisible(data?.visible);
      if (data.photo) {
        const log64 = Buffer.from(data.photo).toString('base64');
        setFishPhoto(log64);
      }
    }
    if (isFishLogDraft) {
      setIsDraft(true);
      setDraftId(fishLogDraftId);
    } else {
      if (!isNewRegister && hasConnection) {
        getData();
      }
    }
    setIsLoading(false);
  };

  const nameList = () => {
    return fishes
      .filter(item => {
        if (
          item.commonName
            .toLowerCase()
            .includes(fishName!.toLowerCase().trim()) &&
          item.commonName.toLowerCase() != fishName!.toLowerCase().trim()
        ) {
          if (fishGroup) {
            if (item.group.toLowerCase().includes(fishGroup.toLowerCase())) {
              return item;
            }
          } else if (fishLargeGroup) {
            if (
              item.largeGroup
                .toLowerCase()
                .includes(fishLargeGroup.toLowerCase())
            ) {
              return item;
            }
          } else return item;
        }
      })
      .map((item, index) => {
        return (
          <OptionListItem key={index} onPress={() => setFishProps(item)}>
            <RegularText text={item.commonName} />
          </OptionListItem>
        );
      });
  };

  const handleFishSpeciesInput = (species: string) => {
    setFishSpecies(species);
    const fish = fishes.find(element => element.scientificName === species);
    if (fish) {
      setFishFamily(fish.family);
    }
  };

  //Carregar Grupo (Dropdown)
  const groupList = () => {
    // const filteredGroupFishes = data.filter(item => {
    //   if (fishLargeGroup) {
    //     if (
    //       item.groupName
    //         .toLowerCase()
    //         .includes(fishLargeGroup.toLowerCase().trim())
    //     ) {
    //       return item;
    //     }
    //   } else {
    //     return item;
    //   }
    // });
    // let fishesGroup = filteredGroupFishes.map(item => item.subGroups);
    // fishesGroup = [...new Set(fishesGroup)];
    // return fishesGroup[0].map((item, index) => {
    //   return (
    //     <OptionListItem
    //       key={index}
    //       onPress={() => {
    //         setFishGroup(item);
    //         setDropGroup(false);
    //       }}>
    //       <RegularText text={item} />
    //     </OptionListItem>
    //   );
    // });
  };

  const handleOpenMap = async () => {
    const { log_id, name } = route.params;
    const result = requestLocationPermission();

    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            // setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });

    const connection = await NetInfo.fetch();
    setIsConnected(!!connection.isConnected);
    setIsLoading(true);

    setIsLoading(false);

    if (!fishLatitude && !fishLongitude) {
      setFishLatitude(location?.coords.latitude.toString());
      setFishLongitude(location?.coords.latitude.toString());
    }

    const latitude = fishLatitude
      ? parseFloat(fishLatitude)
      : location?.coords.latitude;

    const longitude = fishLongitude
      ? parseFloat(fishLongitude)
      : location?.coords.longitude;

    navigation.navigate('Maps', {
      isNew,
      isAdmin,
      photoString: fishPhoto,
      name: fishName,
      largeGroup: fishLargeGroup,
      group: fishGroup,
      species: fishSpecies,
      weight: fishWeight,
      length: fishLength,
      latitude,
      longitude,
      log_id,
      screenName: name,
    });
  };

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    // isOn ? console.log('on') : getOfflineFishOptions();
  }, []);

  useEffect(() => {
    loadData();
  }, [route.params]);

  return (
    <NewFishLogContainer
      source={require('../../assets/background_1-eupescador.png')}>
      <TopBar
        iconLeft={'arrow-undo'}
        sizeIconLeft={20}
        buttonFunctionLeft={() => {
          currentRoute.goBack();
        }}
        title={''}
        icon={''}
        iconText={''}
        buttonFunction={() => {}}
        textBack={true}
      />

      <Title text={'Novo Registro'}></Title>
      <View style={{
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#0095D9',
        width:200
      }}></View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView style={{ width: '90%' }}>
          <ElementsImagesFish>

            <FishLogImageContainer >
              {fishPhoto ? (
                <FishLogImage
                  source={{ uri: `data:image/png;base64,${fishPhoto}` }}
                />
              ) : (
                <FishLogImage
                  source={require('../../assets/select_background.png')}
                />
              )}
            </FishLogImageContainer>

            <ButtonPhotoFishContainer>
              <ImageContainer onPress={pickImage}>
                <TopIcon name="photo" />
                <TextClick>Selecionar Foto</TextClick>
              </ImageContainer>
              <ImageContainer onPress={openCamera}>
                <TopIcon name="camera" />
                <TextClick>Tirar Foto</TextClick>
              </ImageContainer>
            </ButtonPhotoFishContainer>

          </ElementsImagesFish>

          <InputContainer>
            {isSuperAdmin ? (
              <ImageContainer>
                <Switch
                  value={isVisible}
                  onValueChange={() => setIsVisible(!isVisible)}
                />
                <TextClick>Visível no mapa?</TextClick>
              </ImageContainer>
            ) : null}

            <TouchableOpacity
              onPress={() => setDropLargeGroup(!dropLargeGroup)}>
              <InputView>
                <View style={{marginLeft: 4, width: '95%'}}>
                  {fishLargeGroup ? (
                    <RegularText text={fishLargeGroup ? fishLargeGroup : ''} />
                  ) : (
                    <HalfToneText text="Grande Grupo" size={16} />
                  )}
                </View>
                <InputBox />
              </InputView>
            </TouchableOpacity>

            {dropLargeGroup && data.length ? (
              <OptionsContainer>
                <OptionList
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator>
                  {data?.map?.((item, index) => (
                    <OptionListItem
                      key={index}
                      onPress={() => {
                        setFishLargeGroup(item.groupName);
                        setDropLargeGroup(false);
                      }}>
                      <RegularText text={item.groupName} />
                    </OptionListItem>
                  ))}
                </OptionList>
              </OptionsContainer>
            ) : null}

            <TouchableOpacity onPress={() => setDropGroup(!dropGroup)}>
              <InputView>
                <View style={{marginLeft: 4, width: '95%'}}>
                  {fishGroup ? (
                    <RegularText text={fishGroup ? fishGroup : ''} />
                  ) : (
                    <HalfToneText text="Grupo" size={16}/>
                  )}
                </View>
                <InputBox />
              </InputView>
            </TouchableOpacity>

            {dropGroup &&
              data.filter((item) => {
                if (fishLargeGroup) {
                  if (
                    item.groupName
                      .toLowerCase()
                      .includes(fishLargeGroup.toLowerCase().trim())
                  ) {
                    return item;
                  }
                } else {
                  return item;
                }
              }).length ? (
              <OptionsContainer>
                <OptionList
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator>
                   {groupList()} 
                </OptionList>
              </OptionsContainer>
            ) : null}

            <InputView>
              <Input
                placeholder="Nome Usual"
                placeholderTextColor="#0095D9"
                value={fishName}
                onChangeText={setFishName}
              />
              <InputBox />
            </InputView>

            {fishName &&
              fishes.filter(item => {
                if (
                  item.commonName
                    .toLowerCase()
                    .includes(fishName.toLowerCase().trim()) &&
                  item.commonName.toLowerCase() != fishName.toLowerCase().trim()
                ) {
                  if (fishGroup) {
                    if (
                      item.group.toLowerCase().includes(fishGroup.toLowerCase())
                    ) {
                      return item;
                    }
                  } else if (fishLargeGroup) {
                    if (
                      item.largeGroup
                        .toLowerCase()
                        .includes(fishLargeGroup.toLowerCase())
                    ) {
                      return item;
                    }
                  } else return item;
                }
              }).length ? (
              <OptionsContainer>
                <OptionList
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator>
                  {nameList()}
                </OptionList>
              </OptionsContainer>
            ) : null}

            <InputView>
              <Input
                placeholder="Espécie"
                placeholderTextColor="#0095D9"
                value={fishSpecies}
                onChangeText={handleFishSpeciesInput}
              />
              <InputBox />
            </InputView>

            <BoxView>
              <RowView>
                <HalfInputView>
                  <Input
                    placeholder="Peso (Kg)"
                    placeholderTextColor="#0095D9"
                    value={fishWeight}
                    keyboardType="numeric"
                    onChangeText={setFishWeight}
                  />
                </HalfInputView>
                <HalfInputView>
                  <Input
                    placeholder="Tamanho (cm)"
                    placeholderTextColor="#0095D9"
                    value={fishLength}
                    keyboardType="numeric"
                    onChangeText={setFishLength}
                  />
                </HalfInputView>
              </RowView>
            </BoxView>

            <BoxView>
              <RowView>
                <HalfInputView>
                  <Input
                    placeholder="Data"
                    placeholderTextColor="#0095D9"
                    value={''}
                    keyboardType="numeric"
                    onChangeText={setCatchDate}
                  />
                </HalfInputView>
                <HalfInputView>
                  <Input
                    placeholder="Hora"
                    placeholderTextColor="#0095D9"
                    value={''}
                    keyboardType="default"
                    onChangeText={setCatchHour}
                  />
                </HalfInputView>
              </RowView>
            </BoxView>
          </InputContainer>
          {isOn ? (
            <AddLocaleButton onPress={handleOpenMap}>
              <AddLocaleButtonIcon name="map" />
              <AddLocaleButtonLabel>
                {' '}
                {fishLatitude && fishLongitude ? 'Alterar' : 'Adicionar'}{' '}
                Localização{' '}
              </AddLocaleButtonLabel>
            </AddLocaleButton>
          ) : null}

          <SendButtonView>{getSendButton()}</SendButtonView>
        </ScrollView>
      )}
    </NewFishLogContainer>
  );
}
