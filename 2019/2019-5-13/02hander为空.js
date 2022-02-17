// let target = {}
// let hander= {}

// 如果hander 没有设置拦截，那么直接等同于连接原对象
// const proxy = new Proxy(target, hander)

//  可以设置对象的方式创建
// let obj = { 
//     proxy: new Proxy(target, hander)
// }
// obj.proxy.a = 4
// console.log(target.a)

const proxy = new Proxy({},{
    get:function(target,property){
        return 35
    }
})

let obj = Object.create(proxy)
// obj.time
// 上述代码中，proxy 是obj 的原型，obj 本省没有time 属性，所以根据原型链，会在proxy上读取该属性，导致被拦截
console.log(obj.time)