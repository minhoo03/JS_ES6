// iterable Object: array, string, map, set
// Set은 이터러블한 대표 객체
const s = new Set([1, 2, 3, '1', '3', 2, 5, 6, '6', 6])
console.log(s)

// 그렇기에 스프레드 가능
const ss = new Set([...s])
console.log(ss)

console.log('=============')

// set은 index와 value가 같다
const set = new Set([1, 2, 3, 4, 5, 3, 4, 2])

console.log(...set.keys())
console.log(...set.values())
console.log(...set.entries())

set.forEach((key, value, ownerSet) => {
    console.log('forEach '+key, value, ownerSet)
}, {})