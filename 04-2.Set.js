// Set : 중복 방지
// Set은 배열과 다르게 index (key) 가 없다
// 기능 - 추가, 삭제, 초기화, 요소의 개수, 포함 여부 확인

const set = new Set()

// [0] 배열 - push / Set - add
set.add(5)
set.add('5')
set.add(-0)
set.add(+0)

console.log(set) // 5, '5', 0

// [1] 배열 - a.length / Set - size
console.log(set.size) // 3
set.add(10)
console.log(set.size) // 4

// [2] 배열 - includes / Set - has : 포함여부
console.log(set.has(5)) // true
console.log(set.has(7)) // false

// [3] 배열 - indexOf, includes로 index를 알아내고 삭제 / index 대신 해시 값이 있다
set.delete(5)
console.log(set)

// 전부 지우기
set.clear()


// 셋 다 같은 것 (map에서 설명)
// set.entries()
// set.keys()
// set.values()