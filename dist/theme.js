'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSizes = exports.fonts = exports.colors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rebass = require('rebass');

var colors = exports.colors = _extends({}, _rebass.theme.colors, {
  text: '#282828',
  black: '#282828',
  gray: '#647171',
  lightGray: '#f6f6fc',
  white: '#fff',
  green: '#0CE890',
  blue: '#07c',
  navy: '#004175'
});

var fonts = exports.fonts = _extends({}, _rebass.theme.fonts, {
  sans: '"Avenir Next", Helvetica, sans-serif',
  mono: 'Menlo, monospace',
  system: 'system-ui, sans-serif'
});

var fontSizes = exports.fontSizes = [12, 14, 16, 24, 32, 48, 64, 96];

exports.default = _extends({}, _rebass.theme, {
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes
});