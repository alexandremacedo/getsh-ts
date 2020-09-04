import Post from '../infra/typeorm/schemas/Post';
import Comment from '../infra/typeorm/entities/Comment';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';

export default interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
}
