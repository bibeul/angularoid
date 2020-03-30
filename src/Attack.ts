export class Attack{
    name: string;
    power: number;
    type: string;
    nature: string;
    acc: number;

    constructor(name: string, power: number, type: string, nature: string, acc: number) {
        this.name = name;
        this.power = power;
        this.type = type;
        this.nature = nature;
        this.acc = acc;
    }
}