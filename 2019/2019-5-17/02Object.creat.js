let person = {
    name:'zs',
    age:23,
    sayHello:function(){
        console.log('hello')
    }
}

// 使用Object.create() 实例化一个对象 
let person1 = Object.create(person)
console.log(person1.age)