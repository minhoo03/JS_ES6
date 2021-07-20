// Symbol은 기본 자료형

// const a = Symbol(), b = Symbol()
// a === b, a == b // false
// Symbol("foo") === Symbol("foo"); // false
const x = () => {
    const ab = Symbol('a');
    return {
        [ab] : 10, // const ab의 Symbol에 10을 추가
        a: ab // a라는 프로퍼티로 x에 return
    }
}
const y = x();
    
// 은닉화된 값을 a로 return 해줌
console.log(y.a); // return 된 a 프로퍼티에 접근 가능