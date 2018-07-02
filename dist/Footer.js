'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    _rebass.Box,
    _extends({ is: 'footer', py: 4 }, props),
    _react2.default.createElement(
      _rebass.Small,
      null,
      _react2.default.createElement(
        _rebass.Text,
        { textAlign: 'center' },
        'Made with <3 by Nate Taylor'
      )
    )
  );
};

exports.default = Footer;