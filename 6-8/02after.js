// after 在多少次之后 
function after(times, callback){
    return function(){
        if(--times === 0){
            callback();
        }
    }
}
let fn = after(3, function(){
    console.log('after');
});

// 解决异步问题

fn()
fn()
fn()