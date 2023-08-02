// npm calls reusable code as package 
// a package consist of multiple js files

// npm -> global command comes with node
// npm --version


// local dependency -> use it only in perticular project
// npm i <packageName>

// global dependency ->use it in any project
// npm install -g <packageName>

// package.json -> manifest file (stores important info about project / package)
// manual approach -> create package.json in the root, create properties etc
// npm init -> step by step, press enter to skip
// npm init -y -> everything default

// using a package

const _ = require('lodash')

const arr = [1,[2,[3,[4]]]]

const newArr = _.flattenDeep(arr)

console.log(newArr)