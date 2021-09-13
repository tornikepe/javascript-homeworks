function compose(...params) {

    var str = '';

    for (let i = 0; i < params.length; i++) {

        if (typeof str === 'string') {

            str = params[i](str);

        }
    }

    let inverted = str.split('').reverse().join('')

    return (last) => {

        return last + inverted;

    }
}

const composed = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a')
console.log(composed);