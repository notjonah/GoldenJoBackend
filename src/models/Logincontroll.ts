import { model, property, Entity } from "@loopback/repository";

@model({
    name: "Logincontroll"
})
export class Logincontroll extends Entity {

    @property({
        type: "number",
        id: true
    })
    id: number;

    @property({
        type: "string"
    })
    name: string;

    @property({
        type: "string"
    })
    toppingA: string;

    getId() {
        return this.id;
    }

}
