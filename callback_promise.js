function check(name) {
   return name + ' Export'
}

function tryCall(name, callBack) {
   if(name) {
       callBack(name)
   } else {
       callBack('אחי')
   }
}

tryCall(null, (name) => {
//    console.log(name)
})


function myPromise(number) {
    // console.log(number)
    return new Promise((resolve, reject) => {
        if(number < 10) {
            reject('Error')
        }
        resolve(number)
    })
}

// myPromise(32).then((result) => {
//     console.log(result)
//     return myPromise(44)
// }).then((result) => {
//    console.log(result)
//    return myPromise(4)
// }).catch((error) => {
//     console.log(error)
// })




module.exports = {
    check, myPromise
}