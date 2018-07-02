import { Registration } from "../models/Registration";
import { RegistrationRepository } from "../repositories/Registration.repository";
export declare class RegistrationController {
    private RegistrationRepo;
    constructor(RegistrationRepo: RegistrationRepository);
    getAllRegistrations(toppings: string): Promise<Array<any>>;
    getSpecificRegistration(RegistrationId: string): any;
    createRegistration(Registration: Registration): Promise<Registration>;
}
