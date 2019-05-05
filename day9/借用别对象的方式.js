// apply 和 call 借用别的对象方法 
var Person1 = function (){
    this.name = 'zhuyaogeng';
}
var Person2 = function (){
    this.getName = function(){
        console.log(this);
        console.log(this.name);
    }
    //借用了Person1中的属性 
    Person1.call(this);
    // console.log(this);
}
var person = new Person2();
person.getName();

/**
 * Person2实例化出来的对象通过getName方法拿到了Person1中的name..因为
 * 在Person2中，Person。call(this)的作用就是使用了Person1代替了this对象
 * 那么Person2就用了Person1中的属性和方法了，相当于Person2继承了Person1
 * 的属性和方法 。
 */