var myCounter = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, 2000);
    });
};

function add(y) {
    var a = myCounter(20).then(function (r) {
        var b = myCounter(30).then(function (s) {
            console.log('r + s =', r + s);
            return r + s;
        });
    });

    return y + a;
}

console.log(add(50));


// myCounter(20).then(function (y) {
//     console.log(y);
// });