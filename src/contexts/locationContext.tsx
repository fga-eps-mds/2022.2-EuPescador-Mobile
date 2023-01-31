import React, {createContext, useState, useEffect, useContext} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

interface ILocationProvider {
  children: React.ReactNode;
}

interface ILocationContext {
  latitude: number;
  longitude: number;
}

const LocationContext = createContext<ILocationContext>({} as ILocationContext);
export const LocationProvider: React.FC<ILocationProvider> = ({children}) => {
  //   const [authenticated, setAuthenticated] = useState<boolean | undefined>();

  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const handleGetLocation = async () => {
    const result = await requestLocationPermission();

    console.log(result);

    if (result) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);

          const {latitude, longitude} = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
          // setLocation(false);
        },
        {
          accuracy: {android: 'high', ios: 'best'},
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }

    // const connection = await NetInfo.fetch();
    // setIsConnected(!!connection.isConnected);
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
    handleGetLocation();
  }, []);

  return (
    <LocationContext.Provider value={{latitude, longitude}}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
