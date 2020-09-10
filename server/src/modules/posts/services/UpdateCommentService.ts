import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import ICommentsRepository from '../repositories/ICommentsRepository';
import Comment from '../infra/typeorm/classes/Comment';

interface IRequest {
  post_id: string;
  user_id: string;
  comment_id: string;
  content: string;
}

@injectable()
class UpdateCommentService {
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
    content,
  }: IRequest): Promise<Comment> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    const commentToUpdate = post.comments.find(
      comment =>
        comment.user_id === user_id && String(comment.id) === comment_id,
    );

    if (!commentToUpdate) {
      throw new Error('You are not be able to update someone else comment');
    }

    return await this.commentsRepository.update({
      comment_id,
      post_id,
      content,
    });
  }
}

export default UpdateCommentService;
