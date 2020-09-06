import { getMongoRepository, MongoRepository } from 'typeorm';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import { ObjectID } from 'mongodb';
import Post from '../schemas/Post';

class PostsRepository implements IPostsRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'mongo');
  }

  public async create(postData: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create(postData);

    await this.ormRepository.save(post);

    return post;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const findPost = await this.ormRepository.findOne(id);

    return findPost;
  }

  public async findAllByUser(user_id: string): Promise<Post[]> {
    const findPosts = await this.ormRepository.find({ where: { user_id } });

    return findPosts;
  }

  public async delete(post_id: string): Promise<void> {
    await this.ormRepository.findOneAndDelete({
      _id: new ObjectID(post_id),
    });
  }
}

export default PostsRepository;
