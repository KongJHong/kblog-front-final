import {  ArticleDto, ResultDTO } from '@/models';
import { getAPI } from '@/utils/request';


const URL = "/article";

export function getAllArticles() {
  return getAPI<ResultDTO<Array<ArticleDto>>>(`${URL}/all`);
} 