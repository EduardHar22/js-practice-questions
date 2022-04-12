"use strict"

function removeRepeted(arr){
    let unique = Array.from(new Set(arr))
    return unique
}
console.log(removeRepeted([1,2,3,4,4,4,5,6,7,5,6,8,8,9,3,5]))