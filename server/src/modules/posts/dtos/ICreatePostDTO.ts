import Like from '../infra/typeorm/classes/Like';
import Comment from '../infra/typeorm/classes/Comment';

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
  materials: [];
  image: string;
}
