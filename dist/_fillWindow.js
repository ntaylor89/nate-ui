'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    * { box-sizing: border-box; }\n    html, body { height: 100%; }\n    #', ' {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n    }\n  '], ['\n    * { box-sizing: border-box; }\n    html, body { height: 100%; }\n    #', ' {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function () {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';

  (0, _styledComponents.injectGlobal)(_templateObject, id);
};