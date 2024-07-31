/*
[문제 05] 행렬의 곱셈(*)

[문제 설명]
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

[제약 조건]
- 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
- 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
- 곱할 수 있는 배열만 주어집니다.

[입출력 예]
arr1	                                arr2	                                return
[[1, 4], [3, 2], [4, 1]]	            [[3, 3], [3, 3]]	                    [[15, 15], [15, 15], [15, 15]]
[[2, 3, 2], [4, 2, 4], [3, 1, 4]]	    [[5, 4, 3], [2, 4, 1], [3, 1, 1]]	    [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
*/

function solution(arr1, arr2) {
  // 1-1) 행렬 arr1의 행과 열
  const row1 = arr1.length;
  const column1 = arr1[0].length;

  // 1-2) 행렬 arr2의 행과 열
  const row2 = arr2.length;
  const column2 = arr2[0].length;

  // 2) 결과 행렬을 저장할 2차원 배열 초기화
  const result = [];
  for (let i = 0; i < row1; i++) {
    result.push(new Array(column2).fill(0));
  }

  // 3) arr1의 각 행과 arr2의 각 열에 대해
  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < column2; j++) {
      // 4) 행렬의 곱을 결과 행렬에 더해줌
      for (let k = 0; k < column1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
