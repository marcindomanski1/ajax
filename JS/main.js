var iSA = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Bla Bla Bla");
        resolve('Komunikat: OK');
        reject('komunikat: nie OK');
    }, 5000)

});

iSA.then(function (text) {
   console.log('jestem w then. mam text: ' + text);
});

iSA.catch(function (text) {
    console.log('jestem w catch' + text);
});

// iSA.finally(function () {
//     console.log('jestem w finally');
// });