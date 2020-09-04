import ICreateLikeDTO from '../dtos/ICreateLikeDTO';
import Like from '../infra/typeorm/entities/Like';

export default interface ILikesRepository {
  create(data: ICreateLikeDTO): Promise<Like>;
  remove(id: string): Promise<void>;
}
