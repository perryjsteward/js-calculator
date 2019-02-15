
describe("Calculator Minus", function() {
    var Calculator;

    beforeEach(function() {
        Calculator = require('../index');
    });

    describe("When subtracting a given value from the initial value", function() { 

        it("should accept two positive Numbers and return the expected subtraction", function() {
            var initialValue = 4;
            var userValue = 5;
            var total = initialValue - userValue;
            var result = Calculator(initialValue).minus(userValue);
            expect(result).toEqual(total);
        });

        it("should accept a positive and negative Number and return the expected subtraction", function() {
            var initialValue = -4;
            var userValue = 5;
            var total = initialValue - userValue;
            var result = Calculator(initialValue).minus(userValue);
            expect(result).toEqual(total);
        });

        it("should accept a two negative Numbers and return the expected subtraction", function() {
            var initialValue = -4;
            var userValue = -5;
            var total = initialValue - userValue;
            var result = Calculator(initialValue).minus(userValue);
            expect(result).toEqual(total);
        });

        it("should throw an error if the second value is a String", function() {
            var initialValue = -4;
            var nanValue = "1";
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a Object", function() {
            var initialValue = -4;
            var nanValue = { value: 1 };
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a Array", function() {
            var initialValue = 4;
            var nanValue = [1, 2];
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a Boolean", function() {
            var initialValue = 4;
            var nanValue = true;
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a NaN", function() {
            var initialValue = 4;
            var nanValue = NaN;
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a Null", function() {
            var initialValue = 4;
            var nanValue = null;
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

        it("should throw an error if the second value is a Undefined", function() {
            var initialValue = 4;
            var nanValue = undefined;
            expect(()=>{
                Calculator(initialValue).minus(nanValue);
            }).toThrow();
        });

    });

});