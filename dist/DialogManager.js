Object.defineProperty(exports, "__esModule", {value: true});
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _jsxFileName = 'src/DialogManager.js';
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactNativeRootSiblings = require('react-native-root-siblings');
var _reactNativeRootSiblings2 = _interopRequireDefault(_reactNativeRootSiblings);
var _DialogComponent = require('./DialogComponent');
var _DialogComponent2 = _interopRequireDefault(_DialogComponent);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var DESTROY_TIMEOUT = 500;
var DialogManager = function () {
    function DialogManager() {
        var _this = this;
        _classCallCheck(this, DialogManager);
        this.onDialogDismissed = function () {
            var onDismissed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            };
            onDismissed();
            _this.destroy();
        };
        this.update = function (props) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            };
            _this.currentDialog.update(_react2.default.createElement(_DialogComponent2.default, _extends({}, props, {
                onDismissed: function onDismissed() {
                    _this.onDialogDismissed(props.onDismissed);
                }, __source: {fileName: _jsxFileName, lineNumber: 44}
            })), callback);
        };
        this.show = function (props) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            };
            _this.add(_extends({}, props, {show: true}), callback);
        };
        this.dismiss = function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            };
            _this.update({show: false}, callback);
        };
        this.dismissAll = function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            };
            _this.dialogs.forEach(function () {
                _this.dismiss(callback);
            });
        };
        this.dialogs = [];
    }

    _createClass(DialogManager, [{
        key: 'add', value: function add(props, callback) {
            var _this2 = this;
            var dialog = new _reactNativeRootSiblings2.default(_react2.default.createElement(_DialogComponent2.default, _extends({}, props, {
                onDismissed: function onDismissed() {
                    _this2.onDialogDismissed(props.onDismissed);
                }, __source: {fileName: _jsxFileName, lineNumber: 21}
            })), callback);
            this.dialogs.push(dialog);
        }
    }, {
        key: 'destroy', value: function destroy() {
            var dialog = this.dialogs.pop();
            setTimeout(function () {
                if (dialog != undefined) dialog.destroy();
            }, DESTROY_TIMEOUT);
        }
    }, {
        key: 'currentDialog', get: function get() {
            return this.dialogs[this.dialogs.length - 1];
        }
    }]);
    return DialogManager;
}();
exports.default = DialogManager;