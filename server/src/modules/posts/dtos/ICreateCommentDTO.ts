import Comment from '../infra/typeorm/schemas/Comment';

export default interface ICreateCommentDTO {
  comment: Comment;
  post_id: string;
}
