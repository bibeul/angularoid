import {Battle} from "../Battle";
import {Pokemon} from "../Pokemon";

describe('Test Pokemon.ts', () => {
    test('should say', () => {
        const pika: Pokemon = new Pokemon("pikachu", 10);
        const draco: Pokemon = new Pokemon("dracofeu", 5);
        expect(Battle.fightFirst(pika, draco)).toBe(pika);
    })
});