const fs = require('fs-extra')

const dir = 'FirstFolder' // 3 quest
const desiredMode = 0o2775
const options = {
  mode: 0o2775
}
fs.ensureDirSync(dir)


const file = 'FirstFolder/justFile.txt' //4 quest 
fs.ensureFileSync(file)


const dir2 = 'SecondFolder' // 5 quest
fs.ensureDirSync(dir2)
fs.moveSync('FirstFolder/justFile.txt', 'SecondFolder/justFile.txt') // 6 quest


const dir3 = 'ThirdFolder' // 7 quest
fs.ensureDirSync(dir3)
fs.copySync('SecondFolder/justFile.txt', 'ThirdFolder/justFile.txt') // 8 quest fixed


fs.removeSync('ThirdFolder/justFile.txt') // 9 quest

fs.removeSync('FirstFolder') 
fs.removeSync('SecondFolder') 
fs.removeSync('ThirdFolder') 

console.log("completed")