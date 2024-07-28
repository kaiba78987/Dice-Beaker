import { Dice, DiceType } from "../main/Dice"
import { diceFactory, DiceFactory } from "../main/DiceFactory"

test("DiceFactory"), () => {
 
    it("should return 3D6", () => {
        const dices: Dice[] = diceFactory.generateDices(DiceType.D6, 3)

        expect(dices.length).toBe(3)
        expect(dices[0].name).toBe(DiceType.D6)
    })

}