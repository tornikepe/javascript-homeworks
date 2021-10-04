class Countries {
    constructor(api) {
        this.api = api
        if (typeof this.api !== 'string') {
            throw new Error('url isn\'t string type')
        }
    }
    send(number) {
        if (typeof number !== 'number') {
            throw new Error('parameter not a number')
        } else {
            return new Promise((resolve, reject) => {
                get(url, (error, meta, body) => {
                    const statusCode = meta.status;
                    if (statusCode === 200) {
                        const data = JSON.parse(body)
                        resolve([data[number]])
                    } else {
                        reject(`We have error, status code: ${statusCode}`)
                    }
                });
            })
        }
    }
}

const get = require('fetch').fetchUrl;

const url = 'https://jsonplaceholder.typicode.com/users';
const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();