const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`);
// if the file is already exist then this will update the content as we pass in ``
// if file is not exist then node will create the file with the content given

writeFileSync('./content/result-sync2.txt',`this is the result : ${first} , ${second}`,{flag:'a'});
// this will create the file and when we run the js file again this will append the content passed in the file
