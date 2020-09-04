import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateLikeService from '@modules/posts/services/CreateLikeService';

export default class LikesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { post_id } = request.params;

      const createLike = container.resolve(CreateLikeService);

      const like = await createLike.execute({
        post_id,
        user_id,
      });

      return response.json(like);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
