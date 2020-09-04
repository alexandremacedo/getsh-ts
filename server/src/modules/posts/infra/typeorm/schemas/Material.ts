import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
class Material {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: 0 })
  animal: number;

  @Column({ default: 0 })
  arboreal: number;

  @Column({ default: 0 })
  bug: number;

  @Column({ default: 0 })
  carcass: number;

  @Column({ default: 0 })
  eletronic: number;

  @Column({ default: 0 })
  food: number;

  @Column({ default: 0 })
  glass: number;

  @Column({ default: 0 })
  biomedical: number;

  @Column({ default: 0 })
  metal: number;

  @Column({ default: 0 })
  paper: number;

  @Column({ default: 0 })
  plastic: number;

  @Column({ default: 0 })
  rubble: number;
}

export default Material;
