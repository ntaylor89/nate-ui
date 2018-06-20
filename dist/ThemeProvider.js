'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n'], ['\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _fillWindow = require('./_fillWindow');

var _fillWindow2 = _interopRequireDefault(_fillWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Provider = (0, _styledComponents2.default)(_rebass.Provider)(_templateObject, function (props) {
  return props.fullscreen ? '100%' : 'auto';
});

exports.default = function (_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  if (props.fullscreen) (0, _fillWindow2.default)(props.root);

  var oldFonts = _theme2.default.fonts,
      oldColors = _theme2.default.colors,
      oldRest = _objectWithoutProperties(_theme2.default, ['fonts', 'colors']);

  var newFonts = theme.fonts,
      newColors = theme.colors,
      newRest = _objectWithoutProperties(theme, ['fonts', 'colors']);

  var mergedTheme = {
    colors: _extends({}, oldColors, newColors),
    fonts: _extends({}, oldFonts, newFonts),
    oldRest: oldRest,
    newRest: newRest
  };

  return _react2.default.createElement(Provider, _extends({
    theme: mergedTheme
  }, props));
};