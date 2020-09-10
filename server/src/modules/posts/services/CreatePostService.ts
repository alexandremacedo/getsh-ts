import { injectable, inject } from 'tsyringe';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IPostsRepository from '../repositories/IPostsRepository';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/schemas/Post';

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  public async execute({
    user_id,
    content,
    country,
    city,
    district,
    state,
    lat_long,
    image,
  }: ICreatePostDTO): Promise<Post> {
    const filename = await this.storageProvider.saveFile(user_id, image);

    const post = await this.postsRepository.create({
      user_id,
      content,
      country,
      city,
      district,
      state,
      lat_long,
      comments: [],
      likes: [],
      materials: [],
      image: filename,
    });

    return post;
  }
}

export default CreatePostService;
