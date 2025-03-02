 const prompt = require("prompt-sync")();

 console.log("first exersice") 

let quantity = prompt("введите набор цифр: ");
if (quantity.length % 2===0){
    let firstSum = 0;
    let secondSum = 0;
    quantity = quantity.split('')
    for (let i = 0; i<quantity.length/2; i++){
        firstSum += +(quantity[i])
    }
    for (let i = quantity.length/2; i<quantity.length; i++){
        secondSum += +(quantity[i])
    }
    if (firstSum === secondSum){
        console.log("да")
    }else{
        console.log("нет")}

}else{
    console.log("набор цифр нечетный")}




console.log("second exersice") 
let number_N = Number(prompt("Введите n: "));
let num = 0;
if (number_N % 2 === 0 && number_N >= 50){

    do{
        number_N = number_N /2
        num++
    }
    while(number_N >= 50)

    console.log(`Последнее число получилось: ${number_N}`)
    console.log(`Количество итераций равно: ${num}`)  
    
}else {console.log("n не делится на 2 без остатка или меньше 50")}



console.log("third exersice") 
const arr = [];
let sum = 0;
let arr_size = Number(prompt("сколько элементов в массиве хотите? "));
for (let i = 0; i< arr_size; i++) {
    arr.push(Number(prompt("Введите элемент массива ")));
    sum += arr[i];
    console.log(sum);
  }
console.log(`Среднее арифметическое равно: ${sum/arr_size}`)



console.log("fourth exersice") 
function InputDataArr1 () {
    const arr = [];

    let arr_size = Number(prompt("сколько элементов в массиве хотите? "));

    for (let i = 0; i< arr_size; i++) {
        arr.push(Number(prompt("Введите элемент массива: ")));
    }

    let index = Number(prompt("После какого элементма хотите вставлять данные? "))

    let numberOfInput = Number(prompt("Cколько элементов вы хотите добавить? "))

    for (let i= 0; i< numberOfInput; i++){
        let newElement = prompt("Какие элементы вы хотите добавать: ")
        arr.splice(index, 0, newElement)
        index++
        console.log(arr)
    }

}
InputDataArr1 ()



console.log("fifth exersice") 
function InputDataArr2 () {
    const arr = [];

    let arr_size = Number(prompt("Сколько элементов в массиве хотите? "));

    for (let i = 0; i < arr_size; i++) {
        arr.push(Number(prompt("Введите элемент массива: ")));
    }

    let quantity = Number(prompt("Во сколько мест хотите вставить данные? "))

    for (let i = 0; i < quantity; i++){

        let index = Number(prompt("После какого элемента хотите вставлять данные? "))
        let numberOfInput = Number(prompt("Cколько элементов вы хотите добавить? "))

        for (let i= 0; i< numberOfInput; i++){
            let newElement = prompt("Какие элементы вы хотите добавить: ")
            arr.splice(index, 0, newElement)
            index++
            console.log(arr)
        }

    }

}
InputDataArr2 ()



console.log("sixth exersice")
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

const arre_ex6 = [];

let arr_size_ex6 = Number(prompt("Сколько элементов в массиве хотите? "));

for (let i = 0; i < arr_size_ex6; i++) {
    arre_ex6.push(Number(prompt("Введите элемент массива: ")));
}

arre_ex6.sort(compareNumeric);

console.log(arre_ex6)

console.log("Конец программы!")