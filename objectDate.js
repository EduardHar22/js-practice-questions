"use strict"

// function date(){
//     let date = new Date;
//     return date.getDay();
// }

let obj = Object.create(
    {
        date: (function(){
            return new Date().getDay()
        })()
    })
console.log(obj.date)



