import { am } from "vitest/dist/reporters-5f784f42"
import { coin, d10, d12, d20, d3, d4, d6, d8, Dice, DiceGeneratorFunction, DiceType } from "./Dice"

export class DiceFactory {
    
    private diceGenerators: Map<DiceType, DiceGeneratorFunction> = new Map<DiceType, DiceGeneratorFunction>([
    [DiceType.Coin, coin],
    [DiceType.D4, d4],
    [DiceType.D6, d6],
    [DiceType.D8, d8],
[DiceType.D10, d10],
[DiceType.D12, d12],
[DiceType.D20, d20]
    ])

generateDices(diceType: DiceType, amount: number): Dice[] {
    const generator: DiceGeneratorFunction | undefined = this.diceGenerators.get(diceType)

    if(generator === undefined) {
        return []
    }

let dices: Dice[] = []

    for(let i = 0; i < amount; i++){
dices = [...dices, generator()]
    }

    return dices
}

}

export const diceFactory = new DiceFactory()