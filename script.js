// Exercises:Loops
//  Iterate 0 to 10 using for loop, do the same using while and do while loop.

let loop = [];
for (let i = 0; i <= 10; i++) {
  loop.push(i);
}
console.log(loop);

//do-while

let loopDo = [];
let a = 0;
do {
  loopDo.push(a);
  a++
} while (a <= 10);

console.log(loopDo);


// Iterate 10 to 0 using for loop, do the same using while and do while loop.

let loop2 = [];
for (let i = 10; i >= 0; i--) {
  loop2.push(i);
}
console.log(loop2);

//do-while

let loopDo2 = [];
let b = 10;
do {
  loopDo2.push(b);
  b--
} while (b >= 0);

console.log(loopDo2);

// Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let c = "";
for (let i = 0; i < 7; i++) {
  c = c + "#";
  console.log(c);
}

// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

let section = ['HTML', 'CSS', 'JavaScript'];
let newSection = [];
for (let i = 0; i < section.length; i++) {
  newSection.push(section[i]);
}
console.log(newSection);

// Use for loop to iterate from 0 to 100 and print only even numbers

let even = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even.push(i);
  }
}
console.log(even);

// Use for loop to iterate from 0 to 100 and print only odd numbers

let odd = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    odd.push(i);
  }
}
console.log(odd);

// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(total);

// The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20

let sumGivNum = 0;
function numSplit(param) {
  param = param.split("");
  for (let i = 0; i < param.length; i++) {
    sumGivNum += parseInt(param[i]);
  }
  console.log(`${param.join('')} sayısı rakamları toplamı = ${sumGivNum}`)
}
numSplit("5465")

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let odds = 0;
let evens = 0;
let numberArray = [];

for (let i = 0; i <= 100; i++) {
  numberArray[i] = i;
  if (i % 2 === 0) {
    evens += i;
  } else
    odds += i;
}

console.log(evens);
console.log(odds);

//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

let passChars = "qwertyuıopasdfghjklizxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
passChars = passChars.split("");
let pass = [];

for (i = 0; i < 6; i++) {
  pass[i] = passChars[Math.floor(Math.random() * passChars.length)]
}

console.log(pass.join(""))