const arr = [1, 2, 3];

function rotate(array, rotateCount) {

    if (!Array.isArray(array)) {
        throw new TypeError('First parameter required and has to be only array')
    }
    if (!(typeof rotateCount === 'number')) {
        throw new TypeError('second parameter has to be number')
    }

    let index = -1;

    while (++index < rotateCount) {

        array.unshift(array.pop());
    }
    console.log(array);
}

rotate(arr, 1); // result: [3,1,2]
// rotate(arr, 2); // result: [2,3,1]
//rotate(arr, 3), // result: [1,2,3]