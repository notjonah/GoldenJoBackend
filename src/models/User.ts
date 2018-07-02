import { model, property, Entity } from "@loopback/repository";

@model({
    name: "User"
})
export class User extends Entity {

    @property({
        type: "number",
        id: true
    })
    id: number;

    @property({
        type: "string"
    })
    username: string;

    @property({
        type: "string"
    })
    email: string;

    @property({
        type: "number"
    })
    phone: number;

    getUserId() {
        return this.id;
    }

}
