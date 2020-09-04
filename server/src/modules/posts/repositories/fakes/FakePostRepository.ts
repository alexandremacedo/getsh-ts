import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import Post from '@modules/posts/infra/typeorm/schemas/Post';
import { ObjectID } from 'mongodb';
import IPostsRepository from '../IPostsRepository';

class FakePostsRepository implements IPostsRepository {
  private posts: Post[] = [];

  public async create({
    user_id,
    content,
    country,
    city,
    district,
    state,
    lat_long,
  }: ICreatePostDTO): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      id: new ObjectID(),
      user_id,
      content,
      country,
      city,
      district,
      state,
      lat_long,
    });

    this.posts.push(post);

    return post;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const findPost = this.posts.find(post => String(post.id) === id);

    return findPost;
  }
}

export default FakePostsRepository;
