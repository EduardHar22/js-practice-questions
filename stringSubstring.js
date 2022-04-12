"use strict"

function subString(str, subStr){
    let splited =  str.split(subStr)
    if(splited.length === 1){
        return false
    }
    else{
        return true
    }
}

console.log(subString('hello', 'ell'))