import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from 'buffer';
import {storage} from '../../global/config/storage';
import {fishLogService} from './fishService';

export const createFishLog = async (
  photoString: string | undefined,
  name: string | undefined,
  largeGroup: string | undefined,
  group: string | undefined,
  species: string | undefined,
  weight: string | undefined,
  length: string | undefined,
  latitude: string | undefined,
  longitude: string | undefined,
) => {
  const userStorage = storage.getString('@eupescador/user');

  const user: {token: string} = userStorage ? JSON.parse(userStorage) : null;

  if (!user) {
    return;
  }

  let photo = null;

  const coordenates = {
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
  };

  if (photoString) {
    photo = photoString;
  }

  await fishLogService.post(
    '/fishLog/',
    {
      name,
      largeGroup,
      group,
      species,
      coordenates,
      photo,
      length: length ? parseFloat(length) : null,
      weight: weight ? parseFloat(weight) : null,
    },
    {headers: {Authorization: `Bearer ${user?.token}`}},
  );
};
