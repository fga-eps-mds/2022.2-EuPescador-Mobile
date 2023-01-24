import React, {useState, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {TopBar} from '../../components/TopBar';
import {Wiki} from '../../components/Wiki';
import {FishLogs} from '../../components/FishLogs';
import {InstructionModal} from '../../components/InstructionsModal';
import {UsersManager} from '../../components/UsersManager';
import {useAuth} from '../../contexts/authContext';
// import { LogsMap } from '../LogsMap';
import {
  PageContainer,
  TitleContainer,
  TouchableTitle,
  TitleText,
  ChooseTab,
} from './styles';
import {storage} from '../../global/config/storage';

// import * as Location from 'expo-location';
// import { storage } from '../../../App';

type userStorage = {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  admin: boolean;
  superAdmin: boolean;
  token: string;
};

export const WikiFishlogs = ({navigation, route}: any) => {
  const [token, setToken] = useState('');
  const [wiki, setWiki] = useState(true);
  const [fishlogTab, setFishLogTab] = useState<boolean>(false);
  const [mapTab, setMapTab] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [showModal, setShowModal] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>();
  const [origin, setOrigin] = useState<any>('');
  const [isPressed, setIsPressed] = useState<
    'Biblioteca' | 'Registro' | 'Mapa'
  >('Biblioteca');

  const [page, setPage] = useState<string>('Biblioteca');

  const {signOut, authenticated} = useAuth();

  const getData = async () => {
    const userStorage = storage.getString('@eupescador/user');

    if (!userStorage) return;

    const userAdmin = JSON.parse(userStorage) as userStorage;

    if (userAdmin.token) {
      setToken(userAdmin.token);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    // if (userAdmin === 'true') setIsAdmin(true);
    // else setIsAdmin(false);
    // if (userSuperAdmin === 'true') setIsSuperAdmin(true);
    // else setIsSuperAdmin(false);
  };

  const handleSignOut = () => {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair da conta?', [
      {
        text: 'Não',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut();
          const resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
          navigation.dispatch(resetAction);
        },
      },
    ]);
  };

  const getFirstAcess = async () => {
    // const hasAcessTheApp =  storage.getString('hasAcessTheApp');
    // if (hasAcessTheApp === 'false') {
    //   setShowModal(true);
    //    storage.set('hasAcessTheApp', 'true');
    // }
  };

  const getPosition = async () => {
    // let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    // setOrigin({
    //   latitude: loc.coords.latitude,
    //   longitude:loc.coords.longitude,
    //   latitudeDelta:0.0922,
    //   longitudeDelta:0.0922,
    // });
  };

  useEffect(() => {
    getData();
    getFirstAcess();
  }, [authenticated]);

  return (
    <>
      {/* <InstructionModal
        modalVisible={showModal}
        dismissModal={() => setShowModal(false)}
      /> */}
      <PageContainer
        source={require('../../assets/background_1-eupescador.png')}>
        <TopBar
          //Adicionar parada do mapa
          iconLeft={'information-circle'}
          sizeIconLeft={30}
          buttonFunctionLeft={()=>{}}
          title={page}
          icon={isLogged ? 'logout' : 'login'}
          iconText={isLogged ? 'Sair' : 'Entrar'}
          buttonFunction={
            isLogged
              ? () => {
                  handleSignOut();
                }
              : () => navigation.navigate('Login')
          }
        />

        {isLogged ? (
          <TitleContainer>
            {/* <TitleButtonsContainer> */}
            <TouchableTitle
              onPress={() => {
                setWiki(true);
                setFishLogTab(false);
                setMapTab(false);
                setIsPressed('Biblioteca');
              }}
              style={{
                backgroundColor:
                  isPressed == 'Biblioteca' ? 'white' : 'transparent',
                borderRadius: 15,
              }}>
              <TitleText wiki={wiki} fishLogTab={!fishlogTab} mapTab={!mapTab}>
                Biblioteca de Peixes
              </TitleText>
            </TouchableTitle>

            <TouchableTitle
              onPress={() => {
                setWiki(false);
                setFishLogTab(true);
                setMapTab(false);
                setIsPressed('Registro');
              }}
              style={{
                backgroundColor:
                  isPressed == 'Registro' ? 'white' : 'transparent',
                borderRadius: 15,
              }}>
              <TitleText wiki={!wiki} fishLogTab={fishlogTab} mapTab={!mapTab}>
                Registros
              </TitleText>
              {/* {!wiki && fishlogTab && !mapTab ? <TitleHighlight /> : null} */}
            </TouchableTitle>

            <TouchableTitle
              onPress={() => {
                setWiki(false);
                setFishLogTab(false);
                setMapTab(true);
                setIsPressed('Mapa');
                getPosition();
              }}
              style={{
                backgroundColor: isPressed == 'Mapa' ? 'white' : 'transparent',
                borderRadius: 15,
              }}>
              <TitleText wiki={!wiki} fishLogTab={!fishlogTab} mapTab={mapTab}>
                Mapa
              </TitleText>
              {/* {!wiki && !fishlogTab && mapTab ? <TitleHighlight /> : null} */}
            </TouchableTitle>
            {/* </TitleButtonsContainer> */}
          </TitleContainer>
        ) : (
          <ChooseTab></ChooseTab>
        )}

        {wiki ? (
          <Wiki
            navigation={navigation}
            filterQuery={
              route.params && route.params.wikiFilterQuery
                ? route.params.wikiFilterQuery
                : null
            }
          />
        ) : fishlogTab ? (
          <FishLogs
            token={token}
            navigation={navigation}
            isAdmin={isAdmin ? isAdmin : false}
            filterQuery={
              route.params && route.params.logFilterQuery
                ? route.params.logFilterQuery
                : null
            }
          />
        ) : mapTab ? (
          <Text>Mapa</Text>
        ) : null}
      </PageContainer>
    </>
  );
};

// <LogsMap
//   latitude = {origin.latitude}
//   longitude = {origin.longitude}
//   latitudeDelta = {origin.latitudeDelta}
//   longitudeDelta= {origin.longitudeDelta}
//   token={token}
//   navigation={navigation}
//   isAdmin={isAdmin ? isAdmin : false}
//   filterQuery={(route.params && route.params.logFilterQuery) ? route.params.logFilterQuery : null}
// />
