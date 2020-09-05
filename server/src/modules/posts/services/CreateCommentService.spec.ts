import FakePostsRepository from '../repositories/fakes/FakePostRepository';
import CreatePostService from './CreatePostService';

let fakePostsRepository: FakePostsRepository;
let createPostService: CreatePostService;

describe('CreateComment', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    createPostService = new CreatePostService(fakePostsRepository);
  });

  it('should be able to create a new comment', async () => { });
});
