const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

secretWord = "cheeseburgerpizzabagels"

///////////////////////////////////////////////////////////////

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on('line', printData);

//////////////////////////////////////////////////////////////////

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});


const fileStream = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
};

myInterface.on('line', transformData);

//////////////////////////////////////////////////////////////////////

const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const bufferConcat = [buffer1, buffer2];

Buffer.concat(bufferConcat);