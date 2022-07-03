// Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.

// Islands
// An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

// Below you can see an example with 2 islands:

// on the left in the form of a matrix of 1's and 0's
// on the right in an equivalent stringified form using "X" and "~" characters for better readability
// [
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
//   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
// ]
// Specification
// Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.

function countIslands(image){
    let islands = 0
    for (let row = 0; row < image.length; row++) {
      for(let col = 0; col < image[row].length; col++) {
        if(image[row][col] === 1) {
          islands += explore(image, row, col)
        }
      }
    }
    return islands
  }
  
  
  // function to explore
  function explore(image, row, col) {
    if(row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] === 0) {
      return;
    }
    image[row][col] = 0
    explore(image, row, col + 1)
    explore(image, row + 1, col + 1)
    explore(image, row + 1, col)
    explore(image, row + 1, col - 1)
    explore(image, row, col - 1)
    explore(image, row - 1, col - 1)
    explore(image, row - 1, col)
    explore(image, row - 1, col + 1)
    return 1
  }
