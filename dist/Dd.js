'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _systemComponents = require('system-components');

var _systemComponents2 = _interopRequireDefault(_systemComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _systemComponents2.default)(function (props) {
  return _extends({
    is: 'dd',
    color: props.color
  }, props.center && { textAlign: 'center' });
});