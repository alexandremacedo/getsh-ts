import { getMongoRepository, MongoRepository } from 'typeorm';
import ICommentsRepository from '@modules/posts/repositories/ICommentsRepository';
import { ObjectID } from 'mongodb';
import Post from '../schemas/Post';
import Comment from '../schemas/Comment';

interface IRequest {
  comment: Comment;
  post_id: string;
}

class CommentsRepository implements ICommentsRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'mongo');
  }

  public async create({ comment, post_id }: IRequest): Promise<Comment> {
    await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
      },
      {
        $push: {
          comments: comment,
        },
      },
    );

    return comment;
  }
}

export default CommentsRepository;
