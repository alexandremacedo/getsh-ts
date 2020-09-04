import {
  ObjectID,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class Comment {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('uuid')
  user_id: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Comment;
