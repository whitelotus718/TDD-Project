const chai = require("chai")
const chaiSpy = require("chai-spies")

const expect = chai.expect;
chai.use(chaiSpy)

const reverseString = require("../problems/reverse-string")

describe("reverseString function", () => {
    it("should reverse the given string", () => {
        let expected = "nuf"
        let actual = reverseString("fun")
        expect(actual).to.equal(expected)
    })
})
