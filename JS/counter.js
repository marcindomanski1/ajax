var myCounter = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, 2000);
    });
};

function add(y) {
    return myCounter(20).then(function (r) {
        return myCounter(30).then(function (s) {
            console.log('r + s =', r + s);
            return y + r + s;
        });
    });
}

function add2(z) {
    return myCounter(20)
        .then(function (r) {
            return myCounter(30 + r)
        })
        .then(function (s) {
            return z + s;
        });

}

async function add3(z) {
    var a = await myCounter(20);
    var b = await myCounter(30);
    return a + b + z;
}

add(550).then(function (result) {
    console.log('Wynik1 result:' + result);
});

add2(50).then(function (result) {
    console.log('Wynik2 result:' + result);
});


add3(10).then(function (result) {
    console.log('Wynik3 result:' + result);
});


// myCounter(20).then(function (y) {
//     console.log(y);
// });