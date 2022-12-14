import { clearStorage, getUserToken, saveUser } from "../Auth/auth";

const request = (method, url, data) => {
    const options = prepareOptions(method, data);

    return fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return handleError(res);
            }
        })
        .then(data => {
            if ('accessToken' in data) {
                saveUser(data)
            }
        
            return data
        })
        .catch((err) => {

            err.then(res => (res.message))
            throw err
        });
}

const prepareOptions = (method, data) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    let token = getUserToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    return options;
}

const handleError = (response) => {
    if (!response.ok) {
        if (response.status === 403) {
            clearStorage();
        }
        
        throw response.json()
    }

    if (response.status === 204) {

        return response;
    }
}

export const get = request.bind(this, 'get');
export const put = request.bind(this, 'put');
export const post = request.bind(this, 'post');
export const del = request.bind(this, 'delete');