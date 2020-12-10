const returnsThree = () => {
    return 3;
}

const reciprocal = (num) => {
    if (num > 1000000 || num < 1) {
        throw new TypeError('Number most be between 1 and 1,000,000')
    }
    return 1/num;
}

module.exports = { returnsThree, reciprocal }
