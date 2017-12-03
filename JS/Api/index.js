const headers = new Headers({
    'Content-type': 'application/json'
});

export function get(url) {
    return fetch(url).then(response => reponse.json());
}

function post(url) {
    const config = {
        method: 'POST',
        headers: headers
    };
    return fetch(url, config).then(response => response.json());
}

function put(url) {
    const config = {
        method: 'PUT',
        headers: headers
    };
    return fetch(url, config).then(response => response.json());
}

function _delete(url) {
    const config = {
        method: 'DELETE',
        headers: headers
    };
    return fetch(url, config).then(response => response.json());
}


export default {
    get,
    post,
    put,
    'delete': _delete
}