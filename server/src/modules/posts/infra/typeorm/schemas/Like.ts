import {
  ObjectID,
  Entity,
  CreateDateColumn,
  Column,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class Like {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('uuid')
  user_id: string;

  @Column()
  post_id: ObjectID;

  @CreateDateColumn()
  created_at: Date;
}

export default Like;
