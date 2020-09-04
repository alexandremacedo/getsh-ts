import { injectable, inject } from 'tsyringe';
import { ObjectID } from 'mongodb';
import IPostsRepository from '../repositories/IPostsRepository';
import ICommentsRepository from '../repositories/ICommentsRepository';
import Comment from '../infra/typeorm/schemas/Comment';

interface IRequest {
  post_id: string;
  user_id: string;
  content: string;
}

@injectable()
class CreateCommentService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) { }

  public async execute({
    post_id,
    user_id,
    content,
  }: IRequest): Promise<Comment> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and comment it again!',
      );
    }

    const comment = {
      id: new ObjectID(),
      user_id,
      content,
      created_at: new Date(),
      updated_at: new Date(),
    };

    await this.commentsRepository.create({ comment, post_id });

    return comment;
  }
}

export default CreateCommentService;
