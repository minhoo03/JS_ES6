const arr = [1, 2, 3, 4, 5, 1, 2, 4, 3, 5, 6]

const newArr = [...new Set(arr)]
const oldArr = new Set(arr)

console.log(newArr) // 중복이 배제된 배열 만들기
console.log(oldArr) // 객체



// 실무에서 사용되는 때
// 1. 중복 제거     - 자동
// 2. 전체 순회 할 필요성이 있는 경우   - for문 없이 값 순회
// 3. 값의 유무 판단    - index없이 빠른 판단: has

// 나쁜 사용
// X) 특정 요소에 접근
// X) 인덱스가 필요한 경우