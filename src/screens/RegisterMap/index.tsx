import React, {useState} from 'react';
import {
  LocationUsageInfoContainer,
  LocationUsageInfoText,
  LocationUsageInfoTitle,
  LocationUsageInfoView,
  Map,
  MapButtonsView,
  MapContainer,
  MapInfoView,
  MapInstructions,
  MapInstructionsText,
} from './styles';
import MapView, {
  Marker,
  LatLng,
  MapPressEvent,
  MarkerAnimated,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import MapEvent from 'react-native-maps';
import {MapButton} from '../../components/Button';
import {StyleSheet} from 'react-native';
import {useLocation} from '../../contexts/locationContext';

export const RegisterMap = ({navigation, route}: any) => {
  const {latitude, longitude} = useLocation();

  const [mark, setMark] = useState<LatLng>({
    latitude,
    longitude,
  });

  // console.log('mark', mark);

      const handleDrag = (e: MapPressEvent) => {
        setMark({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
      };

    const handleConfirm = (latitude: number, longitude: number) => {
      route.params.latitude = latitude;
      route.params.longitude = longitude;
      const params = {
        data: route.params,
        isNewRegister: route.params.isNew,
        log_id: route.params.log_id,
        name: route.params.screenName,
      };
      navigation.navigate('NewFishLog', {...params});
    };
  return (
    <MapContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: mark.latitude,
          longitude: mark.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e: MapPressEvent) => {handleDrag(e);}}>
        <Marker coordinate={mark} />
      </MapView>

       <MapInstructions>
        <MapInstructionsText>
          Clique no mapa para marcar o local onde pegou o peixe
        </MapInstructionsText>
      </MapInstructions>
      <LocationUsageInfoView>
        <LocationUsageInfoContainer>
          <LocationUsageInfoTitle>
            Por que precisamos da localização?
          </LocationUsageInfoTitle>
          <LocationUsageInfoText>
            A localização enviada será utilizada pelas unidades ambientais
            responsáveis para mapear a posição das espécies
          </LocationUsageInfoText>
        </LocationUsageInfoContainer>
        <MapButtonsView>
          <MapButton
            type="secondary"
            text="Cancelar"
            buttonFunction={() => {
              navigation.goBack();
            }}
          />
          <MapButton
            text="Confirmar"
            buttonFunction={() => handleConfirm(mark.latitude, mark.longitude)}
          />
        </MapButtonsView>
      </LocationUsageInfoView> 
    </MapContainer>
  );
};
