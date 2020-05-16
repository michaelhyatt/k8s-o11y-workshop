(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elastic-apm-rum"] = factory();
	else
		root["elastic-apm-rum"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/error-stack-parser/error-stack-parser.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/error-stack-parser/error-stack-parser.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "../../node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') {
            return array.map(fn, thisArg);
        } else {
            var output = new Array(array.length);
            for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
            }
            return output;
        }
    }

    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') {
            return array.filter(fn, thisArg);
        } else {
            var output = [];
            for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                    output.push(array[i]);
                }
            }
            return output;
        }
    }

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName,
                        undefined,
                        locationParts[0],
                        locationParts[1],
                        locationParts[2],
                        line);
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame(
                            match[3] || undefined,
                            undefined,
                            match[2],
                            match[1],
                            undefined,
                            lines[i]
                        )
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return _map(filtered, function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');
                return new StackFrame(
                    functionName,
                    args,
                    locationParts[0],
                    locationParts[1],
                    locationParts[2],
                    line);
            }, this);
        }
    };
}));



/***/ }),

/***/ "../../node_modules/opentracing/lib/constants.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/constants.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The FORMAT_BINARY format represents SpanContexts in an opaque binary
 * carrier.
 *
 * Tracer.inject() will set the buffer field to an Array-like (Array,
 * ArrayBuffer, or TypedBuffer) object containing the injected binary data.
 * Any valid Object can be used as long as the buffer field of the object
 * can be set.
 *
 * Tracer.extract() will look for `carrier.buffer`, and that field is
 * expected to be an Array-like object (Array, ArrayBuffer, or
 * TypedBuffer).
 */
exports.FORMAT_BINARY = 'binary';
/**
 * The FORMAT_TEXT_MAP format represents SpanContexts using a
 * string->string map (backed by a Javascript Object) as a carrier.
 *
 * NOTE: Unlike FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP places no restrictions
 * on the characters used in either the keys or the values of the map
 * entries.
 *
 * The FORMAT_TEXT_MAP carrier map may contain unrelated data (e.g.,
 * arbitrary gRPC metadata); as such, the Tracer implementation should use
 * a prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
exports.FORMAT_TEXT_MAP = 'text_map';
/**
 * The FORMAT_HTTP_HEADERS format represents SpanContexts using a
 * character-restricted string->string map (backed by a Javascript Object)
 * as a carrier.
 *
 * Keys and values in the FORMAT_HTTP_HEADERS carrier must be suitable for
 * use as HTTP headers (without modification or further escaping). That is,
 * the keys have a greatly restricted character set, casing for the keys
 * may not be preserved by various intermediaries, and the values should be
 * URL-escaped.
 *
 * The FORMAT_HTTP_HEADERS carrier map may contain unrelated data (e.g.,
 * arbitrary HTTP headers); as such, the Tracer implementation should use a
 * prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
exports.FORMAT_HTTP_HEADERS = 'http_headers';
/**
 * A Span may be the "child of" a parent Span. In a “child of” reference,
 * the parent Span depends on the child Span in some capacity.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
exports.REFERENCE_CHILD_OF = 'child_of';
/**
 * Some parent Spans do not depend in any way on the result of their child
 * Spans. In these cases, we say merely that the child Span “follows from”
 * the parent Span in a causal sense.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
exports.REFERENCE_FOLLOWS_FROM = 'follows_from';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/functions.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/functions.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = __webpack_require__(/*! ./constants */ "../../node_modules/opentracing/lib/constants.js");
var reference_1 = __webpack_require__(/*! ./reference */ "../../node_modules/opentracing/lib/reference.js");
var span_1 = __webpack_require__(/*! ./span */ "../../node_modules/opentracing/lib/span.js");
/**
 * Return a new REFERENCE_CHILD_OF reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_CHILD_OF reference pointing to `spanContext`
 */
function childOf(spanContext) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) {
        spanContext = spanContext.context();
    }
    return new reference_1.default(Constants.REFERENCE_CHILD_OF, spanContext);
}
exports.childOf = childOf;
/**
 * Return a new REFERENCE_FOLLOWS_FROM reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_FOLLOWS_FROM reference pointing to `spanContext`
 */
function followsFrom(spanContext) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) {
        spanContext = spanContext.context();
    }
    return new reference_1.default(Constants.REFERENCE_FOLLOWS_FROM, spanContext);
}
exports.followsFrom = followsFrom;
//# sourceMappingURL=functions.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/noop.js":
/*!************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/noop.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(/*! ./span */ "../../node_modules/opentracing/lib/span.js");
var span_context_1 = __webpack_require__(/*! ./span_context */ "../../node_modules/opentracing/lib/span_context.js");
var tracer_1 = __webpack_require__(/*! ./tracer */ "../../node_modules/opentracing/lib/tracer.js");
exports.tracer = null;
exports.spanContext = null;
exports.span = null;
// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
function initialize() {
    exports.tracer = new tracer_1.default();
    exports.span = new span_1.default();
    exports.spanContext = new span_context_1.default();
}
exports.initialize = initialize;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/reference.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/reference.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(/*! ./span */ "../../node_modules/opentracing/lib/span.js");
/**
 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
 *
 * See the exported childOf() and followsFrom() functions at the package level.
 */
var Reference = /** @class */ (function () {
    /**
     * Initialize a new Reference instance.
     *
     * @param {string} type - the Reference type constant (e.g.,
     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
     * @param {SpanContext} referencedContext - the SpanContext being referred
     *        to. As a convenience, a Span instance may be passed in instead
     *        (in which case its .context() is used here).
     */
    function Reference(type, referencedContext) {
        this._type = type;
        this._referencedContext = (referencedContext instanceof span_1.default ?
            referencedContext.context() :
            referencedContext);
    }
    /**
     * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
     *         REFERENCE_FOLLOWS_FROM).
     */
    Reference.prototype.type = function () {
        return this._type;
    };
    /**
     * @return {SpanContext} The SpanContext being referred to (e.g., the
     *         parent in a REFERENCE_CHILD_OF Reference).
     */
    Reference.prototype.referencedContext = function () {
        return this._referencedContext;
    };
    return Reference;
}());
exports.default = Reference;
//# sourceMappingURL=reference.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/span.js":
/*!************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/span.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop = __webpack_require__(/*! ./noop */ "../../node_modules/opentracing/lib/noop.js");
/**
 * Span represents a logical unit of work as part of a broader Trace. Examples
 * of span might include remote procedure calls or a in-process function calls
 * to sub-components. A Trace has a single, top-level "root" Span that in turn
 * may have zero or more child Spans, which in turn may have children.
 */
var Span = /** @class */ (function () {
    function Span() {
    }
    // ---------------------------------------------------------------------- //
    // OpenTracing API methods
    // ---------------------------------------------------------------------- //
    /**
     * Returns the SpanContext object associated with this Span.
     *
     * @return {SpanContext}
     */
    Span.prototype.context = function () {
        return this._context();
    };
    /**
     * Returns the Tracer object used to create this Span.
     *
     * @return {Tracer}
     */
    Span.prototype.tracer = function () {
        return this._tracer();
    };
    /**
     * Sets the string name for the logical operation this span represents.
     *
     * @param {string} name
     */
    Span.prototype.setOperationName = function (name) {
        this._setOperationName(name);
        return this;
    };
    /**
     * Sets a key:value pair on this Span that also propagates to future
     * children of the associated Span.
     *
     * setBaggageItem() enables powerful functionality given a full-stack
     * opentracing integration (e.g., arbitrary application data from a web
     * client can make it, transparently, all the way into the depths of a
     * storage system), and with it some powerful costs: use this feature with
     * care.
     *
     * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
     * *future* causal descendants of the associated Span.
     *
     * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
     * value is copied into every local *and remote* child of the associated
     * Span, and that can add up to a lot of network and cpu overhead.
     *
     * @param {string} key
     * @param {string} value
     */
    Span.prototype.setBaggageItem = function (key, value) {
        this._setBaggageItem(key, value);
        return this;
    };
    /**
     * Returns the value for a baggage item given its key.
     *
     * @param  {string} key
     *         The key for the given trace attribute.
     * @return {string}
     *         String value for the given key, or undefined if the key does not
     *         correspond to a set trace attribute.
     */
    Span.prototype.getBaggageItem = function (key) {
        return this._getBaggageItem(key);
    };
    /**
     * Adds a single tag to the span.  See `addTags()` for details.
     *
     * @param {string} key
     * @param {any} value
     */
    Span.prototype.setTag = function (key, value) {
        // NOTE: the call is normalized to a call to _addTags()
        this._addTags((_a = {}, _a[key] = value, _a));
        return this;
        var _a;
    };
    /**
     * Adds the given key value pairs to the set of span tags.
     *
     * Multiple calls to addTags() results in the tags being the superset of
     * all calls.
     *
     * The behavior of setting the same key multiple times on the same span
     * is undefined.
     *
     * The supported type of the values is implementation-dependent.
     * Implementations are expected to safely handle all types of values but
     * may choose to ignore unrecognized / unhandle-able values (e.g. objects
     * with cyclic references, function objects).
     *
     * @return {[type]} [description]
     */
    Span.prototype.addTags = function (keyValueMap) {
        this._addTags(keyValueMap);
        return this;
    };
    /**
     * Add a log record to this Span, optionally at a user-provided timestamp.
     *
     * For example:
     *
     *     span.log({
     *         size: rpc.size(),  // numeric value
     *         URI: rpc.URI(),  // string value
     *         payload: rpc.payload(),  // Object value
     *         "keys can be arbitrary strings": rpc.foo(),
     *     });
     *
     *     span.log({
     *         "error.description": someError.description(),
     *     }, someError.timestampMillis());
     *
     * @param {object} keyValuePairs
     *        An object mapping string keys to arbitrary value types. All
     *        Tracer implementations should support bool, string, and numeric
     *        value types, and some may also support Object values.
     * @param {number} timestamp
     *        An optional parameter specifying the timestamp in milliseconds
     *        since the Unix epoch. Fractional values are allowed so that
     *        timestamps with sub-millisecond accuracy can be represented. If
     *        not specified, the implementation is expected to use its notion
     *        of the current time of the call.
     */
    Span.prototype.log = function (keyValuePairs, timestamp) {
        this._log(keyValuePairs, timestamp);
        return this;
    };
    /**
     * DEPRECATED
     */
    Span.prototype.logEvent = function (eventName, payload) {
        return this._log({ event: eventName, payload: payload });
    };
    /**
     * Sets the end timestamp and finalizes Span state.
     *
     * With the exception of calls to Span.context() (which are always allowed),
     * finish() must be the last call made to any span instance, and to do
     * otherwise leads to undefined behavior.
     *
     * @param  {number} finishTime
     *         Optional finish time in milliseconds as a Unix timestamp. Decimal
     *         values are supported for timestamps with sub-millisecond accuracy.
     *         If not specified, the current time (as defined by the
     *         implementation) will be used.
     */
    Span.prototype.finish = function (finishTime) {
        this._finish(finishTime);
        // Do not return `this`. The Span generally should not be used after it
        // is finished so chaining is not desired in this context.
    };
    // ---------------------------------------------------------------------- //
    // Derived classes can choose to implement the below
    // ---------------------------------------------------------------------- //
    // By default returns a no-op SpanContext.
    Span.prototype._context = function () {
        return noop.spanContext;
    };
    // By default returns a no-op tracer.
    //
    // The base class could store the tracer that created it, but it does not
    // in order to ensure the no-op span implementation has zero members,
    // which allows V8 to aggressively optimize calls to such objects.
    Span.prototype._tracer = function () {
        return noop.tracer;
    };
    // By default does nothing
    Span.prototype._setOperationName = function (name) {
    };
    // By default does nothing
    Span.prototype._setBaggageItem = function (key, value) {
    };
    // By default does nothing
    Span.prototype._getBaggageItem = function (key) {
        return undefined;
    };
    // By default does nothing
    //
    // NOTE: both setTag() and addTags() map to this function. keyValuePairs
    // will always be an associative array.
    Span.prototype._addTags = function (keyValuePairs) {
    };
    // By default does nothing
    Span.prototype._log = function (keyValuePairs, timestamp) {
    };
    // By default does nothing
    //
    // finishTime is expected to be either a number or undefined.
    Span.prototype._finish = function (finishTime) {
    };
    return Span;
}());
exports.Span = Span;
exports.default = Span;
//# sourceMappingURL=span.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/span_context.js":
/*!********************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/span_context.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
var SpanContext = /** @class */ (function () {
    function SpanContext() {
    }
    return SpanContext;
}());
exports.SpanContext = SpanContext;
exports.default = SpanContext;
//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ "../../node_modules/opentracing/lib/tracer.js":
/*!**************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/opentracing/lib/tracer.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Functions = __webpack_require__(/*! ./functions */ "../../node_modules/opentracing/lib/functions.js");
var Noop = __webpack_require__(/*! ./noop */ "../../node_modules/opentracing/lib/noop.js");
var span_1 = __webpack_require__(/*! ./span */ "../../node_modules/opentracing/lib/span.js");
/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 *
 * The default object acts as a no-op implementation.
 *
 * Note to implementators: derived classes can choose to directly implement the
 * methods in the "OpenTracing API methods" section, or optionally the subset of
 * underscore-prefixed methods to pick up the argument checking and handling
 * automatically from the base class.
 */
var Tracer = /** @class */ (function () {
    function Tracer() {
    }
    // ---------------------------------------------------------------------- //
    // OpenTracing API methods
    // ---------------------------------------------------------------------- //
    /**
     * Starts and returns a new Span representing a logical unit of work.
     *
     * For example:
     *
     *     // Start a new (parentless) root Span:
     *     var parent = Tracer.startSpan('DoWork');
     *
     *     // Start a new (child) Span:
     *     var child = Tracer.startSpan('load-from-db', {
     *         childOf: parent.context(),
     *     });
     *
     *     // Start a new async (FollowsFrom) Span:
     *     var child = Tracer.startSpan('async-cache-write', {
     *         references: [
     *             opentracing.followsFrom(parent.context())
     *         ],
     *     });
     *
     * @param {string} name - the name of the operation (REQUIRED).
     * @param {SpanOptions} [options] - options for the newly created span.
     * @return {Span} - a new Span object.
     */
    Tracer.prototype.startSpan = function (name, options) {
        if (options === void 0) { options = {}; }
        // Convert options.childOf to fields.references as needed.
        if (options.childOf) {
            // Convert from a Span or a SpanContext into a Reference.
            var childOf = Functions.childOf(options.childOf);
            if (options.references) {
                options.references.push(childOf);
            }
            else {
                options.references = [childOf];
            }
            delete (options.childOf);
        }
        return this._startSpan(name, options);
    };
    /**
     * Injects the given SpanContext instance for cross-process propagation
     * within `carrier`. The expected type of `carrier` depends on the value of
     * `format.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     var clientSpan = ...;
     *     ...
     *     // Inject clientSpan into a text carrier.
     *     var headersCarrier = {};
     *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     // Incorporate the textCarrier into the outbound HTTP request header
     *     // map.
     *     Object.assign(outboundHTTPReq.headers, headersCarrier);
     *     // ... send the httpReq
     *
     * @param  {SpanContext} spanContext - the SpanContext to inject into the
     *         carrier object. As a convenience, a Span instance may be passed
     *         in instead (in which case its .context() is used for the
     *         inject()).
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - see the documentation for the chosen `format`
     *         for a description of the carrier object.
     */
    Tracer.prototype.inject = function (spanContext, format, carrier) {
        // Allow the user to pass a Span instead of a SpanContext
        if (spanContext instanceof span_1.default) {
            spanContext = spanContext.context();
        }
        return this._inject(spanContext, format, carrier);
    };
    /**
     * Returns a SpanContext instance extracted from `carrier` in the given
     * `format`.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     // Use the inbound HTTP request's headers as a text map carrier.
     *     var headersCarrier = inboundHTTPReq.headers;
     *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
     *
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - the type of the carrier object is determined by
     *         the format.
     * @return {SpanContext}
     *         The extracted SpanContext, or null if no such SpanContext could
     *         be found in `carrier`
     */
    Tracer.prototype.extract = function (format, carrier) {
        return this._extract(format, carrier);
    };
    // ---------------------------------------------------------------------- //
    // Derived classes can choose to implement the below
    // ---------------------------------------------------------------------- //
    // NOTE: the input to this method is *always* an associative array. The
    // public-facing startSpan() method normalizes the arguments so that
    // all N implementations do not need to worry about variations in the call
    // signature.
    //
    // The default behavior returns a no-op span.
    Tracer.prototype._startSpan = function (name, fields) {
        return Noop.span;
    };
    // The default behavior is a no-op.
    Tracer.prototype._inject = function (spanContext, format, carrier) {
    };
    // The default behavior is to return a no-op SpanContext.
    Tracer.prototype._extract = function (format, carrier) {
        return Noop.spanContext;
    };
    return Tracer;
}());
exports.Tracer = Tracer;
exports.default = Tracer;
//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ "../../node_modules/promise-polyfill/src/finally.js":
/*!********************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/promise-polyfill/src/finally.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "../../node_modules/promise-polyfill/src/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/promise-polyfill/src/index.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "../../node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "../../node_modules/stackframe/stackframe.js":
/*!*************************************************************************************************************************************************!*\
  !*** /var/lib/jenkins/workspace/ent-rum_apm-agent-rum-mbp_master/src/github.com/elastic/apm-agent-rum-js/node_modules/stackframe/stackframe.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) {
            this.setFunctionName(functionName);
        }
        if (args !== undefined) {
            this.setArgs(args);
        }
        if (fileName !== undefined) {
            this.setFileName(fileName);
        }
        if (lineNumber !== undefined) {
            this.setLineNumber(lineNumber);
        }
        if (columnNumber !== undefined) {
            this.setColumnNumber(columnNumber);
        }
        if (source !== undefined) {
            this.setSource(source);
        }
    }

    StackFrame.prototype = {
        getFunctionName: function () {
            return this.functionName;
        },
        setFunctionName: function (v) {
            this.functionName = String(v);
        },

        getArgs: function () {
            return this.args;
        },
        setArgs: function (v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function () {
            return this.fileName;
        },
        setFileName: function (v) {
            this.fileName = String(v);
        },

        getLineNumber: function () {
            return this.lineNumber;
        },
        setLineNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
            }
            this.lineNumber = Number(v);
        },

        getColumnNumber: function () {
            return this.columnNumber;
        },
        setColumnNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
            }
            this.columnNumber = Number(v);
        },

        getSource: function () {
            return this.source;
        },
        setSource: function (v) {
            this.source = String(v);
        },

        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    return StackFrame;
}));


/***/ }),

/***/ "../rum-core/dist/es/common/after-frame.js":
/*!********************************************!*\
  !*** .-core/dist/es/common/after-frame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return afterFrame; });
var RAF_TIMEOUT = 100;
function afterFrame(callback) {
  var handler = function handler() {
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    setTimeout(callback);
  };

  var timeout = setTimeout(handler, RAF_TIMEOUT);
  var raf = requestAnimationFrame(handler);
}

/***/ }),

/***/ "../rum-core/dist/es/common/apm-server.js":
/*!*******************************************!*\
  !*** .-core/dist/es/common/apm-server.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ "../rum-core/dist/es/common/queue.js");
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ "../rum-core/dist/es/common/throttle.js");
/* harmony import */ var _ndjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ndjson */ "../rum-core/dist/es/common/ndjson.js");
/* harmony import */ var _patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patching/patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate */ "../rum-core/dist/es/common/truncate.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polyfills */ "../rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../env */ "../rum-core/dist/es/env.js");









var THROTTLE_INTERVAL = 60000;

var ApmServer = function () {
  function ApmServer(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
    this.queue = undefined;
    this.throttleEvents = _utils__WEBPACK_IMPORTED_MODULE_6__["noop"];
    this.initialized = false;
  }

  var _proto = ApmServer.prototype;

  _proto.init = function init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;

    this._initQueue();
  };

  _proto._initQueue = function _initQueue() {
    var _this = this;

    var queueLimit = this._configService.get('queueLimit');

    var flushInterval = this._configService.get('flushInterval');

    var limit = this._configService.get('eventsLimit');

    var onFlush = function onFlush(events) {
      var promise = _this.sendEvents(events);

      if (promise) {
        promise.catch(function (reason) {
          _this._loggingService.warn('Failed sending events!', _this._constructError(reason));
        });
      }
    };

    this.queue = new _queue__WEBPACK_IMPORTED_MODULE_0__["default"](onFlush, {
      queueLimit: queueLimit,
      flushInterval: flushInterval
    });
    this.throttleEvents = Object(_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(this.queue.add.bind(this.queue), function () {
      return _this._loggingService.warn('Dropped events due to throttling!');
    }, {
      limit: limit,
      interval: THROTTLE_INTERVAL
    });
  };

  _proto._postJson = function _postJson(endPoint, payload) {
    return this._makeHttpRequest('POST', endPoint, {
      payload: payload,
      headers: {
        'Content-Type': 'application/x-ndjson'
      }
    }).then(function (_ref) {
      var responseText = _ref.responseText;
      return responseText;
    });
  };

  _proto._constructError = function _constructError(reason) {
    var url = reason.url,
        status = reason.status,
        responseText = reason.responseText;

    if (typeof status == 'undefined') {
      return reason;
    }

    var message = url + ' HTTP status: ' + status;

    if (_env__WEBPACK_IMPORTED_MODULE_8__["__DEV__"] && responseText) {
      try {
        var serverErrors = [];
        var response = JSON.parse(responseText);

        if (response.errors && response.errors.length > 0) {
          response.errors.forEach(function (err) {
            return serverErrors.push(err.message);
          });
          message += ' ' + serverErrors.join(',');
        }
      } catch (e) {
        this._loggingService.debug('Error parsing response from APM server', e);
      }
    }

    return new Error(message);
  };

  _proto._makeHttpRequest = function _makeHttpRequest(method, url, _temp) {
    var _ref2 = _temp === void 0 ? {
      timeout: 10000
    } : _temp,
        timeout = _ref2.timeout,
        payload = _ref2.payload,
        headers = _ref2.headers;

    return new _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"](function (resolve, reject) {
      var xhr = new window.XMLHttpRequest();
      xhr[_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__["XHR_IGNORE"]] = true;
      xhr.open(method, url, true);
      xhr.timeout = timeout;

      if (headers) {
        for (var header in headers) {
          if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
          }
        }
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var status = xhr.status,
              responseText = xhr.responseText;

          if (status === 0 || status > 399 && status < 600) {
            reject({
              url: url,
              status: status,
              responseText: responseText
            });
          } else {
            resolve(xhr);
          }
        }
      };

      xhr.onerror = function () {
        var status = xhr.status,
            responseText = xhr.responseText;
        reject({
          url: url,
          status: status,
          responseText: responseText
        });
      };

      xhr.send(payload);
    });
  };

  _proto.fetchConfig = function fetchConfig(serviceName, environment) {
    var _this2 = this;

    var serverUrl = this._configService.get('serverUrl');

    var configEndpoint = serverUrl + "/config/v1/rum/agents";

    if (!serviceName) {
      return _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"].reject('serviceName is required for fetching central config.');
    }

    configEndpoint += "?service.name=" + serviceName;

    if (environment) {
      configEndpoint += "&service.environment=" + environment;
    }

    var localConfig = this._configService.getLocalConfig();

    if (localConfig) {
      configEndpoint += "&ifnonematch=" + localConfig.etag;
    }

    return this._makeHttpRequest('GET', configEndpoint, {
      timeout: 5000
    }).then(function (xhr) {
      var status = xhr.status,
          responseText = xhr.responseText;

      if (status === 304) {
        return localConfig;
      } else {
        var remoteConfig = JSON.parse(responseText);
        var etag = xhr.getResponseHeader('etag');

        if (etag) {
          remoteConfig.etag = etag.replace(/["]/g, '');

          _this2._configService.setLocalConfig(remoteConfig);
        }

        return remoteConfig;
      }
    }).catch(function (reason) {
      var error = _this2._constructError(reason);

      return _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"].reject(error);
    });
  };

  _proto.createMetaData = function createMetaData() {
    var cfg = this._configService;
    var metadata = {
      service: {
        name: cfg.get('serviceName'),
        version: cfg.get('serviceVersion'),
        agent: {
          name: 'rum-js',
          version: cfg.version
        },
        language: {
          name: 'javascript'
        },
        environment: cfg.get('environment')
      },
      labels: cfg.get('context.tags')
    };
    return Object(_truncate__WEBPACK_IMPORTED_MODULE_4__["truncateModel"])(_truncate__WEBPACK_IMPORTED_MODULE_4__["METADATA_MODEL"], metadata);
  };

  _proto.addError = function addError(error) {
    var _this$throttleEvents;

    this.throttleEvents((_this$throttleEvents = {}, _this$throttleEvents[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]] = error, _this$throttleEvents));
  };

  _proto.addTransaction = function addTransaction(transaction) {
    var _this$throttleEvents2;

    this.throttleEvents((_this$throttleEvents2 = {}, _this$throttleEvents2[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]] = transaction, _this$throttleEvents2));
  };

  _proto.ndjsonErrors = function ndjsonErrors(errors) {
    return errors.map(function (error) {
      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
        error: error
      });
    });
  };

  _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
    return metricsets.map(function (metricset) {
      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
        metricset: metricset
      });
    }).join('');
  };

  _proto.ndjsonTransactions = function ndjsonTransactions(transactions) {
    var _this3 = this;

    return transactions.map(function (tr) {
      var spans = '';

      if (tr.spans) {
        spans = tr.spans.map(function (span) {
          return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
            span: span
          });
        }).join('');
        delete tr.spans;
      }

      var breakdowns = '';

      if (tr.breakdown) {
        breakdowns = _this3.ndjsonMetricsets(tr.breakdown);
        delete tr.breakdown;
      }

      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
        transaction: tr
      }) + spans + breakdowns;
    });
  };

  _proto.sendEvents = function sendEvents(events) {
    var _payload;

    if (events.length === 0) {
      return;
    }

    var transactions = [];
    var errors = [];

    for (var _iterator = events, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var event = _ref3;

      if (event[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]]) {
        transactions.push(event[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]]);
      }

      if (event[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]]) {
        errors.push(event[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]]);
      }
    }

    if (transactions.length === 0 && errors.length === 0) {
      return;
    }

    var payload = (_payload = {}, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]] = transactions, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]] = errors, _payload);

    var filteredPayload = this._configService.applyFilters(payload);

    if (!filteredPayload) {
      this._loggingService.warn('Dropped payload due to filtering!');

      return;
    }

    var ndjson = [];
    var metadata = this.createMetaData();
    ndjson.push(_ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
      metadata: metadata
    }));
    ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]]), this.ndjsonTransactions(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]]));
    var ndjsonPayload = ndjson.join('');
    var endPoint = this._configService.get('serverUrl') + _constants__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL_PREFIX"];
    return this._postJson(endPoint, ndjsonPayload);
  };

  return ApmServer;
}();

/* harmony default export */ __webpack_exports__["default"] = (ApmServer);

/***/ }),

/***/ "../rum-core/dist/es/common/config-service.js":
/*!***********************************************!*\
  !*** .-core/dist/es/common/config-service.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handler */ "../rum-core/dist/es/common/event-handler.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");




function getConfigFromScript() {
  var script = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentScript"])();
  var config = getDataAttributesFromNode(script);
  return config;
}

function getDataAttributesFromNode(node) {
  if (!node) {
    return {};
  }

  var dataAttrs = {};
  var dataRegex = /^data-([\w-]+)$/;
  var attrs = node.attributes;

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (dataRegex.test(attr.nodeName)) {
      var key = attr.nodeName.match(dataRegex)[1];
      var camelCasedkey = key.split('-').map(function (value, index) {
        return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
      }).join('');
      dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
    }
  }

  return dataAttrs;
}

var Config = function () {
  function Config() {
    this.config = {};
    this.defaults = {
      serviceName: '',
      serviceVersion: '',
      environment: '',
      serverUrl: 'http://localhost:8200',
      active: true,
      instrument: true,
      disableInstrumentations: [],
      logLevel: 'warn',
      breakdownMetrics: false,
      ignoreTransactions: [],
      eventsLimit: 80,
      queueLimit: -1,
      flushInterval: 500,
      distributedTracing: true,
      distributedTracingOrigins: [],
      distributedTracingHeaderName: 'traceparent',
      pageLoadTraceId: '',
      pageLoadSpanId: '',
      pageLoadSampled: false,
      pageLoadTransactionName: '',
      transactionSampleRate: 1.0,
      centralConfig: false,
      monitorLongtasks: true,
      context: {}
    };
    this.events = new _event_handler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.filters = [];
    this.version = '';
  }

  var _proto = Config.prototype;

  _proto.init = function init() {
    var scriptData = getConfigFromScript();
    this.setConfig(scriptData);
  };

  _proto.isActive = function isActive() {
    return this.get('active');
  };

  _proto.setVersion = function setVersion(version) {
    this.version = version;
  };

  _proto.addFilter = function addFilter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Argument to must be function');
    }

    this.filters.push(cb);
  };

  _proto.applyFilters = function applyFilters(data) {
    for (var i = 0; i < this.filters.length; i++) {
      data = this.filters[i](data);

      if (!data) {
        return;
      }
    }

    return data;
  };

  _proto.get = function get(key) {
    return key.split('.').reduce(function (obj, objKey) {
      return obj && obj[objKey];
    }, this.config);
  };

  _proto.setUserContext = function setUserContext(userContext) {
    if (userContext === void 0) {
      userContext = {};
    }

    var context = {};
    var _userContext = userContext,
        id = _userContext.id,
        username = _userContext.username,
        email = _userContext.email;

    if (typeof id === 'number' || typeof id === 'string') {
      context.id = id;
    }

    if (typeof username === 'string') {
      context.username = username;
    }

    if (typeof email === 'string') {
      context.email = email;
    }

    this.config.context.user = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.config.context.user || {}, context);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    if (customContext === void 0) {
      customContext = {};
    }

    this.config.context.custom = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.config.context.custom || {}, customContext);
  };

  _proto.addLabels = function addLabels(tags) {
    var _this = this;

    if (!this.config.context.tags) {
      this.config.context.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setLabel"])(k, tags[k], _this.config.context.tags);
    });
  };

  _proto.setConfig = function setConfig(properties) {
    if (properties === void 0) {
      properties = {};
    }

    if (properties.serverUrl) {
      properties.serverUrl = properties.serverUrl.replace(/\/+$/, '');
    }

    this.config = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, this.defaults, this.config, properties);
    this.events.send(_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_CHANGE"], [this.config]);
  };

  _proto.validate = function validate(properties) {
    if (properties === void 0) {
      properties = {};
    }

    var requiredKeys = ['serviceName', 'serverUrl'];
    var errors = {
      missing: [],
      invalid: []
    };
    Object.keys(properties).forEach(function (key) {
      if (requiredKeys.indexOf(key) !== -1 && !properties[key]) {
        errors.missing.push(key);
      }
    });

    if (properties.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(properties.serviceName)) {
      errors.invalid.push({
        key: 'serviceName',
        value: properties.serviceName,
        allowed: 'a-z, A-Z, 0-9, _, -, <space>'
      });
    }

    var sampleRate = properties.transactionSampleRate;

    if (typeof sampleRate !== 'undefined' && (typeof sampleRate !== 'number' || isNaN(sampleRate) || sampleRate < 0 || sampleRate > 1)) {
      errors.invalid.push({
        key: 'transactionSampleRate',
        value: sampleRate,
        allowed: 'Number between 0 and 1'
      });
    }

    return errors;
  };

  _proto.getLocalConfig = function getLocalConfig() {
    var config = sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["LOCAL_CONFIG_KEY"]);

    if (config) {
      return JSON.parse(config);
    }
  };

  _proto.setLocalConfig = function setLocalConfig(config) {
    if (config) {
      sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["LOCAL_CONFIG_KEY"], JSON.stringify(config));
    }
  };

  return Config;
}();

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "../rum-core/dist/es/common/constants.js":
/*!******************************************!*\
  !*** .-core/dist/es/common/constants.js ***!
  \******************************************/
/*! exports provided: SCHEDULE, INVOKE, CLEAR, ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, RESOURCE_INITIATOR_TYPES, REUSABILITY_THRESHOLD, MAX_SPAN_DURATION, PAGE_LOAD, ROUTE_CHANGE, NAME_UNKNOWN, TYPE_CUSTOM, USER_TIMING_THRESHOLD, TRANSACTION_START, TRANSACTION_END, CONFIG_CHANGE, XMLHTTPREQUEST, FETCH, HISTORY, EVENT_TARGET, ERROR, BEFORE_EVENT, AFTER_EVENT, LOCAL_CONFIG_KEY, HTTP_REQUEST_TYPE, LONG_TASK, PAINT, MEASURE, NAVIGATION, RESOURCE, FIRST_CONTENTFUL_PAINT, LARGEST_CONTENTFUL_PAINT, KEYWORD_LIMIT, SERVER_URL_PREFIX, TEMPORARY_TYPE, USER_INTERACTION, TRANSACTION_TYPE_ORDER, BROWSER_RESPONSIVENESS_INTERVAL, ERRORS, TRANSACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULE", function() { return SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE", function() { return INVOKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_LISTENER_STR", function() { return ADD_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_EVENT_LISTENER_STR", function() { return REMOVE_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_INITIATOR_TYPES", function() { return RESOURCE_INITIATOR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REUSABILITY_THRESHOLD", function() { return REUSABILITY_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SPAN_DURATION", function() { return MAX_SPAN_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOAD", function() { return PAGE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_CHANGE", function() { return ROUTE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_UNKNOWN", function() { return NAME_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CUSTOM", function() { return TYPE_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TIMING_THRESHOLD", function() { return USER_TIMING_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_START", function() { return TRANSACTION_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_END", function() { return TRANSACTION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_CHANGE", function() { return CONFIG_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHTTPREQUEST", function() { return XMLHTTPREQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TARGET", function() { return EVENT_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_EVENT", function() { return BEFORE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_EVENT", function() { return AFTER_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_CONFIG_KEY", function() { return LOCAL_CONFIG_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_REQUEST_TYPE", function() { return HTTP_REQUEST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LONG_TASK", function() { return LONG_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAINT", function() { return PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASURE", function() { return MEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION", function() { return NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE", function() { return RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_CONTENTFUL_PAINT", function() { return FIRST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGEST_CONTENTFUL_PAINT", function() { return LARGEST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYWORD_LIMIT", function() { return KEYWORD_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL_PREFIX", function() { return SERVER_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPORARY_TYPE", function() { return TEMPORARY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INTERACTION", function() { return USER_INTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_TYPE_ORDER", function() { return TRANSACTION_TYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_RESPONSIVENESS_INTERVAL", function() { return BROWSER_RESPONSIVENESS_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTIONS", function() { return TRANSACTIONS; });
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
var CLEAR = 'clear';
var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var RESOURCE_INITIATOR_TYPES = ['link', 'css', 'script', 'img', 'xmlhttprequest', 'fetch', 'beacon', 'iframe'];
var REUSABILITY_THRESHOLD = 5000;
var MAX_SPAN_DURATION = 5 * 60 * 1000;
var PAGE_LOAD = 'page-load';
var ROUTE_CHANGE = 'route-change';
var TYPE_CUSTOM = 'custom';
var USER_INTERACTION = 'user-interaction';
var HTTP_REQUEST_TYPE = 'http-request';
var TEMPORARY_TYPE = 'temporary';
var NAME_UNKNOWN = 'Unknown';
var TRANSACTION_TYPE_ORDER = [PAGE_LOAD, ROUTE_CHANGE, USER_INTERACTION, HTTP_REQUEST_TYPE, TYPE_CUSTOM, TEMPORARY_TYPE];
var USER_TIMING_THRESHOLD = 60;
var TRANSACTION_START = 'transaction:start';
var TRANSACTION_END = 'transaction:end';
var CONFIG_CHANGE = 'config:change';
var XMLHTTPREQUEST = 'xmlhttprequest';
var FETCH = 'fetch';
var HISTORY = 'history';
var EVENT_TARGET = 'eventtarget';
var ERROR = 'error';
var BEFORE_EVENT = ':before';
var AFTER_EVENT = ':after';
var LOCAL_CONFIG_KEY = 'elastic_apm_config';
var LONG_TASK = 'longtask';
var PAINT = 'paint';
var MEASURE = 'measure';
var NAVIGATION = 'navigation';
var RESOURCE = 'resource';
var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
var LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint';
var BROWSER_RESPONSIVENESS_INTERVAL = 500;
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var KEYWORD_LIMIT = 1024;
var SERVER_URL_PREFIX = '/intake/v2/rum/events';


/***/ }),

/***/ "../rum-core/dist/es/common/context.js":
/*!****************************************!*\
  !*** .-core/dist/es/common/context.js ***!
  \****************************************/
/*! exports provided: addSpanContext, addTransactionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSpanContext", function() { return addSpanContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransactionContext", function() { return addTransactionContext; });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "../rum-core/dist/es/common/url.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var EXTERNAL = 'external';
var RESOURCE = 'resource';

function getPortNumber(port, protocol) {
  if (port === '') {
    port = protocol === 'http:' ? '80' : protocol === 'https:' ? '443' : '';
  }

  return port;
}

function getResponseContext(perfTimingEntry) {
  var transferSize = perfTimingEntry.transferSize,
      encodedBodySize = perfTimingEntry.encodedBodySize,
      decodedBodySize = perfTimingEntry.decodedBodySize,
      serverTiming = perfTimingEntry.serverTiming;
  var respContext = {
    transfer_size: transferSize,
    encoded_body_size: encodedBodySize,
    decoded_body_size: decodedBodySize
  };
  var serverTimingStr = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getServerTimingInfo"])(serverTiming);

  if (serverTimingStr) {
    respContext.headers = {
      'server-timing': serverTimingStr
    };
  }

  return respContext;
}

function getDestination(parsedUrl, type) {
  var port = parsedUrl.port,
      protocol = parsedUrl.protocol,
      hostname = parsedUrl.hostname,
      host = parsedUrl.host;
  var portNumber = getPortNumber(port, protocol);
  var ipv6Hostname = hostname.charCodeAt(0) === LEFT_SQUARE_BRACKET && hostname.charCodeAt(hostname.length - 1) === RIGHT_SQUARE_BRACKET;
  var address = hostname;

  if (ipv6Hostname) {
    address = hostname.slice(1, -1);
  }

  return {
    service: {
      name: protocol + '//' + host,
      resource: hostname + ':' + portNumber,
      type: type
    },
    address: address,
    port: Number(portNumber)
  };
}

function getResourceContext(data) {
  var entry = data.entry,
      url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["default"](url);
  var destination = getDestination(parsedUrl, RESOURCE);
  return {
    http: {
      url: url,
      response: getResponseContext(entry)
    },
    destination: destination
  };
}

function getExternalContext(data) {
  var url = data.url,
      method = data.method,
      target = data.target,
      response = data.response;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["default"](url);
  var destination = getDestination(parsedUrl, EXTERNAL);
  var context = {
    http: {
      method: method,
      url: parsedUrl.href
    },
    destination: destination
  };
  var statusCode;

  if (target && typeof target.status !== 'undefined') {
    statusCode = target.status;
  } else if (response) {
    statusCode = response.status;
  }

  context.http.status_code = statusCode;
  return context;
}

function addSpanContext(span, data) {
  if (!data) {
    return;
  }

  var type = span.type;
  var context;

  switch (type) {
    case EXTERNAL:
      context = getExternalContext(data);
      break;

    case RESOURCE:
      context = getResourceContext(data);
      break;
  }

  span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      tags = _ref.tags,
      configContext = _objectWithoutPropertiesLoose(_ref, ["tags"]);

  var pageContext = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getPageMetadata"])();
  var responseContext = {};

  if (transaction.type === _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"] && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPerfTimelineSupported"])()) {
    var entries = _utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_constants__WEBPACK_IMPORTED_MODULE_1__["NAVIGATION"]);

    if (entries && entries.length > 0) {
      responseContext = {
        response: getResponseContext(entries[0])
      };
    }
  }

  transaction.addContext(pageContext, responseContext, configContext);
}

/***/ }),

/***/ "../rum-core/dist/es/common/event-handler.js":
/*!**********************************************!*\
  !*** .-core/dist/es/common/event-handler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");


var EventHandler = function () {
  function EventHandler() {
    this.observers = {};
  }

  var _proto = EventHandler.prototype;

  _proto.observe = function observe(name, fn) {
    var _this = this;

    if (typeof fn === 'function') {
      if (!this.observers[name]) {
        this.observers[name] = [];
      }

      this.observers[name].push(fn);
      return function () {
        var index = _this.observers[name].indexOf(fn);

        if (index > -1) {
          _this.observers[name].splice(index, 1);
        }
      };
    }
  };

  _proto.sendOnly = function sendOnly(name, args) {
    var obs = this.observers[name];

    if (obs) {
      obs.forEach(function (fn) {
        try {
          fn.apply(undefined, args);
        } catch (error) {
          console.log(error, error.stack);
        }
      });
    }
  };

  _proto.send = function send(name, args) {
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__["BEFORE_EVENT"], args);
    this.sendOnly(name, args);
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__["AFTER_EVENT"], args);
  };

  return EventHandler;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventHandler);

/***/ }),

/***/ "../rum-core/dist/es/common/instrument.js":
/*!*******************************************!*\
  !*** .-core/dist/es/common/instrument.js ***!
  \*******************************************/
/*! exports provided: getInstrumentationFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentationFlags", function() { return getInstrumentationFlags; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");

function getInstrumentationFlags(instrument, disabledInstrumentations) {
  var _flags;

  var flags = (_flags = {}, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["XMLHTTPREQUEST"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["FETCH"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["HISTORY"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["ERROR"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_TARGET"]] = false, _flags);

  if (!instrument) {
    return flags;
  }

  Object.keys(flags).forEach(function (key) {
    if (disabledInstrumentations.indexOf(key) === -1) {
      flags[key] = true;
    }
  });
  return flags;
}

/***/ }),

/***/ "../rum-core/dist/es/common/logging-service.js":
/*!************************************************!*\
  !*** .-core/dist/es/common/logging-service.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");


var LoggingService = function () {
  function LoggingService(spec) {
    if (spec === void 0) {
      spec = {};
    }

    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'info';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }

  var _proto = LoggingService.prototype;

  _proto.shouldLog = function shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  };

  _proto.setLevel = function setLevel(level) {
    this.level = level;
    this.resetLogMethods();
  };

  _proto.resetLogMethods = function resetLogMethods() {
    var loggingService = this;
    this.levels.forEach(function (level) {
      loggingService[level] = loggingService.shouldLog(level) ? log : _utils__WEBPACK_IMPORTED_MODULE_0__["noop"];

      function log() {
        var prefix = loggingService.prefix;
        var normalizedLevel;

        switch (level) {
          case 'trace':
            normalizedLevel = 'info';
            break;

          case 'debug':
            normalizedLevel = 'info';
            break;

          default:
            normalizedLevel = level;
        }

        var args = arguments;

        if (prefix) {
          args[0] = prefix + args[0];
        }

        if (console) {
          var realMethod = console[normalizedLevel] || console.log;

          if (typeof realMethod === 'function') {
            realMethod.apply(console, args);
          }
        }
      }
    });
  };

  return LoggingService;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoggingService);

/***/ }),

/***/ "../rum-core/dist/es/common/ndjson.js":
/*!***************************************!*\
  !*** .-core/dist/es/common/ndjson.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NDJSON = function () {
  function NDJSON() {}

  NDJSON.stringify = function stringify(object) {
    return JSON.stringify(object) + '\n';
  };

  return NDJSON;
}();

/* harmony default export */ __webpack_exports__["default"] = (NDJSON);

/***/ }),

/***/ "../rum-core/dist/es/common/patching/event-target-patch.js":
/*!************************************************************!*\
  !*** .-core/dist/es/common/patching/event-target-patch.js ***!
  \************************************************************/
/*! exports provided: patchEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEventTarget", function() { return patchEventTarget; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");


var eventTypes = ['click'];
var eventTypeSymbols = {};

for (var i = 0; i < eventTypes.length; i++) {
  var et = eventTypes[i];
  eventTypeSymbols[et] = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_1__["apmSymbol"])(et);
}

function shouldInstrumentEvent(target, eventType, listenerFn) {
  return target instanceof Element && eventTypes.indexOf(eventType) >= 0 && typeof listenerFn === 'function';
}

function patchEventTarget(callback) {
  if (!window.EventTarget) {
    return;
  }

  var proto = window.EventTarget.prototype;
  var nativeAddEventListener = proto[_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_EVENT_LISTENER_STR"]];
  var nativeRemoveEventListener = proto[_constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_EVENT_LISTENER_STR"]];

  function findTaskIndex(existingTasks, eventType, listenerFn, capture) {
    for (var _i = 0; _i < existingTasks.length; _i++) {
      var task = existingTasks[_i];

      if (task.eventType === eventType && task.listenerFn === listenerFn && task.capture === capture) {
        return _i;
      }
    }

    return -1;
  }

  function isCapture(options) {
    var capture;

    if (typeof options === 'boolean') {
      capture = options;
    } else {
      capture = options ? !!options.capture : false;
    }

    return capture;
  }

  function createListenerWrapper(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    if (!eventSymbol) return listenerFn;
    var existingTasks = target[eventSymbol];
    var capture = isCapture(options);

    if (existingTasks) {
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var _task = existingTasks[taskIndex];
        return _task.wrappingFn;
      }
    } else {
      existingTasks = target[eventSymbol] = [];
    }

    var task = {
      source: _constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_TARGET"],
      target: target,
      eventType: eventType,
      listenerFn: listenerFn,
      capture: capture,
      wrappingFn: wrappingFn
    };
    existingTasks.push(task);

    function wrappingFn() {
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__["SCHEDULE"], task);
      var result;

      try {
        result = listenerFn.apply(this, arguments);
      } finally {
        callback(_constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE"], task);
      }

      return result;
    }

    return wrappingFn;
  }

  function getWrappingFn(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    var existingTasks = target[eventSymbol];

    if (existingTasks) {
      var capture = isCapture(options);
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var task = existingTasks[taskIndex];
        existingTasks.splice(taskIndex, 1);

        if (existingTasks.length === 0) {
          target[eventSymbol] = undefined;
        }

        return task.wrappingFn;
      }
    }

    return listenerFn;
  }

  proto[_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_EVENT_LISTENER_STR"]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeAddEventListener.apply(target, arguments);
    }

    var wrappingListenerFn = createListenerWrapper(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingListenerFn;
    return nativeAddEventListener.apply(target, args);
  };

  proto[_constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_EVENT_LISTENER_STR"]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeRemoveEventListener.apply(target, arguments);
    }

    var wrappingFn = getWrappingFn(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingFn;
    return nativeRemoveEventListener.apply(target, args);
  };
}

/***/ }),

/***/ "../rum-core/dist/es/common/patching/fetch-patch.js":
/*!*****************************************************!*\
  !*** .-core/dist/es/common/patching/fetch-patch.js ***!
  \*****************************************************/
/*! exports provided: patchFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchFetch", function() { return patchFetch; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills */ "../rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../rum-core/dist/es/common/utils.js");




function patchFetch(callback) {
  if (!window.fetch || !window.Request) {
    return;
  }

  function scheduleTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"], task);
  }

  function invokeTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"], task);
  }

  var nativeFetch = window.fetch;

  window.fetch = function (input, init) {
    var fetchSelf = this;
    var args = arguments;
    var request, url;

    if (typeof input === 'string') {
      request = new Request(input, init);
      url = input;
    } else if (input) {
      request = input;
      url = request.url;
    } else {
      return nativeFetch.apply(fetchSelf, args);
    }

    var task = {
      source: _constants__WEBPACK_IMPORTED_MODULE_2__["FETCH"],
      state: '',
      type: 'macroTask',
      data: {
        target: request,
        method: request.method,
        url: url,
        aborted: false
      }
    };
    return new _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve, reject) {
      _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = true;
      scheduleTask(task);
      var promise;

      try {
        promise = nativeFetch.apply(fetchSelf, [request]);
      } catch (error) {
        reject(error);
        task.data.error = error;
        invokeTask(task);
        _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = false;
        return;
      }

      promise.then(function (response) {
        resolve(response);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"])(function () {
          task.data.response = response;
          invokeTask(task);
        });
      }, function (error) {
        reject(error);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"])(function () {
          task.data.error = error;
          invokeTask(task);
        });
      });
      _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = false;
    });
  };
}

/***/ }),

/***/ "../rum-core/dist/es/common/patching/history-patch.js":
/*!*******************************************************!*\
  !*** .-core/dist/es/common/patching/history-patch.js ***!
  \*******************************************************/
/*! exports provided: patchHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchHistory", function() { return patchHistory; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");

function patchHistory(callback) {
  if (!window.history) {
    return;
  }

  var nativePushState = history.pushState;

  if (typeof nativePushState === 'function') {
    history.pushState = function (state, title, url) {
      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_0__["HISTORY"],
        data: {
          state: state,
          title: title,
          url: url
        }
      };
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE"], task);
      nativePushState.apply(this, arguments);
    };
  }
}

/***/ }),

/***/ "../rum-core/dist/es/common/patching/index.js":
/*!***********************************************!*\
  !*** .-core/dist/es/common/patching/index.js ***!
  \***********************************************/
/*! exports provided: patchAll, patchEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchAll", function() { return patchAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEventHandler", function() { return patchEventHandler; });
/* harmony import */ var _xhr_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhr-patch */ "../rum-core/dist/es/common/patching/xhr-patch.js");
/* harmony import */ var _fetch_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-patch */ "../rum-core/dist/es/common/patching/fetch-patch.js");
/* harmony import */ var _history_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-patch */ "../rum-core/dist/es/common/patching/history-patch.js");
/* harmony import */ var _event_target_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-target-patch */ "../rum-core/dist/es/common/patching/event-target-patch.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-handler */ "../rum-core/dist/es/common/event-handler.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");






var patchEventHandler = new _event_handler__WEBPACK_IMPORTED_MODULE_4__["default"]();
var alreadyPatched = false;

function patchAll() {
  if (!alreadyPatched) {
    alreadyPatched = true;
    Object(_xhr_patch__WEBPACK_IMPORTED_MODULE_0__["patchXMLHttpRequest"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["XMLHTTPREQUEST"], [event, task]);
    });
    Object(_fetch_patch__WEBPACK_IMPORTED_MODULE_1__["patchFetch"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["FETCH"], [event, task]);
    });
    Object(_history_patch__WEBPACK_IMPORTED_MODULE_2__["patchHistory"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["HISTORY"], [event, task]);
    });
    Object(_event_target_patch__WEBPACK_IMPORTED_MODULE_3__["patchEventTarget"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_TARGET"], [event, task]);
    });
  }

  return patchEventHandler;
}



/***/ }),

/***/ "../rum-core/dist/es/common/patching/patch-utils.js":
/*!*****************************************************!*\
  !*** .-core/dist/es/common/patching/patch-utils.js ***!
  \*****************************************************/
/*! exports provided: globalState, apmSymbol, patchMethod, XHR_IGNORE, XHR_SYNC, XHR_URL, XHR_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalState", function() { return globalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apmSymbol", function() { return apmSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchMethod", function() { return patchMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_IGNORE", function() { return XHR_IGNORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_SYNC", function() { return XHR_SYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_URL", function() { return XHR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_METHOD", function() { return XHR_METHOD; });
var globalState = {
  fetchInProgress: false
};
function apmSymbol(name) {
  return '__apm_symbol__' + name;
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

function attachOriginToPatched(patched, original) {
  patched[apmSymbol('OriginalDelegate')] = original;
}

function patchMethod(target, name, patchFn) {
  var proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = Object.getPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    proto = target;
  }

  var delegateName = apmSymbol(name);
  var delegate;

  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name];
    var desc = proto && Object.getOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
}
var XHR_IGNORE = apmSymbol('xhrIgnore');
var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

/***/ }),

/***/ "../rum-core/dist/es/common/patching/xhr-patch.js":
/*!***************************************************!*\
  !*** .-core/dist/es/common/patching/xhr-patch.js ***!
  \***************************************************/
/*! exports provided: patchXMLHttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchXMLHttpRequest", function() { return patchXMLHttpRequest; });
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");



var XHR_TASK = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["apmSymbol"])('xhrTask');
var XHR_LISTENER = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["apmSymbol"])('xhrListener');
var XHR_SCHEDULED = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["apmSymbol"])('xhrScheduled');
function patchXMLHttpRequest(callback) {
  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
  var oriAddListener = XMLHttpRequestPrototype[_constants__WEBPACK_IMPORTED_MODULE_2__["ADD_EVENT_LISTENER_STR"]];
  var oriRemoveListener = XMLHttpRequestPrototype[_constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EVENT_LISTENER_STR"]];

  if (!oriAddListener) {
    var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget) {
      var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
      oriAddListener = XMLHttpRequestEventTargetPrototype[_constants__WEBPACK_IMPORTED_MODULE_2__["ADD_EVENT_LISTENER_STR"]];
      oriRemoveListener = XMLHttpRequestEventTargetPrototype[_constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EVENT_LISTENER_STR"]];
    }
  }

  var READY_STATE_CHANGE = 'readystatechange';
  var LOAD = 'load';

  function invokeTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"], task);
  }

  function scheduleTask(task) {
    XMLHttpRequest[XHR_SCHEDULED] = false;
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"], task);
    var _task$data = task.data,
        aborted = _task$data.aborted,
        target = _task$data.target;

    if (!oriAddListener) {
      oriAddListener = target[_constants__WEBPACK_IMPORTED_MODULE_2__["ADD_EVENT_LISTENER_STR"]];
      oriRemoveListener = target[_constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EVENT_LISTENER_STR"]];
    }

    var listener = target[XHR_LISTENER];

    if (listener) {
      oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      oriRemoveListener.call(target, LOAD, listener);
    }

    var earlierEvent;

    var newListener = target[XHR_LISTENER] = function (_ref) {
      var type = _ref.type;

      if (earlierEvent) {
        if (earlierEvent != type) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["scheduleMacroTask"])(function () {
            if (task.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"]) {
              invokeTask(task);
            }
          });
        }
      } else {
        if (target.readyState === target.DONE) {
          if (!aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === _constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"]) {
            earlierEvent = type;
          }
        }
      }
    };

    oriAddListener.call(target, READY_STATE_CHANGE, newListener);
    oriAddListener.call(target, LOAD, newListener);
    var storedTask = target[XHR_TASK];

    if (!storedTask) {
      target[XHR_TASK] = task;
    }
  }

  function clearTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["CLEAR"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["CLEAR"], task);
    var data = task.data;
    data.aborted = true;
  }

  var openNative = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["patchMethod"])(XMLHttpRequestPrototype, 'open', function () {
    return function (self, args) {
      if (!self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_IGNORE"]]) {
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_METHOD"]] = args[0];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_URL"]] = args[1];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]] = args[2] === false;
      }

      return openNative.apply(self, args);
    };
  });
  var sendNative = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["patchMethod"])(XMLHttpRequestPrototype, 'send', function () {
    return function (self, args) {
      if (self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_IGNORE"]]) {
        return sendNative.apply(self, args);
      }

      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_2__["XMLHTTPREQUEST"],
        state: '',
        type: 'macroTask',
        data: {
          target: self,
          method: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_METHOD"]],
          sync: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]],
          url: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_URL"]],
          aborted: false
        }
      };
      scheduleTask(task);
      var result = sendNative.apply(self, args);
      XMLHttpRequest[XHR_SCHEDULED] = true;

      if (self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]]) {
        invokeTask(task);
      }

      return result;
    };
  });
  var abortNative = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["patchMethod"])(XMLHttpRequestPrototype, 'abort', function () {
    return function (self, args) {
      if (!self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_IGNORE"]]) {
        var task = self[XHR_TASK];

        if (task && typeof task.type === 'string') {
          if (task.data && task.data.aborted) {
            return;
          }

          clearTask(task);
        }
      }

      return abortNative.apply(self, args);
    };
  });
}

/***/ }),

/***/ "../rum-core/dist/es/common/polyfills.js":
/*!******************************************!*\
  !*** .-core/dist/es/common/polyfills.js ***!
  \******************************************/
/*! exports provided: Promise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return Promise; });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "../../node_modules/promise-polyfill/src/index.js");

var local = {};

if (typeof window !== 'undefined') {
  local = window;
} else if (typeof self !== 'undefined') {
  local = self;
}

var Promise = 'Promise' in local ? local.Promise : promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "../rum-core/dist/es/common/queue.js":
/*!**************************************!*\
  !*** .-core/dist/es/common/queue.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Queue = function () {
  function Queue(onFlush, opts) {
    if (opts === void 0) {
      opts = {};
    }

    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }

  var _proto = Queue.prototype;

  _proto._setTimer = function _setTimer() {
    var _this = this;

    this.timeoutId = setTimeout(function () {
      return _this.flush();
    }, this.flushInterval);
  };

  _proto._clear = function _clear() {
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.items = [];
  };

  _proto.flush = function flush() {
    this.onFlush(this.items);

    this._clear();
  };

  _proto.add = function add(item) {
    this.items.push(item);

    if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
      this.flush();
    } else {
      if (typeof this.timeoutId === 'undefined') {
        this._setTimer();
      }
    }
  };

  return Queue;
}();

/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

/***/ "../rum-core/dist/es/common/service-factory.js":
/*!************************************************!*\
  !*** .-core/dist/es/common/service-factory.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apm_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apm-server */ "../rum-core/dist/es/common/apm-server.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-service */ "../rum-core/dist/es/common/config-service.js");
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging-service */ "../rum-core/dist/es/common/logging-service.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");





var ServiceFactory = function () {
  function ServiceFactory() {
    this._serviceCreators = {};
    this._serviceInstances = {};
    this.initialized = false;
  }

  var _proto = ServiceFactory.prototype;

  _proto.registerCoreServices = function registerCoreServices() {
    var serviceFactory = this;
    this.registerServiceCreator('ConfigService', function () {
      return new _config_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
    });
    this.registerServiceCreator('LoggingService', function () {
      return new _logging_service__WEBPACK_IMPORTED_MODULE_2__["default"]({
        prefix: '[Elastic APM] '
      });
    });
    this.registerServiceCreator('ApmServer', function () {
      return new _apm_server__WEBPACK_IMPORTED_MODULE_0__["default"](serviceFactory.getService('ConfigService'), serviceFactory.getService('LoggingService'));
    });
  };

  _proto.init = function init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    var configService = this.getService('ConfigService');
    configService.init();
    var loggingService = this.getService('LoggingService');

    function setLogLevel(loggingService, configService) {
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
    }

    setLogLevel(loggingService, configService);
    configService.events.observe(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_CHANGE"], function () {
      setLogLevel(loggingService, configService);
    });
    var apmServer = this.getService('ApmServer');
    apmServer.init();
  };

  _proto.registerServiceCreator = function registerServiceCreator(name, creator) {
    this._serviceCreators[name] = creator;
  };

  _proto.registerServiceInstance = function registerServiceInstance(name, instance) {
    this._serviceInstances[name] = instance;
  };

  _proto.getService = function getService(name) {
    if (!this._serviceInstances[name]) {
      if (typeof this._serviceCreators[name] === 'function') {
        this._serviceInstances[name] = this._serviceCreators[name](this);
      } else {
        throw new Error('Can not get service, No creator for: ' + name);
      }
    }

    return this._serviceInstances[name];
  };

  return ServiceFactory;
}();

/* harmony default export */ __webpack_exports__["default"] = (ServiceFactory);

/***/ }),

/***/ "../rum-core/dist/es/common/throttle.js":
/*!*****************************************!*\
  !*** .-core/dist/es/common/throttle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, onThrottle, opts) {
  var context = this;
  var limit = opts.limit;
  var interval = opts.interval;
  var counter = 0;
  var timeoutId;
  return function () {
    counter++;

    if (typeof timeoutId === 'undefined') {
      timeoutId = setTimeout(function () {
        counter = 0;
        timeoutId = undefined;
      }, interval);
    }

    if (counter > limit && typeof onThrottle === 'function') {
      return onThrottle.apply(context, arguments);
    } else {
      return fn.apply(context, arguments);
    }
  };
}

/***/ }),

/***/ "../rum-core/dist/es/common/truncate.js":
/*!*****************************************!*\
  !*** .-core/dist/es/common/truncate.js ***!
  \*****************************************/
/*! exports provided: truncate, truncateModel, SPAN_MODEL, TRANSACTION_MODEL, ERROR_MODEL, METADATA_MODEL, RESPONSE_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateModel", function() { return truncateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPAN_MODEL", function() { return SPAN_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_MODEL", function() { return TRANSACTION_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MODEL", function() { return ERROR_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_MODEL", function() { return METADATA_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_MODEL", function() { return RESPONSE_MODEL; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");

var METADATA_MODEL = {
  service: {
    name: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
    version: true,
    agent: {
      version: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
    },
    environment: true
  },
  labels: {
    '*': true
  }
};
var RESPONSE_MODEL = {
  '*': true,
  headers: {
    '*': true
  }
};
var DESTINATION_MODEL = {
  address: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"]],
  service: {
    '*': [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
  }
};
var CONTEXT_MODEL = {
  user: {
    id: true,
    email: true,
    username: true
  },
  tags: {
    '*': true
  },
  http: {
    response: RESPONSE_MODEL
  },
  destination: DESTINATION_MODEL,
  response: RESPONSE_MODEL
};
var SPAN_MODEL = {
  name: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  parent_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  transaction_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  subtype: true,
  action: true,
  context: CONTEXT_MODEL
};
var TRANSACTION_MODEL = {
  name: true,
  parent_id: true,
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  span_count: {
    started: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
  },
  context: CONTEXT_MODEL
};
var ERROR_MODEL = {
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: true,
  transaction_id: true,
  parent_id: true,
  culprit: true,
  exception: {
    type: true
  },
  transaction: {
    type: true
  },
  context: CONTEXT_MODEL
};

function truncate(value, limit, required, placeholder) {
  if (limit === void 0) {
    limit = _constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"];
  }

  if (required === void 0) {
    required = false;
  }

  if (placeholder === void 0) {
    placeholder = 'N/A';
  }

  if (required && isEmpty(value)) {
    value = placeholder;
  }

  if (typeof value === 'string') {
    return value.substring(0, limit);
  }

  return value;
}

function isEmpty(value) {
  return value == null || value === '' || typeof value === 'undefined';
}

function replaceValue(target, key, currModel) {
  var value = truncate(target[key], currModel[0], currModel[1]);

  if (isEmpty(value)) {
    delete target[key];
    return;
  }

  target[key] = value;
}

function truncateModel(model, target, childTarget) {
  if (model === void 0) {
    model = {};
  }

  if (childTarget === void 0) {
    childTarget = target;
  }

  var keys = Object.keys(model);
  var emptyArr = [];

  var _loop = function _loop(i) {
    var currKey = keys[i];
    var currModel = model[currKey] === true ? emptyArr : model[currKey];

    if (!Array.isArray(currModel)) {
      truncateModel(currModel, target, childTarget[currKey]);
    } else {
      if (currKey === '*') {
        Object.keys(childTarget).forEach(function (key) {
          return replaceValue(childTarget, key, currModel);
        });
      } else {
        replaceValue(childTarget, currKey, currModel);
      }
    }
  };

  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }

  return target;
}



/***/ }),

/***/ "../rum-core/dist/es/common/url.js":
/*!************************************!*\
  !*** .-core/dist/es/common/url.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isDefaultPort(port, protocol) {
  switch (protocol) {
    case 'http:':
      return port === '80';

    case 'https:':
      return port === '443';
  }

  return true;
}

var RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], ['@', 'auth', 1], [NaN, 'host', undefined, 1]];
var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

var Url = function () {
  function Url(url) {
    var _this$extractProtocol = this.extractProtocol(url || ''),
        protocol = _this$extractProtocol.protocol,
        address = _this$extractProtocol.address,
        slashes = _this$extractProtocol.slashes;

    var relative = !protocol && !slashes;
    var location = this.getLocation();
    var instructions = RULES.slice();
    address = address.replace('\\', '/');

    if (!slashes) {
      instructions[2] = [NaN, 'path'];
    }

    var index;

    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var parse = instruction[0];
      var key = instruction[1];

      if (typeof parse === 'string') {
        index = address.indexOf(parse);

        if (~index) {
          var instLength = instruction[2];

          if (instLength) {
            var newIndex = address.lastIndexOf(parse);
            index = Math.max(index, newIndex);
            this[key] = address.slice(0, index);
            address = address.slice(index + instLength);
          } else {
            this[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else {
        this[key] = address;
        address = '';
      }

      this[key] = this[key] || (relative && instruction[3] ? location[key] || '' : '');
      if (instruction[3]) this[key] = this[key].toLowerCase();
    }

    if (relative && this.path.charAt(0) !== '/') {
      this.path = '/' + this.path;
    }

    this.relative = relative;
    this.protocol = protocol || location.protocol;
    this.hostname = this.host;
    this.port = '';

    if (/:\d+$/.test(this.host)) {
      var value = this.host.split(':');
      var port = value.pop();
      var hostname = value.join(':');

      if (isDefaultPort(port, this.protocol)) {
        this.host = hostname;
      } else {
        this.port = port;
      }

      this.hostname = hostname;
    }

    this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
    this.href = this.toString();
  }

  var _proto = Url.prototype;

  _proto.toString = function toString() {
    var result = this.protocol;
    result += '//';

    if (this.auth) {
      var REDACTED = '[REDACTED]';
      var userpass = this.auth.split(':');
      var username = userpass[0] ? REDACTED : '';
      var password = userpass[1] ? ':' + REDACTED : '';
      result += username + password + '@';
    }

    result += this.host;
    result += this.path;
    result += this.query;
    result += this.hash;
    return result;
  };

  _proto.getLocation = function getLocation() {
    var globalVar = {};

    if (typeof window !== 'undefined') {
      globalVar = window;
    }

    return globalVar.location;
  };

  _proto.extractProtocol = function extractProtocol(url) {
    var match = PROTOCOL_REGEX.exec(url);
    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      address: match[3]
    };
  };

  return Url;
}();

/* harmony default export */ __webpack_exports__["default"] = (Url);

/***/ }),

/***/ "../rum-core/dist/es/common/utils.js":
/*!**************************************!*\
  !*** .-core/dist/es/common/utils.js ***!
  \**************************************/
/*! exports provided: extend, merge, isUndefined, noop, baseExtend, bytesToHex, isCORSSupported, isObject, isFunction, isPlatformSupported, isDtHeaderValid, parseDtHeaderValue, getServerTimingInfo, getDtHeaderValue, getPageMetadata, getCurrentScript, getElasticScript, getTimeOrigin, generateRandomId, getEarliestSpan, getLatestNonXHRSpan, getDuration, getTime, now, rng, checkSameOrigin, scheduleMacroTask, scheduleMicroTask, setLabel, stripQueryStringFromUrl, find, removeInvalidChars, PERF, isPerfTimelineSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseExtend", function() { return baseExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToHex", function() { return bytesToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCORSSupported", function() { return isCORSSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlatformSupported", function() { return isPlatformSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDtHeaderValid", function() { return isDtHeaderValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDtHeaderValue", function() { return parseDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerTimingInfo", function() { return getServerTimingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDtHeaderValue", function() { return getDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageMetadata", function() { return getPageMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentScript", function() { return getCurrentScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElasticScript", function() { return getElasticScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOrigin", function() { return getTimeOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomId", function() { return generateRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarliestSpan", function() { return getEarliestSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestNonXHRSpan", function() { return getLatestNonXHRSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rng", function() { return rng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSameOrigin", function() { return checkSameOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleMacroTask", function() { return scheduleMacroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleMicroTask", function() { return scheduleMicroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLabel", function() { return setLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripQueryStringFromUrl", function() { return stripQueryStringFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInvalidChars", function() { return removeInvalidChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF", function() { return PERF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPerfTimelineSupported", function() { return isPerfTimelineSupported; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "../rum-core/dist/es/common/polyfills.js");

var slice = [].slice;
var PERF = typeof window !== 'undefined' && typeof performance !== 'undefined' ? performance : {};

function isCORSSupported() {
  var xhr = new window.XMLHttpRequest();
  return 'withCredentials' in xhr;
}

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToHex(buffer) {
  var hexOctets = [];

  for (var _i = 0; _i < buffer.length; _i++) {
    hexOctets.push(byteToHex[buffer[_i]]);
  }

  return hexOctets.join('');
}

var destination = new Uint8Array(16);

function rng() {
  if (typeof crypto != 'undefined' && typeof crypto.getRandomValues == 'function') {
    return crypto.getRandomValues(destination);
  } else if (typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function') {
    return msCrypto.getRandomValues(destination);
  }

  return destination;
}

function generateRandomId(length) {
  var id = bytesToHex(rng());
  return id.substr(0, length);
}

function getDtHeaderValue(span) {
  var dtVersion = '00';
  var dtUnSampledFlags = '00';
  var dtSampledFlags = '01';

  if (span && span.traceId && span.id && span.parentId) {
    var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
    var id = span.sampled ? span.id : span.parentId;
    return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
  }
}

function parseDtHeaderValue(value) {
  var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);

  if (parsed) {
    var flags = parsed[4];
    var sampled = flags !== '00';
    return {
      traceId: parsed[2],
      id: parsed[3],
      sampled: sampled
    };
  }
}

function isDtHeaderValid(header) {
  return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}

function checkSameOrigin(source, target) {
  var isSame = false;

  if (typeof target === 'string') {
    isSame = source === target;
  } else if (Array.isArray(target)) {
    target.forEach(function (t) {
      if (!isSame) {
        isSame = checkSameOrigin(source, t);
      }
    });
  }

  return isSame;
}

function isPlatformSupported() {
  return typeof window !== 'undefined' && typeof Array.prototype.forEach === 'function' && typeof JSON.stringify === 'function' && typeof Function.bind === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
}

function setLabel(key, value, obj) {
  if (!obj || !key) return;
  var skey = removeInvalidChars(key);
  var valueType = typeof value;

  if (value != undefined && valueType !== 'boolean' && valueType !== 'number') {
    value = String(value);
  }

  obj[skey] = value;
  return obj;
}

function getServerTimingInfo(serverTimingEntries) {
  if (serverTimingEntries === void 0) {
    serverTimingEntries = [];
  }

  var serverTimingInfo = [];
  var entrySeparator = ', ';
  var valueSeparator = ';';

  for (var _i2 = 0; _i2 < serverTimingEntries.length; _i2++) {
    var _serverTimingEntries$ = serverTimingEntries[_i2],
        name = _serverTimingEntries$.name,
        duration = _serverTimingEntries$.duration,
        description = _serverTimingEntries$.description;
    var timingValue = name;

    if (description) {
      timingValue += valueSeparator + 'desc=' + description;
    }

    if (duration) {
      timingValue += valueSeparator + 'dur=' + duration;
    }

    serverTimingInfo.push(timingValue);
  }

  return serverTimingInfo.join(entrySeparator);
}

function getTimeOrigin() {
  return PERF.timing.fetchStart;
}

function getPageMetadata() {
  return {
    page: {
      referer: document.referrer,
      url: window.location.href
    }
  };
}

function stripQueryStringFromUrl(url) {
  return url && url.split('?')[0];
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isFunction(value) {
  return typeof value === 'function';
}

function baseExtend(dst, objs, deep) {
  for (var i = 0, ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    var keys = Object.keys(obj);

    for (var j = 0, jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];

      if (deep && isObject(src)) {
        if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
        baseExtend(dst[key], [src], false);
      } else {
        dst[key] = src;
      }
    }
  }

  return dst;
}

function getElasticScript() {
  if (typeof document !== 'undefined') {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0, l = scripts.length; i < l; i++) {
      var sc = scripts[i];

      if (sc.src.indexOf('elastic') > 0) {
        return sc;
      }
    }
  }
}

function getCurrentScript() {
  if (typeof document !== 'undefined') {
    var currentScript = document.currentScript;

    if (!currentScript) {
      return getElasticScript();
    }

    return currentScript;
  }
}

function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}

function merge(dst) {
  return baseExtend(dst, slice.call(arguments, 1), true);
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function noop() {}

function find(array, predicate, thisArg) {
  if (array == null) {
    throw new TypeError('array is null or not defined');
  }

  var o = Object(array);
  var len = o.length >>> 0;

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var k = 0;

  while (k < len) {
    var kValue = o[k];

    if (predicate.call(thisArg, kValue, k, o)) {
      return kValue;
    }

    k++;
  }

  return undefined;
}

function removeInvalidChars(key) {
  return key.replace(/[.*"]/g, '_');
}

function getLatestNonXHRSpan(spans) {
  var latestSpan = null;

  for (var _i3 = 0; _i3 < spans.length; _i3++) {
    var span = spans[_i3];

    if (String(span.type).indexOf('external') === -1 && (!latestSpan || latestSpan._end < span._end)) {
      latestSpan = span;
    }
  }

  return latestSpan;
}

function getEarliestSpan(spans) {
  var earliestSpan = spans[0];

  for (var _i4 = 1; _i4 < spans.length; _i4++) {
    var span = spans[_i4];

    if (earliestSpan._start > span._start) {
      earliestSpan = span;
    }
  }

  return earliestSpan;
}

function now() {
  return PERF.now();
}

function getTime(time) {
  return typeof time === 'number' && time >= 0 ? time : now();
}

function getDuration(start, end) {
  if (isUndefined(end) || isUndefined(start)) {
    return null;
  }

  return parseFloat(end - start);
}

function scheduleMacroTask(callback) {
  setTimeout(callback, 0);
}

function scheduleMicroTask(callback) {
  _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(callback);
}

function isPerfTimelineSupported() {
  return typeof PERF.getEntriesByType === 'function';
}



/***/ }),

/***/ "../rum-core/dist/es/env.js":
/*!*****************************!*\
  !*** .-core/dist/es/env.js ***!
  \*****************************/
/*! exports provided: __DEV__ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return __DEV__; });
var __DEV__ = "development" !== 'production';



/***/ }),

/***/ "../rum-core/dist/es/error-logging/error-logging.js":
/*!*****************************************************!*\
  !*** .-core/dist/es/error-logging/error-logging.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stack_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack-trace */ "../rum-core/dist/es/error-logging/stack-trace.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/truncate */ "../rum-core/dist/es/common/truncate.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var IGNORE_KEYS = ['stack', 'message'];

function getErrorProperties(error) {
  var propertyFound = false;
  var properties = {};
  Object.keys(error).forEach(function (key) {
    if (IGNORE_KEYS.indexOf(key) >= 0) {
      return;
    }

    var val = error[key];

    if (val == null || typeof val === 'function') {
      return;
    }

    if (typeof val === 'object') {
      if (typeof val.toISOString !== 'function') return;
      val = val.toISOString();
    }

    properties[key] = val;
    propertyFound = true;
  });

  if (propertyFound) {
    return properties;
  }
}

var ErrorLogging = function () {
  function ErrorLogging(apmServer, configService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._transactionService = transactionService;
  }

  var _proto = ErrorLogging.prototype;

  _proto.createErrorDataModel = function createErrorDataModel(errorEvent) {
    var frames = Object(_stack_trace__WEBPACK_IMPORTED_MODULE_0__["createStackTraces"])(errorEvent);
    var filteredFrames = Object(_stack_trace__WEBPACK_IMPORTED_MODULE_0__["filterInvalidFrames"])(frames);
    var culprit = '(inline script)';
    var lastFrame = filteredFrames[filteredFrames.length - 1];

    if (lastFrame && lastFrame.filename) {
      culprit = lastFrame.filename;
    }

    var message = errorEvent.message,
        error = errorEvent.error;
    var errorMessage = message;
    var errorType = '';
    var errorContext = {};

    if (error && typeof error === 'object') {
      errorMessage = errorMessage || error.message;
      errorType = error.name;
      var customProperties = getErrorProperties(error);

      if (customProperties) {
        errorContext.custom = customProperties;
      }
    }

    if (!errorType) {
      if (errorMessage && errorMessage.indexOf(':') > -1) {
        errorType = errorMessage.split(':')[0];
      }
    }

    var currentTransaction = this._transactionService.getCurrentTransaction();

    var transactionContext = currentTransaction ? currentTransaction.context : {};

    var _this$_configService$ = this._configService.get('context'),
        tags = _this$_configService$.tags,
        configContext = _objectWithoutPropertiesLoose(_this$_configService$, ["tags"]);

    var pageMetadata = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getPageMetadata"])();
    var context = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, pageMetadata, transactionContext, configContext, errorContext);
    var errorObject = {
      id: Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomId"])(),
      culprit: culprit,
      exception: {
        message: errorMessage,
        stacktrace: filteredFrames,
        type: errorType
      },
      context: context
    };

    if (currentTransaction) {
      errorObject = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(errorObject, {
        trace_id: currentTransaction.traceId,
        parent_id: currentTransaction.id,
        transaction_id: currentTransaction.id,
        transaction: {
          type: currentTransaction.type,
          sampled: currentTransaction.sampled
        }
      });
    }

    return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_2__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_2__["ERROR_MODEL"], errorObject);
  };

  _proto.logErrorEvent = function logErrorEvent(errorEvent) {
    if (typeof errorEvent === 'undefined') {
      return;
    }

    var errorObject = this.createErrorDataModel(errorEvent);

    if (typeof errorObject.exception.message === 'undefined') {
      return;
    }

    this._apmServer.addError(errorObject);
  };

  _proto.registerListeners = function registerListeners() {
    var _this = this;

    window.addEventListener('error', function (errorEvent) {
      return _this.logErrorEvent(errorEvent);
    });
    window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {
      return _this.logPromiseEvent(promiseRejectionEvent);
    });
  };

  _proto.logPromiseEvent = function logPromiseEvent(promiseRejectionEvent) {
    var prefix = 'Unhandled promise rejection: ';
    var reason = promiseRejectionEvent.reason;

    if (reason == null) {
      this.logError(prefix + '<no reason specified>');
    } else if (typeof reason.message === 'string') {
      this.logError({
        message: prefix + reason.message,
        stack: reason.stack ? reason.stack : null
      });
    } else if (typeof reason !== 'object') {
      this.logError(prefix + reason);
    }
  };

  _proto.logError = function logError(messageOrError) {
    var errorEvent = {};

    if (typeof messageOrError === 'string') {
      errorEvent.message = messageOrError;
    } else {
      errorEvent.error = messageOrError;
    }

    return this.logErrorEvent(errorEvent);
  };

  return ErrorLogging;
}();

/* harmony default export */ __webpack_exports__["default"] = (ErrorLogging);

/***/ }),

/***/ "../rum-core/dist/es/error-logging/index.js":
/*!*********************************************!*\
  !*** .-core/dist/es/error-logging/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "../rum-core/dist/es/error-logging/error-logging.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  ErrorLogging: _error_logging__WEBPACK_IMPORTED_MODULE_0__["default"],
  registerServices: function registerServices(serviceFactory) {
    serviceFactory.registerServiceCreator('ErrorLogging', function () {
      var apmService = serviceFactory.getService('ApmServer');
      var configService = serviceFactory.getService('ConfigService');
      var transactionService = serviceFactory.getService('TransactionService');
      return new _error_logging__WEBPACK_IMPORTED_MODULE_0__["default"](apmService, configService, transactionService);
    });
  }
});

/***/ }),

/***/ "../rum-core/dist/es/error-logging/stack-trace.js":
/*!***************************************************!*\
  !*** .-core/dist/es/error-logging/stack-trace.js ***!
  \***************************************************/
/*! exports provided: createStackTraces, filterInvalidFrames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackTraces", function() { return createStackTraces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInvalidFrames", function() { return filterInvalidFrames; });
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ "../../node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);


function filePathToFileName(fileUrl) {
  var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

  if (fileUrl.indexOf(origin) > -1) {
    fileUrl = fileUrl.replace(origin + '/', '');
  }

  return fileUrl;
}

function cleanFilePath(filePath) {
  if (filePath === void 0) {
    filePath = '';
  }

  if (filePath === '<anonymous>') {
    filePath = '';
  }

  return filePath;
}

function isFileInline(fileUrl) {
  if (fileUrl) {
    return window.location.href.indexOf(fileUrl) === 0;
  }

  return false;
}

function normalizeStackFrames(stackFrames) {
  return stackFrames.map(function (frame) {
    if (frame.functionName) {
      frame.functionName = normalizeFunctionName(frame.functionName);
    }

    return frame;
  });
}

function normalizeFunctionName(fnName) {
  var parts = fnName.split('/');

  if (parts.length > 1) {
    fnName = ['Object', parts[parts.length - 1]].join('.');
  } else {
    fnName = parts[0];
  }

  fnName = fnName.replace(/.<$/gi, '.<anonymous>');
  fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');
  parts = fnName.split('.');

  if (parts.length > 1) {
    fnName = parts[parts.length - 1];
  } else {
    fnName = parts[0];
  }

  return fnName;
}

function createStackTraces(errorEvent) {
  var error = errorEvent.error,
      filename = errorEvent.filename,
      lineno = errorEvent.lineno,
      colno = errorEvent.colno;
  var stackTraces = [];

  if (error) {
    try {
      stackTraces = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(error);
    } catch (e) {}
  }

  if (stackTraces.length === 0) {
    stackTraces = [{
      fileName: filename,
      lineNumber: lineno,
      columnNumber: colno
    }];
  }

  var normalizedStackTraces = normalizeStackFrames(stackTraces);
  return normalizedStackTraces.map(function (stack) {
    var fileName = stack.fileName,
        lineNumber = stack.lineNumber,
        columnNumber = stack.columnNumber,
        _stack$functionName = stack.functionName,
        functionName = _stack$functionName === void 0 ? '<anonymous>' : _stack$functionName;

    if (!fileName && !lineNumber) {
      return {};
    }

    if (!columnNumber && !lineNumber) {
      return {};
    }

    var filePath = cleanFilePath(fileName);
    var cleanedFileName = filePathToFileName(filePath);

    if (isFileInline(filePath)) {
      cleanedFileName = '(inline script)';
    }

    return {
      abs_path: fileName,
      filename: cleanedFileName,
      function: functionName,
      lineno: lineNumber,
      colno: columnNumber
    };
  });
}
function filterInvalidFrames(frames) {
  return frames.filter(function (_ref) {
    var filename = _ref.filename,
        lineno = _ref.lineno;
    return typeof filename !== 'undefined' && typeof lineno !== 'undefined';
  });
}

/***/ }),

/***/ "../rum-core/dist/es/index.js":
/*!*******************************!*\
  !*** .-core/dist/es/index.js ***!
  \*******************************/
/*! exports provided: createServiceFactory, ServiceFactory, patchAll, patchEventHandler, isPlatformSupported, ERROR, PAGE_LOAD, getInstrumentationFlags, createTracer, scheduleMicroTask, scheduleMacroTask, afterFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServiceFactory", function() { return createServiceFactory; });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "../rum-core/dist/es/error-logging/index.js");
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-monitoring */ "../rum-core/dist/es/performance-monitoring/index.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/service-factory */ "../rum-core/dist/es/common/service-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatformSupported", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["isPlatformSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMicroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMacroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMacroTask"]; });

/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/patching */ "../rum-core/dist/es/common/patching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchAll", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchEventHandler", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchEventHandler"]; });

/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOAD", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]; });

/* harmony import */ var _common_instrument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/instrument */ "../rum-core/dist/es/common/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstrumentationFlags", function() { return _common_instrument__WEBPACK_IMPORTED_MODULE_6__["getInstrumentationFlags"]; });

/* harmony import */ var _common_after_frame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/after-frame */ "../rum-core/dist/es/common/after-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterFrame", function() { return _common_after_frame__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _opentracing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opentracing */ "../rum-core/dist/es/opentracing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTracer", function() { return _opentracing__WEBPACK_IMPORTED_MODULE_8__["createTracer"]; });











function createServiceFactory() {
  var serviceFactory = new _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["default"]();
  serviceFactory.registerCoreServices();
  _error_logging__WEBPACK_IMPORTED_MODULE_0__["default"].registerServices(serviceFactory);
  _performance_monitoring__WEBPACK_IMPORTED_MODULE_1__["default"].registerServices(serviceFactory);
  return serviceFactory;
}



/***/ }),

/***/ "../rum-core/dist/es/opentracing/index.js":
/*!*******************************************!*\
  !*** .-core/dist/es/opentracing/index.js ***!
  \*******************************************/
/*! exports provided: Span, Tracer, createTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTracer", function() { return createTracer; });
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracer */ "../rum-core/dist/es/opentracing/tracer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tracer", function() { return _tracer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/opentracing/span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _span__WEBPACK_IMPORTED_MODULE_1__["default"]; });




function createTracer(serviceFactory) {
  var performanceMonitoring = serviceFactory.getService('PerformanceMonitoring');
  var transactionService = serviceFactory.getService('TransactionService');
  var errorLogging = serviceFactory.getService('ErrorLogging');
  var loggingService = serviceFactory.getService('LoggingService');
  return new _tracer__WEBPACK_IMPORTED_MODULE_0__["default"](performanceMonitoring, transactionService, loggingService, errorLogging);
}



/***/ }),

/***/ "../rum-core/dist/es/opentracing/span.js":
/*!******************************************!*\
  !*** .-core/dist/es/opentracing/span.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/span */ "../../node_modules/opentracing/lib/span.js");
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance-monitoring/transaction */ "../rum-core/dist/es/performance-monitoring/transaction.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var Span = function (_otSpan) {
  _inheritsLoose(Span, _otSpan);

  function Span(tracer, span) {
    var _this;

    _this = _otSpan.call(this) || this;
    _this.__tracer = tracer;
    _this.span = span;
    _this.isTransaction = span instanceof _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_2__["default"];
    _this.spanContext = {
      id: span.id,
      traceId: span.traceId,
      sampled: span.sampled
    };
    return _this;
  }

  var _proto = Span.prototype;

  _proto._context = function _context() {
    return this.spanContext;
  };

  _proto._tracer = function _tracer() {
    return this.__tracer;
  };

  _proto._setOperationName = function _setOperationName(name) {
    this.span.name = name;
  };

  _proto._addTags = function _addTags(keyValuePairs) {
    var tags = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, keyValuePairs);

    if (tags.type) {
      this.span.type = tags.type;
      delete tags.type;
    }

    if (this.isTransaction) {
      var userId = tags['user.id'];
      var username = tags['user.username'];
      var email = tags['user.email'];

      if (userId || username || email) {
        this.span.addContext({
          user: {
            id: userId,
            username: username,
            email: email
          }
        });
        delete tags['user.id'];
        delete tags['user.username'];
        delete tags['user.email'];
      }
    }

    this.span.addLabels(tags);
  };

  _proto._log = function _log(log, timestamp) {
    if (log.event === 'error') {
      if (log['error.object']) {
        this.__tracer.errorLogging.logError(log['error.object']);
      } else if (log.message) {
        this.__tracer.errorLogging.logError(log.message);
      }
    }
  };

  _proto._finish = function _finish(finishTime) {
    this.span.end();

    if (finishTime) {
      this.span._end = finishTime - Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getTimeOrigin"])();
    }
  };

  return Span;
}(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__["Span"]);

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "../rum-core/dist/es/opentracing/tracer.js":
/*!********************************************!*\
  !*** .-core/dist/es/opentracing/tracer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/tracer */ "../../node_modules/opentracing/lib/tracer.js");
/* harmony import */ var opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! opentracing/lib/constants */ "../../node_modules/opentracing/lib/constants.js");
/* harmony import */ var opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentracing/lib/span */ "../../node_modules/opentracing/lib/span.js");
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env */ "../rum-core/dist/es/env.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/opentracing/span.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}








var Tracer = function (_otTracer) {
  _inheritsLoose(Tracer, _otTracer);

  function Tracer(performanceMonitoring, transactionService, loggingService, errorLogging) {
    var _this;

    _this = _otTracer.call(this) || this;
    _this.performanceMonitoring = performanceMonitoring;
    _this.transactionService = transactionService;
    _this.loggingService = loggingService;
    _this.errorLogging = errorLogging;
    return _this;
  }

  var _proto = Tracer.prototype;

  _proto._startSpan = function _startSpan(name, options) {
    var spanOptions = {
      managed: true
    };

    if (options) {
      spanOptions.timestamp = options.startTime;

      if (options.childOf) {
        spanOptions.parentId = options.childOf.id;
      } else if (options.references && options.references.length > 0) {
        if (options.references.length > 1) {
          if (_env__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
            this.loggingService.debug('Elastic APM OpenTracing: Unsupported number of references, only the first childOf reference will be recorded.');
          }
        }

        var childRef = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["find"])(options.references, function (ref) {
          return ref.type() === opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["REFERENCE_CHILD_OF"];
        });

        if (childRef) {
          spanOptions.parentId = childRef.referencedContext().id;
        }
      }
    }

    var span;
    var currentTransaction = this.transactionService.getCurrentTransaction();

    if (currentTransaction) {
      span = this.transactionService.startSpan(name, undefined, spanOptions);
    } else {
      span = this.transactionService.startTransaction(name, undefined, spanOptions);
    }

    if (!span) {
      return new opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__["Span"]();
    }

    if (spanOptions.timestamp) {
      span._start = spanOptions.timestamp - Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getTimeOrigin"])();
    }

    var otSpan = new _span__WEBPACK_IMPORTED_MODULE_5__["default"](this, span);

    if (options && options.tags) {
      otSpan.addTags(options.tags);
    }

    return otSpan;
  };

  _proto._inject = function _inject(spanContext, format, carrier) {
    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_TEXT_MAP"]:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_HTTP_HEADERS"]:
        this.performanceMonitoring.injectDtHeader(spanContext, carrier);
        break;

      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_BINARY"]:
        if (_env__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }

        break;
    }
  };

  _proto._extract = function _extract(format, carrier) {
    var ctx;

    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_TEXT_MAP"]:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_HTTP_HEADERS"]:
        ctx = this.performanceMonitoring.extractDtHeader(carrier);
        break;

      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_BINARY"]:
        if (_env__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }

        break;
    }

    if (!ctx) {
      ctx = null;
    }

    return ctx;
  };

  return Tracer;
}(opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__["Tracer"]);

/* harmony default export */ __webpack_exports__["default"] = (Tracer);

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/breakdown.js":
/*!**********************************************************!*\
  !*** .-core/dist/es/performance-monitoring/breakdown.js ***!
  \**********************************************************/
/*! exports provided: captureBreakdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureBreakdown", function() { return captureBreakdown; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");


var pageLoadBreakdowns = [['domainLookupStart', 'domainLookupEnd', 'DNS'], ['connectStart', 'connectEnd', 'TCP'], ['requestStart', 'responseStart', 'Request'], ['responseStart', 'responseEnd', 'Response'], ['domLoading', 'domComplete', 'Processing'], ['loadEventStart', 'loadEventEnd', 'Load']];

function getValue(value) {
  return {
    value: value
  };
}

function calculateSelfTime(transaction) {
  var spans = transaction.spans,
      _start = transaction._start,
      _end = transaction._end;

  if (spans.length === 0) {
    return transaction.duration();
  }

  spans.sort(function (span1, span2) {
    return span1._start - span2._start;
  });
  var span = spans[0];
  var spanEnd = span._end;
  var spanStart = span._start;
  var lastContinuousEnd = spanEnd;
  var selfTime = spanStart - _start;

  for (var i = 1; i < spans.length; i++) {
    span = spans[i];
    spanStart = span._start;
    spanEnd = span._end;

    if (spanStart > lastContinuousEnd) {
      selfTime += spanStart - lastContinuousEnd;
      lastContinuousEnd = spanEnd;
    } else if (spanEnd > lastContinuousEnd) {
      lastContinuousEnd = spanEnd;
    }
  }

  if (lastContinuousEnd < _end) {
    selfTime += _end - lastContinuousEnd;
  }

  return selfTime;
}

function groupSpans(transaction) {
  var spanMap = {};
  var transactionSelfTime = calculateSelfTime(transaction);
  spanMap['app'] = {
    count: 1,
    duration: transactionSelfTime
  };
  var spans = transaction.spans;

  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var duration = span.duration();

    if (duration === 0 || duration == null) {
      continue;
    }

    var type = span.type,
        subType = span.subType;
    var key = type;

    if (subType) {
      key += '.' + subType;
    }

    if (!spanMap[key]) {
      spanMap[key] = {
        duration: 0,
        count: 0
      };
    }

    spanMap[key].count++;
    spanMap[key].duration += duration;
  }

  return spanMap;
}

function getSpanBreakdown(transactionDetails, _ref) {
  var details = _ref.details,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      duration = _ref.duration;
  return {
    transaction: transactionDetails,
    span: details,
    samples: {
      'span.self_time.count': getValue(count),
      'span.self_time.sum.us': getValue(duration)
    }
  };
}

function captureBreakdown(transaction, timings) {
  if (timings === void 0) {
    timings = _common_utils__WEBPACK_IMPORTED_MODULE_0__["PERF"].timing;
  }

  var breakdowns = [];
  var trDuration = transaction.duration();
  var name = transaction.name,
      type = transaction.type,
      sampled = transaction.sampled;
  var transactionDetails = {
    name: name,
    type: type
  };
  breakdowns.push({
    transaction: transactionDetails,
    samples: {
      'transaction.duration.count': getValue(1),
      'transaction.duration.sum.us': getValue(trDuration),
      'transaction.breakdown.count': getValue(sampled ? 1 : 0)
    }
  });

  if (!sampled) {
    return breakdowns;
  }

  if (type === _common_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"] && timings) {
    for (var i = 0; i < pageLoadBreakdowns.length; i++) {
      var current = pageLoadBreakdowns[i];
      var start = timings[current[0]];
      var end = timings[current[1]];
      var duration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(start, end);

      if (duration === 0 || duration == null) {
        continue;
      }

      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: current[2]
        },
        duration: duration
      }));
    }
  } else {
    var spanMap = groupSpans(transaction);
    Object.keys(spanMap).forEach(function (key) {
      var _key$split = key.split('.'),
          type = _key$split[0],
          subtype = _key$split[1];

      var _spanMap$key = spanMap[key],
          duration = _spanMap$key.duration,
          count = _spanMap$key.count;
      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: type,
          subtype: subtype
        },
        duration: duration,
        count: count
      }));
    });
  }

  return breakdowns;
}

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/capture-navigation.js":
/*!*******************************************************************!*\
  !*** .-core/dist/es/performance-monitoring/capture-navigation.js ***!
  \*******************************************************************/
/*! exports provided: captureNavigation, createNavigationTimingSpans, createResourceTimingSpans, createUserTimingSpans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureNavigation", function() { return captureNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigationTimingSpans", function() { return createNavigationTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceTimingSpans", function() { return createResourceTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserTimingSpans", function() { return createUserTimingSpans; });
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/performance-monitoring/span.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");



var eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];

function shouldCreateSpan(start, end, trStart, trEnd, baseTime) {
  if (baseTime === void 0) {
    baseTime = 0;
  }

  return typeof start === 'number' && typeof end === 'number' && start >= baseTime && end > start && start - baseTime >= trStart && end - baseTime <= trEnd && end - start < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"] && start - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"] && end - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"];
}

function createNavigationTimingSpans(timings, baseTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < eventPairs.length; i++) {
    var start = timings[eventPairs[i][0]];
    var end = timings[eventPairs[i][1]];

    if (!shouldCreateSpan(start, end, trStart, trEnd, baseTime)) {
      continue;
    }

    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](eventPairs[i][2], 'hard-navigation.browser-timing');

    if (eventPairs[i][0] === 'requestStart') {
      span.pageResponse = true;
    }

    span._start = start - baseTime;
    span.end(end - baseTime);
    spans.push(span);
  }

  return spans;
}

function createResourceTimingSpan(resourceTimingEntry) {
  var name = resourceTimingEntry.name,
      initiatorType = resourceTimingEntry.initiatorType,
      startTime = resourceTimingEntry.startTime,
      responseEnd = resourceTimingEntry.responseEnd;
  var kind = 'resource';

  if (initiatorType) {
    kind += '.' + initiatorType;
  }

  var spanName = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["stripQueryStringFromUrl"])(name);
  var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](spanName, kind);
  span._start = startTime;
  span.end(responseEnd, {
    url: name,
    entry: resourceTimingEntry
  });
  return span;
}

function createResourceTimingSpans(entries, filterUrls, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
        initiatorType = _entries$i.initiatorType,
        name = _entries$i.name,
        startTime = _entries$i.startTime,
        responseEnd = _entries$i.responseEnd;

    if (initiatorType === 'xmlhttprequest' || initiatorType === 'fetch' || !name) {
      continue;
    }

    if (_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_INITIATOR_TYPES"].indexOf(initiatorType) !== -1) {
      if (!shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) {
        continue;
      }

      spans.push(createResourceTimingSpan(entries[i]));
    } else {
      if (initiatorType != null) {
        continue;
      }

      var foundAjaxReq = false;

      for (var j = 0; j < filterUrls.length; j++) {
        var idx = name.lastIndexOf(filterUrls[j]);

        if (idx > -1 && idx === name.length - filterUrls[j].length) {
          foundAjaxReq = true;
          break;
        }
      }

      if (!foundAjaxReq && shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) {
        spans.push(createResourceTimingSpan(entries[i]));
      }
    }
  }

  return spans;
}

function createUserTimingSpans(entries, trStart, trEnd) {
  var userTimingSpans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i2 = entries[i],
        name = _entries$i2.name,
        startTime = _entries$i2.startTime,
        duration = _entries$i2.duration;
    var end = startTime + duration;

    if (duration <= _common_constants__WEBPACK_IMPORTED_MODULE_1__["USER_TIMING_THRESHOLD"] || !shouldCreateSpan(startTime, end, trStart, trEnd)) {
      continue;
    }

    var kind = 'app';
    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](name, kind);
    span._start = startTime;
    span.end(end);
    userTimingSpans.push(span);
  }

  return userTimingSpans;
}

function getApiSpanNames(_ref) {
  var spans = _ref.spans;
  var apiCalls = [];

  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];

    if (span.type === 'external' && span.subType === 'http') {
      apiCalls.push(span.name.split(' ')[1]);
    }
  }

  return apiCalls;
}

var navigationTimingKeys = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'secureConnectionStart', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];

function getNavigationTimingMarks() {
  var timing = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].timing;
  var fetchStart = timing.fetchStart;
  var marks = {};
  navigationTimingKeys.forEach(function (timingKey) {
    var m = timing[timingKey];

    if (m && m >= fetchStart) {
      marks[timingKey] = m - fetchStart;
    }
  });
  return marks;
}

function getPageLoadMarks() {
  var marks = getNavigationTimingMarks();
  var agent = {
    timeToFirstByte: marks.responseStart,
    domInteractive: marks.domInteractive,
    domComplete: marks.domComplete
  };
  return {
    navigationTiming: marks,
    agent: agent
  };
}

function captureNavigation(transaction) {
  if (!transaction.captureTimings) {
    return;
  }

  var trEnd = transaction._end;

  if (transaction.type === _common_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"]) {
    if (transaction.marks && transaction.marks.custom) {
      var customMarks = transaction.marks.custom;
      Object.keys(customMarks).forEach(function (key) {
        customMarks[key] += transaction._start;
      });
    }

    var trStart = 0;
    transaction._start = trStart;
    var timings = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].timing;
    createNavigationTimingSpans(timings, timings.fetchStart, trStart, trEnd).forEach(function (span) {
      span.traceId = transaction.traceId;
      span.sampled = transaction.sampled;

      if (span.pageResponse && transaction.options.pageLoadSpanId) {
        span.id = transaction.options.pageLoadSpanId;
      }

      transaction.spans.push(span);
    });
    transaction.addMarks(getPageLoadMarks());
  }

  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["isPerfTimelineSupported"])()) {
    var _trStart = transaction._start;
    var resourceEntries = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE"]);
    var apiCalls = getApiSpanNames(transaction);
    createResourceTimingSpans(resourceEntries, apiCalls, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
    var userEntries = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__["MEASURE"]);
    createUserTimingSpans(userEntries, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
  }
}



/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/index.js":
/*!******************************************************!*\
  !*** .-core/dist/es/performance-monitoring/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance-monitoring */ "../rum-core/dist/es/performance-monitoring/performance-monitoring.js");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-service */ "../rum-core/dist/es/performance-monitoring/transaction-service.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  PerformanceMonitoring: _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__["default"],
  registerServices: function registerServices(serviceFactory) {
    serviceFactory.registerServiceCreator('TransactionService', function () {
      var configService = serviceFactory.getService('ConfigService');
      var loggingService = serviceFactory.getService('LoggingService');
      return new _transaction_service__WEBPACK_IMPORTED_MODULE_1__["default"](loggingService, configService);
    });
    serviceFactory.registerServiceCreator('PerformanceMonitoring', function () {
      var configService = serviceFactory.getService('ConfigService');
      var loggingService = serviceFactory.getService('LoggingService');
      var apmService = serviceFactory.getService('ApmServer');
      var transactionService = serviceFactory.getService('TransactionService');
      return new _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__["default"](apmService, configService, loggingService, transactionService);
    });
  }
});

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/perf-entry-recorder.js":
/*!********************************************************************!*\
  !*** .-core/dist/es/performance-monitoring/perf-entry-recorder.js ***!
  \********************************************************************/
/*! exports provided: captureObserverEntries, PerfEntryRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureObserverEntries", function() { return captureObserverEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfEntryRecorder", function() { return PerfEntryRecorder; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/performance-monitoring/span.js");




function createLongTaskSpans(longtasks) {
  var spans = [];

  for (var i = 0; i < longtasks.length; i++) {
    var _longtasks$i = longtasks[i],
        name = _longtasks$i.name,
        startTime = _longtasks$i.startTime,
        duration = _longtasks$i.duration,
        attribution = _longtasks$i.attribution;
    var end = startTime + duration;
    var kind = _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"];
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]("Longtask(" + name + ")", kind, {
      startTime: startTime
    });

    if (attribution.length > 0) {
      var _attribution$ = attribution[0],
          _name = _attribution$.name,
          containerType = _attribution$.containerType,
          containerName = _attribution$.containerName,
          containerId = _attribution$.containerId;
      var customContext = {
        attribution: _name,
        type: containerType
      };

      if (containerName) {
        customContext.name = containerName;
      }

      if (containerId) {
        customContext.id = containerId;
      }

      span.addContext({
        custom: customContext
      });
    }

    span.end(end);
    spans.push(span);
  }

  return spans;
}

function captureObserverEntries(list, _ref) {
  var capturePaint = _ref.capturePaint;
  var longtaskEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"]);
  var longTaskSpans = createLongTaskSpans(longtaskEntries);
  var result = {
    spans: longTaskSpans,
    marks: {}
  };

  if (!capturePaint) {
    return result;
  }

  var lcpEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LARGEST_CONTENTFUL_PAINT"]);
  var lastLcpEntry = lcpEntries[lcpEntries.length - 1];

  if (lastLcpEntry) {
    var lcp = lastLcpEntry.renderTime || lastLcpEntry.loadTimes;
    result.marks.largestContentfulPaint = lcp;
  }

  var timing = _common_utils__WEBPACK_IMPORTED_MODULE_1__["PERF"].timing;
  var unloadDiff = timing.fetchStart - timing.navigationStart;
  var fcpEntry = list.getEntriesByName(_common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_CONTENTFUL_PAINT"])[0];

  if (fcpEntry) {
    var fcp = unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime;
    result.marks.firstContentfulPaint = fcp;
  }

  return result;
}
var PerfEntryRecorder = function () {
  function PerfEntryRecorder(callback) {
    this.po = {
      observe: _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
      disconnect: _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
    };

    if (window.PerformanceObserver) {
      this.po = new PerformanceObserver(callback);
    }
  }

  var _proto = PerfEntryRecorder.prototype;

  _proto.start = function start(type) {
    try {
      var buffered = true;

      if (type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"]) {
        buffered = false;
      }

      this.po.observe({
        type: type,
        buffered: buffered
      });
    } catch (_) {}
  };

  _proto.stop = function stop() {
    this.po.disconnect();
  };

  return PerfEntryRecorder;
}();

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/performance-monitoring.js":
/*!***********************************************************************!*\
  !*** .-core/dist/es/performance-monitoring/performance-monitoring.js ***!
  \***********************************************************************/
/*! exports provided: groupSmallContinuouslySimilarSpans, adjustTransactionSpans, checkBrowserResponsiveness, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupSmallContinuouslySimilarSpans", function() { return groupSmallContinuouslySimilarSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustTransactionSpans", function() { return adjustTransactionSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBrowserResponsiveness", function() { return checkBrowserResponsiveness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformanceMonitoring; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/url */ "../rum-core/dist/es/common/url.js");
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/patching */ "../rum-core/dist/es/common/patching/index.js");
/* harmony import */ var _common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/patching/patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/truncate */ "../rum-core/dist/es/common/truncate.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "../rum-core/dist/es/env.js");







var BROWSER_RESPONSIVENESS_BUFFER = 3;
var SIMILAR_SPAN_TO_TRANSACTION_RATIO = 0.05;
var TRANSACTION_DURATION_THRESHOLD = 60000;
function groupSmallContinuouslySimilarSpans(originalSpans, transDuration, threshold) {
  originalSpans.sort(function (spanA, spanB) {
    return spanA._start - spanB._start;
  });
  var spans = [];
  var lastCount = 1;
  originalSpans.forEach(function (span, index) {
    if (spans.length === 0) {
      spans.push(span);
    } else {
      var lastSpan = spans[spans.length - 1];
      var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subType === span.subType && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
      var isLastSpan = originalSpans.length === index + 1;

      if (isContinuouslySimilar) {
        lastCount++;
        lastSpan._end = span._end;
      }

      if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
        lastSpan.name = lastCount + 'x ' + lastSpan.name;
        lastCount = 1;
      }

      if (!isContinuouslySimilar) {
        spans.push(span);
      }
    }
  });
  return spans;
}
function adjustTransactionSpans(transaction) {
  if (transaction.sampled) {
    var filterdSpans = transaction.spans.filter(function (span) {
      return span.duration() > 0 && span._start >= transaction._start && span._end <= transaction._end;
    });

    if (transaction.isManaged()) {
      var duration = transaction.duration();
      var similarSpans = groupSmallContinuouslySimilarSpans(filterdSpans, duration, SIMILAR_SPAN_TO_TRANSACTION_RATIO);
      transaction.spans = similarSpans;
    } else {
      transaction.spans = filterdSpans;
    }
  } else {
    transaction.resetSpans();
  }

  return transaction;
}
function checkBrowserResponsiveness(transaction, interval, buffer) {
  var counter = transaction.browserResponsivenessCounter;
  var duration = transaction.duration();
  var expectedCount = Math.floor(duration / interval);
  return counter + buffer >= expectedCount;
}

var PerformanceMonitoring = function () {
  function PerformanceMonitoring(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._transactionService = transactionService;
  }

  var _proto = PerformanceMonitoring.prototype;

  _proto.init = function init(flags) {
    var _this = this;

    if (flags === void 0) {
      flags = {};
    }

    this._configService.events.observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["TRANSACTION_END"] + _common_constants__WEBPACK_IMPORTED_MODULE_4__["AFTER_EVENT"], function (tr) {
      var payload = _this.createTransactionPayload(tr);

      if (payload) {
        _this._apmServer.addTransaction(payload);
      }
    });

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"], this.getHistorySub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"], this.getXHRSub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"], this.getFetchSub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"], this.getEventTargetSub());
    }
  };

  _proto.getEventTargetSub = function getEventTargetSub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["SCHEDULE"] && task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"] && task.eventType === 'click') {
        var target = task.target;
        var name = target.getAttribute('name');
        var additionalInfo = '';

        if (name) {
          additionalInfo = "[\"" + name + "\"]";
        }

        var tagName = target.tagName.toLowerCase();
        var tr = transactionService.startTransaction("Click - " + tagName + additionalInfo, _common_constants__WEBPACK_IMPORTED_MODULE_4__["USER_INTERACTION"], {
          managed: true,
          canReuse: true,
          reuseThreshold: 100
        });

        if (tr) {
          var classes = target.getAttribute('class');

          if (classes) {
            tr.addContext({
              custom: {
                classes: classes
              }
            });
          }
        }
      }
    };
  };

  _proto.getHistorySub = function getHistorySub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"] && event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["INVOKE"]) {
        transactionService.startTransaction(task.data.title, 'route-change', {
          managed: true,
          canReuse: true
        });
      }
    };
  };

  _proto.getXHRSub = function getXHRSub() {
    var _this2 = this;

    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"] && !_common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__["globalState"].fetchInProgress) {
        _this2.processAPICalls(event, task);
      }
    };
  };

  _proto.getFetchSub = function getFetchSub() {
    var _this3 = this;

    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"]) {
        _this3.processAPICalls(event, task);
      }
    };
  };

  _proto.processAPICalls = function processAPICalls(event, task) {
    var configService = this._configService;
    var transactionService = this._transactionService;

    if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["SCHEDULE"] && task.data) {
      var data = task.data;
      var requestUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["default"](data.url);
      var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["stripQueryStringFromUrl"])(requestUrl.href));

      if (!transactionService.getCurrentTransaction()) {
        transactionService.startTransaction(spanName, _common_constants__WEBPACK_IMPORTED_MODULE_4__["HTTP_REQUEST_TYPE"], {
          managed: true
        });
      }

      var span = transactionService.startSpan(spanName, 'external.http');
      var taskId = transactionService.addTask();

      if (!span) {
        return;
      }

      var isDtEnabled = configService.get('distributedTracing');
      var dtOrigins = configService.get('distributedTracingOrigins');
      var currentUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["default"](window.location.href);
      var isSameOrigin = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, currentUrl.origin) || Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, dtOrigins);
      var target = data.target;

      if (isDtEnabled && isSameOrigin && target) {
        this.injectDtHeader(span, target);
      } else if (_env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
        this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
      }

      if (data.sync) {
        span.sync = data.sync;
      }

      data.span = span;
      task.id = taskId;
    } else if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["INVOKE"]) {
      if (task.data && task.data.span) {
        task.data.span.end(null, task.data);
      }

      if (task.id) {
        transactionService.removeTask(task.id);
      }
    }
  };

  _proto.injectDtHeader = function injectDtHeader(span, target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');
    var headerValue = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDtHeaderValue"])(span);
    var isHeaderValid = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["isDtHeaderValid"])(headerValue);

    if (headerName && headerValue && isHeaderValid) {
      if (typeof target.setRequestHeader === 'function') {
        target.setRequestHeader(headerName, headerValue);
      } else if (target.headers && typeof target.headers.append === 'function') {
        target.headers.append(headerName, headerValue);
      } else {
        target[headerName] = headerValue;
      }
    }
  };

  _proto.extractDtHeader = function extractDtHeader(target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');

    if (target) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["parseDtHeaderValue"])(target[headerName]);
    }
  };

  _proto.filterTransaction = function filterTransaction(tr) {
    var duration = tr.duration();

    if (!duration) {
      if (_env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
        var message = "transaction(" + tr.id + ", " + tr.name + ") was discarded! ";

        if (duration === 0) {
          message += "Transaction duration is 0";
        } else {
          message += "Transaction wasn't ended";
        }

        this._logginService.debug(message);
      }

      return false;
    }

    if (tr.isManaged()) {
      if (duration > TRANSACTION_DURATION_THRESHOLD) {
        if (_env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
        }

        return false;
      }

      if (tr.sampled && tr.spans.length === 0) {
        if (_env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
        }

        return false;
      }

      if (tr.type !== _common_constants__WEBPACK_IMPORTED_MODULE_4__["PAGE_LOAD"]) {
        var wasBrowserResponsive = checkBrowserResponsiveness(tr, _common_constants__WEBPACK_IMPORTED_MODULE_4__["BROWSER_RESPONSIVENESS_INTERVAL"], BROWSER_RESPONSIVENESS_BUFFER);

        if (!wasBrowserResponsive) {
          if (_env__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
            this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Browser was not responsive enough during the transaction.", ' duration:', duration, ' browserResponsivenessCounter:', tr.browserResponsivenessCounter);
          }

          return false;
        }
      }
    }

    return true;
  };

  _proto.createTransactionDataModel = function createTransactionDataModel(transaction) {
    var transactionStart = transaction._start;
    var spans = transaction.spans.map(function (span) {
      var spanData = {
        id: span.id,
        transaction_id: transaction.id,
        parent_id: span.parentId || transaction.id,
        trace_id: transaction.traceId,
        name: span.name,
        type: span.type,
        subType: span.subType,
        action: span.action,
        sync: span.sync,
        start: span._start - transactionStart,
        duration: span.duration(),
        context: span.context
      };
      return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["SPAN_MODEL"], spanData);
    });
    var transactionData = {
      id: transaction.id,
      trace_id: transaction.traceId,
      name: transaction.name,
      type: transaction.type,
      duration: transaction.duration(),
      spans: spans,
      context: transaction.context,
      marks: transaction.marks,
      breakdown: transaction.breakdownTimings,
      span_count: {
        started: spans.length
      },
      sampled: transaction.sampled
    };
    return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_MODEL"], transactionData);
  };

  _proto.createTransactionPayload = function createTransactionPayload(transaction) {
    var adjustedTransaction = adjustTransactionSpans(transaction);
    var filtered = this.filterTransaction(adjustedTransaction);

    if (filtered) {
      return this.createTransactionDataModel(transaction);
    }
  };

  return PerformanceMonitoring;
}();



/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/span-base.js":
/*!**********************************************************!*\
  !*** .-core/dist/es/performance-monitoring/span-base.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");



var SpanBase = function () {
  function SpanBase(name, type, options) {
    if (options === void 0) {
      options = {};
    }

    if (!name) {
      name = _common_constants__WEBPACK_IMPORTED_MODULE_1__["NAME_UNKNOWN"];
    }

    if (!type) {
      type = _common_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CUSTOM"];
    }

    this.name = name;
    this.type = type;
    this.options = options;
    this.id = options.id || Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["generateRandomId"])(16);
    this.traceId = options.traceId;
    this.sampled = options.sampled;
    this.timestamp = options.timestamp;
    this._start = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getTime"])(options.startTime);
    this._end = undefined;
    this.ended = false;
    this.onEnd = options.onEnd;
  }

  var _proto = SpanBase.prototype;

  _proto.ensureContext = function ensureContext() {
    if (!this.context) {
      this.context = {};
    }
  };

  _proto.addLabels = function addLabels(tags) {
    this.ensureContext();
    var ctx = this.context;

    if (!ctx.tags) {
      ctx.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["setLabel"])(k, tags[k], ctx.tags);
    });
  };

  _proto.addContext = function addContext() {
    for (var _len = arguments.length, context = new Array(_len), _key = 0; _key < _len; _key++) {
      context[_key] = arguments[_key];
    }

    if (context.length === 0) return;
    this.ensureContext();
    _common_utils__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, [this.context].concat(context));
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getTime"])(endTime);
    this.callOnEnd();
  };

  _proto.callOnEnd = function callOnEnd() {
    if (typeof this.onEnd === 'function') {
      this.onEnd(this);
    }
  };

  _proto.duration = function duration() {
    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(this._start, this._end);
  };

  return SpanBase;
}();

/* harmony default export */ __webpack_exports__["default"] = (SpanBase);

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/span.js":
/*!*****************************************************!*\
  !*** .-core/dist/es/performance-monitoring/span.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span-base */ "../rum-core/dist/es/performance-monitoring/span-base.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/context */ "../rum-core/dist/es/common/context.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var Span = function (_SpanBase) {
  _inheritsLoose(Span, _SpanBase);

  function Span(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.parentId = _this.options.parentId;
    _this.subType = undefined;
    _this.action = undefined;

    if (_this.type.indexOf('.') !== -1) {
      var fields = _this.type.split('.', 3);

      _this.type = fields[0];
      _this.subType = fields[1];
      _this.action = fields[2];
    }

    _this.sync = _this.options.sync;
    return _this;
  }

  var _proto = Span.prototype;

  _proto.end = function end(endTime, data) {
    _SpanBase.prototype.end.call(this, endTime);

    Object(_common_context__WEBPACK_IMPORTED_MODULE_1__["addSpanContext"])(this, data);
  };

  return Span;
}(_span_base__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/transaction-service.js":
/*!********************************************************************!*\
  !*** .-core/dist/es/performance-monitoring/transaction-service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/polyfills */ "../rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction */ "../rum-core/dist/es/performance-monitoring/transaction.js");
/* harmony import */ var _perf_entry_recorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf-entry-recorder */ "../rum-core/dist/es/performance-monitoring/perf-entry-recorder.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _capture_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture-navigation */ "../rum-core/dist/es/performance-monitoring/capture-navigation.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/context */ "../rum-core/dist/es/common/context.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../env */ "../rum-core/dist/es/env.js");









var TransactionService = function () {
  function TransactionService(logger, config) {
    var _this = this;

    this._config = config;
    this._logger = logger;
    this.currentTransaction = undefined;
    this.respIntervalId = undefined;
    this.recorder = new _perf_entry_recorder__WEBPACK_IMPORTED_MODULE_2__["PerfEntryRecorder"](function (list) {
      var tr = _this.getCurrentTransaction();

      if (tr && tr.captureTimings) {
        var _tr$spans;

        var capturePaint = false;

        if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
          capturePaint = true;
        }

        var _captureObserverEntri = Object(_perf_entry_recorder__WEBPACK_IMPORTED_MODULE_2__["captureObserverEntries"])(list, {
          capturePaint: capturePaint
        }),
            spans = _captureObserverEntri.spans,
            marks = _captureObserverEntri.marks;

        (_tr$spans = tr.spans).push.apply(_tr$spans, spans);

        tr.addMarks({
          agent: marks
        });
      }
    });
  }

  var _proto = TransactionService.prototype;

  _proto.ensureCurrentTransaction = function ensureCurrentTransaction(name, type, options) {
    var tr = this.getCurrentTransaction();

    if (tr) {
      return tr;
    } else {
      tr = new _transaction__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, options);
      this.setCurrentTransaction(tr);
    }

    return tr;
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.currentTransaction && !this.currentTransaction.ended) {
      return this.currentTransaction;
    }
  };

  _proto.setCurrentTransaction = function setCurrentTransaction(value) {
    this.currentTransaction = value;
  };

  _proto.ensureRespInterval = function ensureRespInterval(checkBrowserResponsiveness) {
    var _this2 = this;

    var clearRespInterval = function clearRespInterval() {
      clearInterval(_this2.respIntervalId);
      _this2.respIntervalId = undefined;
    };

    if (checkBrowserResponsiveness) {
      if (typeof this.respIntervalId === 'undefined') {
        this.respIntervalId = setInterval(function () {
          var tr = _this2.getCurrentTransaction();

          if (tr) {
            tr.browserResponsivenessCounter++;
          } else {
            clearRespInterval();
          }
        }, _common_constants__WEBPACK_IMPORTED_MODULE_5__["BROWSER_RESPONSIVENESS_INTERVAL"]);
      }
    } else if (typeof this.respIntervalId !== 'undefined') {
      clearRespInterval();
    }
  };

  _proto.createOptions = function createOptions(options) {
    var config = this._config.config;
    var presetOptions = {
      transactionSampleRate: config.transactionSampleRate
    };
    var perfOptions = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["extend"])(presetOptions, options);

    if (perfOptions.managed) {
      perfOptions = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["extend"])({
        pageLoadTraceId: config.pageLoadTraceId,
        pageLoadSampled: config.pageLoadSampled,
        pageLoadSpanId: config.pageLoadSpanId,
        pageLoadTransactionName: config.pageLoadTransactionName
      }, perfOptions);
    }

    return perfOptions;
  };

  _proto.startManagedTransaction = function startManagedTransaction(name, type, perfOptions) {
    var tr = this.getCurrentTransaction();
    var isRedefined = false;

    if (!tr) {
      tr = this.ensureCurrentTransaction(name, type, perfOptions);
    } else if (tr.canReuse() && perfOptions.canReuse) {
      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + name + ", " + type + ")", tr);
      }

      var redefineType;
      var currentTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(tr.type);
      var redefineTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(type);

      if (currentTypeOrder !== -1 && redefineTypeOrder !== -1 && redefineTypeOrder < currentTypeOrder) {
        redefineType = type;
      }

      tr.redefine(name, redefineType, perfOptions);
      isRedefined = true;
    } else {
      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
      }

      tr.end();
      tr = this.ensureCurrentTransaction(name, type, perfOptions);
    }

    var checkBrowserResponsiveness = true;

    if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
      if (!isRedefined) {
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LARGEST_CONTENTFUL_PAINT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["PAINT"]);
      }

      checkBrowserResponsiveness = false;

      if (perfOptions.pageLoadTraceId) {
        tr.traceId = perfOptions.pageLoadTraceId;
      }

      if (perfOptions.pageLoadSampled) {
        tr.sampled = perfOptions.pageLoadSampled;
      }

      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"] && perfOptions.pageLoadTransactionName) {
        tr.name = perfOptions.pageLoadTransactionName;
      }
    }

    if (!isRedefined && this._config.get('monitorLongtasks')) {
      this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LONG_TASK"]);
    }

    if (tr.sampled) {
      tr.captureTimings = true;
    }

    this.ensureRespInterval(checkBrowserResponsiveness);
    return tr;
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    var _this3 = this;

    var perfOptions = this.createOptions(options);
    var tr;
    var fireOnstartHook = true;

    if (perfOptions.managed) {
      var current = this.currentTransaction;
      tr = this.startManagedTransaction(name, type, perfOptions);

      if (current === tr) {
        fireOnstartHook = false;
      }
    } else {
      tr = new _transaction__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, perfOptions);
    }

    tr.onEnd = function () {
      return _this3.handleTransactionEnd(tr);
    };

    if (fireOnstartHook) {
      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
      }

      this._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_START"], [tr]);
    }

    return tr;
  };

  _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
    var _this4 = this;

    this.recorder.stop();
    return _common_polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(function () {
      var name = tr.name,
          type = tr.type;

      if (_this4.shouldIgnoreTransaction(name) || type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"]) {
        if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
          _this4._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
        }

        return;
      }

      if (type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
        var pageLoadTransactionName = _this4._config.get('pageLoadTransactionName');

        if (name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"] && pageLoadTransactionName) {
          tr.name = pageLoadTransactionName;
        }
      }

      Object(_capture_navigation__WEBPACK_IMPORTED_MODULE_4__["captureNavigation"])(tr);

      _this4.adjustTransactionTime(tr);

      var breakdownMetrics = _this4._config.get('breakdownMetrics');

      if (breakdownMetrics) {
        tr.captureBreakdown();
      }

      var configContext = _this4._config.get('context');

      Object(_common_context__WEBPACK_IMPORTED_MODULE_6__["addTransactionContext"])(tr, configContext);

      _this4._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_END"], [tr]);

      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this4._logger.debug("end transaction(" + tr.id + ", " + tr.name + ")", tr);
      }
    }, function (err) {
      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this4._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
      }
    });
  };

  _proto.adjustTransactionTime = function adjustTransactionTime(transaction) {
    var spans = transaction.spans;
    var earliestSpan = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getEarliestSpan"])(spans);

    if (earliestSpan && earliestSpan._start < transaction._start) {
      transaction._start = earliestSpan._start;
    }

    var latestSpan = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getLatestNonXHRSpan"])(spans);

    if (latestSpan && latestSpan._end > transaction._end) {
      transaction._end = latestSpan._end;
    }

    var transactionEnd = transaction._end;

    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];

      if (span._end > transactionEnd) {
        span._end = transactionEnd;
        span.type += '.truncated';
      }

      if (span._start > transactionEnd) {
        span._start = transactionEnd;
      }
    }
  };

  _proto.shouldIgnoreTransaction = function shouldIgnoreTransaction(transactionName) {
    var ignoreList = this._config.get('ignoreTransactions');

    if (ignoreList && ignoreList.length) {
      for (var i = 0; i < ignoreList.length; i++) {
        var element = ignoreList[i];

        if (typeof element.test === 'function') {
          if (element.test(transactionName)) {
            return true;
          }
        } else if (element === transactionName) {
          return true;
        }
      }
    }

    return false;
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var tr = this.ensureCurrentTransaction(undefined, _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"], this.createOptions({
      canReuse: true,
      managed: true
    }));

    if (tr) {
      var span = tr.startSpan(name, type, options);

      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("startSpan(" + name + ", " + type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
      }

      return span;
    }
  };

  _proto.addTask = function addTask(taskId) {
    var tr = this.ensureCurrentTransaction(undefined, _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"], this.createOptions({
      canReuse: true,
      managed: true
    }));

    if (tr) {
      var taskId = tr.addTask(taskId);

      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("addTask(" + taskId + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
      }
    }

    return taskId;
  };

  _proto.removeTask = function removeTask(taskId) {
    var tr = this.getCurrentTransaction();

    if (tr) {
      tr.removeTask(taskId);

      if (_env__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("removeTask(" + taskId + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
      }
    }
  };

  return TransactionService;
}();

/* harmony default export */ __webpack_exports__["default"] = (TransactionService);

/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/transaction.js":
/*!************************************************************!*\
  !*** .-core/dist/es/performance-monitoring/transaction.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/performance-monitoring/span.js");
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span-base */ "../rum-core/dist/es/performance-monitoring/span-base.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _breakdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakdown */ "../rum-core/dist/es/performance-monitoring/breakdown.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}







var Transaction = function (_SpanBase) {
  _inheritsLoose(Transaction, _SpanBase);

  function Transaction(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.traceId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["generateRandomId"])();
    _this.marks = undefined;
    _this.spans = [];
    _this._activeSpans = {};
    _this.nextAutoTaskId = 1;
    _this._scheduledTasks = [];
    _this.captureTimings = false;
    _this.breakdownTimings = [];
    _this.sampled = Math.random() <= _this.options.transactionSampleRate;
    _this.browserResponsivenessCounter = 0;
    return _this;
  }

  var _proto = Transaction.prototype;

  _proto.addMarks = function addMarks(obj) {
    this.marks = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.marks || {}, obj);
  };

  _proto.mark = function mark(key) {
    var skey = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["removeInvalidChars"])(key);

    var markTime = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - this._start;

    var custom = {};
    custom[skey] = markTime;
    this.addMarks({
      custom: custom
    });
  };

  _proto.canReuse = function canReuse() {
    var threshold = this.options.reuseThreshold || _common_constants__WEBPACK_IMPORTED_MODULE_3__["REUSABILITY_THRESHOLD"];
    return !!this.options.canReuse && !this.ended && Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - this._start < threshold;
  };

  _proto.redefine = function redefine(name, type, options) {
    if (name) {
      this.name = name;
    }

    if (type) {
      this.type = type;
    }

    if (options) {
      this.options = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.options, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var _this2 = this;

    if (this.ended) {
      return;
    }

    var opts = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, options);

    opts.onEnd = function (trc) {
      _this2._onSpanEnd(trc);
    };

    opts.traceId = this.traceId;
    opts.sampled = this.sampled;

    if (!opts.parentId) {
      opts.parentId = this.id;
    }

    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](name, type, opts);
    this._activeSpans[span.id] = span;
    return span;
  };

  _proto.isFinished = function isFinished() {
    return this._scheduledTasks.length === 0;
  };

  _proto.detectFinish = function detectFinish() {
    if (this.isFinished()) this.end();
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["getTime"])(endTime);

    for (var sid in this._activeSpans) {
      var span = this._activeSpans[sid];
      span.type = span.type + '.truncated';
      span.end(endTime);
    }

    this.callOnEnd();
  };

  _proto.captureBreakdown = function captureBreakdown() {
    this.breakdownTimings = Object(_breakdown__WEBPACK_IMPORTED_MODULE_4__["captureBreakdown"])(this);
  };

  _proto.addTask = function addTask(taskId) {
    if (typeof taskId === 'undefined') {
      taskId = 'task' + this.nextAutoTaskId++;
    }

    if (this._scheduledTasks.indexOf(taskId) == -1) {
      this._scheduledTasks.push(taskId);

      return taskId;
    }
  };

  _proto.removeTask = function removeTask(taskId) {
    var index = this._scheduledTasks.indexOf(taskId);

    if (index > -1) {
      this._scheduledTasks.splice(index, 1);
    }

    this.detectFinish();
  };

  _proto.resetSpans = function resetSpans() {
    this.spans = [];
  };

  _proto._onSpanEnd = function _onSpanEnd(span) {
    this.spans.push(span);
    delete this._activeSpans[span.id];
  };

  _proto.isManaged = function isManaged() {
    return !!this.options.managed;
  };

  return Transaction;
}(_span_base__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Transaction);

/***/ }),

/***/ "./src/apm-base.js":
/*!*************************!*\
  !*** ./src/apm-base.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "../rum-core/dist/es/index.js");


var ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }

  var _proto = ApmBase.prototype;

  _proto.init = function init(config) {
    var _this = this;

    if (this.isEnabled() && !this._initialized) {
      this._initialized = true;
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setVersion('5.1.1');
      this.config(config);
      var loggingService = this.serviceFactory.getService('LoggingService');

      if (configService.isActive()) {
        this.serviceFactory.init();
        var flags = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["getInstrumentationFlags"])(configService.get('instrument'), configService.get('disableInstrumentations'));
        var performanceMonitoring = this.serviceFactory.getService('PerformanceMonitoring');
        performanceMonitoring.init(flags);

        if (flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["ERROR"]]) {
          var errorLogging = this.serviceFactory.getService('ErrorLogging');
          errorLogging.registerListeners();
        }

        var sendPageLoad = function sendPageLoad() {
          return flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]] && _this._sendPageLoadMetrics();
        };

        if (configService.get('centralConfig')) {
          this.fetchCentralConfig().then(sendPageLoad);
        } else {
          sendPageLoad();
        }
      } else {
        this._disable = true;
        loggingService.info('RUM agent is inactive');
      }
    }

    return this;
  };

  _proto.fetchCentralConfig = function fetchCentralConfig() {
    var apmServer = this.serviceFactory.getService('ApmServer');
    var loggingService = this.serviceFactory.getService('LoggingService');
    var configService = this.serviceFactory.getService('ConfigService');
    return apmServer.fetchConfig(configService.get('serviceName'), configService.get('environment')).then(function (config) {
      var transactionSampleRate = config['transaction_sample_rate'];

      if (transactionSampleRate) {
        transactionSampleRate = Number(transactionSampleRate);
        var _config2 = {
          transactionSampleRate: transactionSampleRate
        };

        var _configService$valida = configService.validate(_config2),
            invalid = _configService$valida.invalid;

        if (invalid.length === 0) {
          configService.setConfig(_config2);
        } else {
          var _invalid$ = invalid[0],
              key = _invalid$.key,
              value = _invalid$.value,
              allowed = _invalid$.allowed;
          loggingService.warn("invalid value \"" + value + "\" for " + key + ". Allowed: " + allowed + ".");
        }
      }

      return config;
    }).catch(function (error) {
      loggingService.warn('failed fetching config:', error);
    });
  };

  _proto._sendPageLoadMetrics = function _sendPageLoadMetrics() {
    var tr = this.startTransaction(undefined, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"], {
      managed: true,
      canReuse: true
    });

    if (tr) {
      tr.addTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);
    }

    var sendPageLoadMetrics = function sendPageLoadMetrics() {
      setTimeout(function () {
        if (tr) {
          tr.removeTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);
        }
      });
    };

    if (document.readyState === 'complete') {
      sendPageLoadMetrics();
    } else {
      window.addEventListener('load', sendPageLoadMetrics);
    }
  };

  _proto.isEnabled = function isEnabled() {
    return !this._disable;
  };

  _proto.observe = function observe(name, fn) {
    var configService = this.serviceFactory.getService('ConfigService');
    configService.events.observe(name, fn);
  };

  _proto.config = function config(_config) {
    var configService = this.serviceFactory.getService('ConfigService');

    var _configService$valida2 = configService.validate(_config),
        missing = _configService$valida2.missing,
        invalid = _configService$valida2.invalid;

    if (missing.length === 0 && invalid.length === 0) {
      configService.setConfig(_config);
    } else {
      var loggingService = this.serviceFactory.getService('LoggingService');
      var separator = ', ';
      var message = "RUM agent isn't correctly configured. ";

      if (missing.length > 0) {
        message += missing.join(separator) + ' is missing';

        if (invalid.length > 0) {
          message += separator;
        }
      }

      invalid.forEach(function (_ref, index) {
        var key = _ref.key,
            value = _ref.value,
            allowed = _ref.allowed;
        message += key + " \"" + value + "\" contains invalid characters! (allowed: " + allowed + ")" + (index !== invalid.length - 1 ? separator : '');
      });
      loggingService.error(message);
      configService.setConfig({
        active: false
      });
    }
  };

  _proto.setUserContext = function setUserContext(userContext) {
    var configService = this.serviceFactory.getService('ConfigService');
    configService.setUserContext(userContext);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    var configService = this.serviceFactory.getService('ConfigService');
    configService.setCustomContext(customContext);
  };

  _proto.addLabels = function addLabels(labels) {
    var configService = this.serviceFactory.getService('ConfigService');
    configService.addLabels(labels);
  };

  _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
    if (this.isEnabled()) {
      var configService = this.serviceFactory.getService('ConfigService');
      configService.setConfig({
        pageLoadTransactionName: name
      });
    }
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startTransaction(name, type, options);
    }
  };

  _proto.startSpan = function startSpan(name, type) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startSpan(name, type);
    }
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.getCurrentTransaction();
    }
  };

  _proto.captureError = function captureError(error) {
    if (this.isEnabled()) {
      var errorLogging = this.serviceFactory.getService('ErrorLogging');
      return errorLogging.logError(error);
    }
  };

  _proto.addFilter = function addFilter(fn) {
    var configService = this.serviceFactory.getService('ConfigService');
    configService.addFilter(fn);
  };

  return ApmBase;
}();

/* harmony default export */ __webpack_exports__["default"] = (ApmBase);

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bootstrap; });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "../rum-core/dist/es/index.js");

var alreadyBootstrap = false;
var enabled = false;
function bootstrap() {
  if (alreadyBootstrap) {
    return enabled;
  }

  alreadyBootstrap = true;

  if (Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["isPlatformSupported"])()) {
    Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["patchAll"])();
    enabled = true;
  } else if (typeof window !== 'undefined') {
    console.log('[Elastic APM] platform is not supported!');
  }

  return enabled;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, init, apmBase, ApmBase, apm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apmBase", function() { return apmBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apm", function() { return apmBase; });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./src/bootstrap.js");
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/apm-rum-core */ "../rum-core/dist/es/index.js");
/* harmony import */ var _apm_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apm-base */ "./src/apm-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApmBase", function() { return _apm_base__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var enabled = Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["default"])();
var serviceFactory = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__["createServiceFactory"])();
var apmBase = new _apm_base__WEBPACK_IMPORTED_MODULE_2__["default"](serviceFactory, !enabled);

if (typeof window !== 'undefined') {
  window.elasticApm = apmBase;
}

var init = apmBase.init.bind(apmBase);
/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpYy1hcG0tcnVtLnVtZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL2Vycm9yLXN0YWNrLXBhcnNlci9lcnJvci1zdGFjay1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvZW50LXJ1bV9hcG0tYWdlbnQtcnVtLW1icF9tYXN0ZXIvc3JjL2dpdGh1Yi5jb20vZWxhc3RpYy9hcG0tYWdlbnQtcnVtLWpzL25vZGVfbW9kdWxlcy9vcGVudHJhY2luZy9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL29wZW50cmFjaW5nL2xpYi9ub29wLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL29wZW50cmFjaW5nL2xpYi9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL3NwYW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL3NwYW5fY29udGV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvZW50LXJ1bV9hcG0tYWdlbnQtcnVtLW1icF9tYXN0ZXIvc3JjL2dpdGh1Yi5jb20vZWxhc3RpYy9hcG0tYWdlbnQtcnVtLWpzL25vZGVfbW9kdWxlcy9vcGVudHJhY2luZy9saWIvdHJhY2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2ZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvc3RhY2tmcmFtZS9zdGFja2ZyYW1lLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vYWZ0ZXItZnJhbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9hcG0tc2VydmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vY29uZmlnLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9jb250ZXh0LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL2luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9sb2dnaW5nLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9uZGpzb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9wYXRjaGluZy9ldmVudC10YXJnZXQtcGF0Y2guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9wYXRjaGluZy9mZXRjaC1wYXRjaC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3BhdGNoaW5nL2hpc3RvcnktcGF0Y2guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9wYXRjaGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3BhdGNoaW5nL3BhdGNoLXV0aWxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcGF0Y2hpbmcveGhyLXBhdGNoLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcG9seWZpbGxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcXVldWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9zZXJ2aWNlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3RydW5jYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vdXJsLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2Vudi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvZXJyb3ItbG9nZ2luZy9lcnJvci1sb2dnaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9lcnJvci1sb2dnaW5nL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9lcnJvci1sb2dnaW5nL3N0YWNrLXRyYWNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvb3BlbnRyYWNpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL29wZW50cmFjaW5nL3NwYW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL29wZW50cmFjaW5nL3RyYWNlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy9icmVha2Rvd24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvY2FwdHVyZS1uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL3BlcmYtZW50cnktcmVjb3JkZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy9zcGFuLWJhc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3Jpbmcvc3Bhbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy90cmFuc2FjdGlvbi1zZXJ2aWNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL3RyYW5zYWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hcG0tYmFzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlbGFzdGljLWFwbS1ydW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWxhc3RpYy1hcG0tcnVtXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8vIFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbiAoVU1EKSB0byBzdXBwb3J0IEFNRCwgQ29tbW9uSlMvTm9kZS5qcywgUmhpbm8sIGFuZCBicm93c2Vycy5cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoJ2Vycm9yLXN0YWNrLXBhcnNlcicsIFsnc3RhY2tmcmFtZSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnc3RhY2tmcmFtZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkVycm9yU3RhY2tQYXJzZXIgPSBmYWN0b3J5KHJvb3QuU3RhY2tGcmFtZSk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyKFN0YWNrRnJhbWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgRklSRUZPWF9TQUZBUklfU1RBQ0tfUkVHRVhQID0gLyhefEApXFxTK1xcOlxcZCsvO1xuICAgIHZhciBDSFJPTUVfSUVfU1RBQ0tfUkVHRVhQID0gL15cXHMqYXQgLiooXFxTK1xcOlxcZCt8XFwobmF0aXZlXFwpKS9tO1xuICAgIHZhciBTQUZBUklfTkFUSVZFX0NPREVfUkVHRVhQID0gL14oZXZhbEApPyhcXFtuYXRpdmUgY29kZVxcXSk/JC87XG5cbiAgICBmdW5jdGlvbiBfbWFwKGFycmF5LCBmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5tYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZm4sIHRoaXNBcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBBcnJheShhcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG91dHB1dFtpXSA9IGZuLmNhbGwodGhpc0FyZywgYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9maWx0ZXIoYXJyYXksIGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmbiwgdGhpc0FyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuLmNhbGwodGhpc0FyZywgYXJyYXlbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luZGV4T2YoYXJyYXksIHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhbiBFcnJvciBvYmplY3QsIGV4dHJhY3QgdGhlIG1vc3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3Igb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBvZiBTdGFja0ZyYW1lc1xuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrdHJhY2UgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlcnJvclsnb3BlcmEjc291cmNlbG9jJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYShlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YWNrICYmIGVycm9yLnN0YWNrLm1hdGNoKENIUk9NRV9JRV9TVEFDS19SRUdFWFApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWOE9ySUUoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRkZPclNhZmFyaShlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBhcnNlIGdpdmVuIEVycm9yIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFNlcGFyYXRlIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIGZyb20gYSBzdHJpbmcgb2YgdGhlIGZvcm06IChVUkk6TGluZTpDb2x1bW4pXG4gICAgICAgIGV4dHJhY3RMb2NhdGlvbjogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkZXh0cmFjdExvY2F0aW9uKHVybExpa2UpIHtcbiAgICAgICAgICAgIC8vIEZhaWwtZmFzdCBidXQgcmV0dXJuIGxvY2F0aW9ucyBsaWtlIFwiKG5hdGl2ZSlcIlxuICAgICAgICAgICAgaWYgKHVybExpa2UuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdXJsTGlrZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZWdFeHAgPSAvKC4rPykoPzpcXDooXFxkKykpPyg/OlxcOihcXGQrKSk/JC87XG4gICAgICAgICAgICB2YXIgcGFydHMgPSByZWdFeHAuZXhlYyh1cmxMaWtlLnJlcGxhY2UoL1tcXChcXCldL2csICcnKSk7XG4gICAgICAgICAgICByZXR1cm4gW3BhcnRzWzFdLCBwYXJ0c1syXSB8fCB1bmRlZmluZWQsIHBhcnRzWzNdIHx8IHVuZGVmaW5lZF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VWOE9ySUU6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlVjhPcklFKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpbmUubWF0Y2goQ0hST01FX0lFX1NUQUNLX1JFR0VYUCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9tYXAoZmlsdGVyZWQsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCcoZXZhbCAnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRocm93IGF3YXkgZXZhbCBpbmZvcm1hdGlvbiB1bnRpbCB3ZSBpbXBsZW1lbnQgc3RhY2t0cmFjZS5qcy9zdGFja2ZyYW1lIzhcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvZXZhbCBjb2RlL2csICdldmFsJykucmVwbGFjZSgvKFxcKGV2YWwgYXQgW15cXCgpXSopfChcXClcXCwuKiQpL2csICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUucmVwbGFjZSgvXlxccysvLCAnJykucmVwbGFjZSgvXFwoZXZhbCBjb2RlL2csICcoJykuc3BsaXQoL1xccysvKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJ0cyA9IHRoaXMuZXh0cmFjdExvY2F0aW9uKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRva2Vucy5qb2luKCcgJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IF9pbmRleE9mKFsnZXZhbCcsICc8YW5vbnltb3VzPiddLCBsb2NhdGlvblBhcnRzWzBdKSA+IC0xID8gdW5kZWZpbmVkIDogbG9jYXRpb25QYXJ0c1swXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tGcmFtZShmdW5jdGlvbk5hbWUsIHVuZGVmaW5lZCwgZmlsZU5hbWUsIGxvY2F0aW9uUGFydHNbMV0sIGxvY2F0aW9uUGFydHNbMl0sIGxpbmUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VGRk9yU2FmYXJpOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZUZGT3JTYWZhcmkoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IF9maWx0ZXIoZXJyb3Iuc3RhY2suc3BsaXQoJ1xcbicpLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFsaW5lLm1hdGNoKFNBRkFSSV9OQVRJVkVfQ09ERV9SRUdFWFApO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgYXdheSBldmFsIGluZm9ybWF0aW9uIHVudGlsIHdlIGltcGxlbWVudCBzdGFja3RyYWNlLmpzL3N0YWNrZnJhbWUjOFxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJyA+IGV2YWwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLyBsaW5lIChcXGQrKSg/OiA+IGV2YWwgbGluZSBcXGQrKSogPiBldmFsXFw6XFxkK1xcOlxcZCsvZywgJzokMScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ0AnKSA9PT0gLTEgJiYgbGluZS5pbmRleE9mKCc6JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSBldmFsIGZyYW1lcyBvbmx5IGhhdmUgZnVuY3Rpb24gbmFtZXMgYW5kIG5vdGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUobGluZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUuc3BsaXQoJ0AnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gdG9rZW5zLmpvaW4oJ0AnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tGcmFtZShmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblBhcnRzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU9wZXJhOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhKGUpIHtcbiAgICAgICAgICAgIGlmICghZS5zdGFja3RyYWNlIHx8IChlLm1lc3NhZ2UuaW5kZXhPZignXFxuJykgPiAtMSAmJlxuICAgICAgICAgICAgICAgIGUubWVzc2FnZS5zcGxpdCgnXFxuJykubGVuZ3RoID4gZS5zdGFja3RyYWNlLnNwbGl0KCdcXG4nKS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTkoZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTEwKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhMTEoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VPcGVyYTk6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlT3BlcmE5KGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lUkUgPSAvTGluZSAoXFxkKykuKnNjcmlwdCAoPzppbiApPyhcXFMrKS9pO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gZS5tZXNzYWdlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDIsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbGluZVJFLmV4ZWMobGluZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgU3RhY2tGcmFtZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWF0Y2hbMl0sIG1hdGNoWzFdLCB1bmRlZmluZWQsIGxpbmVzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlT3BlcmExMDogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYTEwKGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lUkUgPSAvTGluZSAoXFxkKykuKnNjcmlwdCAoPzppbiApPyhcXFMrKSg/OjogSW4gZnVuY3Rpb24gKFxcUyspKT8kL2k7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSBlLnN0YWNrdHJhY2Uuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBsaW5lUkUuZXhlYyhsaW5lc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFN0YWNrRnJhbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbM10gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gT3BlcmEgMTAuNjUrIEVycm9yLnN0YWNrIHZlcnkgc2ltaWxhciB0byBGRi9TYWZhcmlcbiAgICAgICAgcGFyc2VPcGVyYTExOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhMTEoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IF9maWx0ZXIoZXJyb3Iuc3RhY2suc3BsaXQoJ1xcbicpLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbGluZS5tYXRjaChGSVJFRk9YX1NBRkFSSV9TVEFDS19SRUdFWFApICYmICFsaW5lLm1hdGNoKC9eRXJyb3IgY3JlYXRlZCBhdC8pO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUuc3BsaXQoJ0AnKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJ0cyA9IHRoaXMuZXh0cmFjdExvY2F0aW9uKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uQ2FsbCA9ICh0b2tlbnMuc2hpZnQoKSB8fCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uQ2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxhbm9ueW1vdXMgZnVuY3Rpb24oOiAoXFx3KykpPz4vLCAnJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKFteXFwpXSpcXCkvZywgJycpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgYXJnc1JhdztcbiAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb25DYWxsLm1hdGNoKC9cXCgoW15cXCldKilcXCkvKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzUmF3ID0gZnVuY3Rpb25DYWxsLnJlcGxhY2UoL15bXlxcKF0rXFwoKFteXFwpXSopXFwpJC8sICckMScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IChhcmdzUmF3ID09PSB1bmRlZmluZWQgfHwgYXJnc1JhdyA9PT0gJ1thcmd1bWVudHMgbm90IGF2YWlsYWJsZV0nKSA/XG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6IGFyZ3NSYXcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1swXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1sxXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1syXSxcbiAgICAgICAgICAgICAgICAgICAgbGluZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG59KSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGUgRk9STUFUX0JJTkFSWSBmb3JtYXQgcmVwcmVzZW50cyBTcGFuQ29udGV4dHMgaW4gYW4gb3BhcXVlIGJpbmFyeVxuICogY2Fycmllci5cbiAqXG4gKiBUcmFjZXIuaW5qZWN0KCkgd2lsbCBzZXQgdGhlIGJ1ZmZlciBmaWVsZCB0byBhbiBBcnJheS1saWtlIChBcnJheSxcbiAqIEFycmF5QnVmZmVyLCBvciBUeXBlZEJ1ZmZlcikgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluamVjdGVkIGJpbmFyeSBkYXRhLlxuICogQW55IHZhbGlkIE9iamVjdCBjYW4gYmUgdXNlZCBhcyBsb25nIGFzIHRoZSBidWZmZXIgZmllbGQgb2YgdGhlIG9iamVjdFxuICogY2FuIGJlIHNldC5cbiAqXG4gKiBUcmFjZXIuZXh0cmFjdCgpIHdpbGwgbG9vayBmb3IgYGNhcnJpZXIuYnVmZmVyYCwgYW5kIHRoYXQgZmllbGQgaXNcbiAqIGV4cGVjdGVkIHRvIGJlIGFuIEFycmF5LWxpa2Ugb2JqZWN0IChBcnJheSwgQXJyYXlCdWZmZXIsIG9yXG4gKiBUeXBlZEJ1ZmZlcikuXG4gKi9cbmV4cG9ydHMuRk9STUFUX0JJTkFSWSA9ICdiaW5hcnknO1xuLyoqXG4gKiBUaGUgRk9STUFUX1RFWFRfTUFQIGZvcm1hdCByZXByZXNlbnRzIFNwYW5Db250ZXh0cyB1c2luZyBhXG4gKiBzdHJpbmctPnN0cmluZyBtYXAgKGJhY2tlZCBieSBhIEphdmFzY3JpcHQgT2JqZWN0KSBhcyBhIGNhcnJpZXIuXG4gKlxuICogTk9URTogVW5saWtlIEZPUk1BVF9IVFRQX0hFQURFUlMsIEZPUk1BVF9URVhUX01BUCBwbGFjZXMgbm8gcmVzdHJpY3Rpb25zXG4gKiBvbiB0aGUgY2hhcmFjdGVycyB1c2VkIGluIGVpdGhlciB0aGUga2V5cyBvciB0aGUgdmFsdWVzIG9mIHRoZSBtYXBcbiAqIGVudHJpZXMuXG4gKlxuICogVGhlIEZPUk1BVF9URVhUX01BUCBjYXJyaWVyIG1hcCBtYXkgY29udGFpbiB1bnJlbGF0ZWQgZGF0YSAoZS5nLixcbiAqIGFyYml0cmFyeSBnUlBDIG1ldGFkYXRhKTsgYXMgc3VjaCwgdGhlIFRyYWNlciBpbXBsZW1lbnRhdGlvbiBzaG91bGQgdXNlXG4gKiBhIHByZWZpeCBvciBvdGhlciBjb252ZW50aW9uIHRvIGRpc3Rpbmd1aXNoIFRyYWNlci1zcGVjaWZpYyBrZXk6dmFsdWVcbiAqIHBhaXJzLlxuICovXG5leHBvcnRzLkZPUk1BVF9URVhUX01BUCA9ICd0ZXh0X21hcCc7XG4vKipcbiAqIFRoZSBGT1JNQVRfSFRUUF9IRUFERVJTIGZvcm1hdCByZXByZXNlbnRzIFNwYW5Db250ZXh0cyB1c2luZyBhXG4gKiBjaGFyYWN0ZXItcmVzdHJpY3RlZCBzdHJpbmctPnN0cmluZyBtYXAgKGJhY2tlZCBieSBhIEphdmFzY3JpcHQgT2JqZWN0KVxuICogYXMgYSBjYXJyaWVyLlxuICpcbiAqIEtleXMgYW5kIHZhbHVlcyBpbiB0aGUgRk9STUFUX0hUVFBfSEVBREVSUyBjYXJyaWVyIG11c3QgYmUgc3VpdGFibGUgZm9yXG4gKiB1c2UgYXMgSFRUUCBoZWFkZXJzICh3aXRob3V0IG1vZGlmaWNhdGlvbiBvciBmdXJ0aGVyIGVzY2FwaW5nKS4gVGhhdCBpcyxcbiAqIHRoZSBrZXlzIGhhdmUgYSBncmVhdGx5IHJlc3RyaWN0ZWQgY2hhcmFjdGVyIHNldCwgY2FzaW5nIGZvciB0aGUga2V5c1xuICogbWF5IG5vdCBiZSBwcmVzZXJ2ZWQgYnkgdmFyaW91cyBpbnRlcm1lZGlhcmllcywgYW5kIHRoZSB2YWx1ZXMgc2hvdWxkIGJlXG4gKiBVUkwtZXNjYXBlZC5cbiAqXG4gKiBUaGUgRk9STUFUX0hUVFBfSEVBREVSUyBjYXJyaWVyIG1hcCBtYXkgY29udGFpbiB1bnJlbGF0ZWQgZGF0YSAoZS5nLixcbiAqIGFyYml0cmFyeSBIVFRQIGhlYWRlcnMpOyBhcyBzdWNoLCB0aGUgVHJhY2VyIGltcGxlbWVudGF0aW9uIHNob3VsZCB1c2UgYVxuICogcHJlZml4IG9yIG90aGVyIGNvbnZlbnRpb24gdG8gZGlzdGluZ3Vpc2ggVHJhY2VyLXNwZWNpZmljIGtleTp2YWx1ZVxuICogcGFpcnMuXG4gKi9cbmV4cG9ydHMuRk9STUFUX0hUVFBfSEVBREVSUyA9ICdodHRwX2hlYWRlcnMnO1xuLyoqXG4gKiBBIFNwYW4gbWF5IGJlIHRoZSBcImNoaWxkIG9mXCIgYSBwYXJlbnQgU3Bhbi4gSW4gYSDigJxjaGlsZCBvZuKAnSByZWZlcmVuY2UsXG4gKiB0aGUgcGFyZW50IFNwYW4gZGVwZW5kcyBvbiB0aGUgY2hpbGQgU3BhbiBpbiBzb21lIGNhcGFjaXR5LlxuICpcbiAqIFNlZSBtb3JlIGFib3V0IHJlZmVyZW5jZSB0eXBlcyBhdCBodHRwczovL2dpdGh1Yi5jb20vb3BlbnRyYWNpbmcvc3BlY2lmaWNhdGlvblxuICovXG5leHBvcnRzLlJFRkVSRU5DRV9DSElMRF9PRiA9ICdjaGlsZF9vZic7XG4vKipcbiAqIFNvbWUgcGFyZW50IFNwYW5zIGRvIG5vdCBkZXBlbmQgaW4gYW55IHdheSBvbiB0aGUgcmVzdWx0IG9mIHRoZWlyIGNoaWxkXG4gKiBTcGFucy4gSW4gdGhlc2UgY2FzZXMsIHdlIHNheSBtZXJlbHkgdGhhdCB0aGUgY2hpbGQgU3BhbiDigJxmb2xsb3dzIGZyb23igJ1cbiAqIHRoZSBwYXJlbnQgU3BhbiBpbiBhIGNhdXNhbCBzZW5zZS5cbiAqXG4gKiBTZWUgbW9yZSBhYm91dCByZWZlcmVuY2UgdHlwZXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL29wZW50cmFjaW5nL3NwZWNpZmljYXRpb25cbiAqL1xuZXhwb3J0cy5SRUZFUkVOQ0VfRk9MTE9XU19GUk9NID0gJ2ZvbGxvd3NfZnJvbSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIHJlZmVyZW5jZV8xID0gcmVxdWlyZShcIi4vcmVmZXJlbmNlXCIpO1xudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuL3NwYW5cIik7XG4vKipcbiAqIFJldHVybiBhIG5ldyBSRUZFUkVOQ0VfQ0hJTERfT0YgcmVmZXJlbmNlLlxuICpcbiAqIEBwYXJhbSB7U3BhbkNvbnRleHR9IHNwYW5Db250ZXh0IC0gdGhlIHBhcmVudCBTcGFuQ29udGV4dCBpbnN0YW5jZSB0b1xuICogICAgICAgIHJlZmVyZW5jZS5cbiAqIEByZXR1cm4gYSBSRUZFUkVOQ0VfQ0hJTERfT0YgcmVmZXJlbmNlIHBvaW50aW5nIHRvIGBzcGFuQ29udGV4dGBcbiAqL1xuZnVuY3Rpb24gY2hpbGRPZihzcGFuQ29udGV4dCkge1xuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHBhc3MgYSBTcGFuIGluc3RlYWQgb2YgYSBTcGFuQ29udGV4dFxuICAgIGlmIChzcGFuQ29udGV4dCBpbnN0YW5jZW9mIHNwYW5fMS5kZWZhdWx0KSB7XG4gICAgICAgIHNwYW5Db250ZXh0ID0gc3BhbkNvbnRleHQuY29udGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHJlZmVyZW5jZV8xLmRlZmF1bHQoQ29uc3RhbnRzLlJFRkVSRU5DRV9DSElMRF9PRiwgc3BhbkNvbnRleHQpO1xufVxuZXhwb3J0cy5jaGlsZE9mID0gY2hpbGRPZjtcbi8qKlxuICogUmV0dXJuIGEgbmV3IFJFRkVSRU5DRV9GT0xMT1dTX0ZST00gcmVmZXJlbmNlLlxuICpcbiAqIEBwYXJhbSB7U3BhbkNvbnRleHR9IHNwYW5Db250ZXh0IC0gdGhlIHBhcmVudCBTcGFuQ29udGV4dCBpbnN0YW5jZSB0b1xuICogICAgICAgIHJlZmVyZW5jZS5cbiAqIEByZXR1cm4gYSBSRUZFUkVOQ0VfRk9MTE9XU19GUk9NIHJlZmVyZW5jZSBwb2ludGluZyB0byBgc3BhbkNvbnRleHRgXG4gKi9cbmZ1bmN0aW9uIGZvbGxvd3NGcm9tKHNwYW5Db250ZXh0KSB7XG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gcGFzcyBhIFNwYW4gaW5zdGVhZCBvZiBhIFNwYW5Db250ZXh0XG4gICAgaWYgKHNwYW5Db250ZXh0IGluc3RhbmNlb2Ygc3Bhbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgc3BhbkNvbnRleHQgPSBzcGFuQ29udGV4dC5jb250ZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgcmVmZXJlbmNlXzEuZGVmYXVsdChDb25zdGFudHMuUkVGRVJFTkNFX0ZPTExPV1NfRlJPTSwgc3BhbkNvbnRleHQpO1xufVxuZXhwb3J0cy5mb2xsb3dzRnJvbSA9IGZvbGxvd3NGcm9tO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuL3NwYW5cIik7XG52YXIgc3Bhbl9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9zcGFuX2NvbnRleHRcIik7XG52YXIgdHJhY2VyXzEgPSByZXF1aXJlKFwiLi90cmFjZXJcIik7XG5leHBvcnRzLnRyYWNlciA9IG51bGw7XG5leHBvcnRzLnNwYW5Db250ZXh0ID0gbnVsbDtcbmV4cG9ydHMuc3BhbiA9IG51bGw7XG4vLyBEZWZlcnJlZCBpbml0aWFsaXphdGlvbiB0byBhdm9pZCBhIGRlcGVuZGVuY3kgY3ljbGUgd2hlcmUgVHJhY2VyIGRlcGVuZHMgb25cbi8vIFNwYW4gd2hpY2ggZGVwZW5kcyBvbiB0aGUgbm9vcCB0cmFjZXIuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGV4cG9ydHMudHJhY2VyID0gbmV3IHRyYWNlcl8xLmRlZmF1bHQoKTtcbiAgICBleHBvcnRzLnNwYW4gPSBuZXcgc3Bhbl8xLmRlZmF1bHQoKTtcbiAgICBleHBvcnRzLnNwYW5Db250ZXh0ID0gbmV3IHNwYW5fY29udGV4dF8xLmRlZmF1bHQoKTtcbn1cbmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuL3NwYW5cIik7XG4vKipcbiAqIFJlZmVyZW5jZSBwYWlycyBhIHJlZmVyZW5jZSB0eXBlIGNvbnN0YW50IChlLmcuLCBSRUZFUkVOQ0VfQ0hJTERfT0Ygb3JcbiAqIFJFRkVSRU5DRV9GT0xMT1dTX0ZST00pIHdpdGggdGhlIFNwYW5Db250ZXh0IGl0IHBvaW50cyB0by5cbiAqXG4gKiBTZWUgdGhlIGV4cG9ydGVkIGNoaWxkT2YoKSBhbmQgZm9sbG93c0Zyb20oKSBmdW5jdGlvbnMgYXQgdGhlIHBhY2thZ2UgbGV2ZWwuXG4gKi9cbnZhciBSZWZlcmVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBSZWZlcmVuY2UgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHRoZSBSZWZlcmVuY2UgdHlwZSBjb25zdGFudCAoZS5nLixcbiAgICAgKiAgICAgICAgUkVGRVJFTkNFX0NISUxEX09GIG9yIFJFRkVSRU5DRV9GT0xMT1dTX0ZST00pLlxuICAgICAqIEBwYXJhbSB7U3BhbkNvbnRleHR9IHJlZmVyZW5jZWRDb250ZXh0IC0gdGhlIFNwYW5Db250ZXh0IGJlaW5nIHJlZmVycmVkXG4gICAgICogICAgICAgIHRvLiBBcyBhIGNvbnZlbmllbmNlLCBhIFNwYW4gaW5zdGFuY2UgbWF5IGJlIHBhc3NlZCBpbiBpbnN0ZWFkXG4gICAgICogICAgICAgIChpbiB3aGljaCBjYXNlIGl0cyAuY29udGV4dCgpIGlzIHVzZWQgaGVyZSkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlKHR5cGUsIHJlZmVyZW5jZWRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9yZWZlcmVuY2VkQ29udGV4dCA9IChyZWZlcmVuY2VkQ29udGV4dCBpbnN0YW5jZW9mIHNwYW5fMS5kZWZhdWx0ID9cbiAgICAgICAgICAgIHJlZmVyZW5jZWRDb250ZXh0LmNvbnRleHQoKSA6XG4gICAgICAgICAgICByZWZlcmVuY2VkQ29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFJlZmVyZW5jZSB0eXBlIChlLmcuLCBSRUZFUkVOQ0VfQ0hJTERfT0Ygb3JcbiAgICAgKiAgICAgICAgIFJFRkVSRU5DRV9GT0xMT1dTX0ZST00pLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTcGFuQ29udGV4dH0gVGhlIFNwYW5Db250ZXh0IGJlaW5nIHJlZmVycmVkIHRvIChlLmcuLCB0aGVcbiAgICAgKiAgICAgICAgIHBhcmVudCBpbiBhIFJFRkVSRU5DRV9DSElMRF9PRiBSZWZlcmVuY2UpLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUucmVmZXJlbmNlZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VkQ29udGV4dDtcbiAgICB9O1xuICAgIHJldHVybiBSZWZlcmVuY2U7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVmZXJlbmNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmZXJlbmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5vb3AgPSByZXF1aXJlKFwiLi9ub29wXCIpO1xuLyoqXG4gKiBTcGFuIHJlcHJlc2VudHMgYSBsb2dpY2FsIHVuaXQgb2Ygd29yayBhcyBwYXJ0IG9mIGEgYnJvYWRlciBUcmFjZS4gRXhhbXBsZXNcbiAqIG9mIHNwYW4gbWlnaHQgaW5jbHVkZSByZW1vdGUgcHJvY2VkdXJlIGNhbGxzIG9yIGEgaW4tcHJvY2VzcyBmdW5jdGlvbiBjYWxsc1xuICogdG8gc3ViLWNvbXBvbmVudHMuIEEgVHJhY2UgaGFzIGEgc2luZ2xlLCB0b3AtbGV2ZWwgXCJyb290XCIgU3BhbiB0aGF0IGluIHR1cm5cbiAqIG1heSBoYXZlIHplcm8gb3IgbW9yZSBjaGlsZCBTcGFucywgd2hpY2ggaW4gdHVybiBtYXkgaGF2ZSBjaGlsZHJlbi5cbiAqL1xudmFyIFNwYW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3BhbigpIHtcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIE9wZW5UcmFjaW5nIEFQSSBtZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFNwYW5Db250ZXh0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhpcyBTcGFuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3BhbkNvbnRleHR9XG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuY29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFRyYWNlciBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhpcyBTcGFuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7VHJhY2VyfVxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLnRyYWNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYWNlcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc3RyaW5nIG5hbWUgZm9yIHRoZSBsb2dpY2FsIG9wZXJhdGlvbiB0aGlzIHNwYW4gcmVwcmVzZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuc2V0T3BlcmF0aW9uTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX3NldE9wZXJhdGlvbk5hbWUobmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIGtleTp2YWx1ZSBwYWlyIG9uIHRoaXMgU3BhbiB0aGF0IGFsc28gcHJvcGFnYXRlcyB0byBmdXR1cmVcbiAgICAgKiBjaGlsZHJlbiBvZiB0aGUgYXNzb2NpYXRlZCBTcGFuLlxuICAgICAqXG4gICAgICogc2V0QmFnZ2FnZUl0ZW0oKSBlbmFibGVzIHBvd2VyZnVsIGZ1bmN0aW9uYWxpdHkgZ2l2ZW4gYSBmdWxsLXN0YWNrXG4gICAgICogb3BlbnRyYWNpbmcgaW50ZWdyYXRpb24gKGUuZy4sIGFyYml0cmFyeSBhcHBsaWNhdGlvbiBkYXRhIGZyb20gYSB3ZWJcbiAgICAgKiBjbGllbnQgY2FuIG1ha2UgaXQsIHRyYW5zcGFyZW50bHksIGFsbCB0aGUgd2F5IGludG8gdGhlIGRlcHRocyBvZiBhXG4gICAgICogc3RvcmFnZSBzeXN0ZW0pLCBhbmQgd2l0aCBpdCBzb21lIHBvd2VyZnVsIGNvc3RzOiB1c2UgdGhpcyBmZWF0dXJlIHdpdGhcbiAgICAgKiBjYXJlLlxuICAgICAqXG4gICAgICogSU1QT1JUQU5UIE5PVEUgIzE6IHNldEJhZ2dhZ2VJdGVtKCkgd2lsbCBvbmx5IHByb3BhZ2F0ZSBiYWdnYWdlIGl0ZW1zIHRvXG4gICAgICogKmZ1dHVyZSogY2F1c2FsIGRlc2NlbmRhbnRzIG9mIHRoZSBhc3NvY2lhdGVkIFNwYW4uXG4gICAgICpcbiAgICAgKiBJTVBPUlRBTlQgTk9URSAjMjogVXNlIHRoaXMgdGhvdWdodGZ1bGx5IGFuZCB3aXRoIGNhcmUuIEV2ZXJ5IGtleSBhbmRcbiAgICAgKiB2YWx1ZSBpcyBjb3BpZWQgaW50byBldmVyeSBsb2NhbCAqYW5kIHJlbW90ZSogY2hpbGQgb2YgdGhlIGFzc29jaWF0ZWRcbiAgICAgKiBTcGFuLCBhbmQgdGhhdCBjYW4gYWRkIHVwIHRvIGEgbG90IG9mIG5ldHdvcmsgYW5kIGNwdSBvdmVyaGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBTcGFuLnByb3RvdHlwZS5zZXRCYWdnYWdlSXRlbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NldEJhZ2dhZ2VJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZvciBhIGJhZ2dhZ2UgaXRlbSBnaXZlbiBpdHMga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXlcbiAgICAgKiAgICAgICAgIFRoZSBrZXkgZm9yIHRoZSBnaXZlbiB0cmFjZSBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqICAgICAgICAgU3RyaW5nIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlIGtleSBkb2VzIG5vdFxuICAgICAqICAgICAgICAgY29ycmVzcG9uZCB0byBhIHNldCB0cmFjZSBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuZ2V0QmFnZ2FnZUl0ZW0gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCYWdnYWdlSXRlbShrZXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNpbmdsZSB0YWcgdG8gdGhlIHNwYW4uICBTZWUgYGFkZFRhZ3MoKWAgZm9yIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuc2V0VGFnID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gTk9URTogdGhlIGNhbGwgaXMgbm9ybWFsaXplZCB0byBhIGNhbGwgdG8gX2FkZFRhZ3MoKVxuICAgICAgICB0aGlzLl9hZGRUYWdzKChfYSA9IHt9LCBfYVtrZXldID0gdmFsdWUsIF9hKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB2YXIgX2E7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBrZXkgdmFsdWUgcGFpcnMgdG8gdGhlIHNldCBvZiBzcGFuIHRhZ3MuXG4gICAgICpcbiAgICAgKiBNdWx0aXBsZSBjYWxscyB0byBhZGRUYWdzKCkgcmVzdWx0cyBpbiB0aGUgdGFncyBiZWluZyB0aGUgc3VwZXJzZXQgb2ZcbiAgICAgKiBhbGwgY2FsbHMuXG4gICAgICpcbiAgICAgKiBUaGUgYmVoYXZpb3Igb2Ygc2V0dGluZyB0aGUgc2FtZSBrZXkgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgc3BhblxuICAgICAqIGlzIHVuZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIFRoZSBzdXBwb3J0ZWQgdHlwZSBvZiB0aGUgdmFsdWVzIGlzIGltcGxlbWVudGF0aW9uLWRlcGVuZGVudC5cbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgYXJlIGV4cGVjdGVkIHRvIHNhZmVseSBoYW5kbGUgYWxsIHR5cGVzIG9mIHZhbHVlcyBidXRcbiAgICAgKiBtYXkgY2hvb3NlIHRvIGlnbm9yZSB1bnJlY29nbml6ZWQgLyB1bmhhbmRsZS1hYmxlIHZhbHVlcyAoZS5nLiBvYmplY3RzXG4gICAgICogd2l0aCBjeWNsaWMgcmVmZXJlbmNlcywgZnVuY3Rpb24gb2JqZWN0cykuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBTcGFuLnByb3RvdHlwZS5hZGRUYWdzID0gZnVuY3Rpb24gKGtleVZhbHVlTWFwKSB7XG4gICAgICAgIHRoaXMuX2FkZFRhZ3Moa2V5VmFsdWVNYXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGxvZyByZWNvcmQgdG8gdGhpcyBTcGFuLCBvcHRpb25hbGx5IGF0IGEgdXNlci1wcm92aWRlZCB0aW1lc3RhbXAuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgICBzcGFuLmxvZyh7XG4gICAgICogICAgICAgICBzaXplOiBycGMuc2l6ZSgpLCAgLy8gbnVtZXJpYyB2YWx1ZVxuICAgICAqICAgICAgICAgVVJJOiBycGMuVVJJKCksICAvLyBzdHJpbmcgdmFsdWVcbiAgICAgKiAgICAgICAgIHBheWxvYWQ6IHJwYy5wYXlsb2FkKCksICAvLyBPYmplY3QgdmFsdWVcbiAgICAgKiAgICAgICAgIFwia2V5cyBjYW4gYmUgYXJiaXRyYXJ5IHN0cmluZ3NcIjogcnBjLmZvbygpLFxuICAgICAqICAgICB9KTtcbiAgICAgKlxuICAgICAqICAgICBzcGFuLmxvZyh7XG4gICAgICogICAgICAgICBcImVycm9yLmRlc2NyaXB0aW9uXCI6IHNvbWVFcnJvci5kZXNjcmlwdGlvbigpLFxuICAgICAqICAgICB9LCBzb21lRXJyb3IudGltZXN0YW1wTWlsbGlzKCkpO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGtleVZhbHVlUGFpcnNcbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IG1hcHBpbmcgc3RyaW5nIGtleXMgdG8gYXJiaXRyYXJ5IHZhbHVlIHR5cGVzLiBBbGxcbiAgICAgKiAgICAgICAgVHJhY2VyIGltcGxlbWVudGF0aW9ucyBzaG91bGQgc3VwcG9ydCBib29sLCBzdHJpbmcsIGFuZCBudW1lcmljXG4gICAgICogICAgICAgIHZhbHVlIHR5cGVzLCBhbmQgc29tZSBtYXkgYWxzbyBzdXBwb3J0IE9iamVjdCB2YWx1ZXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqICAgICAgICBBbiBvcHRpb25hbCBwYXJhbWV0ZXIgc3BlY2lmeWluZyB0aGUgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kc1xuICAgICAqICAgICAgICBzaW5jZSB0aGUgVW5peCBlcG9jaC4gRnJhY3Rpb25hbCB2YWx1ZXMgYXJlIGFsbG93ZWQgc28gdGhhdFxuICAgICAqICAgICAgICB0aW1lc3RhbXBzIHdpdGggc3ViLW1pbGxpc2Vjb25kIGFjY3VyYWN5IGNhbiBiZSByZXByZXNlbnRlZC4gSWZcbiAgICAgKiAgICAgICAgbm90IHNwZWNpZmllZCwgdGhlIGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkIHRvIHVzZSBpdHMgbm90aW9uXG4gICAgICogICAgICAgIG9mIHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIGNhbGwuXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMsIHRpbWVzdGFtcCkge1xuICAgICAgICB0aGlzLl9sb2coa2V5VmFsdWVQYWlycywgdGltZXN0YW1wKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBERVBSRUNBVEVEXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2coeyBldmVudDogZXZlbnROYW1lLCBwYXlsb2FkOiBwYXlsb2FkIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5kIHRpbWVzdGFtcCBhbmQgZmluYWxpemVzIFNwYW4gc3RhdGUuXG4gICAgICpcbiAgICAgKiBXaXRoIHRoZSBleGNlcHRpb24gb2YgY2FsbHMgdG8gU3Bhbi5jb250ZXh0KCkgKHdoaWNoIGFyZSBhbHdheXMgYWxsb3dlZCksXG4gICAgICogZmluaXNoKCkgbXVzdCBiZSB0aGUgbGFzdCBjYWxsIG1hZGUgdG8gYW55IHNwYW4gaW5zdGFuY2UsIGFuZCB0byBkb1xuICAgICAqIG90aGVyd2lzZSBsZWFkcyB0byB1bmRlZmluZWQgYmVoYXZpb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGZpbmlzaFRpbWVcbiAgICAgKiAgICAgICAgIE9wdGlvbmFsIGZpbmlzaCB0aW1lIGluIG1pbGxpc2Vjb25kcyBhcyBhIFVuaXggdGltZXN0YW1wLiBEZWNpbWFsXG4gICAgICogICAgICAgICB2YWx1ZXMgYXJlIHN1cHBvcnRlZCBmb3IgdGltZXN0YW1wcyB3aXRoIHN1Yi1taWxsaXNlY29uZCBhY2N1cmFjeS5cbiAgICAgKiAgICAgICAgIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBjdXJyZW50IHRpbWUgKGFzIGRlZmluZWQgYnkgdGhlXG4gICAgICogICAgICAgICBpbXBsZW1lbnRhdGlvbikgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uIChmaW5pc2hUaW1lKSB7XG4gICAgICAgIHRoaXMuX2ZpbmlzaChmaW5pc2hUaW1lKTtcbiAgICAgICAgLy8gRG8gbm90IHJldHVybiBgdGhpc2AuIFRoZSBTcGFuIGdlbmVyYWxseSBzaG91bGQgbm90IGJlIHVzZWQgYWZ0ZXIgaXRcbiAgICAgICAgLy8gaXMgZmluaXNoZWQgc28gY2hhaW5pbmcgaXMgbm90IGRlc2lyZWQgaW4gdGhpcyBjb250ZXh0LlxuICAgIH07XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIERlcml2ZWQgY2xhc3NlcyBjYW4gY2hvb3NlIHRvIGltcGxlbWVudCB0aGUgYmVsb3dcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgLy8gQnkgZGVmYXVsdCByZXR1cm5zIGEgbm8tb3AgU3BhbkNvbnRleHQuXG4gICAgU3Bhbi5wcm90b3R5cGUuX2NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub29wLnNwYW5Db250ZXh0O1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCByZXR1cm5zIGEgbm8tb3AgdHJhY2VyLlxuICAgIC8vXG4gICAgLy8gVGhlIGJhc2UgY2xhc3MgY291bGQgc3RvcmUgdGhlIHRyYWNlciB0aGF0IGNyZWF0ZWQgaXQsIGJ1dCBpdCBkb2VzIG5vdFxuICAgIC8vIGluIG9yZGVyIHRvIGVuc3VyZSB0aGUgbm8tb3Agc3BhbiBpbXBsZW1lbnRhdGlvbiBoYXMgemVybyBtZW1iZXJzLFxuICAgIC8vIHdoaWNoIGFsbG93cyBWOCB0byBhZ2dyZXNzaXZlbHkgb3B0aW1pemUgY2FsbHMgdG8gc3VjaCBvYmplY3RzLlxuICAgIFNwYW4ucHJvdG90eXBlLl90cmFjZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub29wLnRyYWNlcjtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgZG9lcyBub3RoaW5nXG4gICAgU3Bhbi5wcm90b3R5cGUuX3NldE9wZXJhdGlvbk5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBTcGFuLnByb3RvdHlwZS5fc2V0QmFnZ2FnZUl0ZW0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBTcGFuLnByb3RvdHlwZS5fZ2V0QmFnZ2FnZUl0ZW0gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvLyBCeSBkZWZhdWx0IGRvZXMgbm90aGluZ1xuICAgIC8vXG4gICAgLy8gTk9URTogYm90aCBzZXRUYWcoKSBhbmQgYWRkVGFncygpIG1hcCB0byB0aGlzIGZ1bmN0aW9uLiBrZXlWYWx1ZVBhaXJzXG4gICAgLy8gd2lsbCBhbHdheXMgYmUgYW4gYXNzb2NpYXRpdmUgYXJyYXkuXG4gICAgU3Bhbi5wcm90b3R5cGUuX2FkZFRhZ3MgPSBmdW5jdGlvbiAoa2V5VmFsdWVQYWlycykge1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBTcGFuLnByb3RvdHlwZS5fbG9nID0gZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMsIHRpbWVzdGFtcCkge1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICAvL1xuICAgIC8vIGZpbmlzaFRpbWUgaXMgZXhwZWN0ZWQgdG8gYmUgZWl0aGVyIGEgbnVtYmVyIG9yIHVuZGVmaW5lZC5cbiAgICBTcGFuLnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24gKGZpbmlzaFRpbWUpIHtcbiAgICB9O1xuICAgIHJldHVybiBTcGFuO1xufSgpKTtcbmV4cG9ydHMuU3BhbiA9IFNwYW47XG5leHBvcnRzLmRlZmF1bHQgPSBTcGFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogU3BhbkNvbnRleHQgcmVwcmVzZW50cyBTcGFuIHN0YXRlIHRoYXQgbXVzdCBwcm9wYWdhdGUgdG8gZGVzY2VuZGFudCBTcGFuc1xuICogYW5kIGFjcm9zcyBwcm9jZXNzIGJvdW5kYXJpZXMuXG4gKlxuICogU3BhbkNvbnRleHQgaXMgbG9naWNhbGx5IGRpdmlkZWQgaW50byB0d28gcGllY2VzOiB0aGUgdXNlci1sZXZlbCBcIkJhZ2dhZ2VcIlxuICogKHNlZSBzZXRCYWdnYWdlSXRlbSBhbmQgZ2V0QmFnZ2FnZUl0ZW0pIHRoYXQgcHJvcGFnYXRlcyBhY3Jvc3MgU3BhblxuICogYm91bmRhcmllcyBhbmQgYW55IFRyYWNlci1pbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBmaWVsZHMgdGhhdCBhcmUgbmVlZGVkIHRvXG4gKiBpZGVudGlmeSBvciBvdGhlcndpc2UgY29udGV4dHVhbGl6ZSB0aGUgYXNzb2NpYXRlZCBTcGFuIGluc3RhbmNlIChlLmcuLCBhXG4gKiA8dHJhY2VfaWQsIHNwYW5faWQsIHNhbXBsZWQ+IHR1cGxlKS5cbiAqL1xudmFyIFNwYW5Db250ZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNwYW5Db250ZXh0KCkge1xuICAgIH1cbiAgICByZXR1cm4gU3BhbkNvbnRleHQ7XG59KCkpO1xuZXhwb3J0cy5TcGFuQ29udGV4dCA9IFNwYW5Db250ZXh0O1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BhbkNvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFuX2NvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRnVuY3Rpb25zID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xudmFyIE5vb3AgPSByZXF1aXJlKFwiLi9ub29wXCIpO1xudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuL3NwYW5cIik7XG4vKipcbiAqIFRyYWNlciBpcyB0aGUgZW50cnktcG9pbnQgYmV0d2VlbiB0aGUgaW5zdHJ1bWVudGF0aW9uIEFQSSBhbmQgdGhlIHRyYWNpbmdcbiAqIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIFRoZSBkZWZhdWx0IG9iamVjdCBhY3RzIGFzIGEgbm8tb3AgaW1wbGVtZW50YXRpb24uXG4gKlxuICogTm90ZSB0byBpbXBsZW1lbnRhdG9yczogZGVyaXZlZCBjbGFzc2VzIGNhbiBjaG9vc2UgdG8gZGlyZWN0bHkgaW1wbGVtZW50IHRoZVxuICogbWV0aG9kcyBpbiB0aGUgXCJPcGVuVHJhY2luZyBBUEkgbWV0aG9kc1wiIHNlY3Rpb24sIG9yIG9wdGlvbmFsbHkgdGhlIHN1YnNldCBvZlxuICogdW5kZXJzY29yZS1wcmVmaXhlZCBtZXRob2RzIHRvIHBpY2sgdXAgdGhlIGFyZ3VtZW50IGNoZWNraW5nIGFuZCBoYW5kbGluZ1xuICogYXV0b21hdGljYWxseSBmcm9tIHRoZSBiYXNlIGNsYXNzLlxuICovXG52YXIgVHJhY2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYWNlcigpIHtcbiAgICB9XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIE9wZW5UcmFjaW5nIEFQSSBtZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhbmQgcmV0dXJucyBhIG5ldyBTcGFuIHJlcHJlc2VudGluZyBhIGxvZ2ljYWwgdW5pdCBvZiB3b3JrLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgLy8gU3RhcnQgYSBuZXcgKHBhcmVudGxlc3MpIHJvb3QgU3BhbjpcbiAgICAgKiAgICAgdmFyIHBhcmVudCA9IFRyYWNlci5zdGFydFNwYW4oJ0RvV29yaycpO1xuICAgICAqXG4gICAgICogICAgIC8vIFN0YXJ0IGEgbmV3IChjaGlsZCkgU3BhbjpcbiAgICAgKiAgICAgdmFyIGNoaWxkID0gVHJhY2VyLnN0YXJ0U3BhbignbG9hZC1mcm9tLWRiJywge1xuICAgICAqICAgICAgICAgY2hpbGRPZjogcGFyZW50LmNvbnRleHQoKSxcbiAgICAgKiAgICAgfSk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gU3RhcnQgYSBuZXcgYXN5bmMgKEZvbGxvd3NGcm9tKSBTcGFuOlxuICAgICAqICAgICB2YXIgY2hpbGQgPSBUcmFjZXIuc3RhcnRTcGFuKCdhc3luYy1jYWNoZS13cml0ZScsIHtcbiAgICAgKiAgICAgICAgIHJlZmVyZW5jZXM6IFtcbiAgICAgKiAgICAgICAgICAgICBvcGVudHJhY2luZy5mb2xsb3dzRnJvbShwYXJlbnQuY29udGV4dCgpKVxuICAgICAqICAgICAgICAgXSxcbiAgICAgKiAgICAgfSk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gKFJFUVVJUkVEKS5cbiAgICAgKiBAcGFyYW0ge1NwYW5PcHRpb25zfSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgbmV3bHkgY3JlYXRlZCBzcGFuLlxuICAgICAqIEByZXR1cm4ge1NwYW59IC0gYSBuZXcgU3BhbiBvYmplY3QuXG4gICAgICovXG4gICAgVHJhY2VyLnByb3RvdHlwZS5zdGFydFNwYW4gPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvLyBDb252ZXJ0IG9wdGlvbnMuY2hpbGRPZiB0byBmaWVsZHMucmVmZXJlbmNlcyBhcyBuZWVkZWQuXG4gICAgICAgIGlmIChvcHRpb25zLmNoaWxkT2YpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgZnJvbSBhIFNwYW4gb3IgYSBTcGFuQ29udGV4dCBpbnRvIGEgUmVmZXJlbmNlLlxuICAgICAgICAgICAgdmFyIGNoaWxkT2YgPSBGdW5jdGlvbnMuY2hpbGRPZihvcHRpb25zLmNoaWxkT2YpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlcy5wdXNoKGNoaWxkT2YpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yZWZlcmVuY2VzID0gW2NoaWxkT2ZdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIChvcHRpb25zLmNoaWxkT2YpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydFNwYW4obmFtZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmplY3RzIHRoZSBnaXZlbiBTcGFuQ29udGV4dCBpbnN0YW5jZSBmb3IgY3Jvc3MtcHJvY2VzcyBwcm9wYWdhdGlvblxuICAgICAqIHdpdGhpbiBgY2FycmllcmAuIFRoZSBleHBlY3RlZCB0eXBlIG9mIGBjYXJyaWVyYCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBvZlxuICAgICAqIGBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBPcGVuVHJhY2luZyBkZWZpbmVzIGEgY29tbW9uIHNldCBvZiBgZm9ybWF0YCB2YWx1ZXMgKHNlZVxuICAgICAqIEZPUk1BVF9URVhUX01BUCwgRk9STUFUX0hUVFBfSEVBREVSUywgYW5kIEZPUk1BVF9CSU5BUlkpLCBhbmQgZWFjaCBoYXNcbiAgICAgKiBhbiBleHBlY3RlZCBjYXJyaWVyIHR5cGUuXG4gICAgICpcbiAgICAgKiBDb25zaWRlciB0aGlzIHBzZXVkb2NvZGUgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgICB2YXIgY2xpZW50U3BhbiA9IC4uLjtcbiAgICAgKiAgICAgLi4uXG4gICAgICogICAgIC8vIEluamVjdCBjbGllbnRTcGFuIGludG8gYSB0ZXh0IGNhcnJpZXIuXG4gICAgICogICAgIHZhciBoZWFkZXJzQ2FycmllciA9IHt9O1xuICAgICAqICAgICBUcmFjZXIuaW5qZWN0KGNsaWVudFNwYW4uY29udGV4dCgpLCBUcmFjZXIuRk9STUFUX0hUVFBfSEVBREVSUywgaGVhZGVyc0NhcnJpZXIpO1xuICAgICAqICAgICAvLyBJbmNvcnBvcmF0ZSB0aGUgdGV4dENhcnJpZXIgaW50byB0aGUgb3V0Ym91bmQgSFRUUCByZXF1ZXN0IGhlYWRlclxuICAgICAqICAgICAvLyBtYXAuXG4gICAgICogICAgIE9iamVjdC5hc3NpZ24ob3V0Ym91bmRIVFRQUmVxLmhlYWRlcnMsIGhlYWRlcnNDYXJyaWVyKTtcbiAgICAgKiAgICAgLy8gLi4uIHNlbmQgdGhlIGh0dHBSZXFcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1NwYW5Db250ZXh0fSBzcGFuQ29udGV4dCAtIHRoZSBTcGFuQ29udGV4dCB0byBpbmplY3QgaW50byB0aGVcbiAgICAgKiAgICAgICAgIGNhcnJpZXIgb2JqZWN0LiBBcyBhIGNvbnZlbmllbmNlLCBhIFNwYW4gaW5zdGFuY2UgbWF5IGJlIHBhc3NlZFxuICAgICAqICAgICAgICAgaW4gaW5zdGVhZCAoaW4gd2hpY2ggY2FzZSBpdHMgLmNvbnRleHQoKSBpcyB1c2VkIGZvciB0aGVcbiAgICAgKiAgICAgICAgIGluamVjdCgpKS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZvcm1hdCAtIHRoZSBmb3JtYXQgb2YgdGhlIGNhcnJpZXIuXG4gICAgICogQHBhcmFtICB7YW55fSBjYXJyaWVyIC0gc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgY2hvc2VuIGBmb3JtYXRgXG4gICAgICogICAgICAgICBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgY2FycmllciBvYmplY3QuXG4gICAgICovXG4gICAgVHJhY2VyLnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbiAoc3BhbkNvbnRleHQsIGZvcm1hdCwgY2Fycmllcikge1xuICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBwYXNzIGEgU3BhbiBpbnN0ZWFkIG9mIGEgU3BhbkNvbnRleHRcbiAgICAgICAgaWYgKHNwYW5Db250ZXh0IGluc3RhbmNlb2Ygc3Bhbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHNwYW5Db250ZXh0ID0gc3BhbkNvbnRleHQuY29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmplY3Qoc3BhbkNvbnRleHQsIGZvcm1hdCwgY2Fycmllcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgU3BhbkNvbnRleHQgaW5zdGFuY2UgZXh0cmFjdGVkIGZyb20gYGNhcnJpZXJgIGluIHRoZSBnaXZlblxuICAgICAqIGBmb3JtYXRgLlxuICAgICAqXG4gICAgICogT3BlblRyYWNpbmcgZGVmaW5lcyBhIGNvbW1vbiBzZXQgb2YgYGZvcm1hdGAgdmFsdWVzIChzZWVcbiAgICAgKiBGT1JNQVRfVEVYVF9NQVAsIEZPUk1BVF9IVFRQX0hFQURFUlMsIGFuZCBGT1JNQVRfQklOQVJZKSwgYW5kIGVhY2ggaGFzXG4gICAgICogYW4gZXhwZWN0ZWQgY2FycmllciB0eXBlLlxuICAgICAqXG4gICAgICogQ29uc2lkZXIgdGhpcyBwc2V1ZG9jb2RlIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgLy8gVXNlIHRoZSBpbmJvdW5kIEhUVFAgcmVxdWVzdCdzIGhlYWRlcnMgYXMgYSB0ZXh0IG1hcCBjYXJyaWVyLlxuICAgICAqICAgICB2YXIgaGVhZGVyc0NhcnJpZXIgPSBpbmJvdW5kSFRUUFJlcS5oZWFkZXJzO1xuICAgICAqICAgICB2YXIgd2lyZUN0eCA9IFRyYWNlci5leHRyYWN0KFRyYWNlci5GT1JNQVRfSFRUUF9IRUFERVJTLCBoZWFkZXJzQ2Fycmllcik7XG4gICAgICogICAgIHZhciBzZXJ2ZXJTcGFuID0gVHJhY2VyLnN0YXJ0U3BhbignLi4uJywgeyBjaGlsZE9mIDogd2lyZUN0eCB9KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gZm9ybWF0IC0gdGhlIGZvcm1hdCBvZiB0aGUgY2Fycmllci5cbiAgICAgKiBAcGFyYW0gIHthbnl9IGNhcnJpZXIgLSB0aGUgdHlwZSBvZiB0aGUgY2FycmllciBvYmplY3QgaXMgZGV0ZXJtaW5lZCBieVxuICAgICAqICAgICAgICAgdGhlIGZvcm1hdC5cbiAgICAgKiBAcmV0dXJuIHtTcGFuQ29udGV4dH1cbiAgICAgKiAgICAgICAgIFRoZSBleHRyYWN0ZWQgU3BhbkNvbnRleHQsIG9yIG51bGwgaWYgbm8gc3VjaCBTcGFuQ29udGV4dCBjb3VsZFxuICAgICAqICAgICAgICAgYmUgZm91bmQgaW4gYGNhcnJpZXJgXG4gICAgICovXG4gICAgVHJhY2VyLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKGZvcm1hdCwgY2Fycmllcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFjdChmb3JtYXQsIGNhcnJpZXIpO1xuICAgIH07XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIERlcml2ZWQgY2xhc3NlcyBjYW4gY2hvb3NlIHRvIGltcGxlbWVudCB0aGUgYmVsb3dcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgLy8gTk9URTogdGhlIGlucHV0IHRvIHRoaXMgbWV0aG9kIGlzICphbHdheXMqIGFuIGFzc29jaWF0aXZlIGFycmF5LiBUaGVcbiAgICAvLyBwdWJsaWMtZmFjaW5nIHN0YXJ0U3BhbigpIG1ldGhvZCBub3JtYWxpemVzIHRoZSBhcmd1bWVudHMgc28gdGhhdFxuICAgIC8vIGFsbCBOIGltcGxlbWVudGF0aW9ucyBkbyBub3QgbmVlZCB0byB3b3JyeSBhYm91dCB2YXJpYXRpb25zIGluIHRoZSBjYWxsXG4gICAgLy8gc2lnbmF0dXJlLlxuICAgIC8vXG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3IgcmV0dXJucyBhIG5vLW9wIHNwYW4uXG4gICAgVHJhY2VyLnByb3RvdHlwZS5fc3RhcnRTcGFuID0gZnVuY3Rpb24gKG5hbWUsIGZpZWxkcykge1xuICAgICAgICByZXR1cm4gTm9vcC5zcGFuO1xuICAgIH07XG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3IgaXMgYSBuby1vcC5cbiAgICBUcmFjZXIucHJvdG90eXBlLl9pbmplY3QgPSBmdW5jdGlvbiAoc3BhbkNvbnRleHQsIGZvcm1hdCwgY2Fycmllcikge1xuICAgIH07XG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmV0dXJuIGEgbm8tb3AgU3BhbkNvbnRleHQuXG4gICAgVHJhY2VyLnByb3RvdHlwZS5fZXh0cmFjdCA9IGZ1bmN0aW9uIChmb3JtYXQsIGNhcnJpZXIpIHtcbiAgICAgICAgcmV0dXJuIE5vb3Auc3BhbkNvbnRleHQ7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhY2VyO1xufSgpKTtcbmV4cG9ydHMuVHJhY2VyID0gVHJhY2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VyLmpzLm1hcCIsIi8qKlxuICogQHRoaXMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsbHlDb25zdHJ1Y3RvcjtcbiIsImltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuXG4vLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG52YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBpc0FycmF5KHgpIHtcbiAgcmV0dXJuIEJvb2xlYW4oeCAmJiB0eXBlb2YgeC5sZW5ndGggIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAvKiogQHR5cGUgeyFudW1iZXJ9ICovXG4gIHRoaXMuX3N0YXRlID0gMDtcbiAgLyoqIEB0eXBlIHshYm9vbGVhbn0gKi9cbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xuICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgLyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cbiAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG4gIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xuICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgfVxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcbiAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldDtcbiAgICB0cnkge1xuICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICB0cnkge1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICBpZiAoXG4gICAgICBuZXdWYWx1ZSAmJlxuICAgICAgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICkge1xuICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGYuX3N0YXRlID0gMTtcbiAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZShzZWxmKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChzZWxmLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgc2VsZi5fc3RhdGUgPSAyO1xuICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcbiAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuICB9XG4gIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcbiAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBmbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3Qoc2VsZiwgZXgpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgdmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcbiAgcmV0dXJuIHByb207XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gcHJvbWlzZUZpbmFsbHk7XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgIH1cblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJnc1tpXSA9IHZhbDtcbiAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLnJhY2UgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoYXJyW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuUHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuICAvLyBAdHMtaWdub3JlXG4gICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG4gICAgZnVuY3Rpb24oZm4pIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSkgfHxcbiAgZnVuY3Rpb24oZm4pIHtcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gIH07XG5cblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRCkgdG8gc3VwcG9ydCBBTUQsIENvbW1vbkpTL05vZGUuanMsIFJoaW5vLCBhbmQgYnJvd3NlcnMuXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdzdGFja2ZyYW1lJywgW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuU3RhY2tGcmFtZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gX2lzTnVtYmVyKG4pIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdGFja0ZyYW1lKGZ1bmN0aW9uTmFtZSwgYXJncywgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgc291cmNlKSB7XG4gICAgICAgIGlmIChmdW5jdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk5hbWUoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFyZ3MoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZU5hbWUoZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZU51bWJlcihsaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uTnVtYmVyKGNvbHVtbk51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNvdXJjZShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3RhY2tGcmFtZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGdldEZ1bmN0aW9uTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25OYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGdW5jdGlvbk5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRBcmdzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcmdzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBcmdzOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3MgbXVzdCBiZSBhbiBBcnJheScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcmdzID0gdjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOT1RFOiBQcm9wZXJ0eSBuYW1lIG1heSBiZSBtaXNsZWFkaW5nIGFzIGl0IGluY2x1ZGVzIHRoZSBwYXRoLFxuICAgICAgICAvLyBidXQgaXQgc29tZXdoYXQgbWlycm9ycyBWOCdzIEphdmFTY3JpcHRTdGFja1RyYWNlQXBpXG4gICAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvd2lraS9KYXZhU2NyaXB0U3RhY2tUcmFjZUFwaSBhbmQgR2Vja28nc1xuICAgICAgICAvLyBodHRwOi8vbXhyLm1vemlsbGEub3JnL21vemlsbGEtY2VudHJhbC9zb3VyY2UveHBjb20vYmFzZS9uc0lFeGNlcHRpb24uaWRsIzE0XG4gICAgICAgIGdldEZpbGVOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RmlsZU5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gU3RyaW5nKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldExpbmVOdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVOdW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpbmVOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAoIV9pc051bWJlcih2KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZU51bWJlciA9IE51bWJlcih2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb2x1bW5OdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHVtbk51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29sdW1uTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKCFfaXNOdW1iZXIodikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uTnVtYmVyID0gTnVtYmVyKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTb3VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gdGhpcy5nZXRGdW5jdGlvbk5hbWUoKSB8fCAne2Fub255bW91c30nO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAnKCcgKyAodGhpcy5nZXRBcmdzKCkgfHwgW10pLmpvaW4oJywnKSArICcpJztcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IHRoaXMuZ2V0RmlsZU5hbWUoKSA/ICgnQCcgKyB0aGlzLmdldEZpbGVOYW1lKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgbGluZU51bWJlciA9IF9pc051bWJlcih0aGlzLmdldExpbmVOdW1iZXIoKSkgPyAoJzonICsgdGhpcy5nZXRMaW5lTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgY29sdW1uTnVtYmVyID0gX2lzTnVtYmVyKHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpID8gKCc6JyArIHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb25OYW1lICsgYXJncyArIGZpbGVOYW1lICsgbGluZU51bWJlciArIGNvbHVtbk51bWJlcjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gU3RhY2tGcmFtZTtcbn0pKTtcbiIsInZhciBSQUZfVElNRU9VVCA9IDEwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFmdGVyRnJhbWUoY2FsbGJhY2spIHtcbiAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIHNldFRpbWVvdXQoY2FsbGJhY2spO1xuICB9O1xuXG4gIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCBSQUZfVElNRU9VVCk7XG4gIHZhciByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlcik7XG59IiwiaW1wb3J0IFF1ZXVlIGZyb20gJy4vcXVldWUnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdGhyb3R0bGUnO1xuaW1wb3J0IE5ESlNPTiBmcm9tICcuL25kanNvbic7XG5pbXBvcnQgeyBYSFJfSUdOT1JFIH0gZnJvbSAnLi9wYXRjaGluZy9wYXRjaC11dGlscyc7XG5pbXBvcnQgeyB0cnVuY2F0ZU1vZGVsLCBNRVRBREFUQV9NT0RFTCB9IGZyb20gJy4vdHJ1bmNhdGUnO1xuaW1wb3J0IHsgU0VSVkVSX1VSTF9QUkVGSVgsIEVSUk9SUywgVFJBTlNBQ1RJT05TIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJy4vcG9seWZpbGxzJztcbmltcG9ydCB7IF9fREVWX18gfSBmcm9tICcuLi9lbnYnO1xudmFyIFRIUk9UVExFX0lOVEVSVkFMID0gNjAwMDA7XG5cbnZhciBBcG1TZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFwbVNlcnZlcihjb25maWdTZXJ2aWNlLCBsb2dnaW5nU2VydmljZSkge1xuICAgIHRoaXMuX2NvbmZpZ1NlcnZpY2UgPSBjb25maWdTZXJ2aWNlO1xuICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlID0gbG9nZ2luZ1NlcnZpY2U7XG4gICAgdGhpcy5xdWV1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRocm90dGxlRXZlbnRzID0gbm9vcDtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQXBtU2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHRoaXMuX2luaXRRdWV1ZSgpO1xuICB9O1xuXG4gIF9wcm90by5faW5pdFF1ZXVlID0gZnVuY3Rpb24gX2luaXRRdWV1ZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlTGltaXQgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmdldCgncXVldWVMaW1pdCcpO1xuXG4gICAgdmFyIGZsdXNoSW50ZXJ2YWwgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmdldCgnZmx1c2hJbnRlcnZhbCcpO1xuXG4gICAgdmFyIGxpbWl0ID0gdGhpcy5fY29uZmlnU2VydmljZS5nZXQoJ2V2ZW50c0xpbWl0Jyk7XG5cbiAgICB2YXIgb25GbHVzaCA9IGZ1bmN0aW9uIG9uRmx1c2goZXZlbnRzKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IF90aGlzLnNlbmRFdmVudHMoZXZlbnRzKTtcblxuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgX3RoaXMuX2xvZ2dpbmdTZXJ2aWNlLndhcm4oJ0ZhaWxlZCBzZW5kaW5nIGV2ZW50cyEnLCBfdGhpcy5fY29uc3RydWN0RXJyb3IocmVhc29uKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnF1ZXVlID0gbmV3IFF1ZXVlKG9uRmx1c2gsIHtcbiAgICAgIHF1ZXVlTGltaXQ6IHF1ZXVlTGltaXQsXG4gICAgICBmbHVzaEludGVydmFsOiBmbHVzaEludGVydmFsXG4gICAgfSk7XG4gICAgdGhpcy50aHJvdHRsZUV2ZW50cyA9IHRocm90dGxlKHRoaXMucXVldWUuYWRkLmJpbmQodGhpcy5xdWV1ZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fbG9nZ2luZ1NlcnZpY2Uud2FybignRHJvcHBlZCBldmVudHMgZHVlIHRvIHRocm90dGxpbmchJyk7XG4gICAgfSwge1xuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgaW50ZXJ2YWw6IFRIUk9UVExFX0lOVEVSVkFMXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9wb3N0SnNvbiA9IGZ1bmN0aW9uIF9wb3N0SnNvbihlbmRQb2ludCwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLl9tYWtlSHR0cFJlcXVlc3QoJ1BPU1QnLCBlbmRQb2ludCwge1xuICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LW5kanNvbidcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gX3JlZi5yZXNwb25zZVRleHQ7XG4gICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY29uc3RydWN0RXJyb3IgPSBmdW5jdGlvbiBfY29uc3RydWN0RXJyb3IocmVhc29uKSB7XG4gICAgdmFyIHVybCA9IHJlYXNvbi51cmwsXG4gICAgICAgIHN0YXR1cyA9IHJlYXNvbi5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHJlYXNvbi5yZXNwb25zZVRleHQ7XG5cbiAgICBpZiAodHlwZW9mIHN0YXR1cyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IHVybCArICcgSFRUUCBzdGF0dXM6ICcgKyBzdGF0dXM7XG5cbiAgICBpZiAoX19ERVZfXyAmJiByZXNwb25zZVRleHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzZXJ2ZXJFcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmVyRXJyb3JzLnB1c2goZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1lc3NhZ2UgKz0gJyAnICsgc2VydmVyRXJyb3JzLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5kZWJ1ZygnRXJyb3IgcGFyc2luZyByZXNwb25zZSBmcm9tIEFQTSBzZXJ2ZXInLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9O1xuXG4gIF9wcm90by5fbWFrZUh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gX21ha2VIdHRwUmVxdWVzdChtZXRob2QsIHVybCwgX3RlbXApIHtcbiAgICB2YXIgX3JlZjIgPSBfdGVtcCA9PT0gdm9pZCAwID8ge1xuICAgICAgdGltZW91dDogMTAwMDBcbiAgICB9IDogX3RlbXAsXG4gICAgICAgIHRpbWVvdXQgPSBfcmVmMi50aW1lb3V0LFxuICAgICAgICBwYXlsb2FkID0gX3JlZjIucGF5bG9hZCxcbiAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhocltYSFJfSUdOT1JFXSA9IHRydWU7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG5cbiAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIGZvciAodmFyIGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBoZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IDAgfHwgc3RhdHVzID4gMzk5ICYmIHN0YXR1cyA8IDYwMCkge1xuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICByZXNwb25zZVRleHQ6IHJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoeGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cyxcbiAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiByZXNwb25zZVRleHRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChwYXlsb2FkKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hDb25maWcgPSBmdW5jdGlvbiBmZXRjaENvbmZpZyhzZXJ2aWNlTmFtZSwgZW52aXJvbm1lbnQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzZXJ2ZXJVcmwgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmdldCgnc2VydmVyVXJsJyk7XG5cbiAgICB2YXIgY29uZmlnRW5kcG9pbnQgPSBzZXJ2ZXJVcmwgKyBcIi9jb25maWcvdjEvcnVtL2FnZW50c1wiO1xuXG4gICAgaWYgKCFzZXJ2aWNlTmFtZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdzZXJ2aWNlTmFtZSBpcyByZXF1aXJlZCBmb3IgZmV0Y2hpbmcgY2VudHJhbCBjb25maWcuJyk7XG4gICAgfVxuXG4gICAgY29uZmlnRW5kcG9pbnQgKz0gXCI/c2VydmljZS5uYW1lPVwiICsgc2VydmljZU5hbWU7XG5cbiAgICBpZiAoZW52aXJvbm1lbnQpIHtcbiAgICAgIGNvbmZpZ0VuZHBvaW50ICs9IFwiJnNlcnZpY2UuZW52aXJvbm1lbnQ9XCIgKyBlbnZpcm9ubWVudDtcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxDb25maWcgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmdldExvY2FsQ29uZmlnKCk7XG5cbiAgICBpZiAobG9jYWxDb25maWcpIHtcbiAgICAgIGNvbmZpZ0VuZHBvaW50ICs9IFwiJmlmbm9uZW1hdGNoPVwiICsgbG9jYWxDb25maWcuZXRhZztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWFrZUh0dHBSZXF1ZXN0KCdHRVQnLCBjb25maWdFbmRwb2ludCwge1xuICAgICAgdGltZW91dDogNTAwMFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHhocikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbENvbmZpZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZW1vdGVDb25maWcgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIHZhciBldGFnID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdldGFnJyk7XG5cbiAgICAgICAgaWYgKGV0YWcpIHtcbiAgICAgICAgICByZW1vdGVDb25maWcuZXRhZyA9IGV0YWcucmVwbGFjZSgvW1wiXS9nLCAnJyk7XG5cbiAgICAgICAgICBfdGhpczIuX2NvbmZpZ1NlcnZpY2Uuc2V0TG9jYWxDb25maWcocmVtb3RlQ29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW1vdGVDb25maWc7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgdmFyIGVycm9yID0gX3RoaXMyLl9jb25zdHJ1Y3RFcnJvcihyZWFzb24pO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVNZXRhRGF0YSA9IGZ1bmN0aW9uIGNyZWF0ZU1ldGFEYXRhKCkge1xuICAgIHZhciBjZmcgPSB0aGlzLl9jb25maWdTZXJ2aWNlO1xuICAgIHZhciBtZXRhZGF0YSA9IHtcbiAgICAgIHNlcnZpY2U6IHtcbiAgICAgICAgbmFtZTogY2ZnLmdldCgnc2VydmljZU5hbWUnKSxcbiAgICAgICAgdmVyc2lvbjogY2ZnLmdldCgnc2VydmljZVZlcnNpb24nKSxcbiAgICAgICAgYWdlbnQ6IHtcbiAgICAgICAgICBuYW1lOiAncnVtLWpzJyxcbiAgICAgICAgICB2ZXJzaW9uOiBjZmcudmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgIG5hbWU6ICdqYXZhc2NyaXB0J1xuICAgICAgICB9LFxuICAgICAgICBlbnZpcm9ubWVudDogY2ZnLmdldCgnZW52aXJvbm1lbnQnKVxuICAgICAgfSxcbiAgICAgIGxhYmVsczogY2ZnLmdldCgnY29udGV4dC50YWdzJylcbiAgICB9O1xuICAgIHJldHVybiB0cnVuY2F0ZU1vZGVsKE1FVEFEQVRBX01PREVMLCBtZXRhZGF0YSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZEVycm9yID0gZnVuY3Rpb24gYWRkRXJyb3IoZXJyb3IpIHtcbiAgICB2YXIgX3RoaXMkdGhyb3R0bGVFdmVudHM7XG5cbiAgICB0aGlzLnRocm90dGxlRXZlbnRzKChfdGhpcyR0aHJvdHRsZUV2ZW50cyA9IHt9LCBfdGhpcyR0aHJvdHRsZUV2ZW50c1tFUlJPUlNdID0gZXJyb3IsIF90aGlzJHRocm90dGxlRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMkdGhyb3R0bGVFdmVudHMyO1xuXG4gICAgdGhpcy50aHJvdHRsZUV2ZW50cygoX3RoaXMkdGhyb3R0bGVFdmVudHMyID0ge30sIF90aGlzJHRocm90dGxlRXZlbnRzMltUUkFOU0FDVElPTlNdID0gdHJhbnNhY3Rpb24sIF90aGlzJHRocm90dGxlRXZlbnRzMikpO1xuICB9O1xuXG4gIF9wcm90by5uZGpzb25FcnJvcnMgPSBmdW5jdGlvbiBuZGpzb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICByZXR1cm4gTkRKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5kanNvbk1ldHJpY3NldHMgPSBmdW5jdGlvbiBuZGpzb25NZXRyaWNzZXRzKG1ldHJpY3NldHMpIHtcbiAgICByZXR1cm4gbWV0cmljc2V0cy5tYXAoZnVuY3Rpb24gKG1ldHJpY3NldCkge1xuICAgICAgcmV0dXJuIE5ESlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXRyaWNzZXQ6IG1ldHJpY3NldFxuICAgICAgfSk7XG4gICAgfSkuam9pbignJyk7XG4gIH07XG5cbiAgX3Byb3RvLm5kanNvblRyYW5zYWN0aW9ucyA9IGZ1bmN0aW9uIG5kanNvblRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiB0cmFuc2FjdGlvbnMubWFwKGZ1bmN0aW9uICh0cikge1xuICAgICAgdmFyIHNwYW5zID0gJyc7XG5cbiAgICAgIGlmICh0ci5zcGFucykge1xuICAgICAgICBzcGFucyA9IHRyLnNwYW5zLm1hcChmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgIHJldHVybiBOREpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNwYW46IHNwYW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSB0ci5zcGFucztcbiAgICAgIH1cblxuICAgICAgdmFyIGJyZWFrZG93bnMgPSAnJztcblxuICAgICAgaWYgKHRyLmJyZWFrZG93bikge1xuICAgICAgICBicmVha2Rvd25zID0gX3RoaXMzLm5kanNvbk1ldHJpY3NldHModHIuYnJlYWtkb3duKTtcbiAgICAgICAgZGVsZXRlIHRyLmJyZWFrZG93bjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5ESlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0cmFuc2FjdGlvbjogdHJcbiAgICAgIH0pICsgc3BhbnMgKyBicmVha2Rvd25zO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZW5kRXZlbnRzID0gZnVuY3Rpb24gc2VuZEV2ZW50cyhldmVudHMpIHtcbiAgICB2YXIgX3BheWxvYWQ7XG5cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2FjdGlvbnMgPSBbXTtcbiAgICB2YXIgZXJyb3JzID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBldmVudHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjM7XG5cbiAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYzID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBldmVudCA9IF9yZWYzO1xuXG4gICAgICBpZiAoZXZlbnRbVFJBTlNBQ1RJT05TXSkge1xuICAgICAgICB0cmFuc2FjdGlvbnMucHVzaChldmVudFtUUkFOU0FDVElPTlNdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50W0VSUk9SU10pIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXZlbnRbRVJST1JTXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zYWN0aW9ucy5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXlsb2FkID0gKF9wYXlsb2FkID0ge30sIF9wYXlsb2FkW1RSQU5TQUNUSU9OU10gPSB0cmFuc2FjdGlvbnMsIF9wYXlsb2FkW0VSUk9SU10gPSBlcnJvcnMsIF9wYXlsb2FkKTtcblxuICAgIHZhciBmaWx0ZXJlZFBheWxvYWQgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmFwcGx5RmlsdGVycyhwYXlsb2FkKTtcblxuICAgIGlmICghZmlsdGVyZWRQYXlsb2FkKSB7XG4gICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS53YXJuKCdEcm9wcGVkIHBheWxvYWQgZHVlIHRvIGZpbHRlcmluZyEnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZGpzb24gPSBbXTtcbiAgICB2YXIgbWV0YWRhdGEgPSB0aGlzLmNyZWF0ZU1ldGFEYXRhKCk7XG4gICAgbmRqc29uLnB1c2goTkRKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICB9KSk7XG4gICAgbmRqc29uID0gbmRqc29uLmNvbmNhdCh0aGlzLm5kanNvbkVycm9ycyhmaWx0ZXJlZFBheWxvYWRbRVJST1JTXSksIHRoaXMubmRqc29uVHJhbnNhY3Rpb25zKGZpbHRlcmVkUGF5bG9hZFtUUkFOU0FDVElPTlNdKSk7XG4gICAgdmFyIG5kanNvblBheWxvYWQgPSBuZGpzb24uam9pbignJyk7XG4gICAgdmFyIGVuZFBvaW50ID0gdGhpcy5fY29uZmlnU2VydmljZS5nZXQoJ3NlcnZlclVybCcpICsgU0VSVkVSX1VSTF9QUkVGSVg7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RKc29uKGVuZFBvaW50LCBuZGpzb25QYXlsb2FkKTtcbiAgfTtcblxuICByZXR1cm4gQXBtU2VydmVyO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBBcG1TZXJ2ZXI7IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFNjcmlwdCwgc2V0TGFiZWwsIG1lcmdlLCBleHRlbmQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENPTkZJR19DSEFOR0UsIExPQ0FMX0NPTkZJR19LRVkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGdldENvbmZpZ0Zyb21TY3JpcHQoKSB7XG4gIHZhciBzY3JpcHQgPSBnZXRDdXJyZW50U2NyaXB0KCk7XG4gIHZhciBjb25maWcgPSBnZXREYXRhQXR0cmlidXRlc0Zyb21Ob2RlKHNjcmlwdCk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVzRnJvbU5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgZGF0YUF0dHJzID0ge307XG4gIHZhciBkYXRhUmVnZXggPSAvXmRhdGEtKFtcXHctXSspJC87XG4gIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGF0dHIgPSBhdHRyc1tpXTtcblxuICAgIGlmIChkYXRhUmVnZXgudGVzdChhdHRyLm5vZGVOYW1lKSkge1xuICAgICAgdmFyIGtleSA9IGF0dHIubm9kZU5hbWUubWF0Y2goZGF0YVJlZ2V4KVsxXTtcbiAgICAgIHZhciBjYW1lbENhc2Vka2V5ID0ga2V5LnNwbGl0KCctJykubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID4gMCA/IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc3Vic3RyaW5nKDEpIDogdmFsdWU7XG4gICAgICB9KS5qb2luKCcnKTtcbiAgICAgIGRhdGFBdHRyc1tjYW1lbENhc2Vka2V5XSA9IGF0dHIudmFsdWUgfHwgYXR0ci5ub2RlVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFBdHRycztcbn1cblxudmFyIENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29uZmlnKCkge1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNlcnZpY2VOYW1lOiAnJyxcbiAgICAgIHNlcnZpY2VWZXJzaW9uOiAnJyxcbiAgICAgIGVudmlyb25tZW50OiAnJyxcbiAgICAgIHNlcnZlclVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODIwMCcsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBpbnN0cnVtZW50OiB0cnVlLFxuICAgICAgZGlzYWJsZUluc3RydW1lbnRhdGlvbnM6IFtdLFxuICAgICAgbG9nTGV2ZWw6ICd3YXJuJyxcbiAgICAgIGJyZWFrZG93bk1ldHJpY3M6IGZhbHNlLFxuICAgICAgaWdub3JlVHJhbnNhY3Rpb25zOiBbXSxcbiAgICAgIGV2ZW50c0xpbWl0OiA4MCxcbiAgICAgIHF1ZXVlTGltaXQ6IC0xLFxuICAgICAgZmx1c2hJbnRlcnZhbDogNTAwLFxuICAgICAgZGlzdHJpYnV0ZWRUcmFjaW5nOiB0cnVlLFxuICAgICAgZGlzdHJpYnV0ZWRUcmFjaW5nT3JpZ2luczogW10sXG4gICAgICBkaXN0cmlidXRlZFRyYWNpbmdIZWFkZXJOYW1lOiAndHJhY2VwYXJlbnQnLFxuICAgICAgcGFnZUxvYWRUcmFjZUlkOiAnJyxcbiAgICAgIHBhZ2VMb2FkU3BhbklkOiAnJyxcbiAgICAgIHBhZ2VMb2FkU2FtcGxlZDogZmFsc2UsXG4gICAgICBwYWdlTG9hZFRyYW5zYWN0aW9uTmFtZTogJycsXG4gICAgICB0cmFuc2FjdGlvblNhbXBsZVJhdGU6IDEuMCxcbiAgICAgIGNlbnRyYWxDb25maWc6IGZhbHNlLFxuICAgICAgbW9uaXRvckxvbmd0YXNrczogdHJ1ZSxcbiAgICAgIGNvbnRleHQ6IHt9XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEhhbmRsZXIoKTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLnZlcnNpb24gPSAnJztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb25maWcucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc2NyaXB0RGF0YSA9IGdldENvbmZpZ0Zyb21TY3JpcHQoKTtcbiAgICB0aGlzLnNldENvbmZpZyhzY3JpcHREYXRhKTtcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIF9wcm90by5zZXRWZXJzaW9uID0gZnVuY3Rpb24gc2V0VmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgfTtcblxuICBfcHJvdG8uYWRkRmlsdGVyID0gZnVuY3Rpb24gYWRkRmlsdGVyKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCB0byBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJzLnB1c2goY2IpO1xuICB9O1xuXG4gIF9wcm90by5hcHBseUZpbHRlcnMgPSBmdW5jdGlvbiBhcHBseUZpbHRlcnMoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhID0gdGhpcy5maWx0ZXJzW2ldKGRhdGEpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBvYmpLZXkpIHtcbiAgICAgIHJldHVybiBvYmogJiYgb2JqW29iaktleV07XG4gICAgfSwgdGhpcy5jb25maWcpO1xuICB9O1xuXG4gIF9wcm90by5zZXRVc2VyQ29udGV4dCA9IGZ1bmN0aW9uIHNldFVzZXJDb250ZXh0KHVzZXJDb250ZXh0KSB7XG4gICAgaWYgKHVzZXJDb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICAgIHVzZXJDb250ZXh0ID0ge307XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICB2YXIgX3VzZXJDb250ZXh0ID0gdXNlckNvbnRleHQsXG4gICAgICAgIGlkID0gX3VzZXJDb250ZXh0LmlkLFxuICAgICAgICB1c2VybmFtZSA9IF91c2VyQ29udGV4dC51c2VybmFtZSxcbiAgICAgICAgZW1haWwgPSBfdXNlckNvbnRleHQuZW1haWw7XG5cbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZXh0LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB1c2VybmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRleHQudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVtYWlsID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGV4dC5lbWFpbCA9IGVtYWlsO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLmNvbnRleHQudXNlciA9IGV4dGVuZCh0aGlzLmNvbmZpZy5jb250ZXh0LnVzZXIgfHwge30sIGNvbnRleHQpO1xuICB9O1xuXG4gIF9wcm90by5zZXRDdXN0b21Db250ZXh0ID0gZnVuY3Rpb24gc2V0Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KSB7XG4gICAgaWYgKGN1c3RvbUNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgICAgY3VzdG9tQ29udGV4dCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLmNvbnRleHQuY3VzdG9tID0gZXh0ZW5kKHRoaXMuY29uZmlnLmNvbnRleHQuY3VzdG9tIHx8IHt9LCBjdXN0b21Db250ZXh0KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkTGFiZWxzID0gZnVuY3Rpb24gYWRkTGFiZWxzKHRhZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5jb250ZXh0LnRhZ3MpIHtcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRleHQudGFncyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFncyk7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gc2V0TGFiZWwoaywgdGFnc1trXSwgX3RoaXMuY29uZmlnLmNvbnRleHQudGFncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldENvbmZpZyA9IGZ1bmN0aW9uIHNldENvbmZpZyhwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcGVydGllcyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0aWVzLnNlcnZlclVybCkge1xuICAgICAgcHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBwcm9wZXJ0aWVzLnNlcnZlclVybC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLmNvbmZpZywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5ldmVudHMuc2VuZChDT05GSUdfQ0hBTkdFLCBbdGhpcy5jb25maWddKTtcbiAgfTtcblxuICBfcHJvdG8udmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcGVydGllcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciByZXF1aXJlZEtleXMgPSBbJ3NlcnZpY2VOYW1lJywgJ3NlcnZlclVybCddO1xuICAgIHZhciBlcnJvcnMgPSB7XG4gICAgICBtaXNzaW5nOiBbXSxcbiAgICAgIGludmFsaWQ6IFtdXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChyZXF1aXJlZEtleXMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiAhcHJvcGVydGllc1trZXldKSB7XG4gICAgICAgIGVycm9ycy5taXNzaW5nLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmICEvXlthLXpBLVowLTkgXy1dKyQvLnRlc3QocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpIHtcbiAgICAgIGVycm9ycy5pbnZhbGlkLnB1c2goe1xuICAgICAgICBrZXk6ICdzZXJ2aWNlTmFtZScsXG4gICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLFxuICAgICAgICBhbGxvd2VkOiAnYS16LCBBLVosIDAtOSwgXywgLSwgPHNwYWNlPidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzYW1wbGVSYXRlID0gcHJvcGVydGllcy50cmFuc2FjdGlvblNhbXBsZVJhdGU7XG5cbiAgICBpZiAodHlwZW9mIHNhbXBsZVJhdGUgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc2FtcGxlUmF0ZSAhPT0gJ251bWJlcicgfHwgaXNOYU4oc2FtcGxlUmF0ZSkgfHwgc2FtcGxlUmF0ZSA8IDAgfHwgc2FtcGxlUmF0ZSA+IDEpKSB7XG4gICAgICBlcnJvcnMuaW52YWxpZC5wdXNoKHtcbiAgICAgICAga2V5OiAndHJhbnNhY3Rpb25TYW1wbGVSYXRlJyxcbiAgICAgICAgdmFsdWU6IHNhbXBsZVJhdGUsXG4gICAgICAgIGFsbG93ZWQ6ICdOdW1iZXIgYmV0d2VlbiAwIGFuZCAxJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBfcHJvdG8uZ2V0TG9jYWxDb25maWcgPSBmdW5jdGlvbiBnZXRMb2NhbENvbmZpZygpIHtcbiAgICB2YXIgY29uZmlnID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9DT05GSUdfS0VZKTtcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRMb2NhbENvbmZpZyA9IGZ1bmN0aW9uIHNldExvY2FsQ29uZmlnKGNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oTE9DQUxfQ09ORklHX0tFWSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb25maWc7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZzsiLCJ2YXIgU0NIRURVTEUgPSAnc2NoZWR1bGUnO1xudmFyIElOVk9LRSA9ICdpbnZva2UnO1xudmFyIENMRUFSID0gJ2NsZWFyJztcbnZhciBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG52YXIgUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTID0gWydsaW5rJywgJ2NzcycsICdzY3JpcHQnLCAnaW1nJywgJ3htbGh0dHByZXF1ZXN0JywgJ2ZldGNoJywgJ2JlYWNvbicsICdpZnJhbWUnXTtcbnZhciBSRVVTQUJJTElUWV9USFJFU0hPTEQgPSA1MDAwO1xudmFyIE1BWF9TUEFOX0RVUkFUSU9OID0gNSAqIDYwICogMTAwMDtcbnZhciBQQUdFX0xPQUQgPSAncGFnZS1sb2FkJztcbnZhciBST1VURV9DSEFOR0UgPSAncm91dGUtY2hhbmdlJztcbnZhciBUWVBFX0NVU1RPTSA9ICdjdXN0b20nO1xudmFyIFVTRVJfSU5URVJBQ1RJT04gPSAndXNlci1pbnRlcmFjdGlvbic7XG52YXIgSFRUUF9SRVFVRVNUX1RZUEUgPSAnaHR0cC1yZXF1ZXN0JztcbnZhciBURU1QT1JBUllfVFlQRSA9ICd0ZW1wb3JhcnknO1xudmFyIE5BTUVfVU5LTk9XTiA9ICdVbmtub3duJztcbnZhciBUUkFOU0FDVElPTl9UWVBFX09SREVSID0gW1BBR0VfTE9BRCwgUk9VVEVfQ0hBTkdFLCBVU0VSX0lOVEVSQUNUSU9OLCBIVFRQX1JFUVVFU1RfVFlQRSwgVFlQRV9DVVNUT00sIFRFTVBPUkFSWV9UWVBFXTtcbnZhciBVU0VSX1RJTUlOR19USFJFU0hPTEQgPSA2MDtcbnZhciBUUkFOU0FDVElPTl9TVEFSVCA9ICd0cmFuc2FjdGlvbjpzdGFydCc7XG52YXIgVFJBTlNBQ1RJT05fRU5EID0gJ3RyYW5zYWN0aW9uOmVuZCc7XG52YXIgQ09ORklHX0NIQU5HRSA9ICdjb25maWc6Y2hhbmdlJztcbnZhciBYTUxIVFRQUkVRVUVTVCA9ICd4bWxodHRwcmVxdWVzdCc7XG52YXIgRkVUQ0ggPSAnZmV0Y2gnO1xudmFyIEhJU1RPUlkgPSAnaGlzdG9yeSc7XG52YXIgRVZFTlRfVEFSR0VUID0gJ2V2ZW50dGFyZ2V0JztcbnZhciBFUlJPUiA9ICdlcnJvcic7XG52YXIgQkVGT1JFX0VWRU5UID0gJzpiZWZvcmUnO1xudmFyIEFGVEVSX0VWRU5UID0gJzphZnRlcic7XG52YXIgTE9DQUxfQ09ORklHX0tFWSA9ICdlbGFzdGljX2FwbV9jb25maWcnO1xudmFyIExPTkdfVEFTSyA9ICdsb25ndGFzayc7XG52YXIgUEFJTlQgPSAncGFpbnQnO1xudmFyIE1FQVNVUkUgPSAnbWVhc3VyZSc7XG52YXIgTkFWSUdBVElPTiA9ICduYXZpZ2F0aW9uJztcbnZhciBSRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG52YXIgRklSU1RfQ09OVEVOVEZVTF9QQUlOVCA9ICdmaXJzdC1jb250ZW50ZnVsLXBhaW50JztcbnZhciBMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQgPSAnbGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50JztcbnZhciBCUk9XU0VSX1JFU1BPTlNJVkVORVNTX0lOVEVSVkFMID0gNTAwO1xudmFyIEVSUk9SUyA9ICdlcnJvcnMnO1xudmFyIFRSQU5TQUNUSU9OUyA9ICd0cmFuc2FjdGlvbnMnO1xudmFyIEtFWVdPUkRfTElNSVQgPSAxMDI0O1xudmFyIFNFUlZFUl9VUkxfUFJFRklYID0gJy9pbnRha2UvdjIvcnVtL2V2ZW50cyc7XG5leHBvcnQgeyBTQ0hFRFVMRSwgSU5WT0tFLCBDTEVBUiwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTLCBSRVVTQUJJTElUWV9USFJFU0hPTEQsIE1BWF9TUEFOX0RVUkFUSU9OLCBQQUdFX0xPQUQsIFJPVVRFX0NIQU5HRSwgTkFNRV9VTktOT1dOLCBUWVBFX0NVU1RPTSwgVVNFUl9USU1JTkdfVEhSRVNIT0xELCBUUkFOU0FDVElPTl9TVEFSVCwgVFJBTlNBQ1RJT05fRU5ELCBDT05GSUdfQ0hBTkdFLCBYTUxIVFRQUkVRVUVTVCwgRkVUQ0gsIEhJU1RPUlksIEVWRU5UX1RBUkdFVCwgRVJST1IsIEJFRk9SRV9FVkVOVCwgQUZURVJfRVZFTlQsIExPQ0FMX0NPTkZJR19LRVksIEhUVFBfUkVRVUVTVF9UWVBFLCBMT05HX1RBU0ssIFBBSU5ULCBNRUFTVVJFLCBOQVZJR0FUSU9OLCBSRVNPVVJDRSwgRklSU1RfQ09OVEVOVEZVTF9QQUlOVCwgTEFSR0VTVF9DT05URU5URlVMX1BBSU5ULCBLRVlXT1JEX0xJTUlULCBTRVJWRVJfVVJMX1BSRUZJWCwgVEVNUE9SQVJZX1RZUEUsIFVTRVJfSU5URVJBQ1RJT04sIFRSQU5TQUNUSU9OX1RZUEVfT1JERVIsIEJST1dTRVJfUkVTUE9OU0lWRU5FU1NfSU5URVJWQUwsIEVSUk9SUywgVFJBTlNBQ1RJT05TIH07IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgVXJsIGZyb20gJy4vdXJsJztcbmltcG9ydCB7IFBBR0VfTE9BRCwgTkFWSUdBVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFBhZ2VNZXRhZGF0YSwgZ2V0U2VydmVyVGltaW5nSW5mbywgUEVSRiwgaXNQZXJmVGltZWxpbmVTdXBwb3J0ZWQgfSBmcm9tICcuL3V0aWxzJztcbnZhciBMRUZUX1NRVUFSRV9CUkFDS0VUID0gOTE7XG52YXIgUklHSFRfU1FVQVJFX0JSQUNLRVQgPSA5MztcbnZhciBFWFRFUk5BTCA9ICdleHRlcm5hbCc7XG52YXIgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5mdW5jdGlvbiBnZXRQb3J0TnVtYmVyKHBvcnQsIHByb3RvY29sKSB7XG4gIGlmIChwb3J0ID09PSAnJykge1xuICAgIHBvcnQgPSBwcm90b2NvbCA9PT0gJ2h0dHA6JyA/ICc4MCcgOiBwcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnNDQzJyA6ICcnO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmZ1bmN0aW9uIGdldFJlc3BvbnNlQ29udGV4dChwZXJmVGltaW5nRW50cnkpIHtcbiAgdmFyIHRyYW5zZmVyU2l6ZSA9IHBlcmZUaW1pbmdFbnRyeS50cmFuc2ZlclNpemUsXG4gICAgICBlbmNvZGVkQm9keVNpemUgPSBwZXJmVGltaW5nRW50cnkuZW5jb2RlZEJvZHlTaXplLFxuICAgICAgZGVjb2RlZEJvZHlTaXplID0gcGVyZlRpbWluZ0VudHJ5LmRlY29kZWRCb2R5U2l6ZSxcbiAgICAgIHNlcnZlclRpbWluZyA9IHBlcmZUaW1pbmdFbnRyeS5zZXJ2ZXJUaW1pbmc7XG4gIHZhciByZXNwQ29udGV4dCA9IHtcbiAgICB0cmFuc2Zlcl9zaXplOiB0cmFuc2ZlclNpemUsXG4gICAgZW5jb2RlZF9ib2R5X3NpemU6IGVuY29kZWRCb2R5U2l6ZSxcbiAgICBkZWNvZGVkX2JvZHlfc2l6ZTogZGVjb2RlZEJvZHlTaXplXG4gIH07XG4gIHZhciBzZXJ2ZXJUaW1pbmdTdHIgPSBnZXRTZXJ2ZXJUaW1pbmdJbmZvKHNlcnZlclRpbWluZyk7XG5cbiAgaWYgKHNlcnZlclRpbWluZ1N0cikge1xuICAgIHJlc3BDb250ZXh0LmhlYWRlcnMgPSB7XG4gICAgICAnc2VydmVyLXRpbWluZyc6IHNlcnZlclRpbWluZ1N0clxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmVzcENvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldERlc3RpbmF0aW9uKHBhcnNlZFVybCwgdHlwZSkge1xuICB2YXIgcG9ydCA9IHBhcnNlZFVybC5wb3J0LFxuICAgICAgcHJvdG9jb2wgPSBwYXJzZWRVcmwucHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSA9IHBhcnNlZFVybC5ob3N0bmFtZSxcbiAgICAgIGhvc3QgPSBwYXJzZWRVcmwuaG9zdDtcbiAgdmFyIHBvcnROdW1iZXIgPSBnZXRQb3J0TnVtYmVyKHBvcnQsIHByb3RvY29sKTtcbiAgdmFyIGlwdjZIb3N0bmFtZSA9IGhvc3RuYW1lLmNoYXJDb2RlQXQoMCkgPT09IExFRlRfU1FVQVJFX0JSQUNLRVQgJiYgaG9zdG5hbWUuY2hhckNvZGVBdChob3N0bmFtZS5sZW5ndGggLSAxKSA9PT0gUklHSFRfU1FVQVJFX0JSQUNLRVQ7XG4gIHZhciBhZGRyZXNzID0gaG9zdG5hbWU7XG5cbiAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgIGFkZHJlc3MgPSBob3N0bmFtZS5zbGljZSgxLCAtMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNlcnZpY2U6IHtcbiAgICAgIG5hbWU6IHByb3RvY29sICsgJy8vJyArIGhvc3QsXG4gICAgICByZXNvdXJjZTogaG9zdG5hbWUgKyAnOicgKyBwb3J0TnVtYmVyLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBwb3J0OiBOdW1iZXIocG9ydE51bWJlcilcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzb3VyY2VDb250ZXh0KGRhdGEpIHtcbiAgdmFyIGVudHJ5ID0gZGF0YS5lbnRyeSxcbiAgICAgIHVybCA9IGRhdGEudXJsO1xuICB2YXIgcGFyc2VkVXJsID0gbmV3IFVybCh1cmwpO1xuICB2YXIgZGVzdGluYXRpb24gPSBnZXREZXN0aW5hdGlvbihwYXJzZWRVcmwsIFJFU09VUkNFKTtcbiAgcmV0dXJuIHtcbiAgICBodHRwOiB7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHJlc3BvbnNlOiBnZXRSZXNwb25zZUNvbnRleHQoZW50cnkpXG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb25cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RXh0ZXJuYWxDb250ZXh0KGRhdGEpIHtcbiAgdmFyIHVybCA9IGRhdGEudXJsLFxuICAgICAgbWV0aG9kID0gZGF0YS5tZXRob2QsXG4gICAgICB0YXJnZXQgPSBkYXRhLnRhcmdldCxcbiAgICAgIHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgdmFyIHBhcnNlZFVybCA9IG5ldyBVcmwodXJsKTtcbiAgdmFyIGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb24ocGFyc2VkVXJsLCBFWFRFUk5BTCk7XG4gIHZhciBjb250ZXh0ID0ge1xuICAgIGh0dHA6IHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiBwYXJzZWRVcmwuaHJlZlxuICAgIH0sXG4gICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uXG4gIH07XG4gIHZhciBzdGF0dXNDb2RlO1xuXG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldC5zdGF0dXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdHVzQ29kZSA9IHRhcmdldC5zdGF0dXM7XG4gIH0gZWxzZSBpZiAocmVzcG9uc2UpIHtcbiAgICBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICB9XG5cbiAgY29udGV4dC5odHRwLnN0YXR1c19jb2RlID0gc3RhdHVzQ29kZTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTcGFuQ29udGV4dChzcGFuLCBkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3Bhbi50eXBlO1xuICB2YXIgY29udGV4dDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEVYVEVSTkFMOlxuICAgICAgY29udGV4dCA9IGdldEV4dGVybmFsQ29udGV4dChkYXRhKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBSRVNPVVJDRTpcbiAgICAgIGNvbnRleHQgPSBnZXRSZXNvdXJjZUNvbnRleHQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHNwYW4uYWRkQ29udGV4dChjb250ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUcmFuc2FjdGlvbkNvbnRleHQodHJhbnNhY3Rpb24sIF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICB0YWdzID0gX3JlZi50YWdzLFxuICAgICAgY29uZmlnQ29udGV4dCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInRhZ3NcIl0pO1xuXG4gIHZhciBwYWdlQ29udGV4dCA9IGdldFBhZ2VNZXRhZGF0YSgpO1xuICB2YXIgcmVzcG9uc2VDb250ZXh0ID0ge307XG5cbiAgaWYgKHRyYW5zYWN0aW9uLnR5cGUgPT09IFBBR0VfTE9BRCAmJiBpc1BlcmZUaW1lbGluZVN1cHBvcnRlZCgpKSB7XG4gICAgdmFyIGVudHJpZXMgPSBQRVJGLmdldEVudHJpZXNCeVR5cGUoTkFWSUdBVElPTik7XG5cbiAgICBpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3BvbnNlQ29udGV4dCA9IHtcbiAgICAgICAgcmVzcG9uc2U6IGdldFJlc3BvbnNlQ29udGV4dChlbnRyaWVzWzBdKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2FjdGlvbi5hZGRDb250ZXh0KHBhZ2VDb250ZXh0LCByZXNwb25zZUNvbnRleHQsIGNvbmZpZ0NvbnRleHQpO1xufSIsImltcG9ydCB7IEJFRk9SRV9FVkVOVCwgQUZURVJfRVZFTlQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnZhciBFdmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEV2ZW50SGFuZGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9ic2VydmUgPSBmdW5jdGlvbiBvYnNlcnZlKG5hbWUsIGZuKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNbbmFtZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vYnNlcnZlcnNbbmFtZV0ucHVzaChmbik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5vYnNlcnZlcnNbbmFtZV0uaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBfdGhpcy5vYnNlcnZlcnNbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNlbmRPbmx5ID0gZnVuY3Rpb24gc2VuZE9ubHkobmFtZSwgYXJncykge1xuICAgIHZhciBvYnMgPSB0aGlzLm9ic2VydmVyc1tuYW1lXTtcblxuICAgIGlmIChvYnMpIHtcbiAgICAgIG9icy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZW5kID0gZnVuY3Rpb24gc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgdGhpcy5zZW5kT25seShuYW1lICsgQkVGT1JFX0VWRU5ULCBhcmdzKTtcbiAgICB0aGlzLnNlbmRPbmx5KG5hbWUsIGFyZ3MpO1xuICAgIHRoaXMuc2VuZE9ubHkobmFtZSArIEFGVEVSX0VWRU5ULCBhcmdzKTtcbiAgfTtcblxuICByZXR1cm4gRXZlbnRIYW5kbGVyO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7IiwiaW1wb3J0IHsgWE1MSFRUUFJFUVVFU1QsIEZFVENILCBISVNUT1JZLCBQQUdFX0xPQUQsIEVSUk9SLCBFVkVOVF9UQVJHRVQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdHJ1bWVudGF0aW9uRmxhZ3MoaW5zdHJ1bWVudCwgZGlzYWJsZWRJbnN0cnVtZW50YXRpb25zKSB7XG4gIHZhciBfZmxhZ3M7XG5cbiAgdmFyIGZsYWdzID0gKF9mbGFncyA9IHt9LCBfZmxhZ3NbWE1MSFRUUFJFUVVFU1RdID0gZmFsc2UsIF9mbGFnc1tGRVRDSF0gPSBmYWxzZSwgX2ZsYWdzW0hJU1RPUlldID0gZmFsc2UsIF9mbGFnc1tQQUdFX0xPQURdID0gZmFsc2UsIF9mbGFnc1tFUlJPUl0gPSBmYWxzZSwgX2ZsYWdzW0VWRU5UX1RBUkdFVF0gPSBmYWxzZSwgX2ZsYWdzKTtcblxuICBpZiAoIWluc3RydW1lbnQpIHtcbiAgICByZXR1cm4gZmxhZ3M7XG4gIH1cblxuICBPYmplY3Qua2V5cyhmbGFncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGRpc2FibGVkSW5zdHJ1bWVudGF0aW9ucy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICBmbGFnc1trZXldID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmxhZ3M7XG59IiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgTG9nZ2luZ1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvZ2dpbmdTZXJ2aWNlKHNwZWMpIHtcbiAgICBpZiAoc3BlYyA9PT0gdm9pZCAwKSB7XG4gICAgICBzcGVjID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5sZXZlbHMgPSBbJ3RyYWNlJywgJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddO1xuICAgIHRoaXMubGV2ZWwgPSBzcGVjLmxldmVsIHx8ICdpbmZvJztcbiAgICB0aGlzLnByZWZpeCA9IHNwZWMucHJlZml4IHx8ICcnO1xuICAgIHRoaXMucmVzZXRMb2dNZXRob2RzKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTG9nZ2luZ1NlcnZpY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRMb2cgPSBmdW5jdGlvbiBzaG91bGRMb2cobGV2ZWwpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbHMuaW5kZXhPZihsZXZlbCkgPj0gdGhpcy5sZXZlbHMuaW5kZXhPZih0aGlzLmxldmVsKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TGV2ZWwgPSBmdW5jdGlvbiBzZXRMZXZlbChsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLnJlc2V0TG9nTWV0aG9kcygpO1xuICB9O1xuXG4gIF9wcm90by5yZXNldExvZ01ldGhvZHMgPSBmdW5jdGlvbiByZXNldExvZ01ldGhvZHMoKSB7XG4gICAgdmFyIGxvZ2dpbmdTZXJ2aWNlID0gdGhpcztcbiAgICB0aGlzLmxldmVscy5mb3JFYWNoKGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgbG9nZ2luZ1NlcnZpY2VbbGV2ZWxdID0gbG9nZ2luZ1NlcnZpY2Uuc2hvdWxkTG9nKGxldmVsKSA/IGxvZyA6IG5vb3A7XG5cbiAgICAgIGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IGxvZ2dpbmdTZXJ2aWNlLnByZWZpeDtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRMZXZlbDtcblxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICAgICAgY2FzZSAndHJhY2UnOlxuICAgICAgICAgICAgbm9ybWFsaXplZExldmVsID0gJ2luZm8nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgICAgICBub3JtYWxpemVkTGV2ZWwgPSAnaW5mbyc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub3JtYWxpemVkTGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICBhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zb2xlKSB7XG4gICAgICAgICAgdmFyIHJlYWxNZXRob2QgPSBjb25zb2xlW25vcm1hbGl6ZWRMZXZlbF0gfHwgY29uc29sZS5sb2c7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHJlYWxNZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlYWxNZXRob2QuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExvZ2dpbmdTZXJ2aWNlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnaW5nU2VydmljZTsiLCJ2YXIgTkRKU09OID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOREpTT04oKSB7fVxuXG4gIE5ESlNPTi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkob2JqZWN0KSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCkgKyAnXFxuJztcbiAgfTtcblxuICByZXR1cm4gTkRKU09OO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBOREpTT047IiwiaW1wb3J0IHsgU0NIRURVTEUsIElOVk9LRSwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgRVZFTlRfVEFSR0VUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFwbVN5bWJvbCB9IGZyb20gJy4vcGF0Y2gtdXRpbHMnO1xudmFyIGV2ZW50VHlwZXMgPSBbJ2NsaWNrJ107XG52YXIgZXZlbnRUeXBlU3ltYm9scyA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGV0ID0gZXZlbnRUeXBlc1tpXTtcbiAgZXZlbnRUeXBlU3ltYm9sc1tldF0gPSBhcG1TeW1ib2woZXQpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRJbnN0cnVtZW50RXZlbnQodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4pIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZXZlbnRUeXBlcy5pbmRleE9mKGV2ZW50VHlwZSkgPj0gMCAmJiB0eXBlb2YgbGlzdGVuZXJGbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXQoY2FsbGJhY2spIHtcbiAgaWYgKCF3aW5kb3cuRXZlbnRUYXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcHJvdG8gPSB3aW5kb3cuRXZlbnRUYXJnZXQucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl9TVFJdO1xuICB2YXIgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJdO1xuXG4gIGZ1bmN0aW9uIGZpbmRUYXNrSW5kZXgoZXhpc3RpbmdUYXNrcywgZXZlbnRUeXBlLCBsaXN0ZW5lckZuLCBjYXB0dXJlKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgdGFzayA9IGV4aXN0aW5nVGFza3NbX2ldO1xuXG4gICAgICBpZiAodGFzay5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSAmJiB0YXNrLmxpc3RlbmVyRm4gPT09IGxpc3RlbmVyRm4gJiYgdGFzay5jYXB0dXJlID09PSBjYXB0dXJlKSB7XG4gICAgICAgIHJldHVybiBfaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NhcHR1cmUob3B0aW9ucykge1xuICAgIHZhciBjYXB0dXJlO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNhcHR1cmUgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXB0dXJlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5jYXB0dXJlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcHR1cmU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMaXN0ZW5lcldyYXBwZXIodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnMpIHtcbiAgICB2YXIgZXZlbnRTeW1ib2wgPSBldmVudFR5cGVTeW1ib2xzW2V2ZW50VHlwZV07XG4gICAgaWYgKCFldmVudFN5bWJvbCkgcmV0dXJuIGxpc3RlbmVyRm47XG4gICAgdmFyIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbZXZlbnRTeW1ib2xdO1xuICAgIHZhciBjYXB0dXJlID0gaXNDYXB0dXJlKG9wdGlvbnMpO1xuXG4gICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgIHZhciB0YXNrSW5kZXggPSBmaW5kVGFza0luZGV4KGV4aXN0aW5nVGFza3MsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgY2FwdHVyZSk7XG5cbiAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZhciBfdGFzayA9IGV4aXN0aW5nVGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgcmV0dXJuIF90YXNrLndyYXBwaW5nRm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbZXZlbnRTeW1ib2xdID0gW107XG4gICAgfVxuXG4gICAgdmFyIHRhc2sgPSB7XG4gICAgICBzb3VyY2U6IEVWRU5UX1RBUkdFVCxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICBsaXN0ZW5lckZuOiBsaXN0ZW5lckZuLFxuICAgICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICAgIHdyYXBwaW5nRm46IHdyYXBwaW5nRm5cbiAgICB9O1xuICAgIGV4aXN0aW5nVGFza3MucHVzaCh0YXNrKTtcblxuICAgIGZ1bmN0aW9uIHdyYXBwaW5nRm4oKSB7XG4gICAgICBjYWxsYmFjayhTQ0hFRFVMRSwgdGFzayk7XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBsaXN0ZW5lckZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjYWxsYmFjayhJTlZPS0UsIHRhc2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGluZ0ZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V3JhcHBpbmdGbih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9ucykge1xuICAgIHZhciBldmVudFN5bWJvbCA9IGV2ZW50VHlwZVN5bWJvbHNbZXZlbnRUeXBlXTtcbiAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtldmVudFN5bWJvbF07XG5cbiAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgdmFyIGNhcHR1cmUgPSBpc0NhcHR1cmUob3B0aW9ucyk7XG4gICAgICB2YXIgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleChleGlzdGluZ1Rhc2tzLCBldmVudFR5cGUsIGxpc3RlbmVyRm4sIGNhcHR1cmUpO1xuXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICB2YXIgdGFzayA9IGV4aXN0aW5nVGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0YXJnZXRbZXZlbnRTeW1ib2xdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhc2sud3JhcHBpbmdGbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdGVuZXJGbjtcbiAgfVxuXG4gIHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl9TVFJdID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuXG4gICAgaWYgKCFzaG91bGRJbnN0cnVtZW50RXZlbnQodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4pKSB7XG4gICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIHdyYXBwaW5nTGlzdGVuZXJGbiA9IGNyZWF0ZUxpc3RlbmVyV3JhcHBlcih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGFyZ3NbMV0gPSB3cmFwcGluZ0xpc3RlbmVyRm47XG4gICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgfTtcblxuICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSXSA9IGZ1bmN0aW9uIChldmVudFR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnNPckNhcHR1cmUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcblxuICAgIGlmICghc2hvdWxkSW5zdHJ1bWVudEV2ZW50KHRhcmdldCwgZXZlbnRUeXBlLCBsaXN0ZW5lckZuKSkge1xuICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHZhciB3cmFwcGluZ0ZuID0gZ2V0V3JhcHBpbmdGbih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGFyZ3NbMV0gPSB3cmFwcGluZ0ZuO1xuICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gIH07XG59IiwiaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJy4uL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4vcGF0Y2gtdXRpbHMnO1xuaW1wb3J0IHsgU0NIRURVTEUsIElOVk9LRSwgRkVUQ0ggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2NoZWR1bGVNaWNyb1Rhc2sgfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGZXRjaChjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5mZXRjaCB8fCAhd2luZG93LlJlcXVlc3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgIHRhc2suc3RhdGUgPSBTQ0hFRFVMRTtcbiAgICBjYWxsYmFjayhTQ0hFRFVMRSwgdGFzayk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VUYXNrKHRhc2spIHtcbiAgICB0YXNrLnN0YXRlID0gSU5WT0tFO1xuICAgIGNhbGxiYWNrKElOVk9LRSwgdGFzayk7XG4gIH1cblxuICB2YXIgbmF0aXZlRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XG5cbiAgd2luZG93LmZldGNoID0gZnVuY3Rpb24gKGlucHV0LCBpbml0KSB7XG4gICAgdmFyIGZldGNoU2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHJlcXVlc3QsIHVybDtcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuICAgICAgdXJsID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpbnB1dCkge1xuICAgICAgcmVxdWVzdCA9IGlucHV0O1xuICAgICAgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuYXRpdmVGZXRjaC5hcHBseShmZXRjaFNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZhciB0YXNrID0ge1xuICAgICAgc291cmNlOiBGRVRDSCxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHR5cGU6ICdtYWNyb1Rhc2snLFxuICAgICAgZGF0YToge1xuICAgICAgICB0YXJnZXQ6IHJlcXVlc3QsXG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBhYm9ydGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmZldGNoSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICBzY2hlZHVsZVRhc2sodGFzayk7XG4gICAgICB2YXIgcHJvbWlzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZSA9IG5hdGl2ZUZldGNoLmFwcGx5KGZldGNoU2VsZiwgW3JlcXVlc3RdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHRhc2suZGF0YS5lcnJvciA9IGVycm9yO1xuICAgICAgICBpbnZva2VUYXNrKHRhc2spO1xuICAgICAgICBnbG9iYWxTdGF0ZS5mZXRjaEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGFzay5kYXRhLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgaW52b2tlVGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRhc2suZGF0YS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgIGludm9rZVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5mZXRjaEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBJTlZPS0UsIEhJU1RPUlkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSGlzdG9yeShjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5oaXN0b3J5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5hdGl2ZVB1c2hTdGF0ZSA9IGhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIGlmICh0eXBlb2YgbmF0aXZlUHVzaFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHRpdGxlLCB1cmwpIHtcbiAgICAgIHZhciB0YXNrID0ge1xuICAgICAgICBzb3VyY2U6IEhJU1RPUlksXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjYWxsYmFjayhJTlZPS0UsIHRhc2spO1xuICAgICAgbmF0aXZlUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufSIsImltcG9ydCB7IHBhdGNoWE1MSHR0cFJlcXVlc3QgfSBmcm9tICcuL3hoci1wYXRjaCc7XG5pbXBvcnQgeyBwYXRjaEZldGNoIH0gZnJvbSAnLi9mZXRjaC1wYXRjaCc7XG5pbXBvcnQgeyBwYXRjaEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnktcGF0Y2gnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudFRhcmdldCB9IGZyb20gJy4vZXZlbnQtdGFyZ2V0LXBhdGNoJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBISVNUT1JZLCBGRVRDSCwgWE1MSFRUUFJFUVVFU1QsIEVWRU5UX1RBUkdFVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgcGF0Y2hFdmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG52YXIgYWxyZWFkeVBhdGNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gcGF0Y2hBbGwoKSB7XG4gIGlmICghYWxyZWFkeVBhdGNoZWQpIHtcbiAgICBhbHJlYWR5UGF0Y2hlZCA9IHRydWU7XG4gICAgcGF0Y2hYTUxIdHRwUmVxdWVzdChmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLnNlbmQoWE1MSFRUUFJFUVVFU1QsIFtldmVudCwgdGFza10pO1xuICAgIH0pO1xuICAgIHBhdGNoRmV0Y2goZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEZFVENILCBbZXZlbnQsIHRhc2tdKTtcbiAgICB9KTtcbiAgICBwYXRjaEhpc3RvcnkoZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEhJU1RPUlksIFtldmVudCwgdGFza10pO1xuICAgIH0pO1xuICAgIHBhdGNoRXZlbnRUYXJnZXQoZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEVWRU5UX1RBUkdFVCwgW2V2ZW50LCB0YXNrXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGF0Y2hFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCB7IHBhdGNoQWxsLCBwYXRjaEV2ZW50SGFuZGxlciB9OyIsImV4cG9ydCB2YXIgZ2xvYmFsU3RhdGUgPSB7XG4gIGZldGNoSW5Qcm9ncmVzczogZmFsc2Vcbn07XG5leHBvcnQgZnVuY3Rpb24gYXBtU3ltYm9sKG5hbWUpIHtcbiAgcmV0dXJuICdfX2FwbV9zeW1ib2xfXycgKyBuYW1lO1xufVxuXG5mdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBvcmlnaW5hbCkge1xuICBwYXRjaGVkW2FwbVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpXSA9IG9yaWdpbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gIHZhciBwcm90byA9IHRhcmdldDtcblxuICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICBwcm90byA9IHRhcmdldDtcbiAgfVxuXG4gIHZhciBkZWxlZ2F0ZU5hbWUgPSBhcG1TeW1ib2wobmFtZSk7XG4gIHZhciBkZWxlZ2F0ZTtcblxuICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG4gICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG4gICAgdmFyIGRlc2MgPSBwcm90byAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcblxuICAgIGlmIChpc1Byb3BlcnR5V3JpdGFibGUoZGVzYykpIHtcbiAgICAgIHZhciBwYXRjaERlbGVnYXRlID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcblxuICAgICAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVsZWdhdGU7XG59XG5leHBvcnQgdmFyIFhIUl9JR05PUkUgPSBhcG1TeW1ib2woJ3hocklnbm9yZScpO1xuZXhwb3J0IHZhciBYSFJfU1lOQyA9IGFwbVN5bWJvbCgneGhyU3luYycpO1xuZXhwb3J0IHZhciBYSFJfVVJMID0gYXBtU3ltYm9sKCd4aHJVUkwnKTtcbmV4cG9ydCB2YXIgWEhSX01FVEhPRCA9IGFwbVN5bWJvbCgneGhyTWV0aG9kJyk7IiwiaW1wb3J0IHsgYXBtU3ltYm9sLCBwYXRjaE1ldGhvZCwgWEhSX1NZTkMsIFhIUl9VUkwsIFhIUl9NRVRIT0QsIFhIUl9JR05PUkUgfSBmcm9tICcuL3BhdGNoLXV0aWxzJztcbmltcG9ydCB7IHNjaGVkdWxlTWFjcm9UYXNrIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0NIRURVTEUsIElOVk9LRSwgQ0xFQVIsIFhNTEhUVFBSRVFVRVNULCBBRERfRVZFTlRfTElTVEVORVJfU1RSLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbnZhciBYSFJfVEFTSyA9IGFwbVN5bWJvbCgneGhyVGFzaycpO1xudmFyIFhIUl9MSVNURU5FUiA9IGFwbVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbnZhciBYSFJfU0NIRURVTEVEID0gYXBtU3ltYm9sKCd4aHJTY2hlZHVsZWQnKTtcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFhNTEh0dHBSZXF1ZXN0KGNhbGxiYWNrKSB7XG4gIHZhciBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgdmFyIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbQUREX0VWRU5UX0xJU1RFTkVSX1NUUl07XG4gIHZhciBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1JFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJdO1xuXG4gIGlmICghb3JpQWRkTGlzdGVuZXIpIHtcbiAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IHdpbmRvd1snWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuXG4gICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpIHtcbiAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGU7XG4gICAgICBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGVbQUREX0VWRU5UX0xJU1RFTkVSX1NUUl07XG4gICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGVbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUl07XG4gICAgfVxuICB9XG5cbiAgdmFyIFJFQURZX1NUQVRFX0NIQU5HRSA9ICdyZWFkeXN0YXRlY2hhbmdlJztcbiAgdmFyIExPQUQgPSAnbG9hZCc7XG5cbiAgZnVuY3Rpb24gaW52b2tlVGFzayh0YXNrKSB7XG4gICAgdGFzay5zdGF0ZSA9IElOVk9LRTtcbiAgICBjYWxsYmFjayhJTlZPS0UsIHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICBYTUxIdHRwUmVxdWVzdFtYSFJfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgIHRhc2suc3RhdGUgPSBTQ0hFRFVMRTtcbiAgICBjYWxsYmFjayhTQ0hFRFVMRSwgdGFzayk7XG4gICAgdmFyIF90YXNrJGRhdGEgPSB0YXNrLmRhdGEsXG4gICAgICAgIGFib3J0ZWQgPSBfdGFzayRkYXRhLmFib3J0ZWQsXG4gICAgICAgIHRhcmdldCA9IF90YXNrJGRhdGEudGFyZ2V0O1xuXG4gICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgb3JpQWRkTGlzdGVuZXIgPSB0YXJnZXRbQUREX0VWRU5UX0xJU1RFTkVSX1NUUl07XG4gICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IHRhcmdldFtSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSXTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXTtcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbGlzdGVuZXIpO1xuICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIExPQUQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgZWFybGllckV2ZW50O1xuXG4gICAgdmFyIG5ld0xpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl0gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICAgIGlmIChlYXJsaWVyRXZlbnQpIHtcbiAgICAgICAgaWYgKGVhcmxpZXJFdmVudCAhPSB0eXBlKSB7XG4gICAgICAgICAgc2NoZWR1bGVNYWNyb1Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgIT09IElOVk9LRSkge1xuICAgICAgICAgICAgICBpbnZva2VUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0LnJlYWR5U3RhdGUgPT09IHRhcmdldC5ET05FKSB7XG4gICAgICAgICAgaWYgKCFhYm9ydGVkICYmIFhNTEh0dHBSZXF1ZXN0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFKSB7XG4gICAgICAgICAgICBlYXJsaWVyRXZlbnQgPSB0eXBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvcmlBZGRMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBuZXdMaXN0ZW5lcik7XG4gICAgb3JpQWRkTGlzdGVuZXIuY2FsbCh0YXJnZXQsIExPQUQsIG5ld0xpc3RlbmVyKTtcbiAgICB2YXIgc3RvcmVkVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG5cbiAgICBpZiAoIXN0b3JlZFRhc2spIHtcbiAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgdGFzay5zdGF0ZSA9IENMRUFSO1xuICAgIGNhbGxiYWNrKENMRUFSLCB0YXNrKTtcbiAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFyIG9wZW5OYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICBpZiAoIXNlbGZbWEhSX0lHTk9SRV0pIHtcbiAgICAgICAgc2VsZltYSFJfTUVUSE9EXSA9IGFyZ3NbMF07XG4gICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICBzZWxmW1hIUl9TWU5DXSA9IGFyZ3NbMl0gPT09IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICB9KTtcbiAgdmFyIHNlbmROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ3NlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICBpZiAoc2VsZltYSFJfSUdOT1JFXSkge1xuICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhc2sgPSB7XG4gICAgICAgIHNvdXJjZTogWE1MSFRUUFJFUVVFU1QsXG4gICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgdHlwZTogJ21hY3JvVGFzaycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0YXJnZXQ6IHNlbGYsXG4gICAgICAgICAgbWV0aG9kOiBzZWxmW1hIUl9NRVRIT0RdLFxuICAgICAgICAgIHN5bmM6IHNlbGZbWEhSX1NZTkNdLFxuICAgICAgICAgIHVybDogc2VsZltYSFJfVVJMXSxcbiAgICAgICAgICBhYm9ydGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc2NoZWR1bGVUYXNrKHRhc2spO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBYTUxIdHRwUmVxdWVzdFtYSFJfU0NIRURVTEVEXSA9IHRydWU7XG5cbiAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICBpbnZva2VUYXNrKHRhc2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pO1xuICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgaWYgKCFzZWxmW1hIUl9JR05PUkVdKSB7XG4gICAgICAgIHZhciB0YXNrID0gc2VsZltYSFJfVEFTS107XG5cbiAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodGFzay5kYXRhICYmIHRhc2suZGF0YS5hYm9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICB9KTtcbn0iLCJpbXBvcnQgUHJvbWlzZVBvbGx5ZmlsbCBmcm9tICdwcm9taXNlLXBvbHlmaWxsJztcbnZhciBsb2NhbCA9IHt9O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbG9jYWwgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBsb2NhbCA9IHNlbGY7XG59XG5cbnZhciBQcm9taXNlID0gJ1Byb21pc2UnIGluIGxvY2FsID8gbG9jYWwuUHJvbWlzZSA6IFByb21pc2VQb2xseWZpbGw7XG5leHBvcnQgeyBQcm9taXNlIH07IiwidmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWV1ZShvbkZsdXNoLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMub25GbHVzaCA9IG9uRmx1c2g7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMucXVldWVMaW1pdCA9IG9wdHMucXVldWVMaW1pdCB8fCAtMTtcbiAgICB0aGlzLmZsdXNoSW50ZXJ2YWwgPSBvcHRzLmZsdXNoSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWV1ZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLl9zZXRUaW1lciA9IGZ1bmN0aW9uIF9zZXRUaW1lcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5mbHVzaCgpO1xuICAgIH0sIHRoaXMuZmx1c2hJbnRlcnZhbCk7XG4gIH07XG5cbiAgX3Byb3RvLl9jbGVhciA9IGZ1bmN0aW9uIF9jbGVhcigpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudGltZW91dElkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgIHRoaXMudGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLm9uRmx1c2godGhpcy5pdGVtcyk7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcblxuICAgIGlmICh0aGlzLnF1ZXVlTGltaXQgIT09IC0xICYmIHRoaXMuaXRlbXMubGVuZ3RoID49IHRoaXMucXVldWVMaW1pdCkge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudGltZW91dElkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9zZXRUaW1lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUXVldWU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlOyIsImltcG9ydCBBcG1TZXJ2ZXIgZnJvbSAnLi9hcG0tc2VydmVyJztcbmltcG9ydCBDb25maWdTZXJ2aWNlIGZyb20gJy4vY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IExvZ2dpbmdTZXJ2aWNlIGZyb20gJy4vbG9nZ2luZy1zZXJ2aWNlJztcbmltcG9ydCB7IENPTkZJR19DSEFOR0UgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnZhciBTZXJ2aWNlRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmljZUZhY3RvcnkoKSB7XG4gICAgdGhpcy5fc2VydmljZUNyZWF0b3JzID0ge307XG4gICAgdGhpcy5fc2VydmljZUluc3RhbmNlcyA9IHt9O1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTZXJ2aWNlRmFjdG9yeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlZ2lzdGVyQ29yZVNlcnZpY2VzID0gZnVuY3Rpb24gcmVnaXN0ZXJDb3JlU2VydmljZXMoKSB7XG4gICAgdmFyIHNlcnZpY2VGYWN0b3J5ID0gdGhpcztcbiAgICB0aGlzLnJlZ2lzdGVyU2VydmljZUNyZWF0b3IoJ0NvbmZpZ1NlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IENvbmZpZ1NlcnZpY2UoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyU2VydmljZUNyZWF0b3IoJ0xvZ2dpbmdTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBMb2dnaW5nU2VydmljZSh7XG4gICAgICAgIHByZWZpeDogJ1tFbGFzdGljIEFQTV0gJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlclNlcnZpY2VDcmVhdG9yKCdBcG1TZXJ2ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IEFwbVNlcnZlcihzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJyksIHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0xvZ2dpbmdTZXJ2aWNlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJyk7XG4gICAgY29uZmlnU2VydmljZS5pbml0KCk7XG4gICAgdmFyIGxvZ2dpbmdTZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlKCdMb2dnaW5nU2VydmljZScpO1xuXG4gICAgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nZ2luZ1NlcnZpY2UsIGNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIHZhciBsb2dMZXZlbCA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdsb2dMZXZlbCcpO1xuICAgICAgbG9nZ2luZ1NlcnZpY2Uuc2V0TGV2ZWwobG9nTGV2ZWwpO1xuICAgIH1cblxuICAgIHNldExvZ0xldmVsKGxvZ2dpbmdTZXJ2aWNlLCBjb25maWdTZXJ2aWNlKTtcbiAgICBjb25maWdTZXJ2aWNlLmV2ZW50cy5vYnNlcnZlKENPTkZJR19DSEFOR0UsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldExvZ0xldmVsKGxvZ2dpbmdTZXJ2aWNlLCBjb25maWdTZXJ2aWNlKTtcbiAgICB9KTtcbiAgICB2YXIgYXBtU2VydmVyID0gdGhpcy5nZXRTZXJ2aWNlKCdBcG1TZXJ2ZXInKTtcbiAgICBhcG1TZXJ2ZXIuaW5pdCgpO1xuICB9O1xuXG4gIF9wcm90by5yZWdpc3RlclNlcnZpY2VDcmVhdG9yID0gZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlQ3JlYXRvcihuYW1lLCBjcmVhdG9yKSB7XG4gICAgdGhpcy5fc2VydmljZUNyZWF0b3JzW25hbWVdID0gY3JlYXRvcjtcbiAgfTtcblxuICBfcHJvdG8ucmVnaXN0ZXJTZXJ2aWNlSW5zdGFuY2UgPSBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VJbnN0YW5jZShuYW1lLCBpbnN0YW5jZSkge1xuICAgIHRoaXMuX3NlcnZpY2VJbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U2VydmljZSA9IGZ1bmN0aW9uIGdldFNlcnZpY2UobmFtZSkge1xuICAgIGlmICghdGhpcy5fc2VydmljZUluc3RhbmNlc1tuYW1lXSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zZXJ2aWNlQ3JlYXRvcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZUluc3RhbmNlc1tuYW1lXSA9IHRoaXMuX3NlcnZpY2VDcmVhdG9yc1tuYW1lXSh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgc2VydmljZSwgTm8gY3JlYXRvciBmb3I6ICcgKyBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUluc3RhbmNlc1tuYW1lXTtcbiAgfTtcblxuICByZXR1cm4gU2VydmljZUZhY3Rvcnk7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VGYWN0b3J5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZuLCBvblRocm90dGxlLCBvcHRzKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcztcbiAgdmFyIGxpbWl0ID0gb3B0cy5saW1pdDtcbiAgdmFyIGludGVydmFsID0gb3B0cy5pbnRlcnZhbDtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICB2YXIgdGltZW91dElkO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIrKztcblxuICAgIGlmICh0eXBlb2YgdGltZW91dElkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ZXIgPiBsaW1pdCAmJiB0eXBlb2Ygb25UaHJvdHRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9uVGhyb3R0bGUuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCB7IEtFWVdPUkRfTElNSVQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTUVUQURBVEFfTU9ERUwgPSB7XG4gIHNlcnZpY2U6IHtcbiAgICBuYW1lOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gICAgdmVyc2lvbjogdHJ1ZSxcbiAgICBhZ2VudDoge1xuICAgICAgdmVyc2lvbjogW0tFWVdPUkRfTElNSVQsIHRydWVdXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudDogdHJ1ZVxuICB9LFxuICBsYWJlbHM6IHtcbiAgICAnKic6IHRydWVcbiAgfVxufTtcbnZhciBSRVNQT05TRV9NT0RFTCA9IHtcbiAgJyonOiB0cnVlLFxuICBoZWFkZXJzOiB7XG4gICAgJyonOiB0cnVlXG4gIH1cbn07XG52YXIgREVTVElOQVRJT05fTU9ERUwgPSB7XG4gIGFkZHJlc3M6IFtLRVlXT1JEX0xJTUlUXSxcbiAgc2VydmljZToge1xuICAgICcqJzogW0tFWVdPUkRfTElNSVQsIHRydWVdXG4gIH1cbn07XG52YXIgQ09OVEVYVF9NT0RFTCA9IHtcbiAgdXNlcjoge1xuICAgIGlkOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICAgIHVzZXJuYW1lOiB0cnVlXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICAnKic6IHRydWVcbiAgfSxcbiAgaHR0cDoge1xuICAgIHJlc3BvbnNlOiBSRVNQT05TRV9NT0RFTFxuICB9LFxuICBkZXN0aW5hdGlvbjogREVTVElOQVRJT05fTU9ERUwsXG4gIHJlc3BvbnNlOiBSRVNQT05TRV9NT0RFTFxufTtcbnZhciBTUEFOX01PREVMID0ge1xuICBuYW1lOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHR5cGU6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgdHJhY2VfaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgcGFyZW50X2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHRyYW5zYWN0aW9uX2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHN1YnR5cGU6IHRydWUsXG4gIGFjdGlvbjogdHJ1ZSxcbiAgY29udGV4dDogQ09OVEVYVF9NT0RFTFxufTtcbnZhciBUUkFOU0FDVElPTl9NT0RFTCA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgcGFyZW50X2lkOiB0cnVlLFxuICB0eXBlOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIGlkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHRyYWNlX2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHNwYW5fY291bnQ6IHtcbiAgICBzdGFydGVkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV1cbiAgfSxcbiAgY29udGV4dDogQ09OVEVYVF9NT0RFTFxufTtcbnZhciBFUlJPUl9NT0RFTCA9IHtcbiAgaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgdHJhY2VfaWQ6IHRydWUsXG4gIHRyYW5zYWN0aW9uX2lkOiB0cnVlLFxuICBwYXJlbnRfaWQ6IHRydWUsXG4gIGN1bHByaXQ6IHRydWUsXG4gIGV4Y2VwdGlvbjoge1xuICAgIHR5cGU6IHRydWVcbiAgfSxcbiAgdHJhbnNhY3Rpb246IHtcbiAgICB0eXBlOiB0cnVlXG4gIH0sXG4gIGNvbnRleHQ6IENPTlRFWFRfTU9ERUxcbn07XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHZhbHVlLCBsaW1pdCwgcmVxdWlyZWQsIHBsYWNlaG9sZGVyKSB7XG4gIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7XG4gICAgbGltaXQgPSBLRVlXT1JEX0xJTUlUO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkID09PSB2b2lkIDApIHtcbiAgICByZXF1aXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHBsYWNlaG9sZGVyID09PSB2b2lkIDApIHtcbiAgICBwbGFjZWhvbGRlciA9ICdOL0EnO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkICYmIGlzRW1wdHkodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWYWx1ZSh0YXJnZXQsIGtleSwgY3Vyck1vZGVsKSB7XG4gIHZhciB2YWx1ZSA9IHRydW5jYXRlKHRhcmdldFtrZXldLCBjdXJyTW9kZWxbMF0sIGN1cnJNb2RlbFsxXSk7XG5cbiAgaWYgKGlzRW1wdHkodmFsdWUpKSB7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcmdldFtrZXldID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTW9kZWwobW9kZWwsIHRhcmdldCwgY2hpbGRUYXJnZXQpIHtcbiAgaWYgKG1vZGVsID09PSB2b2lkIDApIHtcbiAgICBtb2RlbCA9IHt9O1xuICB9XG5cbiAgaWYgKGNoaWxkVGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICBjaGlsZFRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMobW9kZWwpO1xuICB2YXIgZW1wdHlBcnIgPSBbXTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgdmFyIGN1cnJLZXkgPSBrZXlzW2ldO1xuICAgIHZhciBjdXJyTW9kZWwgPSBtb2RlbFtjdXJyS2V5XSA9PT0gdHJ1ZSA/IGVtcHR5QXJyIDogbW9kZWxbY3VycktleV07XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3Vyck1vZGVsKSkge1xuICAgICAgdHJ1bmNhdGVNb2RlbChjdXJyTW9kZWwsIHRhcmdldCwgY2hpbGRUYXJnZXRbY3VycktleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VycktleSA9PT0gJyonKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNoaWxkVGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZVZhbHVlKGNoaWxkVGFyZ2V0LCBrZXksIGN1cnJNb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwbGFjZVZhbHVlKGNoaWxkVGFyZ2V0LCBjdXJyS2V5LCBjdXJyTW9kZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCB7IHRydW5jYXRlLCB0cnVuY2F0ZU1vZGVsLCBTUEFOX01PREVMLCBUUkFOU0FDVElPTl9NT0RFTCwgRVJST1JfTU9ERUwsIE1FVEFEQVRBX01PREVMLCBSRVNQT05TRV9NT0RFTCB9OyIsImZ1bmN0aW9uIGlzRGVmYXVsdFBvcnQocG9ydCwgcHJvdG9jb2wpIHtcbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgJ2h0dHA6JzpcbiAgICAgIHJldHVybiBwb3J0ID09PSAnODAnO1xuXG4gICAgY2FzZSAnaHR0cHM6JzpcbiAgICAgIHJldHVybiBwb3J0ID09PSAnNDQzJztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgUlVMRVMgPSBbWycjJywgJ2hhc2gnXSwgWyc/JywgJ3F1ZXJ5J10sIFsnLycsICdwYXRoJ10sIFsnQCcsICdhdXRoJywgMV0sIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxXV07XG52YXIgUFJPVE9DT0xfUkVHRVggPSAvXihbYS16XVthLXowLTkuKy1dKjopPyhcXC9cXC8pPyhbXFxTXFxzXSopL2k7XG5cbnZhciBVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFVybCh1cmwpIHtcbiAgICB2YXIgX3RoaXMkZXh0cmFjdFByb3RvY29sID0gdGhpcy5leHRyYWN0UHJvdG9jb2wodXJsIHx8ICcnKSxcbiAgICAgICAgcHJvdG9jb2wgPSBfdGhpcyRleHRyYWN0UHJvdG9jb2wucHJvdG9jb2wsXG4gICAgICAgIGFkZHJlc3MgPSBfdGhpcyRleHRyYWN0UHJvdG9jb2wuYWRkcmVzcyxcbiAgICAgICAgc2xhc2hlcyA9IF90aGlzJGV4dHJhY3RQcm90b2NvbC5zbGFzaGVzO1xuXG4gICAgdmFyIHJlbGF0aXZlID0gIXByb3RvY29sICYmICFzbGFzaGVzO1xuICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24oKTtcbiAgICB2YXIgaW5zdHJ1Y3Rpb25zID0gUlVMRVMuc2xpY2UoKTtcbiAgICBhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCdcXFxcJywgJy8nKTtcblxuICAgIGlmICghc2xhc2hlcykge1xuICAgICAgaW5zdHJ1Y3Rpb25zWzJdID0gW05hTiwgJ3BhdGgnXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xuICAgICAgdmFyIHBhcnNlID0gaW5zdHJ1Y3Rpb25bMF07XG4gICAgICB2YXIga2V5ID0gaW5zdHJ1Y3Rpb25bMV07XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGluZGV4ID0gYWRkcmVzcy5pbmRleE9mKHBhcnNlKTtcblxuICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgdmFyIGluc3RMZW5ndGggPSBpbnN0cnVjdGlvblsyXTtcblxuICAgICAgICAgIGlmIChpbnN0TGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBhZGRyZXNzLmxhc3RJbmRleE9mKHBhcnNlKTtcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIG5ld0luZGV4KTtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0TGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1trZXldID0gYWRkcmVzcy5zbGljZShpbmRleCk7XG4gICAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2tleV0gPSBhZGRyZXNzO1xuICAgICAgICBhZGRyZXNzID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IHRoaXNba2V5XSB8fCAocmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJycpO1xuICAgICAgaWYgKGluc3RydWN0aW9uWzNdKSB0aGlzW2tleV0gPSB0aGlzW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAocmVsYXRpdmUgJiYgdGhpcy5wYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICB0aGlzLnBhdGggPSAnLycgKyB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgdGhpcy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbCB8fCBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0O1xuICAgIHRoaXMucG9ydCA9ICcnO1xuXG4gICAgaWYgKC86XFxkKyQvLnRlc3QodGhpcy5ob3N0KSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5ob3N0LnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcG9ydCA9IHZhbHVlLnBvcCgpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuXG4gICAgICBpZiAoaXNEZWZhdWx0UG9ydChwb3J0LCB0aGlzLnByb3RvY29sKSkge1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0bmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSBob3N0bmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbiA9IHRoaXMucHJvdG9jb2wgJiYgdGhpcy5ob3N0ICYmIHRoaXMucHJvdG9jb2wgIT09ICdmaWxlOicgPyB0aGlzLnByb3RvY29sICsgJy8vJyArIHRoaXMuaG9zdCA6ICdudWxsJztcbiAgICB0aGlzLmhyZWYgPSB0aGlzLnRvU3RyaW5nKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVXJsLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5wcm90b2NvbDtcbiAgICByZXN1bHQgKz0gJy8vJztcblxuICAgIGlmICh0aGlzLmF1dGgpIHtcbiAgICAgIHZhciBSRURBQ1RFRCA9ICdbUkVEQUNURURdJztcbiAgICAgIHZhciB1c2VycGFzcyA9IHRoaXMuYXV0aC5zcGxpdCgnOicpO1xuICAgICAgdmFyIHVzZXJuYW1lID0gdXNlcnBhc3NbMF0gPyBSRURBQ1RFRCA6ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gdXNlcnBhc3NbMV0gPyAnOicgKyBSRURBQ1RFRCA6ICcnO1xuICAgICAgcmVzdWx0ICs9IHVzZXJuYW1lICsgcGFzc3dvcmQgKyAnQCc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRoaXMuaG9zdDtcbiAgICByZXN1bHQgKz0gdGhpcy5wYXRoO1xuICAgIHJlc3VsdCArPSB0aGlzLnF1ZXJ5O1xuICAgIHJlc3VsdCArPSB0aGlzLmhhc2g7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICB2YXIgZ2xvYmFsVmFyID0ge307XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGdsb2JhbFZhciA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2xvYmFsVmFyLmxvY2F0aW9uO1xuICB9O1xuXG4gIF9wcm90by5leHRyYWN0UHJvdG9jb2wgPSBmdW5jdGlvbiBleHRyYWN0UHJvdG9jb2wodXJsKSB7XG4gICAgdmFyIG1hdGNoID0gUFJPVE9DT0xfUkVHRVguZXhlYyh1cmwpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm90b2NvbDogbWF0Y2hbMV0gPyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIDogJycsXG4gICAgICBzbGFzaGVzOiAhIW1hdGNoWzJdLFxuICAgICAgYWRkcmVzczogbWF0Y2hbM11cbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBVcmw7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVybDsiLCJpbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnLi9wb2x5ZmlsbHMnO1xudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgUEVSRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBwZXJmb3JtYW5jZSA6IHt9O1xuXG5mdW5jdGlvbiBpc0NPUlNTdXBwb3J0ZWQoKSB7XG4gIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gIHJldHVybiAnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHI7XG59XG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvSGV4KGJ1ZmZlcikge1xuICB2YXIgaGV4T2N0ZXRzID0gW107XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGJ1ZmZlci5sZW5ndGg7IF9pKyspIHtcbiAgICBoZXhPY3RldHMucHVzaChieXRlVG9IZXhbYnVmZmVyW19pXV0pO1xuICB9XG5cbiAgcmV0dXJuIGhleE9jdGV0cy5qb2luKCcnKTtcbn1cblxudmFyIGRlc3RpbmF0aW9uID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIGlmICh0eXBlb2YgY3J5cHRvICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0aW5hdGlvbik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1zQ3J5cHRvICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKGxlbmd0aCkge1xuICB2YXIgaWQgPSBieXRlc1RvSGV4KHJuZygpKTtcbiAgcmV0dXJuIGlkLnN1YnN0cigwLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBnZXREdEhlYWRlclZhbHVlKHNwYW4pIHtcbiAgdmFyIGR0VmVyc2lvbiA9ICcwMCc7XG4gIHZhciBkdFVuU2FtcGxlZEZsYWdzID0gJzAwJztcbiAgdmFyIGR0U2FtcGxlZEZsYWdzID0gJzAxJztcblxuICBpZiAoc3BhbiAmJiBzcGFuLnRyYWNlSWQgJiYgc3Bhbi5pZCAmJiBzcGFuLnBhcmVudElkKSB7XG4gICAgdmFyIGZsYWdzID0gc3Bhbi5zYW1wbGVkID8gZHRTYW1wbGVkRmxhZ3MgOiBkdFVuU2FtcGxlZEZsYWdzO1xuICAgIHZhciBpZCA9IHNwYW4uc2FtcGxlZCA/IHNwYW4uaWQgOiBzcGFuLnBhcmVudElkO1xuICAgIHJldHVybiBkdFZlcnNpb24gKyAnLScgKyBzcGFuLnRyYWNlSWQgKyAnLScgKyBpZCArICctJyArIGZsYWdzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRHRIZWFkZXJWYWx1ZSh2YWx1ZSkge1xuICB2YXIgcGFyc2VkID0gL14oW1xcZGEtZl17Mn0pLShbXFxkYS1mXXszMn0pLShbXFxkYS1mXXsxNn0pLShbXFxkYS1mXXsyfSkkLy5leGVjKHZhbHVlKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgdmFyIGZsYWdzID0gcGFyc2VkWzRdO1xuICAgIHZhciBzYW1wbGVkID0gZmxhZ3MgIT09ICcwMCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYWNlSWQ6IHBhcnNlZFsyXSxcbiAgICAgIGlkOiBwYXJzZWRbM10sXG4gICAgICBzYW1wbGVkOiBzYW1wbGVkXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0R0SGVhZGVyVmFsaWQoaGVhZGVyKSB7XG4gIHJldHVybiAvXltcXGRhLWZdezJ9LVtcXGRhLWZdezMyfS1bXFxkYS1mXXsxNn0tW1xcZGEtZl17Mn0kLy50ZXN0KGhlYWRlcikgJiYgaGVhZGVyLnNsaWNlKDMsIDM1KSAhPT0gJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJyAmJiBoZWFkZXIuc2xpY2UoMzYsIDUyKSAhPT0gJzAwMDAwMDAwMDAwMDAwMDAnO1xufVxuXG5mdW5jdGlvbiBjaGVja1NhbWVPcmlnaW4oc291cmNlLCB0YXJnZXQpIHtcbiAgdmFyIGlzU2FtZSA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgIGlzU2FtZSA9IHNvdXJjZSA9PT0gdGFyZ2V0O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoIWlzU2FtZSkge1xuICAgICAgICBpc1NhbWUgPSBjaGVja1NhbWVPcmlnaW4oc291cmNlLCB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBpc1NhbWU7XG59XG5cbmZ1bmN0aW9uIGlzUGxhdGZvcm1TdXBwb3J0ZWQoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIEpTT04uc3RyaW5naWZ5ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBGdW5jdGlvbi5iaW5kID09PSAnZnVuY3Rpb24nICYmIFBFUkYgJiYgdHlwZW9mIFBFUkYubm93ID09PSAnZnVuY3Rpb24nICYmIGlzQ09SU1N1cHBvcnRlZCgpO1xufVxuXG5mdW5jdGlvbiBzZXRMYWJlbChrZXksIHZhbHVlLCBvYmopIHtcbiAgaWYgKCFvYmogfHwgIWtleSkgcmV0dXJuO1xuICB2YXIgc2tleSA9IHJlbW92ZUludmFsaWRDaGFycyhrZXkpO1xuICB2YXIgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQgJiYgdmFsdWVUeXBlICE9PSAnYm9vbGVhbicgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIG9ialtza2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRTZXJ2ZXJUaW1pbmdJbmZvKHNlcnZlclRpbWluZ0VudHJpZXMpIHtcbiAgaWYgKHNlcnZlclRpbWluZ0VudHJpZXMgPT09IHZvaWQgMCkge1xuICAgIHNlcnZlclRpbWluZ0VudHJpZXMgPSBbXTtcbiAgfVxuXG4gIHZhciBzZXJ2ZXJUaW1pbmdJbmZvID0gW107XG4gIHZhciBlbnRyeVNlcGFyYXRvciA9ICcsICc7XG4gIHZhciB2YWx1ZVNlcGFyYXRvciA9ICc7JztcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzZXJ2ZXJUaW1pbmdFbnRyaWVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgX3NlcnZlclRpbWluZ0VudHJpZXMkID0gc2VydmVyVGltaW5nRW50cmllc1tfaTJdLFxuICAgICAgICBuYW1lID0gX3NlcnZlclRpbWluZ0VudHJpZXMkLm5hbWUsXG4gICAgICAgIGR1cmF0aW9uID0gX3NlcnZlclRpbWluZ0VudHJpZXMkLmR1cmF0aW9uLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF9zZXJ2ZXJUaW1pbmdFbnRyaWVzJC5kZXNjcmlwdGlvbjtcbiAgICB2YXIgdGltaW5nVmFsdWUgPSBuYW1lO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0aW1pbmdWYWx1ZSArPSB2YWx1ZVNlcGFyYXRvciArICdkZXNjPScgKyBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIHRpbWluZ1ZhbHVlICs9IHZhbHVlU2VwYXJhdG9yICsgJ2R1cj0nICsgZHVyYXRpb247XG4gICAgfVxuXG4gICAgc2VydmVyVGltaW5nSW5mby5wdXNoKHRpbWluZ1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJUaW1pbmdJbmZvLmpvaW4oZW50cnlTZXBhcmF0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lT3JpZ2luKCkge1xuICByZXR1cm4gUEVSRi50aW1pbmcuZmV0Y2hTdGFydDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFnZU1ldGFkYXRhKCkge1xuICByZXR1cm4ge1xuICAgIHBhZ2U6IHtcbiAgICAgIHJlZmVyZXI6IGRvY3VtZW50LnJlZmVycmVyLFxuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaXBRdWVyeVN0cmluZ0Zyb21VcmwodXJsKSB7XG4gIHJldHVybiB1cmwgJiYgdXJsLnNwbGl0KCc/JylbMF07XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGJhc2VFeHRlbmQoZHN0LCBvYmpzLCBkZWVwKSB7XG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IG9ianMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIHZhciBvYmogPSBvYmpzW2ldO1xuICAgIGlmICghaXNPYmplY3Qob2JqKSAmJiAhaXNGdW5jdGlvbihvYmopKSBjb250aW51ZTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICBmb3IgKHZhciBqID0gMCwgamogPSBrZXlzLmxlbmd0aDsgaiA8IGpqOyBqKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgdmFyIHNyYyA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoZGVlcCAmJiBpc09iamVjdChzcmMpKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QoZHN0W2tleV0pKSBkc3Rba2V5XSA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XG4gICAgICAgIGJhc2VFeHRlbmQoZHN0W2tleV0sIFtzcmNdLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkc3Rba2V5XSA9IHNyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBnZXRFbGFzdGljU2NyaXB0KCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzY3JpcHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHNjID0gc2NyaXB0c1tpXTtcblxuICAgICAgaWYgKHNjLnNyYy5pbmRleE9mKCdlbGFzdGljJykgPiAwKSB7XG4gICAgICAgIHJldHVybiBzYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdCgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY3VycmVudFNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG5cbiAgICBpZiAoIWN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHJldHVybiBnZXRFbGFzdGljU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTY3JpcHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGRzdCkge1xuICByZXR1cm4gYmFzZUV4dGVuZChkc3QsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShkc3QpIHtcbiAgcmV0dXJuIGJhc2VFeHRlbmQoZHN0LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gIGlmIChhcnJheSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXkgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIG8gPSBPYmplY3QoYXJyYXkpO1xuICB2YXIgbGVuID0gby5sZW5ndGggPj4+IDA7XG5cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgayA9IDA7XG5cbiAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICB2YXIga1ZhbHVlID0gb1trXTtcblxuICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCBrVmFsdWUsIGssIG8pKSB7XG4gICAgICByZXR1cm4ga1ZhbHVlO1xuICAgIH1cblxuICAgIGsrKztcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludmFsaWRDaGFycyhrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bLipcIl0vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0Tm9uWEhSU3BhbihzcGFucykge1xuICB2YXIgbGF0ZXN0U3BhbiA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgc3BhbnMubGVuZ3RoOyBfaTMrKykge1xuICAgIHZhciBzcGFuID0gc3BhbnNbX2kzXTtcblxuICAgIGlmIChTdHJpbmcoc3Bhbi50eXBlKS5pbmRleE9mKCdleHRlcm5hbCcpID09PSAtMSAmJiAoIWxhdGVzdFNwYW4gfHwgbGF0ZXN0U3Bhbi5fZW5kIDwgc3Bhbi5fZW5kKSkge1xuICAgICAgbGF0ZXN0U3BhbiA9IHNwYW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhdGVzdFNwYW47XG59XG5cbmZ1bmN0aW9uIGdldEVhcmxpZXN0U3BhbihzcGFucykge1xuICB2YXIgZWFybGllc3RTcGFuID0gc3BhbnNbMF07XG5cbiAgZm9yICh2YXIgX2k0ID0gMTsgX2k0IDwgc3BhbnMubGVuZ3RoOyBfaTQrKykge1xuICAgIHZhciBzcGFuID0gc3BhbnNbX2k0XTtcblxuICAgIGlmIChlYXJsaWVzdFNwYW4uX3N0YXJ0ID4gc3Bhbi5fc3RhcnQpIHtcbiAgICAgIGVhcmxpZXN0U3BhbiA9IHNwYW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhcmxpZXN0U3Bhbjtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gUEVSRi5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XG4gIHJldHVybiB0eXBlb2YgdGltZSA9PT0gJ251bWJlcicgJiYgdGltZSA+PSAwID8gdGltZSA6IG5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXREdXJhdGlvbihzdGFydCwgZW5kKSB7XG4gIGlmIChpc1VuZGVmaW5lZChlbmQpIHx8IGlzVW5kZWZpbmVkKHN0YXJ0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoZW5kIC0gc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBzY2hlZHVsZU1hY3JvVGFzayhjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cblxuZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2soY2FsbGJhY2spIHtcbiAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGlzUGVyZlRpbWVsaW5lU3VwcG9ydGVkKCkge1xuICByZXR1cm4gdHlwZW9mIFBFUkYuZ2V0RW50cmllc0J5VHlwZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IHsgZXh0ZW5kLCBtZXJnZSwgaXNVbmRlZmluZWQsIG5vb3AsIGJhc2VFeHRlbmQsIGJ5dGVzVG9IZXgsIGlzQ09SU1N1cHBvcnRlZCwgaXNPYmplY3QsIGlzRnVuY3Rpb24sIGlzUGxhdGZvcm1TdXBwb3J0ZWQsIGlzRHRIZWFkZXJWYWxpZCwgcGFyc2VEdEhlYWRlclZhbHVlLCBnZXRTZXJ2ZXJUaW1pbmdJbmZvLCBnZXREdEhlYWRlclZhbHVlLCBnZXRQYWdlTWV0YWRhdGEsIGdldEN1cnJlbnRTY3JpcHQsIGdldEVsYXN0aWNTY3JpcHQsIGdldFRpbWVPcmlnaW4sIGdlbmVyYXRlUmFuZG9tSWQsIGdldEVhcmxpZXN0U3BhbiwgZ2V0TGF0ZXN0Tm9uWEhSU3BhbiwgZ2V0RHVyYXRpb24sIGdldFRpbWUsIG5vdywgcm5nLCBjaGVja1NhbWVPcmlnaW4sIHNjaGVkdWxlTWFjcm9UYXNrLCBzY2hlZHVsZU1pY3JvVGFzaywgc2V0TGFiZWwsIHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsLCBmaW5kLCByZW1vdmVJbnZhbGlkQ2hhcnMsIFBFUkYsIGlzUGVyZlRpbWVsaW5lU3VwcG9ydGVkIH07IiwidmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgeyBfX0RFVl9fIH07IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjcmVhdGVTdGFja1RyYWNlcywgZmlsdGVySW52YWxpZEZyYW1lcyB9IGZyb20gJy4vc3RhY2stdHJhY2UnO1xuaW1wb3J0IHsgZ2V0UGFnZU1ldGFkYXRhLCBnZW5lcmF0ZVJhbmRvbUlkLCBtZXJnZSwgZXh0ZW5kIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IHRydW5jYXRlTW9kZWwsIEVSUk9SX01PREVMIH0gZnJvbSAnLi4vY29tbW9uL3RydW5jYXRlJztcbnZhciBJR05PUkVfS0VZUyA9IFsnc3RhY2snLCAnbWVzc2FnZSddO1xuXG5mdW5jdGlvbiBnZXRFcnJvclByb3BlcnRpZXMoZXJyb3IpIHtcbiAgdmFyIHByb3BlcnR5Rm91bmQgPSBmYWxzZTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoZXJyb3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChJR05PUkVfS0VZUy5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSBlcnJvcltrZXldO1xuXG4gICAgaWYgKHZhbCA9PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsLnRvSVNPU3RyaW5nICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgICB2YWwgPSB2YWwudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzW2tleV0gPSB2YWw7XG4gICAgcHJvcGVydHlGb3VuZCA9IHRydWU7XG4gIH0pO1xuXG4gIGlmIChwcm9wZXJ0eUZvdW5kKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cbn1cblxudmFyIEVycm9yTG9nZ2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXJyb3JMb2dnaW5nKGFwbVNlcnZlciwgY29uZmlnU2VydmljZSwgdHJhbnNhY3Rpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYXBtU2VydmVyID0gYXBtU2VydmVyO1xuICAgIHRoaXMuX2NvbmZpZ1NlcnZpY2UgPSBjb25maWdTZXJ2aWNlO1xuICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IHRyYW5zYWN0aW9uU2VydmljZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBFcnJvckxvZ2dpbmcucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVFcnJvckRhdGFNb2RlbCA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yRGF0YU1vZGVsKGVycm9yRXZlbnQpIHtcbiAgICB2YXIgZnJhbWVzID0gY3JlYXRlU3RhY2tUcmFjZXMoZXJyb3JFdmVudCk7XG4gICAgdmFyIGZpbHRlcmVkRnJhbWVzID0gZmlsdGVySW52YWxpZEZyYW1lcyhmcmFtZXMpO1xuICAgIHZhciBjdWxwcml0ID0gJyhpbmxpbmUgc2NyaXB0KSc7XG4gICAgdmFyIGxhc3RGcmFtZSA9IGZpbHRlcmVkRnJhbWVzW2ZpbHRlcmVkRnJhbWVzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGxhc3RGcmFtZSAmJiBsYXN0RnJhbWUuZmlsZW5hbWUpIHtcbiAgICAgIGN1bHByaXQgPSBsYXN0RnJhbWUuZmlsZW5hbWU7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvckV2ZW50Lm1lc3NhZ2UsXG4gICAgICAgIGVycm9yID0gZXJyb3JFdmVudC5lcnJvcjtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB2YXIgZXJyb3JUeXBlID0gJyc7XG4gICAgdmFyIGVycm9yQ29udGV4dCA9IHt9O1xuXG4gICAgaWYgKGVycm9yICYmIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlO1xuICAgICAgZXJyb3JUeXBlID0gZXJyb3IubmFtZTtcbiAgICAgIHZhciBjdXN0b21Qcm9wZXJ0aWVzID0gZ2V0RXJyb3JQcm9wZXJ0aWVzKGVycm9yKTtcblxuICAgICAgaWYgKGN1c3RvbVByb3BlcnRpZXMpIHtcbiAgICAgICAgZXJyb3JDb250ZXh0LmN1c3RvbSA9IGN1c3RvbVByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlcnJvclR5cGUpIHtcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UgJiYgZXJyb3JNZXNzYWdlLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgIGVycm9yVHlwZSA9IGVycm9yTWVzc2FnZS5zcGxpdCgnOicpWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjdXJyZW50VHJhbnNhY3Rpb24gPSB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCk7XG5cbiAgICB2YXIgdHJhbnNhY3Rpb25Db250ZXh0ID0gY3VycmVudFRyYW5zYWN0aW9uID8gY3VycmVudFRyYW5zYWN0aW9uLmNvbnRleHQgOiB7fTtcblxuICAgIHZhciBfdGhpcyRfY29uZmlnU2VydmljZSQgPSB0aGlzLl9jb25maWdTZXJ2aWNlLmdldCgnY29udGV4dCcpLFxuICAgICAgICB0YWdzID0gX3RoaXMkX2NvbmZpZ1NlcnZpY2UkLnRhZ3MsXG4gICAgICAgIGNvbmZpZ0NvbnRleHQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRfY29uZmlnU2VydmljZSQsIFtcInRhZ3NcIl0pO1xuXG4gICAgdmFyIHBhZ2VNZXRhZGF0YSA9IGdldFBhZ2VNZXRhZGF0YSgpO1xuICAgIHZhciBjb250ZXh0ID0gbWVyZ2Uoe30sIHBhZ2VNZXRhZGF0YSwgdHJhbnNhY3Rpb25Db250ZXh0LCBjb25maWdDb250ZXh0LCBlcnJvckNvbnRleHQpO1xuICAgIHZhciBlcnJvck9iamVjdCA9IHtcbiAgICAgIGlkOiBnZW5lcmF0ZVJhbmRvbUlkKCksXG4gICAgICBjdWxwcml0OiBjdWxwcml0LFxuICAgICAgZXhjZXB0aW9uOiB7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgc3RhY2t0cmFjZTogZmlsdGVyZWRGcmFtZXMsXG4gICAgICAgIHR5cGU6IGVycm9yVHlwZVxuICAgICAgfSxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9O1xuXG4gICAgaWYgKGN1cnJlbnRUcmFuc2FjdGlvbikge1xuICAgICAgZXJyb3JPYmplY3QgPSBleHRlbmQoZXJyb3JPYmplY3QsIHtcbiAgICAgICAgdHJhY2VfaWQ6IGN1cnJlbnRUcmFuc2FjdGlvbi50cmFjZUlkLFxuICAgICAgICBwYXJlbnRfaWQ6IGN1cnJlbnRUcmFuc2FjdGlvbi5pZCxcbiAgICAgICAgdHJhbnNhY3Rpb25faWQ6IGN1cnJlbnRUcmFuc2FjdGlvbi5pZCxcbiAgICAgICAgdHJhbnNhY3Rpb246IHtcbiAgICAgICAgICB0eXBlOiBjdXJyZW50VHJhbnNhY3Rpb24udHlwZSxcbiAgICAgICAgICBzYW1wbGVkOiBjdXJyZW50VHJhbnNhY3Rpb24uc2FtcGxlZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVNb2RlbChFUlJPUl9NT0RFTCwgZXJyb3JPYmplY3QpO1xuICB9O1xuXG4gIF9wcm90by5sb2dFcnJvckV2ZW50ID0gZnVuY3Rpb24gbG9nRXJyb3JFdmVudChlcnJvckV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBlcnJvckV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlcnJvck9iamVjdCA9IHRoaXMuY3JlYXRlRXJyb3JEYXRhTW9kZWwoZXJyb3JFdmVudCk7XG5cbiAgICBpZiAodHlwZW9mIGVycm9yT2JqZWN0LmV4Y2VwdGlvbi5tZXNzYWdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FwbVNlcnZlci5hZGRFcnJvcihlcnJvck9iamVjdCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZ2lzdGVyTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvckV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9nRXJyb3JFdmVudChlcnJvckV2ZW50KTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZnVuY3Rpb24gKHByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLmxvZ1Byb21pc2VFdmVudChwcm9taXNlUmVqZWN0aW9uRXZlbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5sb2dQcm9taXNlRXZlbnQgPSBmdW5jdGlvbiBsb2dQcm9taXNlRXZlbnQocHJvbWlzZVJlamVjdGlvbkV2ZW50KSB7XG4gICAgdmFyIHByZWZpeCA9ICdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb246ICc7XG4gICAgdmFyIHJlYXNvbiA9IHByb21pc2VSZWplY3Rpb25FdmVudC5yZWFzb247XG5cbiAgICBpZiAocmVhc29uID09IG51bGwpIHtcbiAgICAgIHRoaXMubG9nRXJyb3IocHJlZml4ICsgJzxubyByZWFzb24gc3BlY2lmaWVkPicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYXNvbi5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5sb2dFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IHByZWZpeCArIHJlYXNvbi5tZXNzYWdlLFxuICAgICAgICBzdGFjazogcmVhc29uLnN0YWNrID8gcmVhc29uLnN0YWNrIDogbnVsbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5sb2dFcnJvcihwcmVmaXggKyByZWFzb24pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ubG9nRXJyb3IgPSBmdW5jdGlvbiBsb2dFcnJvcihtZXNzYWdlT3JFcnJvcikge1xuICAgIHZhciBlcnJvckV2ZW50ID0ge307XG5cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2VPckVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JFdmVudC5tZXNzYWdlID0gbWVzc2FnZU9yRXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yRXZlbnQuZXJyb3IgPSBtZXNzYWdlT3JFcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2dFcnJvckV2ZW50KGVycm9yRXZlbnQpO1xuICB9O1xuXG4gIHJldHVybiBFcnJvckxvZ2dpbmc7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTG9nZ2luZzsiLCJpbXBvcnQgRXJyb3JMb2dnaW5nIGZyb20gJy4vZXJyb3ItbG9nZ2luZyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIEVycm9yTG9nZ2luZzogRXJyb3JMb2dnaW5nLFxuICByZWdpc3RlclNlcnZpY2VzOiBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VzKHNlcnZpY2VGYWN0b3J5KSB7XG4gICAgc2VydmljZUZhY3RvcnkucmVnaXN0ZXJTZXJ2aWNlQ3JlYXRvcignRXJyb3JMb2dnaW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFwbVNlcnZpY2UgPSBzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdBcG1TZXJ2ZXInKTtcbiAgICAgIHZhciBjb25maWdTZXJ2aWNlID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnQ29uZmlnU2VydmljZScpO1xuICAgICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ1RyYW5zYWN0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvckxvZ2dpbmcoYXBtU2VydmljZSwgY29uZmlnU2VydmljZSwgdHJhbnNhY3Rpb25TZXJ2aWNlKTtcbiAgICB9KTtcbiAgfVxufTsiLCJpbXBvcnQgc3RhY2tQYXJzZXIgZnJvbSAnZXJyb3Itc3RhY2stcGFyc2VyJztcblxuZnVuY3Rpb24gZmlsZVBhdGhUb0ZpbGVOYW1lKGZpbGVVcmwpIHtcbiAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0IDogJycpO1xuXG4gIGlmIChmaWxlVXJsLmluZGV4T2Yob3JpZ2luKSA+IC0xKSB7XG4gICAgZmlsZVVybCA9IGZpbGVVcmwucmVwbGFjZShvcmlnaW4gKyAnLycsICcnKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVXJsO1xufVxuXG5mdW5jdGlvbiBjbGVhbkZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gIGlmIChmaWxlUGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgZmlsZVBhdGggPSAnJztcbiAgfVxuXG4gIGlmIChmaWxlUGF0aCA9PT0gJzxhbm9ueW1vdXM+Jykge1xuICAgIGZpbGVQYXRoID0gJyc7XG4gIH1cblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzRmlsZUlubGluZShmaWxlVXJsKSB7XG4gIGlmIChmaWxlVXJsKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoZmlsZVVybCkgPT09IDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0YWNrRnJhbWVzKHN0YWNrRnJhbWVzKSB7XG4gIHJldHVybiBzdGFja0ZyYW1lcy5tYXAoZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgaWYgKGZyYW1lLmZ1bmN0aW9uTmFtZSkge1xuICAgICAgZnJhbWUuZnVuY3Rpb25OYW1lID0gbm9ybWFsaXplRnVuY3Rpb25OYW1lKGZyYW1lLmZ1bmN0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRnVuY3Rpb25OYW1lKGZuTmFtZSkge1xuICB2YXIgcGFydHMgPSBmbk5hbWUuc3BsaXQoJy8nKTtcblxuICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgIGZuTmFtZSA9IFsnT2JqZWN0JywgcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dLmpvaW4oJy4nKTtcbiAgfSBlbHNlIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1swXTtcbiAgfVxuXG4gIGZuTmFtZSA9IGZuTmFtZS5yZXBsYWNlKC8uPCQvZ2ksICcuPGFub255bW91cz4nKTtcbiAgZm5OYW1lID0gZm5OYW1lLnJlcGxhY2UoL15Bbm9ueW1vdXMgZnVuY3Rpb24kLywgJzxhbm9ueW1vdXM+Jyk7XG4gIHBhcnRzID0gZm5OYW1lLnNwbGl0KCcuJyk7XG5cbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1swXTtcbiAgfVxuXG4gIHJldHVybiBmbk5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGFja1RyYWNlcyhlcnJvckV2ZW50KSB7XG4gIHZhciBlcnJvciA9IGVycm9yRXZlbnQuZXJyb3IsXG4gICAgICBmaWxlbmFtZSA9IGVycm9yRXZlbnQuZmlsZW5hbWUsXG4gICAgICBsaW5lbm8gPSBlcnJvckV2ZW50LmxpbmVubyxcbiAgICAgIGNvbG5vID0gZXJyb3JFdmVudC5jb2xubztcbiAgdmFyIHN0YWNrVHJhY2VzID0gW107XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN0YWNrVHJhY2VzID0gc3RhY2tQYXJzZXIucGFyc2UoZXJyb3IpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAoc3RhY2tUcmFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhY2tUcmFjZXMgPSBbe1xuICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxuICAgICAgbGluZU51bWJlcjogbGluZW5vLFxuICAgICAgY29sdW1uTnVtYmVyOiBjb2xub1xuICAgIH1dO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRTdGFja1RyYWNlcyA9IG5vcm1hbGl6ZVN0YWNrRnJhbWVzKHN0YWNrVHJhY2VzKTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWRTdGFja1RyYWNlcy5tYXAoZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc3RhY2suZmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzdGFjay5saW5lTnVtYmVyLFxuICAgICAgICBjb2x1bW5OdW1iZXIgPSBzdGFjay5jb2x1bW5OdW1iZXIsXG4gICAgICAgIF9zdGFjayRmdW5jdGlvbk5hbWUgPSBzdGFjay5mdW5jdGlvbk5hbWUsXG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IF9zdGFjayRmdW5jdGlvbk5hbWUgPT09IHZvaWQgMCA/ICc8YW5vbnltb3VzPicgOiBfc3RhY2skZnVuY3Rpb25OYW1lO1xuXG4gICAgaWYgKCFmaWxlTmFtZSAmJiAhbGluZU51bWJlcikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmICghY29sdW1uTnVtYmVyICYmICFsaW5lTnVtYmVyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIGZpbGVQYXRoID0gY2xlYW5GaWxlUGF0aChmaWxlTmFtZSk7XG4gICAgdmFyIGNsZWFuZWRGaWxlTmFtZSA9IGZpbGVQYXRoVG9GaWxlTmFtZShmaWxlUGF0aCk7XG5cbiAgICBpZiAoaXNGaWxlSW5saW5lKGZpbGVQYXRoKSkge1xuICAgICAgY2xlYW5lZEZpbGVOYW1lID0gJyhpbmxpbmUgc2NyaXB0KSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFic19wYXRoOiBmaWxlTmFtZSxcbiAgICAgIGZpbGVuYW1lOiBjbGVhbmVkRmlsZU5hbWUsXG4gICAgICBmdW5jdGlvbjogZnVuY3Rpb25OYW1lLFxuICAgICAgbGluZW5vOiBsaW5lTnVtYmVyLFxuICAgICAgY29sbm86IGNvbHVtbk51bWJlclxuICAgIH07XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckludmFsaWRGcmFtZXMoZnJhbWVzKSB7XG4gIHJldHVybiBmcmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZpbGVuYW1lID0gX3JlZi5maWxlbmFtZSxcbiAgICAgICAgbGluZW5vID0gX3JlZi5saW5lbm87XG4gICAgcmV0dXJuIHR5cGVvZiBmaWxlbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGxpbmVubyAhPT0gJ3VuZGVmaW5lZCc7XG4gIH0pO1xufSIsImltcG9ydCBFcnJvckxvZ2dpbmcgZnJvbSAnLi9lcnJvci1sb2dnaW5nJztcbmltcG9ydCBQZXJmb3JtYW5jZU1vbml0b3JpbmcgZnJvbSAnLi9wZXJmb3JtYW5jZS1tb25pdG9yaW5nJztcbmltcG9ydCBTZXJ2aWNlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlLWZhY3RvcnknO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVN1cHBvcnRlZCwgc2NoZWR1bGVNaWNyb1Rhc2ssIHNjaGVkdWxlTWFjcm9UYXNrIH0gZnJvbSAnLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgcGF0Y2hBbGwsIHBhdGNoRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9jb21tb24vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgUEFHRV9MT0FELCBFUlJPUiB9IGZyb20gJy4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRJbnN0cnVtZW50YXRpb25GbGFncyB9IGZyb20gJy4vY29tbW9uL2luc3RydW1lbnQnO1xuaW1wb3J0IGFmdGVyRnJhbWUgZnJvbSAnLi9jb21tb24vYWZ0ZXItZnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2VyIH0gZnJvbSAnLi9vcGVudHJhY2luZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcnZpY2VGYWN0b3J5KCkge1xuICB2YXIgc2VydmljZUZhY3RvcnkgPSBuZXcgU2VydmljZUZhY3RvcnkoKTtcbiAgc2VydmljZUZhY3RvcnkucmVnaXN0ZXJDb3JlU2VydmljZXMoKTtcbiAgRXJyb3JMb2dnaW5nLnJlZ2lzdGVyU2VydmljZXMoc2VydmljZUZhY3RvcnkpO1xuICBQZXJmb3JtYW5jZU1vbml0b3JpbmcucmVnaXN0ZXJTZXJ2aWNlcyhzZXJ2aWNlRmFjdG9yeSk7XG4gIHJldHVybiBzZXJ2aWNlRmFjdG9yeTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2VydmljZUZhY3RvcnksIFNlcnZpY2VGYWN0b3J5LCBwYXRjaEFsbCwgcGF0Y2hFdmVudEhhbmRsZXIsIGlzUGxhdGZvcm1TdXBwb3J0ZWQsIEVSUk9SLCBQQUdFX0xPQUQsIGdldEluc3RydW1lbnRhdGlvbkZsYWdzLCBjcmVhdGVUcmFjZXIsIHNjaGVkdWxlTWljcm9UYXNrLCBzY2hlZHVsZU1hY3JvVGFzaywgYWZ0ZXJGcmFtZSB9OyIsImltcG9ydCBUcmFjZXIgZnJvbSAnLi90cmFjZXInO1xuaW1wb3J0IFNwYW4gZnJvbSAnLi9zcGFuJztcblxuZnVuY3Rpb24gY3JlYXRlVHJhY2VyKHNlcnZpY2VGYWN0b3J5KSB7XG4gIHZhciBwZXJmb3JtYW5jZU1vbml0b3JpbmcgPSBzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdQZXJmb3JtYW5jZU1vbml0b3JpbmcnKTtcbiAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ1RyYW5zYWN0aW9uU2VydmljZScpO1xuICB2YXIgZXJyb3JMb2dnaW5nID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnRXJyb3JMb2dnaW5nJyk7XG4gIHZhciBsb2dnaW5nU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0xvZ2dpbmdTZXJ2aWNlJyk7XG4gIHJldHVybiBuZXcgVHJhY2VyKHBlcmZvcm1hbmNlTW9uaXRvcmluZywgdHJhbnNhY3Rpb25TZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgZXJyb3JMb2dnaW5nKTtcbn1cblxuZXhwb3J0IHsgU3BhbiwgVHJhY2VyLCBjcmVhdGVUcmFjZXIgfTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgU3BhbiBhcyBvdFNwYW4gfSBmcm9tICdvcGVudHJhY2luZy9saWIvc3Bhbic7XG5pbXBvcnQgeyBleHRlbmQsIGdldFRpbWVPcmlnaW4gfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4uL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvdHJhbnNhY3Rpb24nO1xuXG52YXIgU3BhbiA9IGZ1bmN0aW9uIChfb3RTcGFuKSB7XG4gIF9pbmhlcml0c0xvb3NlKFNwYW4sIF9vdFNwYW4pO1xuXG4gIGZ1bmN0aW9uIFNwYW4odHJhY2VyLCBzcGFuKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb3RTcGFuLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5fX3RyYWNlciA9IHRyYWNlcjtcbiAgICBfdGhpcy5zcGFuID0gc3BhbjtcbiAgICBfdGhpcy5pc1RyYW5zYWN0aW9uID0gc3BhbiBpbnN0YW5jZW9mIFRyYW5zYWN0aW9uO1xuICAgIF90aGlzLnNwYW5Db250ZXh0ID0ge1xuICAgICAgaWQ6IHNwYW4uaWQsXG4gICAgICB0cmFjZUlkOiBzcGFuLnRyYWNlSWQsXG4gICAgICBzYW1wbGVkOiBzcGFuLnNhbXBsZWRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTcGFuLnByb3RvdHlwZTtcblxuICBfcHJvdG8uX2NvbnRleHQgPSBmdW5jdGlvbiBfY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGFuQ29udGV4dDtcbiAgfTtcblxuICBfcHJvdG8uX3RyYWNlciA9IGZ1bmN0aW9uIF90cmFjZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190cmFjZXI7XG4gIH07XG5cbiAgX3Byb3RvLl9zZXRPcGVyYXRpb25OYW1lID0gZnVuY3Rpb24gX3NldE9wZXJhdGlvbk5hbWUobmFtZSkge1xuICAgIHRoaXMuc3Bhbi5uYW1lID0gbmFtZTtcbiAgfTtcblxuICBfcHJvdG8uX2FkZFRhZ3MgPSBmdW5jdGlvbiBfYWRkVGFncyhrZXlWYWx1ZVBhaXJzKSB7XG4gICAgdmFyIHRhZ3MgPSBleHRlbmQoe30sIGtleVZhbHVlUGFpcnMpO1xuXG4gICAgaWYgKHRhZ3MudHlwZSkge1xuICAgICAgdGhpcy5zcGFuLnR5cGUgPSB0YWdzLnR5cGU7XG4gICAgICBkZWxldGUgdGFncy50eXBlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVHJhbnNhY3Rpb24pIHtcbiAgICAgIHZhciB1c2VySWQgPSB0YWdzWyd1c2VyLmlkJ107XG4gICAgICB2YXIgdXNlcm5hbWUgPSB0YWdzWyd1c2VyLnVzZXJuYW1lJ107XG4gICAgICB2YXIgZW1haWwgPSB0YWdzWyd1c2VyLmVtYWlsJ107XG5cbiAgICAgIGlmICh1c2VySWQgfHwgdXNlcm5hbWUgfHwgZW1haWwpIHtcbiAgICAgICAgdGhpcy5zcGFuLmFkZENvbnRleHQoe1xuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci5pZCddO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci51c2VybmFtZSddO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci5lbWFpbCddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3Bhbi5hZGRMYWJlbHModGFncyk7XG4gIH07XG5cbiAgX3Byb3RvLl9sb2cgPSBmdW5jdGlvbiBfbG9nKGxvZywgdGltZXN0YW1wKSB7XG4gICAgaWYgKGxvZy5ldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgaWYgKGxvZ1snZXJyb3Iub2JqZWN0J10pIHtcbiAgICAgICAgdGhpcy5fX3RyYWNlci5lcnJvckxvZ2dpbmcubG9nRXJyb3IobG9nWydlcnJvci5vYmplY3QnXSk7XG4gICAgICB9IGVsc2UgaWYgKGxvZy5tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX190cmFjZXIuZXJyb3JMb2dnaW5nLmxvZ0Vycm9yKGxvZy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9maW5pc2ggPSBmdW5jdGlvbiBfZmluaXNoKGZpbmlzaFRpbWUpIHtcbiAgICB0aGlzLnNwYW4uZW5kKCk7XG5cbiAgICBpZiAoZmluaXNoVGltZSkge1xuICAgICAgdGhpcy5zcGFuLl9lbmQgPSBmaW5pc2hUaW1lIC0gZ2V0VGltZU9yaWdpbigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3Bhbjtcbn0ob3RTcGFuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3BhbjsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgVHJhY2VyIGFzIG90VHJhY2VyIH0gZnJvbSAnb3BlbnRyYWNpbmcvbGliL3RyYWNlcic7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfQ0hJTERfT0YsIEZPUk1BVF9URVhUX01BUCwgRk9STUFUX0hUVFBfSEVBREVSUywgRk9STUFUX0JJTkFSWSB9IGZyb20gJ29wZW50cmFjaW5nL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3BhbiBhcyBOb29wU3BhbiB9IGZyb20gJ29wZW50cmFjaW5nL2xpYi9zcGFuJztcbmltcG9ydCB7IGdldFRpbWVPcmlnaW4sIGZpbmQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gJy4uL2Vudic7XG5pbXBvcnQgU3BhbiBmcm9tICcuL3NwYW4nO1xuXG52YXIgVHJhY2VyID0gZnVuY3Rpb24gKF9vdFRyYWNlcikge1xuICBfaW5oZXJpdHNMb29zZShUcmFjZXIsIF9vdFRyYWNlcik7XG5cbiAgZnVuY3Rpb24gVHJhY2VyKHBlcmZvcm1hbmNlTW9uaXRvcmluZywgdHJhbnNhY3Rpb25TZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgZXJyb3JMb2dnaW5nKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb3RUcmFjZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLnBlcmZvcm1hbmNlTW9uaXRvcmluZyA9IHBlcmZvcm1hbmNlTW9uaXRvcmluZztcbiAgICBfdGhpcy50cmFuc2FjdGlvblNlcnZpY2UgPSB0cmFuc2FjdGlvblNlcnZpY2U7XG4gICAgX3RoaXMubG9nZ2luZ1NlcnZpY2UgPSBsb2dnaW5nU2VydmljZTtcbiAgICBfdGhpcy5lcnJvckxvZ2dpbmcgPSBlcnJvckxvZ2dpbmc7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYWNlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLl9zdGFydFNwYW4gPSBmdW5jdGlvbiBfc3RhcnRTcGFuKG5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc3Bhbk9wdGlvbnMgPSB7XG4gICAgICBtYW5hZ2VkOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBzcGFuT3B0aW9ucy50aW1lc3RhbXAgPSBvcHRpb25zLnN0YXJ0VGltZTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRPZikge1xuICAgICAgICBzcGFuT3B0aW9ucy5wYXJlbnRJZCA9IG9wdGlvbnMuY2hpbGRPZi5pZDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZWZlcmVuY2VzICYmIG9wdGlvbnMucmVmZXJlbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmRlYnVnKCdFbGFzdGljIEFQTSBPcGVuVHJhY2luZzogVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIHJlZmVyZW5jZXMsIG9ubHkgdGhlIGZpcnN0IGNoaWxkT2YgcmVmZXJlbmNlIHdpbGwgYmUgcmVjb3JkZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkUmVmID0gZmluZChvcHRpb25zLnJlZmVyZW5jZXMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICByZXR1cm4gcmVmLnR5cGUoKSA9PT0gUkVGRVJFTkNFX0NISUxEX09GO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICBzcGFuT3B0aW9ucy5wYXJlbnRJZCA9IGNoaWxkUmVmLnJlZmVyZW5jZWRDb250ZXh0KCkuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3BhbjtcbiAgICB2YXIgY3VycmVudFRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCk7XG5cbiAgICBpZiAoY3VycmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICBzcGFuID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2Uuc3RhcnRTcGFuKG5hbWUsIHVuZGVmaW5lZCwgc3Bhbk9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2Uuc3RhcnRUcmFuc2FjdGlvbihuYW1lLCB1bmRlZmluZWQsIHNwYW5PcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoIXNwYW4pIHtcbiAgICAgIHJldHVybiBuZXcgTm9vcFNwYW4oKTtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbk9wdGlvbnMudGltZXN0YW1wKSB7XG4gICAgICBzcGFuLl9zdGFydCA9IHNwYW5PcHRpb25zLnRpbWVzdGFtcCAtIGdldFRpbWVPcmlnaW4oKTtcbiAgICB9XG5cbiAgICB2YXIgb3RTcGFuID0gbmV3IFNwYW4odGhpcywgc3Bhbik7XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnRhZ3MpIHtcbiAgICAgIG90U3Bhbi5hZGRUYWdzKG9wdGlvbnMudGFncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG90U3BhbjtcbiAgfTtcblxuICBfcHJvdG8uX2luamVjdCA9IGZ1bmN0aW9uIF9pbmplY3Qoc3BhbkNvbnRleHQsIGZvcm1hdCwgY2Fycmllcikge1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlIEZPUk1BVF9URVhUX01BUDpcbiAgICAgIGNhc2UgRk9STUFUX0hUVFBfSEVBREVSUzpcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZU1vbml0b3JpbmcuaW5qZWN0RHRIZWFkZXIoc3BhbkNvbnRleHQsIGNhcnJpZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBGT1JNQVRfQklOQVJZOlxuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UuZGVidWcoJ0VsYXN0aWMgQVBNIE9wZW5UcmFjaW5nOiBiaW5hcnkgY2FycmllciBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2V4dHJhY3QgPSBmdW5jdGlvbiBfZXh0cmFjdChmb3JtYXQsIGNhcnJpZXIpIHtcbiAgICB2YXIgY3R4O1xuXG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgRk9STUFUX1RFWFRfTUFQOlxuICAgICAgY2FzZSBGT1JNQVRfSFRUUF9IRUFERVJTOlxuICAgICAgICBjdHggPSB0aGlzLnBlcmZvcm1hbmNlTW9uaXRvcmluZy5leHRyYWN0RHRIZWFkZXIoY2Fycmllcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEZPUk1BVF9CSU5BUlk6XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5kZWJ1ZygnRWxhc3RpYyBBUE0gT3BlblRyYWNpbmc6IGJpbmFyeSBjYXJyaWVyIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIGN0eCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN0eDtcbiAgfTtcblxuICByZXR1cm4gVHJhY2VyO1xufShvdFRyYWNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNlcjsiLCJpbXBvcnQgeyBnZXREdXJhdGlvbiwgUEVSRiB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBQQUdFX0xPQUQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbnZhciBwYWdlTG9hZEJyZWFrZG93bnMgPSBbWydkb21haW5Mb29rdXBTdGFydCcsICdkb21haW5Mb29rdXBFbmQnLCAnRE5TJ10sIFsnY29ubmVjdFN0YXJ0JywgJ2Nvbm5lY3RFbmQnLCAnVENQJ10sIFsncmVxdWVzdFN0YXJ0JywgJ3Jlc3BvbnNlU3RhcnQnLCAnUmVxdWVzdCddLCBbJ3Jlc3BvbnNlU3RhcnQnLCAncmVzcG9uc2VFbmQnLCAnUmVzcG9uc2UnXSwgWydkb21Mb2FkaW5nJywgJ2RvbUNvbXBsZXRlJywgJ1Byb2Nlc3NpbmcnXSwgWydsb2FkRXZlbnRTdGFydCcsICdsb2FkRXZlbnRFbmQnLCAnTG9hZCddXTtcblxuZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlU2VsZlRpbWUodHJhbnNhY3Rpb24pIHtcbiAgdmFyIHNwYW5zID0gdHJhbnNhY3Rpb24uc3BhbnMsXG4gICAgICBfc3RhcnQgPSB0cmFuc2FjdGlvbi5fc3RhcnQsXG4gICAgICBfZW5kID0gdHJhbnNhY3Rpb24uX2VuZDtcblxuICBpZiAoc3BhbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uLmR1cmF0aW9uKCk7XG4gIH1cblxuICBzcGFucy5zb3J0KGZ1bmN0aW9uIChzcGFuMSwgc3BhbjIpIHtcbiAgICByZXR1cm4gc3BhbjEuX3N0YXJ0IC0gc3BhbjIuX3N0YXJ0O1xuICB9KTtcbiAgdmFyIHNwYW4gPSBzcGFuc1swXTtcbiAgdmFyIHNwYW5FbmQgPSBzcGFuLl9lbmQ7XG4gIHZhciBzcGFuU3RhcnQgPSBzcGFuLl9zdGFydDtcbiAgdmFyIGxhc3RDb250aW51b3VzRW5kID0gc3BhbkVuZDtcbiAgdmFyIHNlbGZUaW1lID0gc3BhblN0YXJ0IC0gX3N0YXJ0O1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzcGFuID0gc3BhbnNbaV07XG4gICAgc3BhblN0YXJ0ID0gc3Bhbi5fc3RhcnQ7XG4gICAgc3BhbkVuZCA9IHNwYW4uX2VuZDtcblxuICAgIGlmIChzcGFuU3RhcnQgPiBsYXN0Q29udGludW91c0VuZCkge1xuICAgICAgc2VsZlRpbWUgKz0gc3BhblN0YXJ0IC0gbGFzdENvbnRpbnVvdXNFbmQ7XG4gICAgICBsYXN0Q29udGludW91c0VuZCA9IHNwYW5FbmQ7XG4gICAgfSBlbHNlIGlmIChzcGFuRW5kID4gbGFzdENvbnRpbnVvdXNFbmQpIHtcbiAgICAgIGxhc3RDb250aW51b3VzRW5kID0gc3BhbkVuZDtcbiAgICB9XG4gIH1cblxuICBpZiAobGFzdENvbnRpbnVvdXNFbmQgPCBfZW5kKSB7XG4gICAgc2VsZlRpbWUgKz0gX2VuZCAtIGxhc3RDb250aW51b3VzRW5kO1xuICB9XG5cbiAgcmV0dXJuIHNlbGZUaW1lO1xufVxuXG5mdW5jdGlvbiBncm91cFNwYW5zKHRyYW5zYWN0aW9uKSB7XG4gIHZhciBzcGFuTWFwID0ge307XG4gIHZhciB0cmFuc2FjdGlvblNlbGZUaW1lID0gY2FsY3VsYXRlU2VsZlRpbWUodHJhbnNhY3Rpb24pO1xuICBzcGFuTWFwWydhcHAnXSA9IHtcbiAgICBjb3VudDogMSxcbiAgICBkdXJhdGlvbjogdHJhbnNhY3Rpb25TZWxmVGltZVxuICB9O1xuICB2YXIgc3BhbnMgPSB0cmFuc2FjdGlvbi5zcGFucztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNwYW4gPSBzcGFuc1tpXTtcbiAgICB2YXIgZHVyYXRpb24gPSBzcGFuLmR1cmF0aW9uKCk7XG5cbiAgICBpZiAoZHVyYXRpb24gPT09IDAgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBzcGFuLnR5cGUsXG4gICAgICAgIHN1YlR5cGUgPSBzcGFuLnN1YlR5cGU7XG4gICAgdmFyIGtleSA9IHR5cGU7XG5cbiAgICBpZiAoc3ViVHlwZSkge1xuICAgICAga2V5ICs9ICcuJyArIHN1YlR5cGU7XG4gICAgfVxuXG4gICAgaWYgKCFzcGFuTWFwW2tleV0pIHtcbiAgICAgIHNwYW5NYXBba2V5XSA9IHtcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNwYW5NYXBba2V5XS5jb3VudCsrO1xuICAgIHNwYW5NYXBba2V5XS5kdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBzcGFuTWFwO1xufVxuXG5mdW5jdGlvbiBnZXRTcGFuQnJlYWtkb3duKHRyYW5zYWN0aW9uRGV0YWlscywgX3JlZikge1xuICB2YXIgZGV0YWlscyA9IF9yZWYuZGV0YWlscyxcbiAgICAgIF9yZWYkY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgY291bnQgPSBfcmVmJGNvdW50ID09PSB2b2lkIDAgPyAxIDogX3JlZiRjb3VudCxcbiAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2FjdGlvbjogdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgIHNwYW46IGRldGFpbHMsXG4gICAgc2FtcGxlczoge1xuICAgICAgJ3NwYW4uc2VsZl90aW1lLmNvdW50JzogZ2V0VmFsdWUoY291bnQpLFxuICAgICAgJ3NwYW4uc2VsZl90aW1lLnN1bS51cyc6IGdldFZhbHVlKGR1cmF0aW9uKVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVCcmVha2Rvd24odHJhbnNhY3Rpb24sIHRpbWluZ3MpIHtcbiAgaWYgKHRpbWluZ3MgPT09IHZvaWQgMCkge1xuICAgIHRpbWluZ3MgPSBQRVJGLnRpbWluZztcbiAgfVxuXG4gIHZhciBicmVha2Rvd25zID0gW107XG4gIHZhciB0ckR1cmF0aW9uID0gdHJhbnNhY3Rpb24uZHVyYXRpb24oKTtcbiAgdmFyIG5hbWUgPSB0cmFuc2FjdGlvbi5uYW1lLFxuICAgICAgdHlwZSA9IHRyYW5zYWN0aW9uLnR5cGUsXG4gICAgICBzYW1wbGVkID0gdHJhbnNhY3Rpb24uc2FtcGxlZDtcbiAgdmFyIHRyYW5zYWN0aW9uRGV0YWlscyA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcbiAgYnJlYWtkb3ducy5wdXNoKHtcbiAgICB0cmFuc2FjdGlvbjogdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgIHNhbXBsZXM6IHtcbiAgICAgICd0cmFuc2FjdGlvbi5kdXJhdGlvbi5jb3VudCc6IGdldFZhbHVlKDEpLFxuICAgICAgJ3RyYW5zYWN0aW9uLmR1cmF0aW9uLnN1bS51cyc6IGdldFZhbHVlKHRyRHVyYXRpb24pLFxuICAgICAgJ3RyYW5zYWN0aW9uLmJyZWFrZG93bi5jb3VudCc6IGdldFZhbHVlKHNhbXBsZWQgPyAxIDogMClcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghc2FtcGxlZCkge1xuICAgIHJldHVybiBicmVha2Rvd25zO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFBBR0VfTE9BRCAmJiB0aW1pbmdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlTG9hZEJyZWFrZG93bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50ID0gcGFnZUxvYWRCcmVha2Rvd25zW2ldO1xuICAgICAgdmFyIHN0YXJ0ID0gdGltaW5nc1tjdXJyZW50WzBdXTtcbiAgICAgIHZhciBlbmQgPSB0aW1pbmdzW2N1cnJlbnRbMV1dO1xuICAgICAgdmFyIGR1cmF0aW9uID0gZ2V0RHVyYXRpb24oc3RhcnQsIGVuZCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCB8fCBkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBicmVha2Rvd25zLnB1c2goZ2V0U3BhbkJyZWFrZG93bih0cmFuc2FjdGlvbkRldGFpbHMsIHtcbiAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgIHR5cGU6IGN1cnJlbnRbMl1cbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzcGFuTWFwID0gZ3JvdXBTcGFucyh0cmFuc2FjdGlvbik7XG4gICAgT2JqZWN0LmtleXMoc3Bhbk1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX2tleSRzcGxpdCA9IGtleS5zcGxpdCgnLicpLFxuICAgICAgICAgIHR5cGUgPSBfa2V5JHNwbGl0WzBdLFxuICAgICAgICAgIHN1YnR5cGUgPSBfa2V5JHNwbGl0WzFdO1xuXG4gICAgICB2YXIgX3NwYW5NYXAka2V5ID0gc3Bhbk1hcFtrZXldLFxuICAgICAgICAgIGR1cmF0aW9uID0gX3NwYW5NYXAka2V5LmR1cmF0aW9uLFxuICAgICAgICAgIGNvdW50ID0gX3NwYW5NYXAka2V5LmNvdW50O1xuICAgICAgYnJlYWtkb3ducy5wdXNoKGdldFNwYW5CcmVha2Rvd24odHJhbnNhY3Rpb25EZXRhaWxzLCB7XG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHN1YnR5cGU6IHN1YnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBjb3VudDogY291bnRcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBicmVha2Rvd25zO1xufSIsImltcG9ydCBTcGFuIGZyb20gJy4vc3Bhbic7XG5pbXBvcnQgeyBSRVNPVVJDRV9JTklUSUFUT1JfVFlQRVMsIE1BWF9TUEFOX0RVUkFUSU9OLCBVU0VSX1RJTUlOR19USFJFU0hPTEQsIFBBR0VfTE9BRCwgUkVTT1VSQ0UsIE1FQVNVUkUgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsLCBQRVJGLCBpc1BlcmZUaW1lbGluZVN1cHBvcnRlZCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG52YXIgZXZlbnRQYWlycyA9IFtbJ2RvbWFpbkxvb2t1cFN0YXJ0JywgJ2RvbWFpbkxvb2t1cEVuZCcsICdEb21haW4gbG9va3VwJ10sIFsnY29ubmVjdFN0YXJ0JywgJ2Nvbm5lY3RFbmQnLCAnTWFraW5nIGEgY29ubmVjdGlvbiB0byB0aGUgc2VydmVyJ10sIFsncmVxdWVzdFN0YXJ0JywgJ3Jlc3BvbnNlRW5kJywgJ1JlcXVlc3RpbmcgYW5kIHJlY2VpdmluZyB0aGUgZG9jdW1lbnQnXSwgWydkb21Mb2FkaW5nJywgJ2RvbUludGVyYWN0aXZlJywgJ1BhcnNpbmcgdGhlIGRvY3VtZW50LCBleGVjdXRpbmcgc3luYy4gc2NyaXB0cyddLCBbJ2RvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0JywgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsICdGaXJlIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50J10sIFsnbG9hZEV2ZW50U3RhcnQnLCAnbG9hZEV2ZW50RW5kJywgJ0ZpcmUgXCJsb2FkXCIgZXZlbnQnXV07XG5cbmZ1bmN0aW9uIHNob3VsZENyZWF0ZVNwYW4oc3RhcnQsIGVuZCwgdHJTdGFydCwgdHJFbmQsIGJhc2VUaW1lKSB7XG4gIGlmIChiYXNlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZVRpbWUgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBzdGFydCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgJiYgc3RhcnQgPj0gYmFzZVRpbWUgJiYgZW5kID4gc3RhcnQgJiYgc3RhcnQgLSBiYXNlVGltZSA+PSB0clN0YXJ0ICYmIGVuZCAtIGJhc2VUaW1lIDw9IHRyRW5kICYmIGVuZCAtIHN0YXJ0IDwgTUFYX1NQQU5fRFVSQVRJT04gJiYgc3RhcnQgLSBiYXNlVGltZSA8IE1BWF9TUEFOX0RVUkFUSU9OICYmIGVuZCAtIGJhc2VUaW1lIDwgTUFYX1NQQU5fRFVSQVRJT047XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25UaW1pbmdTcGFucyh0aW1pbmdzLCBiYXNlVGltZSwgdHJTdGFydCwgdHJFbmQpIHtcbiAgdmFyIHNwYW5zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudFBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGltaW5nc1tldmVudFBhaXJzW2ldWzBdXTtcbiAgICB2YXIgZW5kID0gdGltaW5nc1tldmVudFBhaXJzW2ldWzFdXTtcblxuICAgIGlmICghc2hvdWxkQ3JlYXRlU3BhbihzdGFydCwgZW5kLCB0clN0YXJ0LCB0ckVuZCwgYmFzZVRpbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgc3BhbiA9IG5ldyBTcGFuKGV2ZW50UGFpcnNbaV1bMl0sICdoYXJkLW5hdmlnYXRpb24uYnJvd3Nlci10aW1pbmcnKTtcblxuICAgIGlmIChldmVudFBhaXJzW2ldWzBdID09PSAncmVxdWVzdFN0YXJ0Jykge1xuICAgICAgc3Bhbi5wYWdlUmVzcG9uc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHNwYW4uX3N0YXJ0ID0gc3RhcnQgLSBiYXNlVGltZTtcbiAgICBzcGFuLmVuZChlbmQgLSBiYXNlVGltZSk7XG4gICAgc3BhbnMucHVzaChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBzcGFucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFuKHJlc291cmNlVGltaW5nRW50cnkpIHtcbiAgdmFyIG5hbWUgPSByZXNvdXJjZVRpbWluZ0VudHJ5Lm5hbWUsXG4gICAgICBpbml0aWF0b3JUeXBlID0gcmVzb3VyY2VUaW1pbmdFbnRyeS5pbml0aWF0b3JUeXBlLFxuICAgICAgc3RhcnRUaW1lID0gcmVzb3VyY2VUaW1pbmdFbnRyeS5zdGFydFRpbWUsXG4gICAgICByZXNwb25zZUVuZCA9IHJlc291cmNlVGltaW5nRW50cnkucmVzcG9uc2VFbmQ7XG4gIHZhciBraW5kID0gJ3Jlc291cmNlJztcblxuICBpZiAoaW5pdGlhdG9yVHlwZSkge1xuICAgIGtpbmQgKz0gJy4nICsgaW5pdGlhdG9yVHlwZTtcbiAgfVxuXG4gIHZhciBzcGFuTmFtZSA9IHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsKG5hbWUpO1xuICB2YXIgc3BhbiA9IG5ldyBTcGFuKHNwYW5OYW1lLCBraW5kKTtcbiAgc3Bhbi5fc3RhcnQgPSBzdGFydFRpbWU7XG4gIHNwYW4uZW5kKHJlc3BvbnNlRW5kLCB7XG4gICAgdXJsOiBuYW1lLFxuICAgIGVudHJ5OiByZXNvdXJjZVRpbWluZ0VudHJ5XG4gIH0pO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFucyhlbnRyaWVzLCBmaWx0ZXJVcmxzLCB0clN0YXJ0LCB0ckVuZCkge1xuICB2YXIgc3BhbnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2VudHJpZXMkaSA9IGVudHJpZXNbaV0sXG4gICAgICAgIGluaXRpYXRvclR5cGUgPSBfZW50cmllcyRpLmluaXRpYXRvclR5cGUsXG4gICAgICAgIG5hbWUgPSBfZW50cmllcyRpLm5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSA9IF9lbnRyaWVzJGkuc3RhcnRUaW1lLFxuICAgICAgICByZXNwb25zZUVuZCA9IF9lbnRyaWVzJGkucmVzcG9uc2VFbmQ7XG5cbiAgICBpZiAoaW5pdGlhdG9yVHlwZSA9PT0gJ3htbGh0dHByZXF1ZXN0JyB8fCBpbml0aWF0b3JUeXBlID09PSAnZmV0Y2gnIHx8ICFuYW1lKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTLmluZGV4T2YoaW5pdGlhdG9yVHlwZSkgIT09IC0xKSB7XG4gICAgICBpZiAoIXNob3VsZENyZWF0ZVNwYW4oc3RhcnRUaW1lLCByZXNwb25zZUVuZCwgdHJTdGFydCwgdHJFbmQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzcGFucy5wdXNoKGNyZWF0ZVJlc291cmNlVGltaW5nU3BhbihlbnRyaWVzW2ldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbml0aWF0b3JUeXBlICE9IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3VuZEFqYXhSZXEgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWx0ZXJVcmxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBpZHggPSBuYW1lLmxhc3RJbmRleE9mKGZpbHRlclVybHNbal0pO1xuXG4gICAgICAgIGlmIChpZHggPiAtMSAmJiBpZHggPT09IG5hbWUubGVuZ3RoIC0gZmlsdGVyVXJsc1tqXS5sZW5ndGgpIHtcbiAgICAgICAgICBmb3VuZEFqYXhSZXEgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmRBamF4UmVxICYmIHNob3VsZENyZWF0ZVNwYW4oc3RhcnRUaW1lLCByZXNwb25zZUVuZCwgdHJTdGFydCwgdHJFbmQpKSB7XG4gICAgICAgIHNwYW5zLnB1c2goY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFuKGVudHJpZXNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3BhbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJUaW1pbmdTcGFucyhlbnRyaWVzLCB0clN0YXJ0LCB0ckVuZCkge1xuICB2YXIgdXNlclRpbWluZ1NwYW5zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9lbnRyaWVzJGkyID0gZW50cmllc1tpXSxcbiAgICAgICAgbmFtZSA9IF9lbnRyaWVzJGkyLm5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSA9IF9lbnRyaWVzJGkyLnN0YXJ0VGltZSxcbiAgICAgICAgZHVyYXRpb24gPSBfZW50cmllcyRpMi5kdXJhdGlvbjtcbiAgICB2YXIgZW5kID0gc3RhcnRUaW1lICsgZHVyYXRpb247XG5cbiAgICBpZiAoZHVyYXRpb24gPD0gVVNFUl9USU1JTkdfVEhSRVNIT0xEIHx8ICFzaG91bGRDcmVhdGVTcGFuKHN0YXJ0VGltZSwgZW5kLCB0clN0YXJ0LCB0ckVuZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBraW5kID0gJ2FwcCc7XG4gICAgdmFyIHNwYW4gPSBuZXcgU3BhbihuYW1lLCBraW5kKTtcbiAgICBzcGFuLl9zdGFydCA9IHN0YXJ0VGltZTtcbiAgICBzcGFuLmVuZChlbmQpO1xuICAgIHVzZXJUaW1pbmdTcGFucy5wdXNoKHNwYW4pO1xuICB9XG5cbiAgcmV0dXJuIHVzZXJUaW1pbmdTcGFucztcbn1cblxuZnVuY3Rpb24gZ2V0QXBpU3Bhbk5hbWVzKF9yZWYpIHtcbiAgdmFyIHNwYW5zID0gX3JlZi5zcGFucztcbiAgdmFyIGFwaUNhbGxzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGFuID0gc3BhbnNbaV07XG5cbiAgICBpZiAoc3Bhbi50eXBlID09PSAnZXh0ZXJuYWwnICYmIHNwYW4uc3ViVHlwZSA9PT0gJ2h0dHAnKSB7XG4gICAgICBhcGlDYWxscy5wdXNoKHNwYW4ubmFtZS5zcGxpdCgnICcpWzFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXBpQ2FsbHM7XG59XG5cbnZhciBuYXZpZ2F0aW9uVGltaW5nS2V5cyA9IFsnZmV0Y2hTdGFydCcsICdkb21haW5Mb29rdXBTdGFydCcsICdkb21haW5Mb29rdXBFbmQnLCAnY29ubmVjdFN0YXJ0JywgJ2Nvbm5lY3RFbmQnLCAnc2VjdXJlQ29ubmVjdGlvblN0YXJ0JywgJ3JlcXVlc3RTdGFydCcsICdyZXNwb25zZVN0YXJ0JywgJ3Jlc3BvbnNlRW5kJywgJ2RvbUxvYWRpbmcnLCAnZG9tSW50ZXJhY3RpdmUnLCAnZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQnLCAnZG9tQ29udGVudExvYWRlZEV2ZW50RW5kJywgJ2RvbUNvbXBsZXRlJywgJ2xvYWRFdmVudFN0YXJ0JywgJ2xvYWRFdmVudEVuZCddO1xuXG5mdW5jdGlvbiBnZXROYXZpZ2F0aW9uVGltaW5nTWFya3MoKSB7XG4gIHZhciB0aW1pbmcgPSBQRVJGLnRpbWluZztcbiAgdmFyIGZldGNoU3RhcnQgPSB0aW1pbmcuZmV0Y2hTdGFydDtcbiAgdmFyIG1hcmtzID0ge307XG4gIG5hdmlnYXRpb25UaW1pbmdLZXlzLmZvckVhY2goZnVuY3Rpb24gKHRpbWluZ0tleSkge1xuICAgIHZhciBtID0gdGltaW5nW3RpbWluZ0tleV07XG5cbiAgICBpZiAobSAmJiBtID49IGZldGNoU3RhcnQpIHtcbiAgICAgIG1hcmtzW3RpbWluZ0tleV0gPSBtIC0gZmV0Y2hTdGFydDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWFya3M7XG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VMb2FkTWFya3MoKSB7XG4gIHZhciBtYXJrcyA9IGdldE5hdmlnYXRpb25UaW1pbmdNYXJrcygpO1xuICB2YXIgYWdlbnQgPSB7XG4gICAgdGltZVRvRmlyc3RCeXRlOiBtYXJrcy5yZXNwb25zZVN0YXJ0LFxuICAgIGRvbUludGVyYWN0aXZlOiBtYXJrcy5kb21JbnRlcmFjdGl2ZSxcbiAgICBkb21Db21wbGV0ZTogbWFya3MuZG9tQ29tcGxldGVcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYXZpZ2F0aW9uVGltaW5nOiBtYXJrcyxcbiAgICBhZ2VudDogYWdlbnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU5hdmlnYXRpb24odHJhbnNhY3Rpb24pIHtcbiAgaWYgKCF0cmFuc2FjdGlvbi5jYXB0dXJlVGltaW5ncykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0ckVuZCA9IHRyYW5zYWN0aW9uLl9lbmQ7XG5cbiAgaWYgKHRyYW5zYWN0aW9uLnR5cGUgPT09IFBBR0VfTE9BRCkge1xuICAgIGlmICh0cmFuc2FjdGlvbi5tYXJrcyAmJiB0cmFuc2FjdGlvbi5tYXJrcy5jdXN0b20pIHtcbiAgICAgIHZhciBjdXN0b21NYXJrcyA9IHRyYW5zYWN0aW9uLm1hcmtzLmN1c3RvbTtcbiAgICAgIE9iamVjdC5rZXlzKGN1c3RvbU1hcmtzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgY3VzdG9tTWFya3Nba2V5XSArPSB0cmFuc2FjdGlvbi5fc3RhcnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgdHJTdGFydCA9IDA7XG4gICAgdHJhbnNhY3Rpb24uX3N0YXJ0ID0gdHJTdGFydDtcbiAgICB2YXIgdGltaW5ncyA9IFBFUkYudGltaW5nO1xuICAgIGNyZWF0ZU5hdmlnYXRpb25UaW1pbmdTcGFucyh0aW1pbmdzLCB0aW1pbmdzLmZldGNoU3RhcnQsIHRyU3RhcnQsIHRyRW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICBzcGFuLnRyYWNlSWQgPSB0cmFuc2FjdGlvbi50cmFjZUlkO1xuICAgICAgc3Bhbi5zYW1wbGVkID0gdHJhbnNhY3Rpb24uc2FtcGxlZDtcblxuICAgICAgaWYgKHNwYW4ucGFnZVJlc3BvbnNlICYmIHRyYW5zYWN0aW9uLm9wdGlvbnMucGFnZUxvYWRTcGFuSWQpIHtcbiAgICAgICAgc3Bhbi5pZCA9IHRyYW5zYWN0aW9uLm9wdGlvbnMucGFnZUxvYWRTcGFuSWQ7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zYWN0aW9uLnNwYW5zLnB1c2goc3Bhbik7XG4gICAgfSk7XG4gICAgdHJhbnNhY3Rpb24uYWRkTWFya3MoZ2V0UGFnZUxvYWRNYXJrcygpKTtcbiAgfVxuXG4gIGlmIChpc1BlcmZUaW1lbGluZVN1cHBvcnRlZCgpKSB7XG4gICAgdmFyIF90clN0YXJ0ID0gdHJhbnNhY3Rpb24uX3N0YXJ0O1xuICAgIHZhciByZXNvdXJjZUVudHJpZXMgPSBQRVJGLmdldEVudHJpZXNCeVR5cGUoUkVTT1VSQ0UpO1xuICAgIHZhciBhcGlDYWxscyA9IGdldEFwaVNwYW5OYW1lcyh0cmFuc2FjdGlvbik7XG4gICAgY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFucyhyZXNvdXJjZUVudHJpZXMsIGFwaUNhbGxzLCBfdHJTdGFydCwgdHJFbmQpLmZvckVhY2goZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvbi5zcGFucy5wdXNoKHNwYW4pO1xuICAgIH0pO1xuICAgIHZhciB1c2VyRW50cmllcyA9IFBFUkYuZ2V0RW50cmllc0J5VHlwZShNRUFTVVJFKTtcbiAgICBjcmVhdGVVc2VyVGltaW5nU3BhbnModXNlckVudHJpZXMsIF90clN0YXJ0LCB0ckVuZCkuZm9yRWFjaChmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uLnNwYW5zLnB1c2goc3Bhbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2FwdHVyZU5hdmlnYXRpb24sIGNyZWF0ZU5hdmlnYXRpb25UaW1pbmdTcGFucywgY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFucywgY3JlYXRlVXNlclRpbWluZ1NwYW5zIH07IiwiaW1wb3J0IFBlcmZvcm1hbmNlTW9uaXRvcmluZyBmcm9tICcuL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcnO1xuaW1wb3J0IFRyYW5zYWN0aW9uU2VydmljZSBmcm9tICcuL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBQZXJmb3JtYW5jZU1vbml0b3Jpbmc6IFBlcmZvcm1hbmNlTW9uaXRvcmluZyxcbiAgcmVnaXN0ZXJTZXJ2aWNlczogZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlcyhzZXJ2aWNlRmFjdG9yeSkge1xuICAgIHNlcnZpY2VGYWN0b3J5LnJlZ2lzdGVyU2VydmljZUNyZWF0b3IoJ1RyYW5zYWN0aW9uU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb25maWdTZXJ2aWNlID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnQ29uZmlnU2VydmljZScpO1xuICAgICAgdmFyIGxvZ2dpbmdTZXJ2aWNlID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnTG9nZ2luZ1NlcnZpY2UnKTtcbiAgICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKGxvZ2dpbmdTZXJ2aWNlLCBjb25maWdTZXJ2aWNlKTtcbiAgICB9KTtcbiAgICBzZXJ2aWNlRmFjdG9yeS5yZWdpc3RlclNlcnZpY2VDcmVhdG9yKCdQZXJmb3JtYW5jZU1vbml0b3JpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29uZmlnU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0NvbmZpZ1NlcnZpY2UnKTtcbiAgICAgIHZhciBsb2dnaW5nU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0xvZ2dpbmdTZXJ2aWNlJyk7XG4gICAgICB2YXIgYXBtU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0FwbVNlcnZlcicpO1xuICAgICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ1RyYW5zYWN0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIG5ldyBQZXJmb3JtYW5jZU1vbml0b3JpbmcoYXBtU2VydmljZSwgY29uZmlnU2VydmljZSwgbG9nZ2luZ1NlcnZpY2UsIHRyYW5zYWN0aW9uU2VydmljZSk7XG4gICAgfSk7XG4gIH1cbn07IiwiaW1wb3J0IHsgTE9OR19UQVNLLCBMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQsIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IG5vb3AsIFBFUkYgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnLi9zcGFuJztcblxuZnVuY3Rpb24gY3JlYXRlTG9uZ1Rhc2tTcGFucyhsb25ndGFza3MpIHtcbiAgdmFyIHNwYW5zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb25ndGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2xvbmd0YXNrcyRpID0gbG9uZ3Rhc2tzW2ldLFxuICAgICAgICBuYW1lID0gX2xvbmd0YXNrcyRpLm5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSA9IF9sb25ndGFza3MkaS5zdGFydFRpbWUsXG4gICAgICAgIGR1cmF0aW9uID0gX2xvbmd0YXNrcyRpLmR1cmF0aW9uLFxuICAgICAgICBhdHRyaWJ1dGlvbiA9IF9sb25ndGFza3MkaS5hdHRyaWJ1dGlvbjtcbiAgICB2YXIgZW5kID0gc3RhcnRUaW1lICsgZHVyYXRpb247XG4gICAgdmFyIGtpbmQgPSBMT05HX1RBU0s7XG4gICAgdmFyIHNwYW4gPSBuZXcgU3BhbihcIkxvbmd0YXNrKFwiICsgbmFtZSArIFwiKVwiLCBraW5kLCB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICAgIH0pO1xuXG4gICAgaWYgKGF0dHJpYnV0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBfYXR0cmlidXRpb24kID0gYXR0cmlidXRpb25bMF0sXG4gICAgICAgICAgX25hbWUgPSBfYXR0cmlidXRpb24kLm5hbWUsXG4gICAgICAgICAgY29udGFpbmVyVHlwZSA9IF9hdHRyaWJ1dGlvbiQuY29udGFpbmVyVHlwZSxcbiAgICAgICAgICBjb250YWluZXJOYW1lID0gX2F0dHJpYnV0aW9uJC5jb250YWluZXJOYW1lLFxuICAgICAgICAgIGNvbnRhaW5lcklkID0gX2F0dHJpYnV0aW9uJC5jb250YWluZXJJZDtcbiAgICAgIHZhciBjdXN0b21Db250ZXh0ID0ge1xuICAgICAgICBhdHRyaWJ1dGlvbjogX25hbWUsXG4gICAgICAgIHR5cGU6IGNvbnRhaW5lclR5cGVcbiAgICAgIH07XG5cbiAgICAgIGlmIChjb250YWluZXJOYW1lKSB7XG4gICAgICAgIGN1c3RvbUNvbnRleHQubmFtZSA9IGNvbnRhaW5lck5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXJJZCkge1xuICAgICAgICBjdXN0b21Db250ZXh0LmlkID0gY29udGFpbmVySWQ7XG4gICAgICB9XG5cbiAgICAgIHNwYW4uYWRkQ29udGV4dCh7XG4gICAgICAgIGN1c3RvbTogY3VzdG9tQ29udGV4dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Bhbi5lbmQoZW5kKTtcbiAgICBzcGFucy5wdXNoKHNwYW4pO1xuICB9XG5cbiAgcmV0dXJuIHNwYW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZU9ic2VydmVyRW50cmllcyhsaXN0LCBfcmVmKSB7XG4gIHZhciBjYXB0dXJlUGFpbnQgPSBfcmVmLmNhcHR1cmVQYWludDtcbiAgdmFyIGxvbmd0YXNrRW50cmllcyA9IGxpc3QuZ2V0RW50cmllc0J5VHlwZShMT05HX1RBU0spO1xuICB2YXIgbG9uZ1Rhc2tTcGFucyA9IGNyZWF0ZUxvbmdUYXNrU3BhbnMobG9uZ3Rhc2tFbnRyaWVzKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBzcGFuczogbG9uZ1Rhc2tTcGFucyxcbiAgICBtYXJrczoge31cbiAgfTtcblxuICBpZiAoIWNhcHR1cmVQYWludCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgbGNwRW50cmllcyA9IGxpc3QuZ2V0RW50cmllc0J5VHlwZShMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQpO1xuICB2YXIgbGFzdExjcEVudHJ5ID0gbGNwRW50cmllc1tsY3BFbnRyaWVzLmxlbmd0aCAtIDFdO1xuXG4gIGlmIChsYXN0TGNwRW50cnkpIHtcbiAgICB2YXIgbGNwID0gbGFzdExjcEVudHJ5LnJlbmRlclRpbWUgfHwgbGFzdExjcEVudHJ5LmxvYWRUaW1lcztcbiAgICByZXN1bHQubWFya3MubGFyZ2VzdENvbnRlbnRmdWxQYWludCA9IGxjcDtcbiAgfVxuXG4gIHZhciB0aW1pbmcgPSBQRVJGLnRpbWluZztcbiAgdmFyIHVubG9hZERpZmYgPSB0aW1pbmcuZmV0Y2hTdGFydCAtIHRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XG4gIHZhciBmY3BFbnRyeSA9IGxpc3QuZ2V0RW50cmllc0J5TmFtZShGSVJTVF9DT05URU5URlVMX1BBSU5UKVswXTtcblxuICBpZiAoZmNwRW50cnkpIHtcbiAgICB2YXIgZmNwID0gdW5sb2FkRGlmZiA+PSAwID8gZmNwRW50cnkuc3RhcnRUaW1lIC0gdW5sb2FkRGlmZiA6IGZjcEVudHJ5LnN0YXJ0VGltZTtcbiAgICByZXN1bHQubWFya3MuZmlyc3RDb250ZW50ZnVsUGFpbnQgPSBmY3A7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IHZhciBQZXJmRW50cnlSZWNvcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGVyZkVudHJ5UmVjb3JkZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLnBvID0ge1xuICAgICAgb2JzZXJ2ZTogbm9vcCxcbiAgICAgIGRpc2Nvbm5lY3Q6IG5vb3BcbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5QZXJmb3JtYW5jZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnBvID0gbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQZXJmRW50cnlSZWNvcmRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQodHlwZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYnVmZmVyZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gTE9OR19UQVNLKSB7XG4gICAgICAgIGJ1ZmZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG8ub2JzZXJ2ZSh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGJ1ZmZlcmVkOiBidWZmZXJlZFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge31cbiAgfTtcblxuICBfcHJvdG8uc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdGhpcy5wby5kaXNjb25uZWN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFBlcmZFbnRyeVJlY29yZGVyO1xufSgpOyIsImltcG9ydCB7IGNoZWNrU2FtZU9yaWdpbiwgaXNEdEhlYWRlclZhbGlkLCBwYXJzZUR0SGVhZGVyVmFsdWUsIHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsLCBnZXREdEhlYWRlclZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAnLi4vY29tbW9uL3VybCc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvbW1vbi9wYXRjaGluZyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9wYXRjaGluZy9wYXRjaC11dGlscyc7XG5pbXBvcnQgeyBTQ0hFRFVMRSwgSU5WT0tFLCBUUkFOU0FDVElPTl9FTkQsIEFGVEVSX0VWRU5ULCBGRVRDSCwgSElTVE9SWSwgWE1MSFRUUFJFUVVFU1QsIEVWRU5UX1RBUkdFVCwgSFRUUF9SRVFVRVNUX1RZUEUsIFVTRVJfSU5URVJBQ1RJT04sIFBBR0VfTE9BRCwgQlJPV1NFUl9SRVNQT05TSVZFTkVTU19JTlRFUlZBTCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdHJ1bmNhdGVNb2RlbCwgU1BBTl9NT0RFTCwgVFJBTlNBQ1RJT05fTU9ERUwgfSBmcm9tICcuLi9jb21tb24vdHJ1bmNhdGUnO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gJy4uL2Vudic7XG52YXIgQlJPV1NFUl9SRVNQT05TSVZFTkVTU19CVUZGRVIgPSAzO1xudmFyIFNJTUlMQVJfU1BBTl9UT19UUkFOU0FDVElPTl9SQVRJTyA9IDAuMDU7XG52YXIgVFJBTlNBQ1RJT05fRFVSQVRJT05fVEhSRVNIT0xEID0gNjAwMDA7XG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBTbWFsbENvbnRpbnVvdXNseVNpbWlsYXJTcGFucyhvcmlnaW5hbFNwYW5zLCB0cmFuc0R1cmF0aW9uLCB0aHJlc2hvbGQpIHtcbiAgb3JpZ2luYWxTcGFucy5zb3J0KGZ1bmN0aW9uIChzcGFuQSwgc3BhbkIpIHtcbiAgICByZXR1cm4gc3BhbkEuX3N0YXJ0IC0gc3BhbkIuX3N0YXJ0O1xuICB9KTtcbiAgdmFyIHNwYW5zID0gW107XG4gIHZhciBsYXN0Q291bnQgPSAxO1xuICBvcmlnaW5hbFNwYW5zLmZvckVhY2goZnVuY3Rpb24gKHNwYW4sIGluZGV4KSB7XG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3BhbnMucHVzaChzcGFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxhc3RTcGFuID0gc3BhbnNbc3BhbnMubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgaXNDb250aW51b3VzbHlTaW1pbGFyID0gbGFzdFNwYW4udHlwZSA9PT0gc3Bhbi50eXBlICYmIGxhc3RTcGFuLnN1YlR5cGUgPT09IHNwYW4uc3ViVHlwZSAmJiBsYXN0U3Bhbi5hY3Rpb24gPT09IHNwYW4uYWN0aW9uICYmIGxhc3RTcGFuLm5hbWUgPT09IHNwYW4ubmFtZSAmJiBzcGFuLmR1cmF0aW9uKCkgLyB0cmFuc0R1cmF0aW9uIDwgdGhyZXNob2xkICYmIChzcGFuLl9zdGFydCAtIGxhc3RTcGFuLl9lbmQpIC8gdHJhbnNEdXJhdGlvbiA8IHRocmVzaG9sZDtcbiAgICAgIHZhciBpc0xhc3RTcGFuID0gb3JpZ2luYWxTcGFucy5sZW5ndGggPT09IGluZGV4ICsgMTtcblxuICAgICAgaWYgKGlzQ29udGludW91c2x5U2ltaWxhcikge1xuICAgICAgICBsYXN0Q291bnQrKztcbiAgICAgICAgbGFzdFNwYW4uX2VuZCA9IHNwYW4uX2VuZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RDb3VudCA+IDEgJiYgKCFpc0NvbnRpbnVvdXNseVNpbWlsYXIgfHwgaXNMYXN0U3BhbikpIHtcbiAgICAgICAgbGFzdFNwYW4ubmFtZSA9IGxhc3RDb3VudCArICd4ICcgKyBsYXN0U3Bhbi5uYW1lO1xuICAgICAgICBsYXN0Q291bnQgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQ29udGludW91c2x5U2ltaWxhcikge1xuICAgICAgICBzcGFucy5wdXNoKHNwYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzcGFucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUcmFuc2FjdGlvblNwYW5zKHRyYW5zYWN0aW9uKSB7XG4gIGlmICh0cmFuc2FjdGlvbi5zYW1wbGVkKSB7XG4gICAgdmFyIGZpbHRlcmRTcGFucyA9IHRyYW5zYWN0aW9uLnNwYW5zLmZpbHRlcihmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgcmV0dXJuIHNwYW4uZHVyYXRpb24oKSA+IDAgJiYgc3Bhbi5fc3RhcnQgPj0gdHJhbnNhY3Rpb24uX3N0YXJ0ICYmIHNwYW4uX2VuZCA8PSB0cmFuc2FjdGlvbi5fZW5kO1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zYWN0aW9uLmlzTWFuYWdlZCgpKSB7XG4gICAgICB2YXIgZHVyYXRpb24gPSB0cmFuc2FjdGlvbi5kdXJhdGlvbigpO1xuICAgICAgdmFyIHNpbWlsYXJTcGFucyA9IGdyb3VwU21hbGxDb250aW51b3VzbHlTaW1pbGFyU3BhbnMoZmlsdGVyZFNwYW5zLCBkdXJhdGlvbiwgU0lNSUxBUl9TUEFOX1RPX1RSQU5TQUNUSU9OX1JBVElPKTtcbiAgICAgIHRyYW5zYWN0aW9uLnNwYW5zID0gc2ltaWxhclNwYW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2FjdGlvbi5zcGFucyA9IGZpbHRlcmRTcGFucztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNhY3Rpb24ucmVzZXRTcGFucygpO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zYWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQnJvd3NlclJlc3BvbnNpdmVuZXNzKHRyYW5zYWN0aW9uLCBpbnRlcnZhbCwgYnVmZmVyKSB7XG4gIHZhciBjb3VudGVyID0gdHJhbnNhY3Rpb24uYnJvd3NlclJlc3BvbnNpdmVuZXNzQ291bnRlcjtcbiAgdmFyIGR1cmF0aW9uID0gdHJhbnNhY3Rpb24uZHVyYXRpb24oKTtcbiAgdmFyIGV4cGVjdGVkQ291bnQgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gaW50ZXJ2YWwpO1xuICByZXR1cm4gY291bnRlciArIGJ1ZmZlciA+PSBleHBlY3RlZENvdW50O1xufVxuXG52YXIgUGVyZm9ybWFuY2VNb25pdG9yaW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQZXJmb3JtYW5jZU1vbml0b3JpbmcoYXBtU2VydmVyLCBjb25maWdTZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgdHJhbnNhY3Rpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYXBtU2VydmVyID0gYXBtU2VydmVyO1xuICAgIHRoaXMuX2NvbmZpZ1NlcnZpY2UgPSBjb25maWdTZXJ2aWNlO1xuICAgIHRoaXMuX2xvZ2dpblNlcnZpY2UgPSBsb2dnaW5nU2VydmljZTtcbiAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UgPSB0cmFuc2FjdGlvblNlcnZpY2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUGVyZm9ybWFuY2VNb25pdG9yaW5nLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoZmxhZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnU2VydmljZS5ldmVudHMub2JzZXJ2ZShUUkFOU0FDVElPTl9FTkQgKyBBRlRFUl9FVkVOVCwgZnVuY3Rpb24gKHRyKSB7XG4gICAgICB2YXIgcGF5bG9hZCA9IF90aGlzLmNyZWF0ZVRyYW5zYWN0aW9uUGF5bG9hZCh0cik7XG5cbiAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgIF90aGlzLl9hcG1TZXJ2ZXIuYWRkVHJhbnNhY3Rpb24ocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmxhZ3NbSElTVE9SWV0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoSElTVE9SWSwgdGhpcy5nZXRIaXN0b3J5U3ViKCkpO1xuICAgIH1cblxuICAgIGlmIChmbGFnc1tYTUxIVFRQUkVRVUVTVF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoWE1MSFRUUFJFUVVFU1QsIHRoaXMuZ2V0WEhSU3ViKCkpO1xuICAgIH1cblxuICAgIGlmIChmbGFnc1tGRVRDSF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoRkVUQ0gsIHRoaXMuZ2V0RmV0Y2hTdWIoKSk7XG4gICAgfVxuXG4gICAgaWYgKGZsYWdzW0VWRU5UX1RBUkdFVF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoRVZFTlRfVEFSR0VULCB0aGlzLmdldEV2ZW50VGFyZ2V0U3ViKCkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0RXZlbnRUYXJnZXRTdWIgPSBmdW5jdGlvbiBnZXRFdmVudFRhcmdldFN1YigpIHtcbiAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmIChldmVudCA9PT0gU0NIRURVTEUgJiYgdGFzay5zb3VyY2UgPT09IEVWRU5UX1RBUkdFVCAmJiB0YXNrLmV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGFzay50YXJnZXQ7XG4gICAgICAgIHZhciBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICB2YXIgYWRkaXRpb25hbEluZm8gPSAnJztcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvID0gXCJbXFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHRyID0gdHJhbnNhY3Rpb25TZXJ2aWNlLnN0YXJ0VHJhbnNhY3Rpb24oXCJDbGljayAtIFwiICsgdGFnTmFtZSArIGFkZGl0aW9uYWxJbmZvLCBVU0VSX0lOVEVSQUNUSU9OLCB7XG4gICAgICAgICAgbWFuYWdlZDogdHJ1ZSxcbiAgICAgICAgICBjYW5SZXVzZTogdHJ1ZSxcbiAgICAgICAgICByZXVzZVRocmVzaG9sZDogMTAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0cikge1xuICAgICAgICAgIHZhciBjbGFzc2VzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcblxuICAgICAgICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICAgICAgICB0ci5hZGRDb250ZXh0KHtcbiAgICAgICAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRIaXN0b3J5U3ViID0gZnVuY3Rpb24gZ2V0SGlzdG9yeVN1YigpIHtcbiAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmICh0YXNrLnNvdXJjZSA9PT0gSElTVE9SWSAmJiBldmVudCA9PT0gSU5WT0tFKSB7XG4gICAgICAgIHRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKHRhc2suZGF0YS50aXRsZSwgJ3JvdXRlLWNoYW5nZScsIHtcbiAgICAgICAgICBtYW5hZ2VkOiB0cnVlLFxuICAgICAgICAgIGNhblJldXNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFhIUlN1YiA9IGZ1bmN0aW9uIGdldFhIUlN1YigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmICh0YXNrLnNvdXJjZSA9PT0gWE1MSFRUUFJFUVVFU1QgJiYgIWdsb2JhbFN0YXRlLmZldGNoSW5Qcm9ncmVzcykge1xuICAgICAgICBfdGhpczIucHJvY2Vzc0FQSUNhbGxzKGV2ZW50LCB0YXNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRGZXRjaFN1YiA9IGZ1bmN0aW9uIGdldEZldGNoU3ViKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgdGFzaykge1xuICAgICAgaWYgKHRhc2suc291cmNlID09PSBGRVRDSCkge1xuICAgICAgICBfdGhpczMucHJvY2Vzc0FQSUNhbGxzKGV2ZW50LCB0YXNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wcm9jZXNzQVBJQ2FsbHMgPSBmdW5jdGlvbiBwcm9jZXNzQVBJQ2FsbHMoZXZlbnQsIHRhc2spIHtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuX2NvbmZpZ1NlcnZpY2U7XG4gICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZTtcblxuICAgIGlmIChldmVudCA9PT0gU0NIRURVTEUgJiYgdGFzay5kYXRhKSB7XG4gICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgIHZhciByZXF1ZXN0VXJsID0gbmV3IFVybChkYXRhLnVybCk7XG4gICAgICB2YXIgc3Bhbk5hbWUgPSBkYXRhLm1ldGhvZCArICcgJyArIChyZXF1ZXN0VXJsLnJlbGF0aXZlID8gcmVxdWVzdFVybC5wYXRoIDogc3RyaXBRdWVyeVN0cmluZ0Zyb21VcmwocmVxdWVzdFVybC5ocmVmKSk7XG5cbiAgICAgIGlmICghdHJhbnNhY3Rpb25TZXJ2aWNlLmdldEN1cnJlbnRUcmFuc2FjdGlvbigpKSB7XG4gICAgICAgIHRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKHNwYW5OYW1lLCBIVFRQX1JFUVVFU1RfVFlQRSwge1xuICAgICAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGFuID0gdHJhbnNhY3Rpb25TZXJ2aWNlLnN0YXJ0U3BhbihzcGFuTmFtZSwgJ2V4dGVybmFsLmh0dHAnKTtcbiAgICAgIHZhciB0YXNrSWQgPSB0cmFuc2FjdGlvblNlcnZpY2UuYWRkVGFzaygpO1xuXG4gICAgICBpZiAoIXNwYW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNEdEVuYWJsZWQgPSBjb25maWdTZXJ2aWNlLmdldCgnZGlzdHJpYnV0ZWRUcmFjaW5nJyk7XG4gICAgICB2YXIgZHRPcmlnaW5zID0gY29uZmlnU2VydmljZS5nZXQoJ2Rpc3RyaWJ1dGVkVHJhY2luZ09yaWdpbnMnKTtcbiAgICAgIHZhciBjdXJyZW50VXJsID0gbmV3IFVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB2YXIgaXNTYW1lT3JpZ2luID0gY2hlY2tTYW1lT3JpZ2luKHJlcXVlc3RVcmwub3JpZ2luLCBjdXJyZW50VXJsLm9yaWdpbikgfHwgY2hlY2tTYW1lT3JpZ2luKHJlcXVlc3RVcmwub3JpZ2luLCBkdE9yaWdpbnMpO1xuICAgICAgdmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuXG4gICAgICBpZiAoaXNEdEVuYWJsZWQgJiYgaXNTYW1lT3JpZ2luICYmIHRhcmdldCkge1xuICAgICAgICB0aGlzLmluamVjdER0SGVhZGVyKHNwYW4sIHRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhcIkNvdWxkIG5vdCBpbmplY3QgZGlzdHJpYnV0ZWQgdHJhY2luZyBoZWFkZXIgdG8gdGhlIHJlcXVlc3Qgb3JpZ2luICgnXCIgKyByZXF1ZXN0VXJsLm9yaWdpbiArIFwiJykgZnJvbSB0aGUgY3VycmVudCBvcmlnaW4gKCdcIiArIGN1cnJlbnRVcmwub3JpZ2luICsgXCInKVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuc3luYykge1xuICAgICAgICBzcGFuLnN5bmMgPSBkYXRhLnN5bmM7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuc3BhbiA9IHNwYW47XG4gICAgICB0YXNrLmlkID0gdGFza0lkO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IElOVk9LRSkge1xuICAgICAgaWYgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuc3Bhbikge1xuICAgICAgICB0YXNrLmRhdGEuc3Bhbi5lbmQobnVsbCwgdGFzay5kYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2suaWQpIHtcbiAgICAgICAgdHJhbnNhY3Rpb25TZXJ2aWNlLnJlbW92ZVRhc2sodGFzay5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbmplY3REdEhlYWRlciA9IGZ1bmN0aW9uIGluamVjdER0SGVhZGVyKHNwYW4sIHRhcmdldCkge1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5fY29uZmlnU2VydmljZTtcbiAgICB2YXIgaGVhZGVyTmFtZSA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdkaXN0cmlidXRlZFRyYWNpbmdIZWFkZXJOYW1lJyk7XG4gICAgdmFyIGhlYWRlclZhbHVlID0gZ2V0RHRIZWFkZXJWYWx1ZShzcGFuKTtcbiAgICB2YXIgaXNIZWFkZXJWYWxpZCA9IGlzRHRIZWFkZXJWYWxpZChoZWFkZXJWYWx1ZSk7XG5cbiAgICBpZiAoaGVhZGVyTmFtZSAmJiBoZWFkZXJWYWx1ZSAmJiBpc0hlYWRlclZhbGlkKSB7XG4gICAgICBpZiAodHlwZW9mIHRhcmdldC5zZXRSZXF1ZXN0SGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRhcmdldC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmhlYWRlcnMgJiYgdHlwZW9mIHRhcmdldC5oZWFkZXJzLmFwcGVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0YXJnZXQuaGVhZGVycy5hcHBlbmQoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2hlYWRlck5hbWVdID0gaGVhZGVyVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5leHRyYWN0RHRIZWFkZXIgPSBmdW5jdGlvbiBleHRyYWN0RHRIZWFkZXIodGFyZ2V0KSB7XG4gICAgdmFyIGNvbmZpZ1NlcnZpY2UgPSB0aGlzLl9jb25maWdTZXJ2aWNlO1xuICAgIHZhciBoZWFkZXJOYW1lID0gY29uZmlnU2VydmljZS5nZXQoJ2Rpc3RyaWJ1dGVkVHJhY2luZ0hlYWRlck5hbWUnKTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBwYXJzZUR0SGVhZGVyVmFsdWUodGFyZ2V0W2hlYWRlck5hbWVdKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZpbHRlclRyYW5zYWN0aW9uID0gZnVuY3Rpb24gZmlsdGVyVHJhbnNhY3Rpb24odHIpIHtcbiAgICB2YXIgZHVyYXRpb24gPSB0ci5kdXJhdGlvbigpO1xuXG4gICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpIHdhcyBkaXNjYXJkZWQhIFwiO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gXCJUcmFuc2FjdGlvbiBkdXJhdGlvbiBpcyAwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBcIlRyYW5zYWN0aW9uIHdhc24ndCBlbmRlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0ci5pc01hbmFnZWQoKSkge1xuICAgICAgaWYgKGR1cmF0aW9uID4gVFJBTlNBQ1RJT05fRFVSQVRJT05fVEhSRVNIT0xEKSB7XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpIHdhcyBkaXNjYXJkZWQhIFRyYW5zYWN0aW9uIGR1cmF0aW9uIChcIiArIGR1cmF0aW9uICsgXCIpIGlzIGdyZWF0ZXIgdGhhbiBtYW5hZ2VkIHRyYW5zYWN0aW9uIHRocmVzaG9sZCAoXCIgKyBUUkFOU0FDVElPTl9EVVJBVElPTl9USFJFU0hPTEQgKyBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ci5zYW1wbGVkICYmIHRyLnNwYW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dpblNlcnZpY2UuZGVidWcoXCJ0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiKSB3YXMgZGlzY2FyZGVkISBUcmFuc2FjdGlvbiBkb2VzIG5vdCBoYXZlIGFueSBzcGFuc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyLnR5cGUgIT09IFBBR0VfTE9BRCkge1xuICAgICAgICB2YXIgd2FzQnJvd3NlclJlc3BvbnNpdmUgPSBjaGVja0Jyb3dzZXJSZXNwb25zaXZlbmVzcyh0ciwgQlJPV1NFUl9SRVNQT05TSVZFTkVTU19JTlRFUlZBTCwgQlJPV1NFUl9SRVNQT05TSVZFTkVTU19CVUZGRVIpO1xuXG4gICAgICAgIGlmICghd2FzQnJvd3NlclJlc3BvbnNpdmUpIHtcbiAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpIHdhcyBkaXNjYXJkZWQhIEJyb3dzZXIgd2FzIG5vdCByZXNwb25zaXZlIGVub3VnaCBkdXJpbmcgdGhlIHRyYW5zYWN0aW9uLlwiLCAnIGR1cmF0aW9uOicsIGR1cmF0aW9uLCAnIGJyb3dzZXJSZXNwb25zaXZlbmVzc0NvdW50ZXI6JywgdHIuYnJvd3NlclJlc3BvbnNpdmVuZXNzQ291bnRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVRyYW5zYWN0aW9uRGF0YU1vZGVsID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb25EYXRhTW9kZWwodHJhbnNhY3Rpb24pIHtcbiAgICB2YXIgdHJhbnNhY3Rpb25TdGFydCA9IHRyYW5zYWN0aW9uLl9zdGFydDtcbiAgICB2YXIgc3BhbnMgPSB0cmFuc2FjdGlvbi5zcGFucy5tYXAoZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgIHZhciBzcGFuRGF0YSA9IHtcbiAgICAgICAgaWQ6IHNwYW4uaWQsXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgcGFyZW50X2lkOiBzcGFuLnBhcmVudElkIHx8IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICB0cmFjZV9pZDogdHJhbnNhY3Rpb24udHJhY2VJZCxcbiAgICAgICAgbmFtZTogc3Bhbi5uYW1lLFxuICAgICAgICB0eXBlOiBzcGFuLnR5cGUsXG4gICAgICAgIHN1YlR5cGU6IHNwYW4uc3ViVHlwZSxcbiAgICAgICAgYWN0aW9uOiBzcGFuLmFjdGlvbixcbiAgICAgICAgc3luYzogc3Bhbi5zeW5jLFxuICAgICAgICBzdGFydDogc3Bhbi5fc3RhcnQgLSB0cmFuc2FjdGlvblN0YXJ0LFxuICAgICAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbigpLFxuICAgICAgICBjb250ZXh0OiBzcGFuLmNvbnRleHRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJ1bmNhdGVNb2RlbChTUEFOX01PREVMLCBzcGFuRGF0YSk7XG4gICAgfSk7XG4gICAgdmFyIHRyYW5zYWN0aW9uRGF0YSA9IHtcbiAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgIHRyYWNlX2lkOiB0cmFuc2FjdGlvbi50cmFjZUlkLFxuICAgICAgbmFtZTogdHJhbnNhY3Rpb24ubmFtZSxcbiAgICAgIHR5cGU6IHRyYW5zYWN0aW9uLnR5cGUsXG4gICAgICBkdXJhdGlvbjogdHJhbnNhY3Rpb24uZHVyYXRpb24oKSxcbiAgICAgIHNwYW5zOiBzcGFucyxcbiAgICAgIGNvbnRleHQ6IHRyYW5zYWN0aW9uLmNvbnRleHQsXG4gICAgICBtYXJrczogdHJhbnNhY3Rpb24ubWFya3MsXG4gICAgICBicmVha2Rvd246IHRyYW5zYWN0aW9uLmJyZWFrZG93blRpbWluZ3MsXG4gICAgICBzcGFuX2NvdW50OiB7XG4gICAgICAgIHN0YXJ0ZWQ6IHNwYW5zLmxlbmd0aFxuICAgICAgfSxcbiAgICAgIHNhbXBsZWQ6IHRyYW5zYWN0aW9uLnNhbXBsZWRcbiAgICB9O1xuICAgIHJldHVybiB0cnVuY2F0ZU1vZGVsKFRSQU5TQUNUSU9OX01PREVMLCB0cmFuc2FjdGlvbkRhdGEpO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVUcmFuc2FjdGlvblBheWxvYWQgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvblBheWxvYWQodHJhbnNhY3Rpb24pIHtcbiAgICB2YXIgYWRqdXN0ZWRUcmFuc2FjdGlvbiA9IGFkanVzdFRyYW5zYWN0aW9uU3BhbnModHJhbnNhY3Rpb24pO1xuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyVHJhbnNhY3Rpb24oYWRqdXN0ZWRUcmFuc2FjdGlvbik7XG5cbiAgICBpZiAoZmlsdGVyZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRyYW5zYWN0aW9uRGF0YU1vZGVsKHRyYW5zYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBlcmZvcm1hbmNlTW9uaXRvcmluZztcbn0oKTtcblxuZXhwb3J0IHsgUGVyZm9ybWFuY2VNb25pdG9yaW5nIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkLCBzZXRMYWJlbCwgbWVyZ2UsIGdldER1cmF0aW9uLCBnZXRUaW1lIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IE5BTUVfVU5LTk9XTiwgVFlQRV9DVVNUT00gfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcblxudmFyIFNwYW5CYXNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTcGFuQmFzZShuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghbmFtZSkge1xuICAgICAgbmFtZSA9IE5BTUVfVU5LTk9XTjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHR5cGUgPSBUWVBFX0NVU1RPTTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZCB8fCBnZW5lcmF0ZVJhbmRvbUlkKDE2KTtcbiAgICB0aGlzLnRyYWNlSWQgPSBvcHRpb25zLnRyYWNlSWQ7XG4gICAgdGhpcy5zYW1wbGVkID0gb3B0aW9ucy5zYW1wbGVkO1xuICAgIHRoaXMudGltZXN0YW1wID0gb3B0aW9ucy50aW1lc3RhbXA7XG4gICAgdGhpcy5fc3RhcnQgPSBnZXRUaW1lKG9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICB0aGlzLl9lbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMub25FbmQgPSBvcHRpb25zLm9uRW5kO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNwYW5CYXNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZW5zdXJlQ29udGV4dCA9IGZ1bmN0aW9uIGVuc3VyZUNvbnRleHQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IHt9O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkTGFiZWxzID0gZnVuY3Rpb24gYWRkTGFiZWxzKHRhZ3MpIHtcbiAgICB0aGlzLmVuc3VyZUNvbnRleHQoKTtcbiAgICB2YXIgY3R4ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFjdHgudGFncykge1xuICAgICAgY3R4LnRhZ3MgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRhZ3MpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIHNldExhYmVsKGssIHRhZ3Nba10sIGN0eC50YWdzKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkQ29udGV4dCA9IGZ1bmN0aW9uIGFkZENvbnRleHQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNvbnRleHQgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBjb250ZXh0W19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHRoaXMuZW5zdXJlQ29udGV4dCgpO1xuICAgIG1lcmdlLmFwcGx5KHZvaWQgMCwgW3RoaXMuY29udGV4dF0uY29uY2F0KGNvbnRleHQpKTtcbiAgfTtcblxuICBfcHJvdG8uZW5kID0gZnVuY3Rpb24gZW5kKGVuZFRpbWUpIHtcbiAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgIHRoaXMuX2VuZCA9IGdldFRpbWUoZW5kVGltZSk7XG4gICAgdGhpcy5jYWxsT25FbmQoKTtcbiAgfTtcblxuICBfcHJvdG8uY2FsbE9uRW5kID0gZnVuY3Rpb24gY2FsbE9uRW5kKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vbkVuZCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIGdldER1cmF0aW9uKHRoaXMuX3N0YXJ0LCB0aGlzLl9lbmQpO1xuICB9O1xuXG4gIHJldHVybiBTcGFuQmFzZTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgU3BhbkJhc2U7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBTcGFuQmFzZSBmcm9tICcuL3NwYW4tYmFzZSc7XG5pbXBvcnQgeyBhZGRTcGFuQ29udGV4dCB9IGZyb20gJy4uL2NvbW1vbi9jb250ZXh0JztcblxudmFyIFNwYW4gPSBmdW5jdGlvbiAoX1NwYW5CYXNlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFNwYW4sIF9TcGFuQmFzZSk7XG5cbiAgZnVuY3Rpb24gU3BhbihuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3BhbkJhc2UuY2FsbCh0aGlzLCBuYW1lLCB0eXBlLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnBhcmVudElkID0gX3RoaXMub3B0aW9ucy5wYXJlbnRJZDtcbiAgICBfdGhpcy5zdWJUeXBlID0gdW5kZWZpbmVkO1xuICAgIF90aGlzLmFjdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChfdGhpcy50eXBlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIHZhciBmaWVsZHMgPSBfdGhpcy50eXBlLnNwbGl0KCcuJywgMyk7XG5cbiAgICAgIF90aGlzLnR5cGUgPSBmaWVsZHNbMF07XG4gICAgICBfdGhpcy5zdWJUeXBlID0gZmllbGRzWzFdO1xuICAgICAgX3RoaXMuYWN0aW9uID0gZmllbGRzWzJdO1xuICAgIH1cblxuICAgIF90aGlzLnN5bmMgPSBfdGhpcy5vcHRpb25zLnN5bmM7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNwYW4ucHJvdG90eXBlO1xuXG4gIF9wcm90by5lbmQgPSBmdW5jdGlvbiBlbmQoZW5kVGltZSwgZGF0YSkge1xuICAgIF9TcGFuQmFzZS5wcm90b3R5cGUuZW5kLmNhbGwodGhpcywgZW5kVGltZSk7XG5cbiAgICBhZGRTcGFuQ29udGV4dCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU3Bhbjtcbn0oU3BhbkJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBTcGFuOyIsImltcG9ydCB7IFByb21pc2UgfSBmcm9tICcuLi9jb21tb24vcG9seWZpbGxzJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IFBlcmZFbnRyeVJlY29yZGVyLCBjYXB0dXJlT2JzZXJ2ZXJFbnRyaWVzIH0gZnJvbSAnLi9wZXJmLWVudHJ5LXJlY29yZGVyJztcbmltcG9ydCB7IGV4dGVuZCwgZ2V0RWFybGllc3RTcGFuLCBnZXRMYXRlc3ROb25YSFJTcGFuIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IGNhcHR1cmVOYXZpZ2F0aW9uIH0gZnJvbSAnLi9jYXB0dXJlLW5hdmlnYXRpb24nO1xuaW1wb3J0IHsgUEFHRV9MT0FELCBOQU1FX1VOS05PV04sIFRSQU5TQUNUSU9OX1NUQVJULCBUUkFOU0FDVElPTl9FTkQsIEJST1dTRVJfUkVTUE9OU0lWRU5FU1NfSU5URVJWQUwsIFRFTVBPUkFSWV9UWVBFLCBUUkFOU0FDVElPTl9UWVBFX09SREVSLCBMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQsIExPTkdfVEFTSywgUEFJTlQgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IGFkZFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL2NvbW1vbi9jb250ZXh0JztcbmltcG9ydCB7IF9fREVWX18gfSBmcm9tICcuLi9lbnYnO1xuXG52YXIgVHJhbnNhY3Rpb25TZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFuc2FjdGlvblNlcnZpY2UobG9nZ2VyLCBjb25maWcpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmN1cnJlbnRUcmFuc2FjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlc3BJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVjb3JkZXIgPSBuZXcgUGVyZkVudHJ5UmVjb3JkZXIoZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgIHZhciB0ciA9IF90aGlzLmdldEN1cnJlbnRUcmFuc2FjdGlvbigpO1xuXG4gICAgICBpZiAodHIgJiYgdHIuY2FwdHVyZVRpbWluZ3MpIHtcbiAgICAgICAgdmFyIF90ciRzcGFucztcblxuICAgICAgICB2YXIgY2FwdHVyZVBhaW50ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRyLnR5cGUgPT09IFBBR0VfTE9BRCkge1xuICAgICAgICAgIGNhcHR1cmVQYWludCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2NhcHR1cmVPYnNlcnZlckVudHJpID0gY2FwdHVyZU9ic2VydmVyRW50cmllcyhsaXN0LCB7XG4gICAgICAgICAgY2FwdHVyZVBhaW50OiBjYXB0dXJlUGFpbnRcbiAgICAgICAgfSksXG4gICAgICAgICAgICBzcGFucyA9IF9jYXB0dXJlT2JzZXJ2ZXJFbnRyaS5zcGFucyxcbiAgICAgICAgICAgIG1hcmtzID0gX2NhcHR1cmVPYnNlcnZlckVudHJpLm1hcmtzO1xuXG4gICAgICAgIChfdHIkc3BhbnMgPSB0ci5zcGFucykucHVzaC5hcHBseShfdHIkc3BhbnMsIHNwYW5zKTtcblxuICAgICAgICB0ci5hZGRNYXJrcyh7XG4gICAgICAgICAgYWdlbnQ6IG1hcmtzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zYWN0aW9uU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVuc3VyZUN1cnJlbnRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIGVuc3VyZUN1cnJlbnRUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRyID0gdGhpcy5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcblxuICAgIGlmICh0cikge1xuICAgICAgcmV0dXJuIHRyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ciA9IG5ldyBUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVudFRyYW5zYWN0aW9uKHRyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHI7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUcmFuc2FjdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VHJhbnNhY3Rpb24gJiYgIXRoaXMuY3VycmVudFRyYW5zYWN0aW9uLmVuZGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VHJhbnNhY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRDdXJyZW50VHJhbnNhY3Rpb24gPSBmdW5jdGlvbiBzZXRDdXJyZW50VHJhbnNhY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLmN1cnJlbnRUcmFuc2FjdGlvbiA9IHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5lbnN1cmVSZXNwSW50ZXJ2YWwgPSBmdW5jdGlvbiBlbnN1cmVSZXNwSW50ZXJ2YWwoY2hlY2tCcm93c2VyUmVzcG9uc2l2ZW5lc3MpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjbGVhclJlc3BJbnRlcnZhbCA9IGZ1bmN0aW9uIGNsZWFyUmVzcEludGVydmFsKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChfdGhpczIucmVzcEludGVydmFsSWQpO1xuICAgICAgX3RoaXMyLnJlc3BJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBpZiAoY2hlY2tCcm93c2VyUmVzcG9uc2l2ZW5lc3MpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNwSW50ZXJ2YWxJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5yZXNwSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdHIgPSBfdGhpczIuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCk7XG5cbiAgICAgICAgICBpZiAodHIpIHtcbiAgICAgICAgICAgIHRyLmJyb3dzZXJSZXNwb25zaXZlbmVzc0NvdW50ZXIrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJSZXNwSW50ZXJ2YWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIEJST1dTRVJfUkVTUE9OU0lWRU5FU1NfSU5URVJWQUwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucmVzcEludGVydmFsSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGVhclJlc3BJbnRlcnZhbCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlT3B0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIHZhciBwcmVzZXRPcHRpb25zID0ge1xuICAgICAgdHJhbnNhY3Rpb25TYW1wbGVSYXRlOiBjb25maWcudHJhbnNhY3Rpb25TYW1wbGVSYXRlXG4gICAgfTtcbiAgICB2YXIgcGVyZk9wdGlvbnMgPSBleHRlbmQocHJlc2V0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBpZiAocGVyZk9wdGlvbnMubWFuYWdlZCkge1xuICAgICAgcGVyZk9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICBwYWdlTG9hZFRyYWNlSWQ6IGNvbmZpZy5wYWdlTG9hZFRyYWNlSWQsXG4gICAgICAgIHBhZ2VMb2FkU2FtcGxlZDogY29uZmlnLnBhZ2VMb2FkU2FtcGxlZCxcbiAgICAgICAgcGFnZUxvYWRTcGFuSWQ6IGNvbmZpZy5wYWdlTG9hZFNwYW5JZCxcbiAgICAgICAgcGFnZUxvYWRUcmFuc2FjdGlvbk5hbWU6IGNvbmZpZy5wYWdlTG9hZFRyYW5zYWN0aW9uTmFtZVxuICAgICAgfSwgcGVyZk9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwZXJmT3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRNYW5hZ2VkVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiBzdGFydE1hbmFnZWRUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBwZXJmT3B0aW9ucykge1xuICAgIHZhciB0ciA9IHRoaXMuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCk7XG4gICAgdmFyIGlzUmVkZWZpbmVkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRyKSB7XG4gICAgICB0ciA9IHRoaXMuZW5zdXJlQ3VycmVudFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIHBlcmZPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRyLmNhblJldXNlKCkgJiYgcGVyZk9wdGlvbnMuY2FuUmV1c2UpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcInJlZGVmaW5pbmcgdHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIiwgXCIgKyB0ci50eXBlICsgXCIpXCIsICd0bycsIFwiKFwiICsgbmFtZSArIFwiLCBcIiArIHR5cGUgKyBcIilcIiwgdHIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVkZWZpbmVUeXBlO1xuICAgICAgdmFyIGN1cnJlbnRUeXBlT3JkZXIgPSBUUkFOU0FDVElPTl9UWVBFX09SREVSLmluZGV4T2YodHIudHlwZSk7XG4gICAgICB2YXIgcmVkZWZpbmVUeXBlT3JkZXIgPSBUUkFOU0FDVElPTl9UWVBFX09SREVSLmluZGV4T2YodHlwZSk7XG5cbiAgICAgIGlmIChjdXJyZW50VHlwZU9yZGVyICE9PSAtMSAmJiByZWRlZmluZVR5cGVPcmRlciAhPT0gLTEgJiYgcmVkZWZpbmVUeXBlT3JkZXIgPCBjdXJyZW50VHlwZU9yZGVyKSB7XG4gICAgICAgIHJlZGVmaW5lVHlwZSA9IHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHRyLnJlZGVmaW5lKG5hbWUsIHJlZGVmaW5lVHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgICAgaXNSZWRlZmluZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJlbmRpbmcgcHJldmlvdXMgdHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIilcIiwgdHIpO1xuICAgICAgfVxuXG4gICAgICB0ci5lbmQoKTtcbiAgICAgIHRyID0gdGhpcy5lbnN1cmVDdXJyZW50VHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBjaGVja0Jyb3dzZXJSZXNwb25zaXZlbmVzcyA9IHRydWU7XG5cbiAgICBpZiAodHIudHlwZSA9PT0gUEFHRV9MT0FEKSB7XG4gICAgICBpZiAoIWlzUmVkZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnQoTEFSR0VTVF9DT05URU5URlVMX1BBSU5UKTtcbiAgICAgICAgdGhpcy5yZWNvcmRlci5zdGFydChQQUlOVCk7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrQnJvd3NlclJlc3BvbnNpdmVuZXNzID0gZmFsc2U7XG5cbiAgICAgIGlmIChwZXJmT3B0aW9ucy5wYWdlTG9hZFRyYWNlSWQpIHtcbiAgICAgICAgdHIudHJhY2VJZCA9IHBlcmZPcHRpb25zLnBhZ2VMb2FkVHJhY2VJZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcmZPcHRpb25zLnBhZ2VMb2FkU2FtcGxlZCkge1xuICAgICAgICB0ci5zYW1wbGVkID0gcGVyZk9wdGlvbnMucGFnZUxvYWRTYW1wbGVkO1xuICAgICAgfVxuXG4gICAgICBpZiAodHIubmFtZSA9PT0gTkFNRV9VTktOT1dOICYmIHBlcmZPcHRpb25zLnBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lKSB7XG4gICAgICAgIHRyLm5hbWUgPSBwZXJmT3B0aW9ucy5wYWdlTG9hZFRyYW5zYWN0aW9uTmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzUmVkZWZpbmVkICYmIHRoaXMuX2NvbmZpZy5nZXQoJ21vbml0b3JMb25ndGFza3MnKSkge1xuICAgICAgdGhpcy5yZWNvcmRlci5zdGFydChMT05HX1RBU0spO1xuICAgIH1cblxuICAgIGlmICh0ci5zYW1wbGVkKSB7XG4gICAgICB0ci5jYXB0dXJlVGltaW5ncyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbnN1cmVSZXNwSW50ZXJ2YWwoY2hlY2tCcm93c2VyUmVzcG9uc2l2ZW5lc3MpO1xuICAgIHJldHVybiB0cjtcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIHN0YXJ0VHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHBlcmZPcHRpb25zID0gdGhpcy5jcmVhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciB0cjtcbiAgICB2YXIgZmlyZU9uc3RhcnRIb29rID0gdHJ1ZTtcblxuICAgIGlmIChwZXJmT3B0aW9ucy5tYW5hZ2VkKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFRyYW5zYWN0aW9uO1xuICAgICAgdHIgPSB0aGlzLnN0YXJ0TWFuYWdlZFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIHBlcmZPcHRpb25zKTtcblxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRyKSB7XG4gICAgICAgIGZpcmVPbnN0YXJ0SG9vayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0ciA9IG5ldyBUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBwZXJmT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdHIub25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZVRyYW5zYWN0aW9uRW5kKHRyKTtcbiAgICB9O1xuXG4gICAgaWYgKGZpcmVPbnN0YXJ0SG9vaykge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFwic3RhcnRUcmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiLCBcIiArIHRyLnR5cGUgKyBcIilcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvbmZpZy5ldmVudHMuc2VuZChUUkFOU0FDVElPTl9TVEFSVCwgW3RyXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUcmFuc2FjdGlvbkVuZCA9IGZ1bmN0aW9uIGhhbmRsZVRyYW5zYWN0aW9uRW5kKHRyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLnJlY29yZGVyLnN0b3AoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHRyLm5hbWUsXG4gICAgICAgICAgdHlwZSA9IHRyLnR5cGU7XG5cbiAgICAgIGlmIChfdGhpczQuc2hvdWxkSWdub3JlVHJhbnNhY3Rpb24obmFtZSkgfHwgdHlwZSA9PT0gVEVNUE9SQVJZX1RZUEUpIHtcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICBfdGhpczQuX2xvZ2dlci5kZWJ1ZyhcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyBuYW1lICsgXCIsIFwiICsgdHlwZSArIFwiKSBpcyBpZ25vcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gUEFHRV9MT0FEKSB7XG4gICAgICAgIHZhciBwYWdlTG9hZFRyYW5zYWN0aW9uTmFtZSA9IF90aGlzNC5fY29uZmlnLmdldCgncGFnZUxvYWRUcmFuc2FjdGlvbk5hbWUnKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gTkFNRV9VTktOT1dOICYmIHBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgdHIubmFtZSA9IHBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhcHR1cmVOYXZpZ2F0aW9uKHRyKTtcblxuICAgICAgX3RoaXM0LmFkanVzdFRyYW5zYWN0aW9uVGltZSh0cik7XG5cbiAgICAgIHZhciBicmVha2Rvd25NZXRyaWNzID0gX3RoaXM0Ll9jb25maWcuZ2V0KCdicmVha2Rvd25NZXRyaWNzJyk7XG5cbiAgICAgIGlmIChicmVha2Rvd25NZXRyaWNzKSB7XG4gICAgICAgIHRyLmNhcHR1cmVCcmVha2Rvd24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbmZpZ0NvbnRleHQgPSBfdGhpczQuX2NvbmZpZy5nZXQoJ2NvbnRleHQnKTtcblxuICAgICAgYWRkVHJhbnNhY3Rpb25Db250ZXh0KHRyLCBjb25maWdDb250ZXh0KTtcblxuICAgICAgX3RoaXM0Ll9jb25maWcuZXZlbnRzLnNlbmQoVFJBTlNBQ1RJT05fRU5ELCBbdHJdKTtcblxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgX3RoaXM0Ll9sb2dnZXIuZGVidWcoXCJlbmQgdHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIilcIiwgdHIpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIF90aGlzNC5fbG9nZ2VyLmRlYnVnKFwiZXJyb3IgZW5kaW5nIHRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpXCIsIGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkanVzdFRyYW5zYWN0aW9uVGltZSA9IGZ1bmN0aW9uIGFkanVzdFRyYW5zYWN0aW9uVGltZSh0cmFuc2FjdGlvbikge1xuICAgIHZhciBzcGFucyA9IHRyYW5zYWN0aW9uLnNwYW5zO1xuICAgIHZhciBlYXJsaWVzdFNwYW4gPSBnZXRFYXJsaWVzdFNwYW4oc3BhbnMpO1xuXG4gICAgaWYgKGVhcmxpZXN0U3BhbiAmJiBlYXJsaWVzdFNwYW4uX3N0YXJ0IDwgdHJhbnNhY3Rpb24uX3N0YXJ0KSB7XG4gICAgICB0cmFuc2FjdGlvbi5fc3RhcnQgPSBlYXJsaWVzdFNwYW4uX3N0YXJ0O1xuICAgIH1cblxuICAgIHZhciBsYXRlc3RTcGFuID0gZ2V0TGF0ZXN0Tm9uWEhSU3BhbihzcGFucyk7XG5cbiAgICBpZiAobGF0ZXN0U3BhbiAmJiBsYXRlc3RTcGFuLl9lbmQgPiB0cmFuc2FjdGlvbi5fZW5kKSB7XG4gICAgICB0cmFuc2FjdGlvbi5fZW5kID0gbGF0ZXN0U3Bhbi5fZW5kO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2FjdGlvbkVuZCA9IHRyYW5zYWN0aW9uLl9lbmQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3BhbiA9IHNwYW5zW2ldO1xuXG4gICAgICBpZiAoc3Bhbi5fZW5kID4gdHJhbnNhY3Rpb25FbmQpIHtcbiAgICAgICAgc3Bhbi5fZW5kID0gdHJhbnNhY3Rpb25FbmQ7XG4gICAgICAgIHNwYW4udHlwZSArPSAnLnRydW5jYXRlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGFuLl9zdGFydCA+IHRyYW5zYWN0aW9uRW5kKSB7XG4gICAgICAgIHNwYW4uX3N0YXJ0ID0gdHJhbnNhY3Rpb25FbmQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zaG91bGRJZ25vcmVUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIHNob3VsZElnbm9yZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uTmFtZSkge1xuICAgIHZhciBpZ25vcmVMaXN0ID0gdGhpcy5fY29uZmlnLmdldCgnaWdub3JlVHJhbnNhY3Rpb25zJyk7XG5cbiAgICBpZiAoaWdub3JlTGlzdCAmJiBpZ25vcmVMaXN0Lmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZ25vcmVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gaWdub3JlTGlzdFtpXTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQudGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChlbGVtZW50LnRlc3QodHJhbnNhY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IHRyYW5zYWN0aW9uTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5zdGFydFNwYW4gPSBmdW5jdGlvbiBzdGFydFNwYW4obmFtZSwgdHlwZSwgb3B0aW9ucykge1xuICAgIHZhciB0ciA9IHRoaXMuZW5zdXJlQ3VycmVudFRyYW5zYWN0aW9uKHVuZGVmaW5lZCwgVEVNUE9SQVJZX1RZUEUsIHRoaXMuY3JlYXRlT3B0aW9ucyh7XG4gICAgICBjYW5SZXVzZTogdHJ1ZSxcbiAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICB9KSk7XG5cbiAgICBpZiAodHIpIHtcbiAgICAgIHZhciBzcGFuID0gdHIuc3RhcnRTcGFuKG5hbWUsIHR5cGUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJzdGFydFNwYW4oXCIgKyBuYW1lICsgXCIsIFwiICsgdHlwZSArIFwiKVwiLCBcIm9uIHRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhbjtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhc2sgPSBmdW5jdGlvbiBhZGRUYXNrKHRhc2tJZCkge1xuICAgIHZhciB0ciA9IHRoaXMuZW5zdXJlQ3VycmVudFRyYW5zYWN0aW9uKHVuZGVmaW5lZCwgVEVNUE9SQVJZX1RZUEUsIHRoaXMuY3JlYXRlT3B0aW9ucyh7XG4gICAgICBjYW5SZXVzZTogdHJ1ZSxcbiAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICB9KSk7XG5cbiAgICBpZiAodHIpIHtcbiAgICAgIHZhciB0YXNrSWQgPSB0ci5hZGRUYXNrKHRhc2tJZCk7XG5cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcImFkZFRhc2soXCIgKyB0YXNrSWQgKyBcIilcIiwgXCJvbiB0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiKVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0lkO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVUYXNrID0gZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSWQpIHtcbiAgICB2YXIgdHIgPSB0aGlzLmdldEN1cnJlbnRUcmFuc2FjdGlvbigpO1xuXG4gICAgaWYgKHRyKSB7XG4gICAgICB0ci5yZW1vdmVUYXNrKHRhc2tJZCk7XG5cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcInJlbW92ZVRhc2soXCIgKyB0YXNrSWQgKyBcIilcIiwgXCJvbiB0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiKVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zYWN0aW9uU2VydmljZTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25TZXJ2aWNlOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgU3BhbiBmcm9tICcuL3NwYW4nO1xuaW1wb3J0IFNwYW5CYXNlIGZyb20gJy4vc3Bhbi1iYXNlJztcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tSWQsIG1lcmdlLCBub3csIGdldFRpbWUsIGV4dGVuZCwgcmVtb3ZlSW52YWxpZENoYXJzIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IFJFVVNBQklMSVRZX1RIUkVTSE9MRCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2FwdHVyZUJyZWFrZG93biBhcyBfY2FwdHVyZUJyZWFrZG93biB9IGZyb20gJy4vYnJlYWtkb3duJztcblxudmFyIFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKF9TcGFuQmFzZSkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2FjdGlvbiwgX1NwYW5CYXNlKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3BhbkJhc2UuY2FsbCh0aGlzLCBuYW1lLCB0eXBlLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnRyYWNlSWQgPSBnZW5lcmF0ZVJhbmRvbUlkKCk7XG4gICAgX3RoaXMubWFya3MgPSB1bmRlZmluZWQ7XG4gICAgX3RoaXMuc3BhbnMgPSBbXTtcbiAgICBfdGhpcy5fYWN0aXZlU3BhbnMgPSB7fTtcbiAgICBfdGhpcy5uZXh0QXV0b1Rhc2tJZCA9IDE7XG4gICAgX3RoaXMuX3NjaGVkdWxlZFRhc2tzID0gW107XG4gICAgX3RoaXMuY2FwdHVyZVRpbWluZ3MgPSBmYWxzZTtcbiAgICBfdGhpcy5icmVha2Rvd25UaW1pbmdzID0gW107XG4gICAgX3RoaXMuc2FtcGxlZCA9IE1hdGgucmFuZG9tKCkgPD0gX3RoaXMub3B0aW9ucy50cmFuc2FjdGlvblNhbXBsZVJhdGU7XG4gICAgX3RoaXMuYnJvd3NlclJlc3BvbnNpdmVuZXNzQ291bnRlciA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zYWN0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkTWFya3MgPSBmdW5jdGlvbiBhZGRNYXJrcyhvYmopIHtcbiAgICB0aGlzLm1hcmtzID0gbWVyZ2UodGhpcy5tYXJrcyB8fCB7fSwgb2JqKTtcbiAgfTtcblxuICBfcHJvdG8ubWFyayA9IGZ1bmN0aW9uIG1hcmsoa2V5KSB7XG4gICAgdmFyIHNrZXkgPSByZW1vdmVJbnZhbGlkQ2hhcnMoa2V5KTtcblxuICAgIHZhciBtYXJrVGltZSA9IG5vdygpIC0gdGhpcy5fc3RhcnQ7XG5cbiAgICB2YXIgY3VzdG9tID0ge307XG4gICAgY3VzdG9tW3NrZXldID0gbWFya1RpbWU7XG4gICAgdGhpcy5hZGRNYXJrcyh7XG4gICAgICBjdXN0b206IGN1c3RvbVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5SZXVzZSA9IGZ1bmN0aW9uIGNhblJldXNlKCkge1xuICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMucmV1c2VUaHJlc2hvbGQgfHwgUkVVU0FCSUxJVFlfVEhSRVNIT0xEO1xuICAgIHJldHVybiAhIXRoaXMub3B0aW9ucy5jYW5SZXVzZSAmJiAhdGhpcy5lbmRlZCAmJiBub3coKSAtIHRoaXMuX3N0YXJ0IDwgdGhyZXNob2xkO1xuICB9O1xuXG4gIF9wcm90by5yZWRlZmluZSA9IGZ1bmN0aW9uIHJlZGVmaW5lKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zdGFydFNwYW4gPSBmdW5jdGlvbiBzdGFydFNwYW4obmFtZSwgdHlwZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cbiAgICBvcHRzLm9uRW5kID0gZnVuY3Rpb24gKHRyYykge1xuICAgICAgX3RoaXMyLl9vblNwYW5FbmQodHJjKTtcbiAgICB9O1xuXG4gICAgb3B0cy50cmFjZUlkID0gdGhpcy50cmFjZUlkO1xuICAgIG9wdHMuc2FtcGxlZCA9IHRoaXMuc2FtcGxlZDtcblxuICAgIGlmICghb3B0cy5wYXJlbnRJZCkge1xuICAgICAgb3B0cy5wYXJlbnRJZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgdmFyIHNwYW4gPSBuZXcgU3BhbihuYW1lLCB0eXBlLCBvcHRzKTtcbiAgICB0aGlzLl9hY3RpdmVTcGFuc1tzcGFuLmlkXSA9IHNwYW47XG4gICAgcmV0dXJuIHNwYW47XG4gIH07XG5cbiAgX3Byb3RvLmlzRmluaXNoZWQgPSBmdW5jdGlvbiBpc0ZpbmlzaGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZWRUYXNrcy5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgX3Byb3RvLmRldGVjdEZpbmlzaCA9IGZ1bmN0aW9uIGRldGVjdEZpbmlzaCgpIHtcbiAgICBpZiAodGhpcy5pc0ZpbmlzaGVkKCkpIHRoaXMuZW5kKCk7XG4gIH07XG5cbiAgX3Byb3RvLmVuZCA9IGZ1bmN0aW9uIGVuZChlbmRUaW1lKSB7XG4gICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9lbmQgPSBnZXRUaW1lKGVuZFRpbWUpO1xuXG4gICAgZm9yICh2YXIgc2lkIGluIHRoaXMuX2FjdGl2ZVNwYW5zKSB7XG4gICAgICB2YXIgc3BhbiA9IHRoaXMuX2FjdGl2ZVNwYW5zW3NpZF07XG4gICAgICBzcGFuLnR5cGUgPSBzcGFuLnR5cGUgKyAnLnRydW5jYXRlZCc7XG4gICAgICBzcGFuLmVuZChlbmRUaW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGxPbkVuZCgpO1xuICB9O1xuXG4gIF9wcm90by5jYXB0dXJlQnJlYWtkb3duID0gZnVuY3Rpb24gY2FwdHVyZUJyZWFrZG93bigpIHtcbiAgICB0aGlzLmJyZWFrZG93blRpbWluZ3MgPSBfY2FwdHVyZUJyZWFrZG93bih0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2sodGFza0lkKSB7XG4gICAgaWYgKHR5cGVvZiB0YXNrSWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YXNrSWQgPSAndGFzaycgKyB0aGlzLm5leHRBdXRvVGFza0lkKys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NjaGVkdWxlZFRhc2tzLmluZGV4T2YodGFza0lkKSA9PSAtMSkge1xuICAgICAgdGhpcy5fc2NoZWR1bGVkVGFza3MucHVzaCh0YXNrSWQpO1xuXG4gICAgICByZXR1cm4gdGFza0lkO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlVGFzayA9IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0lkKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fc2NoZWR1bGVkVGFza3MuaW5kZXhPZih0YXNrSWQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3NjaGVkdWxlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlY3RGaW5pc2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXRTcGFucyA9IGZ1bmN0aW9uIHJlc2V0U3BhbnMoKSB7XG4gICAgdGhpcy5zcGFucyA9IFtdO1xuICB9O1xuXG4gIF9wcm90by5fb25TcGFuRW5kID0gZnVuY3Rpb24gX29uU3BhbkVuZChzcGFuKSB7XG4gICAgdGhpcy5zcGFucy5wdXNoKHNwYW4pO1xuICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVTcGFuc1tzcGFuLmlkXTtcbiAgfTtcblxuICBfcHJvdG8uaXNNYW5hZ2VkID0gZnVuY3Rpb24gaXNNYW5hZ2VkKCkge1xuICAgIHJldHVybiAhIXRoaXMub3B0aW9ucy5tYW5hZ2VkO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2FjdGlvbjtcbn0oU3BhbkJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbjsiLCIvKipcbiAqIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEVsYXN0aWNzZWFyY2ggQlZcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5pbXBvcnQge1xuICBnZXRJbnN0cnVtZW50YXRpb25GbGFncyxcbiAgUEFHRV9MT0FELFxuICBFUlJPUlxufSBmcm9tICdAZWxhc3RpYy9hcG0tcnVtLWNvcmUnXG5cbmNsYXNzIEFwbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihzZXJ2aWNlRmFjdG9yeSwgZGlzYWJsZSkge1xuICAgIHRoaXMuX2Rpc2FibGUgPSBkaXNhYmxlXG4gICAgdGhpcy5zZXJ2aWNlRmFjdG9yeSA9IHNlcnZpY2VGYWN0b3J5XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZVxuICB9XG5cbiAgaW5pdChjb25maWcpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZVxuICAgICAgY29uc3QgY29uZmlnU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnQ29uZmlnU2VydmljZScpXG4gICAgICAvKipcbiAgICAgICAqIFNldCBBZ2VudCB2ZXJzaW9uIHRvIGJlIHNlbnQgYXMgcGFydCBvZiBtZXRhZGF0YSB0byB0aGUgQVBNIFNlcnZlclxuICAgICAgICovXG4gICAgICBjb25maWdTZXJ2aWNlLnNldFZlcnNpb24oJzUuMS4xJylcbiAgICAgIHRoaXMuY29uZmlnKGNvbmZpZylcbiAgICAgIGNvbnN0IGxvZ2dpbmdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdMb2dnaW5nU2VydmljZScpXG4gICAgICAvKipcbiAgICAgICAqIERlYWN0aXZlIGFnZW50IHdoZW4gdGhlIGFjdGl2ZSBjb25maWcgZmxhZyBpcyBzZXQgdG8gZmFsc2VcbiAgICAgICAqL1xuICAgICAgaWYgKGNvbmZpZ1NlcnZpY2UuaXNBY3RpdmUoKSkge1xuICAgICAgICB0aGlzLnNlcnZpY2VGYWN0b3J5LmluaXQoKVxuXG4gICAgICAgIGNvbnN0IGZsYWdzID0gZ2V0SW5zdHJ1bWVudGF0aW9uRmxhZ3MoXG4gICAgICAgICAgY29uZmlnU2VydmljZS5nZXQoJ2luc3RydW1lbnQnKSxcbiAgICAgICAgICBjb25maWdTZXJ2aWNlLmdldCgnZGlzYWJsZUluc3RydW1lbnRhdGlvbnMnKVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgcGVyZm9ybWFuY2VNb25pdG9yaW5nID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFxuICAgICAgICAgICdQZXJmb3JtYW5jZU1vbml0b3JpbmcnXG4gICAgICAgIClcbiAgICAgICAgcGVyZm9ybWFuY2VNb25pdG9yaW5nLmluaXQoZmxhZ3MpXG5cbiAgICAgICAgaWYgKGZsYWdzW0VSUk9SXSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yTG9nZ2luZyA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnRXJyb3JMb2dnaW5nJylcbiAgICAgICAgICBlcnJvckxvZ2dpbmcucmVnaXN0ZXJMaXN0ZW5lcnMoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VuZFBhZ2VMb2FkID0gKCkgPT5cbiAgICAgICAgICBmbGFnc1tQQUdFX0xPQURdICYmIHRoaXMuX3NlbmRQYWdlTG9hZE1ldHJpY3MoKVxuXG4gICAgICAgIGlmIChjb25maWdTZXJ2aWNlLmdldCgnY2VudHJhbENvbmZpZycpKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV2FpdGluZyBmb3IgdGhlIHJlbW90ZSBjb25maWcgYmVmb3JlIHNlbmRpbmcgdGhlIHBhZ2UgbG9hZCB0cmFuc2FjdGlvblxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZmV0Y2hDZW50cmFsQ29uZmlnKCkudGhlbihzZW5kUGFnZUxvYWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFBhZ2VMb2FkKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZSA9IHRydWVcbiAgICAgICAgbG9nZ2luZ1NlcnZpY2UuaW5mbygnUlVNIGFnZW50IGlzIGluYWN0aXZlJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBgZmV0Y2hDZW50cmFsQ29uZmlnYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYWx3YXlzIHJlc29sdmVcbiAgICogaWYgdGhlIGludGVybmFsIGNvbmZpZyBmZXRjaCBmYWlscyB0aGUgdGhlIHByb21pc2UgcmVzb2x2ZXMgdG8gYHVuZGVmaW5lZGAgb3RoZXJ3aXNlXG4gICAqIGl0IHJlc29sdmVzIHRvIHRoZSBmZXRjaGVkIGNvbmZpZy5cbiAgICovXG4gIGZldGNoQ2VudHJhbENvbmZpZygpIHtcbiAgICBjb25zdCBhcG1TZXJ2ZXIgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0FwbVNlcnZlcicpXG4gICAgY29uc3QgbG9nZ2luZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0xvZ2dpbmdTZXJ2aWNlJylcbiAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJylcblxuICAgIHJldHVybiBhcG1TZXJ2ZXJcbiAgICAgIC5mZXRjaENvbmZpZyhcbiAgICAgICAgY29uZmlnU2VydmljZS5nZXQoJ3NlcnZpY2VOYW1lJyksXG4gICAgICAgIGNvbmZpZ1NlcnZpY2UuZ2V0KCdlbnZpcm9ubWVudCcpXG4gICAgICApXG4gICAgICAudGhlbihjb25maWcgPT4ge1xuICAgICAgICB2YXIgdHJhbnNhY3Rpb25TYW1wbGVSYXRlID0gY29uZmlnWyd0cmFuc2FjdGlvbl9zYW1wbGVfcmF0ZSddXG4gICAgICAgIGlmICh0cmFuc2FjdGlvblNhbXBsZVJhdGUpIHtcbiAgICAgICAgICB0cmFuc2FjdGlvblNhbXBsZVJhdGUgPSBOdW1iZXIodHJhbnNhY3Rpb25TYW1wbGVSYXRlKVxuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgdHJhbnNhY3Rpb25TYW1wbGVSYXRlIH1cbiAgICAgICAgICBjb25zdCB7IGludmFsaWQgfSA9IGNvbmZpZ1NlcnZpY2UudmFsaWRhdGUoY29uZmlnKVxuICAgICAgICAgIGlmIChpbnZhbGlkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uZmlnU2VydmljZS5zZXRDb25maWcoY29uZmlnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUsIGFsbG93ZWQgfSA9IGludmFsaWRbMF1cbiAgICAgICAgICAgIGxvZ2dpbmdTZXJ2aWNlLndhcm4oXG4gICAgICAgICAgICAgIGBpbnZhbGlkIHZhbHVlIFwiJHt2YWx1ZX1cIiBmb3IgJHtrZXl9LiBBbGxvd2VkOiAke2FsbG93ZWR9LmBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGxvZ2dpbmdTZXJ2aWNlLndhcm4oJ2ZhaWxlZCBmZXRjaGluZyBjb25maWc6JywgZXJyb3IpXG4gICAgICB9KVxuICB9XG5cbiAgX3NlbmRQYWdlTG9hZE1ldHJpY3MoKSB7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgdHJhbnNhY3Rpb24gaXMgc2V0IGluIHRyYW5zYWN0aW9uIHNlcnZpY2UgdG9cbiAgICAgKiBhdm9pZCBkdXBsaWNhdGluZyB0aGUgbG9naWMgYXQgbXVsdGlwbGUgcGxhY2VzXG4gICAgICovXG4gICAgY29uc3QgdHIgPSB0aGlzLnN0YXJ0VHJhbnNhY3Rpb24odW5kZWZpbmVkLCBQQUdFX0xPQUQsIHtcbiAgICAgIG1hbmFnZWQ6IHRydWUsXG4gICAgICBjYW5SZXVzZTogdHJ1ZVxuICAgIH0pXG5cbiAgICBpZiAodHIpIHtcbiAgICAgIHRyLmFkZFRhc2soUEFHRV9MT0FEKVxuICAgIH1cbiAgICBjb25zdCBzZW5kUGFnZUxvYWRNZXRyaWNzID0gZnVuY3Rpb24gc2VuZFBhZ2VMb2FkTWV0cmljcygpIHtcbiAgICAgIC8vIHRvIG1ha2Ugc3VyZSBQZXJmb3JtYW5jZVRpbWluZy5sb2FkRXZlbnRFbmQgaGFzIGEgdmFsdWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0cikge1xuICAgICAgICAgIHRyLnJlbW92ZVRhc2soUEFHRV9MT0FEKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICBzZW5kUGFnZUxvYWRNZXRyaWNzKClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzZW5kUGFnZUxvYWRNZXRyaWNzKVxuICAgIH1cbiAgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2Rpc2FibGVcbiAgfVxuXG4gIG9ic2VydmUobmFtZSwgZm4pIHtcbiAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJylcbiAgICBjb25maWdTZXJ2aWNlLmV2ZW50cy5vYnNlcnZlKG5hbWUsIGZuKVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHJlcXVpcmVkIGNvbmZpZyBrZXlzIGFyZSBpbnZhbGlkLCB0aGUgYWdlbnQgaXMgZGVhY3RpdmF0ZWQgd2l0aFxuICAgKiBsb2dnaW5nIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gICAqXG4gICAqIHZhbGlkYXRpb24gZXJyb3IgZm9ybWF0XG4gICAqIHtcbiAgICogIG1pc3Npbmc6IFsgJ2tleTEnLCAna2V5MiddXG4gICAqICBpbnZhbGlkOiBbe1xuICAgKiAgICBrZXk6ICdhJyxcbiAgICogICAgdmFsdWU6ICdhYmNkJyxcbiAgICogICAgYWxsb3dlZDogJ3N0cmluZydcbiAgICogIH1dXG4gICAqIH1cbiAgICovXG4gIGNvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJylcbiAgICBjb25zdCB7IG1pc3NpbmcsIGludmFsaWQgfSA9IGNvbmZpZ1NlcnZpY2UudmFsaWRhdGUoY29uZmlnKVxuICAgIGlmIChtaXNzaW5nLmxlbmd0aCA9PT0gMCAmJiBpbnZhbGlkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uZmlnU2VydmljZS5zZXRDb25maWcoY29uZmlnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2dnaW5nU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnTG9nZ2luZ1NlcnZpY2UnKVxuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gJywgJ1xuICAgICAgbGV0IG1lc3NhZ2UgPSBcIlJVTSBhZ2VudCBpc24ndCBjb3JyZWN0bHkgY29uZmlndXJlZC4gXCJcblxuICAgICAgaWYgKG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBtZXNzYWdlICs9IG1pc3Npbmcuam9pbihzZXBhcmF0b3IpICsgJyBpcyBtaXNzaW5nJ1xuICAgICAgICBpZiAoaW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBzZXBhcmF0b3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnZhbGlkLmZvckVhY2goKHsga2V5LCB2YWx1ZSwgYWxsb3dlZCB9LCBpbmRleCkgPT4ge1xuICAgICAgICBtZXNzYWdlICs9XG4gICAgICAgICAgYCR7a2V5fSBcIiR7dmFsdWV9XCIgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzISAoYWxsb3dlZDogJHthbGxvd2VkfSlgICtcbiAgICAgICAgICAoaW5kZXggIT09IGludmFsaWQubGVuZ3RoIC0gMSA/IHNlcGFyYXRvciA6ICcnKVxuICAgICAgfSlcbiAgICAgIGxvZ2dpbmdTZXJ2aWNlLmVycm9yKG1lc3NhZ2UpXG4gICAgICBjb25maWdTZXJ2aWNlLnNldENvbmZpZyh7IGFjdGl2ZTogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBzZXRVc2VyQ29udGV4dCh1c2VyQ29udGV4dCkge1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJylcbiAgICBjb25maWdTZXJ2aWNlLnNldFVzZXJDb250ZXh0KHVzZXJDb250ZXh0KVxuICB9XG5cbiAgc2V0Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KSB7XG4gICAgdmFyIGNvbmZpZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0NvbmZpZ1NlcnZpY2UnKVxuICAgIGNvbmZpZ1NlcnZpY2Uuc2V0Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KVxuICB9XG5cbiAgYWRkTGFiZWxzKGxhYmVscykge1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdDb25maWdTZXJ2aWNlJylcbiAgICBjb25maWdTZXJ2aWNlLmFkZExhYmVscyhsYWJlbHMpXG4gIH1cblxuICAvLyBTaG91bGQgY2FsbCB0aGlzIG1ldGhvZCBiZWZvcmUgJ2xvYWQnIGV2ZW50IG9uIHdpbmRvdyBpcyBmaXJlZFxuICBzZXRJbml0aWFsUGFnZUxvYWROYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdmFyIGNvbmZpZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0NvbmZpZ1NlcnZpY2UnKVxuICAgICAgY29uZmlnU2VydmljZS5zZXRDb25maWcoe1xuICAgICAgICBwYWdlTG9hZFRyYW5zYWN0aW9uTmFtZTogbmFtZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShcbiAgICAgICAgJ1RyYW5zYWN0aW9uU2VydmljZSdcbiAgICAgIClcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvblNlcnZpY2Uuc3RhcnRUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U3BhbihuYW1lLCB0eXBlKSB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHZhciB0cmFuc2FjdGlvblNlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoXG4gICAgICAgICdUcmFuc2FjdGlvblNlcnZpY2UnXG4gICAgICApXG4gICAgICByZXR1cm4gdHJhbnNhY3Rpb25TZXJ2aWNlLnN0YXJ0U3BhbihuYW1lLCB0eXBlKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRUcmFuc2FjdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShcbiAgICAgICAgJ1RyYW5zYWN0aW9uU2VydmljZSdcbiAgICAgIClcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvblNlcnZpY2UuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKClcbiAgICB9XG4gIH1cblxuICBjYXB0dXJlRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdmFyIGVycm9yTG9nZ2luZyA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnRXJyb3JMb2dnaW5nJylcbiAgICAgIHJldHVybiBlcnJvckxvZ2dpbmcubG9nRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgYWRkRmlsdGVyKGZuKSB7XG4gICAgdmFyIGNvbmZpZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0NvbmZpZ1NlcnZpY2UnKVxuICAgIGNvbmZpZ1NlcnZpY2UuYWRkRmlsdGVyKGZuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwbUJhc2VcbiIsIi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRWxhc3RpY3NlYXJjaCBCVlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKlxuICovXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1TdXBwb3J0ZWQsIHBhdGNoQWxsIH0gZnJvbSAnQGVsYXN0aWMvYXBtLXJ1bS1jb3JlJ1xuXG52YXIgYWxyZWFkeUJvb3RzdHJhcCA9IGZhbHNlXG52YXIgZW5hYmxlZCA9IGZhbHNlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgaWYgKGFscmVhZHlCb290c3RyYXApIHtcbiAgICByZXR1cm4gZW5hYmxlZFxuICB9XG4gIGFscmVhZHlCb290c3RyYXAgPSB0cnVlXG5cbiAgaWYgKGlzUGxhdGZvcm1TdXBwb3J0ZWQoKSkge1xuICAgIHBhdGNoQWxsKClcbiAgICBlbmFibGVkID0gdHJ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLyoqXG4gICAgICogUHJpbnQgdGhpcyBlcnJvciBtZXNzYWdlIG9ubHkgb24gdGhlIGJyb3dzZXIgY29uc29sZVxuICAgICAqIG9uIHVuc3VwcG9ydGVkIGJyb3dzZXIgdmVyc2lvbnNcbiAgICAgKi9cbiAgICBjb25zb2xlLmxvZygnW0VsYXN0aWMgQVBNXSBwbGF0Zm9ybSBpcyBub3Qgc3VwcG9ydGVkIScpXG4gIH1cblxuICByZXR1cm4gZW5hYmxlZFxufVxuIiwiLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFbGFzdGljc2VhcmNoIEJWXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuaW1wb3J0IGJvb3RzdHJhcCBmcm9tICcuL2Jvb3RzdHJhcCdcbmltcG9ydCB7IGNyZWF0ZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnQGVsYXN0aWMvYXBtLXJ1bS1jb3JlJ1xuaW1wb3J0IEFwbUJhc2UgZnJvbSAnLi9hcG0tYmFzZSdcblxuY29uc3QgZW5hYmxlZCA9IGJvb3RzdHJhcCgpXG5jb25zdCBzZXJ2aWNlRmFjdG9yeSA9IGNyZWF0ZVNlcnZpY2VGYWN0b3J5KClcbmNvbnN0IGFwbUJhc2UgPSBuZXcgQXBtQmFzZShzZXJ2aWNlRmFjdG9yeSwgIWVuYWJsZWQpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuZWxhc3RpY0FwbSA9IGFwbUJhc2Vcbn1cblxuY29uc3QgaW5pdCA9IGFwbUJhc2UuaW5pdC5iaW5kKGFwbUJhc2UpXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRcbmV4cG9ydCB7IGluaXQsIGFwbUJhc2UsIEFwbUJhc2UsIGFwbUJhc2UgYXMgYXBtIH1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLGFBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLGFBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVZBO0FBWUE7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6VkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9OQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5SUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4SkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNySUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcFRBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4S0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4TkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeFdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcElBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUNwUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
