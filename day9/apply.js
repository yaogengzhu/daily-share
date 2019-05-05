// apply和call区别 
// 该方法传递两个参数，一个作为函数上下文的对象，另外一个是作为函数参数所组成的数组。
// 声明一个对象 
console.log('===============apply方法=================');
var obj = {
    name:"zhuyaogeng"
}
function full(firstName, lastName){
    console.log(firstName+'==='+'' + this.name + '' +'==='+ lastName);
    console.log(this);
}
full.apply(obj,['zhu','yaogeng']);
console.log('=============end==============')
// 可以看出，obj是作为函数执行的上下文的对象，函数full中的this指向了这个obj对象。参数
// 参数A，B 是放在数组中传入到full函数中的，分别对应func参数的列表元素。
//call 用法
// call用法第一个参数也是作为函数上下文的对象，但是第二个参数列表，而不是单个数组
console.log('================call方法=============');
var obj1 = {
    age:19
}
var getInfo = function(A,B){
    this.name = 'zhuyaogeng';
    console.log('this is a '+ A +' '+ B ,',he age is ' + this.age );
    console.log(this);
}
getInfo.call(obj1,'good','boy');
console.log('=============end==============')
//小节：对于call，和apply的用法是一样的。如果参数是一个数组，那么就用apply,但是如果参数是比较乱的就用call方式


// apply和call用法
// 1 改变this指向  
console.log('=========call改变this指向========');
var obj3 = {
    name:'zhuyaogeng'
}
function full1(){
    this.age = 20;
    console.log(this);
    console.log(this.name);
}
full1.call(obj3);
/**
 * call 方法的第一个参数是作为函数上下文的对象，这里把obj3作为参数传递给full1，此时
 * 函数里的this便指向了obj3对象，此时函数fun1函数相当于
 * function () {
 *    console.log(obj.name);
 * }
 */
console.log('=========end========');



var Person1 = function (name){
    this.name = 'zhuyaogeng';
    this.age = 24;
}
var Person2 = function (){
    this.getName = function (){
        console.log(this.name);
    }
    //Person1.call(this)的作用就是使用Person1对象代替thi对对象，这样Person2就有了
    // Person1中所有的属性和方法了。相当于Person2继承了Person1的方法。
    Person1.call(this);
    console.log(this);
}

var person = new Person2();
person.getName();