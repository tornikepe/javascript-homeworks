function f(array) {

    if (array.length === 0) {
        try {
            throw new Error("parameter can't be an empty");
        } catch (error) {
            console.log(error.name + ': ' + error.message);
        }
    } else if (!(Array.isArray(array))) {
        try {
            throw new Error("parameter type should be an array");
        } catch (error) {
            console.log(error.name + ': ' + error.message);
        }
    } else {
        console.log(array[0]);
        array.splice(0, 1)
        if (array.length !== 0) {
            return f(array);
        }
    }
}
f([1, 2, 3]);
f(1, 2, 3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty