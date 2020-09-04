import { getMongoRepository, MongoRepository } from 'typeorm';
import ILikesRepository from '@modules/posts/repositories/ILikesRepository';
import { ObjectID } from 'mongodb';
import Post from '../schemas/Post';
import Like from '../entities/Like';

interface IRequest {
  like: Like;
  post_id: string;
}

class LikesRepository implements ILikesRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'mongo');
  }

  public async create({ like, post_id }: IRequest): Promise<Like> {
    await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
      },
      {
        $push: {
          likes: like,
        },
      },
    );

    return like;
  }

  public async remove({ like, post_id }: IRequest): Promise<Like> {
    return like;
  }
}

export default LikesRepository;
