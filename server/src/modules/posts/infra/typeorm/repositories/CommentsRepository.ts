import { getMongoRepository, MongoRepository } from 'typeorm';
import ICommentsRepository from '@modules/posts/repositories/ICommentsRepository';
import { ObjectID } from 'mongodb';
import Post from '../schemas/Post';
import Comment from '../classes/Comment';

interface IRequest {
  comment: Comment;
  post_id: string;
}

interface IRemoveById {
  comment_id: string;
  post_id: string;
}

interface IUpdate {
  comment_id: string;
  post_id: string;
  content: string;
}

class CommentsRepository implements ICommentsRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'mongo');
  }

  public async create({ comment, post_id }: IRequest): Promise<Comment> {
    await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
      },
      {
        $push: {
          comments: comment,
        },
      },
    );

    return comment;
  }

  public async deleteById({ comment_id, post_id }: IRemoveById): Promise<void> {
    await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
      },
      {
        $pull: {
          comments: { id: new ObjectID(comment_id) },
        },
      },
    );
  }

  public async update({
    comment_id,
    post_id,
    content,
  }: IUpdate): Promise<Comment> {
    const date = new Date();
    const updatedCommentPost = await this.ormRepository.findOneAndUpdate(
      {
        _id: new ObjectID(post_id),
        'comments.id': new ObjectID(comment_id),
      },
      {
        $set: {
          'comments.$.content': content,
          'comments.$.updated_at': date,
        },
      },
    );

    const updatedComment = updatedCommentPost.value.comments.find(
      comment => String(comment.id) === comment_id,
    );

    updatedComment.content = content;
    updatedComment.updated_at = date;

    return updatedComment;
  }
}

export default CommentsRepository;
