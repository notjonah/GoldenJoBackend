import { UserRepository } from '../repositories/User.repository';
import { User } from '../models/user.model';
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
