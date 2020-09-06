import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostsByUserService from '@modules/posts/services/ListPostsByUserService';
import DeletePostService from '@modules/posts/services/DeletePostService';
import UpdatePostService from '@modules/posts/services/UpdatePostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;

      const {
        content,
        country,
        city,
        district,
        state,
        lat_long,
      } = request.body;
      const createUser = container.resolve(CreatePostService);

      const post = await createUser.execute({
        user_id,
        content,
        country,
        city,
        district,
        state,
        lat_long,
        comments: [],
        likes: [],
        image: request.file.filename,
      });

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async list(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;

      const listPosts = container.resolve(ListPostsByUserService);

      const posts = await listPosts.execute(user_id);

      return response.json(posts);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { post_id } = request.params;

      const deletePost = container.resolve(DeletePostService);

      await deletePost.execute({ post_id, user_id });

      return response.json({ error: false, message: 'Post deleted' });
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { post_id } = request.params;
      const { content } = request.body;

      const updatePost = container.resolve(UpdatePostService);

      const updatedPost = await updatePost.execute({
        post_id,
        user_id,
        content,
      });

      return response.json(updatedPost);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
