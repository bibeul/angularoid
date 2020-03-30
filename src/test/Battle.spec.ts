import {Battle} from "../Battle";
import {Pokemon} from "../Pokemon";
import {Attack} from "../Attack";

describe('Test Battle.ts', () => {
    const attacks = [new Attack("quick attack", 40, "normal", "physique", 100)]
    const pika: Pokemon = new Pokemon("pikachu", 90, 55, 35, 1, 40, attacks, "lightning");
    const salamech: Pokemon = new Pokemon("salamech", 65, 52, 39, 1, 43, attacks, "fire");
    const draco: Pokemon = new Pokemon("dracofeu", 70, 84, 61, 2, 65, attacks, "dragon");

    test('Battle should get salamech as winner', async () => {
        expect(await Battle.simulateFight(salamech, pika)).toEqual(pika);
    });

    test('should pick pikachu', () => {
        expect(Battle.fightFirst(pika, draco)).toEqual([pika, draco]);
    });

    test('should pick pika', () => {
        expect(Battle.fightFirst(pika, salamech)).toEqual([pika, salamech]);
    });
});
