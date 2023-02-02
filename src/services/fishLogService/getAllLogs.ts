import {fishLogService} from './fishService';

async function GetAllFishLogs(token: string, query?: string) {
  let route = '/fishLog/all?mobile=true';
  if (query) route += query;

  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(route, {
    timeout: 60000,
    headers: {Authorization: userToken},
  });
  
  return res.data as any;
}

export {GetAllFishLogs};
