// [0]
// Symbol.for - 공유 심볼 - 02.private와 비교
// 스코프에 갇히지 않는다.
// 이미 선언된 Symbol에 접근 가능

// [1]
// 용도: 프젝의 공유 값을 저장

// [2]
// ('')의 문자열만 가지고 식별한다.
// 'abc'란 값이 없었기에 처음 생성 후 const a에 저장
// (공유 심볼을 저장하는 또 다른 공간에 'abc'를 저장)
// const b 는 'abc'가 있는지 확인 후 공유 저장공간에
// 값이 있는 것을 확인 -> const b에 같은 값 대입

// [3]
// const a = Symbol.for('abc')
// const b = Symbol.for('abc')
// a === b // true

// const a = Symbol('abc')
// const b = Symbol('abc')
// a === b // false

const obj = (() => {
    const COMMON1 = Symbol.for('공유심볼')
    return {
        [COMMON1]: '공유할 프로퍼티 키 값'
    }
})()

console.log(obj[Symbol.for('공유심볼')])

// =====================

const keys = ['ADD_TODO', 'DELETE_TODO']
const Constants = {}

keys.forEach(v => { Constants[Symbol.for(v)] = v })

console.log(Constants)