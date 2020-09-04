import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreatePostService from '@modules/posts/services/CreatePostService';

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
      });

      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
