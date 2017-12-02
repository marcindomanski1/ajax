const text = (text) => {
    document.getElementById('info').innerHTML = text;

};

const myPromise = new Promise((resolve, reject) => {
    text('Hello');
    setTimeout(() => {
        if (1 === 1) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
    text('Hi');
});


myPromise.then(() => {
    text('Hello then');
});

myPromise.catch(() => {
    text('Hello catch');
});