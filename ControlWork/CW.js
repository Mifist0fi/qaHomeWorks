const prompt = require("prompt-sync")();

// first exersice
function ConvertString(){
    let arr = [];
    const ArrSize = prompt("сколько будет элементов в массиве?");

    for(let i= 0; i < ArrSize; i++){
        arr.push(prompt("введите элемент массива: "))
    }

    const formatted = arr.map(NumberStr => {
        const num = parseFloat(NumberStr)
        if(isNaN(num)){
            return `${NumberStr} - не является числом`
        }
        const formattedNumber = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(num);
        return formattedNumber;
        
    })
    console.log(formatted)
}
ConvertString()

//second
 function FilterSortElements(){
    let arr = [];
    const ArrSize = prompt("сколько будет элементов в массиве?");

    for(let i= 0; i < ArrSize; i++){
        arr.push(prompt("введите элемент массива: "))
    }
    const FilteredElements = arr.filter(Boolean);
    const decreasing = (a,b) => b-a;
    const SortedElements = FilteredElements.sort(decreasing)
    console.log(SortedElements)
 }
 FilterSortElements()

//third
function groupPeopleByAge(people) {
    const grouped = {};
    
    for (const person of people) {
        const age = person.age;
        const name = person.name; 
  
        if (!grouped[age]) { 
            grouped[age] = []; 
        }
    grouped[age].push(name); 
    }
    return grouped; 
}
  const people = [
    { name: "Стас", age: 30 },
    { name: "Михаил", age: 25 },
    { name: "Александра", age: 30 },
    { name: "Ксения", age: 25 },
  ];
  
console.log(groupPeopleByAge(people));

// fourth
function checkPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let firstsimbol = str[i];
        let lastsimbol = str[j - i];
        if (firstsimbol != lastsimbol) {
            return false;
        }
    }
    return true;

}

function isPalindrome(str) {
    
    let answer = checkPalindrome(str);

    if (answer == true) {
        console.log("введенная строка палиндром");
    }
    else {
        console.log("введення строка не является палиндромом");
    }
}


let test = prompt("введите строку: ");
isPalindrome(test);

fifth
function sumNestedArray(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        } else if (Array.isArray(arr[i])) {
            sum += sumNestedArray(arr[i]);
        }
    }
  
    return sum;
}
  
const myArray = [1, ["b", [3, 4], 5], 6];
  
console.log(`сумма массива: ${sumNestedArray(myArray)}`);

//sixth
function getUniqueLast(arr, compareFn) {
    const uniqueArr = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        let isUnique = true;
  
        for (let j = 0; j < uniqueArr.length; j++) {
            if (compareFn(current, uniqueArr[j])) {
                isUnique = false;
                break;
            }
        }
  
        if (isUnique) {
            uniqueArr.unshift(current);
        }
    }
  
    return uniqueArr;
}
  

const data = [{id: 1, value: 'a'}, {id: 2, value: 'b'}, {id: 1, value: 'c'}];
const uniqueData = getUniqueLast(data, (a, b) => a.id === b.id);
console.log(uniqueData);

// seventh
function transformStringsToObject(strings, transform) {
    const result = {}; 
  
    for (let i = 0; i < strings.length; i++) {
        const str = strings[i]; 
        result[str] = transform(str); 
    }
  
    return result; 
}
  
let strings = [];
const strSize = prompt("сколько будет элементов в массиве?");

for(let i= 0; i < strSize; i++){
    strings.push(prompt("введите элемент массива: "))
}
const transform = (str) => str.toUpperCase();
const result = transformStringsToObject(strings, transform);
console.log(result);

// eighth
async function executePromisesInParallel(promiseFactories) {
    const promises = promiseFactories.map(factory => factory());
  
    const results = await Promise.all(promises);
  
    return results;
}
  
async function example() {
    const promiseFactories = [
        () => Promise.resolve(1),
        () => Promise.resolve(2),
        () => Promise.resolve(3)
    ];
  
    const results = await executePromisesInParallel(promiseFactories);
    console.log(results);
}
  
example();

// nineth 

function createTable() {
    const n = Number(prompt("Введите n: "))
    if (n < 1) {    
        console.log("Ошибка: Введите число больше 0.");
        return;
    }
  
    if (!Number.isInteger(n)) {
        console.log("Предупреждение: Введите целое число.");
        return;
    }
    let header = "-------------------------------------\n";
    header += "x |";
    for (let i = 1; i <= n; i++) {
        header += " " + i;
    }
    header += "\n-------------------------------------";
    console.log(header);

    for (let i = 1; i <= n; i++) {
        let row = i + " |";
        for (let j = 1; j <= n; j++) {
            row += " " + (i * j);
        }
        console.log(row);
    }

    let rowSums = Array(n).fill(0);
    let colSums = Array(n).fill(0);
    let totalSum = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            rowSums[i-1] += i * j;
            colSums[j-1] += i * j;
            totalSum += i * j;
        }
    }

    console.log("Сумма строк:", rowSums);
    console.log("Сумма столбцов:", colSums);
    console.log("Общая сумма таблицы:", totalSum);
}

createTable();

// tenth
function squareAfterDelay(num, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
        const result = num * num;
        console.log(`Квадрат числа ${num} = ${result}`); 
        resolve(result);
        }, delay);
    });
}
  
const Number = Number(prompt("Введите число: "));
  
squareAfterDelay(Number, 3000)
    .then(result1 => squareAfterDelay(result1, 3000))
    .then(result2 => squareAfterDelay(result2, 3000))
    .then(finalResult => {
        console.log(`Финальный результат: ${finalResult}`);
    });