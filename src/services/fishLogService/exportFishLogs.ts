import { fishLogService } from './fishService';

async function ExportFishLogs(token: string, exportList: Array<string>) {
  const userToken = `Bearer ${token}`;

  const res = await fishLogService.get(`/fishLog/export/${exportList.join()}`, {
    headers: { Authorization: userToken },
  });
  return res.data;
}

export { ExportFishLogs };
