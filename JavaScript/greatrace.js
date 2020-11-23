class Bonus {
    constructor(speed, hours, canMove = true) {
        this.speed = speed;
        this.hours = hours;
        this.canMove = canMove;
    }
}

class Contestant {
    constructor(mph) {
        this.totalDistanceMi = 0;
        this.hoursRun = 0;
        this.mph = mph;
        this.leader = false;
        this.canMove = true;

        // A counter for any contestant to use
        this.hourCounter = 0;

        // Speed bonuses are added to this array
        this.bonuses = [];
    }

    runForOneHour() {
        let bonusSpeed = this.resolveBonuses();

        if (this.canMove) {
            this.totalDistanceMi += this.mph + bonusSpeed;
        }

        ++this.hoursRun;
        ++this.hourCounter;
    }

    // This function takes a function that adds bonuses
    // based on individual contestant behavior
    resolveBonuses() {

        this.addBonuses();

        let bonusSpeed = 0;
        this.canMove = true;

        for (let i = 0; i < this.bonuses.length; ++i) {
            if (this.bonuses[i].hours > 0) {
                if (!this.bonuses[i].canMove) {
                    this.canMove = false;
                }

                bonusSpeed += this.bonuses[i].speed;
                --this.bonuses[i].hours;
            } 
            // Delete the bonus if it is expired
            else this.bonuses.splice(i, 1);
        }

        return bonusSpeed;
    }

    addBonuses() { }
}

class Alice extends Contestant {
    constructor() {
        super(1);
    }

    addBonuses() {
        if (this.hourCounter == 8) {
            this.hourCounter = 0;
            this.bonuses.push(new Bonus(5, 1));
        }

        if (!this.leader) {
            this.bonuses.push(new Bonus(1, 1));
        }
    }
}

class Bob extends Contestant {
    constructor() {
        super(2);
    }

    addBonuses() {
        if (this.hourCounter % 7 == 0) {
            this.bonuses.push(new Bonus(1, 3));
        }

        if (!this.leader) {
            this.bonuses.push(new Bonus(1, 1));
        }
    }
}

class Charlie extends Contestant {
    constructor() {
        super(3);
    }

    addBonuses() {
        if (this.hourCounter == 9) {
            this.hourCounter = 0;
            this.bonuses.push(new Bonus(0, 3, false));
        }

        if (!this.leader) {
            this.bonuses.push(new Bonus(1, 1));
        }
    }
}

class Simulator {
    constructor() {
        this.contestants = [
            new Alice(),
            new Bob(),
            new Charlie()
        ];
    }

    resolveHour() {
        for (let i = 0; i < this.contestants.length; ++i) {
            this.contestants[i].runForOneHour();
        }
    }

    resolveAndUpdateLeader() {
        let maxDistIndex = 0;

        for (let i = 0; i < this.contestants.length; ++i) {
            this.contestants[i].leader = false;

            if (this.contestants[i].totalDistanceMi > this.contestants[maxDistIndex].totalDistanceMi) {
                maxDistIndex = i;
            }
        }

        this.contestants[maxDistIndex].leader = true;

        return maxDistIndex;
    }

    run(hours) {
        for (let i = 0; i < hours; ++i) {
            this.resolveHour();
            this.resolveAndUpdateLeader();
        }

        let winner =  this.contestants[this.resolveAndUpdateLeader()];

        console.log("Contestants:");
        console.log(this.contestants);

        this.contestants = [
            new Alice(),
            new Bob(),
            new Charlie()
        ];

        return winner;
    }
}

let s = new Simulator();
s.run(50);
console.log(s.contestants);