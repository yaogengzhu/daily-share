var Foo = function(){
    this.name = 'zs'
} 
// var f = new Foo
//  new 本身就可以执行函数，所以函数后面不带括号也是可以的，但是为了使用方便还是带上括号比较好。
// var f = new Foo()
var f = Foo()
//  如果不使用new来执行这个构造函数，就没法生成实例。 结果name就成为来全局变量。
console.log(name)


var Test = function(){
    // 为了解决这个问题，使用严格模式 use strict 
    'use strict'
    this.age = 24
    this.gender = 'male'
}

var man = new Test()
console.log(man)