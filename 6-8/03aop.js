// Aop  面向切片编程 把原来代码切成片，在中间加上自己的代码 
// 装饰器，扩展原有的方法 

function say(){
    // 
    say.befeore()
    console.log('say ok ');
}

// 不破环原有的方法 
Function.prototype.befeore = function(){
    console.log('before');
}


say()