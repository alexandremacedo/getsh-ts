import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateOrDeleteLikeService from '@modules/posts/services/CreateOrDeleteLikeService';
import DeleteLikeService from '@modules/posts/services/DeleteLikeService';

export default class LikesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { post_id } = request.params;

      const createLike = container.resolve(CreateOrDeleteLikeService);

      const like = await createLike.execute({
        post_id,
        user_id,
      });

      return response.json(like);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { post_id } = request.params;

      const removeLike = container.resolve(CreateOrDeleteLikeService);

      await removeLike.execute({
        post_id,
        user_id,
      });

      return response.json({ message: 'dislike' });
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
