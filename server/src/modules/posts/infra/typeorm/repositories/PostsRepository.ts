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

  public async create({
    user_id,
    content,
    country,
    city,
    district,
    state,
    lat_long,
  }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({
      user_id,
      content,
      country,
      city,
      district,
      state,
      lat_long,
      comments: [],
      likes: [],
    });

    await this.ormRepository.save(post);

    return post;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const findPost = this.ormRepository.findOne(id);

    return findPost;
  }
}

export default PostsRepository;
