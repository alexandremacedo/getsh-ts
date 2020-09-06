import { injectable, inject } from 'tsyringe';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IPostsRepository from '../repositories/IPostsRepository';
import Post from '../infra/typeorm/schemas/Post';
import IUpdatePostDTO from '../dtos/IUpdatePostDTO';

@injectable()
class UpdatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  public async execute({
    user_id,
    post_id,
    content,
  }: IUpdatePostDTO): Promise<Post> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and update it again!',
      );
    }

    if (post.user_id !== user_id) {
      throw new Error('You cannot delete someone else post');
    }

    const updatedPost = await this.postsRepository.update({
      post_id,
      user_id,
      content,
    });

    return updatedPost;
  }
}

export default UpdatePostService;
