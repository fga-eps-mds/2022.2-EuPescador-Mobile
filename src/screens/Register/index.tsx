import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {
  CityStateView,
  InputScroll,
  // ComunityInputIcon,
  ErrorMessage,
  HalfInputView,
  Input,
  InputBox,
  InputContainer,
  InputMask,
  InputView,
  // MaterialInputIcon,
  RegisterButtonView,
  RegisterContainer,
  HomeLogoContainer,
  HomeAppImage,
  Localizator,
  DivLocalizator,
  FishReversed,
  DivLogo,
  BackText,
  DivVoltar,
} from './styles';
import {CreateUser} from '../../services/userServices/createUser';
import {DefaultButton} from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import { TopBar } from '../../components/TopBar';
import { useNavigation } from '@react-navigation/native';

export default function Register({navigation}: any) {
  const currentRoute = useNavigation();
  const [userName, setUserName] = useState<string | undefined>();
  const [userEmail, setUserEmail] = useState<string | undefined>();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailValidMessage, setIsEmailValidMessage] = useState('');
  const [userPhone, setUserPhone] = useState<string | undefined>('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPhoneValidMessage, setIsPhoneValidMessage] = useState('');
  const [userState, setUserState] = useState<string | undefined>();
  const [userCity, setUserCity] = useState<string | undefined>();
  const [userPassword, setUserPassword] = useState<string | undefined>();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordValidMessage, setIsPasswordValidMessage] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState<
    string | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    if (email) {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      if (email.length > 254) {
        setIsEmailValidMessage('Email muito extenso!');
        setIsEmailValid(false);
      } else if (!emailRegex.test(email)) {
        setIsEmailValidMessage('Formato de email inválido!');
        setIsEmailValid(false);
      } else if (email.split('@')[0].length > 64) {
        setIsEmailValidMessage('Email muito extenso!');
        setIsEmailValid(false);
      } else setIsEmailValid(true);
    }
  };

  const validatePassword = (password: string) => {
    if (userPassword !== password) {
      setIsPasswordValidMessage('Digite a mesma senha!');
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const validatePhone = (phone: string) => {
    if (phone.length < 15) {
      setIsPhoneValidMessage('Tamanho de telefone inválido!'),
        setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    let alertMessage = '';
    let result = false;
    if (
      userName &&
      userEmail &&
      userPhone &&
      userState &&
      userCity &&
      userPassword &&
      userConfirmPassword
    ) {
      if (isEmailValid && isPasswordValid && isPhoneValid) {
        const newPhone = userPhone?.replace(/\D/g, '');
        try {
          await CreateUser(
            userName,
            userEmail,
            newPhone,
            userState,
            userCity,
            userPassword,
          );
          alertMessage = 'Conta criada com sucesso!';
          result = true;
        } catch (error: any) {
          console.log('heyyy', error);
          alertMessage = error.response.data.message;
        }
      } else {
        alertMessage = 'Preencha todos os dados corretamente!';
      }
    } else {
      alertMessage =
        'Preencha todos os campos de dados para realizar o cadastro!';
    }
    Alert.alert('Cadastro', alertMessage, [
      {
        text: 'Ok',
        onPress: () => {
          if (result) {
            navigation.navigate('Home');
          }
        },
      },
    ]);
    setIsLoading(false);
    console.log(alertMessage);
  };

  const handleEmailInput = (email: string) => {
    setUserEmail(email);
    validateEmail(email);
  };

  const handlePassword = (password: string) => {
    setUserConfirmPassword(password);
    validatePassword(password);
  };

  const handlePhone = (phone: string) => {
    setUserPhone(phone);
    validatePhone(phone);
  };

  return (
    <RegisterContainer source={require('../../assets/background.png')}>
      <TopBar
                iconLeft={'arrow-undo'}
                sizeIconLeft={30}
                buttonFunctionLeft={() => {
                  currentRoute.goBack();
                }}
                title={''}
                icon={''}
                iconText={''}
                buttonFunction={() => {}}
                textBack={true}
              />
      <DivLocalizator>
        <Icon2 name="fish" size={40} color="#0095d9" />
        <Localizator>Cadastro de Usuário</Localizator>
        <FishReversed>
          <Icon2 name="fish" size={41} color="#0095d9" />
        </FishReversed>
      </DivLocalizator>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <InputScroll>
          <InputContainer>
            <InputView>
              {/* <MaterialInputIcon name="person-outline" /> */}
              <Icon name="user" size={15} color="#0095d9" />
              <Input
                placeholderTextColor={'#0095d9'}
                placeholder="Nome"
                value={userName}
                onChangeText={setUserName}
              />
            </InputView>
            <InputBox />
            <InputView>
              <Icon name="envelope" size={15} color="#0095d9" />
              <Input
                placeholderTextColor={'#0095d9'}
                placeholder="Email"
                value={userEmail}
                onChangeText={handleEmailInput}
              />
            </InputView>
            {isEmailValid ? (
              <InputBox />
            ) : (
              <ErrorMessage>{isEmailValidMessage}</ErrorMessage>
            )}
            <InputView>
              {/* <ComunityInputIcon name="phone-outline" /> */}
              <Icon name="phone" size={15} color="#0095d9" />
              <InputMask
                type="cel-phone"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={userPhone}
                onChangeText={handlePhone}
                placeholderTextColor={'#0095d9'}
                placeholder="Telefone"
              />
            </InputView>
            {isPhoneValid ? (
              <InputBox />
            ) : (
              <ErrorMessage>{isPhoneValidMessage}</ErrorMessage>
            )}
            <CityStateView>
              <HalfInputView>
                <Icon name="map-marker" size={15} color="#0095d9" />
                <Input
                  placeholder="Estado"
                  value={userState}
                  placeholderTextColor={'#0095d9'}
                  onChangeText={setUserState}
                />
              </HalfInputView>
              <HalfInputView>
                <Icon name="map-marker" size={15} color="#0095d9" />
                <Input
                  placeholder="Cidade"
                  placeholderTextColor={'#0095d9'}
                  value={userCity}
                  onChangeText={setUserCity}
                />
              </HalfInputView>
            </CityStateView>

            <InputBox />
            <InputView>
              <Icon name="lock" size={15} color="#0095d9" />
              <Input
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor={'#0095d9'}
                value={userPassword}
                onChangeText={setUserPassword}
              />
            </InputView>
            <InputBox />
            <InputView>
              <Icon name="lock" size={15} color="#0095d9" />
              <Input
                placeholder="Confirmar Senha"
                secureTextEntry
                value={userConfirmPassword}
                placeholderTextColor={'#0095d9'}
                onChangeText={handlePassword}
              />
            </InputView>
            {isPasswordValid ? (
              <InputBox />
            ) : (
              <ErrorMessage>{isPasswordValidMessage}</ErrorMessage>
            )}
            <RegisterButtonView>
              <DefaultButton text="Cadastrar" buttonFunction={handleRegister} />
            </RegisterButtonView>
          </InputContainer>
        </InputScroll>
      )}
    </RegisterContainer>
  );
}
