import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { username, name, email, password } = request.body;
      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        username,
        name,
        email,
        password,
      });

      return response.json(classToClass(user));
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
