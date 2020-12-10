const assert = require("assert");
const { expect } = require("chai");
const { isContext } = require("vm");
const { returnsThree, reciprocal } = require("../problems/number-fun.js")

describe("returnsThree function", () => {
    it("should return the number 3", () => {
        let expected = 3;
        let actual = returnsThree();

        assert.strictEqual(expected, actual)
    })
})

describe("reciprocal function", () => {

    context("when argument is valid", function() {
        it("should return one over argument", () => {
            let num = 9;
            let expected = 1/num;
            let actual = reciprocal(num);

            assert.strictEqual(expected, actual);

            num = 7;
            expected = 1/num;
            actual = reciprocal(num);

            assert.strictEqual(expected, actual);
        })
    })

    context("when the argument is invalid", function() {
        it("should throw a type error when given an arg outside the range", () => {
            assert.throws(() => reciprocal(0), TypeError);
            assert.throws(() => reciprocal(1000001), TypeError)

        })
    })
})

// expected(function() {
//     reciprocal(0)
// }, TypeError, '')
