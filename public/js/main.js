webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/anne/cs4288/assignment6-anne-zou/node_modules/prop-types/index.js'");

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

/***/ 117:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/anne/cs4288/assignment6-anne-zou/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/anne/cs4288/assignment6-anne-zou/node_modules/style-loader/lib/addStyles.js'");

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

/***/ 240:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/anne/cs4288/assignment6-anne-zou/node_modules/md5/md5.js'");

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
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/anne/cs4288/assignment6-anne-zou/node_modules/react-router-dom/es/index.js'");

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
                    }, 300);
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


/***/ })

},[119]);
//# sourceMappingURL=main.map