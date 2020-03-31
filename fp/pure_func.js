// no side effects
// input --> output
// // using shared states can have side effects
//
// const array = [1,2,3];
// function mutateArray(arr) {
//     arr.pop()
// }
//
// function mutateArray2(arr) {
//     arr.forEach(item => {
//         arr.push(1)
//     })
// }
// // mutateArray(array);
// mutateArray2(array);
// console.log(array);

// write something that has no side effects
const array = [1,2,3];
function removeLastItem(arr) {
    // make a new copy instead of modifying the existing
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item*2)
}

// all these functions have no side effects, it doesn't affect anything in the outside world
const array2 = removeLastItem(array);
const array_orig = removeLastItem(array);
const array_m_2 = multiplyBy2(array);
console.log(array2);
console.log(array_orig);
console.log(array_m_2);

// console.log is modifying something outside of global scope
// not a pure function
function a() {console.log('hi')}
a();


// input --> output   --input should always result in the same output -- referential transparency
function func1(num1, num2) {
    return num1 + num2;
}
func1(1,2);
function func2(num1) {
    return num1*2;
}
// the return of func1
func2(func1(1,2));

// not everything can be pure functions
// the goal of fp is to minimize side effect not make only pure functions
// goal is to organize code the organize the side-effects
// at the end of the day, there's always going to be a global state
// build very small reusable and predictable functions


// Idempotence: --function always doing what is expected
function notGood(num) {
    // return Math.random(num);
    // still idempotent
    console.log(num);
}
notGood(5);

// idempotent:
// deleting the user from db, even if you use it multiple time, it still going to return the empty field
// http GET request --api call, given a parameter will always return the same results
// being able to call yourself inside of yourself
Math.abs(Math.abs(-50)); // always be 50


// Imperative vs Declarative
// imperative --a computer needs to know how to do things
// declarative --humans are declarative
// the higher the level the language the more declarative it's can be

// imperative
for (let i=0; i < 1000; i++) {
    console.log(i);
}
// jquery


// declarative
[1,2,3].forEach(item => console.log(item));
// react
// functional programming help to be more declarative
// tell the programs what to do instead of how to do it.
