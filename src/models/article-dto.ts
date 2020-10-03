import { AbstractBaseEntity } from './abstract-base-entity';
import { CategoryDto } from './category-dto';
import { TagDTO } from './tag-dto';

export interface ArticleDto extends AbstractBaseEntity {

  /** 创建用户的id */
  userId: string;

  /** 作者名 */
  author: string; 

  /** 封面图 */
  coverUrl: string;

  /** 文章来源 */
  source: 'OFFICIAL' | 'ORIGINAL' | 'WEBSITE';

  /** 来源url */
  sourceUrl: string;

  /** 文章内容 */
  content: string;

  /** 文章标题 */
  title: string;

  /** 文章介绍 */
  description: string;

  /** 对应标签 */
  tags: Array<TagDTO>;

  /** 文章对应目录 */
  category: CategoryDto;
}