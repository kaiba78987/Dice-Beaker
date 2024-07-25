import { d6, Dice } from "../main/Dice";

test("Dice", () => {

it("should return undefined side when dice has not been rolled", () => {
const dice: Dice = d6()

expect(dice.currentSide).toBeUndefined()
})

it("should return a side when the dice has been rolled", () => {
    const dice: Dice = d6()

    dice.roll()

    expect(dice.currentSide).toBeInstanceOf(String)
})

})