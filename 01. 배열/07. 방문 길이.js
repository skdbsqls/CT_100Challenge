/*
[문제 07] 방문 길이(**)

[문제 설명]
게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

    U: 위쪽으로 한 칸 가기
    D: 아래쪽으로 한 칸 가기
    R: 오른쪽으로 한 칸 가기
    L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 
좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 
단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

[제약 조건]
- dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
- dirs의 길이는 500 이하의 자연수입니다.

[입출력 예]
dirs	        answer
"ULURRDLLU"	    7
"LULLLLLLU"	    7
*/

// 좌표평면을 벗어나는지 확인하는 함수
function isVaildMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

// 명령어에 따른 좌표 업데이트하는 함수
function updateLocation(x, y, dir) {
  if (dir === "U") return [x, y + 1];
  if (dir === "D") return [x, y - 1];
  if (dir === "R") return [x + 1, y];
  if (dir === "L") return [x - 1, y];
}

function solution(dirs) {
  let [x, y] = [0, 0]; // (0, 0)에서 시작
  let visited = new Set(); // 중복을 제거하기 위함

  for (let dir of dirs) {
    // 1) 명령어에 따른 좌표 업데이트
    let [nx, ny] = updateLocation(x, y, dir);
    // 2) 좌표평면을 벗어나는지 확인
    if (!isVaildMove(nx, ny)) continue;

    // 3) 좌표 이동 기록하기 (경로의 개수는 방향성이 없음)
    visited.add(`${x}${y}${nx}${ny}`); // (x, y)에서 (nx, ny)로 이동한 경우
    visited.add(`${nx}${ny}${x}${y}`); // (nx, ny)에서 (x, y)로 이동한 것도 기록해야 함

    // 4) 좌표 이동 후 업데이트
    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}
