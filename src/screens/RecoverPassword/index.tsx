import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Input,
    InputContainer,
    InputTitle,
    InputView,
    RecoverButtonView,
    ForgotPassContainer,
} from './styles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultMiniButton } from '../../components/Button';
import { SendMail } from '../../services/userServices/sendMail';
import { TopBar } from '../../components/TopBar';
import { DivLocalizator, FishReversed, Localizator } from '../Register/styles';


export default function RecoverPassword() {
    const [userEmailPhone, setUserEmailPhone] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSendingMail, setIsSendingMail] = useState(false);

    const navigation = useNavigation();

    const sendToken = async () => {
        await SendMail(userEmailPhone).then(async ()=>{
            await Alert.alert('Uma nova senha foi enviada para o seu email');
        
        }).catch((err)=>{
            const { status } = err.response
            
            if(status == 404)
                Alert.alert('Email inválido!','Não encontramos nenhum usuário com esse e-mail');
            else if( status == 408)
                Alert.alert('Senha Alterada','Sua senha já foi alterada recentemente, verifique seu email!');
            else
                Alert.alert('Error','Erro interno tente mais tarde!');

        });               
    };

    return (
        <ForgotPassContainer source={require('../../assets/background_1-eupescador.png')}>
            <TopBar
        iconLeft={'arrow-undo'}
        sizeIconLeft={20}
        buttonFunctionLeft={() => {
          navigation.goBack();
        }}
        title={''}
        icon={''}
        iconText={''}
        buttonFunction={() => {}}
        textBack={true}
      />

    <DivLocalizator>
        <Icon2 name="fish" size={40} color="#0095d9" />
        <Localizator>Recuperar Senha</Localizator>
        <FishReversed>
          <Icon2 name="fish" size={41} color="#0095d9" />
        </FishReversed>
      </DivLocalizator>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                
        <InputContainer>
              <InputView>
                <InputTitle>
                Digite seu e-mail cadastrado para enviarmos uma nova senha para você:
                </InputTitle>
                <Input
                  placeholder="E-mail"
                  placeholderTextColor="#0095D9"
                  value={userEmailPhone}
                  onChangeText={setUserEmailPhone}
                />
              </InputView>
              <RecoverButtonView>
                <DefaultMiniButton
                  text="Enviar token"
                  buttonFunction={sendToken}
                  loading={isSendingMail}
                />
              </RecoverButtonView>
        </InputContainer>
            )}
        </ForgotPassContainer>
    );
}