"use strict"
function linkedObj(obj){
    let str = JSON.stringify(obj).split('')
    for(let i = 0; i < str.length; i++){
        if(+str[i]){
            console.log(+str[i])
        }
    }
}


linkedObj(
{
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
}
)
  