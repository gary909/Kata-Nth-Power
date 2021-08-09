function index(array, n){
    //your code here
    if (array[n] == array.NaN) {
        return -1;
    } else {
        return array[n]**n;
    }
  }

console.log(index([1, 2, 3, 4],2)); // return 9