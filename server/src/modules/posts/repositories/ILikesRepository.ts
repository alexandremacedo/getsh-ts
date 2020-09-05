import ICreateLikeDTO from '../dtos/ICreateLikeDTO';
import Like from '../infra/typeorm/entities/Like';
import IRemoveLikeDTO from '../dtos/IRemoveLikeDTO';

export default interface ILikesRepository {
  create(data: ICreateLikeDTO): Promise<Like>;
  remove(data: IRemoveLikeDTO): Promise<void>;
}
