import {Attack} from "./Attack";
import {getRandomInt} from "./utils";

export class Pokemon{
    name: string;
    speed: number;
    power: number;
    hp: number;
    crit: number;
    level: number;
    defStat: number;
    attackList: Attack[];
    type: string;

    constructor(name: string, speed: number, power: number, hp: number, level: number, defStat: number, attacks: Attack[], type: string) {
        this.name = name;
        this.speed = speed;
        this.power = power;
        this.hp = hp;
        this.crit = speed / 2;
        this.level = level;
        this.defStat = defStat;
        this.attackList = attacks;
        this.type = type;
    }

    attack(target: Pokemon, attack: number, isHit: boolean): void {
        if (isHit) {
            const damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.attackList[attack].power * this.power / target.defStat) / 50) + 2;
            console.log(`${this.name} attack ${target.name} for ${damage}`);
            target.hp -= damage;
            console.log(`${target.name} has ${target.hp}`);
            return;
        }
        console.log(`${this.name} miss its attack`);
    }

    checkHit(attack: Attack): boolean{
        return getRandomInt(100) <= attack.acc;
    }
}