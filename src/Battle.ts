import {Pokemon} from "./Pokemon";
import {getRandomInt} from "./utils";

export class Battle{
    static intervalId: NodeJS.Timeout;

    static fightFirst(pok1: Pokemon, pok2: Pokemon): Pokemon[] {
        if(pok1.speed > pok2.speed){
            return [pok1, pok2];
        } else if (pok2.speed > pok1.speed) {
            return [pok2, pok2];
        } else {
            const rand = getRandomInt(2);
            return rand === 0 ? [pok1, pok2] : [pok2, pok1];
        }
    }

    static simulateFight(pok1: Pokemon, pok2: Pokemon): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            Battle.intervalId = setInterval(() => {
                console.log("New round start");
                const roundOrder = Battle.fightFirst(pok1, pok2);
                console.log(`${roundOrder[0].name} start first`);
                roundOrder[0].attack(roundOrder[1], 0, roundOrder[0].checkHit(roundOrder[0].attackList[0]));
                if (roundOrder[1].hp <= 0){
                    resolve(roundOrder[0]);
                    clearInterval(Battle.intervalId);
                    return;
                }
                roundOrder[1].attack(roundOrder[0], 0, roundOrder[1].checkHit(roundOrder[1].attackList[0]));
                if (roundOrder[0].hp <= 0){
                    resolve(roundOrder[1]);
                    clearInterval(Battle.intervalId);
                    return;
                }
            }, 500 ,pok1, pok2);
        })
    }
}