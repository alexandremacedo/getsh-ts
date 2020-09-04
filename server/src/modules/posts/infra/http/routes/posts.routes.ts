import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PostsController from '../controllers/PostsController';
import CommentsController from '../controllers/CommentsController';

const postsRouter = Router();
const postsController = new PostsController();
const commentsController = new CommentsController();

postsRouter.use(ensureAuthenticated);

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string().required(),
      country: Joi.string().required(),
      city: Joi.string().required(),
      district: Joi.string().required(),
      state: Joi.string().required(),
      lat_long: Joi.string().required(),
    },
  }),
  postsController.create,
);

postsRouter.post(
  '/:post_id/comments',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string().required(),
    },
  }),
  commentsController.create,
);

export default postsRouter;
