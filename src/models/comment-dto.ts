import { AbstractBaseEntity } from './abstract-base-entity';

export interface CommentDTO extends AbstractBaseEntity {

  /** 回复内容 */
  replyContent: string;

  /** 用户名 */
  username: string

  /** 验证token, 用于删除评论 */
  token: string;

  /** 回复对象 */
  to?: string;

  /** 回复对象的id */
  toId?: string;

  /** 子回复 */
  comments?: Array<CommentDTO>;
}