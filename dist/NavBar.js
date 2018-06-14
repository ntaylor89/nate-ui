'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('.');

var _systemComponents = require('system-components');

var _systemComponents2 = _interopRequireDefault(_systemComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = (0, _systemComponents2.default)({ is: 'header' });

var NavBar = function NavBar(_ref) {
  var logo = _ref.logo,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['logo', 'children']);

  return _react2.default.createElement(
    Header,
    null,
    _react2.default.createElement(
      _.Toolbar,
      _extends({
        px: 3,
        py: 2,
        color: 'black',
        bg: 'white'
      }, props),
      logo,
      _react2.default.createElement(_.Box, { mx: 'auto' }),
      children
    )
  );
};

NavBar.defaultProps = {
  logo: 'X'
};

exports.default = NavBar;