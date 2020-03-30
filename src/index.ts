import {Pokemon} from "./Pokemon"
import {Battle} from "./Battle";
import {Attack} from "./Attack";

const attacks = [new Attack("quick attack", 40, "normal", "physique", 100)]
const pika: Pokemon = new Pokemon("pikachu", 90, 55, 35, 1, 40, attacks, "lightning");
const salamech: Pokemon = new Pokemon("salamech", 65, 52, 39, 1, 43, attacks, "fire");
const draco: Pokemon = new Pokemon("dracofeu", 70, 84, 61, 2, 65, attacks, "dragon");

Battle.simulateFight(pika, salamech).then(res => console.log(res)).catch(e => console.log(e));