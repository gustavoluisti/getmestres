import { Request } from "express";
import { User } from "../entity/User";
import { BaseController } from "./BaseController";

export class UserController extends BaseController<User> {
  constructor() {
    super(User);
  }

  async save(request: Request) {
    let _user = <User>request.body;
    super.isRequired(_user.name, "O nome do usuário é obrigatorio");
    super.isRequired(_user.photo, "A foto do usuário é obrigatoria");
    super.isRequired(_user.email, "O email do usuário é obrigatorio");
    super.isRequired(_user.password, "A senha do usuário é obrigatoria");
    return super.save(_user);
  }
}
