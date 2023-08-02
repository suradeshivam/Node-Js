// Modules - Encapsulated Coode (only share minimum)
// CommonJs, every file is module (by default)

const names = require('./2-ModuleName') // from 2-ModuleNme.js
const sayHi = require('./2-ModuleUtils')// from 2-ModuleUtils.jss
const data = require('./2-ModuleAlternateMethod')

//Mind Granade
require('./2-ModulesMindGranade')// it will directly run the function in 2-ModulesMindGranade.js


console.log(data);

console.log(names);

sayHi(names.shivam);
sayHi(names.surade);
sayHi("ram");