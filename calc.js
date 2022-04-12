"use strict"

function calc(firstNum, secondNum, sign){
    if(sign === '+'){
        return firstNum + secondNum;
    }else if(sign === '-'){
        return firstNum - secondNum;
    }else if(sign === '*'){
        return firstNum * secondNum;
    }else if(sign === '/'){
        return firstNum / secondNum;
    }else{
        return 'Sign is not correct'
    }
}

console.log(calc(1,2,'/'))