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

var sizes = {
  small: { px: 3, py: 2 },
  medium: { px: 4, py: 3 },
  large: { px: 5, py: 4 }
};

var variants = {
  primary: { bg: 'blue' },
  secondary: { bg: 'green' },
  error: { bg: 'red' }
};

var Button = function Button(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 'small' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === undefined ? 'primary' : _ref$variant,
      primary = _ref.primary,
      secondary = _ref.secondary,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ['size', 'variant', 'primary', 'secondary', 'error']);

  return _react2.default.createElement(_rebass.Button, _extends({}, sizes[size], variants[variant], primary && variants.primary, secondary && variants.secondary, error && variants.error, {
    m: 2
  }, props));
};

Button.displayName = 'Button';

exports.default = Button;