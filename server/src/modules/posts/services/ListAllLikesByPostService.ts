import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import Like from '../infra/typeorm/entities/Like';

interface IRequest {
  post_id: string;
}

@injectable()
class ListAllLikesByPostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute({ post_id }: IRequest): Promise<Like[]> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    const { likes } = post;

    return likes;
  }
}

export default ListAllLikesByPostService;
