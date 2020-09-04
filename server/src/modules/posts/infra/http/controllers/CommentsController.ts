import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateCommentService from '@modules/posts/services/CreateCommentService';

export default class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { content } = request.body;
      const user_id = request.user.id;
      const { post_id } = request.params;

      const createComment = container.resolve(CreateCommentService);

      const comment = await createComment.execute({
        post_id,
        user_id,
        content,
      });

      return response.json(comment);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
