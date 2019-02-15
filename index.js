var calc = (() => {
    'use strict';
  
    var hookCallback;

    const AVAILABLE_ACTIONS = ['MULTIPLY', 'ADD', 'MINUS', 'DIVIDE'];

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // used to allow users to pass in an initial integer i.e. calc(4).add(5)
    function _setHookCallback (callback) {
        hookCallback = callback;
    }

    function _createFromConfig(currVal){
        return new Calculator(currVal);     
    }

    function _setInitialValue(initVal){
        const val = initVal === undefined || initVal === null ? 0 : initVal;
        if(_hasInitialValue.call(this)) { 
            throw new Error(`An initial value has already been set (${this.initialValue}). Try using reset().`);
        }
        this.initialValue = _isNumber(val) ? val : null;
    }

    function _setNextValue(value){
        if(_hasNextValue.call(this)) { 
            throw new Error(`A secondary value has already been set (${this.nextValue}). Try using reset().`);
        }
        this.nextValue = _isNumber(value) ? value : null;
    }

    function _isNumber(value){
        var isNumber = Number.isInteger(value);
        if(!isNumber){
            throw new Error(`${value} is not a number, please provide an integer.`);
        }
        return isNumber;
    }

    function _hasInitialValue(){
        const val = this.initialValue;
        return val !== undefined && _isNumber(val);
    }

    function _hasNextValue(){
        const val = this.nextValue;
        return val !== undefined && _isNumber(val);
    }

    function _hasExpressionValues(){
        var hasBothValues = _hasInitialValue.call(this) && _hasNextValue.call(this);
        if(!hasBothValues){
            throw new Error(`Please provide the calculatory an initial value (${this.initialValue}) and a secondary value (${this.nextValue}).`);
        };
        return hasBothValues;

    }

    function _setCalculatorMethod(method){
        if(!method){
            throw new Error(`An method is required for the calculator, please check the method to see if one has been passed`);
        };
        if(!AVAILABLE_ACTIONS.includes(method)){
            throw new Error(`The method "${method}" is not in the list of available calculator actions.`);
        };
        this.method = method;
    }

    function _calculatorAction(method, callback){
        _setCalculatorMethod.call(this, method);
        if(_hasExpressionValues.call(this)){
            callback(this.initialValue, this.nextValue);
        }
    }

    // Calcs constructor
    function Calculator(initValue){
        this.initialValue;
        this.nextValue;
        this.method;
        this.result;
        _setInitialValue.call(this, initValue);
    }

    function multiply(nextValue){   
        var result;
        _setNextValue.call(this, nextValue);
        _calculatorAction.call(this, 'MULTIPLY', (a, b) => {
            result = (a * b);
        });
        return result;
    }

    function add(nextValue){
        var result;
        _setNextValue.call(this, nextValue);
        _calculatorAction.call(this, 'ADD', (a, b) => {
            result = (a + b);
        });
        return result;
    }

    function minus(nextValue){
        var result;
        _setNextValue.call(this, nextValue);
        _calculatorAction.call(this, 'MINUS', (a, b) => {
            result = (a - b);
        });
        return result;
    }

    function divide(nextValue){
        var result;
        _setNextValue.call(this, nextValue);
        _calculatorAction.call(this, 'DIVIDE', (a, b) => {
            result = (a / b);
        });
        return result;
    }

    function reset(){
        this.initialValue = null;
        this.nextValue = null;
        this.action = null;
    }

    var proto = Calculator.prototype;

    // public API's
    proto.multiply = multiply;
    proto.add = add;
    proto.divide = divide;
    proto.reset = reset;
    proto.minus = minus;

    _setHookCallback(_createFromConfig);
    return hooks;

})();

typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = calc :
typeof define === 'function' && define.amd ? define(calc): null;
