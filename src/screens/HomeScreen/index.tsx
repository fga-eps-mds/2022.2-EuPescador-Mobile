import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {DefaultTheme} from 'styled-components';
import {
  HomeContainer,
  HomeLogoContainer,
  HomeAppImage,
  HomeAppTitle,
  HomeAppTitleBlue,
  HomeWelcomeText,
  HomeWikiText,
  HomeWikiButton,
  HomeLinksContainer,
  HomePhraseContainer,
  HomeRegularText,
  HomeLogLink,
} from './styles';
// import {useAuth} from '../../contexts/authContext';
// import {Text} from 'react-native-paper';
// import {storage} from '../../../App';

export default function HomeScreen({navigation}: any) {
  // const auth = useAuth();

  // useEffect(() => {
  //   if (authenticated) {
  //     navigation.navigate('WikiFishlogs', {
  //       wikiFilterQuery: null,
  //     });
  //   }
  // }, [authenticated]);
  return (
    <HomeContainer source={require('../../assets/background_1-eupescador.png')}>
      <HomeLogoContainer>
        <HomeAppImage source={require('../../assets/logo_2-eupescador.png')} />
      </HomeLogoContainer>

      <HomeWelcomeText>
        Colabore registrando os peixes da sua região!
      </HomeWelcomeText>

      <HomeWikiButton
        onPress={() =>
          navigation.navigate('WikiFishlogs', {
            wikiFilterQuery: null,
          })
        }>
        <HomeWikiText>Biblioteca de Peixes</HomeWikiText>
      </HomeWikiButton>
      <HomeWikiButton
        onPress={() =>
          navigation.navigate('Login', {
            wikiFilterQuery: null,
          })
        }>
        <HomeWikiText>Entrar</HomeWikiText>
      </HomeWikiButton>
      <HomeWikiButton
        style={{marginTop:16}}
        onPress={() =>
          navigation.navigate('Register', {
            wikiFilterQuery: null,
          })
        }>
        <HomeWikiText>Cadastrar</HomeWikiText>
      </HomeWikiButton>
      {/* <HomeLinksContainer>
        <HomePhraseContainer>
          <HomeRegularText>Não possui uma conta ainda?</HomeRegularText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <HomeLogLink> Cadastre-se</HomeLogLink>
          </TouchableOpacity>
        </HomePhraseContainer>

        <HomePhraseContainer>
          <HomeRegularText>Já possui uma conta?</HomeRegularText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <HomeLogLink> Entre</HomeLogLink>
          </TouchableOpacity>
        </HomePhraseContainer>
      </HomeLinksContainer> */}
    </HomeContainer>
  );
}
