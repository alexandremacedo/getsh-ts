import Post from '../infra/typeorm/schemas/Post';
import Comment from '../infra/typeorm/entities/Comment';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';
import IDeleteCommentDTO from '../dtos/IDeleteCommentDTO';

export default interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findAllInPost(data: ICreateCommentDTO): Promise<void>;
  deleteById(data: IDeleteCommentDTO): Promise<void>;
}
