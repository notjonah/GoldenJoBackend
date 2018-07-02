import { Entity } from "@loopback/repository";
export declare class Registration extends Entity {
    id: number;
    name: string;
    toppingA: string;
    getId(): number;
}
