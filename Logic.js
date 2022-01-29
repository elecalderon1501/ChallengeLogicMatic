//Fibonacci Sequence
//0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597
// where f(0) = 0, f(1) = 1 and f(n) = f(n-1) + f (n-2)

function fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1
  
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
   
  
  
   //Code a program that displays the number of repetitions of each word.
  function repeatWord(text){
    let textArray = text.replace(/[?]/g, '')
     textArray = textArray.split(' ');
    const objTextArray = {};
    textArray.forEach(word =>{
      objTextArray[word] = !objTextArray[word] ? 1 : objTextArray[word] += 1
    })
    return objTextArray;
    }
  
  //Displays the numbers from 1 to 100 on the screen, substituing the multiples of 3 for the word "fizz", the multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3 and 5, by the word "fizz buzz".
  
  function fizzBuzz(){
    for(i=1; i<=100; i++){
      if ((i%3 == 0) && (i%5 == 0)){
        console.log("fizz buzz");
      } else if (i%5 == 0) {
        console.log('buzz');
      } else if (i%3 == 0) {
        console.log('fizz');
      } else console.log(i);
    }
  }
       
  module.exports = {
    fibonacci,
    repeatWord   
    
  };