'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _md = require('@compositor/md');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MD = {
  h1: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h1',
      fontSize: 6,
      mt: 5,
      mb: 3
    }));
  }),
  h2: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h2',
      fontSize: 4,
      mt: 4,
      mb: 3
    }));
  }),
  h3: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h3',
      fontSize: 3,
      mt: 4,
      mb: 3
    }));
  }),
  h4: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h4',
      fontSize: 2,
      mt: 4,
      mb: 3
    }));
  }),
  h5: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h5',
      fontSize: 1,
      mt: 3,
      mb: 2
    }));
  }),
  h6: (0, _md.heading)(function (props) {
    return _react2.default.createElement(_.Heading, _extends({}, props, {
      is: 'h6',
      fontSize: 1,
      mt: 3,
      mb: 2
    }));
  }),
  p: function p(props) {
    return _react2.default.createElement(_.Text, _extends({}, props, {
      fontSize: 3,
      mb: 4
    }));
  },
  a: (0, _md.link)(function (props) {
    return _react2.default.createElement(_.Link, props);
  }),
  code: function code(props) {
    return _react2.default.createElement(_.Code, _extends({}, props, {
      fontSize: 'inherit',
      bg: '#f6f6fc'
    }));
  },
  pre: function pre(props) {
    return _react2.default.createElement(_.Pre, _extends({}, props, {
      fontSize: 2,
      my: 3,
      p: 2,
      bg: '#f6f6fc'
    }));
  },
  blockquote: function blockquote(props) {
    return _react2.default.createElement(_.Blockquote, props);
  },
  hr: function hr(props) {
    return _react2.default.createElement(_.Divider, props);
  },
  li: function li(props) {
    return _react2.default.createElement(_.Text, _extends({}, props, {
      is: 'li',
      fontSize: 3,
      mb: 2
    }));
  },
  img: function img(props) {
    return _react2.default.createElement(_.Image, _extends({}, props, {
      mb: 3
    }));
  }
};

exports.default = MD;