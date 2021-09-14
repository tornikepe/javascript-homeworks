function searchWord(words, param) {

    if (typeof words !== 'string' || typeof param !== 'string') {

        throw new TypeError('params are not strings');

    } else if (words.includes(param) === true) {

        var howManyTimes = words.split(param).length - 1;
        console.log(`\'${param}\' was found ${howManyTimes} times.`);

    }
}

searchWord('The quick brown fox', 'fox'); // "'fox' was found 1 times."
searchWord('aa, bb, cc, dd, aa', 'aa'); // "'aa' was found 2 times."