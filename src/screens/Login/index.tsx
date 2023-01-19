import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import {
  ErrorMessage,
  Input,
  InputBox,
  InputContainer,
  InputView,
  LoginButtonView,
  HomeLogoContainer,
  HomeAppImage,
  ForgotPasswordLogLink,
  ForgotPasswordContainer,
  LoginContainer,
  NotAccountText
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../../contexts/authContext';
import {DefaultButton} from '../../components/Button';

export default function Login({navigation}: any) {
  const [userEmailPhone, setUserEmailPhone] = useState<string | undefined>();
  const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
  const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState(
    'Usuário não encontrado',
  );
  const [userPassword, setUserPassword] = useState<string | undefined>();
  const {signIn, authenticated} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // AsyncStorage.clear();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    let alertMessage = '';

    if (userEmailPhone && userPassword) {
      setIsEmailPhoneValid(true);

      const res = await signIn(userEmailPhone, userPassword);

      if (res.status === 200) { 
        navigation.navigate("WikiFishlogs")
      } else if (res.response.status === 404){ 
        setIsEmailPhoneValid(false);
      }else alertMessage = res.response.data.message;
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
    <LoginContainer source={require('../../assets/background.png')}>
      <HomeLogoContainer>
        <HomeAppImage source={require('../../assets/logo.png')} />
      </HomeLogoContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <InputContainer>
          <InputView>
            <Icon name="user" size={15} color="#0095d9" />
            <Input
              placeholder="E-mail / Telefone"
              placeholderTextColor={'#0095d9'}
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
            <Icon name="lock" size={15} color="#0095d9" />
            <Input
              placeholder="Senha"
              placeholderTextColor={'#0095d9'}
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
          <LoginButtonView>
          <NotAccountText>Não possui uma conta?</NotAccountText>
            <DefaultButton
              text="Cadastrar"
              buttonFunction={() => navigation.navigate('Register')}
            />
          </LoginButtonView>
        </InputContainer>
      )}
    </LoginContainer>
  );
}
