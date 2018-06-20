'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

var _systemComponents = require('system-components');

var _systemComponents2 = _interopRequireDefault(_systemComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = (0, _systemComponents2.default)({
  is: 'footer',
  py: 4
});

var Footer = function Footer(props) {
  return _react2.default.createElement(
    Base,
    props,
    _react2.default.createElement(
      _rebass.Small,
      null,
      _react2.default.createElement(
        _rebass.Text,
        {
          textAlign: 'center',
          color: 'gray'
        },
        'Made with <3 by Nate Taylor'
      )
    )
  );
};

exports.default = Footer;