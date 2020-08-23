class Prople {
    constructor(name, sex) {
        this.name = name,
            this.sex = sex
    }
    toString() {
        console.log(`${this.name},${this.sex}`);
    }
}

class Students extends Prople {
    constructor(name, sex, num) {
        super(name, sex),
            this.num = num
    }
    myFun(fm, to) {
        console.log(`${this.name},${this.sex},${this.num},${fm},${to}`);
    }
    toString() {
        console.log(`${this.name},${this.sex},${this.num}`);
    }
}