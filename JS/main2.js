const text = (text) => {
    document.getElementById('info').innerHTML = text;
};

const myPromise = new Promise((resolve, reject) => {
    text('Hello');
    setTimeout(() => {
        if (1 === 1) {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    text('Hello 3');
                    resolve();
                }, 2000);
            });
            resolve();
        } else {
            reject();
        }
    }, 2000);
    text('Hi');
});

myPromise.then(() => {
    text('Hello then');
    document.getElementById('loading').style.display = "none";
});

myPromise.catch(() => {
    text('Hello catch');
});
