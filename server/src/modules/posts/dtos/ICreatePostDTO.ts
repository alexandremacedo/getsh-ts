import Like from '../infra/typeorm/entities/Like';

export default interface ICreatePostDTO {
  user_id: string;
  content: string;
  country: string;
  city: string;
  district: string;
  state: string;
  lat_long: string;
  comments: Array<Comment> | [];
  likes: Array<Like> | [];
}
