import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Logincontroll } from "../models/Logincontroll";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/User.repository";
import { User } from "../models/User";

export class LogincontrollController {

  constructor(
    @repository(UserRepository.name) private UserRepo: UserRepository
  ) { }

  @get("/Logincontrolls")
  async getAllLogincontrolls(
    @param.query.string("email") email: string
  ): Promise<Array<User>> {

    return await this.UserRepo.find({
      where: {
        email
      }
    });
  }
}
