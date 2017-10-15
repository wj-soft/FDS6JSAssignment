# 실행 컨텍스트와 자바스크립트의 동작 원리

1. 실행컨텍스트
    * 실행가능한 코드(전역코드, 함수코드, Eval)가 실행되는 환경
    * 실행컨택스트에는 변수, 함수선언, Scope, this의 정보를 가지고 있다.
1. 실행컨텍스트의 3가지 객체
    * Variable Objec(VO),  Scope Chain(SC), this value
        * VO
            1. VO란 자바스크립트 엔진이 실행컨텍스트가 실행될 때 생성한 객체로 실행에 필요한 여러 정보를 담고 있다.
            1. 여러정보 : 변수, 매개변수와 인수, 함수선언(함수표현 제외)
            1. 전역컨텍스트의 경우 전역객체를 가리키고, 함수컨텍스트에서는 Activation Object(AO / 활성 객체)를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.
        * SC
            1. 개념 : 중첩함수의 정보를 차례대로 리스트형태로 저정
            1. 함수실행 중 정의되지 않은 변수를 만나면 다음리스트가 가리키는 AO에서 변수를 찾게된다.
        * this value
            1. this 프로퍼티에는 this 값이 할당된다. this에 할당되는 값은 함수 호출 패턴에 의해 결정된다.

1. 실행컨택스트 생성 과정
```
//예제코드
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
```
    1. 실행컨텍스트 스택과 빌트인객체가 설정된 전역객체 생성
    2. 실행컨텍스트스택에 실행컨텍스트를 생성
        * 스코프 체인의 생성과 초기화 : 스코프 체인은 전역 객체의 레퍼런스를 포함하는 리스트
        * Variable Instantiation(변수 객체화) 실행
            * 변수객체화
            * foo 함수의 선언처리
            * 변수 x의 선언처리
        * this value 결정하는 활동을 수행
    3. 전역코드 실행
        * 변수값의 할당
        * 함수 foo의 실행
        * 스코프체인의 생성과 초기화
        * Variable Instantiation 실행
        * this value 결정
    4. foo함수 실행
        * 변수 값의 할당
        * 함수 bar의 실행

# javasrcipt closure

* 클로저는 내부함수가 참조하는 외부함수의 지역변수가 외부함수에 의해 내부함수가 반환된 이후에도 life-cycle이 유지되는 것을 의미한다.



# 자바스크립트 Built-in Object
https://docs.google.com/spreadsheets/d/1rFYzpckWxddvxZQjyx6_ao5t1KQTBBUY-i0pEQ4cVJI/edit?usp=sharing

# 자바스크립트 정규표현식
https://docs.google.com/spreadsheets/d/14WC1Bni3QGHmBs1HIfeMRxmeb5BMj5D9FCMv1Yikp5k/edit?usp=sharing