import {Battle} from "../Battle";
import {Pokemon} from "../Pokemon";

describe('Test Pokemon.ts', () => {
    const pika: Pokemon = new Pokemon("pikachu", 10);
    const salamech: Pokemon = new Pokemon("salamech", 11);
    const draco: Pokemon = new Pokemon("dracofeu", 5);

    test('should pick pikachu', () => {
        expect(Battle.fightFirst(pika, draco)).toBe(pika);
    });

    test('should pick salamech', () => {
        expect(Battle.fightFirst(pika, salamech)).toBe(salamech);
    });
});