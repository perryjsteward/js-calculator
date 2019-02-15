# JS Calculator

A lightweight javascript library for parsing calculations as an example for the revealing module pattern and testing with Jasmine.


## Usage

In a browser using CDN:
```
<script src="https://unpkg.com/@perreh/js-calculator@1.0.5/dist/calc.bundle.js"></script>

<script>
    calc(3).add(5); //returns 8
</script>
```

Using npm:
```
npm -i --save @perreh/js-calculator
```

In Node.js
```
var calc = require('@perreh/js-calculator');

calc(3).add(5); //returns 8
```

## Building

Take a copy of the code if you want to make changes or build the bundle yourself. **eslint** is used in the build to test code against a style guide.

```
git clone https://github.com/perryjsteward/js-calculator.git
cd js-calculator
npm install
npm build
```

build will bundle the file into `/dist`

## Testing

Test the package using Jasmine against original index.js:

```
npm run test
```

To test a specific spec file (`-- --` is not a typo):

```
npm test -- --filter="Calculator Minus"
```

## Authors

* **Perry Steward** - *Initial work* - [PerryJames](https://github.com/perryjsteward)

See also the list of [contributors](https://github.com/perryjsteward/js-calculator/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Exercise Inspired by [DevLeague](https://github.com/devleague/js-calculator)
* Pattern Inspired by [MomentJS](https://github.com/moment/moment/)
