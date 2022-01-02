// //Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

  function sixToast(num) {
    return Math.abs(num-6)
  }
  
  
  function sixToast(num) {
    if (num < 6){
    return 6 - num
    } else 
    return num -6; 
  }
