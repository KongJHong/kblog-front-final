import { LoginDTO, ResultDTO, UserDTO } from '@/models';
import { getAPI, postAPI } from '@/utils/request';


const URL = "/login";

export function user_login(params: LoginDTO): Promise<ResultDTO<UserDTO>> {
  return postAPI<ResultDTO<UserDTO>>(URL, params);
}

export function user_getInfo(userId: string): Promise<UserDTO> {
  return getAPI<UserDTO>(URL, {userId});
}

export function user_logout(userId: string): Promise<boolean> {
  return postAPI(`${URL}/logout`, {userId});
}