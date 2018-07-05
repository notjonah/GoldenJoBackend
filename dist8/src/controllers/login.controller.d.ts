import { UserRepository } from '../repositories/User.repository';
import { User } from '../models';
export declare class LoginController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    loginUser(user: User): Promise<User | null>;
}
