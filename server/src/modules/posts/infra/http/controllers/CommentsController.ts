import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateCommentService from '@modules/posts/services/CreateCommentService';
import DeleteCommentService from '@modules/posts/services/DeleteCommentService';
import ListAllCommentsByPostService from '@modules/posts/services/ListAllCommentsByPostService';
import UpdateCommentService from '@modules/posts/services/UpdateCommentService';

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

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { comment_id, post_id } = request.params;

      const deleteComment = container.resolve(DeleteCommentService);

      await deleteComment.execute({
        post_id,
        user_id,
        comment_id,
      });

      return response.json({ error: false, message: 'Comment deleted' });
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async list(request: Request, response: Response): Promise<Response> {
    try {
      const { post_id } = request.params;

      const listComments = container.resolve(ListAllCommentsByPostService);

      const comments = await listComments.execute({
        post_id,
      });

      return response.json(comments);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id;
      const { comment_id, post_id } = request.params;
      const { content } = request.body;

      const updateComment = container.resolve(UpdateCommentService);

      const comment = await updateComment.execute({
        post_id,
        user_id,
        comment_id,
        content,
      });

      return response.json(comment);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
