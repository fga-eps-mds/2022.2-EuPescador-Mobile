import {it, describe, jest} from '@jest/globals';
import {UserLogin} from '../../../services/userServices/login';
// import {GetAllFishLogs} from '../src/services/fishLogService/getAllLogs';
// import {GetOneFishLog} from '../src/services/fishLogService/getOneFishLog';
// //import {UpdateFishLog} from '../src/services/fishLogService/updateFishLog';
// import {GetAllUsers} from '../src/services/userServices/getAllUsers';
// import {GetWikiFishes} from '../src/services/wikiServices/getWikiFishes';
// import {GetOneWikiFish} from '../src/services/wikiServices/getOneWikiFish';

jest.mock('../../../services/userServices/login', () => {
  return {
    UserLogin: jest.fn().mockImplementationOnce(() => {
      Promise.resolve({status: 200});
    }),
  };
});

let novoPeixe = {
  name: 'testeUpdate',
  largeGroup: '',
  group: '',
  species: '',
  coordenates: '',
  photo: '',
  length: '66',
  weight: '200',
  reviewed: true,
  reviewedBy: true,
  updatedBy: true,
  visible: true,
};

describe('AllFishLog Service Test', () => {
  it('Recuperar todos os logs', async () => {
    const data = await UserLogin('lulu@gmail.com', '702200');
    console.log(data);
  });
});
