export class Dice {

    readonly name: string
    readonly sides: string[]

    private _currentSide: number | undefined

    constructor(name: string, sides: string[]) {
        this.name = name
        this.sides = sides
    }

    get currentSide(): string | undefined {
        return this._currentSide ?
            this.sides[this._currentSide]
            : undefined
    }

    roll() {
        this._currentSide = Math.floor(Math.random() * this.sides.length)
    }
}

export enum DiceType {
Coin = "Coin",
D3 = "D3",
D4 = "D4",
D6 = "D6",
D8 = "D8",
D10 = "D10",
D12 = "D12",
D20 = "D20"
}

export type DiceGeneratorFunction = () => Dice

export const coin = (): Dice => {
    return new Dice(DiceType.Coin, ["Face", "Tail"])
}

export const d3 = (): Dice => {
    return new Dice(DiceType.D3, ["1", "2", "3"])
}

export const d4 = (): Dice => {
    return new Dice(DiceType.D4, ["1", "2", "3", "4"])
}

export const d6 = (): Dice => {
    return new Dice(DiceType.D6, ["1", "2", "3", "4", "5", "6"])
}

export const d8 = (): Dice => {
    return new Dice(DiceType.D8, ["1", "2", "3", "4", "5", "6", "7", "8"])
}

export const d10 = (): Dice => {
    return new Dice(DiceType.D10, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
}

export const d12 = (): Dice => {
    return new Dice(DiceType.D12, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"])
}

export const d20 = (): Dice => {
    return new Dice(DiceType.D20, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"])
}
