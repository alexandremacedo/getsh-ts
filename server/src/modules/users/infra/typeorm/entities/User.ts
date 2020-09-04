import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';
import archievesUpload from '@config/archievesUpload';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }
    switch (archievesUpload.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/photos/${this.id}/${this.avatar}`;
      case 's3':
        return `https://${archievesUpload.config.aws.bucket}.s3.amazonaws.com/photos/${this.id}/${this.avatar}`;
      default:
        return null;
    }
  }
}

export default User;
