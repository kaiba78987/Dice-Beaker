import Beaker from "../main/Beaker"
import { d6 } from "../main/Dice"

test("Beaker", () => {

    it("should roll every dice when the beaker is rolled", () => {
        const beaker: Beaker = new Beaker([d6(), d6()])

        beaker.roll()

        expect(beaker.dices[0].currentSide).toBeInstanceOf(string)
        expect(beaker.dices[1].currentSide).toBeInstanceOf(string)
    })
})