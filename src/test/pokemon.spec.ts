import {Battle} from "../Battle";
import {Pokemon} from "../Pokemon";
import {Attack} from "../Attack";

describe('Test Pokemon.ts', () => {
    const attacks = [new Attack("quick attack", 40, "normal", "physique", 100)];
    let pika: Pokemon;
    let salamech: Pokemon;
    let draco: Pokemon;

    beforeEach(() => {
        pika = new Pokemon("pikachu", 90, 55, 35, 1, 40, attacks, "lightning");
        salamech = new Pokemon("salamech", 65, 52, 39, 1, 43, attacks, "fire");
        draco = new Pokemon("dracofeu", 70, 84, 61, 2, 65, attacks, "dragon");
    });

    test('salamech should be at 34 hp', () => {
        draco.attack(salamech, 0, true);
        expect(salamech.hp).toBe(34);
    });

    test('pika should be at 31 hp', () => {
        salamech.attack(pika, 0, true);
        expect(pika.hp).toBe(31);
    });

    test('pika should still be at 31 hp', () => {
        salamech.attack(pika, 0, false);
        expect(pika.hp).toBe(35);
    });
});
