// reduce : map, filter, sort 등을 구현 가능
// https://velog.io/@mgm-dev/%EA%B0%84%EB%9E%B5-JS-reduce-%EB%A9%94%EC%84%9C%EB%93%9C
// includes : 배열 속 원하는 값 찾을 때 (true / false)
// https://dpdpwl.tistory.com/112

const a = [1, 2, 3, 4, 5, 3, 2, 5, 4]

// 첫 번째 인자 q를 b에 return
const b = a.reduce((q, w) => {
    if(q.includes(w)) return q
    q.push(w)
    return q
}, [])

console.log(b)