import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import {ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import {
  Container,
  ErrorMessage,
  Input,
  InputBox,
  InputContainer,
  InputView,
  LoginButtonView,
  HomeLogoContainer,
  HomeAppImage,
  HomeAppTitle,
  HomeAppTitleBlue,
  HomePhraseContainer,
  HomeRegularText,
  HomeLogLink,
  ForgotPasswordLogLink,
  ForgotPasswordContainer,
} from './styles';
// import {useAuth} from '../../contexts/authContext';
import {DefaultButton} from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}: any) {
  const [userEmailPhone, setUserEmailPhone] = useState<string | undefined>();
  const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
  const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState(
    'Usuário não encontrado',
  );
  const [userPassword, setUserPassword] = useState<string | undefined>();
  // const {signIn, authenticated} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    let alertMessage = '';
    if (userEmailPhone && userPassword) {
      setIsEmailPhoneValid(true);
      // const res = await signIn(userEmailPhone, userPassword);
      // if (res.status === 200) {
      // } else if (res.response.status === 404) setIsEmailPhoneValid(false);
      // else alertMessage = res.response.data.message;
      const res = 0;
    } else {
      alertMessage = 'Preencha todos os campos de dados para realizar o login!';
    }
    if (alertMessage) {
      Alert.alert('Login', alertMessage, [
        {
          text: 'Ok',
        },
      ]);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <HomeLogoContainer>
        <HomeAppImage source={require('../../assets/logo.png')} />
        <HomeAppTitle>
          Eu<HomeAppTitleBlue>Pescador</HomeAppTitleBlue>
        </HomeAppTitle>
      </HomeLogoContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <InputContainer>
          <InputView>
            <Input
              placeholder="E-mail / Telefone"
              value={userEmailPhone}
              onChangeText={setUserEmailPhone}
            />
          </InputView>
          {isEmailPhoneValid ? (
            <InputBox />
          ) : (
            <ErrorMessage>{isEmailPhoneValidMessage}</ErrorMessage>
          )}

          <InputView>
            <Input
              placeholder="Senha"
              secureTextEntry
              value={userPassword}
              onChangeText={setUserPassword}
            />
          </InputView>
          <LoginButtonView>
            <DefaultButton text="Entrar" buttonFunction={handleLogin} />
          </LoginButtonView>
          <ForgotPasswordContainer>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoverPassword')}>
              <ForgotPasswordLogLink>Esqueci minha Senha</ForgotPasswordLogLink>
            </TouchableOpacity>
          </ForgotPasswordContainer>
          <HomePhraseContainer>
            <HomeRegularText>Não possui uma conta ainda?</HomeRegularText>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <HomeLogLink> Cadastre-se</HomeLogLink>
            </TouchableOpacity>
          </HomePhraseContainer>
        </InputContainer>
      )}
    </Container>
  );
}
