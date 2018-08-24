module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Stepper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px'
};
var DashStyle = {
  display: 'flex',
  width: '8px',
  height: '2px'
};

var BreakerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontStyle: 'italic',
  fontWeight: 'bold'
};

var CircleStyle = {
  fontWeight: 'bold',
  border: '2px solid',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  fontSize: '16px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center'
};

var CircleSelectedStyle = {
  width: '35px',
  height: '35px',
  fontSize: '20px'
};

var DEFAULT_CIRCLE_COLORS = {
  DONE: {
    border: '#25BCEB',
    background: '#ffffff',
    font: '#25BCEB'
  },
  UNDONE: {
    border: '#C7C7C7',
    background: '#ffffff',
    font: '#C7C7C7'
  },
  LAST: {
    border: '#60D172',
    background: '#ffffff',
    font: '#60D172'
  },
  CURRENT: {
    border: '#25BCEB',
    background: '#25BCEB',
    font: '#ffffff'
  }
};

function Stepper(_ref) {
  var maxSteps = _ref.maxSteps,
      steps = _ref.steps,
      selected = _ref.selected,
      colors = _ref.colors;


  var CIRCLE_COLORS = colors || DEFAULT_CIRCLE_COLORS;

  var CONNECTOR_COLORS = {
    DONE: CIRCLE_COLORS.DONE.border,
    UNDONE: CIRCLE_COLORS.UNDONE.border
  };

  var getCircleColors = function getCircleColors(number, selection, lastStep) {
    if (number < selection) {
      return CIRCLE_COLORS.DONE;
    } else if (number === selection) {
      return CIRCLE_COLORS.CURRENT;
    } else if (number === lastStep) {
      return CIRCLE_COLORS.LAST;
    } else {
      return CIRCLE_COLORS.UNDONE;
    }
  };

  var getConnectorColor = function getConnectorColor(number, selection) {
    if (number <= selection) {
      return CONNECTOR_COLORS.DONE;
    } else {
      return CONNECTOR_COLORS.UNDONE;
    }
  };

  var Circle = function Circle(props) {
    var style = props.selected ? _extends({}, CircleStyle, CircleSelectedStyle) : CircleStyle;
    return _react2.default.createElement(
      'div',
      { style: _extends({}, style, { color: props.colors.font, backgroundColor: props.colors.background, borderColor: props.colors.border }) },
      props.number
    );
  };

  var Breaker = function Breaker(props) {
    return _react2.default.createElement(
      'div',
      { style: _extends({}, BreakerStyle, { color: props.color }) },
      _react2.default.createElement(Dash, { color: props.color }),
      '||',
      _react2.default.createElement(Dash, { color: props.color })
    );
  };

  var Dash = function Dash(props) {
    return _react2.default.createElement('div', { style: _extends({}, DashStyle, { backgroundColor: props.color }) });
  };

  // Build the stepper array
  var stepsArr = Array.from(Array(steps)).map(function (e, i) {
    return i + 1;
  });

  var arrayDeleteFromEnds = function arrayDeleteFromEnds(a, b, exclude, arr) {
    if (arr[a] !== exclude) {
      stepsArr.splice(a, 1);
    } else if (arr[b] !== exclude) {
      stepsArr.splice(b, 1);
    }
  };

  // Compressing the steps with a breaker (-//-) connector.
  while (stepsArr.length > maxSteps) {
    var first = 1;
    var last = stepsArr.length - 2;

    if (selected < maxSteps - 1) {
      arrayDeleteFromEnds(last, first, selected, stepsArr);
    } else {
      arrayDeleteFromEnds(first, last, selected, stepsArr);
    }
  }

  // Inflate steps to UI elems.
  var stepperElms = [];
  var previous = 0;
  stepsArr.forEach(function (s) {
    if (previous !== 0) {
      if (s === previous + 1) {
        stepperElms.push(_react2.default.createElement(Dash, { key: 'd' + s, color: getConnectorColor(s, selected) }));
      } else {
        stepperElms.push(_react2.default.createElement(Breaker, { key: 'b' + s, color: getConnectorColor(s, selected) }));
      }
    }
    previous = s;
    stepperElms.push(_react2.default.createElement(Circle, { key: 'c' + s, colors: getCircleColors(s, selected, stepsArr[stepsArr.length - 1]), number: s, selected: selected === s }));
  });

  return _react2.default.createElement(
    'div',
    { style: Wrapper },
    stepperElms
  );
}

Stepper.propTypes = {
  steps: function steps(props, propName, componentName) {
    if (!Number.isInteger(props[propName]) || props[propName] < 0) {
      return new Error('Props "' + propName + '" must be > 0.');
    }
  },
  maxSteps: function maxSteps(props, propName, componentName) {
    if (props[propName] && !Number.isInteger(props[propName])) {
      return new Error('Props "' + propName + '" must be an integer');
    }
  },
  selected: function selected(props, propName, componentName) {
    if (props[propName] && (!Number.isInteger(props[propName]) || props[propName] < 1 || props[propName] > props['steps'])) {
      return new Error('Props "' + propName + '" must be in [1, steps].');
    }
  }
};

/***/ })
/******/ ]);