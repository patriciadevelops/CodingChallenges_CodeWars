// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.



function consecutive(arr, a, b) {
  let result = false;
  arr.forEach((first, second) => {
    if (
      (arr[second] == a && arr[second + 1] == b) ||
      (arr[second] == b && arr[second + 1] == a)
    ) {
      result = true;
    }
  });
  return result;
}