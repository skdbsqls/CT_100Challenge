/*
[문제 09] 10진수를 2진수로 변환하기(*)

[문제 설명]
10진수를 입력받아 2진수로 변환해 반환하는 solution() 함수를 구현하세요.

[제약 조건]
- decimal은 1이상 10억 미만의 자연수

[입출력 예]
decimal       반환값
10            1010
27            11011
12345         11000000111001
*/

function solution(decimal) {
  const stack = [];

  // 몫이 0이 될 때까지 2로 나눔
  while (decimal > 0) {
    let remainder = decimal % 2; // 나머지
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = ""; // 2진수
  // 저장한 나머지 값을 뒤부터 순서대로 읽음
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}
