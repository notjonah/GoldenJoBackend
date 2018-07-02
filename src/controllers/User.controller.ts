import { get, param } from "@loopback/rest";
import { User } from "../models/User";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/User.repository";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserController {

  constructor(
    @repository(UserRepository.name) private UserRepo: UserRepository
  ) { }

  @get("/users")
  async getAllUsers(): Promise<Array<User>> {
    return await this.UserRepo.find();
  }

  @get("/Users/{id}")
  async getOneUser(
    @param.query.string("id") id: string): Promise<User[]> {
    return await this.UserRepo.find({
      where: {
        userId: id
      }
    });
  }
}



