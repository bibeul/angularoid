import {Battle} from "../Battle";
import {Pokemon} from "../Pokemon";
import {Attack} from "../Attack";

describe('Test Battle.ts', () => {
    const attacks = [new Attack("quick attack", 40, "normal", "physique", 100)]
    const pika: Pokemon = new Pokemon("pikachu", 90, 55, 35, 1, 40, attacks, "lightning");
    const salamech: Pokemon = new Pokemon("salamech", 65, 52, 39, 1, 43, attacks, "fire");
    const draco: Pokemon = new Pokemon("dracofeu", 70, 84, 61, 2, 65, attacks, "dragon");

    test('salamech should get minus 200 hp', () => {
        draco.attack(salamech, 0, true);
        expect(salamech.hp).toBe(34);
    });

    test('pika should get minus 80 hp', () => {
        salamech.attack(pika, 0, true);
        expect(pika.hp).toBe(31);
    });

    test('pika should get minus 80 hp', () => {
        salamech.attack(pika, 0, false);
        expect(pika.hp).toBe(31);
    });
});
