import { ResultDTO, TagDTO } from '@/models';
import { getAPI } from '@/utils/request';


const URL = "/tag";

export function getAllTags() {
  return getAPI<ResultDTO<Array<TagDTO>>>(`${URL}/all`);
} 