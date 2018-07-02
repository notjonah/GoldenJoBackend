"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const Registration_1 = require("../models/Registration");
const repository_1 = require("@loopback/repository");
const Registration_repository_1 = require("../repositories/Registration.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let RegistrationController = class RegistrationController {
    constructor(RegistrationRepo) {
        this.RegistrationRepo = RegistrationRepo;
    }
    async getAllRegistrations(toppings) {
        // var Registrations = []; //new Array<any>();
        // if (toppings == "pineapple") {
        //   Registrations.push("With Pinapple");
        // } else {
        //   Registrations.push("Yum");
        // }
        // return Registrations;
        return await this.RegistrationRepo.find();
    }
    getSpecificRegistration(RegistrationId) {
        if (RegistrationId == "A") {
            return "ABC";
        }
        if (RegistrationId == "B") {
            return "BCD";
        }
        throw new rest_1.HttpErrors.NotFound("Sorry, Registration not found");
    }
    async createRegistration(Registration) {
        let createdRegistration = await this.RegistrationRepo.create(Registration);
        return createdRegistration;
    }
};
__decorate([
    rest_1.get("/Registrations"),
    __param(0, rest_1.param.query.string("toppings")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getAllRegistrations", null);
__decorate([
    rest_1.get("/Registrations/{RegistrationId}"),
    __param(0, rest_1.param.path.string("RegistrationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RegistrationController.prototype, "getSpecificRegistration", null);
__decorate([
    rest_1.post("/Registrations"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Registration_1.Registration]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createRegistration", null);
RegistrationController = __decorate([
    __param(0, repository_1.repository(Registration_repository_1.RegistrationRepository.name)),
    __metadata("design:paramtypes", [Registration_repository_1.RegistrationRepository])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=Registration.controller.js.map