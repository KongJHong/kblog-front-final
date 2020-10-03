import { CategoryDto, ResultDTO } from '@/models';
import { getAPI } from '@/utils/request';


const URL = "/cate";

export function getAllRootCategory() {
  return getAPI<ResultDTO<Array<CategoryDto>>>(`${URL}/all`);
} 