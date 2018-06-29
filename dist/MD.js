'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MD = {
  h1: function h1(props) {
    return _react2.default.createElement(_.H1, props);
  },
  h2: function h2(props) {
    return _react2.default.createElement(_.H2, props);
  },
  h3: function h3(props) {
    return _react2.default.createElement(_.H3, props);
  },
  h4: function h4(props) {
    return _react2.default.createElement(_.H4, props);
  },
  h5: function h5(props) {
    return _react2.default.createElement(_.H5, props);
  },
  h6: function h6(props) {
    return _react2.default.createElement(_.H6, props);
  },
  p: function p(props) {
    return _react2.default.createElement(_.P, props);
  },
  a: function a(props) {
    return _react2.default.createElement(_.Link, props);
  },
  code: function code(props) {
    return _react2.default.createElement(_.Code, props);
  },
  pre: function pre(props) {
    return _react2.default.createElement(_.Pre, props);
  },
  blockquote: function blockquote(props) {
    return _react2.default.createElement(_.Blockquote, props);
  },
  hr: function hr(props) {
    return _react2.default.createElement(_.Divider, props);
  },
  li: function li(props) {
    return _react2.default.createElement(_.Li, props);
  },
  img: function img(props) {
    return _react2.default.createElement(_.Image, _extends({}, props, {
      mb: 3
    }));
  }
};

exports.default = MD;