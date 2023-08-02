// Built in Modules
// OS
// PATH
// FS
// HTTP

const { log } = require('console');
const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// mehod return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);

