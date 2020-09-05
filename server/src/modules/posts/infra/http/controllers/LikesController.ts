import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateOrDeleteLikeService from '@modules/posts/services/CreateOrDeleteLikeService';
import ListAllLikesByPostService from '@modules/posts/services/ListAllLikesByPostService';

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

  public async list(request: Request, response: Response): Promise<Response> {
    try {
      const { post_id } = request.params;

      const listLikes = container.resolve(ListAllLikesByPostService);

      const likes = await listLikes.execute({
        post_id,
      });

      return response.json(likes);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
