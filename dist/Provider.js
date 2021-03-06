'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = function Provider(props) {
  return _react2.default.createElement(_rebass.Provider, props);
};

Provider.defaultProps = {
  theme: _theme2.default
};

exports.default = Provider;