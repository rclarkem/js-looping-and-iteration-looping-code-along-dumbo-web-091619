// Code your solutions in this file
function writeCards(arrOfNames){
  for(let i = 0; i < arrOfNames.length; i++){
    arrOfNames[i] = `Thank you, ${arrOfNames[i]}, for the wonderful surprise gift!`
  }
  return arrOfNames
}


function countDown(num){
  for(let i = num; i >= 0; i--){
    console.log(i)
  }
}
