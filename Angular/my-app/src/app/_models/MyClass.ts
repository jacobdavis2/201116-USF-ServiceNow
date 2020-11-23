import { Bonus } from "./Bonus";

class MyClass implements Bonus {
    private myVariable: number = 0;
    public bonusSalary: number = 100;

    constructor(param1: number, param2: number) {
        this.myVariable = param1 + param2;
    }

    printBonus(bonus: Bonus): void {
        console.log(bonus.bonusSalary);
    }
}

