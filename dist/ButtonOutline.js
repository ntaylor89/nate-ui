'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonOutline = function ButtonOutline(props) {
  return _react2.default.createElement(_rebass.ButtonOutline, _extends({
    px: 3,
    py: 2
  }, props));
};

ButtonOutline.displayName = 'ButtonOutline';

exports.default = ButtonOutline;