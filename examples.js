let calc = require('./dist/calc.bundle.js');

console.log(`Running js-calulator examples! \n\n`);
console.log(`The result of calc(23).add(32) is: ${calc(23).add(32)} \n`);
console.log(`The result of calc(3).multiply(8) is: ${calc(3).multiply(8)} \n`);
console.log(`The result of calc(455).minus(542) is: ${calc(455).minus(542)} \n`);
console.log(`The result of calc(585).divide(44) is: ${calc(585).divide(44)} \n`);