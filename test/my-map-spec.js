const myMap = require("../problems/my-map.js")

const chai = require("chai")
const chaiSpies = require("chai-spies")
const { interface } = require("chai-spies")
const { myMap } = require("../problems/my-map.js") 

const expect = chai.expect
chai.uses(chaiSpies)

describe("myMap function", () => {
    it("should return a new array where the cb has been called upon each ele", () => {
        let arr = [1,2,3]
        let expected = [2, 4, 6]
        let actual = myMap(arr)
        expect(actual).to.eql(expected)
        expect(arr).to.eql([1,2,3])
    })
})

