const arr = [3, 2, 1];

function reverse(array) {

    if (!Array.isArray(array)) {
        throw new TypeError('First parameter required and has to be only array')
    }
    if (array.length === 0) {
        throw new TypeError('array should not be empty')
    }

    for (let i = 0; i < array.length; i++) {
        array.splice(i, 0, array.pop())
    }
    console.log(array);
}

reverse(arr);