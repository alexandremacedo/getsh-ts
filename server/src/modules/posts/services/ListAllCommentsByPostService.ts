import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import Comment from '../infra/typeorm/entities/Comment';

interface IRequest {
  post_id: string;
}

@injectable()
class ListAllCommentsByPostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute({ post_id }: IRequest): Promise<Comment[]> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    const { comments } = post;

    console.log(comments);

    return comments;
  }
}

export default ListAllCommentsByPostService;
