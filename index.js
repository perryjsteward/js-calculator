const calc = (() => {
  let hookCallback;

  const AVAILABLEACTIONS = ['MULTIPLY', 'ADD', 'MINUS', 'DIVIDE'];

  function hooks() {
    return hookCallback(...arguments);
  }

  // used to allow users to pass in an initial integer i.e. calc(4).add(5)
  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isNumber(value) {
    const isNum = Number.isInteger(value);
    if (!isNum) {
      throw new Error(`${value} is not a number, please provide an integer.`);
    }
    return isNum;
  }

  function hasInitialValue() {
    const val = this.initialValue;
    return val !== undefined && isNumber(val);
  }

  function hasNextValue() {
    const val = this.nextValue;
    return val !== undefined && isNumber(val);
  }

  function setInitialValue(initVal) {
    const val = initVal === undefined || initVal === null ? 0 : initVal;
    if (hasInitialValue.call(this)) {
      throw new Error(`An initial value has already been set (${this.initialValue}). Try using reset().`);
    }
    this.initialValue = isNumber(val) ? val : null;
  }

  function setNextValue(value) {
    if (hasNextValue.call(this)) {
      throw new Error(`A secondary value has already been set (${this.nextValue}). Try using reset().`);
    }
    this.nextValue = isNumber(value) ? value : null;
  }


  function hasExpressionValues() {
    const hasBothValues = hasInitialValue.call(this) && hasNextValue.call(this);
    if (!hasBothValues) {
      throw new Error(`Please provide the calculatory an initial value (${this.initialValue}) and a secondary value (${this.nextValue}).`);
    }
    return hasBothValues;
  }

  function setCalculatorMethod(method) {
    if (!method) {
      throw new Error('An method is required for the calculator, please check the method to see if one has been passed');
    }
    if (!AVAILABLEACTIONS.includes(method)) {
      throw new Error(`The method "${method}" is not in the list of available calculator actions.`);
    }
    this.method = method;
  }

  function calculatorAction(method, callback) {
    setCalculatorMethod.call(this, method);
    if (hasExpressionValues.call(this)) {
      callback(this.initialValue, this.nextValue);
    }
  }

  // Calcs constructor
  function Calculator(initValue) {
    setInitialValue.call(this, initValue);
  }

  function multiply(nextValue) {
    let result;
    setNextValue.call(this, nextValue);
    calculatorAction.call(this, 'MULTIPLY', (a, b) => {
      result = (a * b);
    });
    return result;
  }

  function add(nextValue) {
    let result;
    setNextValue.call(this, nextValue);
    calculatorAction.call(this, 'ADD', (a, b) => {
      result = (a + b);
    });
    return result;
  }

  function minus(nextValue) {
    let result;
    setNextValue.call(this, nextValue);
    calculatorAction.call(this, 'MINUS', (a, b) => {
      result = (a - b);
    });
    return result;
  }

  function divide(nextValue) {
    let result;
    setNextValue.call(this, nextValue);
    calculatorAction.call(this, 'DIVIDE', (a, b) => {
      result = (a / b);
    });
    return result;
  }

  function reset() {
    this.initialValue = null;
    this.nextValue = null;
    this.action = null;
  }

  function createFromConfig(currVal) {
    return new Calculator(currVal);
  }

  const proto = Calculator.prototype;

  // public API's
  proto.multiply = multiply;
  proto.add = add;
  proto.divide = divide;
  proto.reset = reset;
  proto.minus = minus;


  setHookCallback(createFromConfig);

  return hooks;
})();

module.exports = calc;
