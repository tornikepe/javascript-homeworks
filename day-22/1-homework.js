const get = require('fetch').fetchUrl;

const url = 'https://jsonplaceholder.typicode.com/users';

const send = url => {

    return new Promise((resolve, reject) => {

        get(url, (error, meta, body) => {
            const statusCode = meta.status;
            if (statusCode === 200) {
                const data = JSON.parse(body)
                //for example
                resolve([data[6].address])
            } else {
                reject(`We have error, status code: ${statusCode}`)
            }
        });
    });
}

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });