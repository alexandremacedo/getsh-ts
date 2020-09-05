import { injectable, inject } from 'tsyringe';
import { ObjectID } from 'mongodb';
import IPostsRepository from '../repositories/IPostsRepository';
import ILikesRepository from '../repositories/ILikesRepository';
import Like from '../infra/typeorm/entities/Like';

interface IRequest {
  post_id: string;
  user_id: string;
}

@injectable()
class CreateOrDeleteLikeService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('LikesRepository')
    private likesRepository: ILikesRepository,
  ) { }

  public async execute({ post_id, user_id }: IRequest): Promise<Like> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new Error(
        'Something is wrong with this post, please refresh and like it again!',
      );
    }

    const likeCreated = post.likes.find(like => like.user_id === user_id);
    console.log(likeCreated);

    if (likeCreated) {
      await this.likesRepository.remove({ user_id, post_id });
      return likeCreated;
    }

    const like = {
      id: new ObjectID(),
      user_id,
      created_at: new Date(),
    };

    await this.likesRepository.create({ like, post_id });

    return like;
  }
}

export default CreateOrDeleteLikeService;
