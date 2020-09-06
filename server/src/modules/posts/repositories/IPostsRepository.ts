import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/schemas/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  findById(post_id: string): Promise<Post | undefined>;
  findAllByUser(user_id: string): Promise<Post[]>;
  delete(post_id: string): Promise<void>;
}
