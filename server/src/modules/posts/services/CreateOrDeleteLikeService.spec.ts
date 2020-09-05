import FakePostsRepository from '../repositories/fakes/FakePostRepository';
import CreatePostService from './CreatePostService';

let fakePostsRepository: FakePostsRepository;
let createPostService: CreatePostService;

describe('CreateLikeService', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    createPostService = new CreatePostService(fakePostsRepository);
  });

  it('should be able to create a new like', async () => { });
});
