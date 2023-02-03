import { userService } from './userService';

async function SendMail(email: string) {
  return userService.post('/recover-password', { email });
}

export { SendMail };
