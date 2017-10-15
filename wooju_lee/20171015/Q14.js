// 14. 피보나치 수
// 피보나치 수는 0 과 1 로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946...
// 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라.예를 들어 n = 3 이라면 2 를 반환한다.


function fibonacci(n) {
  fiboArray = [0, 1];
  for (var i = 2; i < n + 1; i++) {
    fiboArray[i] = fiboArray[n - 2] + fiboArray[n - 1]
  }
  console.log(fiboArray);
  return fiboArray[i];

}
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8