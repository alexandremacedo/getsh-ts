import {
  ObjectID,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ObjectIdColumn,
} from 'typeorm';

import Comment from '../entities/Comment';
import Like from '../entities/Like';

@Entity()
class Post {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('uuid')
  user_id: string;

  @Column()
  content: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column()
  lat_long: string;

  // @Column()
  // materials_id: ObjectID;

  @Column()
  likes: Like[];

  @Column()
  comments: Comment[];

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Post;
