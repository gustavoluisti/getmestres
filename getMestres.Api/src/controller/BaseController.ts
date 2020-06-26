import { getRepository, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { BaseNotification } from "../entity/BaseNotification";

export abstract class BaseController<T> extends BaseNotification {
  private _repository: Repository<T>;

  constructor(entity: any) {
    super();
    this._repository = getRepository<T>(entity);
  }

  async all() {
    return this._repository.find();
  }

  async one(request: Request) {
    return this._repository.findOne(request.params.id);
  }

  async save(model: any) {
    if (model.uid) {
      let _modelInDb = await this._repository.findOne(model.uid);
      if (_modelInDb) {
        Object.assign(_modelInDb, model);
      }
    }

    if (this.valid()) return this._repository.save(model);
    else
      return {
        status: 400,
        errors: this.allNotifications,
      };
  }

  async remove(request: Request) {
    let uid = request.params.id;
    let model: any;
    model = await this._repository.findOne(uid);
    if (model) {
      model.deleted = true;
    }
    return await this._repository.save(model);
  }
}
