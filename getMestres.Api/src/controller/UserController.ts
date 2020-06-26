import { Request } from "express";
import { User } from "../entity/User";
import { BaseController } from "./BaseController";

export class UserController extends BaseController<User> {
  constructor() {
    super(User);
  }

  async createUser(request: Request) {
    let {
      name,
      photo,
      email,
      password,
      confirmPassword,
      isRoot,
    } = request.body;
    super.isRequired(name, "Informe o nome");
    super.isRequired(photo, "Envie a foto");
    super.isRequired(email, "Informe o e-mail");
    super.isRequired(password, "Informe a senha");
    super.isRequired(confirmPassword, "Confirme sua senha");

    let _user = new User();
    _user.name = name;
    _user.photo = photo;
    _user.email = email;
    _user.password = password;
    _user.isRoot = isRoot;

    return super.save(_user);
  }

  async save(request: Request) {
    let { name, photo, email, password, isRoot } = request.body;
    super.isRequired(name, "O nome do usuário é obrigatorio");
    super.isRequired(photo, "A foto do usuário é obrigatoria");
    super.isRequired(email, "O email do usuário é obrigatorio");
    super.isRequired(password, "A senha do usuário é obrigatoria");
    let _user = new User();
    _user.name = name;
    _user.photo = photo;
    _user.email = email;
    _user.password = password;
    _user.isRoot = isRoot;

    return super.save(_user);
  }
}
