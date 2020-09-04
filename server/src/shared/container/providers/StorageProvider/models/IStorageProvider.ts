export default interface IStorageProvider {
  saveFile(user_id: string, file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
