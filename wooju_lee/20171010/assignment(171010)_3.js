// 3. 문자열 다루기

// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.s의 길이가 4~6 이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.예를들어 s가 'a234'
// 이면 false를 리턴하고 '1234' 라면 true를 리턴한다

// function alphaString46(s) {
//   var i = new String(s);
//   if (i.length >= 4 && i.length <= 6 && !isNaN(i * 1)) {
//     return true;
//   } else { return false; }

// }



function alphString46(s) {
  var regexr = /^\d+${4,6}/
  return regexr.test(s)
}


console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false