"use strict"

function sum(...args){
    return args.reduce((acc, item) => {
        return acc * item
    },1)
};

console.log(sum(2,2));