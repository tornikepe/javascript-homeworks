function mix(...arr) {

    let result = 0;
    var mainObject = {};

    var errorsObject = {
        errors: [],
        value: arr.length - 1
    };

    for (let i = 0; i < arr.length; i++) {

        try {

            if (i > 0) {
                result = arr[i](result);
            }

        } catch (error) {

            mainObject['name'] = error.name;
            mainObject['message'] = error.message;
            mainObject['stack'] = error.stack;
            mainObject['level'] = i;
            errorsObject.errors.push(mainObject);

        }
    }
    errorsObject.value = result;
    return errorsObject;
}


const result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});

console.log(result);