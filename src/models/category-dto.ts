import { AbstractBaseEntity } from './abstract-base-entity';

export interface CategoryDto extends AbstractBaseEntity {

  /** 标签名 */
  label: string;

  /** 子目录 */
  children: Array<CategoryDto>;

  articlesNum?: number;
}