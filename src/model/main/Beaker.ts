import { S } from "vitest/dist/reporters-5f784f42";
import { Dice } from "./Dice";

export default class Beaker{

private _dices: Dice[]

constructor(dices: Dice[]) {
    this._dices = dices
}

get dices(): Dice[]{
return this._dices
}

roll() {
    this._dices.forEach((dice) => {
dice.roll
    })
}

}