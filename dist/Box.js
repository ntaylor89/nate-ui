'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _systemComponents = require('system-components');

var _systemComponents2 = _interopRequireDefault(_systemComponents);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = (0, _systemComponents2.default)({
  is: _rebass.Box
}, 'height');

Box.displayName = 'Box';

exports.default = Box;