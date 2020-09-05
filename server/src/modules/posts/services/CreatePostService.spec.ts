import FakePostsRepository from '../repositories/fakes/FakePostRepository';
import CreatePostService from './CreatePostService';

let fakePostsRepository: FakePostsRepository;
let createPostService: CreatePostService;

describe('CreatePostService', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    createPostService = new CreatePostService(fakePostsRepository);
  });

  it('should be able to create a new post', async () => {
    const post = await createPostService.execute({
      user_id: 'user-id',
      content: 'content',
      country: 'country',
      city: 'city',
      district: 'district',
      state: 'state',
      lat_long: 'lat-long',
      comments: [],
      likes: [],
    });

    expect(post).toHaveProperty('id');
  });
});
