// (캡슐화)
// 협업 또는 혼자 개발하더라도
// 바꿔선 안될 데이터를 변경하려는걸 방지.

const obj = (() => {
    const _privateMember1 = Symbol('private1')
    const _privateMember2 = Symbol('private2')

    return {
        [_privateMember1]: 10,
        [_privateMember2]: 20,
        publicMember1: 30,
        publicMember2: 40
    }
})()

// console.log(obj) // obj 출력 - 외부에서 보이긴 하지만 접근할 방법이 X
// console.log(obj[Symbol('private1')]) // undifined // obj의 Symbol이 아닌 새로 생성된 Symbol을 부르게 되는 것
// console.log(obj[_privateMember1]) // error