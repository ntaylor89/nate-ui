'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavBar = function NavBar(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      props = _objectWithoutProperties(_ref, ['children', 'logo']);

  return _react2.default.createElement(
    _rebass.Box,
    { is: 'header' },
    _react2.default.createElement(
      _rebass.Toolbar,
      _extends({
        px: 4,
        pt: 3,
        color: 'inherit',
        bg: 'inherit',
        alignItems: 'center'
      }, props),
      logo,
      _react2.default.createElement(_rebass.Box, { mx: 'auto' }),
      children
    )
  );
};

NavBar.defaultProps = {
  logo: 'Nate Taylor'
};

exports.default = NavBar;