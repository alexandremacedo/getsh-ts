import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import ICommentsRepository from '../repositories/ICommentsRepository';

interface IRequest {
  post_id: string;
  user_id: string;
  comment_id: string;
}

@injectable()
class DeleteCommentService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) { }

  public async execute({
    post_id,
    user_id,
    comment_id,
  }: IRequest): Promise<void> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    const commentToRemove = post.comments.find(
      comment =>
        comment.user_id === user_id && String(comment.id) === comment_id,
    );

    if (!commentToRemove) {
      throw new Error('You are not be able to delete someone else comment');
    }

    await this.commentsRepository.deleteById({ comment_id, post_id });
  }
}

export default DeleteCommentService;
