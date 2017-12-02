var myPromise = new Promise(function (resolve, reject) {

    console.log('Hello');
    setTimeout(function () {
        if (1 === 1) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
    console.log('Hi');
});


myPromise.then(function () {
    console.log('Hello then');
});

myPromise.catch(function () {
    console.log('Hello catch');
});