import Post from '../infra/typeorm/schemas/Post';
import Comment from '../infra/typeorm/entities/Comment';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';
import IDeleteCommentDTO from '../dtos/IDeleteCommentDTO';
import IUpdateCommentDTO from '../dtos/IUpdateCommentDTO';

export default interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  deleteById(data: IDeleteCommentDTO): Promise<void>;
  update(data: IUpdateCommentDTO): Promise<Comment>;
}
