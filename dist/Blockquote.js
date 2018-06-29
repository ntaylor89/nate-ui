'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rebass = require('rebass');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockquote = (0, _styledComponents2.default)(_rebass.Blockquote)({
  borderLeft: '3px solid'
});

Blockquote.defaultProps = {
  fontSize: 3,
  pl: 3,
  my: 4
};

Blockquote.displayName = 'Blockquote';

exports.default = Blockquote;