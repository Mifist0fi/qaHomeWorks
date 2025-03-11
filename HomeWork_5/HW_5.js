const prompt = require("prompt-sync")();

// first exersice
function simulateDiceGame() {
    const numPlayers = Number(prompt("Сколько игроков будет играть? "));
    const numRolls = Number(prompt("Сколько бросков будут делать? "));

    const playerResult = Array(numPlayers).fill(0);
     
    const rollDice = () => Math.floor(Math.random() * 6) + 1;
  
    for (let i = 0; i < numRolls; i++) {
      for (let player = 0; player < numPlayers; player++) {
        playerResult[player] += rollDice();
      }
    }
  
    let winner = 0;
    for (let i = 1; i < numPlayers; i++) {
      if (playerResult[i] > playerResult[winner]) {
        winner = i;
      }
    }
  
    console.log("Результаты:");
    for (let i = 0; i < numPlayers; i++) {
      console.log(`Игрок ${i + 1}: ${playerResult[i]}`);
    }
  
    if (playerResult.every(score => score === playerResult[0])) {
      console.log("Ничья!");
    } else {+
      console.log(`Победил игрок ${winner + 1}!`);
    }
  }
  
simulateDiceGame();

// second exersice a)
function splitInteger() {
    const number = Number(prompt("Какое число будем разбивать? "))
    const parts = Number(prompt("На сколько частей разбивать? "))
    let result = [];
    let sum = 0;

    for (let i = 0; i < parts - 1; i++) {
        let randomNum = Math.floor(Math.random() * (number - sum - (parts - i - 1))) + 1;
        result.push(randomNum);
        sum += randomNum;
    }
    result.push(number - sum);
    console.log(result);
}

// second exersice b)
function splitFloat() {
    const number = Number(prompt("Какое число будем разбивать на дробные? "))
    const parts = Number(prompt("На сколько частей разбивать? "))
    let result = [];
    let sum = 0;

    for (let i = 0; i < parts - 1; i++) {
        let randomNum = parseFloat((Math.random() * (number - sum - (parts - i - 1))).toFixed(2));
        result.push(randomNum);
        sum += randomNum;
    }

    
    result.push(parseFloat((number - sum).toFixed(2)));
    console.log(result);
}

splitInteger();
splitFloat();

function countFridaysThe13th(startDate) {

    const start = new Date(startDate);
    const today = new Date();
    let count = 0;

    for (let year = start.getFullYear(); year <= today.getFullYear(); year++) {
        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 13);
            if (date >= start && date <= today) {
                if (date.getDay() === 5) {
                    count++;
                }
            }
        }
    }

    return count;
}

const startDate = prompt(`Введите дату, пример ввода "2000-01-01": `);
const result = countFridaysThe13th(startDate);
console.log(`Количество Пятниц 13-ого с ${startDate} до сегодня: ${result}`);