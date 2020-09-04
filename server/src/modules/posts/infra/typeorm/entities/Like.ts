import { ObjectID, CreateDateColumn, Column } from 'typeorm';

class Like {
  @Column()
  id: ObjectID;

  @Column('uuid')
  user_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Like;
