import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
// import { EditUserPage } from "../screens/EditUserPage";
import Login from '../screens/Login';
import Register from '../screens/Register';
// import { WikiFishlogs } from "../screens/WikiFishlogs";
// import { FishLog } from "../screens/ViewFishLog";
import {theme} from '../global/styles/theme';
import {WikiFishlogs} from '../screens/WikiFishlogs';
// import { NewFishLog } from "../screens/NewFishLog";
// import { NewNoNameFishLog } from "../screens/NewNoNameFishLog";
// import { useAuth } from "../contexts/authContext";
// import { MyMap } from "../screens/Maps";
// import { WikiFish } from "../screens/WikiFish";
// import { Drafts } from "../screens/Drafts";
// import { WikiFilter } from "../screens/WikiFilter";
// import { LogFilter } from "../screens/RegisterFilter";
// import RecoverPassword from "../screens/RecoverPassword";

const AuthenticateStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthenticateStack.Navigator
      initialRouteName="WikiFishlogs"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.primary_light,
        },
        headerTitleStyle: {
          color: theme.colors.on_background,
          fontFamily: theme.fonts.medium,
        },
      }}>
      {/* <AuthenticateStack.Screen name="WikiFishlogs" component={WikiFishlogs} />
      <AuthenticateStack.Screen
        name="EditUserPage"
        component={EditUserPage}
        options={{title: 'Editar Usuário', headerShown: true}}
      />
      <AuthenticateStack.Screen name="WikiFilter" component={WikiFilter} />
      <AuthenticateStack.Screen name="LogFilter" component={LogFilter} />
      <AuthenticateStack.Screen
        name="FishLog"
        component={FishLog}
        options={{title: 'Registro', headerShown: true}}
      />
      <AuthenticateStack.Screen
        name="NewFishLog"
        component={NewFishLog}
        options={({route}) => ({
          title: route.params.name,
          headerShown: true,
        })}
      />
      <AuthenticateStack.Screen
        name="NewNoNameFishLog"
        component={NewNoNameFishLog}
        options={({route}) => ({
          title: route.params.name,
          headerShown: true,
        })}
      />
      <AuthenticateStack.Screen name="Maps" component={MyMap} />
      <AuthenticateStack.Screen
        name="WikiFish"
        component={WikiFish}
        options={{title: 'Informações', headerShown: true}}
      />
      <AuthenticateStack.Screen
        name="Drafts"
        component={Drafts}
        options={{title: 'Rascunhos', headerShown: true}}
      /> */}
    </AuthenticateStack.Navigator>
  );
};
const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.primary_light,
        },
        headerTitleStyle: {
          color: theme.colors.on_background,
          fontFamily: theme.fonts.medium,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Cadastro', headerShown: true}}
      />

      <Stack.Screen name="WikiFishlogs" component={WikiFishlogs} />
      {/*
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen
        name="WikiFish"
        component={WikiFish}
        options={{title: 'Informações', headerShown: true}}
      />
      <Stack.Screen name="WikiFilter" component={WikiFilter} />
      <Stack.Screen name="LogFilter" component={LogFilter} /> */}
    </Stack.Navigator>
  );
};

export default function Navigation() {
  // const {authenticated} = useAuth();
  // return authenticated ? <AuthRoutes /> : <AppRoutes />;

  return <AppRoutes />;
}
