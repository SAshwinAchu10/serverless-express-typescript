import BaseService from './base.service';
import User from '../model/user.model';

let baseService = new BaseService();

export default class UserService {
  public findAll = async (): Promise<any> => {
    const response = await baseService.findAll(User);
    return response;
  };

  public findBySingleParam = async (
    key: String,
    value: String,
  ): Promise<any> => {
    let params = { KEY: value };
    params = JSON.parse(JSON.stringify(params).replace('KEY', key.toString()));
    const response = await baseService.findBySingleParam(User, params);
    return response;
  };

  public create = async (body: any): Promise<any> => {
    const response = await baseService.create(User, body);
    return response;
  };
}
