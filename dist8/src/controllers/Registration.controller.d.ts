import { UserRepository } from '../repositories/User.repository';
import { User } from '../models';
export declare class RegistrationController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    registerUser(user: User): Promise<User>;
}
