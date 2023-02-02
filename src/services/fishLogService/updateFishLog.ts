import AsyncStorage from '@react-native-async-storage/async-storage';
import {Buffer} from 'buffer';
import {storage} from '../../global/config/storage';
import {fishLogService} from './fishService';

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

async function UpdateFishLog(
  log_id: string,
  name: string | undefined,
  largeGroup: string | undefined,
  group: string | undefined,
  species: string | undefined,
  latitude: string | undefined,
  longitude: string | undefined,
  photoString: string | undefined | undefined,
  length: string | undefined,
  weight: string | undefined,
  reviewed: boolean | undefined,
  admin: Boolean,
  superAdmin: Boolean,
  visible: boolean,
) {
  const user = storage.getString("@eupescador/user");
  if (!user) return;

  const userAdmin = JSON.parse(user) as userStorage;
  
  const token = userAdmin.token;
  const userId = userAdmin.id;
  const userToken = `Bearer ${token}`;
  let photo = null;
  let reviewedBy = null;
  console.log("entrou no update")

  if (admin || superAdmin) reviewedBy = userId;

  const coordenates = {
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
  };
  if (photoString) {
    photo = photoString;
  }
  const res = await fishLogService.put(
    `/fishLog/${log_id}`,
    {
      name,
      largeGroup,
      group,
      species,
      coordenates,
      photo,
      length: length ? parseFloat(length) : null,
      weight: weight ? parseFloat(weight) : null,
      reviewed,
      reviewedBy: Number(reviewedBy),
      updatedBy: Number(userId),
      visible,
    },
    {headers: {Authorization: userToken}},
  );
  console.log("resposta do update", res.data)
  return res.data;
}

export {UpdateFishLog};
