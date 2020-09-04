import { injectable, inject } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/schemas/Post';

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute({
    user_id,
    content,
    country,
    city,
    district,
    state,
    lat_long,
  }: ICreatePostDTO): Promise<Post> {
    const post = await this.postsRepository.create({
      user_id,
      content,
      country,
      city,
      district,
      state,
      lat_long,
      comments: [],
    });

    return post;
  }
}

export default CreatePostService;
