import {get} from './Api';

var headers = new Headers({
    'Content-type': 'text/plain'
});

var config = {
    method: 'POST',
    headers: Headers
};

fetch('https://jsonplaceholder.typicode.com/users', config)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
    console.log(data);
});

api.get('./users');

// api.get(url);
// api.post(url);
// api.put(url);
// api.delete(url);