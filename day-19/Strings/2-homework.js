function extractCurrencyValue(source) {
    if (typeof source[0] !== 'string') {
        throw new TypeError('first parameter isn\'t string')
    }
    var onlyNumber = source.substring(1) * 1;
    return onlyNumber;
}
console.log(extractCurrencyValue('$120')); // 120
// console.log(extractCurrencyValue(1)); // 120