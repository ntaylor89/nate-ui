'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Divider = (0, _styledComponents2.default)(function (_ref) {
  var borderColor = _ref.borderColor,
      props = _objectWithoutProperties(_ref, ['borderColor']);

  return _react2.default.createElement(_rebass.Divider, props);
})(_templateObject, _styledSystem.borderColor);

Divider.defaultProps = {
  my: 4,
  borderColor: 'inherit'
};

Divider.displayName = 'Divider';

exports.default = Divider;