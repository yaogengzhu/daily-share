//  发布 ==== 中间代理 ==== 订阅
let fs = require('fs')
// 发布  
function Events(){
    this.callbacks = []
    this.reults = []

}
Events.prototype.on = function(callback){
    // 订阅 
    this.callbacks.push(callback)
}

Events.prototype.emit = function(data){
    // 发布
    this.reults.push(data)
    this.callbacks.forEach( c => c(this.reults))
}

let e = new Events();


e.on(function(arr){
    if (Array.length === 1){
        console.log(arr);
    }
})

fs.readFile('./name.txt', 'utf8', function(err, data){
    console.log(err)
    e.emit(data);
    console.log(data)
})

