import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import Post from '../infra/typeorm/schemas/Post';

interface IRequest {
  user_id: string;
}

@injectable()
class ListPostsByUserService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute(user_id: string): Promise<Post[]> {
    const posts = await this.postsRepository.findAllByUser(user_id);

    if (!posts) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    return posts;
  }
}

export default ListPostsByUserService;
