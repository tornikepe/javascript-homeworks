function getDivisors(number) {

    const Divisors = [];

    for (let i = 0; i < number + 1; i++) {
        if (number % i === 0 && typeof number !== 'string') {
            Divisors.push(i);
        }
    }
    if (!(Divisors.length === 0)) {
        console.log(Divisors);
    }

    if (typeof number === 'string') {
        try {
            throw new Error(' parameter type is not a Number')
        } catch (error) {
            let errorName = error.name;
            let errorMessage = error.message;
            console.log(errorName + ':' + errorMessage);
        }
    } else if (number === 0) {
        try {
            throw new Error('  parameter can\'t be a 0')
        } catch (error) {
            let errorName = error.name;
            let errorMessage = error.message;
            console.log(errorName + ':' + errorMessage);
        }
    }
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0