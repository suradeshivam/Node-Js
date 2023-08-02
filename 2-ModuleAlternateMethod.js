module.exports.arr = ['item1', 'item2','item3']

const person = {
    name: 'bob',
}

module.exports.singlePerson = person
console.log(module)
//exports: { arr: [ 'item1', 'item2', 'item3' ], singlePerson: { name: 'bob' } }