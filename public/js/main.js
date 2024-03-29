webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(67);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.GravHash = GravHash;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _md = __webpack_require__(240);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

function GravHash(email, size) {
    var hash = email.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    hash = hash.toLowerCase();
    hash = (0, _md2.default)(hash);
    return 'https://www.gravatar.com/avatar/' + hash + '?size=' + size;
}

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'onClick',
        value: function onClick() {
            var _props$user$getUser = this.props.user.getUser(),
                username = _props$user$getUser.username;

            this.props.history.push('/profile/' + username);
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.user.getUser();
            var right = user.username !== '' ? _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/logout' },
                    'Log Out'
                ),
                _react2.default.createElement('img', { src: GravHash(user.primary_email, 40), onClick: this.onClick })
            ) : _react2.default.createElement(
                'div',
                { className: 'col-xs-4 right-nav' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login' },
                    'Log In'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register' },
                    'Register'
                )
            );
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Graham\'s Solitaire'
                    )
                ),
                right
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(254);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


// Necessary modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

var _reactRouterDom = __webpack_require__(25);

var _header = __webpack_require__(115);

var _header2 = _interopRequireDefault(_header);

var _landing = __webpack_require__(243);

var _landing2 = _interopRequireDefault(_landing);

var _login = __webpack_require__(244);

var _login2 = _interopRequireDefault(_login);

var _logout = __webpack_require__(245);

var _logout2 = _interopRequireDefault(_logout);

var _register = __webpack_require__(246);

var _register2 = _interopRequireDefault(_register);

var _profile = __webpack_require__(247);

var _profile2 = _interopRequireDefault(_profile);

var _start = __webpack_require__(248);

var _start2 = _interopRequireDefault(_start);

var _results = __webpack_require__(249);

var _results2 = _interopRequireDefault(_results);

var _game = __webpack_require__(250);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Bring app CSS into the picture
__webpack_require__(255);

/*************************************************************************/

var MyApp = function (_Component) {
    _inherits(MyApp, _Component);

    function MyApp(props) {
        _classCallCheck(this, MyApp);

        var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

        _this.user = new User(window.__PRELOADED_STATE__.username, window.__PRELOADED_STATE__.primary_email);
        return _this;
    }

    _createClass(MyApp, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_header2.default, { user: this.user }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _landing2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: function render() {
                            return _this2.user.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/profile/' + _this2.user.username() }) : _react2.default.createElement(_login2.default, { user: _this2.user });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/register', render: function render() {
                            return _this2.user.loggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/profile/' + _this2.user.username() }) : _react2.default.createElement(_register2.default, null);
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/logout', render: function render(props) {
                            return _react2.default.createElement(_logout2.default, { user: _this2.user });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/:username', render: function render(props) {
                            return _react2.default.createElement(_profile2.default, { user: _this2.user });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/start', render: function render() {
                            return _this2.user.loggedIn() ? _react2.default.createElement(_start2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/game/:id', render: function render() {
                            return _this2.user.loggedIn() ? _react2.default.createElement(_game2.default, { user: _this2.user }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/results/:id', render: function render(props) {
                            return _react2.default.createElement(_results2.default, { user: _this2.user });
                        } })
                )
            );
        }
    }]);

    return MyApp;
}(_react.Component);

var User = function () {
    function User(username, primary_email) {
        _classCallCheck(this, User);

        if (username && primary_email) {
            this.data = {
                username: username,
                primary_email: primary_email
            };
        } else {
            this.data = {
                username: "",
                primary_email: ""
            };
        }
    }

    _createClass(User, [{
        key: 'loggedIn',
        value: function loggedIn() {
            return this.data.username && this.data.primary_email;
        }
    }, {
        key: 'username',
        value: function username() {
            return this.data.username;
        }
    }, {
        key: 'logIn',
        value: function logIn(router, data) {
            // Store locally
            this.data = data;
            // Go to user profile
            router.push('/profile/' + data.username);
        }
    }, {
        key: 'logOut',
        value: function logOut(router) {
            // Remove user info
            this.data = {
                username: "",
                primary_email: ""
            };
            // Go to login page
            router.push('/login');
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            return this.data;
        }
    }]);

    return User;
}();

(0, _reactDom.render)(_react2.default.createElement(MyApp, null), document.getElementById('mainDiv'));

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(66);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(12);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(64);

var _PathUtils = __webpack_require__(30);

var _createTransitionManager = __webpack_require__(65);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(66);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(8);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(12);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(64);

var _PathUtils = __webpack_require__(30);

var _createTransitionManager = __webpack_require__(65);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(107);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(106);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(109);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(110);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(112);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(113);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(41);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(114);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(241),
      utf8 = __webpack_require__(116).utf8,
      isBuffer = __webpack_require__(242),
      bin = __webpack_require__(116).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 242:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************/

var Landing = function Landing() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'h3',
                { className: 'col-sm-offset-2 col-xs-8' },
                'This is my landing page!'
            )
        )
    );
};

exports.default = Landing;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'onSubmit',
        value: function onSubmit(ev) {
            var _this2 = this;

            ev.preventDefault();
            var data = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            };
            $.ajax({
                url: "/v1/session",
                method: "post",
                data: data
            }).then(function (data) {
                _this2.props.user.logIn(_this2.props.history, data);
            }).fail(function (err) {
                var errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = 'Error: ' + err.responseJSON.error;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-2' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'div',
                        { className: 'center-block' },
                        _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                    ),
                    _react2.default.createElement(
                        'form',
                        { className: 'form-horizontal' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'username' },
                                'Username:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'username', type: 'text', placeholder: 'Username' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'password' },
                                'Password:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'password', type: 'password', placeholder: 'Password' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-offset-2 col-sm-10' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.onSubmit },
                                    'Login'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'col-xs-2' })
            );
        }
    }]);

    return Login;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Login);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Logout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Logout = exports.Logout = function (_Component) {
    _inherits(Logout, _Component);

    function Logout() {
        _classCallCheck(this, Logout);

        return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
    }

    _createClass(Logout, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.user.logOut(this.props.history);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return Logout;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Logout);

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register(props) {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(Register, [{
        key: 'onSubmit',
        value: function onSubmit(ev) {
            var _this2 = this;

            ev.preventDefault();
            var data = {
                username: document.getElementById('username').value,
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                city: document.getElementById('city').value,
                primary_email: document.getElementById('primary_email').value,
                password: document.getElementById('password').value
            };
            var $error = $('#errorMsg');
            var pwdInvalid = Register.validPassword(data.password);
            if (!data.username || data.username.length > 16 || data.username.length < 6 || !data.username.match(/^[a-z0-9]+$/i)) {
                $error.html('Error: malformed username');
            } else if (pwdInvalid) {
                $error.html('Error: ' + pwdInvalid.error);
            } else $.ajax({
                url: "/v1/user",
                method: "post",
                data: data
            }).then(function () {
                _this2.props.history.push('/login');
            }).fail(function (err) {
                var errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = 'Error: ' + err.responseJSON.error;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-2' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'div',
                        { className: 'center-block' },
                        _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                    ),
                    _react2.default.createElement(
                        'form',
                        { className: 'form-horizontal' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'username' },
                                'Username:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'username', type: 'text', placeholder: 'Username' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'first_name' },
                                'First Name:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'first_name', type: 'text', placeholder: 'First Name' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'last_name' },
                                'Last Name:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'last_name', type: 'text', placeholder: 'Last Name' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'city' },
                                'City:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'city', type: 'text', placeholder: 'City' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'primary_email' },
                                'Email:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'primary_email', type: 'email', placeholder: 'Email Address' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-sm-2 control-label', htmlFor: 'password' },
                                'Password:'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-10' },
                                _react2.default.createElement('input', { className: 'form-control', id: 'password', type: 'password', placeholder: 'Password' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-offset-2 col-sm-10' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.onSubmit, className: 'btn btn-default' },
                                    'Register'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'col-xs-2' })
            );
        }
    }], [{
        key: 'validPassword',
        value: function validPassword(password) {
            if (!password || password.length < 8) {
                return { error: 'password length must be > 7' };
            } else if (!password.match(/[0-9]/i)) {
                return { error: 'password must contain a number' };
            } else if (!password.match(/[a-z]/)) {
                return { error: 'password a lowercase letter' };
            } else if (!password.match(/\@|\!|\#|\$|\%|\^/i)) {
                return { error: 'password must contain @, !, #, $, % or ^' };
            } else if (!password.match(/[A-Z]/)) {
                return { error: 'password an uppercase letter' };
            }
            return undefined;
        }
    }]);

    return Register;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Register);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _header = __webpack_require__(115);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Game = function Game(_ref) {
    var game = _ref.game,
        index = _ref.index;

    var date = new Date(game.start);
    var url = game.active ? '/game/' + game.id : '/results/' + game.id;
    return _react2.default.createElement(
        'tr',
        { key: index },
        _react2.default.createElement(
            'th',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: url },
                game.active ? "Active" : "Complete"
            )
        ),
        _react2.default.createElement(
            'th',
            null,
            date.toLocaleString()
        ),
        _react2.default.createElement(
            'th',
            null,
            game.moves
        ),
        _react2.default.createElement(
            'th',
            null,
            game.score
        ),
        _react2.default.createElement(
            'th',
            null,
            game.game
        )
    );
};

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

        _this.state = {
            user: {
                primary_email: "",
                games: []
            }
        };
        return _this;
    }

    _createClass(Profile, [{
        key: 'fetchUser',
        value: function fetchUser(username) {
            var _this2 = this;

            $.ajax({
                url: '/v1/user/' + username,
                method: "get"
            }).then(function (data) {
                _this2.setState({ user: data });
            }).fail(function (err) {
                var errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = 'Error: ' + err.responseJSON.error;
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchUser(this.props.match.params.username);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.fetchUser(nextProps.match.params.username);
        }
    }, {
        key: 'render',
        value: function render() {
            // Is the logged in user viewing their own profile
            var isUser = this.props.match.params.username === this.props.user.getUser().username;
            // Build array of games
            var games = this.state.user.games.map(function (game, index) {
                return _react2.default.createElement(Game, { key: index, game: game, index: index });
            });
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'center-block' },
                    _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-2' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Player Profile'
                    ),
                    isUser ? _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profile/' + this.props.match.params.username + '/edit' },
                        'Edit Profile'
                    ) : undefined
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            _react2.default.createElement('img', { src: (0, _header.GravHash)(this.state.user.primary_email, 100) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-11' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-6 text-right' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Username:'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'First Name:'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Last Name:'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'City:'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Email Address:'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-6' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.state.user.username
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.state.user.first_name
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.state.user.last_name
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.state.user.city
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    this.state.user.primary_email
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            _react2.default.createElement(
                                'h4',
                                { id: 'games_count' },
                                'Games Played (',
                                this.state.user.games.length,
                                '):'
                            ),
                            isUser ? _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/start' },
                                'Start new game'
                            ) : undefined
                        ),
                        _react2.default.createElement(
                            'table',
                            { id: 'gameTable', className: 'col-xs-12 table' },
                            _react2.default.createElement(
                                'thead',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Status'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Start Date'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        '# of moves'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Score'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Game Type'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'tbody',
                                null,
                                games
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Profile);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Start = function (_Component) {
    _inherits(Start, _Component);

    function Start(props) {
        _classCallCheck(this, Start);

        var _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this, props));

        _this.state = {
            games: ['klondike', 'pyramid', 'canfield', 'golf', 'yukon', 'hearts'],
            selected: 'klondike'
        };
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Start, [{
        key: 'onSubmit',
        value: function onSubmit(ev) {
            var _this2 = this;

            ev.preventDefault();
            var data = {
                game: this.state.selected,
                draw: document.getElementById('draw').value,
                color: document.getElementById('color').value
            };
            $.ajax({
                url: "/v1/game",
                method: "post",
                data: data
            }).then(function (data) {
                _this2.props.history.push('/game/' + data.id);
            }).fail(function (err) {
                var errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = 'Error: ' + err.responseJSON.error;
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(ev) {
            if (this.state.selected !== ev.target.value) {
                this.setState({ selected: ev.target.value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var games = this.state.games.map(function (game, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'radio' },
                    _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('input', { type: 'radio', name: 'game', value: game, checked: game === _this3.state.selected, onChange: _this3.onChange }),
                        game
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-2' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'div',
                        { className: 'center-block' },
                        _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Create New Game'
                    ),
                    _react2.default.createElement(
                        'form',
                        { className: 'form-horizontal', action: '/start', method: 'post' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group col-xs-4' },
                            games
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group col-xs-8' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-12' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label', htmlFor: 'draw' },
                                        'Draw:'
                                    ),
                                    _react2.default.createElement(
                                        'select',
                                        { id: 'draw', name: 'draw', className: 'form-control', disabled: 'hearts' === this.state.selected },
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Draw 1'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Draw 3'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-xs-12' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label', htmlFor: 'color' },
                                        'Card Color:'
                                    ),
                                    _react2.default.createElement(
                                        'select',
                                        { id: 'color', name: 'color', className: 'form-control' },
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Red'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Green'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Blue'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Magical'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group col-xs-12' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-default', onClick: this.onSubmit },
                                'Start'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Start;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Start);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Move = function Move(_ref) {
    var move = _ref.move,
        index = _ref.index;

    var duration = Date.now() - move.date;
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'th',
            null,
            move.id ? move.id : index + 1
        ),
        _react2.default.createElement(
            'th',
            null,
            duration,
            ' seconds'
        ),
        _react2.default.createElement(
            'th',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/profile/' + move.player },
                move.player
            )
        ),
        _react2.default.createElement(
            'th',
            null,
            move.move
        )
    );
};

var Results = function (_Component) {
    _inherits(Results, _Component);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this.state = {
            game: {
                moves: []
            }
        };
        return _this;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            $.ajax({ url: '/v1/game/' + this.props.match.params.id }).then(function (data) {
                _this2.setState({ game: data });
            }).fail(function (err) {
                var errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = 'Error: ' + err.responseJSON.error;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var moves = this.state.game.moves.map(function (move, index) {
                return _react2.default.createElement(Move, { key: index, move: move, index: index });
            });
            var duration = this.state.game.start ? (Date.now() - this.state.game.start) / 1000 : '--';
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'center-block' },
                    _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-2' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Game Detail'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-3 text-right' },
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Duration:'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Number of Moves:'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Points:'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Cards Remaining:'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    'Able to Move:'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-6' },
                            _react2.default.createElement(
                                'p',
                                null,
                                duration,
                                ' seconds'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.game.moves.length
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.game.score
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.game.cards_remaining
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.game.active ? "Active" : "Complete"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'table',
                            { id: 'gameTable', className: 'col-xs-12 table' },
                            _react2.default.createElement(
                                'thead',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Id'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Duration'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Player'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Move Details'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'tbody',
                                null,
                                moves
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Results;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Results);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

var _pile = __webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Game = function (_Component) {
    _inherits(Game, _Component);

    // TODO make draw count configurable
    function Game(props) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        _this.state = {
            selected: null,
            startDrag: { x: 0, y: 0 },
            pile1: [],
            pile2: [],
            pile3: [],
            pile4: [],
            pile5: [],
            pile6: [],
            pile7: [],
            stack1: [],
            stack2: [],
            stack3: [],
            stack4: [],
            draw: [],
            discard: []
        };

        _this.onClick = _this.onBackgroundClick.bind(_this);
        _this.onTableauPileClick = _this.onTableauPileClick.bind(_this);
        _this.onFoundationPileClick = _this.onFoundationPileClick.bind(_this);
        _this.onDrawPileClick = _this.onDrawPileClick.bind(_this);
        _this.onDiscardPileClick = _this.onDiscardPileClick.bind(_this);
        _this.onBackgroundClick = _this.onBackgroundClick.bind(_this);
        _this.verifyMoveToTableau = _this.verifyMoveToTableau.bind(_this);
        _this.verifyMoveToFoundation = _this.verifyMoveToFoundation.bind(_this);
        _this.validateAndMakeMove = _this.validateAndMakeMove.bind(_this);
        _this.onAutocompleteClick = _this.onAutocompleteClick.bind(_this);
        _this.autocomplete = _this.autocomplete.bind(_this);
        return _this;
    }

    _createClass(Game, [{
        key: 'validateAndMakeMove',
        value: function validateAndMakeMove(move) {
            var _this2 = this;

            this.setState({ selected: null });

            // Send move to server to be validated
            return $.ajax({
                url: '/v1/game/' + this.props.match.params.id,
                method: "put",
                data: { move: move }
            }).then(function (newState) {
                _this2.setState(newState);
            }).fail(function (err) {
                console.log('Error making move');
                console.log(err.error);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            $.ajax({
                url: '/v1/game/' + this.props.match.params.id
            }).then(function (data) {
                _this3.setState({
                    pile1: data.pile1,
                    pile2: data.pile2,
                    pile3: data.pile3,
                    pile4: data.pile4,
                    pile5: data.pile5,
                    pile6: data.pile6,
                    pile7: data.pile7,
                    stack1: data.stack1,
                    stack2: data.stack2,
                    stack3: data.stack3,
                    stack4: data.stack4,
                    draw: data.draw,
                    discard: data.discard,
                    drawCount: data.drawCount
                });
            }).fail(function (err) {
                // TODO: Should show a helpful error message that the game could not be found
                console.log(err);
            });
        }
    }, {
        key: 'onBackgroundClick',
        value: function onBackgroundClick(ev) {
            // if background is clicked
            ev.stopPropagation();

            // Cancel any existing selection
            this.setState({
                selected: null
            });
        }
    }, {
        key: 'onDrawPileClick',
        value: function onDrawPileClick(ev) {
            // one click, no need for separate from/to handling
            ev.stopPropagation(); // prevent event from bubbling up

            // Check if something is already selected
            if (this.state.selected) {
                // Cancel selection
                this.setState({ selected: null });
                return;
            }

            var drawPile = this.state.draw;
            var discardPile = this.state.discard;

            // Move drawCount cards (or all remaining cards, whichever is less) to discard pile
            var num = this.state.draw.length > this.state.drawCount ? this.state.drawCount : this.state.draw.length;

            if (num !== 0) {
                // There are still cards left in the draw pile
                // Create the move
                var move = {
                    // cards[0] should be the first to be appended to the destination pile
                    cards: drawPile.slice(-1 * num).reverse().map(function (card) {
                        return { suit: card.suit, value: card.value, up: true };
                    }),
                    src: "draw",
                    dst: "discard"
                };

                // Send move to server to be validated
                this.validateAndMakeMove(move);
            } else {
                // no cards left in the draw pile
                var _move = {
                    cards: discardPile.slice(0).reverse().map(function (card) {
                        return { suit: card.suit, value: card.value, up: false };
                    }),
                    src: "discard",
                    dst: "draw"

                    // Send move to server to be validated
                };this.validateAndMakeMove(_move);
            }
        }
    }, {
        key: 'onDiscardPileClick',
        value: function onDiscardPileClick(ev) {
            // can only move from, not to
            ev.stopPropagation(); // prevent event from bubbling up
            var targetAttributes = ev.target.id.split(':');
            var targetSuit = targetAttributes[0];
            var targetRank = targetAttributes[1];
            var discardPile = this.state.discard;

            // Check if something is already selected
            if (this.state.selected) {
                // Cancel selection
                this.setState({ selected: null });
                return;
            }

            // Otherwise, only allow the top card to be clicked
            if (discardPile.length > 0 && targetSuit === discardPile[discardPile.length - 1].suit && targetRank === discardPile[discardPile.length - 1].value) {
                // Select the top card
                this.setState({
                    selected: {
                        cards: [discardPile[discardPile.length - 1]],
                        src: "discard",
                        index: discardPile.length - 1
                    }
                });
            }
        }
    }, {
        key: 'onFoundationPileClick',
        value: function onFoundationPileClick(ev) {
            ev.stopPropagation(); // prevent event from bubbling up

            var targetid = ev.target.id;
            // If the target is an empty pile, the id would be the stack id (which starts with 'stack')
            // If the target is a card, targetid would be <suit>:<rank> of the clicked card
            var isEmptyPile = targetid.startsWith('stack');

            // Which stack was clicked?
            var thisStackId = "";
            if (isEmptyPile) thisStackId = targetid;else thisStackId = ev.target.dataset.pileid;
            var thisStack = this.state[thisStackId];

            // Was anything already selected?
            var selected = this.state.selected;

            // Check if something is already selected
            if (selected) {

                // Check that only 1 card is selected, and that the move is allowed
                if (selected.cards.length === 1 && ( // either pile is empty and selected card is an ace
                isEmptyPile && selected.cards[0].value === 'ace' || // or selected card has same suit & is one rank higher than the top card in the pile
                this.verifyMoveToFoundation(targetid.split(':')[0], targetid.split(':')[1], selected.cards[0].suit, selected.cards[0].value))) {
                    // Move is valid! Create move.
                    var move = {
                        cards: selected.cards,
                        src: selected.src,
                        dst: thisStackId
                    };

                    // Send move to server to be validated
                    this.validateAndMakeMove(move);
                } else {
                    // Cancel selection
                    this.setState({ selected: null });
                }

                return;
            }

            // Nothing was already selected, so we try to select something
            if (!targetid.startsWith('stack')) {
                // make sure not an empty pile
                this.setState({
                    selected: {
                        cards: [thisStack[thisStack.length - 1]], // top card
                        src: thisStackId,
                        index: thisStack.length - 1
                    }
                });
            }
        }
    }, {
        key: 'onTableauPileClick',
        value: function onTableauPileClick(ev) {
            ev.stopPropagation();

            var targetid = ev.target.id;
            var targetCardAttributes = targetid.split(':');
            var targetCardSuit = targetCardAttributes[0];
            var targetCardRank = targetCardAttributes[1];

            // If the target is an empty pile, the id would be the stack id (which starts with 'stack')
            // If the target is a card, targetid would be <suit>:<rank> of the clicked card
            var isEmptyPile = targetid.startsWith('pile');

            // Which pile was clicked?
            var thisPileId = "";
            if (isEmptyPile) thisPileId = targetid;else thisPileId = ev.target.dataset.pileid;
            var thisPile = this.state[thisPileId];

            // Was anything already selected?
            var selected = this.state.selected;

            // Check if something is already selected
            if (selected) {

                // Check that the move is valid
                if ( // either the pile is empty and we are moving a king there
                isEmptyPile && selected.cards[0].value === 'king' || // or the destination card is at the top of its pile and 
                // the root selected card can go directly below it
                targetCardSuit === thisPile[thisPile.length - 1].suit && targetCardRank === thisPile[thisPile.length - 1].value && this.verifyMoveToTableau(targetCardSuit, targetCardRank, selected.cards[0].suit, selected.cards[0].value)) {
                    // Move is valid! Create move.
                    var move = {
                        cards: selected.cards,
                        src: selected.src,
                        dst: thisPileId
                    };

                    // Send move to server to be validated
                    this.validateAndMakeMove(move);
                } else {
                    // Cancel selection
                    this.setState({ selected: null });
                }

                return;
            }

            // Nothing was already selected, so we try to select something.
            // Find where the clicked Card is in the pile
            var index = -1;
            for (var i = 0; i < thisPile.length; ++i) {
                if (thisPile[i].suit === targetCardSuit && thisPile[i].value === targetCardRank) {
                    index = i;
                    break;
                }
            }

            if (index >= 0 && thisPile[index].up) {
                // clicked card must be face up
                this.setState({
                    selected: {
                        // cards south of (in front of) and including the clicked card in the pile;
                        // cards[0] should be the first card to be put down on the destination pile
                        cards: thisPile.slice(index),
                        src: thisPileId,
                        index: index // index of the bottommost card to be moved
                    }
                });
            }
        }

        // bottomCardSuit, bottomCardRank, topCardSuit, and topCardRank
        // should both be strings representing the suits and ranks of the 
        // two respective cards.
        // Returns true if the cards have the same suit and topCard is one
        // rank higher than bottomcard.

    }, {
        key: 'verifyMoveToFoundation',
        value: function verifyMoveToFoundation(bottomCardSuit, bottomCardRank, topCardSuit, topCardRank) {
            if (bottomCardSuit != topCardSuit) return false; // false if suits are different
            var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
            var nextIndex = ranks.indexOf(bottomCardRank) + 1;
            if (nextIndex <= 0 && nextIndex >= ranks.length) return false; // false if higher index is invalid
            return ranks[nextIndex] === topCardRank; // verify correct rank
        }

        // higherCardSuit, higherCardRank, lowerCardSuit and lowerCardRank 
        // should both be strings representing the suits and ranks of the 
        // two respective cards.
        // Returns true if higherCard is of the opposite color and one rank 
        // higher than lowerCard, false otherwise.

    }, {
        key: 'verifyMoveToTableau',
        value: function verifyMoveToTableau(higherCardSuit, higherCardRank, lowerCardSuit, lowerCardRank) {

            // Check colors
            var redSuits = ['diamonds', 'hearts'];
            var blackSuits = ['spades', 'clubs'];
            if (redSuits.includes(higherCardSuit) && redSuits.includes(lowerCardSuit) || blackSuits.includes(higherCardSuit) && blackSuits.includes(lowerCardSuit)) return false; // false if both red or both black

            // Check ranks
            var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
            var nextIndex = ranks.indexOf(lowerCardRank) + 1;
            if (nextIndex <= 0 || nextIndex >= ranks.length) return false; // false if higher index is invalid
            return ranks[nextIndex] === higherCardRank; // verify correct rank
        }
    }, {
        key: 'onAutocompleteClick',
        value: function onAutocompleteClick(ev) {
            ev.stopPropagation();
            this.autocomplete();
        }
    }, {
        key: 'autocomplete',
        value: function autocomplete() {
            var _this4 = this;

            // Fetch all possible moves from current state
            $.ajax({
                url: '/v1/moves',
                method: "get",
                data: { state: JSON.stringify(this.state), drawCount: this.state.drawCount }
            }).then(function (moves) {

                // Select the moves from tableau to foundation 
                var autocompleteMoves = moves.filter(function (move) {
                    return !move.src.startsWith('stack') && move.dst.startsWith('stack');
                });

                // If there are no moves from tableau to foundation, we are done
                if (autocompleteMoves.length === 0) return;

                // Make all the moves from tableau to foundation, then autocomplete again
                _this4.validateAndMakeMove(autocompleteMoves[0]).then(function () {
                    return setTimeout(function () {
                        return _this4.autocomplete();
                    }, 100);
                }).fail(function () {
                    return console.log('Autocomplete move failed');
                });
            }).fail(function (err) {
                console.log('Error fetching possible moves');
                console.log(err.error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onClick: this.onBackgroundClick },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { type: 'button', onClick: this.onAutocompleteClick },
                        'Autocomplete'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'card-row' },
                    _react2.default.createElement(_pile.Pile, {
                        pileId: 'stack1',
                        cards: this.state.stack1.slice(-1),
                        spacing: 0,
                        onClick: this.onFoundationPileClick
                    }),
                    _react2.default.createElement(_pile.Pile, {
                        pileId: 'stack2',
                        cards: this.state.stack2.slice(-1),
                        spacing: 0,
                        onClick: this.onFoundationPileClick
                    }),
                    _react2.default.createElement(_pile.Pile, {
                        pileId: 'stack3',
                        cards: this.state.stack3.slice(-1),
                        spacing: 0,
                        onClick: this.onFoundationPileClick
                    }),
                    _react2.default.createElement(_pile.Pile, {
                        pileId: 'stack4',
                        cards: this.state.stack4.slice(-1),
                        spacing: 0,
                        onClick: this.onFoundationPileClick
                    }),
                    _react2.default.createElement('div', { className: 'card-row-gap' }),
                    _react2.default.createElement(_pile.Pile, {
                        cards: this.state.draw.slice(-1),
                        spacing: 0,
                        onClick: this.onDrawPileClick
                    }),
                    _react2.default.createElement(_pile.Pile, {
                        cards: this.state.discard.slice(-1 * this.state.drawCount),
                        horizontal: true,
                        onClick: this.onDiscardPileClick
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'card-row' },
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile1', cards: this.state.pile1, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile2', cards: this.state.pile2, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile3', cards: this.state.pile3, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile4', cards: this.state.pile4, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile5', cards: this.state.pile5, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile6', cards: this.state.pile6, onClick: this.onTableauPileClick }),
                    _react2.default.createElement(_pile.Pile, { pileId: 'pile7', cards: this.state.pile7, onClick: this.onTableauPileClick })
                )
            );
        }
    }]);

    return Game;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Game);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pile = exports.Card = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(252);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Card = exports.Card = function Card(_ref) {
    var card = _ref.card,
        top = _ref.top,
        left = _ref.left,
        onClick = _ref.onClick,
        pileId = _ref.pileId;

    if (card.up == 'true') card.up = true;else if (card.up == 'false') card.up = false;
    var source = card.up ? '/images/' + card.value + '_of_' + card.suit + '.png' : "/images/face_down.jpg";
    var style = { left: left + '%', top: top + '%' };
    var id = card.suit + ':' + card.value;
    return _react2.default.createElement('img', {
        id: id,
        onClick: onClick,
        className: 'card',
        style: style,
        src: source,
        'data-pileid': pileId // used to identify the pile when clicked
    });
};

var Pile = exports.Pile = function (_Component) {
    _inherits(Pile, _Component);

    function Pile() {
        _classCallCheck(this, Pile);

        return _possibleConstructorReturn(this, (Pile.__proto__ || Object.getPrototypeOf(Pile)).apply(this, arguments));
    }

    _createClass(Pile, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cards = this.props.cards.map(function (card, index) {
                var top = _this2.props.horizontal ? 0 : index * _this2.props.spacing;
                var left = _this2.props.horizontal ? index * _this2.props.spacing : 0;
                return _react2.default.createElement(Card, {
                    key: index,
                    card: card,
                    up: _this2.props.up,
                    top: top,
                    left: left,
                    onClick: _this2.props.onClick,
                    pileId: _this2.props.pileId
                });
            });
            var className = this.props.className ? "card-pile " + this.props.className : "card-pile";
            return _react2.default.createElement(
                'div',
                { onClick: this.props.onClick, id: this.props.pileId, className: className },
                _react2.default.createElement('div', { className: 'card-pile-frame' }),
                ' ',
                cards
            );
        }
    }]);

    return Pile;
}(_react.Component);

Pile.propTypes = {
    cards: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    onClick: _propTypes2.default.func,
    horizontal: _propTypes2.default.bool,
    spacing: _propTypes2.default.number,
    maxCards: _propTypes2.default.number,
    top: _propTypes2.default.number,
    left: _propTypes2.default.number
};
Pile.defaultProps = {
    horizontal: false, // Layout horizontal?
    spacing: 17 // In percent
};

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(118)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./card.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./card.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(117)(undefined);
// imports


// module
exports.push([module.i, ".card-row {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: flex-start;\n    margin-bottom: 2em;\n    margin-right: 100px;\n}\n\n.card-row-gap {\n    flex-grow: 2;\n}\n\n.card-pile {\n    margin: 5px;\n    position: relative;\n    display: inline-block;\n    border: dashed 2px #808080;\n    border-radius: 5px;\n    width: 12%;\n}\n\n.card-pile-frame {\n    margin-top: 140%;\n}\n\nimg.card {\n    position: absolute;\n    height: auto;\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 254:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(118)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(117)(undefined);
// imports


// module
exports.push([module.i, ".navbar-static-top {\n    margin-left: -14px;\n    margin-right: -24px;\n}\n\n.right-nav {\n    text-align: right;\n    padding-top: 10px;\n    padding-right: 20px;\n}\n\n.right-nav a {\n    display: block;\n}\n\ntable#gameTable tbody tr:hover {\n    background: #6495ed;\n    cursor: pointer;\n}\n\n#errorMsg {\n    text-align: center;\n}\n\n.header {\n    float: right;\n}\n\n.header img {\n    border-radius: 5px;\n    margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(40);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ })

},[119]);
//# sourceMappingURL=main.map