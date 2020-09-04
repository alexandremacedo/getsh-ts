import { container } from 'tsyringe';

import './providers';
import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import PostsRepository from '@modules/posts/infra/typeorm/repositories/PostsRepository';
import ICommentsRepository from '@modules/posts/repositories/ICommentsRepository';
import CommentsRepository from '@modules/posts/infra/typeorm/repositories/CommentsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository,
);
