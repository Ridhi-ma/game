/*let javascriptFk = true;
console.log(23);
console.log(javascriptFk);
let markWeight = 78, markHeight = 1.69;
let johnWeight = 92, johnHeight = 1.95;
const bmiMark = markWeight / (markHeight ** 2);
const bmiJohn = johnWeight / (johnHeight ** 2);
console.log(bmiMark, bmiJohn);
console.log(bmiJohn > bmiMark);
if (bmiJohn > bmiMark) {
    console.log(`Mark's BMI ${bmiMark} is lower than John's ${bmiJohn}!`);
}
else {
    console.log(`John's BMI ${bmiJohn} is lower than Mark's ${bmiMark}`);
}

const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 123) / 3;
console.log(dolphinsScore, koalasScore);
if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`winner is ${dolphinsScore}`)
}
else {
    console.log(`winner is ${koalasScore}
    console.log(billValue + tip);

const billValue = 200;
const tip = 50 < billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100;
console.log(billValue);
console.log(tip);
console.log(billValue + tip);

const tip1 = 15 / 100;
const tip2 = 20 / 100;
let value = 500;
value = 300
const tip = value >= 50 && value <= 300 ? console.log(`Bill: ${value} & with tip the total value is ${value + value * tip1}🤡`) :
    console.log(`Bill:${value} & the total value when the value isn't between 50 to 300 is ${value + value * tip2} 😎`);

function fruitProcessor(apples, oranges) {
    const juice = `Juice madeup of ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(10, 20);
console.log(fruitProcessor(10, 20))

const calculateAge = (birthYear, surName) => {

    var age = 2022 - birthYear;
    console.log(`${surName} is ${age}years old`);
    return age;
}
const vkt = calculateAge(2002, `Singh`);

const calculateYears = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    console.log(`${firstName} is ${age} years old and her retirement age is ${retirement}`);
    return age, retirement;
}
const aB = calculateYears(2002, `Ridhima`);
'use script';
const calcAverage = (a, b, c) => (a + b + c) / 3;
const aB = calcAverage(44, 23, 71);
const cD = calcAverage(65, 54, 49);
console.log(aB, cD);

const checkWinner = function (aB, cD) {

    if (aB >= 2 * cD) {
        console.log(`Dolphins are winner ${aB}`);
    }
    else if (cD >= 2 * aB) {
        console.log(`koalas are winner ${cD} `);
    }
    else {
        console.log(`koalas ${cD} ille Dolphines ${aB} ille`);
    }

}
checkWinner(aB, cD);

const calcTip = (billValue) => {
    if (billValue > 50 && billValue <= 300) {
        const tip1 = 15 / 100 * billValue;
        console.log(tip1);
        return tip1;
    }
    else {
        const tip = 20 / 100 * billValue;
        // console.log(`Bill ${billValue} and with tip final value ${billValue + tip}`);
        console.log(tip);
        return tip;

    }

}
calcTip(100);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

//console.log(ridhima);
//console.log(ridhima.firstName);

//console.log(ridhima[`firstName`]);
//const vansh = `Name`;
//console.log(ridhima[`first` + vansh]);

//console.log(`${ridhima.firstName} has ${(ridhima.friends.length)} friends but his mc friend is ${ridhima.friends[2]}`);
const ridhima = {
    firstName: 'aB',
    lastName: 'cD',
    age: 2022 - 2002,
    friends: [`a`, `b`, `c`],
    hasdriverslicense: false,
    job: `freeLancer`,
    getSummary: function () {
        if (this.hasdriverslicense) {
            console.log(`${this.firstName} is ${this.age}years old ${this.job}, and she has a drivers license`)
        }
        else {
            console.log(`${this.firstName} is ${this.age}years old ${this.job}, and she doesnot have a drivers license`)
        }
    }
};
ridhima.getSummary();

const mark = {
    fullName: `mark`,
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.Bmi = this.mass / (this.height ** 2);
        console.log(this.Bmi);
        return this.Bmi;
    }
};
const john = {
    fullName: `john`,
    mass: 90,
    height: 1.95,
    calcBmi: function () {
        this.Bmi = this.mass / (this.height ** 2);
        console.log(this.Bmi);
        return this.Bmi;
    }
};
mark.calcBmi();
john.calcBmi(); 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = billvalue => {
    if (50 < billvalue && billvalue <= 300) {
        const tip = 15 / 100;

        return tip;
    }
    else {
        const tip = 20 / 100;

        return tip;

    }


}
for (let billvalue = 0; billvalue < bills.length; billvalue++) {
    console.log(bills[billvalue]);
    tips.push(calcTip(bills[billvalue]) * (bills[billvalue]));
    totals.push(bills[billvalue] + calcTip(bills[billvalue]) * (bills[billvalue]));

}
console.log(tips);
console.log(totals);

const vansh = {
    firstName: `vansh`,
    mass: 80,
    height: 1.72,
    calcBmi: function () {
        this.bmi = this.mass * this.height,
            console.log(this.bmi);
        return this.bmi;
    }
}
vansh.calcBmi();
const mass = [12, 13, 89, 76, 45];
const height = [1.89, 1.6, 1.3, 1.2, 1.1];
const bmi = [];
for (let body = 0; body < mass.length; body++) {
    bmi.push(mass[body] * height[body]);

}
console.log(bmi);
// const a = "rm";
// console.log(a);

const temperature = [3, -2, 6, -1, `error`, 9, 13, 15, 17, 14, 9, 5];
const calcTempAltitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== `number`) {
      continue;
    }
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAltitude(temperature));

const a = [2, 3, -9];
const b = [8, 10, -7];
const c = a.concat(b);
console.log(c);*/

const maxTemp1 = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];
const printForecast = (values) => {
  let str = "";
  for (let i = 0; i < values.length; i++) {
    str = str + `${values[i]}degree C in ${i + 1} day `;
  }
  console.log(str);
};
printForecast(maxTemp1);
printForecast(maxTemp2);
