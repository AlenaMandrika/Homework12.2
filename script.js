// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {

  if (num === 2) {
    return true;
  }
  else if (num > 1) {
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




// factorial - Returns a number that is the factorial of the given number.
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



// fib - Returns the nth Fibonacci number.
function fib (n, a = 1, b = 0) {
  if (n === 0) {
    return b;
  } else {
    return fib (n - 1, b, a + b);
  }
}
console.log(fib(0));            // 0
console.log(fib(1));            // 1
console.log(fib(10));           // 55
console.log(fib(20));           // 6765



// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted (arr) {
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



// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str){
  var arr = str.split('')
  var rtnStr = ''
  if(!str || typeof str !== 'string' || str.length < 2 ) {
    return str;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    rtnStr += arr[i];
  }
  return rtnStr;
}
console.log(reverse(''));                           // ' '
console.log(reverse('abcdef'));                    // 'fedcba'



//indexOf - Implement the indexOf function for arrays.
function indexOf (arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
  return -1
}

console.log(indexOf([1, 2, 3], 1));               // 0
console.log(indexOf([1, 2, 3], 4));               // -1




// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// function missing (arr){
//   var n = arr.length + 1,
//     sum = 0,
//     expectedSum = n * (n + 1)/2;
//
//   for(var i = 0, len = arr.length; i < len; i++){
//     sum += arr[i];
//   }
//
//   return expectedSum - sum;
// }

function missing(array) {
  var missing = undefined;
  var sort = array.sort(function (a, b) {
    return a - b;
  });
  var max = Math.max.apply(null, array);

  for (var i = 1; i < max; i++) {
    if (sort.indexOf(i) === -1) {

      return missing = i
    }
  }
  return missing
}

console.log(missing([]));             //undefined
console.log(missing([1, 4, 3]));      //2
console.log(missing([2, 3, 4]));      //1
console.log(missing([5, 1, 4, 2]));   //3
console.log(missing([1, 2, 3, 4]));   //undefined



// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '')
  return str.split('').reverse().join('').toUpperCase() === str.toUpperCase()
}
console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true



// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced (str) {
  var num1 = 0
  var num2 = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '{') num1++
    if (str[i] === '}') num2++
  }
  if (str.indexOf('{') < str.indexOf('}') && num1 === num2 && str.indexOf('{}')) {
    return true
  }
  return false
}


console.log(isBalanced('}{'));                      // false
console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // false
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false