import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';

interface IRequest {
  post_id: string;
  user_id: string;
}

@injectable()
class DeletePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute({ post_id, user_id }: IRequest): Promise<void> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and try to delete it again!',
      );
    }

    if (post.user_id !== user_id) {
      throw new Error('You cannot delete someone else post');
    }

    await this.postsRepository.delete(post_id);
  }
}

export default DeletePostService;
