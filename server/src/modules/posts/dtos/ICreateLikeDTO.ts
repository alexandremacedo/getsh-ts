import Like from '../infra/typeorm/entities/Like';

export default interface ICreateLikeDTO {
  like: Like;
  post_id: string;
}
