# Find the sum of the digits of all the numbers from 1 to N (both ends included).

# Examples
# # N = 4
# 1 + 2 + 3 + 4 = 10

# # N = 10
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# # N = 12
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51


function twistedSum(n) {

    let empty1= []
  let empty2 = []
  for (let i = 0; i <= n; i++){
   if(i < 10){
       empty1.push(i)   
  }else {
      empty2.push(i)
  }
  }
let arrOfEmpty2 = empty2.map(element => Array.from(String(element), Number))

let reducedArray2 = arrOfEmpty2.map(arrayItem => arrayItem.reduce((x, y) => x+y))

let finalAnswer = empty1.concat(reducedArray2)

  return finalAnswer.reduce((x, y) => x+y)



}