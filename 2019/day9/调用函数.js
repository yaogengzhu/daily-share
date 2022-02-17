// function foo(){
//     console.log('hello world ');
// }
// //
// // foo.call();
// foo.apply();


// 补充 
let arr = [1,2,3,4,5];
let max = Math.max.apply(null,arr);
console.log(max);

// 由于max方式不支持数组，只能将多个参数逐个传入 。
let max1 = Math.max(2,3,4,5,666,66);
console.log(max1);