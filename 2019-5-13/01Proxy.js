// 实例化Proxy   
const proxy = new Proxy({}, {
    get:function(target, property){
        return 35 
    }
})

// proxy.time
console.log(proxy.time)   //35 
console.log(proxy.name)    //35
console.log(proxy.good)   //35 