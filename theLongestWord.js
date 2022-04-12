"use strict"

function longestWord(str){
    let longestword = str.split(' ').sort((a, b) => b.length - a.length);
    return longestword[0]
}
console.log(longestWord('web development tutorial'))