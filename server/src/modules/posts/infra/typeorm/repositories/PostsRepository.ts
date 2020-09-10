import { getMongoRepository, MongoRepository } from 'typeorm';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import { ObjectID } from 'mongodb';
import IUpdatePostDTO from '@modules/posts/dtos/IUpdatePostDTO';
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

  public async update({ post_id, content }: IUpdatePostDTO): Promise<Post> {
    const post = await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
      },
      {
        $set: { content, updated_at: new Date() },
      },
    );

    post.value.content = content;

    return post.value;
  }
}

export default PostsRepository;
