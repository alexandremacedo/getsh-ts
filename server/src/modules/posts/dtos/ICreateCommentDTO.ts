export default interface ICreateCommentDTO {
  comment: {
    user_id: string;
    content: string;
  };
  post_id: string;
}
