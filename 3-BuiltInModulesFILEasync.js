const {readFile, writeFile} = require('fs')


//for readFile using async the readFile function will have take a callback function
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result
        //for writeFile using async the readFile function will have take a callback function
        writeFile('./content/result-async.txt',`here is the result async file : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log(result)
        })
    })
})