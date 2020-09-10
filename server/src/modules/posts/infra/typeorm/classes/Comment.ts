import { ObjectID, UpdateDateColumn, CreateDateColumn, Column } from 'typeorm';

class Comment {
  @Column()
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
