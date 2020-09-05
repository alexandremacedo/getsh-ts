import { getMongoRepository, MongoRepository } from 'typeorm';
import ILikesRepository from '@modules/posts/repositories/ILikesRepository';
import { ObjectID } from 'mongodb';
import ICreateLikeDTO from '@modules/posts/dtos/ICreateLikeDTO';
import Post from '../schemas/Post';
import Like from '../entities/Like';

interface IRemoveLike {
  user_id: string;
  post_id: string;
}

class LikesRepository implements ILikesRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'mongo');
  }

  public async create({ like, post_id }: ICreateLikeDTO): Promise<Like> {
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

  public async remove({ user_id, post_id }: IRemoveLike): Promise<void> {
    await this.ormRepository.findOneAndUpdate(
      { _id: new ObjectID(post_id) },
      { $pull: { likes: { user_id } } },
    );
  }
}

export default LikesRepository;
