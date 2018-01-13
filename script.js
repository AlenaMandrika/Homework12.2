function isPrime(num) {

  if (num === 2) {
    return true;
  }
  else if(num > 1){
    for (var i = 2;  i < num; i++) {

      if (num % i !== 0 ) {
        return true;
      }

      else if (num === i * i) {
        return false
      }

      else {
        return false;
      }
    }
  }
  else {
    return false;
  }

}
console.log(isPrime(0));             //false
console.log(isPrime(1));             //false
console.log(isPrime(17));            //true
console.log(isPrime(10000000000000)); //false





function factorial(num) {
  if (num < 0)
    return -1;
  else if (num === 0)
    return 1;
  else {
    return (num * factorial(num - 1));
  }
}
console.log(factorial(0));            // 1
console.log(factorial(1));            // 1
console.log(factorial(6));            // 720




function fib(n, a=1, b=0) {
  if (n === 0) {
    return b;
  } else {
    return fib(n-1, b, a+b);
  }
}
console.log(fib(0));            // 0
console.log(fib(1));            // 1
console.log(fib(10));           // 55
console.log(fib(20));           // 6765




function isSorted(arr) {
  var len = arr.length - 1;
  for(var i = 0; i < len; ++i) {
    if(arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([]));                           // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));     // true
console.log(isSorted([3, 9, -3, 10]));               // false



function reverse(str){
  var rtnStr = [];
  if(!str || typeof str !== 'string' || str.length < 2 ) return str;

  for(var i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}
console.log(reverse(''));                           // ' '
console.log(reverse('abcdef'));                    // 'fedcba'



