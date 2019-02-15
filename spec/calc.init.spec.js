
describe("Calculator Init", function() {
    var Calculator;

    beforeEach(function() {
        Calculator = require('../index');
    });

    describe("When a value is passed for initilisation", function() {

        it("should initialise with 0 if no value passed", function() {
            var calc = Calculator();
            expect(calc.initialValue).toEqual(0);
        });

        it("should accept a positive Number value", function() {
            var userValue = 1;
            var calc = Calculator(userValue);
            expect(calc.initialValue).toEqual(userValue);
        });

        it("should accept a negative Number value", function() {
            var userValue = -1;
            var calc = Calculator(userValue);
            expect(calc.initialValue).toEqual(userValue);
        });

        it("should accept an undefined value and set to 0", function() {
            var userValue = undefined;
            var calc = Calculator(userValue);
            expect(calc.initialValue).toEqual(0);
        });

        it("should accept an null value and set to 0", function() {
            var userValue = null;
            var calc = Calculator(userValue);
            expect(calc.initialValue).toEqual(0);
        });

        it("should not accept a String value", function() {
            var nanValue = '1';
            expect(()=>{
                Calculator(nanValue)
            }).toThrow();
        });
    
        it("should not accept a Object value", function() {
            var nanValue = { value: 1 };
            expect(()=>{
                Calculator(nanValue)
            }).toThrow();
        });

        it("should not accept a Array value", function() {
            var nanValue = [1];
            expect(()=>{
                Calculator(nanValue)
            }).toThrow();
        });

        it("should not accept a NaN value", function() {
            var nanValue = NaN;
            expect(()=>{
                Calculator(nanValue)
            }).toThrow();
        });

        it("should not accept a Boolean value", function() {
            var nanValue = true;
            expect(()=>{
                Calculator(nanValue)
            }).toThrow();
        });
    });
   
  });