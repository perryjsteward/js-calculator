# JS Calculator

A lightweight javascript library for parsing calculations as an example for the revealing module pattern and testing with Jasmine.

## Usage

Once you've included this library in projects (See later **build** section), you will be able to use this library in a number of ways.

### Web Project
Include in a HTML project
```
<script src='calc.bundle.js'></script>
```
The global variable `calc` will now be available to use.

```
calc(5).add(7)
```

### Javascript Project
Include in a Javascript project
```
var calc = require('calc.bundle.js')
```
The variable `calc` will now be available to use.

```
calc(5).add(7)
```

## Getting Started

To get started with this JS example either clone or fork the repository to get a copy of the source to start playing around with it.

### Prerequisites

To get started with this library you will need to install [Node.js](https://nodejs.org/en/) (I'm using Node v9.11.1) and [Jasmine](https://jasmine.github.io/) for testing.

* Install [Node.js](https://nodejs.org/en/)


### Installing

The Library is easy to install locally for development.

```
git clone https://github.com/perryjsteward/js-calculator.git
cd js-calculator
npm install
```

To see if the library is working you can run the following command to see the results of a few examples.

```
npm run examples
```

## Running the tests

Jasmine is used to run BDD tests on the library. You can navigate to `spec` to see all the test files for the js-calculator library.


```
npm test
```

### Specific Tests

The test files have been broken down into method and init files so you can run specific tests if you are working on particular functionality. `-- --` is NOT a typo.

```
npm test -- --filter="Calculator Minus"
```


## Build

Building is made really easy by using webpack.

```
npm run build
```
You will now be able to find a bundled file in the `dist` directory. You can insert this into HTML or Javascript ready for use straight out the box.


## Authors

* **Perry Steward** - *Initial work* - [PerryJames](https://github.com/perryjsteward)

See also the list of [contributors](https://github.com/perryjsteward/js-calculator/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Exercise Inspired by [DevLeague](https://github.com/devleague/js-calculator)
* Pattern Inspired by [MomentJS](https://github.com/moment/moment/)
