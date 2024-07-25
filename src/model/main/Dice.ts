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

export const coin = (): Dice => {
    return new Dice("Coin", ["Face", "Tail"])
}

export const d3 = (): Dice => {
    return new Dice("D3", ["1", "2", "3"])
}

export const d4 = (): Dice => {
    return new Dice("D4", ["1", "2", "3", "4"])
}

export const d6 = (): Dice => {
    return new Dice("D6", ["1", "2", "3", "4", "5", "6"])
}

export const d8 = (): Dice => {
    return new Dice("D8", ["1", "2", "3", "4", "5", "6", "7", "8"])
}

export const d10 = (): Dice => {
    return new Dice("D10", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
}

export const d12 = (): Dice => {
    return new Dice("D12", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"])
}

export const d20 = (): Dice => {
    return new Dice("D20", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"])
}
