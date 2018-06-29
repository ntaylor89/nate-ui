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

var H3 = function H3(props) {
  return _react2.default.createElement(_Heading2.default, _extends({
    is: 'h3',
    fontSize: 4,
    mt: 4,
    mb: 3
  }, props));
};

H3.displayName = 'H3';

exports.default = H3;