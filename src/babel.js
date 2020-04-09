let func = async () => {
    return await Promise.resolve('async is working')
}

func().then(console.log)

class Util {
    static id = Date.now()
}

// let a = 1;

console.log('Util ID: ', Util.id)

import('lodash').then(_ => {
    console.log('Lodash', _.random(0, 22, true))
})