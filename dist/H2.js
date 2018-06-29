'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H2 = function H2(props) {
  return _react2.default.createElement(_Heading2.default, _extends({
    is: 'h2',
    fontSize: 5,
    mt: 4,
    mb: 3
  }, props));
};

H2.displayName = 'H2';

exports.default = H2;