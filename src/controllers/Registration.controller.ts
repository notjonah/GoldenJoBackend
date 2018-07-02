import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Registration } from "../models/Registration";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/User.repository";
import { User } from "../models/User";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class RegistrationController {

  constructor(
    @repository(UserRepository.name) private UserRepo: UserRepository
  ) { }

  @post("/Registrations")
  async createRegistration(
    @requestBody() user: User
  ): Promise<User> {

    let createdUser = await this.UserRepo.create(user);
    return createdUser;

  }
}
