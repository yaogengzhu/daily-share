var a = 0;
b = 0;

function A(a) {
    // var  a = 1;

    A = function (b) {
        //  b = 2 
        // b = ++b // 3 
        // b = 3
        console.log("ok")
        console.log((b+ ++b));
    }
    console.log((a++),'ok');
}
A(1);  // 1 'ok'
// A(2);  // ok 5
// A(3); // ok 7