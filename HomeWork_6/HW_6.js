
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}


let firstPromice = new Promise(function (resolve, reject) {
    setTimeout(resolve, getRandomIntInclusive(1,5000), "1");
});
let secondPromice = new Promise(function (resolve, reject) {
    setTimeout(resolve, getRandomIntInclusive(1,5000), "2");
});
let thirdPromice = new Promise(function (resolve, reject) {
    setTimeout(resolve, getRandomIntInclusive(1,5000), "3");
});
  
Promise.race([firstPromice, secondPromice, thirdPromice]).then(function (value) {
    console.log(`Самый быстрый промис: ${value}`); 
});


function getNum (minimum,maximum, time) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            let Num = getRandomIntInclusive(minimum,maximum)
            resolve(Num)
        },time);
    });

}

async function getSqrtNumber() {
    let Number = await getNum(1,5,3000)
    let sqrtNumber = Math.pow(Number,2)
    console.log(`Квадрат числа ${Number} равен - ${sqrtNumber}`)
}

getSqrtNumber()


async function getSumNumbers() {
    let firstNumber = await getNum(1,5,3000)
    let secondNumber = await getNum(6,10,5000)
    let sumNumbers = firstNumber + secondNumber;
    console.log(`Сумма чисел: ${firstNumber} и ${secondNumber} равна - ${sumNumbers}`)
    
}
getSumNumbers()

