import { fishLogService } from './fishService';

async function GetOneFishLog(log_id: string, token: string) {
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(`/fishLog/${log_id}?mobile=true`, {
    headers: { Authorization: userToken },
  });
  return res.data as any;
}

export { GetOneFishLog };
