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

/***/ "../rum-core/dist/es/bootstrap.js":
/*!***********************************!*\
  !*** .-core/dist/es/bootstrap.js ***!
  \***********************************/
/*! exports provided: bootstrap, bootstrapPerf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapPerf", function() { return bootstrapPerf; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/patching */ "../rum-core/dist/es/common/patching/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "../rum-core/dist/es/state.js");



var enabled = false;
function bootstrap() {
  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["isPlatformSupported"])()) {
    Object(_common_patching__WEBPACK_IMPORTED_MODULE_1__["patchAll"])();
    bootstrapPerf();
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].bootstrapTime = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
    enabled = true;
  } else if (_common_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    console.log('[Elastic APM] platform is not supported!');
  }

  return enabled;
}
function bootstrapPerf() {
  if (document.visibilityState === 'hidden') {
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].lastHiddenStart = 0;
  }

  window.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      _state__WEBPACK_IMPORTED_MODULE_2__["state"].lastHiddenStart = performance.now();
    }
  }, {
    capture: true
  });
}

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
/* harmony import */ var _compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compress */ "../rum-core/dist/es/common/compress.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");










var THROTTLE_INTERVAL = 60000;

var ApmServer = function () {
  function ApmServer(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
    this.queue = undefined;
    this.throttleEvents = _utils__WEBPACK_IMPORTED_MODULE_6__["noop"];
  }

  var _proto = ApmServer.prototype;

  _proto.init = function init() {
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
    var _this2 = this;

    var headers = {
      'Content-Type': 'application/x-ndjson'
    };
    return Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressPayload"])(payload, headers).catch(function (error) {
      if (_state__WEBPACK_IMPORTED_MODULE_9__["__DEV__"]) {
        _this2._loggingService.debug('Compressing the payload using CompressionStream API failed', error.message);
      }

      return {
        payload: payload,
        headers: headers
      };
    }).then(function (result) {
      return _this2._makeHttpRequest('POST', endPoint, result);
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

    if (_state__WEBPACK_IMPORTED_MODULE_9__["__DEV__"] && responseText) {
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
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$timeout = _ref2.timeout,
        timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout,
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
    var _this3 = this;

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

          _this3._configService.setLocalConfig(remoteConfig);
        }

        return remoteConfig;
      }
    }).catch(function (reason) {
      var error = _this3._constructError(reason);

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

  _proto.ndjsonErrors = function ndjsonErrors(errors, compress) {
    var key = compress ? 'e' : 'error';
    return errors.map(function (error) {
      var _NDJSON$stringify;

      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify = {}, _NDJSON$stringify[key] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressError"])(error) : error, _NDJSON$stringify));
    });
  };

  _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
    return metricsets.map(function (metricset) {
      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
        metricset: metricset
      });
    }).join('');
  };

  _proto.ndjsonTransactions = function ndjsonTransactions(transactions, compress) {
    var _this4 = this;

    var key = compress ? 'x' : 'transaction';
    return transactions.map(function (tr) {
      var _NDJSON$stringify2;

      var spans = '',
          breakdowns = '';

      if (!compress) {
        if (tr.spans) {
          spans = tr.spans.map(function (span) {
            return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
              span: span
            });
          }).join('');
          delete tr.spans;
        }

        if (tr.breakdown) {
          breakdowns = _this4.ndjsonMetricsets(tr.breakdown);
          delete tr.breakdown;
        }
      }

      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify2 = {}, _NDJSON$stringify2[key] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressTransaction"])(tr) : tr, _NDJSON$stringify2)) + spans + breakdowns;
    });
  };

  _proto.sendEvents = function sendEvents(events) {
    var _payload, _NDJSON$stringify3;

    if (events.length === 0) {
      return;
    }

    var transactions = [];
    var errors = [];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];

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

    var cfg = this._configService;
    var payload = (_payload = {}, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]] = transactions, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]] = errors, _payload);
    var filteredPayload = cfg.applyFilters(payload);

    if (!filteredPayload) {
      this._loggingService.warn('Dropped payload due to filtering!');

      return;
    }

    var apiVersion = cfg.get('apiVersion');
    var compress = apiVersion > 2;
    var ndjson = [];
    var metadata = this.createMetaData();
    var metadataKey = compress ? 'm' : 'metadata';
    ndjson.push(_ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify3 = {}, _NDJSON$stringify3[metadataKey] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressMetadata"])(metadata) : metadata, _NDJSON$stringify3)));
    ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]], compress), this.ndjsonTransactions(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]], compress));
    var ndjsonPayload = ndjson.join('');
    var endPoint = cfg.get('serverUrl') + ("/intake/v" + apiVersion + "/rum/events");
    return this._postJson(endPoint, ndjsonPayload);
  };

  return ApmServer;
}();

/* harmony default export */ __webpack_exports__["default"] = (ApmServer);

/***/ }),

/***/ "../rum-core/dist/es/common/compress.js":
/*!*****************************************!*\
  !*** .-core/dist/es/common/compress.js ***!
  \*****************************************/
/*! exports provided: compressMetadata, compressTransaction, compressError, compressMetricsets, compressPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressMetadata", function() { return compressMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressTransaction", function() { return compressTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressError", function() { return compressError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressMetricsets", function() { return compressMetricsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressPayload", function() { return compressPayload; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "../rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../performance-monitoring/capture-navigation */ "../rum-core/dist/es/performance-monitoring/capture-navigation.js");



function compressStackFrames(frames) {
  return frames.map(function (frame) {
    return {
      ap: frame.abs_path,
      f: frame.filename,
      fn: frame.function,
      li: frame.lineno,
      co: frame.colno
    };
  });
}

function compressResponse(response) {
  return {
    ts: response.transfer_size,
    ebs: response.encoded_body_size,
    dbs: response.decoded_body_size
  };
}

function compressHTTP(http) {
  var compressed = {};
  var method = http.method,
      status_code = http.status_code,
      url = http.url,
      response = http.response;
  compressed.url = url;

  if (method) {
    compressed.mt = method;
  }

  if (status_code) {
    compressed.sc = status_code;
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  return compressed;
}

function compressContext(context) {
  if (!context) {
    return null;
  }

  var compressed = {};
  var page = context.page,
      http = context.http,
      response = context.response,
      destination = context.destination,
      user = context.user,
      custom = context.custom;

  if (page) {
    compressed.p = {
      rf: page.referer,
      url: page.url
    };
  }

  if (http) {
    compressed.h = compressHTTP(http);
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  if (destination) {
    var service = destination.service;
    compressed.dt = {
      se: {
        n: service.name,
        t: service.type,
        rc: service.resource
      },
      ad: destination.address,
      po: destination.port
    };
  }

  if (user) {
    compressed.u = {
      id: user.id,
      un: user.username,
      em: user.email
    };
  }

  if (custom) {
    compressed.cu = custom;
  }

  return compressed;
}

function compressMarks(marks) {
  if (!marks) {
    return null;
  }

  var navigationTiming = marks.navigationTiming,
      agent = marks.agent;
  var compressed = {
    nt: {}
  };
  _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__["COMPRESSED_NAV_TIMING_MARKS"].forEach(function (mark, index) {
    var mapping = _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__["NAVIGATION_TIMING_MARKS"][index];
    compressed.nt[mark] = navigationTiming[mapping];
  });
  compressed.a = {
    fb: compressed.nt.rs,
    di: compressed.nt.di,
    dc: compressed.nt.dc
  };
  var fp = agent.firstContentfulPaint;
  var lp = agent.largestContentfulPaint;

  if (fp) {
    compressed.a.fp = fp;
  }

  if (lp) {
    compressed.a.lp = lp;
  }

  return compressed;
}

function compressMetadata(metadata) {
  var service = metadata.service,
      labels = metadata.labels;
  var agent = service.agent,
      language = service.language;
  return {
    se: {
      n: service.name,
      ve: service.version,
      a: {
        n: agent.name,
        ve: agent.version
      },
      la: {
        n: language.name
      },
      en: service.environment
    },
    l: labels
  };
}
function compressTransaction(transaction) {
  var spans = transaction.spans.map(function (span) {
    var spanData = {
      id: span.id,
      n: span.name,
      t: span.type,
      s: span.start,
      d: span.duration,
      c: compressContext(span.context),
      o: span.outcome
    };

    if (span.parent_id !== transaction.id) {
      spanData.pid = span.parent_id;
    }

    if (span.sync === true) {
      spanData.sy = true;
    }

    if (span.subtype) {
      spanData.su = span.subtype;
    }

    if (span.action) {
      spanData.ac = span.action;
    }

    return spanData;
  });
  var tr = {
    id: transaction.id,
    tid: transaction.trace_id,
    n: transaction.name,
    t: transaction.type,
    d: transaction.duration,
    c: compressContext(transaction.context),
    m: compressMarks(transaction.marks),
    me: compressMetricsets(transaction.breakdown),
    y: spans,
    yc: {
      sd: spans.length
    },
    sm: transaction.sampled,
    o: transaction.outcome
  };

  if (transaction.experience) {
    var _transaction$experien = transaction.experience,
        cls = _transaction$experien.cls,
        fid = _transaction$experien.fid,
        tbt = _transaction$experien.tbt,
        longtask = _transaction$experien.longtask;
    tr.exp = {
      cls: cls,
      fid: fid,
      tbt: tbt,
      lt: longtask
    };
  }

  return tr;
}
function compressError(error) {
  var exception = error.exception;
  var compressed = {
    id: error.id,
    cl: error.culprit,
    ex: {
      mg: exception.message,
      st: compressStackFrames(exception.stacktrace),
      t: error.type
    },
    c: compressContext(error.context)
  };
  var transaction = error.transaction;

  if (transaction) {
    compressed.tid = error.trace_id;
    compressed.pid = error.parent_id;
    compressed.xid = error.transaction_id;
    compressed.x = {
      t: transaction.type,
      sm: transaction.sampled
    };
  }

  return compressed;
}
function compressMetricsets(breakdowns) {
  return breakdowns.map(function (_ref) {
    var span = _ref.span,
        samples = _ref.samples;
    var isSpan = span != null;

    if (isSpan) {
      return {
        y: {
          t: span.type
        },
        sa: {
          ysc: {
            v: samples['span.self_time.count'].value
          },
          yss: {
            v: samples['span.self_time.sum.us'].value
          }
        }
      };
    }

    return {
      sa: {
        xdc: {
          v: samples['transaction.duration.count'].value
        },
        xds: {
          v: samples['transaction.duration.sum.us'].value
        },
        xbc: {
          v: samples['transaction.breakdown.count'].value
        }
      }
    };
  });
}
function compressPayload(payload, headers, type) {
  if (type === void 0) {
    type = 'gzip';
  }

  var isCompressionStreamSupported = typeof CompressionStream === 'function';
  return new _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve) {
    if (!isCompressionStreamSupported) {
      return resolve({
        payload: payload,
        headers: headers
      });
    }

    var payloadStream = new Blob([payload]).stream();
    var compressedStream = payloadStream.pipeThrough(new CompressionStream(type));
    return new Response(compressedStream).blob().then(function (payload) {
      headers['Content-Encoding'] = type;
      return resolve({
        payload: payload,
        headers: headers
      });
    });
  });
}

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
    this.config = {
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
      apiVersion: 2,
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

    var _properties = properties,
        transactionSampleRate = _properties.transactionSampleRate,
        serverUrl = _properties.serverUrl;

    if (serverUrl) {
      properties.serverUrl = serverUrl.replace(/\/+$/, '');
    }

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(transactionSampleRate)) {
      if (transactionSampleRate < 0.0001 && transactionSampleRate > 0) {
        transactionSampleRate = 0.0001;
      }

      properties.transactionSampleRate = Math.round(transactionSampleRate * 10000) / 10000;
    }

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.config, properties);
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
/*! exports provided: SCHEDULE, INVOKE, ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, RESOURCE_INITIATOR_TYPES, REUSABILITY_THRESHOLD, MAX_SPAN_DURATION, PAGE_LOAD, ROUTE_CHANGE, NAME_UNKNOWN, TYPE_CUSTOM, USER_TIMING_THRESHOLD, TRANSACTION_START, TRANSACTION_END, CONFIG_CHANGE, XMLHTTPREQUEST, FETCH, HISTORY, EVENT_TARGET, ERROR, BEFORE_EVENT, AFTER_EVENT, LOCAL_CONFIG_KEY, HTTP_REQUEST_TYPE, LONG_TASK, PAINT, MEASURE, NAVIGATION, RESOURCE, FIRST_CONTENTFUL_PAINT, LARGEST_CONTENTFUL_PAINT, KEYWORD_LIMIT, TEMPORARY_TYPE, USER_INTERACTION, TRANSACTION_TYPE_ORDER, ERRORS, TRANSACTIONS, CONFIG_SERVICE, LOGGING_SERVICE, APM_SERVER, TRUNCATED_TYPE, FIRST_INPUT, LAYOUT_SHIFT, OUTCOME_SUCCESS, OUTCOME_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULE", function() { return SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE", function() { return INVOKE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPORARY_TYPE", function() { return TEMPORARY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INTERACTION", function() { return USER_INTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_TYPE_ORDER", function() { return TRANSACTION_TYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTIONS", function() { return TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_SERVICE", function() { return CONFIG_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGING_SERVICE", function() { return LOGGING_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APM_SERVER", function() { return APM_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUNCATED_TYPE", function() { return TRUNCATED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_INPUT", function() { return FIRST_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SHIFT", function() { return LAYOUT_SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTCOME_SUCCESS", function() { return OUTCOME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTCOME_FAILURE", function() { return OUTCOME_FAILURE; });
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
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
var OUTCOME_SUCCESS = 'success';
var OUTCOME_FAILURE = 'failure';
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
var FIRST_INPUT = 'first-input';
var LAYOUT_SHIFT = 'layout-shift';
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var CONFIG_SERVICE = 'ConfigService';
var LOGGING_SERVICE = 'LoggingService';
var APM_SERVER = 'ApmServer';
var TRUNCATED_TYPE = '.truncated';
var KEYWORD_LIMIT = 1024;


/***/ }),

/***/ "../rum-core/dist/es/common/context.js":
/*!****************************************!*\
  !*** .-core/dist/es/common/context.js ***!
  \****************************************/
/*! exports provided: getPageContext, addSpanContext, addTransactionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageContext", function() { return getPageContext; });
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
var HARD_NAVIGATION = 'hard-navigation';

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
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
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
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
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

function getNavigationContext(data) {
  var url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
  var destination = getDestination(parsedUrl, HARD_NAVIGATION);
  return {
    destination: destination
  };
}

function getPageContext() {
  return {
    page: {
      referer: document.referrer,
      url: location.href
    }
  };
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

    case HARD_NAVIGATION:
      context = getNavigationContext(data);
      break;
  }

  span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      tags = _ref.tags,
      configContext = _objectWithoutPropertiesLoose(_ref, ["tags"]);

  var pageContext = getPageContext();
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
    this.level = spec.level || 'warn';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }

  var _proto = LoggingService.prototype;

  _proto.shouldLog = function shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  };

  _proto.setLevel = function setLevel(level) {
    if (level === this.level) {
      return;
    }

    this.level = level;
    this.resetLogMethods();
  };

  _proto.resetLogMethods = function resetLogMethods() {
    var _this = this;

    this.levels.forEach(function (level) {
      _this[level] = _this.shouldLog(level) ? log : _utils__WEBPACK_IMPORTED_MODULE_0__["noop"];

      function log() {
        var normalizedLevel = level;

        if (level === 'trace' || level === 'debug') {
          normalizedLevel = 'info';
        }

        var args = arguments;
        args[0] = this.prefix + args[0];

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../rum-core/dist/es/common/constants.js");


function patchXMLHttpRequest(callback) {
  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

  if (!XMLHttpRequestPrototype || !XMLHttpRequestPrototype[_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_EVENT_LISTENER_STR"]]) {
    return;
  }

  var READY_STATE_CHANGE = 'readystatechange';
  var LOAD = 'load';
  var ERROR = 'error';
  var TIMEOUT = 'timeout';
  var ABORT = 'abort';

  function invokeTask(task, status) {
    if (task.state !== _constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"]) {
      task.state = _constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"];
      task.data.status = status;
      callback(_constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"], task);
    }
  }

  function scheduleTask(task) {
    if (task.state === _constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"]) {
      return;
    }

    task.state = _constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"], task);
    var target = task.data.target;

    function addListener(name) {
      target[_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_EVENT_LISTENER_STR"]](name, function (_ref) {
        var type = _ref.type;

        if (type === READY_STATE_CHANGE) {
          if (target.readyState === 4 && target.status !== 0) {
            invokeTask(task, 'success');
          }
        } else {
          var status = type === LOAD ? 'success' : type;
          invokeTask(task, status);
        }
      });
    }

    addListener(READY_STATE_CHANGE);
    addListener(LOAD);
    addListener(TIMEOUT);
    addListener(ERROR);
    addListener(ABORT);
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
        source: _constants__WEBPACK_IMPORTED_MODULE_1__["XMLHTTPREQUEST"],
        state: '',
        type: 'macroTask',
        data: {
          target: self,
          method: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_METHOD"]],
          sync: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]],
          url: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_URL"]],
          status: ''
        }
      };

      try {
        scheduleTask(task);
        return sendNative.apply(self, args);
      } catch (e) {
        invokeTask(task, ERROR);
        throw e;
      }
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");


var local = {};

if (_utils__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
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
/*! exports provided: serviceCreators, ServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCreators", function() { return serviceCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return ServiceFactory; });
/* harmony import */ var _apm_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apm-server */ "../rum-core/dist/es/common/apm-server.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-service */ "../rum-core/dist/es/common/config-service.js");
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging-service */ "../rum-core/dist/es/common/logging-service.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");
var _serviceCreators;






var serviceCreators = (_serviceCreators = {}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"]] = function () {
  return new _config_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"]] = function () {
  return new _logging_service__WEBPACK_IMPORTED_MODULE_2__["default"]({
    prefix: '[Elastic APM] '
  });
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["APM_SERVER"]] = function (factory) {
  var _factory$getService = factory.getService([_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"], _constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"]]),
      configService = _factory$getService[0],
      loggingService = _factory$getService[1];

  return new _apm_server__WEBPACK_IMPORTED_MODULE_0__["default"](configService, loggingService);
}, _serviceCreators);

var ServiceFactory = function () {
  function ServiceFactory() {
    this.instances = {};
    this.initialized = false;
  }

  var _proto = ServiceFactory.prototype;

  _proto.init = function init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    var configService = this.getService(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"]);
    configService.init();

    var _this$getService = this.getService([_constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"], _constants__WEBPACK_IMPORTED_MODULE_3__["APM_SERVER"]]),
        loggingService = _this$getService[0],
        apmServer = _this$getService[1];

    configService.events.observe(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_CHANGE"], function () {
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
    });
    apmServer.init();
  };

  _proto.getService = function getService(name) {
    var _this = this;

    if (typeof name === 'string') {
      if (!this.instances[name]) {
        if (typeof serviceCreators[name] === 'function') {
          this.instances[name] = serviceCreators[name](this);
        } else if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          console.log('Cannot get service, No creator for: ' + name);
        }
      }

      return this.instances[name];
    } else if (Array.isArray(name)) {
      return name.map(function (n) {
        return _this.getService(n);
      });
    }
  };

  return ServiceFactory;
}();



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
/*! exports provided: Url, slugifyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugifyUrl", function() { return slugifyUrl; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../rum-core/dist/es/common/utils.js");


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

    if (_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
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
function slugifyUrl(urlStr, depth) {
  if (depth === void 0) {
    depth = 2;
  }

  var parsedUrl = new Url(urlStr);
  var query = parsedUrl.query,
      path = parsedUrl.path;
  var pathParts = path.substring(1).split('/');
  var redactString = ':id';
  var wildcard = '*';
  var specialCharsRegex = /\W|_/g;
  var digitsRegex = /[0-9]/g;
  var lowerCaseRegex = /[a-z]/g;
  var upperCaseRegex = /[A-Z]/g;
  var redactedParts = [];
  var redactedBefore = false;

  for (var _index = 0; _index < pathParts.length; _index++) {
    var part = pathParts[_index];

    if (redactedBefore || _index > depth - 1) {
      if (part) {
        redactedParts.push(wildcard);
      }

      break;
    }

    var numberOfSpecialChars = (part.match(specialCharsRegex) || []).length;

    if (numberOfSpecialChars >= 2) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberOfDigits = (part.match(digitsRegex) || []).length;

    if (numberOfDigits > 3 || part.length > 3 && numberOfDigits / part.length >= 0.3) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberofUpperCase = (part.match(upperCaseRegex) || []).length;
    var numberofLowerCase = (part.match(lowerCaseRegex) || []).length;
    var lowerCaseRate = numberofLowerCase / part.length;
    var upperCaseRate = numberofUpperCase / part.length;

    if (part.length > 5 && (upperCaseRate > 0.3 && upperCaseRate < 0.6 || lowerCaseRate > 0.3 && lowerCaseRate < 0.6)) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    part && redactedParts.push(part);
  }

  var redacted = '/' + (redactedParts.length >= 2 ? redactedParts.join('/') : redactedParts.join('')) + (query ? '?{query}' : '');
  return redacted;
}

/***/ }),

/***/ "../rum-core/dist/es/common/utils.js":
/*!**************************************!*\
  !*** .-core/dist/es/common/utils.js ***!
  \**************************************/
/*! exports provided: extend, merge, isUndefined, noop, baseExtend, bytesToHex, isCORSSupported, isObject, isFunction, isPlatformSupported, isDtHeaderValid, parseDtHeaderValue, getServerTimingInfo, getDtHeaderValue, getCurrentScript, getElasticScript, getTimeOrigin, generateRandomId, getEarliestSpan, getLatestNonXHRSpan, getDuration, getTime, now, rng, checkSameOrigin, scheduleMacroTask, scheduleMicroTask, setLabel, stripQueryStringFromUrl, find, removeInvalidChars, PERF, isPerfTimelineSupported, isBrowser, isPerfTypeSupported */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPerfTypeSupported", function() { return isPerfTypeSupported; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "../rum-core/dist/es/common/polyfills.js");

var slice = [].slice;
var isBrowser = typeof window !== 'undefined';
var PERF = isBrowser && typeof performance !== 'undefined' ? performance : {};

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
  return isBrowser && typeof Set === 'function' && typeof JSON.stringify === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
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

  return parseInt(end - start);
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

function isPerfTypeSupported(type) {
  return typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(type) >= 0;
}



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
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/context */ "../rum-core/dist/es/common/context.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/truncate */ "../rum-core/dist/es/common/truncate.js");
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

    var pageContext = Object(_common_context__WEBPACK_IMPORTED_MODULE_2__["getPageContext"])();
    var context = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, pageContext, transactionContext, configContext, errorContext);
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

    return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_3__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_3__["ERROR_MODEL"], errorObject);
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
    var _promiseRejectionEven = promiseRejectionEvent.reason,
        reason = _promiseRejectionEven === void 0 ? '<no reason specified>' : _promiseRejectionEven;
    var errorEvent;

    if (typeof reason.message === 'string') {
      var name = reason.name ? reason.name + ': ' : '';
      errorEvent = {
        error: reason,
        message: prefix + name + reason.message
      };
    } else {
      reason = typeof reason === 'object' ? '<object>' : typeof reason === 'function' ? '<function>' : reason;
      errorEvent = {
        message: prefix + reason
      };
    }

    this.logErrorEvent(errorEvent);
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
/*! exports provided: registerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServices", function() { return registerServices; });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "../rum-core/dist/es/error-logging/error-logging.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service-factory */ "../rum-core/dist/es/common/service-factory.js");




function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["serviceCreators"]['ErrorLogging'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_1__["APM_SERVER"], _common_constants__WEBPACK_IMPORTED_MODULE_1__["CONFIG_SERVICE"], 'TransactionService']),
        apmServer = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1],
        transactionService = _serviceFactory$getSe[2];

    return new _error_logging__WEBPACK_IMPORTED_MODULE_0__["default"](apmServer, configService, transactionService);
  };
}



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
/*! exports provided: createServiceFactory, ServiceFactory, patchAll, patchEventHandler, isPlatformSupported, isBrowser, getInstrumentationFlags, createTracer, scheduleMicroTask, scheduleMacroTask, afterFrame, ERROR, PAGE_LOAD, CONFIG_SERVICE, LOGGING_SERVICE, APM_SERVER, bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServiceFactory", function() { return createServiceFactory; });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "../rum-core/dist/es/error-logging/index.js");
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-monitoring */ "../rum-core/dist/es/performance-monitoring/index.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/service-factory */ "../rum-core/dist/es/common/service-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["ServiceFactory"]; });

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatformSupported", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["isPlatformSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["isBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMicroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMacroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMacroTask"]; });

/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/patching */ "../rum-core/dist/es/common/patching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchAll", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchEventHandler", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchEventHandler"]; });

/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOAD", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG_SERVICE", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONFIG_SERVICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGGING_SERVICE", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["LOGGING_SERVICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APM_SERVER", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["APM_SERVER"]; });

/* harmony import */ var _common_instrument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/instrument */ "../rum-core/dist/es/common/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstrumentationFlags", function() { return _common_instrument__WEBPACK_IMPORTED_MODULE_6__["getInstrumentationFlags"]; });

/* harmony import */ var _common_after_frame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/after-frame */ "../rum-core/dist/es/common/after-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterFrame", function() { return _common_after_frame__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "../rum-core/dist/es/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_8__["bootstrap"]; });

/* harmony import */ var _opentracing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opentracing */ "../rum-core/dist/es/opentracing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTracer", function() { return _opentracing__WEBPACK_IMPORTED_MODULE_9__["createTracer"]; });












function createServiceFactory() {
  Object(_performance_monitoring__WEBPACK_IMPORTED_MODULE_1__["registerServices"])();
  Object(_error_logging__WEBPACK_IMPORTED_MODULE_0__["registerServices"])();
  var serviceFactory = new _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["ServiceFactory"]();
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");
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
          if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
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
        if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
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
        if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
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
        subtype = span.subtype;
    var key = type.replace(_common_constants__WEBPACK_IMPORTED_MODULE_1__["TRUNCATED_TYPE"], '');

    if (subtype) {
      key += '.' + subtype;
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
/*! exports provided: getPageLoadMarks, captureNavigation, createNavigationTimingSpans, createResourceTimingSpans, createUserTimingSpans, NAVIGATION_TIMING_MARKS, COMPRESSED_NAV_TIMING_MARKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageLoadMarks", function() { return getPageLoadMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureNavigation", function() { return captureNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigationTimingSpans", function() { return createNavigationTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceTimingSpans", function() { return createResourceTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserTimingSpans", function() { return createUserTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_TIMING_MARKS", function() { return NAVIGATION_TIMING_MARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPRESSED_NAV_TIMING_MARKS", function() { return COMPRESSED_NAV_TIMING_MARKS; });
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/performance-monitoring/span.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");




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
    var data = null;

    if (eventPairs[i][0] === 'requestStart') {
      span.pageResponse = true;
      data = {
        url: location.origin
      };
    }

    span._start = start - baseTime;
    span.end(end - baseTime, data);
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

function isCapturedByPatching(resourceStartTime, requestPatchTime) {
  return requestPatchTime != null && resourceStartTime > requestPatchTime;
}

function isIntakeAPIEndpoint(url) {
  return /intake\/v\d+\/rum\/events/.test(url);
}

function createResourceTimingSpans(entries, requestPatchTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
        initiatorType = _entries$i.initiatorType,
        name = _entries$i.name,
        startTime = _entries$i.startTime,
        responseEnd = _entries$i.responseEnd;

    if (_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_INITIATOR_TYPES"].indexOf(initiatorType) === -1 || name == null) {
      continue;
    }

    if ((initiatorType === 'xmlhttprequest' || initiatorType === 'fetch') && (isIntakeAPIEndpoint(name) || isCapturedByPatching(startTime, requestPatchTime))) {
      continue;
    }

    if (shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) {
      spans.push(createResourceTimingSpan(entries[i]));
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

var NAVIGATION_TIMING_MARKS = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];
var COMPRESSED_NAV_TIMING_MARKS = ['fs', 'ls', 'le', 'cs', 'ce', 'qs', 'rs', 're', 'dl', 'di', 'ds', 'de', 'dc', 'es', 'ee'];

function getNavigationTimingMarks(timing) {
  var fetchStart = timing.fetchStart,
      navigationStart = timing.navigationStart,
      responseStart = timing.responseStart,
      responseEnd = timing.responseEnd;

  if (fetchStart >= navigationStart && responseStart >= fetchStart && responseEnd >= responseStart) {
    var marks = {};
    NAVIGATION_TIMING_MARKS.forEach(function (timingKey) {
      var m = timing[timingKey];

      if (m && m >= fetchStart) {
        marks[timingKey] = parseInt(m - fetchStart);
      }
    });
    return marks;
  }

  return null;
}

function getPageLoadMarks(timing) {
  var marks = getNavigationTimingMarks(timing);

  if (marks == null) {
    return null;
  }

  return {
    navigationTiming: marks,
    agent: {
      timeToFirstByte: marks.responseStart,
      domInteractive: marks.domInteractive,
      domComplete: marks.domComplete
    }
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
    transaction.addMarks(getPageLoadMarks(timings));
  }

  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["isPerfTimelineSupported"])()) {
    var _trStart = transaction._start;
    var resourceEntries = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE"]);
    createResourceTimingSpans(resourceEntries, _state__WEBPACK_IMPORTED_MODULE_3__["state"].bootstrapTime, _trStart, trEnd).forEach(function (span) {
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
/*! exports provided: registerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServices", function() { return registerServices; });
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance-monitoring */ "../rum-core/dist/es/performance-monitoring/performance-monitoring.js");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-service */ "../rum-core/dist/es/performance-monitoring/transaction-service.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/service-factory */ "../rum-core/dist/es/common/service-factory.js");





function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_3__["serviceCreators"]['TransactionService'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_2__["LOGGING_SERVICE"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_SERVICE"]]),
        loggingService = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1];

    return new _transaction_service__WEBPACK_IMPORTED_MODULE_1__["default"](loggingService, configService);
  };

  _common_service_factory__WEBPACK_IMPORTED_MODULE_3__["serviceCreators"]['PerformanceMonitoring'] = function (serviceFactory) {
    var _serviceFactory$getSe2 = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_2__["APM_SERVER"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_SERVICE"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["LOGGING_SERVICE"], 'TransactionService']),
        apmServer = _serviceFactory$getSe2[0],
        configService = _serviceFactory$getSe2[1],
        loggingService = _serviceFactory$getSe2[2],
        transactionService = _serviceFactory$getSe2[3];

    return new _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__["default"](apmServer, configService, loggingService, transactionService);
  };
}



/***/ }),

/***/ "../rum-core/dist/es/performance-monitoring/metrics.js":
/*!********************************************************!*\
  !*** .-core/dist/es/performance-monitoring/metrics.js ***!
  \********************************************************/
/*! exports provided: metrics, createLongTaskSpans, createFirstInputDelaySpan, createTotalBlockingTimeSpan, calculateTotalBlockingTime, calculateCumulativeLayoutShift, captureObserverEntries, PerfEntryRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metrics", function() { return metrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLongTaskSpans", function() { return createLongTaskSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFirstInputDelaySpan", function() { return createFirstInputDelaySpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTotalBlockingTimeSpan", function() { return createTotalBlockingTimeSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalBlockingTime", function() { return calculateTotalBlockingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCumulativeLayoutShift", function() { return calculateCumulativeLayoutShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureObserverEntries", function() { return captureObserverEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfEntryRecorder", function() { return PerfEntryRecorder; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "../rum-core/dist/es/performance-monitoring/span.js");



var metrics = {
  fid: 0,
  fcp: 0,
  tbt: {
    start: Infinity,
    duration: 0
  },
  cls: 0,
  longtask: {
    count: 0,
    duration: 0,
    max: 0
  }
};
var LONG_TASK_THRESHOLD = 50;
function createLongTaskSpans(longtasks, agg) {
  var spans = [];

  for (var i = 0; i < longtasks.length; i++) {
    var _longtasks$i = longtasks[i],
        name = _longtasks$i.name,
        startTime = _longtasks$i.startTime,
        duration = _longtasks$i.duration,
        attribution = _longtasks$i.attribution;
    var end = startTime + duration;
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]("Longtask(" + name + ")", _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"], {
      startTime: startTime
    });
    agg.count++;
    agg.duration += duration;

    if (duration > agg.max) {
      agg.max = duration;
    }

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
function createFirstInputDelaySpan(fidEntries) {
  var firstInput = fidEntries[0];

  if (firstInput) {
    var startTime = firstInput.startTime,
        processingStart = firstInput.processingStart;
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]('First Input Delay', _common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_INPUT"], {
      startTime: startTime
    });
    span.end(processingStart);
    return span;
  }
}
function createTotalBlockingTimeSpan(tbtObject) {
  var start = tbtObject.start,
      duration = tbtObject.duration;
  var tbtSpan = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]('Total Blocking Time', _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"], {
    startTime: start
  });
  tbtSpan.end(start + duration);
  return tbtSpan;
}
function calculateTotalBlockingTime(longtaskEntries) {
  longtaskEntries.forEach(function (entry) {
    var name = entry.name,
        startTime = entry.startTime,
        duration = entry.duration;

    if (startTime < metrics.fcp) {
      return;
    }

    if (name !== 'self' && name.indexOf('same-origin') === -1) {
      return;
    }

    metrics.tbt.start = Math.min(metrics.tbt.start, startTime);
    var blockingTime = duration - LONG_TASK_THRESHOLD;

    if (blockingTime > 0) {
      metrics.tbt.duration += blockingTime;
    }
  });
}
function calculateCumulativeLayoutShift(clsEntries) {
  clsEntries.forEach(function (entry) {
    if (!entry.hadRecentInput) {
      metrics.cls += entry.value;
    }
  });
}
function captureObserverEntries(list, _ref) {
  var capturePaint = _ref.capturePaint;
  var longtaskEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"]);
  var longTaskSpans = createLongTaskSpans(longtaskEntries, metrics.longtask);
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
    var lcp = parseInt(lastLcpEntry.startTime);
    metrics.lcp = lcp;
    result.marks.largestContentfulPaint = lcp;
  }

  var timing = _common_utils__WEBPACK_IMPORTED_MODULE_1__["PERF"].timing;
  var unloadDiff = timing.fetchStart - timing.navigationStart;
  var fcpEntry = list.getEntriesByName(_common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_CONTENTFUL_PAINT"])[0];

  if (fcpEntry) {
    var fcp = parseInt(unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime);
    metrics.fcp = fcp;
    result.marks.firstContentfulPaint = fcp;
  }

  var fidEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_INPUT"]);
  var fidSpan = createFirstInputDelaySpan(fidEntries);

  if (fidSpan) {
    metrics.fid = fidSpan.duration();
    result.spans.push(fidSpan);
  }

  calculateTotalBlockingTime(longtaskEntries);
  var clsEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LAYOUT_SHIFT"]);
  calculateCumulativeLayoutShift(clsEntries);
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
/*! exports provided: groupSmallContinuouslySimilarSpans, adjustTransactionSpans, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupSmallContinuouslySimilarSpans", function() { return groupSmallContinuouslySimilarSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustTransactionSpans", function() { return adjustTransactionSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformanceMonitoring; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/url */ "../rum-core/dist/es/common/url.js");
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/patching */ "../rum-core/dist/es/common/patching/index.js");
/* harmony import */ var _common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/patching/patch-utils */ "../rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/truncate */ "../rum-core/dist/es/common/truncate.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");







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
      var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subtype === span.subtype && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
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
      var requestUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["Url"](data.url);
      var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["stripQueryStringFromUrl"])(requestUrl.href));

      if (!transactionService.getCurrentTransaction()) {
        transactionService.startTransaction(spanName, _common_constants__WEBPACK_IMPORTED_MODULE_4__["HTTP_REQUEST_TYPE"], {
          managed: true
        });
      }

      var span = transactionService.startSpan(spanName, 'external.http', {
        blocking: true
      });

      if (!span) {
        return;
      }

      var isDtEnabled = configService.get('distributedTracing');
      var dtOrigins = configService.get('distributedTracingOrigins');
      var currentUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["Url"](window.location.href);
      var isSameOrigin = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, currentUrl.origin) || Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, dtOrigins);
      var target = data.target;

      if (isDtEnabled && isSameOrigin && target) {
        this.injectDtHeader(span, target);
      } else if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
        this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
      }

      if (data.sync) {
        span.sync = data.sync;
      }

      data.span = span;
    } else if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["INVOKE"]) {
      var _data = task.data;

      if (_data && _data.span) {
        var _span = _data.span,
            response = _data.response,
            _target = _data.target;
        var status;

        if (response) {
          status = response.status;
        } else {
          status = _target.status;
        }

        var outcome;

        if (_data.status != 'abort') {
          if (status >= 400 || status == 0) {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_4__["OUTCOME_FAILURE"];
          } else {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_4__["OUTCOME_SUCCESS"];
          }
        }

        _span.outcome = outcome;
        var tr = transactionService.getCurrentTransaction();

        if (tr && tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_4__["HTTP_REQUEST_TYPE"]) {
          tr.outcome = outcome;
        }

        transactionService.endSpan(_span, _data);
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
      if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
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
        if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
        }

        return false;
      }

      if (tr.sampled && tr.spans.length === 0) {
        if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
        }

        return false;
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
        subtype: span.subtype,
        action: span.action,
        sync: span.sync,
        start: parseInt(span._start - transactionStart),
        duration: span.duration(),
        context: span.context,
        outcome: span.outcome
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
      sampled: transaction.sampled,
      experience: transaction.experience,
      outcome: transaction.outcome
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
    this.outcome = undefined;
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
    _this.subtype = undefined;
    _this.action = undefined;

    if (_this.type.indexOf('.') !== -1) {
      var fields = _this.type.split('.', 3);

      _this.type = fields[0];
      _this.subtype = fields[1];
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
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics */ "../rum-core/dist/es/performance-monitoring/metrics.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "../rum-core/dist/es/common/utils.js");
/* harmony import */ var _capture_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture-navigation */ "../rum-core/dist/es/performance-monitoring/capture-navigation.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "../rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/context */ "../rum-core/dist/es/common/context.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "../rum-core/dist/es/state.js");
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/url */ "../rum-core/dist/es/common/url.js");










var TransactionService = function () {
  function TransactionService(logger, config) {
    var _this = this;

    this._config = config;
    this._logger = logger;
    this.currentTransaction = undefined;
    this.respIntervalId = undefined;
    this.recorder = new _metrics__WEBPACK_IMPORTED_MODULE_2__["PerfEntryRecorder"](function (list) {
      var tr = _this.getCurrentTransaction();

      if (tr && tr.captureTimings) {
        var _tr$spans;

        var capturePaint = false;

        if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
          capturePaint = true;
        }

        var _captureObserverEntri = Object(_metrics__WEBPACK_IMPORTED_MODULE_2__["captureObserverEntries"])(list, {
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

  _proto.createCurrentTransaction = function createCurrentTransaction(name, type, options) {
    var tr = new _transaction__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, options);
    this.currentTransaction = tr;
    return tr;
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.currentTransaction && !this.currentTransaction.ended) {
      return this.currentTransaction;
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
      tr = this.createCurrentTransaction(name, type, perfOptions);
    } else if (tr.canReuse() && perfOptions.canReuse) {
      var redefineType = tr.type;
      var currentTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(tr.type);
      var redefineTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(type);

      if (currentTypeOrder >= 0 && redefineTypeOrder < currentTypeOrder) {
        redefineType = type;
      }

      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + (name || tr.name) + ", " + redefineType + ")", tr);
      }

      tr.redefine(name, redefineType, perfOptions);
      isRedefined = true;
    } else {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
      }

      tr.end();
      tr = this.createCurrentTransaction(name, type, perfOptions);
    }

    if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
      if (!isRedefined) {
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LARGEST_CONTENTFUL_PAINT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["PAINT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["FIRST_INPUT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SHIFT"]);
      }

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

    return tr;
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    var _this2 = this;

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
      return _this2.handleTransactionEnd(tr);
    };

    if (fireOnstartHook) {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
      }

      this._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_START"], [tr]);
    }

    return tr;
  };

  _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
    var _this3 = this;

    this.recorder.stop();
    var currentUrl = window.location.href;
    return _common_polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(function () {
      var name = tr.name,
          type = tr.type;
      var lastHiddenStart = _state__WEBPACK_IMPORTED_MODULE_7__["state"].lastHiddenStart;

      if (lastHiddenStart >= tr._start) {
        if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") was discarded! The page was hidden during the transaction!");
        }

        return;
      }

      if (_this3.shouldIgnoreTransaction(name) || type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"]) {
        if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
        }

        return;
      }

      if (type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
        var pageLoadTransactionName = _this3._config.get('pageLoadTransactionName');

        if (name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"] && pageLoadTransactionName) {
          tr.name = pageLoadTransactionName;
        }

        if (tr.captureTimings) {
          var cls = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].cls,
              fid = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].fid,
              tbt = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].tbt,
              longtask = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].longtask;

          if (tbt.duration > 0) {
            tr.spans.push(Object(_metrics__WEBPACK_IMPORTED_MODULE_2__["createTotalBlockingTimeSpan"])(tbt));
          }

          tr.experience = {};

          if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["isPerfTypeSupported"])(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LONG_TASK"])) {
            tr.experience.tbt = tbt.duration;
          }

          if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["isPerfTypeSupported"])(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SHIFT"])) {
            tr.experience.cls = cls;
          }

          if (fid > 0) {
            tr.experience.fid = fid;
          }

          if (longtask.count > 0) {
            tr.experience.longtask = {
              count: longtask.count,
              sum: longtask.duration,
              max: longtask.max
            };
          }
        }
      }

      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"]) {
        tr.name = Object(_common_url__WEBPACK_IMPORTED_MODULE_8__["slugifyUrl"])(currentUrl);
      }

      Object(_capture_navigation__WEBPACK_IMPORTED_MODULE_4__["captureNavigation"])(tr);

      _this3.adjustTransactionTime(tr);

      var breakdownMetrics = _this3._config.get('breakdownMetrics');

      if (breakdownMetrics) {
        tr.captureBreakdown();
      }

      var configContext = _this3._config.get('context');

      Object(_common_context__WEBPACK_IMPORTED_MODULE_6__["addTransactionContext"])(tr, configContext);

      _this3._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_END"], [tr]);

      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this3._logger.debug("end transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", tr);
      }
    }, function (err) {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this3._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
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
        span.type += _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRUNCATED_TYPE"];
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
    var tr = this.getCurrentTransaction();

    if (!tr) {
      tr = this.createCurrentTransaction(undefined, _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"], this.createOptions({
        canReuse: true,
        managed: true
      }));
    }

    var span = tr.startSpan(name, type, options);

    if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
      this._logger.debug("startSpan(" + name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    return span;
  };

  _proto.endSpan = function endSpan(span, context) {
    if (!span) {
      return;
    }

    if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
      var tr = this.getCurrentTransaction();
      tr && this._logger.debug("endSpan(" + span.name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    span.end(null, context);
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
    _this._activeTasks = new Set();
    _this.blocked = false;
    _this.captureTimings = false;
    _this.breakdownTimings = [];
    _this.sampled = Math.random() <= _this.options.transactionSampleRate;
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
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.options, options);
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

    if (opts.blocking) {
      this.addTask(span.id);
    }

    return span;
  };

  _proto.isFinished = function isFinished() {
    return !this.blocked && this._activeTasks.size === 0;
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
      span.type = span.type + _common_constants__WEBPACK_IMPORTED_MODULE_3__["TRUNCATED_TYPE"];
      span.end(endTime);
    }

    this.callOnEnd();
  };

  _proto.captureBreakdown = function captureBreakdown() {
    this.breakdownTimings = Object(_breakdown__WEBPACK_IMPORTED_MODULE_4__["captureBreakdown"])(this);
  };

  _proto.block = function block(flag) {
    this.blocked = flag;

    if (!this.blocked) {
      this.detectFinish();
    }
  };

  _proto.addTask = function addTask(taskId) {
    if (!taskId) {
      taskId = 'task-' + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["generateRandomId"])(16);
    }

    this._activeTasks.add(taskId);

    return taskId;
  };

  _proto.removeTask = function removeTask(taskId) {
    var deleted = this._activeTasks.delete(taskId);

    deleted && this.detectFinish();
  };

  _proto.resetSpans = function resetSpans() {
    this.spans = [];
  };

  _proto._onSpanEnd = function _onSpanEnd(span) {
    this.spans.push(span);
    delete this._activeSpans[span.id];
    this.removeTask(span.id);
  };

  _proto.isManaged = function isManaged() {
    return !!this.options.managed;
  };

  return Transaction;
}(_span_base__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Transaction);

/***/ }),

/***/ "../rum-core/dist/es/state.js":
/*!*******************************!*\
  !*** .-core/dist/es/state.js ***!
  \*******************************/
/*! exports provided: __DEV__, state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return __DEV__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
var __DEV__ = "development" !== 'production';

var state = {
  bootstrapTime: null,
  lastHiddenStart: Number.MIN_SAFE_INTEGER
};


/***/ }),

/***/ "./src/apm-base.js":
/*!*************************!*\
  !*** ./src/apm-base.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApmBase; });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "../rum-core/dist/es/index.js");


var ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }

  var _proto = ApmBase.prototype;

  _proto.isEnabled = function isEnabled() {
    return !this._disable;
  };

  _proto.isActive = function isActive() {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    return this.isEnabled() && this._initialized && configService.get('active');
  };

  _proto.init = function init(config) {
    var _this = this;

    if (this.isEnabled() && !this._initialized) {
      this._initialized = true;

      var _this$serviceFactory$ = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"]]),
          configService = _this$serviceFactory$[0],
          loggingService = _this$serviceFactory$[1];

      configService.setVersion('5.6.2');
      this.config(config);
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
      var isConfigActive = configService.get('active');

      if (isConfigActive) {
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
        loggingService.warn('RUM agent is inactive');
      }
    }

    return this;
  };

  _proto.fetchCentralConfig = function fetchCentralConfig() {
    var _this$serviceFactory$2 = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["APM_SERVER"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]]),
        apmServer = _this$serviceFactory$2[0],
        loggingService = _this$serviceFactory$2[1],
        configService = _this$serviceFactory$2[2];

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

    if (!tr) {
      return;
    }

    tr.addTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);

    var sendPageLoadMetrics = function sendPageLoadMetrics() {
      setTimeout(function () {
        return tr.removeTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);
      });
    };

    if (document.readyState === 'complete') {
      sendPageLoadMetrics();
    } else {
      window.addEventListener('load', sendPageLoadMetrics);
    }
  };

  _proto.observe = function observe(name, fn) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.events.observe(name, fn);
  };

  _proto.config = function config(_config) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);

    var _configService$valida2 = configService.validate(_config),
        missing = _configService$valida2.missing,
        invalid = _configService$valida2.invalid;

    if (missing.length === 0 && invalid.length === 0) {
      configService.setConfig(_config);
    } else {
      var loggingService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"]);
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
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setUserContext(userContext);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setCustomContext(customContext);
  };

  _proto.addLabels = function addLabels(labels) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.addLabels(labels);
  };

  _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setConfig({
      pageLoadTransactionName: name
    });
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startTransaction(name, type, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startSpan(name, type, options);
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
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.addFilter(fn);
  };

  return ApmBase;
}();



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
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "../rum-core/dist/es/index.js");
/* harmony import */ var _apm_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apm-base */ "./src/apm-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApmBase", function() { return _apm_base__WEBPACK_IMPORTED_MODULE_1__["default"]; });




function getApmBase() {
  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && window.elasticApm) {
    return window.elasticApm;
  }

  var enabled = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])();
  var serviceFactory = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["createServiceFactory"])();
  var apmBase = new _apm_base__WEBPACK_IMPORTED_MODULE_1__["default"](serviceFactory, !enabled);

  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    window.elasticApm = apmBase;
  }

  return apmBase;
}

var apmBase = getApmBase();
var init = apmBase.init.bind(apmBase);
/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpYy1hcG0tcnVtLnVtZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL2Vycm9yLXN0YWNrLXBhcnNlci9lcnJvci1zdGFjay1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvZW50LXJ1bV9hcG0tYWdlbnQtcnVtLW1icF9tYXN0ZXIvc3JjL2dpdGh1Yi5jb20vZWxhc3RpYy9hcG0tYWdlbnQtcnVtLWpzL25vZGVfbW9kdWxlcy9vcGVudHJhY2luZy9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL29wZW50cmFjaW5nL2xpYi9ub29wLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL29wZW50cmFjaW5nL2xpYi9yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL3NwYW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvb3BlbnRyYWNpbmcvbGliL3NwYW5fY29udGV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvZW50LXJ1bV9hcG0tYWdlbnQtcnVtLW1icF9tYXN0ZXIvc3JjL2dpdGh1Yi5jb20vZWxhc3RpYy9hcG0tYWdlbnQtcnVtLWpzL25vZGVfbW9kdWxlcy9vcGVudHJhY2luZy9saWIvdHJhY2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8vdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9lbnQtcnVtX2FwbS1hZ2VudC1ydW0tbWJwX21hc3Rlci9zcmMvZ2l0aHViLmNvbS9lbGFzdGljL2FwbS1hZ2VudC1ydW0tanMvbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2ZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2VudC1ydW1fYXBtLWFnZW50LXJ1bS1tYnBfbWFzdGVyL3NyYy9naXRodWIuY29tL2VsYXN0aWMvYXBtLWFnZW50LXJ1bS1qcy9ub2RlX21vZHVsZXMvc3RhY2tmcmFtZS9zdGFja2ZyYW1lLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9hZnRlci1mcmFtZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL2FwbS1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9jb21wcmVzcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL2NvbmZpZy1zZXJ2aWNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vY29uc3RhbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vY29udGV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9pbnN0cnVtZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vbG9nZ2luZy1zZXJ2aWNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vbmRqc29uLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcGF0Y2hpbmcvZXZlbnQtdGFyZ2V0LXBhdGNoLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcGF0Y2hpbmcvZmV0Y2gtcGF0Y2guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9wYXRjaGluZy9oaXN0b3J5LXBhdGNoLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vcGF0Y2hpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi9wYXRjaGluZy9wYXRjaC11dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3BhdGNoaW5nL3hoci1wYXRjaC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3F1ZXVlLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vc2VydmljZS1mYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9jb21tb24vdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2NvbW1vbi90cnVuY2F0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3VybC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9lcnJvci1sb2dnaW5nL2Vycm9yLWxvZ2dpbmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2Vycm9yLWxvZ2dpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2Vycm9yLWxvZ2dpbmcvc3RhY2stdHJhY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9vcGVudHJhY2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvb3BlbnRyYWNpbmcvc3Bhbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvb3BlbnRyYWNpbmcvdHJhY2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy9jYXB0dXJlLW5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL3NwYW4tYmFzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi1jb3JlL2Rpc3QvZXMvcGVyZm9ybWFuY2UtbW9uaXRvcmluZy9zcGFuLmpzIiwid2VicGFjazovL1tuYW1lXS8uLWNvcmUvZGlzdC9lcy9wZXJmb3JtYW5jZS1tb25pdG9yaW5nL3RyYW5zYWN0aW9uLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvdHJhbnNhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4tY29yZS9kaXN0L2VzL3N0YXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hcG0tYmFzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZWxhc3RpYy1hcG0tcnVtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVsYXN0aWMtYXBtLXJ1bVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRCkgdG8gc3VwcG9ydCBBTUQsIENvbW1vbkpTL05vZGUuanMsIFJoaW5vLCBhbmQgYnJvd3NlcnMuXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdlcnJvci1zdGFjay1wYXJzZXInLCBbJ3N0YWNrZnJhbWUnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3N0YWNrZnJhbWUnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5FcnJvclN0YWNrUGFyc2VyID0gZmFjdG9yeShyb290LlN0YWNrRnJhbWUpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlcihTdGFja0ZyYW1lKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEZJUkVGT1hfU0FGQVJJX1NUQUNLX1JFR0VYUCA9IC8oXnxAKVxcUytcXDpcXGQrLztcbiAgICB2YXIgQ0hST01FX0lFX1NUQUNLX1JFR0VYUCA9IC9eXFxzKmF0IC4qKFxcUytcXDpcXGQrfFxcKG5hdGl2ZVxcKSkvbTtcbiAgICB2YXIgU0FGQVJJX05BVElWRV9DT0RFX1JFR0VYUCA9IC9eKGV2YWxAKT8oXFxbbmF0aXZlIGNvZGVcXF0pPyQvO1xuXG4gICAgZnVuY3Rpb24gX21hcChhcnJheSwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZuLCB0aGlzQXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBuZXcgQXJyYXkoYXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbaV0gPSBmbi5jYWxsKHRoaXNBcmcsIGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZmlsdGVyKGFycmF5LCBmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZm4sIHRoaXNBcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmbi5jYWxsKHRoaXNBcmcsIGFycmF5W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChhcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmRleE9mKGFycmF5LCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYW4gRXJyb3Igb2JqZWN0LCBleHRyYWN0IHRoZSBtb3N0IGluZm9ybWF0aW9uIGZyb20gaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIG9iamVjdFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX0gb2YgU3RhY2tGcmFtZXNcbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZShlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvci5zdGFja3RyYWNlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZXJyb3JbJ29wZXJhI3NvdXJjZWxvYyddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmEoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGFjayAmJiBlcnJvci5zdGFjay5tYXRjaChDSFJPTUVfSUVfU1RBQ0tfUkVHRVhQKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVjhPcklFKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZGT3JTYWZhcmkoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwYXJzZSBnaXZlbiBFcnJvciBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBTZXBhcmF0ZSBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBmcm9tIGEgc3RyaW5nIG9mIHRoZSBmb3JtOiAoVVJJOkxpbmU6Q29sdW1uKVxuICAgICAgICBleHRyYWN0TG9jYXRpb246IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJGV4dHJhY3RMb2NhdGlvbih1cmxMaWtlKSB7XG4gICAgICAgICAgICAvLyBGYWlsLWZhc3QgYnV0IHJldHVybiBsb2NhdGlvbnMgbGlrZSBcIihuYXRpdmUpXCJcbiAgICAgICAgICAgIGlmICh1cmxMaWtlLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3VybExpa2VdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVnRXhwID0gLyguKz8pKD86XFw6KFxcZCspKT8oPzpcXDooXFxkKykpPyQvO1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gcmVnRXhwLmV4ZWModXJsTGlrZS5yZXBsYWNlKC9bXFwoXFwpXS9nLCAnJykpO1xuICAgICAgICAgICAgcmV0dXJuIFtwYXJ0c1sxXSwgcGFydHNbMl0gfHwgdW5kZWZpbmVkLCBwYXJ0c1szXSB8fCB1bmRlZmluZWRdO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVjhPcklFOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZVY4T3JJRShlcnJvcikge1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gX2ZpbHRlcihlcnJvci5zdGFjay5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFsaW5lLm1hdGNoKENIUk9NRV9JRV9TVEFDS19SRUdFWFApO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZignKGV2YWwgJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaHJvdyBhd2F5IGV2YWwgaW5mb3JtYXRpb24gdW50aWwgd2UgaW1wbGVtZW50IHN0YWNrdHJhY2UuanMvc3RhY2tmcmFtZSM4XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL2V2YWwgY29kZS9nLCAnZXZhbCcpLnJlcGxhY2UoLyhcXChldmFsIGF0IFteXFwoKV0qKXwoXFwpXFwsLiokKS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnJlcGxhY2UoL15cXHMrLywgJycpLnJlcGxhY2UoL1xcKGV2YWwgY29kZS9nLCAnKCcpLnNwbGl0KC9cXHMrLykuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0b2tlbnMuam9pbignICcpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBfaW5kZXhPZihbJ2V2YWwnLCAnPGFub255bW91cz4nXSwgbG9jYXRpb25QYXJ0c1swXSkgPiAtMSA/IHVuZGVmaW5lZCA6IGxvY2F0aW9uUGFydHNbMF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoZnVuY3Rpb25OYW1lLCB1bmRlZmluZWQsIGZpbGVOYW1lLCBsb2NhdGlvblBhcnRzWzFdLCBsb2NhdGlvblBhcnRzWzJdLCBsaW5lKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlRkZPclNhZmFyaTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VGRk9yU2FmYXJpKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhbGluZS5tYXRjaChTQUZBUklfTkFUSVZFX0NPREVfUkVHRVhQKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gX21hcChmaWx0ZXJlZCwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGF3YXkgZXZhbCBpbmZvcm1hdGlvbiB1bnRpbCB3ZSBpbXBsZW1lbnQgc3RhY2t0cmFjZS5qcy9zdGFja2ZyYW1lIzhcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCcgPiBldmFsJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8gbGluZSAoXFxkKykoPzogPiBldmFsIGxpbmUgXFxkKykqID4gZXZhbFxcOlxcZCtcXDpcXGQrL2csICc6JDEnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCdAJykgPT09IC0xICYmIGxpbmUuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgZXZhbCBmcmFtZXMgb25seSBoYXZlIGZ1bmN0aW9uIG5hbWVzIGFuZCBub3RoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0ZyYW1lKGxpbmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnNwbGl0KCdAJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvblBhcnRzID0gdGhpcy5leHRyYWN0TG9jYXRpb24odG9rZW5zLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRva2Vucy5qb2luKCdAJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblBhcnRzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VPcGVyYTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYShlKSB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhY2t0cmFjZSB8fCAoZS5tZXNzYWdlLmluZGV4T2YoJ1xcbicpID4gLTEgJiZcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2Uuc3BsaXQoJ1xcbicpLmxlbmd0aCA+IGUuc3RhY2t0cmFjZS5zcGxpdCgnXFxuJykubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmE5KGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghZS5zdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmExMChlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTExKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlT3BlcmE5OiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhOShlKSB7XG4gICAgICAgICAgICB2YXIgbGluZVJFID0gL0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykvaTtcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IGUubWVzc2FnZS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAyLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGxpbmVSRS5leGVjKGxpbmVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFN0YWNrRnJhbWUodW5kZWZpbmVkLCB1bmRlZmluZWQsIG1hdGNoWzJdLCBtYXRjaFsxXSwgdW5kZWZpbmVkLCBsaW5lc1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU9wZXJhMTA6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlT3BlcmExMChlKSB7XG4gICAgICAgICAgICB2YXIgbGluZVJFID0gL0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykoPzo6IEluIGZ1bmN0aW9uIChcXFMrKSk/JC9pO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gZS5zdGFja3RyYWNlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbGluZVJFLmV4ZWMobGluZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTdGFja0ZyYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzNdIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIE9wZXJhIDEwLjY1KyBFcnJvci5zdGFjayB2ZXJ5IHNpbWlsYXIgdG8gRkYvU2FmYXJpXG4gICAgICAgIHBhcnNlT3BlcmExMTogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYTExKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpbmUubWF0Y2goRklSRUZPWF9TQUZBUklfU1RBQ0tfUkVHRVhQKSAmJiAhbGluZS5tYXRjaCgvXkVycm9yIGNyZWF0ZWQgYXQvKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gX21hcChmaWx0ZXJlZCwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBsaW5lLnNwbGl0KCdAJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbkNhbGwgPSAodG9rZW5zLnNoaWZ0KCkgfHwgJycpO1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBmdW5jdGlvbkNhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88YW5vbnltb3VzIGZ1bmN0aW9uKDogKFxcdyspKT8+LywgJyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXChbXlxcKV0qXFwpL2csICcnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3NSYXc7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uQ2FsbC5tYXRjaCgvXFwoKFteXFwpXSopXFwpLykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1JhdyA9IGZ1bmN0aW9uQ2FsbC5yZXBsYWNlKC9eW15cXChdK1xcKChbXlxcKV0qKVxcKSQvLCAnJDEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSAoYXJnc1JhdyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3NSYXcgPT09ICdbYXJndW1lbnRzIG5vdCBhdmFpbGFibGVdJykgP1xuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOiBhcmdzUmF3LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0ZyYW1lKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMV0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xufSkpO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGhlIEZPUk1BVF9CSU5BUlkgZm9ybWF0IHJlcHJlc2VudHMgU3BhbkNvbnRleHRzIGluIGFuIG9wYXF1ZSBiaW5hcnlcbiAqIGNhcnJpZXIuXG4gKlxuICogVHJhY2VyLmluamVjdCgpIHdpbGwgc2V0IHRoZSBidWZmZXIgZmllbGQgdG8gYW4gQXJyYXktbGlrZSAoQXJyYXksXG4gKiBBcnJheUJ1ZmZlciwgb3IgVHlwZWRCdWZmZXIpIG9iamVjdCBjb250YWluaW5nIHRoZSBpbmplY3RlZCBiaW5hcnkgZGF0YS5cbiAqIEFueSB2YWxpZCBPYmplY3QgY2FuIGJlIHVzZWQgYXMgbG9uZyBhcyB0aGUgYnVmZmVyIGZpZWxkIG9mIHRoZSBvYmplY3RcbiAqIGNhbiBiZSBzZXQuXG4gKlxuICogVHJhY2VyLmV4dHJhY3QoKSB3aWxsIGxvb2sgZm9yIGBjYXJyaWVyLmJ1ZmZlcmAsIGFuZCB0aGF0IGZpZWxkIGlzXG4gKiBleHBlY3RlZCB0byBiZSBhbiBBcnJheS1saWtlIG9iamVjdCAoQXJyYXksIEFycmF5QnVmZmVyLCBvclxuICogVHlwZWRCdWZmZXIpLlxuICovXG5leHBvcnRzLkZPUk1BVF9CSU5BUlkgPSAnYmluYXJ5Jztcbi8qKlxuICogVGhlIEZPUk1BVF9URVhUX01BUCBmb3JtYXQgcmVwcmVzZW50cyBTcGFuQ29udGV4dHMgdXNpbmcgYVxuICogc3RyaW5nLT5zdHJpbmcgbWFwIChiYWNrZWQgYnkgYSBKYXZhc2NyaXB0IE9iamVjdCkgYXMgYSBjYXJyaWVyLlxuICpcbiAqIE5PVEU6IFVubGlrZSBGT1JNQVRfSFRUUF9IRUFERVJTLCBGT1JNQVRfVEVYVF9NQVAgcGxhY2VzIG5vIHJlc3RyaWN0aW9uc1xuICogb24gdGhlIGNoYXJhY3RlcnMgdXNlZCBpbiBlaXRoZXIgdGhlIGtleXMgb3IgdGhlIHZhbHVlcyBvZiB0aGUgbWFwXG4gKiBlbnRyaWVzLlxuICpcbiAqIFRoZSBGT1JNQVRfVEVYVF9NQVAgY2FycmllciBtYXAgbWF5IGNvbnRhaW4gdW5yZWxhdGVkIGRhdGEgKGUuZy4sXG4gKiBhcmJpdHJhcnkgZ1JQQyBtZXRhZGF0YSk7IGFzIHN1Y2gsIHRoZSBUcmFjZXIgaW1wbGVtZW50YXRpb24gc2hvdWxkIHVzZVxuICogYSBwcmVmaXggb3Igb3RoZXIgY29udmVudGlvbiB0byBkaXN0aW5ndWlzaCBUcmFjZXItc3BlY2lmaWMga2V5OnZhbHVlXG4gKiBwYWlycy5cbiAqL1xuZXhwb3J0cy5GT1JNQVRfVEVYVF9NQVAgPSAndGV4dF9tYXAnO1xuLyoqXG4gKiBUaGUgRk9STUFUX0hUVFBfSEVBREVSUyBmb3JtYXQgcmVwcmVzZW50cyBTcGFuQ29udGV4dHMgdXNpbmcgYVxuICogY2hhcmFjdGVyLXJlc3RyaWN0ZWQgc3RyaW5nLT5zdHJpbmcgbWFwIChiYWNrZWQgYnkgYSBKYXZhc2NyaXB0IE9iamVjdClcbiAqIGFzIGEgY2Fycmllci5cbiAqXG4gKiBLZXlzIGFuZCB2YWx1ZXMgaW4gdGhlIEZPUk1BVF9IVFRQX0hFQURFUlMgY2FycmllciBtdXN0IGJlIHN1aXRhYmxlIGZvclxuICogdXNlIGFzIEhUVFAgaGVhZGVycyAod2l0aG91dCBtb2RpZmljYXRpb24gb3IgZnVydGhlciBlc2NhcGluZykuIFRoYXQgaXMsXG4gKiB0aGUga2V5cyBoYXZlIGEgZ3JlYXRseSByZXN0cmljdGVkIGNoYXJhY3RlciBzZXQsIGNhc2luZyBmb3IgdGhlIGtleXNcbiAqIG1heSBub3QgYmUgcHJlc2VydmVkIGJ5IHZhcmlvdXMgaW50ZXJtZWRpYXJpZXMsIGFuZCB0aGUgdmFsdWVzIHNob3VsZCBiZVxuICogVVJMLWVzY2FwZWQuXG4gKlxuICogVGhlIEZPUk1BVF9IVFRQX0hFQURFUlMgY2FycmllciBtYXAgbWF5IGNvbnRhaW4gdW5yZWxhdGVkIGRhdGEgKGUuZy4sXG4gKiBhcmJpdHJhcnkgSFRUUCBoZWFkZXJzKTsgYXMgc3VjaCwgdGhlIFRyYWNlciBpbXBsZW1lbnRhdGlvbiBzaG91bGQgdXNlIGFcbiAqIHByZWZpeCBvciBvdGhlciBjb252ZW50aW9uIHRvIGRpc3Rpbmd1aXNoIFRyYWNlci1zcGVjaWZpYyBrZXk6dmFsdWVcbiAqIHBhaXJzLlxuICovXG5leHBvcnRzLkZPUk1BVF9IVFRQX0hFQURFUlMgPSAnaHR0cF9oZWFkZXJzJztcbi8qKlxuICogQSBTcGFuIG1heSBiZSB0aGUgXCJjaGlsZCBvZlwiIGEgcGFyZW50IFNwYW4uIEluIGEg4oCcY2hpbGQgb2bigJ0gcmVmZXJlbmNlLFxuICogdGhlIHBhcmVudCBTcGFuIGRlcGVuZHMgb24gdGhlIGNoaWxkIFNwYW4gaW4gc29tZSBjYXBhY2l0eS5cbiAqXG4gKiBTZWUgbW9yZSBhYm91dCByZWZlcmVuY2UgdHlwZXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL29wZW50cmFjaW5nL3NwZWNpZmljYXRpb25cbiAqL1xuZXhwb3J0cy5SRUZFUkVOQ0VfQ0hJTERfT0YgPSAnY2hpbGRfb2YnO1xuLyoqXG4gKiBTb21lIHBhcmVudCBTcGFucyBkbyBub3QgZGVwZW5kIGluIGFueSB3YXkgb24gdGhlIHJlc3VsdCBvZiB0aGVpciBjaGlsZFxuICogU3BhbnMuIEluIHRoZXNlIGNhc2VzLCB3ZSBzYXkgbWVyZWx5IHRoYXQgdGhlIGNoaWxkIFNwYW4g4oCcZm9sbG93cyBmcm9t4oCdXG4gKiB0aGUgcGFyZW50IFNwYW4gaW4gYSBjYXVzYWwgc2Vuc2UuXG4gKlxuICogU2VlIG1vcmUgYWJvdXQgcmVmZXJlbmNlIHR5cGVzIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVudHJhY2luZy9zcGVjaWZpY2F0aW9uXG4gKi9cbmV4cG9ydHMuUkVGRVJFTkNFX0ZPTExPV1NfRlJPTSA9ICdmb2xsb3dzX2Zyb20nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciByZWZlcmVuY2VfMSA9IHJlcXVpcmUoXCIuL3JlZmVyZW5jZVwiKTtcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi9zcGFuXCIpO1xuLyoqXG4gKiBSZXR1cm4gYSBuZXcgUkVGRVJFTkNFX0NISUxEX09GIHJlZmVyZW5jZS5cbiAqXG4gKiBAcGFyYW0ge1NwYW5Db250ZXh0fSBzcGFuQ29udGV4dCAtIHRoZSBwYXJlbnQgU3BhbkNvbnRleHQgaW5zdGFuY2UgdG9cbiAqICAgICAgICByZWZlcmVuY2UuXG4gKiBAcmV0dXJuIGEgUkVGRVJFTkNFX0NISUxEX09GIHJlZmVyZW5jZSBwb2ludGluZyB0byBgc3BhbkNvbnRleHRgXG4gKi9cbmZ1bmN0aW9uIGNoaWxkT2Yoc3BhbkNvbnRleHQpIHtcbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBwYXNzIGEgU3BhbiBpbnN0ZWFkIG9mIGEgU3BhbkNvbnRleHRcbiAgICBpZiAoc3BhbkNvbnRleHQgaW5zdGFuY2VvZiBzcGFuXzEuZGVmYXVsdCkge1xuICAgICAgICBzcGFuQ29udGV4dCA9IHNwYW5Db250ZXh0LmNvbnRleHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyByZWZlcmVuY2VfMS5kZWZhdWx0KENvbnN0YW50cy5SRUZFUkVOQ0VfQ0hJTERfT0YsIHNwYW5Db250ZXh0KTtcbn1cbmV4cG9ydHMuY2hpbGRPZiA9IGNoaWxkT2Y7XG4vKipcbiAqIFJldHVybiBhIG5ldyBSRUZFUkVOQ0VfRk9MTE9XU19GUk9NIHJlZmVyZW5jZS5cbiAqXG4gKiBAcGFyYW0ge1NwYW5Db250ZXh0fSBzcGFuQ29udGV4dCAtIHRoZSBwYXJlbnQgU3BhbkNvbnRleHQgaW5zdGFuY2UgdG9cbiAqICAgICAgICByZWZlcmVuY2UuXG4gKiBAcmV0dXJuIGEgUkVGRVJFTkNFX0ZPTExPV1NfRlJPTSByZWZlcmVuY2UgcG9pbnRpbmcgdG8gYHNwYW5Db250ZXh0YFxuICovXG5mdW5jdGlvbiBmb2xsb3dzRnJvbShzcGFuQ29udGV4dCkge1xuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHBhc3MgYSBTcGFuIGluc3RlYWQgb2YgYSBTcGFuQ29udGV4dFxuICAgIGlmIChzcGFuQ29udGV4dCBpbnN0YW5jZW9mIHNwYW5fMS5kZWZhdWx0KSB7XG4gICAgICAgIHNwYW5Db250ZXh0ID0gc3BhbkNvbnRleHQuY29udGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHJlZmVyZW5jZV8xLmRlZmF1bHQoQ29uc3RhbnRzLlJFRkVSRU5DRV9GT0xMT1dTX0ZST00sIHNwYW5Db250ZXh0KTtcbn1cbmV4cG9ydHMuZm9sbG93c0Zyb20gPSBmb2xsb3dzRnJvbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZ1bmN0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi9zcGFuXCIpO1xudmFyIHNwYW5fY29udGV4dF8xID0gcmVxdWlyZShcIi4vc3Bhbl9jb250ZXh0XCIpO1xudmFyIHRyYWNlcl8xID0gcmVxdWlyZShcIi4vdHJhY2VyXCIpO1xuZXhwb3J0cy50cmFjZXIgPSBudWxsO1xuZXhwb3J0cy5zcGFuQ29udGV4dCA9IG51bGw7XG5leHBvcnRzLnNwYW4gPSBudWxsO1xuLy8gRGVmZXJyZWQgaW5pdGlhbGl6YXRpb24gdG8gYXZvaWQgYSBkZXBlbmRlbmN5IGN5Y2xlIHdoZXJlIFRyYWNlciBkZXBlbmRzIG9uXG4vLyBTcGFuIHdoaWNoIGRlcGVuZHMgb24gdGhlIG5vb3AgdHJhY2VyLlxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBleHBvcnRzLnRyYWNlciA9IG5ldyB0cmFjZXJfMS5kZWZhdWx0KCk7XG4gICAgZXhwb3J0cy5zcGFuID0gbmV3IHNwYW5fMS5kZWZhdWx0KCk7XG4gICAgZXhwb3J0cy5zcGFuQ29udGV4dCA9IG5ldyBzcGFuX2NvbnRleHRfMS5kZWZhdWx0KCk7XG59XG5leHBvcnRzLmluaXRpYWxpemUgPSBpbml0aWFsaXplO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi9zcGFuXCIpO1xuLyoqXG4gKiBSZWZlcmVuY2UgcGFpcnMgYSByZWZlcmVuY2UgdHlwZSBjb25zdGFudCAoZS5nLiwgUkVGRVJFTkNFX0NISUxEX09GIG9yXG4gKiBSRUZFUkVOQ0VfRk9MTE9XU19GUk9NKSB3aXRoIHRoZSBTcGFuQ29udGV4dCBpdCBwb2ludHMgdG8uXG4gKlxuICogU2VlIHRoZSBleHBvcnRlZCBjaGlsZE9mKCkgYW5kIGZvbGxvd3NGcm9tKCkgZnVuY3Rpb25zIGF0IHRoZSBwYWNrYWdlIGxldmVsLlxuICovXG52YXIgUmVmZXJlbmNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgUmVmZXJlbmNlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0aGUgUmVmZXJlbmNlIHR5cGUgY29uc3RhbnQgKGUuZy4sXG4gICAgICogICAgICAgIFJFRkVSRU5DRV9DSElMRF9PRiBvciBSRUZFUkVOQ0VfRk9MTE9XU19GUk9NKS5cbiAgICAgKiBAcGFyYW0ge1NwYW5Db250ZXh0fSByZWZlcmVuY2VkQ29udGV4dCAtIHRoZSBTcGFuQ29udGV4dCBiZWluZyByZWZlcnJlZFxuICAgICAqICAgICAgICB0by4gQXMgYSBjb252ZW5pZW5jZSwgYSBTcGFuIGluc3RhbmNlIG1heSBiZSBwYXNzZWQgaW4gaW5zdGVhZFxuICAgICAqICAgICAgICAoaW4gd2hpY2ggY2FzZSBpdHMgLmNvbnRleHQoKSBpcyB1c2VkIGhlcmUpLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZSh0eXBlLCByZWZlcmVuY2VkQ29udGV4dCkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlZENvbnRleHQgPSAocmVmZXJlbmNlZENvbnRleHQgaW5zdGFuY2VvZiBzcGFuXzEuZGVmYXVsdCA/XG4gICAgICAgICAgICByZWZlcmVuY2VkQ29udGV4dC5jb250ZXh0KCkgOlxuICAgICAgICAgICAgcmVmZXJlbmNlZENvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBSZWZlcmVuY2UgdHlwZSAoZS5nLiwgUkVGRVJFTkNFX0NISUxEX09GIG9yXG4gICAgICogICAgICAgICBSRUZFUkVOQ0VfRk9MTE9XU19GUk9NKS5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3BhbkNvbnRleHR9IFRoZSBTcGFuQ29udGV4dCBiZWluZyByZWZlcnJlZCB0byAoZS5nLiwgdGhlXG4gICAgICogICAgICAgICBwYXJlbnQgaW4gYSBSRUZFUkVOQ0VfQ0hJTERfT0YgUmVmZXJlbmNlKS5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLnJlZmVyZW5jZWRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmZXJlbmNlZENvbnRleHQ7XG4gICAgfTtcbiAgICByZXR1cm4gUmVmZXJlbmNlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZmVyZW5jZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZmVyZW5jZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub29wID0gcmVxdWlyZShcIi4vbm9vcFwiKTtcbi8qKlxuICogU3BhbiByZXByZXNlbnRzIGEgbG9naWNhbCB1bml0IG9mIHdvcmsgYXMgcGFydCBvZiBhIGJyb2FkZXIgVHJhY2UuIEV4YW1wbGVzXG4gKiBvZiBzcGFuIG1pZ2h0IGluY2x1ZGUgcmVtb3RlIHByb2NlZHVyZSBjYWxscyBvciBhIGluLXByb2Nlc3MgZnVuY3Rpb24gY2FsbHNcbiAqIHRvIHN1Yi1jb21wb25lbnRzLiBBIFRyYWNlIGhhcyBhIHNpbmdsZSwgdG9wLWxldmVsIFwicm9vdFwiIFNwYW4gdGhhdCBpbiB0dXJuXG4gKiBtYXkgaGF2ZSB6ZXJvIG9yIG1vcmUgY2hpbGQgU3BhbnMsIHdoaWNoIGluIHR1cm4gbWF5IGhhdmUgY2hpbGRyZW4uXG4gKi9cbnZhciBTcGFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNwYW4oKSB7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvLyBPcGVuVHJhY2luZyBBUEkgbWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBTcGFuQ29udGV4dCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoaXMgU3Bhbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NwYW5Db250ZXh0fVxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLmNvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBUcmFjZXIgb2JqZWN0IHVzZWQgdG8gY3JlYXRlIHRoaXMgU3Bhbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1RyYWNlcn1cbiAgICAgKi9cbiAgICBTcGFuLnByb3RvdHlwZS50cmFjZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFjZXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHN0cmluZyBuYW1lIGZvciB0aGUgbG9naWNhbCBvcGVyYXRpb24gdGhpcyBzcGFuIHJlcHJlc2VudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLnNldE9wZXJhdGlvbk5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9zZXRPcGVyYXRpb25OYW1lKG5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgYSBrZXk6dmFsdWUgcGFpciBvbiB0aGlzIFNwYW4gdGhhdCBhbHNvIHByb3BhZ2F0ZXMgdG8gZnV0dXJlXG4gICAgICogY2hpbGRyZW4gb2YgdGhlIGFzc29jaWF0ZWQgU3Bhbi5cbiAgICAgKlxuICAgICAqIHNldEJhZ2dhZ2VJdGVtKCkgZW5hYmxlcyBwb3dlcmZ1bCBmdW5jdGlvbmFsaXR5IGdpdmVuIGEgZnVsbC1zdGFja1xuICAgICAqIG9wZW50cmFjaW5nIGludGVncmF0aW9uIChlLmcuLCBhcmJpdHJhcnkgYXBwbGljYXRpb24gZGF0YSBmcm9tIGEgd2ViXG4gICAgICogY2xpZW50IGNhbiBtYWtlIGl0LCB0cmFuc3BhcmVudGx5LCBhbGwgdGhlIHdheSBpbnRvIHRoZSBkZXB0aHMgb2YgYVxuICAgICAqIHN0b3JhZ2Ugc3lzdGVtKSwgYW5kIHdpdGggaXQgc29tZSBwb3dlcmZ1bCBjb3N0czogdXNlIHRoaXMgZmVhdHVyZSB3aXRoXG4gICAgICogY2FyZS5cbiAgICAgKlxuICAgICAqIElNUE9SVEFOVCBOT1RFICMxOiBzZXRCYWdnYWdlSXRlbSgpIHdpbGwgb25seSBwcm9wYWdhdGUgYmFnZ2FnZSBpdGVtcyB0b1xuICAgICAqICpmdXR1cmUqIGNhdXNhbCBkZXNjZW5kYW50cyBvZiB0aGUgYXNzb2NpYXRlZCBTcGFuLlxuICAgICAqXG4gICAgICogSU1QT1JUQU5UIE5PVEUgIzI6IFVzZSB0aGlzIHRob3VnaHRmdWxseSBhbmQgd2l0aCBjYXJlLiBFdmVyeSBrZXkgYW5kXG4gICAgICogdmFsdWUgaXMgY29waWVkIGludG8gZXZlcnkgbG9jYWwgKmFuZCByZW1vdGUqIGNoaWxkIG9mIHRoZSBhc3NvY2lhdGVkXG4gICAgICogU3BhbiwgYW5kIHRoYXQgY2FuIGFkZCB1cCB0byBhIGxvdCBvZiBuZXR3b3JrIGFuZCBjcHUgb3ZlcmhlYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuc2V0QmFnZ2FnZUl0ZW0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZXRCYWdnYWdlSXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmb3IgYSBiYWdnYWdlIGl0ZW0gZ2l2ZW4gaXRzIGtleS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG4gICAgICogICAgICAgICBUaGUga2V5IGZvciB0aGUgZ2l2ZW4gdHJhY2UgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiAgICAgICAgIFN0cmluZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleSwgb3IgdW5kZWZpbmVkIGlmIHRoZSBrZXkgZG9lcyBub3RcbiAgICAgKiAgICAgICAgIGNvcnJlc3BvbmQgdG8gYSBzZXQgdHJhY2UgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLmdldEJhZ2dhZ2VJdGVtID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QmFnZ2FnZUl0ZW0oa2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW5nbGUgdGFnIHRvIHRoZSBzcGFuLiAgU2VlIGBhZGRUYWdzKClgIGZvciBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLnNldFRhZyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIC8vIE5PVEU6IHRoZSBjYWxsIGlzIG5vcm1hbGl6ZWQgdG8gYSBjYWxsIHRvIF9hZGRUYWdzKClcbiAgICAgICAgdGhpcy5fYWRkVGFncygoX2EgPSB7fSwgX2Fba2V5XSA9IHZhbHVlLCBfYSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdmFyIF9hO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4ga2V5IHZhbHVlIHBhaXJzIHRvIHRoZSBzZXQgb2Ygc3BhbiB0YWdzLlxuICAgICAqXG4gICAgICogTXVsdGlwbGUgY2FsbHMgdG8gYWRkVGFncygpIHJlc3VsdHMgaW4gdGhlIHRhZ3MgYmVpbmcgdGhlIHN1cGVyc2V0IG9mXG4gICAgICogYWxsIGNhbGxzLlxuICAgICAqXG4gICAgICogVGhlIGJlaGF2aW9yIG9mIHNldHRpbmcgdGhlIHNhbWUga2V5IG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHNwYW5cbiAgICAgKiBpcyB1bmRlZmluZWQuXG4gICAgICpcbiAgICAgKiBUaGUgc3VwcG9ydGVkIHR5cGUgb2YgdGhlIHZhbHVlcyBpcyBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQuXG4gICAgICogSW1wbGVtZW50YXRpb25zIGFyZSBleHBlY3RlZCB0byBzYWZlbHkgaGFuZGxlIGFsbCB0eXBlcyBvZiB2YWx1ZXMgYnV0XG4gICAgICogbWF5IGNob29zZSB0byBpZ25vcmUgdW5yZWNvZ25pemVkIC8gdW5oYW5kbGUtYWJsZSB2YWx1ZXMgKGUuZy4gb2JqZWN0c1xuICAgICAqIHdpdGggY3ljbGljIHJlZmVyZW5jZXMsIGZ1bmN0aW9uIG9iamVjdHMpLlxuICAgICAqXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgU3Bhbi5wcm90b3R5cGUuYWRkVGFncyA9IGZ1bmN0aW9uIChrZXlWYWx1ZU1hcCkge1xuICAgICAgICB0aGlzLl9hZGRUYWdzKGtleVZhbHVlTWFwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsb2cgcmVjb3JkIHRvIHRoaXMgU3Bhbiwgb3B0aW9uYWxseSBhdCBhIHVzZXItcHJvdmlkZWQgdGltZXN0YW1wLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgc3Bhbi5sb2coe1xuICAgICAqICAgICAgICAgc2l6ZTogcnBjLnNpemUoKSwgIC8vIG51bWVyaWMgdmFsdWVcbiAgICAgKiAgICAgICAgIFVSSTogcnBjLlVSSSgpLCAgLy8gc3RyaW5nIHZhbHVlXG4gICAgICogICAgICAgICBwYXlsb2FkOiBycGMucGF5bG9hZCgpLCAgLy8gT2JqZWN0IHZhbHVlXG4gICAgICogICAgICAgICBcImtleXMgY2FuIGJlIGFyYml0cmFyeSBzdHJpbmdzXCI6IHJwYy5mb28oKSxcbiAgICAgKiAgICAgfSk7XG4gICAgICpcbiAgICAgKiAgICAgc3Bhbi5sb2coe1xuICAgICAqICAgICAgICAgXCJlcnJvci5kZXNjcmlwdGlvblwiOiBzb21lRXJyb3IuZGVzY3JpcHRpb24oKSxcbiAgICAgKiAgICAgfSwgc29tZUVycm9yLnRpbWVzdGFtcE1pbGxpcygpKTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXlWYWx1ZVBhaXJzXG4gICAgICogICAgICAgIEFuIG9iamVjdCBtYXBwaW5nIHN0cmluZyBrZXlzIHRvIGFyYml0cmFyeSB2YWx1ZSB0eXBlcy4gQWxsXG4gICAgICogICAgICAgIFRyYWNlciBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHN1cHBvcnQgYm9vbCwgc3RyaW5nLCBhbmQgbnVtZXJpY1xuICAgICAqICAgICAgICB2YWx1ZSB0eXBlcywgYW5kIHNvbWUgbWF5IGFsc28gc3VwcG9ydCBPYmplY3QgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKiAgICAgICAgQW4gb3B0aW9uYWwgcGFyYW1ldGVyIHNwZWNpZnlpbmcgdGhlIHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiAgICAgICAgc2luY2UgdGhlIFVuaXggZXBvY2guIEZyYWN0aW9uYWwgdmFsdWVzIGFyZSBhbGxvd2VkIHNvIHRoYXRcbiAgICAgKiAgICAgICAgdGltZXN0YW1wcyB3aXRoIHN1Yi1taWxsaXNlY29uZCBhY2N1cmFjeSBjYW4gYmUgcmVwcmVzZW50ZWQuIElmXG4gICAgICogICAgICAgIG5vdCBzcGVjaWZpZWQsIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBleHBlY3RlZCB0byB1c2UgaXRzIG5vdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSBjYWxsLlxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChrZXlWYWx1ZVBhaXJzLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdGhpcy5fbG9nKGtleVZhbHVlUGFpcnMsIHRpbWVzdGFtcCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogREVQUkVDQVRFRFxuICAgICAqL1xuICAgIFNwYW4ucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgcGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9nKHsgZXZlbnQ6IGV2ZW50TmFtZSwgcGF5bG9hZDogcGF5bG9hZCB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuZCB0aW1lc3RhbXAgYW5kIGZpbmFsaXplcyBTcGFuIHN0YXRlLlxuICAgICAqXG4gICAgICogV2l0aCB0aGUgZXhjZXB0aW9uIG9mIGNhbGxzIHRvIFNwYW4uY29udGV4dCgpICh3aGljaCBhcmUgYWx3YXlzIGFsbG93ZWQpLFxuICAgICAqIGZpbmlzaCgpIG11c3QgYmUgdGhlIGxhc3QgY2FsbCBtYWRlIHRvIGFueSBzcGFuIGluc3RhbmNlLCBhbmQgdG8gZG9cbiAgICAgKiBvdGhlcndpc2UgbGVhZHMgdG8gdW5kZWZpbmVkIGJlaGF2aW9yLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBmaW5pc2hUaW1lXG4gICAgICogICAgICAgICBPcHRpb25hbCBmaW5pc2ggdGltZSBpbiBtaWxsaXNlY29uZHMgYXMgYSBVbml4IHRpbWVzdGFtcC4gRGVjaW1hbFxuICAgICAqICAgICAgICAgdmFsdWVzIGFyZSBzdXBwb3J0ZWQgZm9yIHRpbWVzdGFtcHMgd2l0aCBzdWItbWlsbGlzZWNvbmQgYWNjdXJhY3kuXG4gICAgICogICAgICAgICBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgY3VycmVudCB0aW1lIChhcyBkZWZpbmVkIGJ5IHRoZVxuICAgICAqICAgICAgICAgaW1wbGVtZW50YXRpb24pIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBTcGFuLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoZmluaXNoVGltZSkge1xuICAgICAgICB0aGlzLl9maW5pc2goZmluaXNoVGltZSk7XG4gICAgICAgIC8vIERvIG5vdCByZXR1cm4gYHRoaXNgLiBUaGUgU3BhbiBnZW5lcmFsbHkgc2hvdWxkIG5vdCBiZSB1c2VkIGFmdGVyIGl0XG4gICAgICAgIC8vIGlzIGZpbmlzaGVkIHNvIGNoYWluaW5nIGlzIG5vdCBkZXNpcmVkIGluIHRoaXMgY29udGV4dC5cbiAgICB9O1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvLyBEZXJpdmVkIGNsYXNzZXMgY2FuIGNob29zZSB0byBpbXBsZW1lbnQgdGhlIGJlbG93XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIEJ5IGRlZmF1bHQgcmV0dXJucyBhIG5vLW9wIFNwYW5Db250ZXh0LlxuICAgIFNwYW4ucHJvdG90eXBlLl9jb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9vcC5zcGFuQ29udGV4dDtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgcmV0dXJucyBhIG5vLW9wIHRyYWNlci5cbiAgICAvL1xuICAgIC8vIFRoZSBiYXNlIGNsYXNzIGNvdWxkIHN0b3JlIHRoZSB0cmFjZXIgdGhhdCBjcmVhdGVkIGl0LCBidXQgaXQgZG9lcyBub3RcbiAgICAvLyBpbiBvcmRlciB0byBlbnN1cmUgdGhlIG5vLW9wIHNwYW4gaW1wbGVtZW50YXRpb24gaGFzIHplcm8gbWVtYmVycyxcbiAgICAvLyB3aGljaCBhbGxvd3MgVjggdG8gYWdncmVzc2l2ZWx5IG9wdGltaXplIGNhbGxzIHRvIHN1Y2ggb2JqZWN0cy5cbiAgICBTcGFuLnByb3RvdHlwZS5fdHJhY2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9vcC50cmFjZXI7XG4gICAgfTtcbiAgICAvLyBCeSBkZWZhdWx0IGRvZXMgbm90aGluZ1xuICAgIFNwYW4ucHJvdG90eXBlLl9zZXRPcGVyYXRpb25OYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgZG9lcyBub3RoaW5nXG4gICAgU3Bhbi5wcm90b3R5cGUuX3NldEJhZ2dhZ2VJdGVtID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgZG9lcyBub3RoaW5nXG4gICAgU3Bhbi5wcm90b3R5cGUuX2dldEJhZ2dhZ2VJdGVtID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICAvL1xuICAgIC8vIE5PVEU6IGJvdGggc2V0VGFnKCkgYW5kIGFkZFRhZ3MoKSBtYXAgdG8gdGhpcyBmdW5jdGlvbi4ga2V5VmFsdWVQYWlyc1xuICAgIC8vIHdpbGwgYWx3YXlzIGJlIGFuIGFzc29jaWF0aXZlIGFycmF5LlxuICAgIFNwYW4ucHJvdG90eXBlLl9hZGRUYWdzID0gZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMpIHtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgZG9lcyBub3RoaW5nXG4gICAgU3Bhbi5wcm90b3R5cGUuX2xvZyA9IGZ1bmN0aW9uIChrZXlWYWx1ZVBhaXJzLCB0aW1lc3RhbXApIHtcbiAgICB9O1xuICAgIC8vIEJ5IGRlZmF1bHQgZG9lcyBub3RoaW5nXG4gICAgLy9cbiAgICAvLyBmaW5pc2hUaW1lIGlzIGV4cGVjdGVkIHRvIGJlIGVpdGhlciBhIG51bWJlciBvciB1bmRlZmluZWQuXG4gICAgU3Bhbi5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uIChmaW5pc2hUaW1lKSB7XG4gICAgfTtcbiAgICByZXR1cm4gU3Bhbjtcbn0oKSk7XG5leHBvcnRzLlNwYW4gPSBTcGFuO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3Bhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFNwYW5Db250ZXh0IHJlcHJlc2VudHMgU3BhbiBzdGF0ZSB0aGF0IG11c3QgcHJvcGFnYXRlIHRvIGRlc2NlbmRhbnQgU3BhbnNcbiAqIGFuZCBhY3Jvc3MgcHJvY2VzcyBib3VuZGFyaWVzLlxuICpcbiAqIFNwYW5Db250ZXh0IGlzIGxvZ2ljYWxseSBkaXZpZGVkIGludG8gdHdvIHBpZWNlczogdGhlIHVzZXItbGV2ZWwgXCJCYWdnYWdlXCJcbiAqIChzZWUgc2V0QmFnZ2FnZUl0ZW0gYW5kIGdldEJhZ2dhZ2VJdGVtKSB0aGF0IHByb3BhZ2F0ZXMgYWNyb3NzIFNwYW5cbiAqIGJvdW5kYXJpZXMgYW5kIGFueSBUcmFjZXItaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgZmllbGRzIHRoYXQgYXJlIG5lZWRlZCB0b1xuICogaWRlbnRpZnkgb3Igb3RoZXJ3aXNlIGNvbnRleHR1YWxpemUgdGhlIGFzc29jaWF0ZWQgU3BhbiBpbnN0YW5jZSAoZS5nLiwgYVxuICogPHRyYWNlX2lkLCBzcGFuX2lkLCBzYW1wbGVkPiB0dXBsZSkuXG4gKi9cbnZhciBTcGFuQ29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTcGFuQ29udGV4dCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFNwYW5Db250ZXh0O1xufSgpKTtcbmV4cG9ydHMuU3BhbkNvbnRleHQgPSBTcGFuQ29udGV4dDtcbmV4cG9ydHMuZGVmYXVsdCA9IFNwYW5Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbl9jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZ1bmN0aW9ucyA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uc1wiKTtcbnZhciBOb29wID0gcmVxdWlyZShcIi4vbm9vcFwiKTtcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi9zcGFuXCIpO1xuLyoqXG4gKiBUcmFjZXIgaXMgdGhlIGVudHJ5LXBvaW50IGJldHdlZW4gdGhlIGluc3RydW1lbnRhdGlvbiBBUEkgYW5kIHRoZSB0cmFjaW5nXG4gKiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGUgZGVmYXVsdCBvYmplY3QgYWN0cyBhcyBhIG5vLW9wIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIE5vdGUgdG8gaW1wbGVtZW50YXRvcnM6IGRlcml2ZWQgY2xhc3NlcyBjYW4gY2hvb3NlIHRvIGRpcmVjdGx5IGltcGxlbWVudCB0aGVcbiAqIG1ldGhvZHMgaW4gdGhlIFwiT3BlblRyYWNpbmcgQVBJIG1ldGhvZHNcIiBzZWN0aW9uLCBvciBvcHRpb25hbGx5IHRoZSBzdWJzZXQgb2ZcbiAqIHVuZGVyc2NvcmUtcHJlZml4ZWQgbWV0aG9kcyB0byBwaWNrIHVwIHRoZSBhcmd1bWVudCBjaGVja2luZyBhbmQgaGFuZGxpbmdcbiAqIGF1dG9tYXRpY2FsbHkgZnJvbSB0aGUgYmFzZSBjbGFzcy5cbiAqL1xudmFyIFRyYWNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFjZXIoKSB7XG4gICAgfVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvLyBPcGVuVHJhY2luZyBBUEkgbWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvKipcbiAgICAgKiBTdGFydHMgYW5kIHJldHVybnMgYSBuZXcgU3BhbiByZXByZXNlbnRpbmcgYSBsb2dpY2FsIHVuaXQgb2Ygd29yay5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgIC8vIFN0YXJ0IGEgbmV3IChwYXJlbnRsZXNzKSByb290IFNwYW46XG4gICAgICogICAgIHZhciBwYXJlbnQgPSBUcmFjZXIuc3RhcnRTcGFuKCdEb1dvcmsnKTtcbiAgICAgKlxuICAgICAqICAgICAvLyBTdGFydCBhIG5ldyAoY2hpbGQpIFNwYW46XG4gICAgICogICAgIHZhciBjaGlsZCA9IFRyYWNlci5zdGFydFNwYW4oJ2xvYWQtZnJvbS1kYicsIHtcbiAgICAgKiAgICAgICAgIGNoaWxkT2Y6IHBhcmVudC5jb250ZXh0KCksXG4gICAgICogICAgIH0pO1xuICAgICAqXG4gICAgICogICAgIC8vIFN0YXJ0IGEgbmV3IGFzeW5jIChGb2xsb3dzRnJvbSkgU3BhbjpcbiAgICAgKiAgICAgdmFyIGNoaWxkID0gVHJhY2VyLnN0YXJ0U3BhbignYXN5bmMtY2FjaGUtd3JpdGUnLCB7XG4gICAgICogICAgICAgICByZWZlcmVuY2VzOiBbXG4gICAgICogICAgICAgICAgICAgb3BlbnRyYWNpbmcuZm9sbG93c0Zyb20ocGFyZW50LmNvbnRleHQoKSlcbiAgICAgKiAgICAgICAgIF0sXG4gICAgICogICAgIH0pO1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIChSRVFVSVJFRCkuXG4gICAgICogQHBhcmFtIHtTcGFuT3B0aW9uc30gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgc3Bhbi5cbiAgICAgKiBAcmV0dXJuIHtTcGFufSAtIGEgbmV3IFNwYW4gb2JqZWN0LlxuICAgICAqL1xuICAgIFRyYWNlci5wcm90b3R5cGUuc3RhcnRTcGFuID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgLy8gQ29udmVydCBvcHRpb25zLmNoaWxkT2YgdG8gZmllbGRzLnJlZmVyZW5jZXMgYXMgbmVlZGVkLlxuICAgICAgICBpZiAob3B0aW9ucy5jaGlsZE9mKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGZyb20gYSBTcGFuIG9yIGEgU3BhbkNvbnRleHQgaW50byBhIFJlZmVyZW5jZS5cbiAgICAgICAgICAgIHZhciBjaGlsZE9mID0gRnVuY3Rpb25zLmNoaWxkT2Yob3B0aW9ucy5jaGlsZE9mKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlZmVyZW5jZXMucHVzaChjaGlsZE9mKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlcyA9IFtjaGlsZE9mXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSAob3B0aW9ucy5jaGlsZE9mKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRTcGFuKG5hbWUsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5qZWN0cyB0aGUgZ2l2ZW4gU3BhbkNvbnRleHQgaW5zdGFuY2UgZm9yIGNyb3NzLXByb2Nlc3MgcHJvcGFnYXRpb25cbiAgICAgKiB3aXRoaW4gYGNhcnJpZXJgLiBUaGUgZXhwZWN0ZWQgdHlwZSBvZiBgY2FycmllcmAgZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2ZcbiAgICAgKiBgZm9ybWF0LlxuICAgICAqXG4gICAgICogT3BlblRyYWNpbmcgZGVmaW5lcyBhIGNvbW1vbiBzZXQgb2YgYGZvcm1hdGAgdmFsdWVzIChzZWVcbiAgICAgKiBGT1JNQVRfVEVYVF9NQVAsIEZPUk1BVF9IVFRQX0hFQURFUlMsIGFuZCBGT1JNQVRfQklOQVJZKSwgYW5kIGVhY2ggaGFzXG4gICAgICogYW4gZXhwZWN0ZWQgY2FycmllciB0eXBlLlxuICAgICAqXG4gICAgICogQ29uc2lkZXIgdGhpcyBwc2V1ZG9jb2RlIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgdmFyIGNsaWVudFNwYW4gPSAuLi47XG4gICAgICogICAgIC4uLlxuICAgICAqICAgICAvLyBJbmplY3QgY2xpZW50U3BhbiBpbnRvIGEgdGV4dCBjYXJyaWVyLlxuICAgICAqICAgICB2YXIgaGVhZGVyc0NhcnJpZXIgPSB7fTtcbiAgICAgKiAgICAgVHJhY2VyLmluamVjdChjbGllbnRTcGFuLmNvbnRleHQoKSwgVHJhY2VyLkZPUk1BVF9IVFRQX0hFQURFUlMsIGhlYWRlcnNDYXJyaWVyKTtcbiAgICAgKiAgICAgLy8gSW5jb3Jwb3JhdGUgdGhlIHRleHRDYXJyaWVyIGludG8gdGhlIG91dGJvdW5kIEhUVFAgcmVxdWVzdCBoZWFkZXJcbiAgICAgKiAgICAgLy8gbWFwLlxuICAgICAqICAgICBPYmplY3QuYXNzaWduKG91dGJvdW5kSFRUUFJlcS5oZWFkZXJzLCBoZWFkZXJzQ2Fycmllcik7XG4gICAgICogICAgIC8vIC4uLiBzZW5kIHRoZSBodHRwUmVxXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTcGFuQ29udGV4dH0gc3BhbkNvbnRleHQgLSB0aGUgU3BhbkNvbnRleHQgdG8gaW5qZWN0IGludG8gdGhlXG4gICAgICogICAgICAgICBjYXJyaWVyIG9iamVjdC4gQXMgYSBjb252ZW5pZW5jZSwgYSBTcGFuIGluc3RhbmNlIG1heSBiZSBwYXNzZWRcbiAgICAgKiAgICAgICAgIGluIGluc3RlYWQgKGluIHdoaWNoIGNhc2UgaXRzIC5jb250ZXh0KCkgaXMgdXNlZCBmb3IgdGhlXG4gICAgICogICAgICAgICBpbmplY3QoKSkuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBmb3JtYXQgLSB0aGUgZm9ybWF0IG9mIHRoZSBjYXJyaWVyLlxuICAgICAqIEBwYXJhbSAge2FueX0gY2FycmllciAtIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGNob3NlbiBgZm9ybWF0YFxuICAgICAqICAgICAgICAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGNhcnJpZXIgb2JqZWN0LlxuICAgICAqL1xuICAgIFRyYWNlci5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gKHNwYW5Db250ZXh0LCBmb3JtYXQsIGNhcnJpZXIpIHtcbiAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gcGFzcyBhIFNwYW4gaW5zdGVhZCBvZiBhIFNwYW5Db250ZXh0XG4gICAgICAgIGlmIChzcGFuQ29udGV4dCBpbnN0YW5jZW9mIHNwYW5fMS5kZWZhdWx0KSB7XG4gICAgICAgICAgICBzcGFuQ29udGV4dCA9IHNwYW5Db250ZXh0LmNvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5qZWN0KHNwYW5Db250ZXh0LCBmb3JtYXQsIGNhcnJpZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFNwYW5Db250ZXh0IGluc3RhbmNlIGV4dHJhY3RlZCBmcm9tIGBjYXJyaWVyYCBpbiB0aGUgZ2l2ZW5cbiAgICAgKiBgZm9ybWF0YC5cbiAgICAgKlxuICAgICAqIE9wZW5UcmFjaW5nIGRlZmluZXMgYSBjb21tb24gc2V0IG9mIGBmb3JtYXRgIHZhbHVlcyAoc2VlXG4gICAgICogRk9STUFUX1RFWFRfTUFQLCBGT1JNQVRfSFRUUF9IRUFERVJTLCBhbmQgRk9STUFUX0JJTkFSWSksIGFuZCBlYWNoIGhhc1xuICAgICAqIGFuIGV4cGVjdGVkIGNhcnJpZXIgdHlwZS5cbiAgICAgKlxuICAgICAqIENvbnNpZGVyIHRoaXMgcHNldWRvY29kZSBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgIC8vIFVzZSB0aGUgaW5ib3VuZCBIVFRQIHJlcXVlc3QncyBoZWFkZXJzIGFzIGEgdGV4dCBtYXAgY2Fycmllci5cbiAgICAgKiAgICAgdmFyIGhlYWRlcnNDYXJyaWVyID0gaW5ib3VuZEhUVFBSZXEuaGVhZGVycztcbiAgICAgKiAgICAgdmFyIHdpcmVDdHggPSBUcmFjZXIuZXh0cmFjdChUcmFjZXIuRk9STUFUX0hUVFBfSEVBREVSUywgaGVhZGVyc0NhcnJpZXIpO1xuICAgICAqICAgICB2YXIgc2VydmVyU3BhbiA9IFRyYWNlci5zdGFydFNwYW4oJy4uLicsIHsgY2hpbGRPZiA6IHdpcmVDdHggfSk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZvcm1hdCAtIHRoZSBmb3JtYXQgb2YgdGhlIGNhcnJpZXIuXG4gICAgICogQHBhcmFtICB7YW55fSBjYXJyaWVyIC0gdGhlIHR5cGUgb2YgdGhlIGNhcnJpZXIgb2JqZWN0IGlzIGRldGVybWluZWQgYnlcbiAgICAgKiAgICAgICAgIHRoZSBmb3JtYXQuXG4gICAgICogQHJldHVybiB7U3BhbkNvbnRleHR9XG4gICAgICogICAgICAgICBUaGUgZXh0cmFjdGVkIFNwYW5Db250ZXh0LCBvciBudWxsIGlmIG5vIHN1Y2ggU3BhbkNvbnRleHQgY291bGRcbiAgICAgKiAgICAgICAgIGJlIGZvdW5kIGluIGBjYXJyaWVyYFxuICAgICAqL1xuICAgIFRyYWNlci5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChmb3JtYXQsIGNhcnJpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhY3QoZm9ybWF0LCBjYXJyaWVyKTtcbiAgICB9O1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAvLyBEZXJpdmVkIGNsYXNzZXMgY2FuIGNob29zZSB0byBpbXBsZW1lbnQgdGhlIGJlbG93XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAgIC8vIE5PVEU6IHRoZSBpbnB1dCB0byB0aGlzIG1ldGhvZCBpcyAqYWx3YXlzKiBhbiBhc3NvY2lhdGl2ZSBhcnJheS4gVGhlXG4gICAgLy8gcHVibGljLWZhY2luZyBzdGFydFNwYW4oKSBtZXRob2Qgbm9ybWFsaXplcyB0aGUgYXJndW1lbnRzIHNvIHRoYXRcbiAgICAvLyBhbGwgTiBpbXBsZW1lbnRhdGlvbnMgZG8gbm90IG5lZWQgdG8gd29ycnkgYWJvdXQgdmFyaWF0aW9ucyBpbiB0aGUgY2FsbFxuICAgIC8vIHNpZ25hdHVyZS5cbiAgICAvL1xuICAgIC8vIFRoZSBkZWZhdWx0IGJlaGF2aW9yIHJldHVybnMgYSBuby1vcCBzcGFuLlxuICAgIFRyYWNlci5wcm90b3R5cGUuX3N0YXJ0U3BhbiA9IGZ1bmN0aW9uIChuYW1lLCBmaWVsZHMpIHtcbiAgICAgICAgcmV0dXJuIE5vb3Auc3BhbjtcbiAgICB9O1xuICAgIC8vIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzIGEgbm8tb3AuXG4gICAgVHJhY2VyLnByb3RvdHlwZS5faW5qZWN0ID0gZnVuY3Rpb24gKHNwYW5Db250ZXh0LCBmb3JtYXQsIGNhcnJpZXIpIHtcbiAgICB9O1xuICAgIC8vIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJldHVybiBhIG5vLW9wIFNwYW5Db250ZXh0LlxuICAgIFRyYWNlci5wcm90b3R5cGUuX2V4dHJhY3QgPSBmdW5jdGlvbiAoZm9ybWF0LCBjYXJyaWVyKSB7XG4gICAgICAgIHJldHVybiBOb29wLnNwYW5Db250ZXh0O1xuICAgIH07XG4gICAgcmV0dXJuIFRyYWNlcjtcbn0oKSk7XG5leHBvcnRzLlRyYWNlciA9IFRyYWNlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNlci5qcy5tYXAiLCIvKipcbiAqIEB0aGlzIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBmaW5hbGx5Q29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5hbGx5Q29uc3RydWN0b3I7XG4iLCJpbXBvcnQgcHJvbWlzZUZpbmFsbHkgZnJvbSAnLi9maW5hbGx5JztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gaXNBcnJheSh4KSB7XG4gIHJldHVybiBCb29sZWFuKHggJiYgdHlwZW9mIHgubGVuZ3RoICE9PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5yYWNlIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGFycltpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgLy8gQHRzLWlnbm9yZVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLy8gVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uIChVTUQpIHRvIHN1cHBvcnQgQU1ELCBDb21tb25KUy9Ob2RlLmpzLCBSaGlubywgYW5kIGJyb3dzZXJzLlxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZSgnc3RhY2tmcmFtZScsIFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LlN0YWNrRnJhbWUgPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIF9pc051bWJlcihuKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU3RhY2tGcmFtZShmdW5jdGlvbk5hbWUsIGFyZ3MsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIHNvdXJjZSkge1xuICAgICAgICBpZiAoZnVuY3Rpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RnVuY3Rpb25OYW1lKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBcmdzKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWxlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZpbGVOYW1lKGZpbGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldExpbmVOdW1iZXIobGluZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbk51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbHVtbk51bWJlcihjb2x1bW5OdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTb3VyY2Uoc291cmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFN0YWNrRnJhbWUucHJvdG90eXBlID0ge1xuICAgICAgICBnZXRGdW5jdGlvbk5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RnVuY3Rpb25OYW1lOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbk5hbWUgPSBTdHJpbmcodik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QXJnczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJncztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QXJnczogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmdzIG11c3QgYmUgYW4gQXJyYXknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXJncyA9IHY7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTk9URTogUHJvcGVydHkgbmFtZSBtYXkgYmUgbWlzbGVhZGluZyBhcyBpdCBpbmNsdWRlcyB0aGUgcGF0aCxcbiAgICAgICAgLy8gYnV0IGl0IHNvbWV3aGF0IG1pcnJvcnMgVjgncyBKYXZhU2NyaXB0U3RhY2tUcmFjZUFwaVxuICAgICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3dpa2kvSmF2YVNjcmlwdFN0YWNrVHJhY2VBcGkgYW5kIEdlY2tvJ3NcbiAgICAgICAgLy8gaHR0cDovL214ci5tb3ppbGxhLm9yZy9tb3ppbGxhLWNlbnRyYWwvc291cmNlL3hwY29tL2Jhc2UvbnNJRXhjZXB0aW9uLmlkbCMxNFxuICAgICAgICBnZXRGaWxlTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEZpbGVOYW1lOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMaW5lTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5lTnVtYmVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXRMaW5lTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKCFfaXNOdW1iZXIodikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdMaW5lIE51bWJlciBtdXN0IGJlIGEgTnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxpbmVOdW1iZXIgPSBOdW1iZXIodik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q29sdW1uTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5OdW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENvbHVtbk51bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGlmICghX2lzTnVtYmVyKHYpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29sdW1uIE51bWJlciBtdXN0IGJlIGEgTnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbHVtbk51bWJlciA9IE51bWJlcih2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTb3VyY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U291cmNlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBTdHJpbmcodik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0RnVuY3Rpb25OYW1lKCkgfHwgJ3thbm9ueW1vdXN9JztcbiAgICAgICAgICAgIHZhciBhcmdzID0gJygnICsgKHRoaXMuZ2V0QXJncygpIHx8IFtdKS5qb2luKCcsJykgKyAnKSc7XG4gICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSB0aGlzLmdldEZpbGVOYW1lKCkgPyAoJ0AnICsgdGhpcy5nZXRGaWxlTmFtZSgpKSA6ICcnO1xuICAgICAgICAgICAgdmFyIGxpbmVOdW1iZXIgPSBfaXNOdW1iZXIodGhpcy5nZXRMaW5lTnVtYmVyKCkpID8gKCc6JyArIHRoaXMuZ2V0TGluZU51bWJlcigpKSA6ICcnO1xuICAgICAgICAgICAgdmFyIGNvbHVtbk51bWJlciA9IF9pc051bWJlcih0aGlzLmdldENvbHVtbk51bWJlcigpKSA/ICgnOicgKyB0aGlzLmdldENvbHVtbk51bWJlcigpKSA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uTmFtZSArIGFyZ3MgKyBmaWxlTmFtZSArIGxpbmVOdW1iZXIgKyBjb2x1bW5OdW1iZXI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFN0YWNrRnJhbWU7XG59KSk7XG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtU3VwcG9ydGVkLCBpc0Jyb3dzZXIsIG5vdyB9IGZyb20gJy4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IHBhdGNoQWxsIH0gZnJvbSAnLi9jb21tb24vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbnZhciBlbmFibGVkID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBpZiAoaXNQbGF0Zm9ybVN1cHBvcnRlZCgpKSB7XG4gICAgcGF0Y2hBbGwoKTtcbiAgICBib290c3RyYXBQZXJmKCk7XG4gICAgc3RhdGUuYm9vdHN0cmFwVGltZSA9IG5vdygpO1xuICAgIGVuYWJsZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQnJvd3Nlcikge1xuICAgIGNvbnNvbGUubG9nKCdbRWxhc3RpYyBBUE1dIHBsYXRmb3JtIGlzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIH1cblxuICByZXR1cm4gZW5hYmxlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBQZXJmKCkge1xuICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgIHN0YXRlLmxhc3RIaWRkZW5TdGFydCA9IDA7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgc3RhdGUubGFzdEhpZGRlblN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICB9LCB7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9KTtcbn0iLCJ2YXIgUkFGX1RJTUVPVVQgPSAxMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZnRlckZyYW1lKGNhbGxiYWNrKSB7XG4gIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrKTtcbiAgfTtcblxuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgUkFGX1RJTUVPVVQpO1xuICB2YXIgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZXIpO1xufSIsImltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlJztcbmltcG9ydCBOREpTT04gZnJvbSAnLi9uZGpzb24nO1xuaW1wb3J0IHsgWEhSX0lHTk9SRSB9IGZyb20gJy4vcGF0Y2hpbmcvcGF0Y2gtdXRpbHMnO1xuaW1wb3J0IHsgdHJ1bmNhdGVNb2RlbCwgTUVUQURBVEFfTU9ERUwgfSBmcm9tICcuL3RydW5jYXRlJztcbmltcG9ydCB7IEVSUk9SUywgVFJBTlNBQ1RJT05TIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJy4vcG9seWZpbGxzJztcbmltcG9ydCB7IGNvbXByZXNzTWV0YWRhdGEsIGNvbXByZXNzVHJhbnNhY3Rpb24sIGNvbXByZXNzRXJyb3IsIGNvbXByZXNzUGF5bG9hZCB9IGZyb20gJy4vY29tcHJlc3MnO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gJy4uL3N0YXRlJztcbnZhciBUSFJPVFRMRV9JTlRFUlZBTCA9IDYwMDAwO1xuXG52YXIgQXBtU2VydmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBcG1TZXJ2ZXIoY29uZmlnU2VydmljZSwgbG9nZ2luZ1NlcnZpY2UpIHtcbiAgICB0aGlzLl9jb25maWdTZXJ2aWNlID0gY29uZmlnU2VydmljZTtcbiAgICB0aGlzLl9sb2dnaW5nU2VydmljZSA9IGxvZ2dpbmdTZXJ2aWNlO1xuICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50aHJvdHRsZUV2ZW50cyA9IG5vb3A7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQXBtU2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBxdWV1ZUxpbWl0ID0gdGhpcy5fY29uZmlnU2VydmljZS5nZXQoJ3F1ZXVlTGltaXQnKTtcblxuICAgIHZhciBmbHVzaEludGVydmFsID0gdGhpcy5fY29uZmlnU2VydmljZS5nZXQoJ2ZsdXNoSW50ZXJ2YWwnKTtcblxuICAgIHZhciBsaW1pdCA9IHRoaXMuX2NvbmZpZ1NlcnZpY2UuZ2V0KCdldmVudHNMaW1pdCcpO1xuXG4gICAgdmFyIG9uRmx1c2ggPSBmdW5jdGlvbiBvbkZsdXNoKGV2ZW50cykge1xuICAgICAgdmFyIHByb21pc2UgPSBfdGhpcy5zZW5kRXZlbnRzKGV2ZW50cyk7XG5cbiAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIF90aGlzLl9sb2dnaW5nU2VydmljZS53YXJuKCdGYWlsZWQgc2VuZGluZyBldmVudHMhJywgX3RoaXMuX2NvbnN0cnVjdEVycm9yKHJlYXNvbikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZShvbkZsdXNoLCB7XG4gICAgICBxdWV1ZUxpbWl0OiBxdWV1ZUxpbWl0LFxuICAgICAgZmx1c2hJbnRlcnZhbDogZmx1c2hJbnRlcnZhbFxuICAgIH0pO1xuICAgIHRoaXMudGhyb3R0bGVFdmVudHMgPSB0aHJvdHRsZSh0aGlzLnF1ZXVlLmFkZC5iaW5kKHRoaXMucXVldWUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX2xvZ2dpbmdTZXJ2aWNlLndhcm4oJ0Ryb3BwZWQgZXZlbnRzIGR1ZSB0byB0aHJvdHRsaW5nIScpO1xuICAgIH0sIHtcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGludGVydmFsOiBUSFJPVFRMRV9JTlRFUlZBTFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fcG9zdEpzb24gPSBmdW5jdGlvbiBfcG9zdEpzb24oZW5kUG9pbnQsIHBheWxvYWQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LW5kanNvbidcbiAgICB9O1xuICAgIHJldHVybiBjb21wcmVzc1BheWxvYWQocGF5bG9hZCwgaGVhZGVycykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBfdGhpczIuX2xvZ2dpbmdTZXJ2aWNlLmRlYnVnKCdDb21wcmVzc2luZyB0aGUgcGF5bG9hZCB1c2luZyBDb21wcmVzc2lvblN0cmVhbSBBUEkgZmFpbGVkJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH07XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLl9tYWtlSHR0cFJlcXVlc3QoJ1BPU1QnLCBlbmRQb2ludCwgcmVzdWx0KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gX3JlZi5yZXNwb25zZVRleHQ7XG4gICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY29uc3RydWN0RXJyb3IgPSBmdW5jdGlvbiBfY29uc3RydWN0RXJyb3IocmVhc29uKSB7XG4gICAgdmFyIHVybCA9IHJlYXNvbi51cmwsXG4gICAgICAgIHN0YXR1cyA9IHJlYXNvbi5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHJlYXNvbi5yZXNwb25zZVRleHQ7XG5cbiAgICBpZiAodHlwZW9mIHN0YXR1cyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IHVybCArICcgSFRUUCBzdGF0dXM6ICcgKyBzdGF0dXM7XG5cbiAgICBpZiAoX19ERVZfXyAmJiByZXNwb25zZVRleHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzZXJ2ZXJFcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmVyRXJyb3JzLnB1c2goZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1lc3NhZ2UgKz0gJyAnICsgc2VydmVyRXJyb3JzLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5kZWJ1ZygnRXJyb3IgcGFyc2luZyByZXNwb25zZSBmcm9tIEFQTSBzZXJ2ZXInLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9O1xuXG4gIF9wcm90by5fbWFrZUh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gX21ha2VIdHRwUmVxdWVzdChtZXRob2QsIHVybCwgX3RlbXApIHtcbiAgICB2YXIgX3JlZjIgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZjIkdGltZW91dCA9IF9yZWYyLnRpbWVvdXQsXG4gICAgICAgIHRpbWVvdXQgPSBfcmVmMiR0aW1lb3V0ID09PSB2b2lkIDAgPyAxMDAwMCA6IF9yZWYyJHRpbWVvdXQsXG4gICAgICAgIHBheWxvYWQgPSBfcmVmMi5wYXlsb2FkLFxuICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyW1hIUl9JR05PUkVdID0gdHJ1ZTtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcblxuICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoZWFkZXIpKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMCB8fCBzdGF0dXMgPiAzOTkgJiYgc3RhdHVzIDwgNjAwKSB7XG4gICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgIHJlc3BvbnNlVGV4dDogcmVzcG9uc2VUZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHJlc3BvbnNlVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKHBheWxvYWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaENvbmZpZyA9IGZ1bmN0aW9uIGZldGNoQ29uZmlnKHNlcnZpY2VOYW1lLCBlbnZpcm9ubWVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHNlcnZlclVybCA9IHRoaXMuX2NvbmZpZ1NlcnZpY2UuZ2V0KCdzZXJ2ZXJVcmwnKTtcblxuICAgIHZhciBjb25maWdFbmRwb2ludCA9IHNlcnZlclVybCArIFwiL2NvbmZpZy92MS9ydW0vYWdlbnRzXCI7XG5cbiAgICBpZiAoIXNlcnZpY2VOYW1lKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3NlcnZpY2VOYW1lIGlzIHJlcXVpcmVkIGZvciBmZXRjaGluZyBjZW50cmFsIGNvbmZpZy4nKTtcbiAgICB9XG5cbiAgICBjb25maWdFbmRwb2ludCArPSBcIj9zZXJ2aWNlLm5hbWU9XCIgKyBzZXJ2aWNlTmFtZTtcblxuICAgIGlmIChlbnZpcm9ubWVudCkge1xuICAgICAgY29uZmlnRW5kcG9pbnQgKz0gXCImc2VydmljZS5lbnZpcm9ubWVudD1cIiArIGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIHZhciBsb2NhbENvbmZpZyA9IHRoaXMuX2NvbmZpZ1NlcnZpY2UuZ2V0TG9jYWxDb25maWcoKTtcblxuICAgIGlmIChsb2NhbENvbmZpZykge1xuICAgICAgY29uZmlnRW5kcG9pbnQgKz0gXCImaWZub25lbWF0Y2g9XCIgKyBsb2NhbENvbmZpZy5ldGFnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tYWtlSHR0cFJlcXVlc3QoJ0dFVCcsIGNvbmZpZ0VuZHBvaW50LCB7XG4gICAgICB0aW1lb3V0OiA1MDAwXG4gICAgfSkudGhlbihmdW5jdGlvbiAoeGhyKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cyxcbiAgICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsQ29uZmlnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlbW90ZUNvbmZpZyA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgdmFyIGV0YWcgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2V0YWcnKTtcblxuICAgICAgICBpZiAoZXRhZykge1xuICAgICAgICAgIHJlbW90ZUNvbmZpZy5ldGFnID0gZXRhZy5yZXBsYWNlKC9bXCJdL2csICcnKTtcblxuICAgICAgICAgIF90aGlzMy5fY29uZmlnU2VydmljZS5zZXRMb2NhbENvbmZpZyhyZW1vdGVDb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbW90ZUNvbmZpZztcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICB2YXIgZXJyb3IgPSBfdGhpczMuX2NvbnN0cnVjdEVycm9yKHJlYXNvbik7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZU1ldGFEYXRhID0gZnVuY3Rpb24gY3JlYXRlTWV0YURhdGEoKSB7XG4gICAgdmFyIGNmZyA9IHRoaXMuX2NvbmZpZ1NlcnZpY2U7XG4gICAgdmFyIG1ldGFkYXRhID0ge1xuICAgICAgc2VydmljZToge1xuICAgICAgICBuYW1lOiBjZmcuZ2V0KCdzZXJ2aWNlTmFtZScpLFxuICAgICAgICB2ZXJzaW9uOiBjZmcuZ2V0KCdzZXJ2aWNlVmVyc2lvbicpLFxuICAgICAgICBhZ2VudDoge1xuICAgICAgICAgIG5hbWU6ICdydW0tanMnLFxuICAgICAgICAgIHZlcnNpb246IGNmZy52ZXJzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgbmFtZTogJ2phdmFzY3JpcHQnXG4gICAgICAgIH0sXG4gICAgICAgIGVudmlyb25tZW50OiBjZmcuZ2V0KCdlbnZpcm9ubWVudCcpXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiBjZmcuZ2V0KCdjb250ZXh0LnRhZ3MnKVxuICAgIH07XG4gICAgcmV0dXJuIHRydW5jYXRlTW9kZWwoTUVUQURBVEFfTU9ERUwsIG1ldGFkYXRhKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkRXJyb3IgPSBmdW5jdGlvbiBhZGRFcnJvcihlcnJvcikge1xuICAgIHZhciBfdGhpcyR0aHJvdHRsZUV2ZW50cztcblxuICAgIHRoaXMudGhyb3R0bGVFdmVudHMoKF90aGlzJHRocm90dGxlRXZlbnRzID0ge30sIF90aGlzJHRocm90dGxlRXZlbnRzW0VSUk9SU10gPSBlcnJvciwgX3RoaXMkdGhyb3R0bGVFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgIHZhciBfdGhpcyR0aHJvdHRsZUV2ZW50czI7XG5cbiAgICB0aGlzLnRocm90dGxlRXZlbnRzKChfdGhpcyR0aHJvdHRsZUV2ZW50czIgPSB7fSwgX3RoaXMkdGhyb3R0bGVFdmVudHMyW1RSQU5TQUNUSU9OU10gPSB0cmFuc2FjdGlvbiwgX3RoaXMkdGhyb3R0bGVFdmVudHMyKSk7XG4gIH07XG5cbiAgX3Byb3RvLm5kanNvbkVycm9ycyA9IGZ1bmN0aW9uIG5kanNvbkVycm9ycyhlcnJvcnMsIGNvbXByZXNzKSB7XG4gICAgdmFyIGtleSA9IGNvbXByZXNzID8gJ2UnIDogJ2Vycm9yJztcbiAgICByZXR1cm4gZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfTkRKU09OJHN0cmluZ2lmeTtcblxuICAgICAgcmV0dXJuIE5ESlNPTi5zdHJpbmdpZnkoKF9OREpTT04kc3RyaW5naWZ5ID0ge30sIF9OREpTT04kc3RyaW5naWZ5W2tleV0gPSBjb21wcmVzcyA/IGNvbXByZXNzRXJyb3IoZXJyb3IpIDogZXJyb3IsIF9OREpTT04kc3RyaW5naWZ5KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5kanNvbk1ldHJpY3NldHMgPSBmdW5jdGlvbiBuZGpzb25NZXRyaWNzZXRzKG1ldHJpY3NldHMpIHtcbiAgICByZXR1cm4gbWV0cmljc2V0cy5tYXAoZnVuY3Rpb24gKG1ldHJpY3NldCkge1xuICAgICAgcmV0dXJuIE5ESlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXRyaWNzZXQ6IG1ldHJpY3NldFxuICAgICAgfSk7XG4gICAgfSkuam9pbignJyk7XG4gIH07XG5cbiAgX3Byb3RvLm5kanNvblRyYW5zYWN0aW9ucyA9IGZ1bmN0aW9uIG5kanNvblRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMsIGNvbXByZXNzKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIga2V5ID0gY29tcHJlc3MgPyAneCcgOiAndHJhbnNhY3Rpb24nO1xuICAgIHJldHVybiB0cmFuc2FjdGlvbnMubWFwKGZ1bmN0aW9uICh0cikge1xuICAgICAgdmFyIF9OREpTT04kc3RyaW5naWZ5MjtcblxuICAgICAgdmFyIHNwYW5zID0gJycsXG4gICAgICAgICAgYnJlYWtkb3ducyA9ICcnO1xuXG4gICAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICAgIGlmICh0ci5zcGFucykge1xuICAgICAgICAgIHNwYW5zID0gdHIuc3BhbnMubWFwKGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICByZXR1cm4gTkRKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHNwYW46IHNwYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAgIGRlbGV0ZSB0ci5zcGFucztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ci5icmVha2Rvd24pIHtcbiAgICAgICAgICBicmVha2Rvd25zID0gX3RoaXM0Lm5kanNvbk1ldHJpY3NldHModHIuYnJlYWtkb3duKTtcbiAgICAgICAgICBkZWxldGUgdHIuYnJlYWtkb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOREpTT04uc3RyaW5naWZ5KChfTkRKU09OJHN0cmluZ2lmeTIgPSB7fSwgX05ESlNPTiRzdHJpbmdpZnkyW2tleV0gPSBjb21wcmVzcyA/IGNvbXByZXNzVHJhbnNhY3Rpb24odHIpIDogdHIsIF9OREpTT04kc3RyaW5naWZ5MikpICsgc3BhbnMgKyBicmVha2Rvd25zO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZW5kRXZlbnRzID0gZnVuY3Rpb24gc2VuZEV2ZW50cyhldmVudHMpIHtcbiAgICB2YXIgX3BheWxvYWQsIF9OREpTT04kc3RyaW5naWZ5MztcblxuICAgIGlmIChldmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zYWN0aW9ucyA9IFtdO1xuICAgIHZhciBlcnJvcnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICAgIGlmIChldmVudFtUUkFOU0FDVElPTlNdKSB7XG4gICAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKGV2ZW50W1RSQU5TQUNUSU9OU10pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnRbRVJST1JTXSkge1xuICAgICAgICBlcnJvcnMucHVzaChldmVudFtFUlJPUlNdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhbnNhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNmZyA9IHRoaXMuX2NvbmZpZ1NlcnZpY2U7XG4gICAgdmFyIHBheWxvYWQgPSAoX3BheWxvYWQgPSB7fSwgX3BheWxvYWRbVFJBTlNBQ1RJT05TXSA9IHRyYW5zYWN0aW9ucywgX3BheWxvYWRbRVJST1JTXSA9IGVycm9ycywgX3BheWxvYWQpO1xuICAgIHZhciBmaWx0ZXJlZFBheWxvYWQgPSBjZmcuYXBwbHlGaWx0ZXJzKHBheWxvYWQpO1xuXG4gICAgaWYgKCFmaWx0ZXJlZFBheWxvYWQpIHtcbiAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLndhcm4oJ0Ryb3BwZWQgcGF5bG9hZCBkdWUgdG8gZmlsdGVyaW5nIScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFwaVZlcnNpb24gPSBjZmcuZ2V0KCdhcGlWZXJzaW9uJyk7XG4gICAgdmFyIGNvbXByZXNzID0gYXBpVmVyc2lvbiA+IDI7XG4gICAgdmFyIG5kanNvbiA9IFtdO1xuICAgIHZhciBtZXRhZGF0YSA9IHRoaXMuY3JlYXRlTWV0YURhdGEoKTtcbiAgICB2YXIgbWV0YWRhdGFLZXkgPSBjb21wcmVzcyA/ICdtJyA6ICdtZXRhZGF0YSc7XG4gICAgbmRqc29uLnB1c2goTkRKU09OLnN0cmluZ2lmeSgoX05ESlNPTiRzdHJpbmdpZnkzID0ge30sIF9OREpTT04kc3RyaW5naWZ5M1ttZXRhZGF0YUtleV0gPSBjb21wcmVzcyA/IGNvbXByZXNzTWV0YWRhdGEobWV0YWRhdGEpIDogbWV0YWRhdGEsIF9OREpTT04kc3RyaW5naWZ5MykpKTtcbiAgICBuZGpzb24gPSBuZGpzb24uY29uY2F0KHRoaXMubmRqc29uRXJyb3JzKGZpbHRlcmVkUGF5bG9hZFtFUlJPUlNdLCBjb21wcmVzcyksIHRoaXMubmRqc29uVHJhbnNhY3Rpb25zKGZpbHRlcmVkUGF5bG9hZFtUUkFOU0FDVElPTlNdLCBjb21wcmVzcykpO1xuICAgIHZhciBuZGpzb25QYXlsb2FkID0gbmRqc29uLmpvaW4oJycpO1xuICAgIHZhciBlbmRQb2ludCA9IGNmZy5nZXQoJ3NlcnZlclVybCcpICsgKFwiL2ludGFrZS92XCIgKyBhcGlWZXJzaW9uICsgXCIvcnVtL2V2ZW50c1wiKTtcbiAgICByZXR1cm4gdGhpcy5fcG9zdEpzb24oZW5kUG9pbnQsIG5kanNvblBheWxvYWQpO1xuICB9O1xuXG4gIHJldHVybiBBcG1TZXJ2ZXI7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwbVNlcnZlcjsiLCJpbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgTkFWSUdBVElPTl9USU1JTkdfTUFSS1MsIENPTVBSRVNTRURfTkFWX1RJTUlOR19NQVJLUyB9IGZyb20gJy4uL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvY2FwdHVyZS1uYXZpZ2F0aW9uJztcblxuZnVuY3Rpb24gY29tcHJlc3NTdGFja0ZyYW1lcyhmcmFtZXMpIHtcbiAgcmV0dXJuIGZyYW1lcy5tYXAoZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwOiBmcmFtZS5hYnNfcGF0aCxcbiAgICAgIGY6IGZyYW1lLmZpbGVuYW1lLFxuICAgICAgZm46IGZyYW1lLmZ1bmN0aW9uLFxuICAgICAgbGk6IGZyYW1lLmxpbmVubyxcbiAgICAgIGNvOiBmcmFtZS5jb2xub1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIHJldHVybiB7XG4gICAgdHM6IHJlc3BvbnNlLnRyYW5zZmVyX3NpemUsXG4gICAgZWJzOiByZXNwb25zZS5lbmNvZGVkX2JvZHlfc2l6ZSxcbiAgICBkYnM6IHJlc3BvbnNlLmRlY29kZWRfYm9keV9zaXplXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzSFRUUChodHRwKSB7XG4gIHZhciBjb21wcmVzc2VkID0ge307XG4gIHZhciBtZXRob2QgPSBodHRwLm1ldGhvZCxcbiAgICAgIHN0YXR1c19jb2RlID0gaHR0cC5zdGF0dXNfY29kZSxcbiAgICAgIHVybCA9IGh0dHAudXJsLFxuICAgICAgcmVzcG9uc2UgPSBodHRwLnJlc3BvbnNlO1xuICBjb21wcmVzc2VkLnVybCA9IHVybDtcblxuICBpZiAobWV0aG9kKSB7XG4gICAgY29tcHJlc3NlZC5tdCA9IG1ldGhvZDtcbiAgfVxuXG4gIGlmIChzdGF0dXNfY29kZSkge1xuICAgIGNvbXByZXNzZWQuc2MgPSBzdGF0dXNfY29kZTtcbiAgfVxuXG4gIGlmIChyZXNwb25zZSkge1xuICAgIGNvbXByZXNzZWQuciA9IGNvbXByZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXByZXNzZWQ7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzQ29udGV4dChjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGNvbXByZXNzZWQgPSB7fTtcbiAgdmFyIHBhZ2UgPSBjb250ZXh0LnBhZ2UsXG4gICAgICBodHRwID0gY29udGV4dC5odHRwLFxuICAgICAgcmVzcG9uc2UgPSBjb250ZXh0LnJlc3BvbnNlLFxuICAgICAgZGVzdGluYXRpb24gPSBjb250ZXh0LmRlc3RpbmF0aW9uLFxuICAgICAgdXNlciA9IGNvbnRleHQudXNlcixcbiAgICAgIGN1c3RvbSA9IGNvbnRleHQuY3VzdG9tO1xuXG4gIGlmIChwYWdlKSB7XG4gICAgY29tcHJlc3NlZC5wID0ge1xuICAgICAgcmY6IHBhZ2UucmVmZXJlcixcbiAgICAgIHVybDogcGFnZS51cmxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGh0dHApIHtcbiAgICBjb21wcmVzc2VkLmggPSBjb21wcmVzc0hUVFAoaHR0cCk7XG4gIH1cblxuICBpZiAocmVzcG9uc2UpIHtcbiAgICBjb21wcmVzc2VkLnIgPSBjb21wcmVzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIGlmIChkZXN0aW5hdGlvbikge1xuICAgIHZhciBzZXJ2aWNlID0gZGVzdGluYXRpb24uc2VydmljZTtcbiAgICBjb21wcmVzc2VkLmR0ID0ge1xuICAgICAgc2U6IHtcbiAgICAgICAgbjogc2VydmljZS5uYW1lLFxuICAgICAgICB0OiBzZXJ2aWNlLnR5cGUsXG4gICAgICAgIHJjOiBzZXJ2aWNlLnJlc291cmNlXG4gICAgICB9LFxuICAgICAgYWQ6IGRlc3RpbmF0aW9uLmFkZHJlc3MsXG4gICAgICBwbzogZGVzdGluYXRpb24ucG9ydFxuICAgIH07XG4gIH1cblxuICBpZiAodXNlcikge1xuICAgIGNvbXByZXNzZWQudSA9IHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgdW46IHVzZXIudXNlcm5hbWUsXG4gICAgICBlbTogdXNlci5lbWFpbFxuICAgIH07XG4gIH1cblxuICBpZiAoY3VzdG9tKSB7XG4gICAgY29tcHJlc3NlZC5jdSA9IGN1c3RvbTtcbiAgfVxuXG4gIHJldHVybiBjb21wcmVzc2VkO1xufVxuXG5mdW5jdGlvbiBjb21wcmVzc01hcmtzKG1hcmtzKSB7XG4gIGlmICghbWFya3MpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBuYXZpZ2F0aW9uVGltaW5nID0gbWFya3MubmF2aWdhdGlvblRpbWluZyxcbiAgICAgIGFnZW50ID0gbWFya3MuYWdlbnQ7XG4gIHZhciBjb21wcmVzc2VkID0ge1xuICAgIG50OiB7fVxuICB9O1xuICBDT01QUkVTU0VEX05BVl9USU1JTkdfTUFSS1MuZm9yRWFjaChmdW5jdGlvbiAobWFyaywgaW5kZXgpIHtcbiAgICB2YXIgbWFwcGluZyA9IE5BVklHQVRJT05fVElNSU5HX01BUktTW2luZGV4XTtcbiAgICBjb21wcmVzc2VkLm50W21hcmtdID0gbmF2aWdhdGlvblRpbWluZ1ttYXBwaW5nXTtcbiAgfSk7XG4gIGNvbXByZXNzZWQuYSA9IHtcbiAgICBmYjogY29tcHJlc3NlZC5udC5ycyxcbiAgICBkaTogY29tcHJlc3NlZC5udC5kaSxcbiAgICBkYzogY29tcHJlc3NlZC5udC5kY1xuICB9O1xuICB2YXIgZnAgPSBhZ2VudC5maXJzdENvbnRlbnRmdWxQYWludDtcbiAgdmFyIGxwID0gYWdlbnQubGFyZ2VzdENvbnRlbnRmdWxQYWludDtcblxuICBpZiAoZnApIHtcbiAgICBjb21wcmVzc2VkLmEuZnAgPSBmcDtcbiAgfVxuXG4gIGlmIChscCkge1xuICAgIGNvbXByZXNzZWQuYS5scCA9IGxwO1xuICB9XG5cbiAgcmV0dXJuIGNvbXByZXNzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc01ldGFkYXRhKG1ldGFkYXRhKSB7XG4gIHZhciBzZXJ2aWNlID0gbWV0YWRhdGEuc2VydmljZSxcbiAgICAgIGxhYmVscyA9IG1ldGFkYXRhLmxhYmVscztcbiAgdmFyIGFnZW50ID0gc2VydmljZS5hZ2VudCxcbiAgICAgIGxhbmd1YWdlID0gc2VydmljZS5sYW5ndWFnZTtcbiAgcmV0dXJuIHtcbiAgICBzZToge1xuICAgICAgbjogc2VydmljZS5uYW1lLFxuICAgICAgdmU6IHNlcnZpY2UudmVyc2lvbixcbiAgICAgIGE6IHtcbiAgICAgICAgbjogYWdlbnQubmFtZSxcbiAgICAgICAgdmU6IGFnZW50LnZlcnNpb25cbiAgICAgIH0sXG4gICAgICBsYToge1xuICAgICAgICBuOiBsYW5ndWFnZS5uYW1lXG4gICAgICB9LFxuICAgICAgZW46IHNlcnZpY2UuZW52aXJvbm1lbnRcbiAgICB9LFxuICAgIGw6IGxhYmVsc1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pIHtcbiAgdmFyIHNwYW5zID0gdHJhbnNhY3Rpb24uc3BhbnMubWFwKGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgdmFyIHNwYW5EYXRhID0ge1xuICAgICAgaWQ6IHNwYW4uaWQsXG4gICAgICBuOiBzcGFuLm5hbWUsXG4gICAgICB0OiBzcGFuLnR5cGUsXG4gICAgICBzOiBzcGFuLnN0YXJ0LFxuICAgICAgZDogc3Bhbi5kdXJhdGlvbixcbiAgICAgIGM6IGNvbXByZXNzQ29udGV4dChzcGFuLmNvbnRleHQpLFxuICAgICAgbzogc3Bhbi5vdXRjb21lXG4gICAgfTtcblxuICAgIGlmIChzcGFuLnBhcmVudF9pZCAhPT0gdHJhbnNhY3Rpb24uaWQpIHtcbiAgICAgIHNwYW5EYXRhLnBpZCA9IHNwYW4ucGFyZW50X2lkO1xuICAgIH1cblxuICAgIGlmIChzcGFuLnN5bmMgPT09IHRydWUpIHtcbiAgICAgIHNwYW5EYXRhLnN5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi5zdWJ0eXBlKSB7XG4gICAgICBzcGFuRGF0YS5zdSA9IHNwYW4uc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi5hY3Rpb24pIHtcbiAgICAgIHNwYW5EYXRhLmFjID0gc3Bhbi5hY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW5EYXRhO1xuICB9KTtcbiAgdmFyIHRyID0ge1xuICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICB0aWQ6IHRyYW5zYWN0aW9uLnRyYWNlX2lkLFxuICAgIG46IHRyYW5zYWN0aW9uLm5hbWUsXG4gICAgdDogdHJhbnNhY3Rpb24udHlwZSxcbiAgICBkOiB0cmFuc2FjdGlvbi5kdXJhdGlvbixcbiAgICBjOiBjb21wcmVzc0NvbnRleHQodHJhbnNhY3Rpb24uY29udGV4dCksXG4gICAgbTogY29tcHJlc3NNYXJrcyh0cmFuc2FjdGlvbi5tYXJrcyksXG4gICAgbWU6IGNvbXByZXNzTWV0cmljc2V0cyh0cmFuc2FjdGlvbi5icmVha2Rvd24pLFxuICAgIHk6IHNwYW5zLFxuICAgIHljOiB7XG4gICAgICBzZDogc3BhbnMubGVuZ3RoXG4gICAgfSxcbiAgICBzbTogdHJhbnNhY3Rpb24uc2FtcGxlZCxcbiAgICBvOiB0cmFuc2FjdGlvbi5vdXRjb21lXG4gIH07XG5cbiAgaWYgKHRyYW5zYWN0aW9uLmV4cGVyaWVuY2UpIHtcbiAgICB2YXIgX3RyYW5zYWN0aW9uJGV4cGVyaWVuID0gdHJhbnNhY3Rpb24uZXhwZXJpZW5jZSxcbiAgICAgICAgY2xzID0gX3RyYW5zYWN0aW9uJGV4cGVyaWVuLmNscyxcbiAgICAgICAgZmlkID0gX3RyYW5zYWN0aW9uJGV4cGVyaWVuLmZpZCxcbiAgICAgICAgdGJ0ID0gX3RyYW5zYWN0aW9uJGV4cGVyaWVuLnRidCxcbiAgICAgICAgbG9uZ3Rhc2sgPSBfdHJhbnNhY3Rpb24kZXhwZXJpZW4ubG9uZ3Rhc2s7XG4gICAgdHIuZXhwID0ge1xuICAgICAgY2xzOiBjbHMsXG4gICAgICBmaWQ6IGZpZCxcbiAgICAgIHRidDogdGJ0LFxuICAgICAgbHQ6IGxvbmd0YXNrXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB0cjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0Vycm9yKGVycm9yKSB7XG4gIHZhciBleGNlcHRpb24gPSBlcnJvci5leGNlcHRpb247XG4gIHZhciBjb21wcmVzc2VkID0ge1xuICAgIGlkOiBlcnJvci5pZCxcbiAgICBjbDogZXJyb3IuY3VscHJpdCxcbiAgICBleDoge1xuICAgICAgbWc6IGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgc3Q6IGNvbXByZXNzU3RhY2tGcmFtZXMoZXhjZXB0aW9uLnN0YWNrdHJhY2UpLFxuICAgICAgdDogZXJyb3IudHlwZVxuICAgIH0sXG4gICAgYzogY29tcHJlc3NDb250ZXh0KGVycm9yLmNvbnRleHQpXG4gIH07XG4gIHZhciB0cmFuc2FjdGlvbiA9IGVycm9yLnRyYW5zYWN0aW9uO1xuXG4gIGlmICh0cmFuc2FjdGlvbikge1xuICAgIGNvbXByZXNzZWQudGlkID0gZXJyb3IudHJhY2VfaWQ7XG4gICAgY29tcHJlc3NlZC5waWQgPSBlcnJvci5wYXJlbnRfaWQ7XG4gICAgY29tcHJlc3NlZC54aWQgPSBlcnJvci50cmFuc2FjdGlvbl9pZDtcbiAgICBjb21wcmVzc2VkLnggPSB7XG4gICAgICB0OiB0cmFuc2FjdGlvbi50eXBlLFxuICAgICAgc206IHRyYW5zYWN0aW9uLnNhbXBsZWRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbXByZXNzZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3NNZXRyaWNzZXRzKGJyZWFrZG93bnMpIHtcbiAgcmV0dXJuIGJyZWFrZG93bnMubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHNwYW4gPSBfcmVmLnNwYW4sXG4gICAgICAgIHNhbXBsZXMgPSBfcmVmLnNhbXBsZXM7XG4gICAgdmFyIGlzU3BhbiA9IHNwYW4gIT0gbnVsbDtcblxuICAgIGlmIChpc1NwYW4pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHk6IHtcbiAgICAgICAgICB0OiBzcGFuLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2E6IHtcbiAgICAgICAgICB5c2M6IHtcbiAgICAgICAgICAgIHY6IHNhbXBsZXNbJ3NwYW4uc2VsZl90aW1lLmNvdW50J10udmFsdWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHlzczoge1xuICAgICAgICAgICAgdjogc2FtcGxlc1snc3Bhbi5zZWxmX3RpbWUuc3VtLnVzJ10udmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNhOiB7XG4gICAgICAgIHhkYzoge1xuICAgICAgICAgIHY6IHNhbXBsZXNbJ3RyYW5zYWN0aW9uLmR1cmF0aW9uLmNvdW50J10udmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgeGRzOiB7XG4gICAgICAgICAgdjogc2FtcGxlc1sndHJhbnNhY3Rpb24uZHVyYXRpb24uc3VtLnVzJ10udmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgeGJjOiB7XG4gICAgICAgICAgdjogc2FtcGxlc1sndHJhbnNhY3Rpb24uYnJlYWtkb3duLmNvdW50J10udmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzUGF5bG9hZChwYXlsb2FkLCBoZWFkZXJzLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSB2b2lkIDApIHtcbiAgICB0eXBlID0gJ2d6aXAnO1xuICB9XG5cbiAgdmFyIGlzQ29tcHJlc3Npb25TdHJlYW1TdXBwb3J0ZWQgPSB0eXBlb2YgQ29tcHJlc3Npb25TdHJlYW0gPT09ICdmdW5jdGlvbic7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGlmICghaXNDb21wcmVzc2lvblN0cmVhbVN1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcGF5bG9hZFN0cmVhbSA9IG5ldyBCbG9iKFtwYXlsb2FkXSkuc3RyZWFtKCk7XG4gICAgdmFyIGNvbXByZXNzZWRTdHJlYW0gPSBwYXlsb2FkU3RyZWFtLnBpcGVUaHJvdWdoKG5ldyBDb21wcmVzc2lvblN0cmVhbSh0eXBlKSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShjb21wcmVzc2VkU3RyZWFtKS5ibG9iKCkudGhlbihmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgaGVhZGVyc1snQ29udGVudC1FbmNvZGluZyddID0gdHlwZTtcbiAgICAgIHJldHVybiByZXNvbHZlKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IGdldEN1cnJlbnRTY3JpcHQsIHNldExhYmVsLCBtZXJnZSwgZXh0ZW5kLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2V2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ09ORklHX0NIQU5HRSwgTE9DQUxfQ09ORklHX0tFWSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gZ2V0Q29uZmlnRnJvbVNjcmlwdCgpIHtcbiAgdmFyIHNjcmlwdCA9IGdldEN1cnJlbnRTY3JpcHQoKTtcbiAgdmFyIGNvbmZpZyA9IGdldERhdGFBdHRyaWJ1dGVzRnJvbU5vZGUoc2NyaXB0KTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZXNGcm9tTm9kZShub2RlKSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBkYXRhQXR0cnMgPSB7fTtcbiAgdmFyIGRhdGFSZWdleCA9IC9eZGF0YS0oW1xcdy1dKykkLztcbiAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXR0ciA9IGF0dHJzW2ldO1xuXG4gICAgaWYgKGRhdGFSZWdleC50ZXN0KGF0dHIubm9kZU5hbWUpKSB7XG4gICAgICB2YXIga2V5ID0gYXR0ci5ub2RlTmFtZS5tYXRjaChkYXRhUmVnZXgpWzFdO1xuICAgICAgdmFyIGNhbWVsQ2FzZWRrZXkgPSBrZXkuc3BsaXQoJy0nKS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPiAwID8gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSkgOiB2YWx1ZTtcbiAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgZGF0YUF0dHJzW2NhbWVsQ2FzZWRrZXldID0gYXR0ci52YWx1ZSB8fCBhdHRyLm5vZGVWYWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YUF0dHJzO1xufVxuXG52YXIgQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25maWcoKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBzZXJ2aWNlTmFtZTogJycsXG4gICAgICBzZXJ2aWNlVmVyc2lvbjogJycsXG4gICAgICBlbnZpcm9ubWVudDogJycsXG4gICAgICBzZXJ2ZXJVcmw6ICdodHRwOi8vbG9jYWxob3N0OjgyMDAnLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgaW5zdHJ1bWVudDogdHJ1ZSxcbiAgICAgIGRpc2FibGVJbnN0cnVtZW50YXRpb25zOiBbXSxcbiAgICAgIGxvZ0xldmVsOiAnd2FybicsXG4gICAgICBicmVha2Rvd25NZXRyaWNzOiBmYWxzZSxcbiAgICAgIGlnbm9yZVRyYW5zYWN0aW9uczogW10sXG4gICAgICBldmVudHNMaW1pdDogODAsXG4gICAgICBxdWV1ZUxpbWl0OiAtMSxcbiAgICAgIGZsdXNoSW50ZXJ2YWw6IDUwMCxcbiAgICAgIGRpc3RyaWJ1dGVkVHJhY2luZzogdHJ1ZSxcbiAgICAgIGRpc3RyaWJ1dGVkVHJhY2luZ09yaWdpbnM6IFtdLFxuICAgICAgZGlzdHJpYnV0ZWRUcmFjaW5nSGVhZGVyTmFtZTogJ3RyYWNlcGFyZW50JyxcbiAgICAgIHBhZ2VMb2FkVHJhY2VJZDogJycsXG4gICAgICBwYWdlTG9hZFNwYW5JZDogJycsXG4gICAgICBwYWdlTG9hZFNhbXBsZWQ6IGZhbHNlLFxuICAgICAgcGFnZUxvYWRUcmFuc2FjdGlvbk5hbWU6ICcnLFxuICAgICAgdHJhbnNhY3Rpb25TYW1wbGVSYXRlOiAxLjAsXG4gICAgICBjZW50cmFsQ29uZmlnOiBmYWxzZSxcbiAgICAgIG1vbml0b3JMb25ndGFza3M6IHRydWUsXG4gICAgICBhcGlWZXJzaW9uOiAyLFxuICAgICAgY29udGV4dDoge31cbiAgICB9O1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIHRoaXMudmVyc2lvbiA9ICcnO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbmZpZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzY3JpcHREYXRhID0gZ2V0Q29uZmlnRnJvbVNjcmlwdCgpO1xuICAgIHRoaXMuc2V0Q29uZmlnKHNjcmlwdERhdGEpO1xuICB9O1xuXG4gIF9wcm90by5zZXRWZXJzaW9uID0gZnVuY3Rpb24gc2V0VmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgfTtcblxuICBfcHJvdG8uYWRkRmlsdGVyID0gZnVuY3Rpb24gYWRkRmlsdGVyKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCB0byBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJzLnB1c2goY2IpO1xuICB9O1xuXG4gIF9wcm90by5hcHBseUZpbHRlcnMgPSBmdW5jdGlvbiBhcHBseUZpbHRlcnMoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhID0gdGhpcy5maWx0ZXJzW2ldKGRhdGEpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBvYmpLZXkpIHtcbiAgICAgIHJldHVybiBvYmogJiYgb2JqW29iaktleV07XG4gICAgfSwgdGhpcy5jb25maWcpO1xuICB9O1xuXG4gIF9wcm90by5zZXRVc2VyQ29udGV4dCA9IGZ1bmN0aW9uIHNldFVzZXJDb250ZXh0KHVzZXJDb250ZXh0KSB7XG4gICAgaWYgKHVzZXJDb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICAgIHVzZXJDb250ZXh0ID0ge307XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICB2YXIgX3VzZXJDb250ZXh0ID0gdXNlckNvbnRleHQsXG4gICAgICAgIGlkID0gX3VzZXJDb250ZXh0LmlkLFxuICAgICAgICB1c2VybmFtZSA9IF91c2VyQ29udGV4dC51c2VybmFtZSxcbiAgICAgICAgZW1haWwgPSBfdXNlckNvbnRleHQuZW1haWw7XG5cbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZXh0LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB1c2VybmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRleHQudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVtYWlsID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGV4dC5lbWFpbCA9IGVtYWlsO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLmNvbnRleHQudXNlciA9IGV4dGVuZCh0aGlzLmNvbmZpZy5jb250ZXh0LnVzZXIgfHwge30sIGNvbnRleHQpO1xuICB9O1xuXG4gIF9wcm90by5zZXRDdXN0b21Db250ZXh0ID0gZnVuY3Rpb24gc2V0Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KSB7XG4gICAgaWYgKGN1c3RvbUNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgICAgY3VzdG9tQ29udGV4dCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLmNvbnRleHQuY3VzdG9tID0gZXh0ZW5kKHRoaXMuY29uZmlnLmNvbnRleHQuY3VzdG9tIHx8IHt9LCBjdXN0b21Db250ZXh0KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkTGFiZWxzID0gZnVuY3Rpb24gYWRkTGFiZWxzKHRhZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5jb250ZXh0LnRhZ3MpIHtcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRleHQudGFncyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFncyk7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gc2V0TGFiZWwoaywgdGFnc1trXSwgX3RoaXMuY29uZmlnLmNvbnRleHQudGFncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldENvbmZpZyA9IGZ1bmN0aW9uIHNldENvbmZpZyhwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcGVydGllcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcHJvcGVydGllcyA9IHByb3BlcnRpZXMsXG4gICAgICAgIHRyYW5zYWN0aW9uU2FtcGxlUmF0ZSA9IF9wcm9wZXJ0aWVzLnRyYW5zYWN0aW9uU2FtcGxlUmF0ZSxcbiAgICAgICAgc2VydmVyVXJsID0gX3Byb3BlcnRpZXMuc2VydmVyVXJsO1xuXG4gICAgaWYgKHNlcnZlclVybCkge1xuICAgICAgcHJvcGVydGllcy5zZXJ2ZXJVcmwgPSBzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0cmFuc2FjdGlvblNhbXBsZVJhdGUpKSB7XG4gICAgICBpZiAodHJhbnNhY3Rpb25TYW1wbGVSYXRlIDwgMC4wMDAxICYmIHRyYW5zYWN0aW9uU2FtcGxlUmF0ZSA+IDApIHtcbiAgICAgICAgdHJhbnNhY3Rpb25TYW1wbGVSYXRlID0gMC4wMDAxO1xuICAgICAgfVxuXG4gICAgICBwcm9wZXJ0aWVzLnRyYW5zYWN0aW9uU2FtcGxlUmF0ZSA9IE1hdGgucm91bmQodHJhbnNhY3Rpb25TYW1wbGVSYXRlICogMTAwMDApIC8gMTAwMDA7XG4gICAgfVxuXG4gICAgbWVyZ2UodGhpcy5jb25maWcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuZXZlbnRzLnNlbmQoQ09ORklHX0NIQU5HRSwgW3RoaXMuY29uZmlnXSk7XG4gIH07XG5cbiAgX3Byb3RvLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUocHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB2b2lkIDApIHtcbiAgICAgIHByb3BlcnRpZXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWlyZWRLZXlzID0gWydzZXJ2aWNlTmFtZScsICdzZXJ2ZXJVcmwnXTtcbiAgICB2YXIgZXJyb3JzID0ge1xuICAgICAgbWlzc2luZzogW10sXG4gICAgICBpbnZhbGlkOiBbXVxuICAgIH07XG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAocmVxdWlyZWRLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgIXByb3BlcnRpZXNba2V5XSkge1xuICAgICAgICBlcnJvcnMubWlzc2luZy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAhL15bYS16QS1aMC05IF8tXSskLy50ZXN0KHByb3BlcnRpZXMuc2VydmljZU5hbWUpKSB7XG4gICAgICBlcnJvcnMuaW52YWxpZC5wdXNoKHtcbiAgICAgICAga2V5OiAnc2VydmljZU5hbWUnLFxuICAgICAgICB2YWx1ZTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgYWxsb3dlZDogJ2EteiwgQS1aLCAwLTksIF8sIC0sIDxzcGFjZT4nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc2FtcGxlUmF0ZSA9IHByb3BlcnRpZXMudHJhbnNhY3Rpb25TYW1wbGVSYXRlO1xuXG4gICAgaWYgKHR5cGVvZiBzYW1wbGVSYXRlICE9PSAndW5kZWZpbmVkJyAmJiAodHlwZW9mIHNhbXBsZVJhdGUgIT09ICdudW1iZXInIHx8IGlzTmFOKHNhbXBsZVJhdGUpIHx8IHNhbXBsZVJhdGUgPCAwIHx8IHNhbXBsZVJhdGUgPiAxKSkge1xuICAgICAgZXJyb3JzLmludmFsaWQucHVzaCh7XG4gICAgICAgIGtleTogJ3RyYW5zYWN0aW9uU2FtcGxlUmF0ZScsXG4gICAgICAgIHZhbHVlOiBzYW1wbGVSYXRlLFxuICAgICAgICBhbGxvd2VkOiAnTnVtYmVyIGJldHdlZW4gMCBhbmQgMSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgX3Byb3RvLmdldExvY2FsQ29uZmlnID0gZnVuY3Rpb24gZ2V0TG9jYWxDb25maWcoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oTE9DQUxfQ09ORklHX0tFWSk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShjb25maWcpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0TG9jYWxDb25maWcgPSBmdW5jdGlvbiBzZXRMb2NhbENvbmZpZyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKExPQ0FMX0NPTkZJR19LRVksIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29uZmlnO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7IiwidmFyIFNDSEVEVUxFID0gJ3NjaGVkdWxlJztcbnZhciBJTlZPS0UgPSAnaW52b2tlJztcbnZhciBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG52YXIgUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTID0gWydsaW5rJywgJ2NzcycsICdzY3JpcHQnLCAnaW1nJywgJ3htbGh0dHByZXF1ZXN0JywgJ2ZldGNoJywgJ2JlYWNvbicsICdpZnJhbWUnXTtcbnZhciBSRVVTQUJJTElUWV9USFJFU0hPTEQgPSA1MDAwO1xudmFyIE1BWF9TUEFOX0RVUkFUSU9OID0gNSAqIDYwICogMTAwMDtcbnZhciBQQUdFX0xPQUQgPSAncGFnZS1sb2FkJztcbnZhciBST1VURV9DSEFOR0UgPSAncm91dGUtY2hhbmdlJztcbnZhciBUWVBFX0NVU1RPTSA9ICdjdXN0b20nO1xudmFyIFVTRVJfSU5URVJBQ1RJT04gPSAndXNlci1pbnRlcmFjdGlvbic7XG52YXIgSFRUUF9SRVFVRVNUX1RZUEUgPSAnaHR0cC1yZXF1ZXN0JztcbnZhciBURU1QT1JBUllfVFlQRSA9ICd0ZW1wb3JhcnknO1xudmFyIE5BTUVfVU5LTk9XTiA9ICdVbmtub3duJztcbnZhciBUUkFOU0FDVElPTl9UWVBFX09SREVSID0gW1BBR0VfTE9BRCwgUk9VVEVfQ0hBTkdFLCBVU0VSX0lOVEVSQUNUSU9OLCBIVFRQX1JFUVVFU1RfVFlQRSwgVFlQRV9DVVNUT00sIFRFTVBPUkFSWV9UWVBFXTtcbnZhciBPVVRDT01FX1NVQ0NFU1MgPSAnc3VjY2Vzcyc7XG52YXIgT1VUQ09NRV9GQUlMVVJFID0gJ2ZhaWx1cmUnO1xudmFyIFVTRVJfVElNSU5HX1RIUkVTSE9MRCA9IDYwO1xudmFyIFRSQU5TQUNUSU9OX1NUQVJUID0gJ3RyYW5zYWN0aW9uOnN0YXJ0JztcbnZhciBUUkFOU0FDVElPTl9FTkQgPSAndHJhbnNhY3Rpb246ZW5kJztcbnZhciBDT05GSUdfQ0hBTkdFID0gJ2NvbmZpZzpjaGFuZ2UnO1xudmFyIFhNTEhUVFBSRVFVRVNUID0gJ3htbGh0dHByZXF1ZXN0JztcbnZhciBGRVRDSCA9ICdmZXRjaCc7XG52YXIgSElTVE9SWSA9ICdoaXN0b3J5JztcbnZhciBFVkVOVF9UQVJHRVQgPSAnZXZlbnR0YXJnZXQnO1xudmFyIEVSUk9SID0gJ2Vycm9yJztcbnZhciBCRUZPUkVfRVZFTlQgPSAnOmJlZm9yZSc7XG52YXIgQUZURVJfRVZFTlQgPSAnOmFmdGVyJztcbnZhciBMT0NBTF9DT05GSUdfS0VZID0gJ2VsYXN0aWNfYXBtX2NvbmZpZyc7XG52YXIgTE9OR19UQVNLID0gJ2xvbmd0YXNrJztcbnZhciBQQUlOVCA9ICdwYWludCc7XG52YXIgTUVBU1VSRSA9ICdtZWFzdXJlJztcbnZhciBOQVZJR0FUSU9OID0gJ25hdmlnYXRpb24nO1xudmFyIFJFU09VUkNFID0gJ3Jlc291cmNlJztcbnZhciBGSVJTVF9DT05URU5URlVMX1BBSU5UID0gJ2ZpcnN0LWNvbnRlbnRmdWwtcGFpbnQnO1xudmFyIExBUkdFU1RfQ09OVEVOVEZVTF9QQUlOVCA9ICdsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnQnO1xudmFyIEZJUlNUX0lOUFVUID0gJ2ZpcnN0LWlucHV0JztcbnZhciBMQVlPVVRfU0hJRlQgPSAnbGF5b3V0LXNoaWZ0JztcbnZhciBFUlJPUlMgPSAnZXJyb3JzJztcbnZhciBUUkFOU0FDVElPTlMgPSAndHJhbnNhY3Rpb25zJztcbnZhciBDT05GSUdfU0VSVklDRSA9ICdDb25maWdTZXJ2aWNlJztcbnZhciBMT0dHSU5HX1NFUlZJQ0UgPSAnTG9nZ2luZ1NlcnZpY2UnO1xudmFyIEFQTV9TRVJWRVIgPSAnQXBtU2VydmVyJztcbnZhciBUUlVOQ0FURURfVFlQRSA9ICcudHJ1bmNhdGVkJztcbnZhciBLRVlXT1JEX0xJTUlUID0gMTAyNDtcbmV4cG9ydCB7IFNDSEVEVUxFLCBJTlZPS0UsIEFERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIsIFJFU09VUkNFX0lOSVRJQVRPUl9UWVBFUywgUkVVU0FCSUxJVFlfVEhSRVNIT0xELCBNQVhfU1BBTl9EVVJBVElPTiwgUEFHRV9MT0FELCBST1VURV9DSEFOR0UsIE5BTUVfVU5LTk9XTiwgVFlQRV9DVVNUT00sIFVTRVJfVElNSU5HX1RIUkVTSE9MRCwgVFJBTlNBQ1RJT05fU1RBUlQsIFRSQU5TQUNUSU9OX0VORCwgQ09ORklHX0NIQU5HRSwgWE1MSFRUUFJFUVVFU1QsIEZFVENILCBISVNUT1JZLCBFVkVOVF9UQVJHRVQsIEVSUk9SLCBCRUZPUkVfRVZFTlQsIEFGVEVSX0VWRU5ULCBMT0NBTF9DT05GSUdfS0VZLCBIVFRQX1JFUVVFU1RfVFlQRSwgTE9OR19UQVNLLCBQQUlOVCwgTUVBU1VSRSwgTkFWSUdBVElPTiwgUkVTT1VSQ0UsIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlQsIExBUkdFU1RfQ09OVEVOVEZVTF9QQUlOVCwgS0VZV09SRF9MSU1JVCwgVEVNUE9SQVJZX1RZUEUsIFVTRVJfSU5URVJBQ1RJT04sIFRSQU5TQUNUSU9OX1RZUEVfT1JERVIsIEVSUk9SUywgVFJBTlNBQ1RJT05TLCBDT05GSUdfU0VSVklDRSwgTE9HR0lOR19TRVJWSUNFLCBBUE1fU0VSVkVSLCBUUlVOQ0FURURfVFlQRSwgRklSU1RfSU5QVVQsIExBWU9VVF9TSElGVCwgT1VUQ09NRV9TVUNDRVNTLCBPVVRDT01FX0ZBSUxVUkUgfTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IFVybCB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7IFBBR0VfTE9BRCwgTkFWSUdBVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFNlcnZlclRpbWluZ0luZm8sIFBFUkYsIGlzUGVyZlRpbWVsaW5lU3VwcG9ydGVkIH0gZnJvbSAnLi91dGlscyc7XG52YXIgTEVGVF9TUVVBUkVfQlJBQ0tFVCA9IDkxO1xudmFyIFJJR0hUX1NRVUFSRV9CUkFDS0VUID0gOTM7XG52YXIgRVhURVJOQUwgPSAnZXh0ZXJuYWwnO1xudmFyIFJFU09VUkNFID0gJ3Jlc291cmNlJztcbnZhciBIQVJEX05BVklHQVRJT04gPSAnaGFyZC1uYXZpZ2F0aW9uJztcblxuZnVuY3Rpb24gZ2V0UG9ydE51bWJlcihwb3J0LCBwcm90b2NvbCkge1xuICBpZiAocG9ydCA9PT0gJycpIHtcbiAgICBwb3J0ID0gcHJvdG9jb2wgPT09ICdodHRwOicgPyAnODAnIDogcHJvdG9jb2wgPT09ICdodHRwczonID8gJzQ0MycgOiAnJztcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5mdW5jdGlvbiBnZXRSZXNwb25zZUNvbnRleHQocGVyZlRpbWluZ0VudHJ5KSB7XG4gIHZhciB0cmFuc2ZlclNpemUgPSBwZXJmVGltaW5nRW50cnkudHJhbnNmZXJTaXplLFxuICAgICAgZW5jb2RlZEJvZHlTaXplID0gcGVyZlRpbWluZ0VudHJ5LmVuY29kZWRCb2R5U2l6ZSxcbiAgICAgIGRlY29kZWRCb2R5U2l6ZSA9IHBlcmZUaW1pbmdFbnRyeS5kZWNvZGVkQm9keVNpemUsXG4gICAgICBzZXJ2ZXJUaW1pbmcgPSBwZXJmVGltaW5nRW50cnkuc2VydmVyVGltaW5nO1xuICB2YXIgcmVzcENvbnRleHQgPSB7XG4gICAgdHJhbnNmZXJfc2l6ZTogdHJhbnNmZXJTaXplLFxuICAgIGVuY29kZWRfYm9keV9zaXplOiBlbmNvZGVkQm9keVNpemUsXG4gICAgZGVjb2RlZF9ib2R5X3NpemU6IGRlY29kZWRCb2R5U2l6ZVxuICB9O1xuICB2YXIgc2VydmVyVGltaW5nU3RyID0gZ2V0U2VydmVyVGltaW5nSW5mbyhzZXJ2ZXJUaW1pbmcpO1xuXG4gIGlmIChzZXJ2ZXJUaW1pbmdTdHIpIHtcbiAgICByZXNwQ29udGV4dC5oZWFkZXJzID0ge1xuICAgICAgJ3NlcnZlci10aW1pbmcnOiBzZXJ2ZXJUaW1pbmdTdHJcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJlc3BDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXREZXN0aW5hdGlvbihwYXJzZWRVcmwsIHR5cGUpIHtcbiAgdmFyIHBvcnQgPSBwYXJzZWRVcmwucG9ydCxcbiAgICAgIHByb3RvY29sID0gcGFyc2VkVXJsLnByb3RvY29sLFxuICAgICAgaG9zdG5hbWUgPSBwYXJzZWRVcmwuaG9zdG5hbWUsXG4gICAgICBob3N0ID0gcGFyc2VkVXJsLmhvc3Q7XG4gIHZhciBwb3J0TnVtYmVyID0gZ2V0UG9ydE51bWJlcihwb3J0LCBwcm90b2NvbCk7XG4gIHZhciBpcHY2SG9zdG5hbWUgPSBob3N0bmFtZS5jaGFyQ29kZUF0KDApID09PSBMRUZUX1NRVUFSRV9CUkFDS0VUICYmIGhvc3RuYW1lLmNoYXJDb2RlQXQoaG9zdG5hbWUubGVuZ3RoIC0gMSkgPT09IFJJR0hUX1NRVUFSRV9CUkFDS0VUO1xuICB2YXIgYWRkcmVzcyA9IGhvc3RuYW1lO1xuXG4gIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICBhZGRyZXNzID0gaG9zdG5hbWUuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXJ2aWNlOiB7XG4gICAgICBuYW1lOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxuICAgICAgcmVzb3VyY2U6IGhvc3RuYW1lICsgJzonICsgcG9ydE51bWJlcixcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgcG9ydDogTnVtYmVyKHBvcnROdW1iZXIpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlc291cmNlQ29udGV4dChkYXRhKSB7XG4gIHZhciBlbnRyeSA9IGRhdGEuZW50cnksXG4gICAgICB1cmwgPSBkYXRhLnVybDtcbiAgdmFyIHBhcnNlZFVybCA9IG5ldyBVcmwodXJsKTtcbiAgdmFyIGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb24ocGFyc2VkVXJsLCBSRVNPVVJDRSk7XG4gIHJldHVybiB7XG4gICAgaHR0cDoge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICByZXNwb25zZTogZ2V0UmVzcG9uc2VDb250ZXh0KGVudHJ5KVxuICAgIH0sXG4gICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEV4dGVybmFsQ29udGV4dChkYXRhKSB7XG4gIHZhciB1cmwgPSBkYXRhLnVybCxcbiAgICAgIG1ldGhvZCA9IGRhdGEubWV0aG9kLFxuICAgICAgdGFyZ2V0ID0gZGF0YS50YXJnZXQsXG4gICAgICByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gIHZhciBwYXJzZWRVcmwgPSBuZXcgVXJsKHVybCk7XG4gIHZhciBkZXN0aW5hdGlvbiA9IGdldERlc3RpbmF0aW9uKHBhcnNlZFVybCwgRVhURVJOQUwpO1xuICB2YXIgY29udGV4dCA9IHtcbiAgICBodHRwOiB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogcGFyc2VkVXJsLmhyZWZcbiAgICB9LFxuICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvblxuICB9O1xuICB2YXIgc3RhdHVzQ29kZTtcblxuICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQuc3RhdHVzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHN0YXR1c0NvZGUgPSB0YXJnZXQuc3RhdHVzO1xuICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XG4gICAgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcbiAgfVxuXG4gIGNvbnRleHQuaHR0cC5zdGF0dXNfY29kZSA9IHN0YXR1c0NvZGU7XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXROYXZpZ2F0aW9uQ29udGV4dChkYXRhKSB7XG4gIHZhciB1cmwgPSBkYXRhLnVybDtcbiAgdmFyIHBhcnNlZFVybCA9IG5ldyBVcmwodXJsKTtcbiAgdmFyIGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb24ocGFyc2VkVXJsLCBIQVJEX05BVklHQVRJT04pO1xuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvblxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZUNvbnRleHQoKSB7XG4gIHJldHVybiB7XG4gICAgcGFnZToge1xuICAgICAgcmVmZXJlcjogZG9jdW1lbnQucmVmZXJyZXIsXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWZcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkU3BhbkNvbnRleHQoc3BhbiwgZGF0YSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHlwZSA9IHNwYW4udHlwZTtcbiAgdmFyIGNvbnRleHQ7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBFWFRFUk5BTDpcbiAgICAgIGNvbnRleHQgPSBnZXRFeHRlcm5hbENvbnRleHQoZGF0YSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgUkVTT1VSQ0U6XG4gICAgICBjb250ZXh0ID0gZ2V0UmVzb3VyY2VDb250ZXh0KGRhdGEpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEhBUkRfTkFWSUdBVElPTjpcbiAgICAgIGNvbnRleHQgPSBnZXROYXZpZ2F0aW9uQ29udGV4dChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3Bhbi5hZGRDb250ZXh0KGNvbnRleHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRyYW5zYWN0aW9uQ29udGV4dCh0cmFuc2FjdGlvbiwgX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHRhZ3MgPSBfcmVmLnRhZ3MsXG4gICAgICBjb25maWdDb250ZXh0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1widGFnc1wiXSk7XG5cbiAgdmFyIHBhZ2VDb250ZXh0ID0gZ2V0UGFnZUNvbnRleHQoKTtcbiAgdmFyIHJlc3BvbnNlQ29udGV4dCA9IHt9O1xuXG4gIGlmICh0cmFuc2FjdGlvbi50eXBlID09PSBQQUdFX0xPQUQgJiYgaXNQZXJmVGltZWxpbmVTdXBwb3J0ZWQoKSkge1xuICAgIHZhciBlbnRyaWVzID0gUEVSRi5nZXRFbnRyaWVzQnlUeXBlKE5BVklHQVRJT04pO1xuXG4gICAgaWYgKGVudHJpZXMgJiYgZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXNwb25zZUNvbnRleHQgPSB7XG4gICAgICAgIHJlc3BvbnNlOiBnZXRSZXNwb25zZUNvbnRleHQoZW50cmllc1swXSlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdHJhbnNhY3Rpb24uYWRkQ29udGV4dChwYWdlQ29udGV4dCwgcmVzcG9uc2VDb250ZXh0LCBjb25maWdDb250ZXh0KTtcbn0iLCJpbXBvcnQgeyBCRUZPUkVfRVZFTlQsIEFGVEVSX0VWRU5UIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG52YXIgRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBFdmVudEhhbmRsZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vYnNlcnZlID0gZnVuY3Rpb24gb2JzZXJ2ZShuYW1lLCBmbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW25hbWVdKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzW25hbWVdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMub2JzZXJ2ZXJzW25hbWVdLnB1c2goZm4pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMub2JzZXJ2ZXJzW25hbWVdLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZW5kT25seSA9IGZ1bmN0aW9uIHNlbmRPbmx5KG5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgb2JzID0gdGhpcy5vYnNlcnZlcnNbbmFtZV07XG5cbiAgICBpZiAob2JzKSB7XG4gICAgICBvYnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2VuZCA9IGZ1bmN0aW9uIHNlbmQobmFtZSwgYXJncykge1xuICAgIHRoaXMuc2VuZE9ubHkobmFtZSArIEJFRk9SRV9FVkVOVCwgYXJncyk7XG4gICAgdGhpcy5zZW5kT25seShuYW1lLCBhcmdzKTtcbiAgICB0aGlzLnNlbmRPbmx5KG5hbWUgKyBBRlRFUl9FVkVOVCwgYXJncyk7XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50SGFuZGxlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyOyIsImltcG9ydCB7IFhNTEhUVFBSRVFVRVNULCBGRVRDSCwgSElTVE9SWSwgUEFHRV9MT0FELCBFUlJPUiwgRVZFTlRfVEFSR0VUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RydW1lbnRhdGlvbkZsYWdzKGluc3RydW1lbnQsIGRpc2FibGVkSW5zdHJ1bWVudGF0aW9ucykge1xuICB2YXIgX2ZsYWdzO1xuXG4gIHZhciBmbGFncyA9IChfZmxhZ3MgPSB7fSwgX2ZsYWdzW1hNTEhUVFBSRVFVRVNUXSA9IGZhbHNlLCBfZmxhZ3NbRkVUQ0hdID0gZmFsc2UsIF9mbGFnc1tISVNUT1JZXSA9IGZhbHNlLCBfZmxhZ3NbUEFHRV9MT0FEXSA9IGZhbHNlLCBfZmxhZ3NbRVJST1JdID0gZmFsc2UsIF9mbGFnc1tFVkVOVF9UQVJHRVRdID0gZmFsc2UsIF9mbGFncyk7XG5cbiAgaWYgKCFpbnN0cnVtZW50KSB7XG4gICAgcmV0dXJuIGZsYWdzO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChkaXNhYmxlZEluc3RydW1lbnRhdGlvbnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgZmxhZ3Nba2V5XSA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZsYWdzO1xufSIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIExvZ2dpbmdTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMb2dnaW5nU2VydmljZShzcGVjKSB7XG4gICAgaWYgKHNwZWMgPT09IHZvaWQgMCkge1xuICAgICAgc3BlYyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMubGV2ZWxzID0gWyd0cmFjZScsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXTtcbiAgICB0aGlzLmxldmVsID0gc3BlYy5sZXZlbCB8fCAnd2Fybic7XG4gICAgdGhpcy5wcmVmaXggPSBzcGVjLnByZWZpeCB8fCAnJztcbiAgICB0aGlzLnJlc2V0TG9nTWV0aG9kcygpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvZ2dpbmdTZXJ2aWNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2hvdWxkTG9nID0gZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG4gICAgcmV0dXJuIHRoaXMubGV2ZWxzLmluZGV4T2YobGV2ZWwpID49IHRoaXMubGV2ZWxzLmluZGV4T2YodGhpcy5sZXZlbCk7XG4gIH07XG5cbiAgX3Byb3RvLnNldExldmVsID0gZnVuY3Rpb24gc2V0TGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAobGV2ZWwgPT09IHRoaXMubGV2ZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5yZXNldExvZ01ldGhvZHMoKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXRMb2dNZXRob2RzID0gZnVuY3Rpb24gcmVzZXRMb2dNZXRob2RzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmxldmVscy5mb3JFYWNoKGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgX3RoaXNbbGV2ZWxdID0gX3RoaXMuc2hvdWxkTG9nKGxldmVsKSA/IGxvZyA6IG5vb3A7XG5cbiAgICAgIGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRMZXZlbCA9IGxldmVsO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gJ3RyYWNlJyB8fCBsZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgIG5vcm1hbGl6ZWRMZXZlbCA9ICdpbmZvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBhcmdzWzBdID0gdGhpcy5wcmVmaXggKyBhcmdzWzBdO1xuXG4gICAgICAgIGlmIChjb25zb2xlKSB7XG4gICAgICAgICAgdmFyIHJlYWxNZXRob2QgPSBjb25zb2xlW25vcm1hbGl6ZWRMZXZlbF0gfHwgY29uc29sZS5sb2c7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHJlYWxNZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlYWxNZXRob2QuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExvZ2dpbmdTZXJ2aWNlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnaW5nU2VydmljZTsiLCJ2YXIgTkRKU09OID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOREpTT04oKSB7fVxuXG4gIE5ESlNPTi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkob2JqZWN0KSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCkgKyAnXFxuJztcbiAgfTtcblxuICByZXR1cm4gTkRKU09OO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBOREpTT047IiwiaW1wb3J0IHsgU0NIRURVTEUsIElOVk9LRSwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgRVZFTlRfVEFSR0VUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFwbVN5bWJvbCB9IGZyb20gJy4vcGF0Y2gtdXRpbHMnO1xudmFyIGV2ZW50VHlwZXMgPSBbJ2NsaWNrJ107XG52YXIgZXZlbnRUeXBlU3ltYm9scyA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGV0ID0gZXZlbnRUeXBlc1tpXTtcbiAgZXZlbnRUeXBlU3ltYm9sc1tldF0gPSBhcG1TeW1ib2woZXQpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRJbnN0cnVtZW50RXZlbnQodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4pIHtcbiAgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZXZlbnRUeXBlcy5pbmRleE9mKGV2ZW50VHlwZSkgPj0gMCAmJiB0eXBlb2YgbGlzdGVuZXJGbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXQoY2FsbGJhY2spIHtcbiAgaWYgKCF3aW5kb3cuRXZlbnRUYXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcHJvdG8gPSB3aW5kb3cuRXZlbnRUYXJnZXQucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl9TVFJdO1xuICB2YXIgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJdO1xuXG4gIGZ1bmN0aW9uIGZpbmRUYXNrSW5kZXgoZXhpc3RpbmdUYXNrcywgZXZlbnRUeXBlLCBsaXN0ZW5lckZuLCBjYXB0dXJlKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgdGFzayA9IGV4aXN0aW5nVGFza3NbX2ldO1xuXG4gICAgICBpZiAodGFzay5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSAmJiB0YXNrLmxpc3RlbmVyRm4gPT09IGxpc3RlbmVyRm4gJiYgdGFzay5jYXB0dXJlID09PSBjYXB0dXJlKSB7XG4gICAgICAgIHJldHVybiBfaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NhcHR1cmUob3B0aW9ucykge1xuICAgIHZhciBjYXB0dXJlO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNhcHR1cmUgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXB0dXJlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5jYXB0dXJlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcHR1cmU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMaXN0ZW5lcldyYXBwZXIodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnMpIHtcbiAgICB2YXIgZXZlbnRTeW1ib2wgPSBldmVudFR5cGVTeW1ib2xzW2V2ZW50VHlwZV07XG4gICAgaWYgKCFldmVudFN5bWJvbCkgcmV0dXJuIGxpc3RlbmVyRm47XG4gICAgdmFyIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbZXZlbnRTeW1ib2xdO1xuICAgIHZhciBjYXB0dXJlID0gaXNDYXB0dXJlKG9wdGlvbnMpO1xuXG4gICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgIHZhciB0YXNrSW5kZXggPSBmaW5kVGFza0luZGV4KGV4aXN0aW5nVGFza3MsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgY2FwdHVyZSk7XG5cbiAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZhciBfdGFzayA9IGV4aXN0aW5nVGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgcmV0dXJuIF90YXNrLndyYXBwaW5nRm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbZXZlbnRTeW1ib2xdID0gW107XG4gICAgfVxuXG4gICAgdmFyIHRhc2sgPSB7XG4gICAgICBzb3VyY2U6IEVWRU5UX1RBUkdFVCxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICBsaXN0ZW5lckZuOiBsaXN0ZW5lckZuLFxuICAgICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICAgIHdyYXBwaW5nRm46IHdyYXBwaW5nRm5cbiAgICB9O1xuICAgIGV4aXN0aW5nVGFza3MucHVzaCh0YXNrKTtcblxuICAgIGZ1bmN0aW9uIHdyYXBwaW5nRm4oKSB7XG4gICAgICBjYWxsYmFjayhTQ0hFRFVMRSwgdGFzayk7XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBsaXN0ZW5lckZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjYWxsYmFjayhJTlZPS0UsIHRhc2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGluZ0ZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V3JhcHBpbmdGbih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9ucykge1xuICAgIHZhciBldmVudFN5bWJvbCA9IGV2ZW50VHlwZVN5bWJvbHNbZXZlbnRUeXBlXTtcbiAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtldmVudFN5bWJvbF07XG5cbiAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgdmFyIGNhcHR1cmUgPSBpc0NhcHR1cmUob3B0aW9ucyk7XG4gICAgICB2YXIgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleChleGlzdGluZ1Rhc2tzLCBldmVudFR5cGUsIGxpc3RlbmVyRm4sIGNhcHR1cmUpO1xuXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICB2YXIgdGFzayA9IGV4aXN0aW5nVGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0YXJnZXRbZXZlbnRTeW1ib2xdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhc2sud3JhcHBpbmdGbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdGVuZXJGbjtcbiAgfVxuXG4gIHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl9TVFJdID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuXG4gICAgaWYgKCFzaG91bGRJbnN0cnVtZW50RXZlbnQodGFyZ2V0LCBldmVudFR5cGUsIGxpc3RlbmVyRm4pKSB7XG4gICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIHdyYXBwaW5nTGlzdGVuZXJGbiA9IGNyZWF0ZUxpc3RlbmVyV3JhcHBlcih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGFyZ3NbMV0gPSB3cmFwcGluZ0xpc3RlbmVyRm47XG4gICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgfTtcblxuICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSXSA9IGZ1bmN0aW9uIChldmVudFR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnNPckNhcHR1cmUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcblxuICAgIGlmICghc2hvdWxkSW5zdHJ1bWVudEV2ZW50KHRhcmdldCwgZXZlbnRUeXBlLCBsaXN0ZW5lckZuKSkge1xuICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHZhciB3cmFwcGluZ0ZuID0gZ2V0V3JhcHBpbmdGbih0YXJnZXQsIGV2ZW50VHlwZSwgbGlzdGVuZXJGbiwgb3B0aW9uc09yQ2FwdHVyZSk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGFyZ3NbMV0gPSB3cmFwcGluZ0ZuO1xuICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gIH07XG59IiwiaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJy4uL3BvbHlmaWxscyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4vcGF0Y2gtdXRpbHMnO1xuaW1wb3J0IHsgU0NIRURVTEUsIElOVk9LRSwgRkVUQ0ggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2NoZWR1bGVNaWNyb1Rhc2sgfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGZXRjaChjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5mZXRjaCB8fCAhd2luZG93LlJlcXVlc3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgIHRhc2suc3RhdGUgPSBTQ0hFRFVMRTtcbiAgICBjYWxsYmFjayhTQ0hFRFVMRSwgdGFzayk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VUYXNrKHRhc2spIHtcbiAgICB0YXNrLnN0YXRlID0gSU5WT0tFO1xuICAgIGNhbGxiYWNrKElOVk9LRSwgdGFzayk7XG4gIH1cblxuICB2YXIgbmF0aXZlRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XG5cbiAgd2luZG93LmZldGNoID0gZnVuY3Rpb24gKGlucHV0LCBpbml0KSB7XG4gICAgdmFyIGZldGNoU2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHJlcXVlc3QsIHVybDtcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuICAgICAgdXJsID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpbnB1dCkge1xuICAgICAgcmVxdWVzdCA9IGlucHV0O1xuICAgICAgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuYXRpdmVGZXRjaC5hcHBseShmZXRjaFNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZhciB0YXNrID0ge1xuICAgICAgc291cmNlOiBGRVRDSCxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHR5cGU6ICdtYWNyb1Rhc2snLFxuICAgICAgZGF0YToge1xuICAgICAgICB0YXJnZXQ6IHJlcXVlc3QsXG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBhYm9ydGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmZldGNoSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICBzY2hlZHVsZVRhc2sodGFzayk7XG4gICAgICB2YXIgcHJvbWlzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZSA9IG5hdGl2ZUZldGNoLmFwcGx5KGZldGNoU2VsZiwgW3JlcXVlc3RdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHRhc2suZGF0YS5lcnJvciA9IGVycm9yO1xuICAgICAgICBpbnZva2VUYXNrKHRhc2spO1xuICAgICAgICBnbG9iYWxTdGF0ZS5mZXRjaEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGFzay5kYXRhLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgaW52b2tlVGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRhc2suZGF0YS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgIGludm9rZVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5mZXRjaEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBJTlZPS0UsIEhJU1RPUlkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSGlzdG9yeShjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5oaXN0b3J5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5hdGl2ZVB1c2hTdGF0ZSA9IGhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIGlmICh0eXBlb2YgbmF0aXZlUHVzaFN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHRpdGxlLCB1cmwpIHtcbiAgICAgIHZhciB0YXNrID0ge1xuICAgICAgICBzb3VyY2U6IEhJU1RPUlksXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjYWxsYmFjayhJTlZPS0UsIHRhc2spO1xuICAgICAgbmF0aXZlUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufSIsImltcG9ydCB7IHBhdGNoWE1MSHR0cFJlcXVlc3QgfSBmcm9tICcuL3hoci1wYXRjaCc7XG5pbXBvcnQgeyBwYXRjaEZldGNoIH0gZnJvbSAnLi9mZXRjaC1wYXRjaCc7XG5pbXBvcnQgeyBwYXRjaEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnktcGF0Y2gnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudFRhcmdldCB9IGZyb20gJy4vZXZlbnQtdGFyZ2V0LXBhdGNoJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBISVNUT1JZLCBGRVRDSCwgWE1MSFRUUFJFUVVFU1QsIEVWRU5UX1RBUkdFVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgcGF0Y2hFdmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG52YXIgYWxyZWFkeVBhdGNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gcGF0Y2hBbGwoKSB7XG4gIGlmICghYWxyZWFkeVBhdGNoZWQpIHtcbiAgICBhbHJlYWR5UGF0Y2hlZCA9IHRydWU7XG4gICAgcGF0Y2hYTUxIdHRwUmVxdWVzdChmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLnNlbmQoWE1MSFRUUFJFUVVFU1QsIFtldmVudCwgdGFza10pO1xuICAgIH0pO1xuICAgIHBhdGNoRmV0Y2goZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEZFVENILCBbZXZlbnQsIHRhc2tdKTtcbiAgICB9KTtcbiAgICBwYXRjaEhpc3RvcnkoZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEhJU1RPUlksIFtldmVudCwgdGFza10pO1xuICAgIH0pO1xuICAgIHBhdGNoRXZlbnRUYXJnZXQoZnVuY3Rpb24gKGV2ZW50LCB0YXNrKSB7XG4gICAgICBwYXRjaEV2ZW50SGFuZGxlci5zZW5kKEVWRU5UX1RBUkdFVCwgW2V2ZW50LCB0YXNrXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGF0Y2hFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCB7IHBhdGNoQWxsLCBwYXRjaEV2ZW50SGFuZGxlciB9OyIsImV4cG9ydCB2YXIgZ2xvYmFsU3RhdGUgPSB7XG4gIGZldGNoSW5Qcm9ncmVzczogZmFsc2Vcbn07XG5leHBvcnQgZnVuY3Rpb24gYXBtU3ltYm9sKG5hbWUpIHtcbiAgcmV0dXJuICdfX2FwbV9zeW1ib2xfXycgKyBuYW1lO1xufVxuXG5mdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBvcmlnaW5hbCkge1xuICBwYXRjaGVkW2FwbVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpXSA9IG9yaWdpbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gIHZhciBwcm90byA9IHRhcmdldDtcblxuICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICBwcm90byA9IHRhcmdldDtcbiAgfVxuXG4gIHZhciBkZWxlZ2F0ZU5hbWUgPSBhcG1TeW1ib2wobmFtZSk7XG4gIHZhciBkZWxlZ2F0ZTtcblxuICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG4gICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG4gICAgdmFyIGRlc2MgPSBwcm90byAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcblxuICAgIGlmIChpc1Byb3BlcnR5V3JpdGFibGUoZGVzYykpIHtcbiAgICAgIHZhciBwYXRjaERlbGVnYXRlID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcblxuICAgICAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVsZWdhdGU7XG59XG5leHBvcnQgdmFyIFhIUl9JR05PUkUgPSBhcG1TeW1ib2woJ3hocklnbm9yZScpO1xuZXhwb3J0IHZhciBYSFJfU1lOQyA9IGFwbVN5bWJvbCgneGhyU3luYycpO1xuZXhwb3J0IHZhciBYSFJfVVJMID0gYXBtU3ltYm9sKCd4aHJVUkwnKTtcbmV4cG9ydCB2YXIgWEhSX01FVEhPRCA9IGFwbVN5bWJvbCgneGhyTWV0aG9kJyk7IiwiaW1wb3J0IHsgcGF0Y2hNZXRob2QsIFhIUl9TWU5DLCBYSFJfVVJMLCBYSFJfTUVUSE9ELCBYSFJfSUdOT1JFIH0gZnJvbSAnLi9wYXRjaC11dGlscyc7XG5pbXBvcnQgeyBTQ0hFRFVMRSwgSU5WT0tFLCBYTUxIVFRQUkVRVUVTVCwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hYTUxIdHRwUmVxdWVzdChjYWxsYmFjaykge1xuICB2YXIgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG5cbiAgaWYgKCFYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSB8fCAhWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbQUREX0VWRU5UX0xJU1RFTkVSX1NUUl0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ3JlYWR5c3RhdGVjaGFuZ2UnO1xuICB2YXIgTE9BRCA9ICdsb2FkJztcbiAgdmFyIEVSUk9SID0gJ2Vycm9yJztcbiAgdmFyIFRJTUVPVVQgPSAndGltZW91dCc7XG4gIHZhciBBQk9SVCA9ICdhYm9ydCc7XG5cbiAgZnVuY3Rpb24gaW52b2tlVGFzayh0YXNrLCBzdGF0dXMpIHtcbiAgICBpZiAodGFzay5zdGF0ZSAhPT0gSU5WT0tFKSB7XG4gICAgICB0YXNrLnN0YXRlID0gSU5WT0tFO1xuICAgICAgdGFzay5kYXRhLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgIGNhbGxiYWNrKElOVk9LRSwgdGFzayk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICBpZiAodGFzay5zdGF0ZSA9PT0gU0NIRURVTEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXNrLnN0YXRlID0gU0NIRURVTEU7XG4gICAgY2FsbGJhY2soU0NIRURVTEUsIHRhc2spO1xuICAgIHZhciB0YXJnZXQgPSB0YXNrLmRhdGEudGFyZ2V0O1xuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIobmFtZSkge1xuICAgICAgdGFyZ2V0W0FERF9FVkVOVF9MSVNURU5FUl9TVFJdKG5hbWUsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBSRUFEWV9TVEFURV9DSEFOR0UpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQgJiYgdGFyZ2V0LnN0YXR1cyAhPT0gMCkge1xuICAgICAgICAgICAgaW52b2tlVGFzayh0YXNrLCAnc3VjY2VzcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gdHlwZSA9PT0gTE9BRCA/ICdzdWNjZXNzJyA6IHR5cGU7XG4gICAgICAgICAgaW52b2tlVGFzayh0YXNrLCBzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcihSRUFEWV9TVEFURV9DSEFOR0UpO1xuICAgIGFkZExpc3RlbmVyKExPQUQpO1xuICAgIGFkZExpc3RlbmVyKFRJTUVPVVQpO1xuICAgIGFkZExpc3RlbmVyKEVSUk9SKTtcbiAgICBhZGRMaXN0ZW5lcihBQk9SVCk7XG4gIH1cblxuICB2YXIgb3Blbk5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgIGlmICghc2VsZltYSFJfSUdOT1JFXSkge1xuICAgICAgICBzZWxmW1hIUl9NRVRIT0RdID0gYXJnc1swXTtcbiAgICAgICAgc2VsZltYSFJfVVJMXSA9IGFyZ3NbMV07XG4gICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PT0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcGVuTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gIH0pO1xuICB2YXIgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnc2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgIGlmIChzZWxmW1hIUl9JR05PUkVdKSB7XG4gICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFzayA9IHtcbiAgICAgICAgc291cmNlOiBYTUxIVFRQUkVRVUVTVCxcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICB0eXBlOiAnbWFjcm9UYXNrJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhcmdldDogc2VsZixcbiAgICAgICAgICBtZXRob2Q6IHNlbGZbWEhSX01FVEhPRF0sXG4gICAgICAgICAgc3luYzogc2VsZltYSFJfU1lOQ10sXG4gICAgICAgICAgdXJsOiBzZWxmW1hIUl9VUkxdLFxuICAgICAgICAgIHN0YXR1czogJydcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2NoZWR1bGVUYXNrKHRhc2spO1xuICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaW52b2tlVGFzayh0YXNrLCBFUlJPUik7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59IiwiaW1wb3J0IFByb21pc2VQb2xseWZpbGwgZnJvbSAncHJvbWlzZS1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL3V0aWxzJztcbnZhciBsb2NhbCA9IHt9O1xuXG5pZiAoaXNCcm93c2VyKSB7XG4gIGxvY2FsID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbG9jYWwgPSBzZWxmO1xufVxuXG52YXIgUHJvbWlzZSA9ICdQcm9taXNlJyBpbiBsb2NhbCA/IGxvY2FsLlByb21pc2UgOiBQcm9taXNlUG9sbHlmaWxsO1xuZXhwb3J0IHsgUHJvbWlzZSB9OyIsInZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVldWUob25GbHVzaCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRmx1c2ggPSBvbkZsdXNoO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnF1ZXVlTGltaXQgPSBvcHRzLnF1ZXVlTGltaXQgfHwgLTE7XG4gICAgdGhpcy5mbHVzaEludGVydmFsID0gb3B0cy5mbHVzaEludGVydmFsIHx8IDA7XG4gICAgdGhpcy50aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVldWUucHJvdG90eXBlO1xuXG4gIF9wcm90by5fc2V0VGltZXIgPSBmdW5jdGlvbiBfc2V0VGltZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZmx1c2goKTtcbiAgICB9LCB0aGlzLmZsdXNoSW50ZXJ2YWwpO1xuICB9O1xuXG4gIF9wcm90by5fY2xlYXIgPSBmdW5jdGlvbiBfY2xlYXIoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbWVvdXRJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5vbkZsdXNoKHRoaXMuaXRlbXMpO1xuXG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBpZiAodGhpcy5xdWV1ZUxpbWl0ICE9PSAtMSAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+PSB0aGlzLnF1ZXVlTGltaXQpIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbWVvdXRJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5fc2V0VGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXVlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZTsiLCJ2YXIgX3NlcnZpY2VDcmVhdG9ycztcblxuaW1wb3J0IEFwbVNlcnZlciBmcm9tICcuL2FwbS1zZXJ2ZXInO1xuaW1wb3J0IENvbmZpZ1NlcnZpY2UgZnJvbSAnLi9jb25maWctc2VydmljZSc7XG5pbXBvcnQgTG9nZ2luZ1NlcnZpY2UgZnJvbSAnLi9sb2dnaW5nLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ09ORklHX0NIQU5HRSwgQ09ORklHX1NFUlZJQ0UsIExPR0dJTkdfU0VSVklDRSwgQVBNX1NFUlZFUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IF9fREVWX18gfSBmcm9tICcuLi9zdGF0ZSc7XG52YXIgc2VydmljZUNyZWF0b3JzID0gKF9zZXJ2aWNlQ3JlYXRvcnMgPSB7fSwgX3NlcnZpY2VDcmVhdG9yc1tDT05GSUdfU0VSVklDRV0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgQ29uZmlnU2VydmljZSgpO1xufSwgX3NlcnZpY2VDcmVhdG9yc1tMT0dHSU5HX1NFUlZJQ0VdID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IExvZ2dpbmdTZXJ2aWNlKHtcbiAgICBwcmVmaXg6ICdbRWxhc3RpYyBBUE1dICdcbiAgfSk7XG59LCBfc2VydmljZUNyZWF0b3JzW0FQTV9TRVJWRVJdID0gZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgdmFyIF9mYWN0b3J5JGdldFNlcnZpY2UgPSBmYWN0b3J5LmdldFNlcnZpY2UoW0NPTkZJR19TRVJWSUNFLCBMT0dHSU5HX1NFUlZJQ0VdKSxcbiAgICAgIGNvbmZpZ1NlcnZpY2UgPSBfZmFjdG9yeSRnZXRTZXJ2aWNlWzBdLFxuICAgICAgbG9nZ2luZ1NlcnZpY2UgPSBfZmFjdG9yeSRnZXRTZXJ2aWNlWzFdO1xuXG4gIHJldHVybiBuZXcgQXBtU2VydmVyKGNvbmZpZ1NlcnZpY2UsIGxvZ2dpbmdTZXJ2aWNlKTtcbn0sIF9zZXJ2aWNlQ3JlYXRvcnMpO1xuXG52YXIgU2VydmljZUZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcnZpY2VGYWN0b3J5KCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge307XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlcnZpY2VGYWN0b3J5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuZ2V0U2VydmljZShDT05GSUdfU0VSVklDRSk7XG4gICAgY29uZmlnU2VydmljZS5pbml0KCk7XG5cbiAgICB2YXIgX3RoaXMkZ2V0U2VydmljZSA9IHRoaXMuZ2V0U2VydmljZShbTE9HR0lOR19TRVJWSUNFLCBBUE1fU0VSVkVSXSksXG4gICAgICAgIGxvZ2dpbmdTZXJ2aWNlID0gX3RoaXMkZ2V0U2VydmljZVswXSxcbiAgICAgICAgYXBtU2VydmVyID0gX3RoaXMkZ2V0U2VydmljZVsxXTtcblxuICAgIGNvbmZpZ1NlcnZpY2UuZXZlbnRzLm9ic2VydmUoQ09ORklHX0NIQU5HRSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxvZ0xldmVsID0gY29uZmlnU2VydmljZS5nZXQoJ2xvZ0xldmVsJyk7XG4gICAgICBsb2dnaW5nU2VydmljZS5zZXRMZXZlbChsb2dMZXZlbCk7XG4gICAgfSk7XG4gICAgYXBtU2VydmVyLmluaXQoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U2VydmljZSA9IGZ1bmN0aW9uIGdldFNlcnZpY2UobmFtZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzW25hbWVdKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VydmljZUNyZWF0b3JzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZXNbbmFtZV0gPSBzZXJ2aWNlQ3JlYXRvcnNbbmFtZV0odGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoX19ERVZfXykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5ub3QgZ2V0IHNlcnZpY2UsIE5vIGNyZWF0b3IgZm9yOiAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW25hbWVdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgcmV0dXJuIG5hbWUubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRTZXJ2aWNlKG4pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTZXJ2aWNlRmFjdG9yeTtcbn0oKTtcblxuZXhwb3J0IHsgc2VydmljZUNyZWF0b3JzLCBTZXJ2aWNlRmFjdG9yeSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZuLCBvblRocm90dGxlLCBvcHRzKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcztcbiAgdmFyIGxpbWl0ID0gb3B0cy5saW1pdDtcbiAgdmFyIGludGVydmFsID0gb3B0cy5pbnRlcnZhbDtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICB2YXIgdGltZW91dElkO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIrKztcblxuICAgIGlmICh0eXBlb2YgdGltZW91dElkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ZXIgPiBsaW1pdCAmJiB0eXBlb2Ygb25UaHJvdHRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9uVGhyb3R0bGUuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCB7IEtFWVdPUkRfTElNSVQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTUVUQURBVEFfTU9ERUwgPSB7XG4gIHNlcnZpY2U6IHtcbiAgICBuYW1lOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gICAgdmVyc2lvbjogdHJ1ZSxcbiAgICBhZ2VudDoge1xuICAgICAgdmVyc2lvbjogW0tFWVdPUkRfTElNSVQsIHRydWVdXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudDogdHJ1ZVxuICB9LFxuICBsYWJlbHM6IHtcbiAgICAnKic6IHRydWVcbiAgfVxufTtcbnZhciBSRVNQT05TRV9NT0RFTCA9IHtcbiAgJyonOiB0cnVlLFxuICBoZWFkZXJzOiB7XG4gICAgJyonOiB0cnVlXG4gIH1cbn07XG52YXIgREVTVElOQVRJT05fTU9ERUwgPSB7XG4gIGFkZHJlc3M6IFtLRVlXT1JEX0xJTUlUXSxcbiAgc2VydmljZToge1xuICAgICcqJzogW0tFWVdPUkRfTElNSVQsIHRydWVdXG4gIH1cbn07XG52YXIgQ09OVEVYVF9NT0RFTCA9IHtcbiAgdXNlcjoge1xuICAgIGlkOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICAgIHVzZXJuYW1lOiB0cnVlXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICAnKic6IHRydWVcbiAgfSxcbiAgaHR0cDoge1xuICAgIHJlc3BvbnNlOiBSRVNQT05TRV9NT0RFTFxuICB9LFxuICBkZXN0aW5hdGlvbjogREVTVElOQVRJT05fTU9ERUwsXG4gIHJlc3BvbnNlOiBSRVNQT05TRV9NT0RFTFxufTtcbnZhciBTUEFOX01PREVMID0ge1xuICBuYW1lOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHR5cGU6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgdHJhY2VfaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgcGFyZW50X2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHRyYW5zYWN0aW9uX2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHN1YnR5cGU6IHRydWUsXG4gIGFjdGlvbjogdHJ1ZSxcbiAgY29udGV4dDogQ09OVEVYVF9NT0RFTFxufTtcbnZhciBUUkFOU0FDVElPTl9NT0RFTCA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgcGFyZW50X2lkOiB0cnVlLFxuICB0eXBlOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIGlkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHRyYWNlX2lkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV0sXG4gIHNwYW5fY291bnQ6IHtcbiAgICBzdGFydGVkOiBbS0VZV09SRF9MSU1JVCwgdHJ1ZV1cbiAgfSxcbiAgY29udGV4dDogQ09OVEVYVF9NT0RFTFxufTtcbnZhciBFUlJPUl9NT0RFTCA9IHtcbiAgaWQ6IFtLRVlXT1JEX0xJTUlULCB0cnVlXSxcbiAgdHJhY2VfaWQ6IHRydWUsXG4gIHRyYW5zYWN0aW9uX2lkOiB0cnVlLFxuICBwYXJlbnRfaWQ6IHRydWUsXG4gIGN1bHByaXQ6IHRydWUsXG4gIGV4Y2VwdGlvbjoge1xuICAgIHR5cGU6IHRydWVcbiAgfSxcbiAgdHJhbnNhY3Rpb246IHtcbiAgICB0eXBlOiB0cnVlXG4gIH0sXG4gIGNvbnRleHQ6IENPTlRFWFRfTU9ERUxcbn07XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHZhbHVlLCBsaW1pdCwgcmVxdWlyZWQsIHBsYWNlaG9sZGVyKSB7XG4gIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7XG4gICAgbGltaXQgPSBLRVlXT1JEX0xJTUlUO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkID09PSB2b2lkIDApIHtcbiAgICByZXF1aXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHBsYWNlaG9sZGVyID09PSB2b2lkIDApIHtcbiAgICBwbGFjZWhvbGRlciA9ICdOL0EnO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkICYmIGlzRW1wdHkodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWYWx1ZSh0YXJnZXQsIGtleSwgY3Vyck1vZGVsKSB7XG4gIHZhciB2YWx1ZSA9IHRydW5jYXRlKHRhcmdldFtrZXldLCBjdXJyTW9kZWxbMF0sIGN1cnJNb2RlbFsxXSk7XG5cbiAgaWYgKGlzRW1wdHkodmFsdWUpKSB7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcmdldFtrZXldID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTW9kZWwobW9kZWwsIHRhcmdldCwgY2hpbGRUYXJnZXQpIHtcbiAgaWYgKG1vZGVsID09PSB2b2lkIDApIHtcbiAgICBtb2RlbCA9IHt9O1xuICB9XG5cbiAgaWYgKGNoaWxkVGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICBjaGlsZFRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMobW9kZWwpO1xuICB2YXIgZW1wdHlBcnIgPSBbXTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgdmFyIGN1cnJLZXkgPSBrZXlzW2ldO1xuICAgIHZhciBjdXJyTW9kZWwgPSBtb2RlbFtjdXJyS2V5XSA9PT0gdHJ1ZSA/IGVtcHR5QXJyIDogbW9kZWxbY3VycktleV07XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY3Vyck1vZGVsKSkge1xuICAgICAgdHJ1bmNhdGVNb2RlbChjdXJyTW9kZWwsIHRhcmdldCwgY2hpbGRUYXJnZXRbY3VycktleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VycktleSA9PT0gJyonKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNoaWxkVGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZVZhbHVlKGNoaWxkVGFyZ2V0LCBrZXksIGN1cnJNb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwbGFjZVZhbHVlKGNoaWxkVGFyZ2V0LCBjdXJyS2V5LCBjdXJyTW9kZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCB7IHRydW5jYXRlLCB0cnVuY2F0ZU1vZGVsLCBTUEFOX01PREVMLCBUUkFOU0FDVElPTl9NT0RFTCwgRVJST1JfTU9ERUwsIE1FVEFEQVRBX01PREVMLCBSRVNQT05TRV9NT0RFTCB9OyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBpc0RlZmF1bHRQb3J0KHBvcnQsIHByb3RvY29sKSB7XG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwOic6XG4gICAgICByZXR1cm4gcG9ydCA9PT0gJzgwJztcblxuICAgIGNhc2UgJ2h0dHBzOic6XG4gICAgICByZXR1cm4gcG9ydCA9PT0gJzQ0Myc7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFJVTEVTID0gW1snIycsICdoYXNoJ10sIFsnPycsICdxdWVyeSddLCBbJy8nLCAncGF0aCddLCBbJ0AnLCAnYXV0aCcsIDFdLCBbTmFOLCAnaG9zdCcsIHVuZGVmaW5lZCwgMV1dO1xudmFyIFBST1RPQ09MX1JFR0VYID0gL14oW2Etel1bYS16MC05ListXSo6KT8oXFwvXFwvKT8oW1xcU1xcc10qKS9pO1xuZXhwb3J0IHZhciBVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFVybCh1cmwpIHtcbiAgICB2YXIgX3RoaXMkZXh0cmFjdFByb3RvY29sID0gdGhpcy5leHRyYWN0UHJvdG9jb2wodXJsIHx8ICcnKSxcbiAgICAgICAgcHJvdG9jb2wgPSBfdGhpcyRleHRyYWN0UHJvdG9jb2wucHJvdG9jb2wsXG4gICAgICAgIGFkZHJlc3MgPSBfdGhpcyRleHRyYWN0UHJvdG9jb2wuYWRkcmVzcyxcbiAgICAgICAgc2xhc2hlcyA9IF90aGlzJGV4dHJhY3RQcm90b2NvbC5zbGFzaGVzO1xuXG4gICAgdmFyIHJlbGF0aXZlID0gIXByb3RvY29sICYmICFzbGFzaGVzO1xuICAgIHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb24oKTtcbiAgICB2YXIgaW5zdHJ1Y3Rpb25zID0gUlVMRVMuc2xpY2UoKTtcbiAgICBhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCdcXFxcJywgJy8nKTtcblxuICAgIGlmICghc2xhc2hlcykge1xuICAgICAgaW5zdHJ1Y3Rpb25zWzJdID0gW05hTiwgJ3BhdGgnXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xuICAgICAgdmFyIHBhcnNlID0gaW5zdHJ1Y3Rpb25bMF07XG4gICAgICB2YXIga2V5ID0gaW5zdHJ1Y3Rpb25bMV07XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGluZGV4ID0gYWRkcmVzcy5pbmRleE9mKHBhcnNlKTtcblxuICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgdmFyIGluc3RMZW5ndGggPSBpbnN0cnVjdGlvblsyXTtcblxuICAgICAgICAgIGlmIChpbnN0TGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBhZGRyZXNzLmxhc3RJbmRleE9mKHBhcnNlKTtcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIG5ld0luZGV4KTtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0TGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1trZXldID0gYWRkcmVzcy5zbGljZShpbmRleCk7XG4gICAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2tleV0gPSBhZGRyZXNzO1xuICAgICAgICBhZGRyZXNzID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IHRoaXNba2V5XSB8fCAocmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJycpO1xuICAgICAgaWYgKGluc3RydWN0aW9uWzNdKSB0aGlzW2tleV0gPSB0aGlzW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAocmVsYXRpdmUgJiYgdGhpcy5wYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICB0aGlzLnBhdGggPSAnLycgKyB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgdGhpcy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbCB8fCBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0O1xuICAgIHRoaXMucG9ydCA9ICcnO1xuXG4gICAgaWYgKC86XFxkKyQvLnRlc3QodGhpcy5ob3N0KSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5ob3N0LnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcG9ydCA9IHZhbHVlLnBvcCgpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuXG4gICAgICBpZiAoaXNEZWZhdWx0UG9ydChwb3J0LCB0aGlzLnByb3RvY29sKSkge1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0bmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSBob3N0bmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbiA9IHRoaXMucHJvdG9jb2wgJiYgdGhpcy5ob3N0ICYmIHRoaXMucHJvdG9jb2wgIT09ICdmaWxlOicgPyB0aGlzLnByb3RvY29sICsgJy8vJyArIHRoaXMuaG9zdCA6ICdudWxsJztcbiAgICB0aGlzLmhyZWYgPSB0aGlzLnRvU3RyaW5nKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVXJsLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5wcm90b2NvbDtcbiAgICByZXN1bHQgKz0gJy8vJztcblxuICAgIGlmICh0aGlzLmF1dGgpIHtcbiAgICAgIHZhciBSRURBQ1RFRCA9ICdbUkVEQUNURURdJztcbiAgICAgIHZhciB1c2VycGFzcyA9IHRoaXMuYXV0aC5zcGxpdCgnOicpO1xuICAgICAgdmFyIHVzZXJuYW1lID0gdXNlcnBhc3NbMF0gPyBSRURBQ1RFRCA6ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gdXNlcnBhc3NbMV0gPyAnOicgKyBSRURBQ1RFRCA6ICcnO1xuICAgICAgcmVzdWx0ICs9IHVzZXJuYW1lICsgcGFzc3dvcmQgKyAnQCc7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRoaXMuaG9zdDtcbiAgICByZXN1bHQgKz0gdGhpcy5wYXRoO1xuICAgIHJlc3VsdCArPSB0aGlzLnF1ZXJ5O1xuICAgIHJlc3VsdCArPSB0aGlzLmhhc2g7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICB2YXIgZ2xvYmFsVmFyID0ge307XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBnbG9iYWxWYXIgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JhbFZhci5sb2NhdGlvbjtcbiAgfTtcblxuICBfcHJvdG8uZXh0cmFjdFByb3RvY29sID0gZnVuY3Rpb24gZXh0cmFjdFByb3RvY29sKHVybCkge1xuICAgIHZhciBtYXRjaCA9IFBST1RPQ09MX1JFR0VYLmV4ZWModXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgICAgc2xhc2hlczogISFtYXRjaFsyXSxcbiAgICAgIGFkZHJlc3M6IG1hdGNoWzNdXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVXJsO1xufSgpO1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnlVcmwodXJsU3RyLCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgIGRlcHRoID0gMjtcbiAgfVxuXG4gIHZhciBwYXJzZWRVcmwgPSBuZXcgVXJsKHVybFN0cik7XG4gIHZhciBxdWVyeSA9IHBhcnNlZFVybC5xdWVyeSxcbiAgICAgIHBhdGggPSBwYXJzZWRVcmwucGF0aDtcbiAgdmFyIHBhdGhQYXJ0cyA9IHBhdGguc3Vic3RyaW5nKDEpLnNwbGl0KCcvJyk7XG4gIHZhciByZWRhY3RTdHJpbmcgPSAnOmlkJztcbiAgdmFyIHdpbGRjYXJkID0gJyonO1xuICB2YXIgc3BlY2lhbENoYXJzUmVnZXggPSAvXFxXfF8vZztcbiAgdmFyIGRpZ2l0c1JlZ2V4ID0gL1swLTldL2c7XG4gIHZhciBsb3dlckNhc2VSZWdleCA9IC9bYS16XS9nO1xuICB2YXIgdXBwZXJDYXNlUmVnZXggPSAvW0EtWl0vZztcbiAgdmFyIHJlZGFjdGVkUGFydHMgPSBbXTtcbiAgdmFyIHJlZGFjdGVkQmVmb3JlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgX2luZGV4ID0gMDsgX2luZGV4IDwgcGF0aFBhcnRzLmxlbmd0aDsgX2luZGV4KyspIHtcbiAgICB2YXIgcGFydCA9IHBhdGhQYXJ0c1tfaW5kZXhdO1xuXG4gICAgaWYgKHJlZGFjdGVkQmVmb3JlIHx8IF9pbmRleCA+IGRlcHRoIC0gMSkge1xuICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgcmVkYWN0ZWRQYXJ0cy5wdXNoKHdpbGRjYXJkKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIG51bWJlck9mU3BlY2lhbENoYXJzID0gKHBhcnQubWF0Y2goc3BlY2lhbENoYXJzUmVnZXgpIHx8IFtdKS5sZW5ndGg7XG5cbiAgICBpZiAobnVtYmVyT2ZTcGVjaWFsQ2hhcnMgPj0gMikge1xuICAgICAgcmVkYWN0ZWRQYXJ0cy5wdXNoKHJlZGFjdFN0cmluZyk7XG4gICAgICByZWRhY3RlZEJlZm9yZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSAocGFydC5tYXRjaChkaWdpdHNSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgIGlmIChudW1iZXJPZkRpZ2l0cyA+IDMgfHwgcGFydC5sZW5ndGggPiAzICYmIG51bWJlck9mRGlnaXRzIC8gcGFydC5sZW5ndGggPj0gMC4zKSB7XG4gICAgICByZWRhY3RlZFBhcnRzLnB1c2gocmVkYWN0U3RyaW5nKTtcbiAgICAgIHJlZGFjdGVkQmVmb3JlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBudW1iZXJvZlVwcGVyQ2FzZSA9IChwYXJ0Lm1hdGNoKHVwcGVyQ2FzZVJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuICAgIHZhciBudW1iZXJvZkxvd2VyQ2FzZSA9IChwYXJ0Lm1hdGNoKGxvd2VyQ2FzZVJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuICAgIHZhciBsb3dlckNhc2VSYXRlID0gbnVtYmVyb2ZMb3dlckNhc2UgLyBwYXJ0Lmxlbmd0aDtcbiAgICB2YXIgdXBwZXJDYXNlUmF0ZSA9IG51bWJlcm9mVXBwZXJDYXNlIC8gcGFydC5sZW5ndGg7XG5cbiAgICBpZiAocGFydC5sZW5ndGggPiA1ICYmICh1cHBlckNhc2VSYXRlID4gMC4zICYmIHVwcGVyQ2FzZVJhdGUgPCAwLjYgfHwgbG93ZXJDYXNlUmF0ZSA+IDAuMyAmJiBsb3dlckNhc2VSYXRlIDwgMC42KSkge1xuICAgICAgcmVkYWN0ZWRQYXJ0cy5wdXNoKHJlZGFjdFN0cmluZyk7XG4gICAgICByZWRhY3RlZEJlZm9yZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJ0ICYmIHJlZGFjdGVkUGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHZhciByZWRhY3RlZCA9ICcvJyArIChyZWRhY3RlZFBhcnRzLmxlbmd0aCA+PSAyID8gcmVkYWN0ZWRQYXJ0cy5qb2luKCcvJykgOiByZWRhY3RlZFBhcnRzLmpvaW4oJycpKSArIChxdWVyeSA/ICc/e3F1ZXJ5fScgOiAnJyk7XG4gIHJldHVybiByZWRhY3RlZDtcbn0iLCJpbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnLi9wb2x5ZmlsbHMnO1xudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgUEVSRiA9IGlzQnJvd3NlciAmJiB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnID8gcGVyZm9ybWFuY2UgOiB7fTtcblxuZnVuY3Rpb24gaXNDT1JTU3VwcG9ydGVkKCkge1xuICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICByZXR1cm4gJ3dpdGhDcmVkZW50aWFscycgaW4geGhyO1xufVxuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb0hleChidWZmZXIpIHtcbiAgdmFyIGhleE9jdGV0cyA9IFtdO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBidWZmZXIubGVuZ3RoOyBfaSsrKSB7XG4gICAgaGV4T2N0ZXRzLnB1c2goYnl0ZVRvSGV4W2J1ZmZlcltfaV1dKTtcbiAgfVxuXG4gIHJldHVybiBoZXhPY3RldHMuam9pbignJyk7XG59XG5cbnZhciBkZXN0aW5hdGlvbiA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuZnVuY3Rpb24gcm5nKCkge1xuICBpZiAodHlwZW9mIGNyeXB0byAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdGluYXRpb24pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtc0NyeXB0byAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChsZW5ndGgpIHtcbiAgdmFyIGlkID0gYnl0ZXNUb0hleChybmcoKSk7XG4gIHJldHVybiBpZC5zdWJzdHIoMCwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gZ2V0RHRIZWFkZXJWYWx1ZShzcGFuKSB7XG4gIHZhciBkdFZlcnNpb24gPSAnMDAnO1xuICB2YXIgZHRVblNhbXBsZWRGbGFncyA9ICcwMCc7XG4gIHZhciBkdFNhbXBsZWRGbGFncyA9ICcwMSc7XG5cbiAgaWYgKHNwYW4gJiYgc3Bhbi50cmFjZUlkICYmIHNwYW4uaWQgJiYgc3Bhbi5wYXJlbnRJZCkge1xuICAgIHZhciBmbGFncyA9IHNwYW4uc2FtcGxlZCA/IGR0U2FtcGxlZEZsYWdzIDogZHRVblNhbXBsZWRGbGFncztcbiAgICB2YXIgaWQgPSBzcGFuLnNhbXBsZWQgPyBzcGFuLmlkIDogc3Bhbi5wYXJlbnRJZDtcbiAgICByZXR1cm4gZHRWZXJzaW9uICsgJy0nICsgc3Bhbi50cmFjZUlkICsgJy0nICsgaWQgKyAnLScgKyBmbGFncztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUR0SGVhZGVyVmFsdWUodmFsdWUpIHtcbiAgdmFyIHBhcnNlZCA9IC9eKFtcXGRhLWZdezJ9KS0oW1xcZGEtZl17MzJ9KS0oW1xcZGEtZl17MTZ9KS0oW1xcZGEtZl17Mn0pJC8uZXhlYyh2YWx1ZSk7XG5cbiAgaWYgKHBhcnNlZCkge1xuICAgIHZhciBmbGFncyA9IHBhcnNlZFs0XTtcbiAgICB2YXIgc2FtcGxlZCA9IGZsYWdzICE9PSAnMDAnO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFjZUlkOiBwYXJzZWRbMl0sXG4gICAgICBpZDogcGFyc2VkWzNdLFxuICAgICAgc2FtcGxlZDogc2FtcGxlZFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEdEhlYWRlclZhbGlkKGhlYWRlcikge1xuICByZXR1cm4gL15bXFxkYS1mXXsyfS1bXFxkYS1mXXszMn0tW1xcZGEtZl17MTZ9LVtcXGRhLWZdezJ9JC8udGVzdChoZWFkZXIpICYmIGhlYWRlci5zbGljZSgzLCAzNSkgIT09ICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcgJiYgaGVhZGVyLnNsaWNlKDM2LCA1MikgIT09ICcwMDAwMDAwMDAwMDAwMDAwJztcbn1cblxuZnVuY3Rpb24gY2hlY2tTYW1lT3JpZ2luKHNvdXJjZSwgdGFyZ2V0KSB7XG4gIHZhciBpc1NhbWUgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICBpc1NhbWUgPSBzb3VyY2UgPT09IHRhcmdldDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKCFpc1NhbWUpIHtcbiAgICAgICAgaXNTYW1lID0gY2hlY2tTYW1lT3JpZ2luKHNvdXJjZSwgdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaXNTYW1lO1xufVxuXG5mdW5jdGlvbiBpc1BsYXRmb3JtU3VwcG9ydGVkKCkge1xuICByZXR1cm4gaXNCcm93c2VyICYmIHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIEpTT04uc3RyaW5naWZ5ID09PSAnZnVuY3Rpb24nICYmIFBFUkYgJiYgdHlwZW9mIFBFUkYubm93ID09PSAnZnVuY3Rpb24nICYmIGlzQ09SU1N1cHBvcnRlZCgpO1xufVxuXG5mdW5jdGlvbiBzZXRMYWJlbChrZXksIHZhbHVlLCBvYmopIHtcbiAgaWYgKCFvYmogfHwgIWtleSkgcmV0dXJuO1xuICB2YXIgc2tleSA9IHJlbW92ZUludmFsaWRDaGFycyhrZXkpO1xuICB2YXIgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQgJiYgdmFsdWVUeXBlICE9PSAnYm9vbGVhbicgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIG9ialtza2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRTZXJ2ZXJUaW1pbmdJbmZvKHNlcnZlclRpbWluZ0VudHJpZXMpIHtcbiAgaWYgKHNlcnZlclRpbWluZ0VudHJpZXMgPT09IHZvaWQgMCkge1xuICAgIHNlcnZlclRpbWluZ0VudHJpZXMgPSBbXTtcbiAgfVxuXG4gIHZhciBzZXJ2ZXJUaW1pbmdJbmZvID0gW107XG4gIHZhciBlbnRyeVNlcGFyYXRvciA9ICcsICc7XG4gIHZhciB2YWx1ZVNlcGFyYXRvciA9ICc7JztcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzZXJ2ZXJUaW1pbmdFbnRyaWVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgX3NlcnZlclRpbWluZ0VudHJpZXMkID0gc2VydmVyVGltaW5nRW50cmllc1tfaTJdLFxuICAgICAgICBuYW1lID0gX3NlcnZlclRpbWluZ0VudHJpZXMkLm5hbWUsXG4gICAgICAgIGR1cmF0aW9uID0gX3NlcnZlclRpbWluZ0VudHJpZXMkLmR1cmF0aW9uLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF9zZXJ2ZXJUaW1pbmdFbnRyaWVzJC5kZXNjcmlwdGlvbjtcbiAgICB2YXIgdGltaW5nVmFsdWUgPSBuYW1lO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0aW1pbmdWYWx1ZSArPSB2YWx1ZVNlcGFyYXRvciArICdkZXNjPScgKyBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIHRpbWluZ1ZhbHVlICs9IHZhbHVlU2VwYXJhdG9yICsgJ2R1cj0nICsgZHVyYXRpb247XG4gICAgfVxuXG4gICAgc2VydmVyVGltaW5nSW5mby5wdXNoKHRpbWluZ1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJUaW1pbmdJbmZvLmpvaW4oZW50cnlTZXBhcmF0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lT3JpZ2luKCkge1xuICByZXR1cm4gUEVSRi50aW1pbmcuZmV0Y2hTdGFydDtcbn1cblxuZnVuY3Rpb24gc3RyaXBRdWVyeVN0cmluZ0Zyb21VcmwodXJsKSB7XG4gIHJldHVybiB1cmwgJiYgdXJsLnNwbGl0KCc/JylbMF07XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGJhc2VFeHRlbmQoZHN0LCBvYmpzLCBkZWVwKSB7XG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IG9ianMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIHZhciBvYmogPSBvYmpzW2ldO1xuICAgIGlmICghaXNPYmplY3Qob2JqKSAmJiAhaXNGdW5jdGlvbihvYmopKSBjb250aW51ZTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICBmb3IgKHZhciBqID0gMCwgamogPSBrZXlzLmxlbmd0aDsgaiA8IGpqOyBqKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgdmFyIHNyYyA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoZGVlcCAmJiBpc09iamVjdChzcmMpKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QoZHN0W2tleV0pKSBkc3Rba2V5XSA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IFtdIDoge307XG4gICAgICAgIGJhc2VFeHRlbmQoZHN0W2tleV0sIFtzcmNdLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkc3Rba2V5XSA9IHNyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBnZXRFbGFzdGljU2NyaXB0KCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzY3JpcHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHNjID0gc2NyaXB0c1tpXTtcblxuICAgICAgaWYgKHNjLnNyYy5pbmRleE9mKCdlbGFzdGljJykgPiAwKSB7XG4gICAgICAgIHJldHVybiBzYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdCgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY3VycmVudFNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG5cbiAgICBpZiAoIWN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHJldHVybiBnZXRFbGFzdGljU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTY3JpcHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGRzdCkge1xuICByZXR1cm4gYmFzZUV4dGVuZChkc3QsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShkc3QpIHtcbiAgcmV0dXJuIGJhc2VFeHRlbmQoZHN0LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gIGlmIChhcnJheSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXkgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIG8gPSBPYmplY3QoYXJyYXkpO1xuICB2YXIgbGVuID0gby5sZW5ndGggPj4+IDA7XG5cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgayA9IDA7XG5cbiAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICB2YXIga1ZhbHVlID0gb1trXTtcblxuICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCBrVmFsdWUsIGssIG8pKSB7XG4gICAgICByZXR1cm4ga1ZhbHVlO1xuICAgIH1cblxuICAgIGsrKztcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludmFsaWRDaGFycyhrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bLipcIl0vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0Tm9uWEhSU3BhbihzcGFucykge1xuICB2YXIgbGF0ZXN0U3BhbiA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgc3BhbnMubGVuZ3RoOyBfaTMrKykge1xuICAgIHZhciBzcGFuID0gc3BhbnNbX2kzXTtcblxuICAgIGlmIChTdHJpbmcoc3Bhbi50eXBlKS5pbmRleE9mKCdleHRlcm5hbCcpID09PSAtMSAmJiAoIWxhdGVzdFNwYW4gfHwgbGF0ZXN0U3Bhbi5fZW5kIDwgc3Bhbi5fZW5kKSkge1xuICAgICAgbGF0ZXN0U3BhbiA9IHNwYW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhdGVzdFNwYW47XG59XG5cbmZ1bmN0aW9uIGdldEVhcmxpZXN0U3BhbihzcGFucykge1xuICB2YXIgZWFybGllc3RTcGFuID0gc3BhbnNbMF07XG5cbiAgZm9yICh2YXIgX2k0ID0gMTsgX2k0IDwgc3BhbnMubGVuZ3RoOyBfaTQrKykge1xuICAgIHZhciBzcGFuID0gc3BhbnNbX2k0XTtcblxuICAgIGlmIChlYXJsaWVzdFNwYW4uX3N0YXJ0ID4gc3Bhbi5fc3RhcnQpIHtcbiAgICAgIGVhcmxpZXN0U3BhbiA9IHNwYW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVhcmxpZXN0U3Bhbjtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gUEVSRi5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XG4gIHJldHVybiB0eXBlb2YgdGltZSA9PT0gJ251bWJlcicgJiYgdGltZSA+PSAwID8gdGltZSA6IG5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXREdXJhdGlvbihzdGFydCwgZW5kKSB7XG4gIGlmIChpc1VuZGVmaW5lZChlbmQpIHx8IGlzVW5kZWZpbmVkKHN0YXJ0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KGVuZCAtIHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gc2NoZWR1bGVNYWNyb1Rhc2soY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKGNhbGxiYWNrKSB7XG4gIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBpc1BlcmZUaW1lbGluZVN1cHBvcnRlZCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBQRVJGLmdldEVudHJpZXNCeVR5cGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUGVyZlR5cGVTdXBwb3J0ZWQodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIFBlcmZvcm1hbmNlT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIFBlcmZvcm1hbmNlT2JzZXJ2ZXIuc3VwcG9ydGVkRW50cnlUeXBlcyAmJiBQZXJmb3JtYW5jZU9ic2VydmVyLnN1cHBvcnRlZEVudHJ5VHlwZXMuaW5kZXhPZih0eXBlKSA+PSAwO1xufVxuXG5leHBvcnQgeyBleHRlbmQsIG1lcmdlLCBpc1VuZGVmaW5lZCwgbm9vcCwgYmFzZUV4dGVuZCwgYnl0ZXNUb0hleCwgaXNDT1JTU3VwcG9ydGVkLCBpc09iamVjdCwgaXNGdW5jdGlvbiwgaXNQbGF0Zm9ybVN1cHBvcnRlZCwgaXNEdEhlYWRlclZhbGlkLCBwYXJzZUR0SGVhZGVyVmFsdWUsIGdldFNlcnZlclRpbWluZ0luZm8sIGdldER0SGVhZGVyVmFsdWUsIGdldEN1cnJlbnRTY3JpcHQsIGdldEVsYXN0aWNTY3JpcHQsIGdldFRpbWVPcmlnaW4sIGdlbmVyYXRlUmFuZG9tSWQsIGdldEVhcmxpZXN0U3BhbiwgZ2V0TGF0ZXN0Tm9uWEhSU3BhbiwgZ2V0RHVyYXRpb24sIGdldFRpbWUsIG5vdywgcm5nLCBjaGVja1NhbWVPcmlnaW4sIHNjaGVkdWxlTWFjcm9UYXNrLCBzY2hlZHVsZU1pY3JvVGFzaywgc2V0TGFiZWwsIHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsLCBmaW5kLCByZW1vdmVJbnZhbGlkQ2hhcnMsIFBFUkYsIGlzUGVyZlRpbWVsaW5lU3VwcG9ydGVkLCBpc0Jyb3dzZXIsIGlzUGVyZlR5cGVTdXBwb3J0ZWQgfTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNyZWF0ZVN0YWNrVHJhY2VzLCBmaWx0ZXJJbnZhbGlkRnJhbWVzIH0gZnJvbSAnLi9zdGFjay10cmFjZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkLCBtZXJnZSwgZXh0ZW5kIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IGdldFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vY29tbW9uL2NvbnRleHQnO1xuaW1wb3J0IHsgdHJ1bmNhdGVNb2RlbCwgRVJST1JfTU9ERUwgfSBmcm9tICcuLi9jb21tb24vdHJ1bmNhdGUnO1xudmFyIElHTk9SRV9LRVlTID0gWydzdGFjaycsICdtZXNzYWdlJ107XG5cbmZ1bmN0aW9uIGdldEVycm9yUHJvcGVydGllcyhlcnJvcikge1xuICB2YXIgcHJvcGVydHlGb3VuZCA9IGZhbHNlO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICBPYmplY3Qua2V5cyhlcnJvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKElHTk9SRV9LRVlTLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IGVycm9yW2tleV07XG5cbiAgICBpZiAodmFsID09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWwudG9JU09TdHJpbmcgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIHZhbCA9IHZhbC50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIHByb3BlcnRpZXNba2V5XSA9IHZhbDtcbiAgICBwcm9wZXJ0eUZvdW5kID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHByb3BlcnR5Rm91bmQpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxufVxuXG52YXIgRXJyb3JMb2dnaW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFcnJvckxvZ2dpbmcoYXBtU2VydmVyLCBjb25maWdTZXJ2aWNlLCB0cmFuc2FjdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLl9hcG1TZXJ2ZXIgPSBhcG1TZXJ2ZXI7XG4gICAgdGhpcy5fY29uZmlnU2VydmljZSA9IGNvbmZpZ1NlcnZpY2U7XG4gICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlID0gdHJhbnNhY3Rpb25TZXJ2aWNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEVycm9yTG9nZ2luZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUVycm9yRGF0YU1vZGVsID0gZnVuY3Rpb24gY3JlYXRlRXJyb3JEYXRhTW9kZWwoZXJyb3JFdmVudCkge1xuICAgIHZhciBmcmFtZXMgPSBjcmVhdGVTdGFja1RyYWNlcyhlcnJvckV2ZW50KTtcbiAgICB2YXIgZmlsdGVyZWRGcmFtZXMgPSBmaWx0ZXJJbnZhbGlkRnJhbWVzKGZyYW1lcyk7XG4gICAgdmFyIGN1bHByaXQgPSAnKGlubGluZSBzY3JpcHQpJztcbiAgICB2YXIgbGFzdEZyYW1lID0gZmlsdGVyZWRGcmFtZXNbZmlsdGVyZWRGcmFtZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAobGFzdEZyYW1lICYmIGxhc3RGcmFtZS5maWxlbmFtZSkge1xuICAgICAgY3VscHJpdCA9IGxhc3RGcmFtZS5maWxlbmFtZTtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yRXZlbnQubWVzc2FnZSxcbiAgICAgICAgZXJyb3IgPSBlcnJvckV2ZW50LmVycm9yO1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHZhciBlcnJvclR5cGUgPSAnJztcbiAgICB2YXIgZXJyb3JDb250ZXh0ID0ge307XG5cbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0Jykge1xuICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2U7XG4gICAgICBlcnJvclR5cGUgPSBlcnJvci5uYW1lO1xuICAgICAgdmFyIGN1c3RvbVByb3BlcnRpZXMgPSBnZXRFcnJvclByb3BlcnRpZXMoZXJyb3IpO1xuXG4gICAgICBpZiAoY3VzdG9tUHJvcGVydGllcykge1xuICAgICAgICBlcnJvckNvbnRleHQuY3VzdG9tID0gY3VzdG9tUHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWVycm9yVHlwZSkge1xuICAgICAgaWYgKGVycm9yTWVzc2FnZSAmJiBlcnJvck1lc3NhZ2UuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICAgICAgZXJyb3JUeXBlID0gZXJyb3JNZXNzYWdlLnNwbGl0KCc6JylbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRUcmFuc2FjdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcblxuICAgIHZhciB0cmFuc2FjdGlvbkNvbnRleHQgPSBjdXJyZW50VHJhbnNhY3Rpb24gPyBjdXJyZW50VHJhbnNhY3Rpb24uY29udGV4dCA6IHt9O1xuXG4gICAgdmFyIF90aGlzJF9jb25maWdTZXJ2aWNlJCA9IHRoaXMuX2NvbmZpZ1NlcnZpY2UuZ2V0KCdjb250ZXh0JyksXG4gICAgICAgIHRhZ3MgPSBfdGhpcyRfY29uZmlnU2VydmljZSQudGFncyxcbiAgICAgICAgY29uZmlnQ29udGV4dCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJF9jb25maWdTZXJ2aWNlJCwgW1widGFnc1wiXSk7XG5cbiAgICB2YXIgcGFnZUNvbnRleHQgPSBnZXRQYWdlQ29udGV4dCgpO1xuICAgIHZhciBjb250ZXh0ID0gbWVyZ2Uoe30sIHBhZ2VDb250ZXh0LCB0cmFuc2FjdGlvbkNvbnRleHQsIGNvbmZpZ0NvbnRleHQsIGVycm9yQ29udGV4dCk7XG4gICAgdmFyIGVycm9yT2JqZWN0ID0ge1xuICAgICAgaWQ6IGdlbmVyYXRlUmFuZG9tSWQoKSxcbiAgICAgIGN1bHByaXQ6IGN1bHByaXQsXG4gICAgICBleGNlcHRpb246IHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICBzdGFja3RyYWNlOiBmaWx0ZXJlZEZyYW1lcyxcbiAgICAgICAgdHlwZTogZXJyb3JUeXBlXG4gICAgICB9LFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG5cbiAgICBpZiAoY3VycmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICBlcnJvck9iamVjdCA9IGV4dGVuZChlcnJvck9iamVjdCwge1xuICAgICAgICB0cmFjZV9pZDogY3VycmVudFRyYW5zYWN0aW9uLnRyYWNlSWQsXG4gICAgICAgIHBhcmVudF9pZDogY3VycmVudFRyYW5zYWN0aW9uLmlkLFxuICAgICAgICB0cmFuc2FjdGlvbl9pZDogY3VycmVudFRyYW5zYWN0aW9uLmlkLFxuICAgICAgICB0cmFuc2FjdGlvbjoge1xuICAgICAgICAgIHR5cGU6IGN1cnJlbnRUcmFuc2FjdGlvbi50eXBlLFxuICAgICAgICAgIHNhbXBsZWQ6IGN1cnJlbnRUcmFuc2FjdGlvbi5zYW1wbGVkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZU1vZGVsKEVSUk9SX01PREVMLCBlcnJvck9iamVjdCk7XG4gIH07XG5cbiAgX3Byb3RvLmxvZ0Vycm9yRXZlbnQgPSBmdW5jdGlvbiBsb2dFcnJvckV2ZW50KGVycm9yRXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIGVycm9yRXZlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVycm9yT2JqZWN0ID0gdGhpcy5jcmVhdGVFcnJvckRhdGFNb2RlbChlcnJvckV2ZW50KTtcblxuICAgIGlmICh0eXBlb2YgZXJyb3JPYmplY3QuZXhjZXB0aW9uLm1lc3NhZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYXBtU2VydmVyLmFkZEVycm9yKGVycm9yT2JqZWN0KTtcbiAgfTtcblxuICBfcHJvdG8ucmVnaXN0ZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yRXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5sb2dFcnJvckV2ZW50KGVycm9yRXZlbnQpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBmdW5jdGlvbiAocHJvbWlzZVJlamVjdGlvbkV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9nUHJvbWlzZUV2ZW50KHByb21pc2VSZWplY3Rpb25FdmVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmxvZ1Byb21pc2VFdmVudCA9IGZ1bmN0aW9uIGxvZ1Byb21pc2VFdmVudChwcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICB2YXIgcHJlZml4ID0gJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbjogJztcbiAgICB2YXIgX3Byb21pc2VSZWplY3Rpb25FdmVuID0gcHJvbWlzZVJlamVjdGlvbkV2ZW50LnJlYXNvbixcbiAgICAgICAgcmVhc29uID0gX3Byb21pc2VSZWplY3Rpb25FdmVuID09PSB2b2lkIDAgPyAnPG5vIHJlYXNvbiBzcGVjaWZpZWQ+JyA6IF9wcm9taXNlUmVqZWN0aW9uRXZlbjtcbiAgICB2YXIgZXJyb3JFdmVudDtcblxuICAgIGlmICh0eXBlb2YgcmVhc29uLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbmFtZSA9IHJlYXNvbi5uYW1lID8gcmVhc29uLm5hbWUgKyAnOiAnIDogJyc7XG4gICAgICBlcnJvckV2ZW50ID0ge1xuICAgICAgICBlcnJvcjogcmVhc29uLFxuICAgICAgICBtZXNzYWdlOiBwcmVmaXggKyBuYW1lICsgcmVhc29uLm1lc3NhZ2VcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYXNvbiA9IHR5cGVvZiByZWFzb24gPT09ICdvYmplY3QnID8gJzxvYmplY3Q+JyA6IHR5cGVvZiByZWFzb24gPT09ICdmdW5jdGlvbicgPyAnPGZ1bmN0aW9uPicgOiByZWFzb247XG4gICAgICBlcnJvckV2ZW50ID0ge1xuICAgICAgICBtZXNzYWdlOiBwcmVmaXggKyByZWFzb25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5sb2dFcnJvckV2ZW50KGVycm9yRXZlbnQpO1xuICB9O1xuXG4gIF9wcm90by5sb2dFcnJvciA9IGZ1bmN0aW9uIGxvZ0Vycm9yKG1lc3NhZ2VPckVycm9yKSB7XG4gICAgdmFyIGVycm9yRXZlbnQgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgbWVzc2FnZU9yRXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvckV2ZW50Lm1lc3NhZ2UgPSBtZXNzYWdlT3JFcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JFdmVudC5lcnJvciA9IG1lc3NhZ2VPckVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvZ0Vycm9yRXZlbnQoZXJyb3JFdmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIEVycm9yTG9nZ2luZztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JMb2dnaW5nOyIsImltcG9ydCBFcnJvckxvZ2dpbmcgZnJvbSAnLi9lcnJvci1sb2dnaW5nJztcbmltcG9ydCB7IENPTkZJR19TRVJWSUNFLCBBUE1fU0VSVkVSIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzZXJ2aWNlQ3JlYXRvcnMgfSBmcm9tICcuLi9jb21tb24vc2VydmljZS1mYWN0b3J5JztcblxuZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlcygpIHtcbiAgc2VydmljZUNyZWF0b3JzWydFcnJvckxvZ2dpbmcnXSA9IGZ1bmN0aW9uIChzZXJ2aWNlRmFjdG9yeSkge1xuICAgIHZhciBfc2VydmljZUZhY3RvcnkkZ2V0U2UgPSBzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFtBUE1fU0VSVkVSLCBDT05GSUdfU0VSVklDRSwgJ1RyYW5zYWN0aW9uU2VydmljZSddKSxcbiAgICAgICAgYXBtU2VydmVyID0gX3NlcnZpY2VGYWN0b3J5JGdldFNlWzBdLFxuICAgICAgICBjb25maWdTZXJ2aWNlID0gX3NlcnZpY2VGYWN0b3J5JGdldFNlWzFdLFxuICAgICAgICB0cmFuc2FjdGlvblNlcnZpY2UgPSBfc2VydmljZUZhY3RvcnkkZ2V0U2VbMl07XG5cbiAgICByZXR1cm4gbmV3IEVycm9yTG9nZ2luZyhhcG1TZXJ2ZXIsIGNvbmZpZ1NlcnZpY2UsIHRyYW5zYWN0aW9uU2VydmljZSk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyU2VydmljZXMgfTsiLCJpbXBvcnQgc3RhY2tQYXJzZXIgZnJvbSAnZXJyb3Itc3RhY2stcGFyc2VyJztcblxuZnVuY3Rpb24gZmlsZVBhdGhUb0ZpbGVOYW1lKGZpbGVVcmwpIHtcbiAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0IDogJycpO1xuXG4gIGlmIChmaWxlVXJsLmluZGV4T2Yob3JpZ2luKSA+IC0xKSB7XG4gICAgZmlsZVVybCA9IGZpbGVVcmwucmVwbGFjZShvcmlnaW4gKyAnLycsICcnKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVXJsO1xufVxuXG5mdW5jdGlvbiBjbGVhbkZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gIGlmIChmaWxlUGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgZmlsZVBhdGggPSAnJztcbiAgfVxuXG4gIGlmIChmaWxlUGF0aCA9PT0gJzxhbm9ueW1vdXM+Jykge1xuICAgIGZpbGVQYXRoID0gJyc7XG4gIH1cblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzRmlsZUlubGluZShmaWxlVXJsKSB7XG4gIGlmIChmaWxlVXJsKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoZmlsZVVybCkgPT09IDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0YWNrRnJhbWVzKHN0YWNrRnJhbWVzKSB7XG4gIHJldHVybiBzdGFja0ZyYW1lcy5tYXAoZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgaWYgKGZyYW1lLmZ1bmN0aW9uTmFtZSkge1xuICAgICAgZnJhbWUuZnVuY3Rpb25OYW1lID0gbm9ybWFsaXplRnVuY3Rpb25OYW1lKGZyYW1lLmZ1bmN0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRnVuY3Rpb25OYW1lKGZuTmFtZSkge1xuICB2YXIgcGFydHMgPSBmbk5hbWUuc3BsaXQoJy8nKTtcblxuICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgIGZuTmFtZSA9IFsnT2JqZWN0JywgcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dLmpvaW4oJy4nKTtcbiAgfSBlbHNlIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1swXTtcbiAgfVxuXG4gIGZuTmFtZSA9IGZuTmFtZS5yZXBsYWNlKC8uPCQvZ2ksICcuPGFub255bW91cz4nKTtcbiAgZm5OYW1lID0gZm5OYW1lLnJlcGxhY2UoL15Bbm9ueW1vdXMgZnVuY3Rpb24kLywgJzxhbm9ueW1vdXM+Jyk7XG4gIHBhcnRzID0gZm5OYW1lLnNwbGl0KCcuJyk7XG5cbiAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICBmbk5hbWUgPSBwYXJ0c1swXTtcbiAgfVxuXG4gIHJldHVybiBmbk5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGFja1RyYWNlcyhlcnJvckV2ZW50KSB7XG4gIHZhciBlcnJvciA9IGVycm9yRXZlbnQuZXJyb3IsXG4gICAgICBmaWxlbmFtZSA9IGVycm9yRXZlbnQuZmlsZW5hbWUsXG4gICAgICBsaW5lbm8gPSBlcnJvckV2ZW50LmxpbmVubyxcbiAgICAgIGNvbG5vID0gZXJyb3JFdmVudC5jb2xubztcbiAgdmFyIHN0YWNrVHJhY2VzID0gW107XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN0YWNrVHJhY2VzID0gc3RhY2tQYXJzZXIucGFyc2UoZXJyb3IpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAoc3RhY2tUcmFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhY2tUcmFjZXMgPSBbe1xuICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxuICAgICAgbGluZU51bWJlcjogbGluZW5vLFxuICAgICAgY29sdW1uTnVtYmVyOiBjb2xub1xuICAgIH1dO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRTdGFja1RyYWNlcyA9IG5vcm1hbGl6ZVN0YWNrRnJhbWVzKHN0YWNrVHJhY2VzKTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWRTdGFja1RyYWNlcy5tYXAoZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc3RhY2suZmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzdGFjay5saW5lTnVtYmVyLFxuICAgICAgICBjb2x1bW5OdW1iZXIgPSBzdGFjay5jb2x1bW5OdW1iZXIsXG4gICAgICAgIF9zdGFjayRmdW5jdGlvbk5hbWUgPSBzdGFjay5mdW5jdGlvbk5hbWUsXG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IF9zdGFjayRmdW5jdGlvbk5hbWUgPT09IHZvaWQgMCA/ICc8YW5vbnltb3VzPicgOiBfc3RhY2skZnVuY3Rpb25OYW1lO1xuXG4gICAgaWYgKCFmaWxlTmFtZSAmJiAhbGluZU51bWJlcikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmICghY29sdW1uTnVtYmVyICYmICFsaW5lTnVtYmVyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIGZpbGVQYXRoID0gY2xlYW5GaWxlUGF0aChmaWxlTmFtZSk7XG4gICAgdmFyIGNsZWFuZWRGaWxlTmFtZSA9IGZpbGVQYXRoVG9GaWxlTmFtZShmaWxlUGF0aCk7XG5cbiAgICBpZiAoaXNGaWxlSW5saW5lKGZpbGVQYXRoKSkge1xuICAgICAgY2xlYW5lZEZpbGVOYW1lID0gJyhpbmxpbmUgc2NyaXB0KSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFic19wYXRoOiBmaWxlTmFtZSxcbiAgICAgIGZpbGVuYW1lOiBjbGVhbmVkRmlsZU5hbWUsXG4gICAgICBmdW5jdGlvbjogZnVuY3Rpb25OYW1lLFxuICAgICAgbGluZW5vOiBsaW5lTnVtYmVyLFxuICAgICAgY29sbm86IGNvbHVtbk51bWJlclxuICAgIH07XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckludmFsaWRGcmFtZXMoZnJhbWVzKSB7XG4gIHJldHVybiBmcmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGZpbGVuYW1lID0gX3JlZi5maWxlbmFtZSxcbiAgICAgICAgbGluZW5vID0gX3JlZi5saW5lbm87XG4gICAgcmV0dXJuIHR5cGVvZiBmaWxlbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGxpbmVubyAhPT0gJ3VuZGVmaW5lZCc7XG4gIH0pO1xufSIsImltcG9ydCB7IHJlZ2lzdGVyU2VydmljZXMgYXMgcmVnaXN0ZXJFcnJvclNlcnZpY2VzIH0gZnJvbSAnLi9lcnJvci1sb2dnaW5nJztcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZXMgYXMgcmVnaXN0ZXJQZXJmU2VydmljZXMgfSBmcm9tICcuL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcnO1xuaW1wb3J0IHsgU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlLWZhY3RvcnknO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVN1cHBvcnRlZCwgc2NoZWR1bGVNaWNyb1Rhc2ssIHNjaGVkdWxlTWFjcm9UYXNrLCBpc0Jyb3dzZXIgfSBmcm9tICcuL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBwYXRjaEFsbCwgcGF0Y2hFdmVudEhhbmRsZXIgfSBmcm9tICcuL2NvbW1vbi9wYXRjaGluZyc7XG5pbXBvcnQgeyBQQUdFX0xPQUQsIEVSUk9SLCBDT05GSUdfU0VSVklDRSwgTE9HR0lOR19TRVJWSUNFLCBBUE1fU0VSVkVSIH0gZnJvbSAnLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEluc3RydW1lbnRhdGlvbkZsYWdzIH0gZnJvbSAnLi9jb21tb24vaW5zdHJ1bWVudCc7XG5pbXBvcnQgYWZ0ZXJGcmFtZSBmcm9tICcuL2NvbW1vbi9hZnRlci1mcmFtZSc7XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFjZXIgfSBmcm9tICcuL29wZW50cmFjaW5nJztcblxuZnVuY3Rpb24gY3JlYXRlU2VydmljZUZhY3RvcnkoKSB7XG4gIHJlZ2lzdGVyUGVyZlNlcnZpY2VzKCk7XG4gIHJlZ2lzdGVyRXJyb3JTZXJ2aWNlcygpO1xuICB2YXIgc2VydmljZUZhY3RvcnkgPSBuZXcgU2VydmljZUZhY3RvcnkoKTtcbiAgcmV0dXJuIHNlcnZpY2VGYWN0b3J5O1xufVxuXG5leHBvcnQgeyBjcmVhdGVTZXJ2aWNlRmFjdG9yeSwgU2VydmljZUZhY3RvcnksIHBhdGNoQWxsLCBwYXRjaEV2ZW50SGFuZGxlciwgaXNQbGF0Zm9ybVN1cHBvcnRlZCwgaXNCcm93c2VyLCBnZXRJbnN0cnVtZW50YXRpb25GbGFncywgY3JlYXRlVHJhY2VyLCBzY2hlZHVsZU1pY3JvVGFzaywgc2NoZWR1bGVNYWNyb1Rhc2ssIGFmdGVyRnJhbWUsIEVSUk9SLCBQQUdFX0xPQUQsIENPTkZJR19TRVJWSUNFLCBMT0dHSU5HX1NFUlZJQ0UsIEFQTV9TRVJWRVIsIGJvb3RzdHJhcCB9OyIsImltcG9ydCBUcmFjZXIgZnJvbSAnLi90cmFjZXInO1xuaW1wb3J0IFNwYW4gZnJvbSAnLi9zcGFuJztcblxuZnVuY3Rpb24gY3JlYXRlVHJhY2VyKHNlcnZpY2VGYWN0b3J5KSB7XG4gIHZhciBwZXJmb3JtYW5jZU1vbml0b3JpbmcgPSBzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdQZXJmb3JtYW5jZU1vbml0b3JpbmcnKTtcbiAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ1RyYW5zYWN0aW9uU2VydmljZScpO1xuICB2YXIgZXJyb3JMb2dnaW5nID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnRXJyb3JMb2dnaW5nJyk7XG4gIHZhciBsb2dnaW5nU2VydmljZSA9IHNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoJ0xvZ2dpbmdTZXJ2aWNlJyk7XG4gIHJldHVybiBuZXcgVHJhY2VyKHBlcmZvcm1hbmNlTW9uaXRvcmluZywgdHJhbnNhY3Rpb25TZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgZXJyb3JMb2dnaW5nKTtcbn1cblxuZXhwb3J0IHsgU3BhbiwgVHJhY2VyLCBjcmVhdGVUcmFjZXIgfTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgU3BhbiBhcyBvdFNwYW4gfSBmcm9tICdvcGVudHJhY2luZy9saWIvc3Bhbic7XG5pbXBvcnQgeyBleHRlbmQsIGdldFRpbWVPcmlnaW4gfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4uL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcvdHJhbnNhY3Rpb24nO1xuXG52YXIgU3BhbiA9IGZ1bmN0aW9uIChfb3RTcGFuKSB7XG4gIF9pbmhlcml0c0xvb3NlKFNwYW4sIF9vdFNwYW4pO1xuXG4gIGZ1bmN0aW9uIFNwYW4odHJhY2VyLCBzcGFuKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb3RTcGFuLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5fX3RyYWNlciA9IHRyYWNlcjtcbiAgICBfdGhpcy5zcGFuID0gc3BhbjtcbiAgICBfdGhpcy5pc1RyYW5zYWN0aW9uID0gc3BhbiBpbnN0YW5jZW9mIFRyYW5zYWN0aW9uO1xuICAgIF90aGlzLnNwYW5Db250ZXh0ID0ge1xuICAgICAgaWQ6IHNwYW4uaWQsXG4gICAgICB0cmFjZUlkOiBzcGFuLnRyYWNlSWQsXG4gICAgICBzYW1wbGVkOiBzcGFuLnNhbXBsZWRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTcGFuLnByb3RvdHlwZTtcblxuICBfcHJvdG8uX2NvbnRleHQgPSBmdW5jdGlvbiBfY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGFuQ29udGV4dDtcbiAgfTtcblxuICBfcHJvdG8uX3RyYWNlciA9IGZ1bmN0aW9uIF90cmFjZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190cmFjZXI7XG4gIH07XG5cbiAgX3Byb3RvLl9zZXRPcGVyYXRpb25OYW1lID0gZnVuY3Rpb24gX3NldE9wZXJhdGlvbk5hbWUobmFtZSkge1xuICAgIHRoaXMuc3Bhbi5uYW1lID0gbmFtZTtcbiAgfTtcblxuICBfcHJvdG8uX2FkZFRhZ3MgPSBmdW5jdGlvbiBfYWRkVGFncyhrZXlWYWx1ZVBhaXJzKSB7XG4gICAgdmFyIHRhZ3MgPSBleHRlbmQoe30sIGtleVZhbHVlUGFpcnMpO1xuXG4gICAgaWYgKHRhZ3MudHlwZSkge1xuICAgICAgdGhpcy5zcGFuLnR5cGUgPSB0YWdzLnR5cGU7XG4gICAgICBkZWxldGUgdGFncy50eXBlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVHJhbnNhY3Rpb24pIHtcbiAgICAgIHZhciB1c2VySWQgPSB0YWdzWyd1c2VyLmlkJ107XG4gICAgICB2YXIgdXNlcm5hbWUgPSB0YWdzWyd1c2VyLnVzZXJuYW1lJ107XG4gICAgICB2YXIgZW1haWwgPSB0YWdzWyd1c2VyLmVtYWlsJ107XG5cbiAgICAgIGlmICh1c2VySWQgfHwgdXNlcm5hbWUgfHwgZW1haWwpIHtcbiAgICAgICAgdGhpcy5zcGFuLmFkZENvbnRleHQoe1xuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci5pZCddO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci51c2VybmFtZSddO1xuICAgICAgICBkZWxldGUgdGFnc1sndXNlci5lbWFpbCddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3Bhbi5hZGRMYWJlbHModGFncyk7XG4gIH07XG5cbiAgX3Byb3RvLl9sb2cgPSBmdW5jdGlvbiBfbG9nKGxvZywgdGltZXN0YW1wKSB7XG4gICAgaWYgKGxvZy5ldmVudCA9PT0gJ2Vycm9yJykge1xuICAgICAgaWYgKGxvZ1snZXJyb3Iub2JqZWN0J10pIHtcbiAgICAgICAgdGhpcy5fX3RyYWNlci5lcnJvckxvZ2dpbmcubG9nRXJyb3IobG9nWydlcnJvci5vYmplY3QnXSk7XG4gICAgICB9IGVsc2UgaWYgKGxvZy5tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuX190cmFjZXIuZXJyb3JMb2dnaW5nLmxvZ0Vycm9yKGxvZy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9maW5pc2ggPSBmdW5jdGlvbiBfZmluaXNoKGZpbmlzaFRpbWUpIHtcbiAgICB0aGlzLnNwYW4uZW5kKCk7XG5cbiAgICBpZiAoZmluaXNoVGltZSkge1xuICAgICAgdGhpcy5zcGFuLl9lbmQgPSBmaW5pc2hUaW1lIC0gZ2V0VGltZU9yaWdpbigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3Bhbjtcbn0ob3RTcGFuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3BhbjsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgVHJhY2VyIGFzIG90VHJhY2VyIH0gZnJvbSAnb3BlbnRyYWNpbmcvbGliL3RyYWNlcic7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfQ0hJTERfT0YsIEZPUk1BVF9URVhUX01BUCwgRk9STUFUX0hUVFBfSEVBREVSUywgRk9STUFUX0JJTkFSWSB9IGZyb20gJ29wZW50cmFjaW5nL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3BhbiBhcyBOb29wU3BhbiB9IGZyb20gJ29wZW50cmFjaW5nL2xpYi9zcGFuJztcbmltcG9ydCB7IGdldFRpbWVPcmlnaW4sIGZpbmQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCBTcGFuIGZyb20gJy4vc3Bhbic7XG5cbnZhciBUcmFjZXIgPSBmdW5jdGlvbiAoX290VHJhY2VyKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYWNlciwgX290VHJhY2VyKTtcblxuICBmdW5jdGlvbiBUcmFjZXIocGVyZm9ybWFuY2VNb25pdG9yaW5nLCB0cmFuc2FjdGlvblNlcnZpY2UsIGxvZ2dpbmdTZXJ2aWNlLCBlcnJvckxvZ2dpbmcpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9vdFRyYWNlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMucGVyZm9ybWFuY2VNb25pdG9yaW5nID0gcGVyZm9ybWFuY2VNb25pdG9yaW5nO1xuICAgIF90aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IHRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBfdGhpcy5sb2dnaW5nU2VydmljZSA9IGxvZ2dpbmdTZXJ2aWNlO1xuICAgIF90aGlzLmVycm9yTG9nZ2luZyA9IGVycm9yTG9nZ2luZztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhY2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uX3N0YXJ0U3BhbiA9IGZ1bmN0aW9uIF9zdGFydFNwYW4obmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBzcGFuT3B0aW9ucyA9IHtcbiAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHNwYW5PcHRpb25zLnRpbWVzdGFtcCA9IG9wdGlvbnMuc3RhcnRUaW1lO1xuXG4gICAgICBpZiAob3B0aW9ucy5jaGlsZE9mKSB7XG4gICAgICAgIHNwYW5PcHRpb25zLnBhcmVudElkID0gb3B0aW9ucy5jaGlsZE9mLmlkO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlZmVyZW5jZXMgJiYgb3B0aW9ucy5yZWZlcmVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVmZXJlbmNlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UuZGVidWcoJ0VsYXN0aWMgQVBNIE9wZW5UcmFjaW5nOiBVbnN1cHBvcnRlZCBudW1iZXIgb2YgcmVmZXJlbmNlcywgb25seSB0aGUgZmlyc3QgY2hpbGRPZiByZWZlcmVuY2Ugd2lsbCBiZSByZWNvcmRlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRSZWYgPSBmaW5kKG9wdGlvbnMucmVmZXJlbmNlcywgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgIHJldHVybiByZWYudHlwZSgpID09PSBSRUZFUkVOQ0VfQ0hJTERfT0Y7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgIHNwYW5PcHRpb25zLnBhcmVudElkID0gY2hpbGRSZWYucmVmZXJlbmNlZENvbnRleHQoKS5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzcGFuO1xuICAgIHZhciBjdXJyZW50VHJhbnNhY3Rpb24gPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcblxuICAgIGlmIChjdXJyZW50VHJhbnNhY3Rpb24pIHtcbiAgICAgIHNwYW4gPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5zdGFydFNwYW4obmFtZSwgdW5kZWZpbmVkLCBzcGFuT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4gPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKG5hbWUsIHVuZGVmaW5lZCwgc3Bhbk9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICghc3Bhbikge1xuICAgICAgcmV0dXJuIG5ldyBOb29wU3BhbigpO1xuICAgIH1cblxuICAgIGlmIChzcGFuT3B0aW9ucy50aW1lc3RhbXApIHtcbiAgICAgIHNwYW4uX3N0YXJ0ID0gc3Bhbk9wdGlvbnMudGltZXN0YW1wIC0gZ2V0VGltZU9yaWdpbigpO1xuICAgIH1cblxuICAgIHZhciBvdFNwYW4gPSBuZXcgU3Bhbih0aGlzLCBzcGFuKTtcblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudGFncykge1xuICAgICAgb3RTcGFuLmFkZFRhZ3Mob3B0aW9ucy50YWdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3RTcGFuO1xuICB9O1xuXG4gIF9wcm90by5faW5qZWN0ID0gZnVuY3Rpb24gX2luamVjdChzcGFuQ29udGV4dCwgZm9ybWF0LCBjYXJyaWVyKSB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgRk9STUFUX1RFWFRfTUFQOlxuICAgICAgY2FzZSBGT1JNQVRfSFRUUF9IRUFERVJTOlxuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlTW9uaXRvcmluZy5pbmplY3REdEhlYWRlcihzcGFuQ29udGV4dCwgY2Fycmllcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEZPUk1BVF9CSU5BUlk6XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5kZWJ1ZygnRWxhc3RpYyBBUE0gT3BlblRyYWNpbmc6IGJpbmFyeSBjYXJyaWVyIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fZXh0cmFjdCA9IGZ1bmN0aW9uIF9leHRyYWN0KGZvcm1hdCwgY2Fycmllcikge1xuICAgIHZhciBjdHg7XG5cbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSBGT1JNQVRfVEVYVF9NQVA6XG4gICAgICBjYXNlIEZPUk1BVF9IVFRQX0hFQURFUlM6XG4gICAgICAgIGN0eCA9IHRoaXMucGVyZm9ybWFuY2VNb25pdG9yaW5nLmV4dHJhY3REdEhlYWRlcihjYXJyaWVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRk9STUFUX0JJTkFSWTpcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmRlYnVnKCdFbGFzdGljIEFQTSBPcGVuVHJhY2luZzogYmluYXJ5IGNhcnJpZXIgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIWN0eCkge1xuICAgICAgY3R4ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3R4O1xuICB9O1xuXG4gIHJldHVybiBUcmFjZXI7XG59KG90VHJhY2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhY2VyOyIsImltcG9ydCB7IGdldER1cmF0aW9uLCBQRVJGIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IFBBR0VfTE9BRCwgVFJVTkNBVEVEX1RZUEUgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbnZhciBwYWdlTG9hZEJyZWFrZG93bnMgPSBbWydkb21haW5Mb29rdXBTdGFydCcsICdkb21haW5Mb29rdXBFbmQnLCAnRE5TJ10sIFsnY29ubmVjdFN0YXJ0JywgJ2Nvbm5lY3RFbmQnLCAnVENQJ10sIFsncmVxdWVzdFN0YXJ0JywgJ3Jlc3BvbnNlU3RhcnQnLCAnUmVxdWVzdCddLCBbJ3Jlc3BvbnNlU3RhcnQnLCAncmVzcG9uc2VFbmQnLCAnUmVzcG9uc2UnXSwgWydkb21Mb2FkaW5nJywgJ2RvbUNvbXBsZXRlJywgJ1Byb2Nlc3NpbmcnXSwgWydsb2FkRXZlbnRTdGFydCcsICdsb2FkRXZlbnRFbmQnLCAnTG9hZCddXTtcblxuZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlU2VsZlRpbWUodHJhbnNhY3Rpb24pIHtcbiAgdmFyIHNwYW5zID0gdHJhbnNhY3Rpb24uc3BhbnMsXG4gICAgICBfc3RhcnQgPSB0cmFuc2FjdGlvbi5fc3RhcnQsXG4gICAgICBfZW5kID0gdHJhbnNhY3Rpb24uX2VuZDtcblxuICBpZiAoc3BhbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uLmR1cmF0aW9uKCk7XG4gIH1cblxuICBzcGFucy5zb3J0KGZ1bmN0aW9uIChzcGFuMSwgc3BhbjIpIHtcbiAgICByZXR1cm4gc3BhbjEuX3N0YXJ0IC0gc3BhbjIuX3N0YXJ0O1xuICB9KTtcbiAgdmFyIHNwYW4gPSBzcGFuc1swXTtcbiAgdmFyIHNwYW5FbmQgPSBzcGFuLl9lbmQ7XG4gIHZhciBzcGFuU3RhcnQgPSBzcGFuLl9zdGFydDtcbiAgdmFyIGxhc3RDb250aW51b3VzRW5kID0gc3BhbkVuZDtcbiAgdmFyIHNlbGZUaW1lID0gc3BhblN0YXJ0IC0gX3N0YXJ0O1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzcGFuID0gc3BhbnNbaV07XG4gICAgc3BhblN0YXJ0ID0gc3Bhbi5fc3RhcnQ7XG4gICAgc3BhbkVuZCA9IHNwYW4uX2VuZDtcblxuICAgIGlmIChzcGFuU3RhcnQgPiBsYXN0Q29udGludW91c0VuZCkge1xuICAgICAgc2VsZlRpbWUgKz0gc3BhblN0YXJ0IC0gbGFzdENvbnRpbnVvdXNFbmQ7XG4gICAgICBsYXN0Q29udGludW91c0VuZCA9IHNwYW5FbmQ7XG4gICAgfSBlbHNlIGlmIChzcGFuRW5kID4gbGFzdENvbnRpbnVvdXNFbmQpIHtcbiAgICAgIGxhc3RDb250aW51b3VzRW5kID0gc3BhbkVuZDtcbiAgICB9XG4gIH1cblxuICBpZiAobGFzdENvbnRpbnVvdXNFbmQgPCBfZW5kKSB7XG4gICAgc2VsZlRpbWUgKz0gX2VuZCAtIGxhc3RDb250aW51b3VzRW5kO1xuICB9XG5cbiAgcmV0dXJuIHNlbGZUaW1lO1xufVxuXG5mdW5jdGlvbiBncm91cFNwYW5zKHRyYW5zYWN0aW9uKSB7XG4gIHZhciBzcGFuTWFwID0ge307XG4gIHZhciB0cmFuc2FjdGlvblNlbGZUaW1lID0gY2FsY3VsYXRlU2VsZlRpbWUodHJhbnNhY3Rpb24pO1xuICBzcGFuTWFwWydhcHAnXSA9IHtcbiAgICBjb3VudDogMSxcbiAgICBkdXJhdGlvbjogdHJhbnNhY3Rpb25TZWxmVGltZVxuICB9O1xuICB2YXIgc3BhbnMgPSB0cmFuc2FjdGlvbi5zcGFucztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNwYW4gPSBzcGFuc1tpXTtcbiAgICB2YXIgZHVyYXRpb24gPSBzcGFuLmR1cmF0aW9uKCk7XG5cbiAgICBpZiAoZHVyYXRpb24gPT09IDAgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBzcGFuLnR5cGUsXG4gICAgICAgIHN1YnR5cGUgPSBzcGFuLnN1YnR5cGU7XG4gICAgdmFyIGtleSA9IHR5cGUucmVwbGFjZShUUlVOQ0FURURfVFlQRSwgJycpO1xuXG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIGtleSArPSAnLicgKyBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmICghc3Bhbk1hcFtrZXldKSB7XG4gICAgICBzcGFuTWFwW2tleV0gPSB7XG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBzcGFuTWFwW2tleV0uY291bnQrKztcbiAgICBzcGFuTWFwW2tleV0uZHVyYXRpb24gKz0gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gc3Bhbk1hcDtcbn1cblxuZnVuY3Rpb24gZ2V0U3BhbkJyZWFrZG93bih0cmFuc2FjdGlvbkRldGFpbHMsIF9yZWYpIHtcbiAgdmFyIGRldGFpbHMgPSBfcmVmLmRldGFpbHMsXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9yZWYkY291bnQsXG4gICAgICBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb247XG4gIHJldHVybiB7XG4gICAgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICBzcGFuOiBkZXRhaWxzLFxuICAgIHNhbXBsZXM6IHtcbiAgICAgICdzcGFuLnNlbGZfdGltZS5jb3VudCc6IGdldFZhbHVlKGNvdW50KSxcbiAgICAgICdzcGFuLnNlbGZfdGltZS5zdW0udXMnOiBnZXRWYWx1ZShkdXJhdGlvbilcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlQnJlYWtkb3duKHRyYW5zYWN0aW9uLCB0aW1pbmdzKSB7XG4gIGlmICh0aW1pbmdzID09PSB2b2lkIDApIHtcbiAgICB0aW1pbmdzID0gUEVSRi50aW1pbmc7XG4gIH1cblxuICB2YXIgYnJlYWtkb3ducyA9IFtdO1xuICB2YXIgdHJEdXJhdGlvbiA9IHRyYW5zYWN0aW9uLmR1cmF0aW9uKCk7XG4gIHZhciBuYW1lID0gdHJhbnNhY3Rpb24ubmFtZSxcbiAgICAgIHR5cGUgPSB0cmFuc2FjdGlvbi50eXBlLFxuICAgICAgc2FtcGxlZCA9IHRyYW5zYWN0aW9uLnNhbXBsZWQ7XG4gIHZhciB0cmFuc2FjdGlvbkRldGFpbHMgPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG4gIGJyZWFrZG93bnMucHVzaCh7XG4gICAgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICBzYW1wbGVzOiB7XG4gICAgICAndHJhbnNhY3Rpb24uZHVyYXRpb24uY291bnQnOiBnZXRWYWx1ZSgxKSxcbiAgICAgICd0cmFuc2FjdGlvbi5kdXJhdGlvbi5zdW0udXMnOiBnZXRWYWx1ZSh0ckR1cmF0aW9uKSxcbiAgICAgICd0cmFuc2FjdGlvbi5icmVha2Rvd24uY291bnQnOiBnZXRWYWx1ZShzYW1wbGVkID8gMSA6IDApXG4gICAgfVxuICB9KTtcblxuICBpZiAoIXNhbXBsZWQpIHtcbiAgICByZXR1cm4gYnJlYWtkb3ducztcbiAgfVxuXG4gIGlmICh0eXBlID09PSBQQUdFX0xPQUQgJiYgdGltaW5ncykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZUxvYWRCcmVha2Rvd25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHBhZ2VMb2FkQnJlYWtkb3duc1tpXTtcbiAgICAgIHZhciBzdGFydCA9IHRpbWluZ3NbY3VycmVudFswXV07XG4gICAgICB2YXIgZW5kID0gdGltaW5nc1tjdXJyZW50WzFdXTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IGdldER1cmF0aW9uKHN0YXJ0LCBlbmQpO1xuXG4gICAgICBpZiAoZHVyYXRpb24gPT09IDAgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWtkb3ducy5wdXNoKGdldFNwYW5CcmVha2Rvd24odHJhbnNhY3Rpb25EZXRhaWxzLCB7XG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICB0eXBlOiBjdXJyZW50WzJdXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc3Bhbk1hcCA9IGdyb3VwU3BhbnModHJhbnNhY3Rpb24pO1xuICAgIE9iamVjdC5rZXlzKHNwYW5NYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIF9rZXkkc3BsaXQgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICB0eXBlID0gX2tleSRzcGxpdFswXSxcbiAgICAgICAgICBzdWJ0eXBlID0gX2tleSRzcGxpdFsxXTtcblxuICAgICAgdmFyIF9zcGFuTWFwJGtleSA9IHNwYW5NYXBba2V5XSxcbiAgICAgICAgICBkdXJhdGlvbiA9IF9zcGFuTWFwJGtleS5kdXJhdGlvbixcbiAgICAgICAgICBjb3VudCA9IF9zcGFuTWFwJGtleS5jb3VudDtcbiAgICAgIGJyZWFrZG93bnMucHVzaChnZXRTcGFuQnJlYWtkb3duKHRyYW5zYWN0aW9uRGV0YWlscywge1xuICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBzdWJ0eXBlOiBzdWJ0eXBlXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgY291bnQ6IGNvdW50XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYnJlYWtkb3ducztcbn0iLCJpbXBvcnQgU3BhbiBmcm9tICcuL3NwYW4nO1xuaW1wb3J0IHsgUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTLCBNQVhfU1BBTl9EVVJBVElPTiwgVVNFUl9USU1JTkdfVEhSRVNIT0xELCBQQUdFX0xPQUQsIFJFU09VUkNFLCBNRUFTVVJFIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzdHJpcFF1ZXJ5U3RyaW5nRnJvbVVybCwgUEVSRiwgaXNQZXJmVGltZWxpbmVTdXBwb3J0ZWQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG52YXIgZXZlbnRQYWlycyA9IFtbJ2RvbWFpbkxvb2t1cFN0YXJ0JywgJ2RvbWFpbkxvb2t1cEVuZCcsICdEb21haW4gbG9va3VwJ10sIFsnY29ubmVjdFN0YXJ0JywgJ2Nvbm5lY3RFbmQnLCAnTWFraW5nIGEgY29ubmVjdGlvbiB0byB0aGUgc2VydmVyJ10sIFsncmVxdWVzdFN0YXJ0JywgJ3Jlc3BvbnNlRW5kJywgJ1JlcXVlc3RpbmcgYW5kIHJlY2VpdmluZyB0aGUgZG9jdW1lbnQnXSwgWydkb21Mb2FkaW5nJywgJ2RvbUludGVyYWN0aXZlJywgJ1BhcnNpbmcgdGhlIGRvY3VtZW50LCBleGVjdXRpbmcgc3luYy4gc2NyaXB0cyddLCBbJ2RvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0JywgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsICdGaXJlIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50J10sIFsnbG9hZEV2ZW50U3RhcnQnLCAnbG9hZEV2ZW50RW5kJywgJ0ZpcmUgXCJsb2FkXCIgZXZlbnQnXV07XG5cbmZ1bmN0aW9uIHNob3VsZENyZWF0ZVNwYW4oc3RhcnQsIGVuZCwgdHJTdGFydCwgdHJFbmQsIGJhc2VUaW1lKSB7XG4gIGlmIChiYXNlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZVRpbWUgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBzdGFydCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgJiYgc3RhcnQgPj0gYmFzZVRpbWUgJiYgZW5kID4gc3RhcnQgJiYgc3RhcnQgLSBiYXNlVGltZSA+PSB0clN0YXJ0ICYmIGVuZCAtIGJhc2VUaW1lIDw9IHRyRW5kICYmIGVuZCAtIHN0YXJ0IDwgTUFYX1NQQU5fRFVSQVRJT04gJiYgc3RhcnQgLSBiYXNlVGltZSA8IE1BWF9TUEFOX0RVUkFUSU9OICYmIGVuZCAtIGJhc2VUaW1lIDwgTUFYX1NQQU5fRFVSQVRJT047XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25UaW1pbmdTcGFucyh0aW1pbmdzLCBiYXNlVGltZSwgdHJTdGFydCwgdHJFbmQpIHtcbiAgdmFyIHNwYW5zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudFBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGltaW5nc1tldmVudFBhaXJzW2ldWzBdXTtcbiAgICB2YXIgZW5kID0gdGltaW5nc1tldmVudFBhaXJzW2ldWzFdXTtcblxuICAgIGlmICghc2hvdWxkQ3JlYXRlU3BhbihzdGFydCwgZW5kLCB0clN0YXJ0LCB0ckVuZCwgYmFzZVRpbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgc3BhbiA9IG5ldyBTcGFuKGV2ZW50UGFpcnNbaV1bMl0sICdoYXJkLW5hdmlnYXRpb24uYnJvd3Nlci10aW1pbmcnKTtcbiAgICB2YXIgZGF0YSA9IG51bGw7XG5cbiAgICBpZiAoZXZlbnRQYWlyc1tpXVswXSA9PT0gJ3JlcXVlc3RTdGFydCcpIHtcbiAgICAgIHNwYW4ucGFnZVJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHVybDogbG9jYXRpb24ub3JpZ2luXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNwYW4uX3N0YXJ0ID0gc3RhcnQgLSBiYXNlVGltZTtcbiAgICBzcGFuLmVuZChlbmQgLSBiYXNlVGltZSwgZGF0YSk7XG4gICAgc3BhbnMucHVzaChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBzcGFucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFuKHJlc291cmNlVGltaW5nRW50cnkpIHtcbiAgdmFyIG5hbWUgPSByZXNvdXJjZVRpbWluZ0VudHJ5Lm5hbWUsXG4gICAgICBpbml0aWF0b3JUeXBlID0gcmVzb3VyY2VUaW1pbmdFbnRyeS5pbml0aWF0b3JUeXBlLFxuICAgICAgc3RhcnRUaW1lID0gcmVzb3VyY2VUaW1pbmdFbnRyeS5zdGFydFRpbWUsXG4gICAgICByZXNwb25zZUVuZCA9IHJlc291cmNlVGltaW5nRW50cnkucmVzcG9uc2VFbmQ7XG4gIHZhciBraW5kID0gJ3Jlc291cmNlJztcblxuICBpZiAoaW5pdGlhdG9yVHlwZSkge1xuICAgIGtpbmQgKz0gJy4nICsgaW5pdGlhdG9yVHlwZTtcbiAgfVxuXG4gIHZhciBzcGFuTmFtZSA9IHN0cmlwUXVlcnlTdHJpbmdGcm9tVXJsKG5hbWUpO1xuICB2YXIgc3BhbiA9IG5ldyBTcGFuKHNwYW5OYW1lLCBraW5kKTtcbiAgc3Bhbi5fc3RhcnQgPSBzdGFydFRpbWU7XG4gIHNwYW4uZW5kKHJlc3BvbnNlRW5kLCB7XG4gICAgdXJsOiBuYW1lLFxuICAgIGVudHJ5OiByZXNvdXJjZVRpbWluZ0VudHJ5XG4gIH0pO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gaXNDYXB0dXJlZEJ5UGF0Y2hpbmcocmVzb3VyY2VTdGFydFRpbWUsIHJlcXVlc3RQYXRjaFRpbWUpIHtcbiAgcmV0dXJuIHJlcXVlc3RQYXRjaFRpbWUgIT0gbnVsbCAmJiByZXNvdXJjZVN0YXJ0VGltZSA+IHJlcXVlc3RQYXRjaFRpbWU7XG59XG5cbmZ1bmN0aW9uIGlzSW50YWtlQVBJRW5kcG9pbnQodXJsKSB7XG4gIHJldHVybiAvaW50YWtlXFwvdlxcZCtcXC9ydW1cXC9ldmVudHMvLnRlc3QodXJsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFucyhlbnRyaWVzLCByZXF1ZXN0UGF0Y2hUaW1lLCB0clN0YXJ0LCB0ckVuZCkge1xuICB2YXIgc3BhbnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2VudHJpZXMkaSA9IGVudHJpZXNbaV0sXG4gICAgICAgIGluaXRpYXRvclR5cGUgPSBfZW50cmllcyRpLmluaXRpYXRvclR5cGUsXG4gICAgICAgIG5hbWUgPSBfZW50cmllcyRpLm5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSA9IF9lbnRyaWVzJGkuc3RhcnRUaW1lLFxuICAgICAgICByZXNwb25zZUVuZCA9IF9lbnRyaWVzJGkucmVzcG9uc2VFbmQ7XG5cbiAgICBpZiAoUkVTT1VSQ0VfSU5JVElBVE9SX1RZUEVTLmluZGV4T2YoaW5pdGlhdG9yVHlwZSkgPT09IC0xIHx8IG5hbWUgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKChpbml0aWF0b3JUeXBlID09PSAneG1saHR0cHJlcXVlc3QnIHx8IGluaXRpYXRvclR5cGUgPT09ICdmZXRjaCcpICYmIChpc0ludGFrZUFQSUVuZHBvaW50KG5hbWUpIHx8IGlzQ2FwdHVyZWRCeVBhdGNoaW5nKHN0YXJ0VGltZSwgcmVxdWVzdFBhdGNoVGltZSkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkQ3JlYXRlU3BhbihzdGFydFRpbWUsIHJlc3BvbnNlRW5kLCB0clN0YXJ0LCB0ckVuZCkpIHtcbiAgICAgIHNwYW5zLnB1c2goY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFuKGVudHJpZXNbaV0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3BhbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJUaW1pbmdTcGFucyhlbnRyaWVzLCB0clN0YXJ0LCB0ckVuZCkge1xuICB2YXIgdXNlclRpbWluZ1NwYW5zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9lbnRyaWVzJGkyID0gZW50cmllc1tpXSxcbiAgICAgICAgbmFtZSA9IF9lbnRyaWVzJGkyLm5hbWUsXG4gICAgICAgIHN0YXJ0VGltZSA9IF9lbnRyaWVzJGkyLnN0YXJ0VGltZSxcbiAgICAgICAgZHVyYXRpb24gPSBfZW50cmllcyRpMi5kdXJhdGlvbjtcbiAgICB2YXIgZW5kID0gc3RhcnRUaW1lICsgZHVyYXRpb247XG5cbiAgICBpZiAoZHVyYXRpb24gPD0gVVNFUl9USU1JTkdfVEhSRVNIT0xEIHx8ICFzaG91bGRDcmVhdGVTcGFuKHN0YXJ0VGltZSwgZW5kLCB0clN0YXJ0LCB0ckVuZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBraW5kID0gJ2FwcCc7XG4gICAgdmFyIHNwYW4gPSBuZXcgU3BhbihuYW1lLCBraW5kKTtcbiAgICBzcGFuLl9zdGFydCA9IHN0YXJ0VGltZTtcbiAgICBzcGFuLmVuZChlbmQpO1xuICAgIHVzZXJUaW1pbmdTcGFucy5wdXNoKHNwYW4pO1xuICB9XG5cbiAgcmV0dXJuIHVzZXJUaW1pbmdTcGFucztcbn1cblxudmFyIE5BVklHQVRJT05fVElNSU5HX01BUktTID0gWydmZXRjaFN0YXJ0JywgJ2RvbWFpbkxvb2t1cFN0YXJ0JywgJ2RvbWFpbkxvb2t1cEVuZCcsICdjb25uZWN0U3RhcnQnLCAnY29ubmVjdEVuZCcsICdyZXF1ZXN0U3RhcnQnLCAncmVzcG9uc2VTdGFydCcsICdyZXNwb25zZUVuZCcsICdkb21Mb2FkaW5nJywgJ2RvbUludGVyYWN0aXZlJywgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0JywgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsICdkb21Db21wbGV0ZScsICdsb2FkRXZlbnRTdGFydCcsICdsb2FkRXZlbnRFbmQnXTtcbnZhciBDT01QUkVTU0VEX05BVl9USU1JTkdfTUFSS1MgPSBbJ2ZzJywgJ2xzJywgJ2xlJywgJ2NzJywgJ2NlJywgJ3FzJywgJ3JzJywgJ3JlJywgJ2RsJywgJ2RpJywgJ2RzJywgJ2RlJywgJ2RjJywgJ2VzJywgJ2VlJ107XG5cbmZ1bmN0aW9uIGdldE5hdmlnYXRpb25UaW1pbmdNYXJrcyh0aW1pbmcpIHtcbiAgdmFyIGZldGNoU3RhcnQgPSB0aW1pbmcuZmV0Y2hTdGFydCxcbiAgICAgIG5hdmlnYXRpb25TdGFydCA9IHRpbWluZy5uYXZpZ2F0aW9uU3RhcnQsXG4gICAgICByZXNwb25zZVN0YXJ0ID0gdGltaW5nLnJlc3BvbnNlU3RhcnQsXG4gICAgICByZXNwb25zZUVuZCA9IHRpbWluZy5yZXNwb25zZUVuZDtcblxuICBpZiAoZmV0Y2hTdGFydCA+PSBuYXZpZ2F0aW9uU3RhcnQgJiYgcmVzcG9uc2VTdGFydCA+PSBmZXRjaFN0YXJ0ICYmIHJlc3BvbnNlRW5kID49IHJlc3BvbnNlU3RhcnQpIHtcbiAgICB2YXIgbWFya3MgPSB7fTtcbiAgICBOQVZJR0FUSU9OX1RJTUlOR19NQVJLUy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1pbmdLZXkpIHtcbiAgICAgIHZhciBtID0gdGltaW5nW3RpbWluZ0tleV07XG5cbiAgICAgIGlmIChtICYmIG0gPj0gZmV0Y2hTdGFydCkge1xuICAgICAgICBtYXJrc1t0aW1pbmdLZXldID0gcGFyc2VJbnQobSAtIGZldGNoU3RhcnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXJrcztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRQYWdlTG9hZE1hcmtzKHRpbWluZykge1xuICB2YXIgbWFya3MgPSBnZXROYXZpZ2F0aW9uVGltaW5nTWFya3ModGltaW5nKTtcblxuICBpZiAobWFya3MgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYXZpZ2F0aW9uVGltaW5nOiBtYXJrcyxcbiAgICBhZ2VudDoge1xuICAgICAgdGltZVRvRmlyc3RCeXRlOiBtYXJrcy5yZXNwb25zZVN0YXJ0LFxuICAgICAgZG9tSW50ZXJhY3RpdmU6IG1hcmtzLmRvbUludGVyYWN0aXZlLFxuICAgICAgZG9tQ29tcGxldGU6IG1hcmtzLmRvbUNvbXBsZXRlXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTmF2aWdhdGlvbih0cmFuc2FjdGlvbikge1xuICBpZiAoIXRyYW5zYWN0aW9uLmNhcHR1cmVUaW1pbmdzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyRW5kID0gdHJhbnNhY3Rpb24uX2VuZDtcblxuICBpZiAodHJhbnNhY3Rpb24udHlwZSA9PT0gUEFHRV9MT0FEKSB7XG4gICAgaWYgKHRyYW5zYWN0aW9uLm1hcmtzICYmIHRyYW5zYWN0aW9uLm1hcmtzLmN1c3RvbSkge1xuICAgICAgdmFyIGN1c3RvbU1hcmtzID0gdHJhbnNhY3Rpb24ubWFya3MuY3VzdG9tO1xuICAgICAgT2JqZWN0LmtleXMoY3VzdG9tTWFya3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjdXN0b21NYXJrc1trZXldICs9IHRyYW5zYWN0aW9uLl9zdGFydDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB0clN0YXJ0ID0gMDtcbiAgICB0cmFuc2FjdGlvbi5fc3RhcnQgPSB0clN0YXJ0O1xuICAgIHZhciB0aW1pbmdzID0gUEVSRi50aW1pbmc7XG4gICAgY3JlYXRlTmF2aWdhdGlvblRpbWluZ1NwYW5zKHRpbWluZ3MsIHRpbWluZ3MuZmV0Y2hTdGFydCwgdHJTdGFydCwgdHJFbmQpLmZvckVhY2goZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgIHNwYW4udHJhY2VJZCA9IHRyYW5zYWN0aW9uLnRyYWNlSWQ7XG4gICAgICBzcGFuLnNhbXBsZWQgPSB0cmFuc2FjdGlvbi5zYW1wbGVkO1xuXG4gICAgICBpZiAoc3Bhbi5wYWdlUmVzcG9uc2UgJiYgdHJhbnNhY3Rpb24ub3B0aW9ucy5wYWdlTG9hZFNwYW5JZCkge1xuICAgICAgICBzcGFuLmlkID0gdHJhbnNhY3Rpb24ub3B0aW9ucy5wYWdlTG9hZFNwYW5JZDtcbiAgICAgIH1cblxuICAgICAgdHJhbnNhY3Rpb24uc3BhbnMucHVzaChzcGFuKTtcbiAgICB9KTtcbiAgICB0cmFuc2FjdGlvbi5hZGRNYXJrcyhnZXRQYWdlTG9hZE1hcmtzKHRpbWluZ3MpKTtcbiAgfVxuXG4gIGlmIChpc1BlcmZUaW1lbGluZVN1cHBvcnRlZCgpKSB7XG4gICAgdmFyIF90clN0YXJ0ID0gdHJhbnNhY3Rpb24uX3N0YXJ0O1xuICAgIHZhciByZXNvdXJjZUVudHJpZXMgPSBQRVJGLmdldEVudHJpZXNCeVR5cGUoUkVTT1VSQ0UpO1xuICAgIGNyZWF0ZVJlc291cmNlVGltaW5nU3BhbnMocmVzb3VyY2VFbnRyaWVzLCBzdGF0ZS5ib290c3RyYXBUaW1lLCBfdHJTdGFydCwgdHJFbmQpLmZvckVhY2goZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvbi5zcGFucy5wdXNoKHNwYW4pO1xuICAgIH0pO1xuICAgIHZhciB1c2VyRW50cmllcyA9IFBFUkYuZ2V0RW50cmllc0J5VHlwZShNRUFTVVJFKTtcbiAgICBjcmVhdGVVc2VyVGltaW5nU3BhbnModXNlckVudHJpZXMsIF90clN0YXJ0LCB0ckVuZCkuZm9yRWFjaChmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uLnNwYW5zLnB1c2goc3Bhbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0UGFnZUxvYWRNYXJrcywgY2FwdHVyZU5hdmlnYXRpb24sIGNyZWF0ZU5hdmlnYXRpb25UaW1pbmdTcGFucywgY3JlYXRlUmVzb3VyY2VUaW1pbmdTcGFucywgY3JlYXRlVXNlclRpbWluZ1NwYW5zLCBOQVZJR0FUSU9OX1RJTUlOR19NQVJLUywgQ09NUFJFU1NFRF9OQVZfVElNSU5HX01BUktTIH07IiwiaW1wb3J0IFBlcmZvcm1hbmNlTW9uaXRvcmluZyBmcm9tICcuL3BlcmZvcm1hbmNlLW1vbml0b3JpbmcnO1xuaW1wb3J0IFRyYW5zYWN0aW9uU2VydmljZSBmcm9tICcuL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQVBNX1NFUlZFUiwgQ09ORklHX1NFUlZJQ0UsIExPR0dJTkdfU0VSVklDRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2VydmljZUNyZWF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2UtZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZXMoKSB7XG4gIHNlcnZpY2VDcmVhdG9yc1snVHJhbnNhY3Rpb25TZXJ2aWNlJ10gPSBmdW5jdGlvbiAoc2VydmljZUZhY3RvcnkpIHtcbiAgICB2YXIgX3NlcnZpY2VGYWN0b3J5JGdldFNlID0gc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShbTE9HR0lOR19TRVJWSUNFLCBDT05GSUdfU0VSVklDRV0pLFxuICAgICAgICBsb2dnaW5nU2VydmljZSA9IF9zZXJ2aWNlRmFjdG9yeSRnZXRTZVswXSxcbiAgICAgICAgY29uZmlnU2VydmljZSA9IF9zZXJ2aWNlRmFjdG9yeSRnZXRTZVsxXTtcblxuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKGxvZ2dpbmdTZXJ2aWNlLCBjb25maWdTZXJ2aWNlKTtcbiAgfTtcblxuICBzZXJ2aWNlQ3JlYXRvcnNbJ1BlcmZvcm1hbmNlTW9uaXRvcmluZyddID0gZnVuY3Rpb24gKHNlcnZpY2VGYWN0b3J5KSB7XG4gICAgdmFyIF9zZXJ2aWNlRmFjdG9yeSRnZXRTZTIgPSBzZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFtBUE1fU0VSVkVSLCBDT05GSUdfU0VSVklDRSwgTE9HR0lOR19TRVJWSUNFLCAnVHJhbnNhY3Rpb25TZXJ2aWNlJ10pLFxuICAgICAgICBhcG1TZXJ2ZXIgPSBfc2VydmljZUZhY3RvcnkkZ2V0U2UyWzBdLFxuICAgICAgICBjb25maWdTZXJ2aWNlID0gX3NlcnZpY2VGYWN0b3J5JGdldFNlMlsxXSxcbiAgICAgICAgbG9nZ2luZ1NlcnZpY2UgPSBfc2VydmljZUZhY3RvcnkkZ2V0U2UyWzJdLFxuICAgICAgICB0cmFuc2FjdGlvblNlcnZpY2UgPSBfc2VydmljZUZhY3RvcnkkZ2V0U2UyWzNdO1xuXG4gICAgcmV0dXJuIG5ldyBQZXJmb3JtYW5jZU1vbml0b3JpbmcoYXBtU2VydmVyLCBjb25maWdTZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgdHJhbnNhY3Rpb25TZXJ2aWNlKTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJTZXJ2aWNlcyB9OyIsImltcG9ydCB7IExPTkdfVEFTSywgTEFSR0VTVF9DT05URU5URlVMX1BBSU5ULCBGSVJTVF9DT05URU5URlVMX1BBSU5ULCBGSVJTVF9JTlBVVCwgTEFZT1VUX1NISUZUIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBub29wLCBQRVJGIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCBTcGFuIGZyb20gJy4vc3Bhbic7XG5leHBvcnQgdmFyIG1ldHJpY3MgPSB7XG4gIGZpZDogMCxcbiAgZmNwOiAwLFxuICB0YnQ6IHtcbiAgICBzdGFydDogSW5maW5pdHksXG4gICAgZHVyYXRpb246IDBcbiAgfSxcbiAgY2xzOiAwLFxuICBsb25ndGFzazoge1xuICAgIGNvdW50OiAwLFxuICAgIGR1cmF0aW9uOiAwLFxuICAgIG1heDogMFxuICB9XG59O1xudmFyIExPTkdfVEFTS19USFJFU0hPTEQgPSA1MDtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb25nVGFza1NwYW5zKGxvbmd0YXNrcywgYWdnKSB7XG4gIHZhciBzcGFucyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ3Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9sb25ndGFza3MkaSA9IGxvbmd0YXNrc1tpXSxcbiAgICAgICAgbmFtZSA9IF9sb25ndGFza3MkaS5uYW1lLFxuICAgICAgICBzdGFydFRpbWUgPSBfbG9uZ3Rhc2tzJGkuc3RhcnRUaW1lLFxuICAgICAgICBkdXJhdGlvbiA9IF9sb25ndGFza3MkaS5kdXJhdGlvbixcbiAgICAgICAgYXR0cmlidXRpb24gPSBfbG9uZ3Rhc2tzJGkuYXR0cmlidXRpb247XG4gICAgdmFyIGVuZCA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuICAgIHZhciBzcGFuID0gbmV3IFNwYW4oXCJMb25ndGFzayhcIiArIG5hbWUgKyBcIilcIiwgTE9OR19UQVNLLCB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICAgIH0pO1xuICAgIGFnZy5jb3VudCsrO1xuICAgIGFnZy5kdXJhdGlvbiArPSBkdXJhdGlvbjtcblxuICAgIGlmIChkdXJhdGlvbiA+IGFnZy5tYXgpIHtcbiAgICAgIGFnZy5tYXggPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIF9hdHRyaWJ1dGlvbiQgPSBhdHRyaWJ1dGlvblswXSxcbiAgICAgICAgICBfbmFtZSA9IF9hdHRyaWJ1dGlvbiQubmFtZSxcbiAgICAgICAgICBjb250YWluZXJUeXBlID0gX2F0dHJpYnV0aW9uJC5jb250YWluZXJUeXBlLFxuICAgICAgICAgIGNvbnRhaW5lck5hbWUgPSBfYXR0cmlidXRpb24kLmNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgY29udGFpbmVySWQgPSBfYXR0cmlidXRpb24kLmNvbnRhaW5lcklkO1xuICAgICAgdmFyIGN1c3RvbUNvbnRleHQgPSB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBfbmFtZSxcbiAgICAgICAgdHlwZTogY29udGFpbmVyVHlwZVxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbnRhaW5lck5hbWUpIHtcbiAgICAgICAgY3VzdG9tQ29udGV4dC5uYW1lID0gY29udGFpbmVyTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRhaW5lcklkKSB7XG4gICAgICAgIGN1c3RvbUNvbnRleHQuaWQgPSBjb250YWluZXJJZDtcbiAgICAgIH1cblxuICAgICAgc3Bhbi5hZGRDb250ZXh0KHtcbiAgICAgICAgY3VzdG9tOiBjdXN0b21Db250ZXh0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzcGFuLmVuZChlbmQpO1xuICAgIHNwYW5zLnB1c2goc3Bhbik7XG4gIH1cblxuICByZXR1cm4gc3BhbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RJbnB1dERlbGF5U3BhbihmaWRFbnRyaWVzKSB7XG4gIHZhciBmaXJzdElucHV0ID0gZmlkRW50cmllc1swXTtcblxuICBpZiAoZmlyc3RJbnB1dCkge1xuICAgIHZhciBzdGFydFRpbWUgPSBmaXJzdElucHV0LnN0YXJ0VGltZSxcbiAgICAgICAgcHJvY2Vzc2luZ1N0YXJ0ID0gZmlyc3RJbnB1dC5wcm9jZXNzaW5nU3RhcnQ7XG4gICAgdmFyIHNwYW4gPSBuZXcgU3BhbignRmlyc3QgSW5wdXQgRGVsYXknLCBGSVJTVF9JTlBVVCwge1xuICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWVcbiAgICB9KTtcbiAgICBzcGFuLmVuZChwcm9jZXNzaW5nU3RhcnQpO1xuICAgIHJldHVybiBzcGFuO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxCbG9ja2luZ1RpbWVTcGFuKHRidE9iamVjdCkge1xuICB2YXIgc3RhcnQgPSB0YnRPYmplY3Quc3RhcnQsXG4gICAgICBkdXJhdGlvbiA9IHRidE9iamVjdC5kdXJhdGlvbjtcbiAgdmFyIHRidFNwYW4gPSBuZXcgU3BhbignVG90YWwgQmxvY2tpbmcgVGltZScsIExPTkdfVEFTSywge1xuICAgIHN0YXJ0VGltZTogc3RhcnRcbiAgfSk7XG4gIHRidFNwYW4uZW5kKHN0YXJ0ICsgZHVyYXRpb24pO1xuICByZXR1cm4gdGJ0U3Bhbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbEJsb2NraW5nVGltZShsb25ndGFza0VudHJpZXMpIHtcbiAgbG9uZ3Rhc2tFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIG5hbWUgPSBlbnRyeS5uYW1lLFxuICAgICAgICBzdGFydFRpbWUgPSBlbnRyeS5zdGFydFRpbWUsXG4gICAgICAgIGR1cmF0aW9uID0gZW50cnkuZHVyYXRpb247XG5cbiAgICBpZiAoc3RhcnRUaW1lIDwgbWV0cmljcy5mY3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmFtZSAhPT0gJ3NlbGYnICYmIG5hbWUuaW5kZXhPZignc2FtZS1vcmlnaW4nKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXRyaWNzLnRidC5zdGFydCA9IE1hdGgubWluKG1ldHJpY3MudGJ0LnN0YXJ0LCBzdGFydFRpbWUpO1xuICAgIHZhciBibG9ja2luZ1RpbWUgPSBkdXJhdGlvbiAtIExPTkdfVEFTS19USFJFU0hPTEQ7XG5cbiAgICBpZiAoYmxvY2tpbmdUaW1lID4gMCkge1xuICAgICAgbWV0cmljcy50YnQuZHVyYXRpb24gKz0gYmxvY2tpbmdUaW1lO1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ3VtdWxhdGl2ZUxheW91dFNoaWZ0KGNsc0VudHJpZXMpIHtcbiAgY2xzRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIGlmICghZW50cnkuaGFkUmVjZW50SW5wdXQpIHtcbiAgICAgIG1ldHJpY3MuY2xzICs9IGVudHJ5LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZU9ic2VydmVyRW50cmllcyhsaXN0LCBfcmVmKSB7XG4gIHZhciBjYXB0dXJlUGFpbnQgPSBfcmVmLmNhcHR1cmVQYWludDtcbiAgdmFyIGxvbmd0YXNrRW50cmllcyA9IGxpc3QuZ2V0RW50cmllc0J5VHlwZShMT05HX1RBU0spO1xuICB2YXIgbG9uZ1Rhc2tTcGFucyA9IGNyZWF0ZUxvbmdUYXNrU3BhbnMobG9uZ3Rhc2tFbnRyaWVzLCBtZXRyaWNzLmxvbmd0YXNrKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBzcGFuczogbG9uZ1Rhc2tTcGFucyxcbiAgICBtYXJrczoge31cbiAgfTtcblxuICBpZiAoIWNhcHR1cmVQYWludCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgbGNwRW50cmllcyA9IGxpc3QuZ2V0RW50cmllc0J5VHlwZShMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQpO1xuICB2YXIgbGFzdExjcEVudHJ5ID0gbGNwRW50cmllc1tsY3BFbnRyaWVzLmxlbmd0aCAtIDFdO1xuXG4gIGlmIChsYXN0TGNwRW50cnkpIHtcbiAgICB2YXIgbGNwID0gcGFyc2VJbnQobGFzdExjcEVudHJ5LnN0YXJ0VGltZSk7XG4gICAgbWV0cmljcy5sY3AgPSBsY3A7XG4gICAgcmVzdWx0Lm1hcmtzLmxhcmdlc3RDb250ZW50ZnVsUGFpbnQgPSBsY3A7XG4gIH1cblxuICB2YXIgdGltaW5nID0gUEVSRi50aW1pbmc7XG4gIHZhciB1bmxvYWREaWZmID0gdGltaW5nLmZldGNoU3RhcnQgLSB0aW1pbmcubmF2aWdhdGlvblN0YXJ0O1xuICB2YXIgZmNwRW50cnkgPSBsaXN0LmdldEVudHJpZXNCeU5hbWUoRklSU1RfQ09OVEVOVEZVTF9QQUlOVClbMF07XG5cbiAgaWYgKGZjcEVudHJ5KSB7XG4gICAgdmFyIGZjcCA9IHBhcnNlSW50KHVubG9hZERpZmYgPj0gMCA/IGZjcEVudHJ5LnN0YXJ0VGltZSAtIHVubG9hZERpZmYgOiBmY3BFbnRyeS5zdGFydFRpbWUpO1xuICAgIG1ldHJpY3MuZmNwID0gZmNwO1xuICAgIHJlc3VsdC5tYXJrcy5maXJzdENvbnRlbnRmdWxQYWludCA9IGZjcDtcbiAgfVxuXG4gIHZhciBmaWRFbnRyaWVzID0gbGlzdC5nZXRFbnRyaWVzQnlUeXBlKEZJUlNUX0lOUFVUKTtcbiAgdmFyIGZpZFNwYW4gPSBjcmVhdGVGaXJzdElucHV0RGVsYXlTcGFuKGZpZEVudHJpZXMpO1xuXG4gIGlmIChmaWRTcGFuKSB7XG4gICAgbWV0cmljcy5maWQgPSBmaWRTcGFuLmR1cmF0aW9uKCk7XG4gICAgcmVzdWx0LnNwYW5zLnB1c2goZmlkU3Bhbik7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbEJsb2NraW5nVGltZShsb25ndGFza0VudHJpZXMpO1xuICB2YXIgY2xzRW50cmllcyA9IGxpc3QuZ2V0RW50cmllc0J5VHlwZShMQVlPVVRfU0hJRlQpO1xuICBjYWxjdWxhdGVDdW11bGF0aXZlTGF5b3V0U2hpZnQoY2xzRW50cmllcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgdmFyIFBlcmZFbnRyeVJlY29yZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQZXJmRW50cnlSZWNvcmRlcihjYWxsYmFjaykge1xuICAgIHRoaXMucG8gPSB7XG4gICAgICBvYnNlcnZlOiBub29wLFxuICAgICAgZGlzY29ubmVjdDogbm9vcFxuICAgIH07XG5cbiAgICBpZiAod2luZG93LlBlcmZvcm1hbmNlT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucG8gPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcihjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IFBlcmZFbnRyeVJlY29yZGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3RhcnQgPSBmdW5jdGlvbiBzdGFydCh0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBidWZmZXJlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0eXBlID09PSBMT05HX1RBU0spIHtcbiAgICAgICAgYnVmZmVyZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wby5vYnNlcnZlKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgYnVmZmVyZWQ6IGJ1ZmZlcmVkXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChfKSB7fVxuICB9O1xuXG4gIF9wcm90by5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB0aGlzLnBvLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICByZXR1cm4gUGVyZkVudHJ5UmVjb3JkZXI7XG59KCk7IiwiaW1wb3J0IHsgY2hlY2tTYW1lT3JpZ2luLCBpc0R0SGVhZGVyVmFsaWQsIHBhcnNlRHRIZWFkZXJWYWx1ZSwgZ2V0RHRIZWFkZXJWYWx1ZSwgc3RyaXBRdWVyeVN0cmluZ0Zyb21VcmwgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAnLi4vY29tbW9uL3VybCc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvbW1vbi9wYXRjaGluZyc7XG5pbXBvcnQgeyBnbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9wYXRjaGluZy9wYXRjaC11dGlscyc7XG5pbXBvcnQgeyBTQ0hFRFVMRSwgSU5WT0tFLCBUUkFOU0FDVElPTl9FTkQsIEFGVEVSX0VWRU5ULCBGRVRDSCwgSElTVE9SWSwgWE1MSFRUUFJFUVVFU1QsIEVWRU5UX1RBUkdFVCwgSFRUUF9SRVFVRVNUX1RZUEUsIFVTRVJfSU5URVJBQ1RJT04sIE9VVENPTUVfRkFJTFVSRSwgT1VUQ09NRV9TVUNDRVNTIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0cnVuY2F0ZU1vZGVsLCBTUEFOX01PREVMLCBUUkFOU0FDVElPTl9NT0RFTCB9IGZyb20gJy4uL2NvbW1vbi90cnVuY2F0ZSc7XG5pbXBvcnQgeyBfX0RFVl9fIH0gZnJvbSAnLi4vc3RhdGUnO1xudmFyIFNJTUlMQVJfU1BBTl9UT19UUkFOU0FDVElPTl9SQVRJTyA9IDAuMDU7XG52YXIgVFJBTlNBQ1RJT05fRFVSQVRJT05fVEhSRVNIT0xEID0gNjAwMDA7XG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBTbWFsbENvbnRpbnVvdXNseVNpbWlsYXJTcGFucyhvcmlnaW5hbFNwYW5zLCB0cmFuc0R1cmF0aW9uLCB0aHJlc2hvbGQpIHtcbiAgb3JpZ2luYWxTcGFucy5zb3J0KGZ1bmN0aW9uIChzcGFuQSwgc3BhbkIpIHtcbiAgICByZXR1cm4gc3BhbkEuX3N0YXJ0IC0gc3BhbkIuX3N0YXJ0O1xuICB9KTtcbiAgdmFyIHNwYW5zID0gW107XG4gIHZhciBsYXN0Q291bnQgPSAxO1xuICBvcmlnaW5hbFNwYW5zLmZvckVhY2goZnVuY3Rpb24gKHNwYW4sIGluZGV4KSB7XG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3BhbnMucHVzaChzcGFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxhc3RTcGFuID0gc3BhbnNbc3BhbnMubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgaXNDb250aW51b3VzbHlTaW1pbGFyID0gbGFzdFNwYW4udHlwZSA9PT0gc3Bhbi50eXBlICYmIGxhc3RTcGFuLnN1YnR5cGUgPT09IHNwYW4uc3VidHlwZSAmJiBsYXN0U3Bhbi5hY3Rpb24gPT09IHNwYW4uYWN0aW9uICYmIGxhc3RTcGFuLm5hbWUgPT09IHNwYW4ubmFtZSAmJiBzcGFuLmR1cmF0aW9uKCkgLyB0cmFuc0R1cmF0aW9uIDwgdGhyZXNob2xkICYmIChzcGFuLl9zdGFydCAtIGxhc3RTcGFuLl9lbmQpIC8gdHJhbnNEdXJhdGlvbiA8IHRocmVzaG9sZDtcbiAgICAgIHZhciBpc0xhc3RTcGFuID0gb3JpZ2luYWxTcGFucy5sZW5ndGggPT09IGluZGV4ICsgMTtcblxuICAgICAgaWYgKGlzQ29udGludW91c2x5U2ltaWxhcikge1xuICAgICAgICBsYXN0Q291bnQrKztcbiAgICAgICAgbGFzdFNwYW4uX2VuZCA9IHNwYW4uX2VuZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RDb3VudCA+IDEgJiYgKCFpc0NvbnRpbnVvdXNseVNpbWlsYXIgfHwgaXNMYXN0U3BhbikpIHtcbiAgICAgICAgbGFzdFNwYW4ubmFtZSA9IGxhc3RDb3VudCArICd4ICcgKyBsYXN0U3Bhbi5uYW1lO1xuICAgICAgICBsYXN0Q291bnQgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQ29udGludW91c2x5U2ltaWxhcikge1xuICAgICAgICBzcGFucy5wdXNoKHNwYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzcGFucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUcmFuc2FjdGlvblNwYW5zKHRyYW5zYWN0aW9uKSB7XG4gIGlmICh0cmFuc2FjdGlvbi5zYW1wbGVkKSB7XG4gICAgdmFyIGZpbHRlcmRTcGFucyA9IHRyYW5zYWN0aW9uLnNwYW5zLmZpbHRlcihmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgcmV0dXJuIHNwYW4uZHVyYXRpb24oKSA+IDAgJiYgc3Bhbi5fc3RhcnQgPj0gdHJhbnNhY3Rpb24uX3N0YXJ0ICYmIHNwYW4uX2VuZCA8PSB0cmFuc2FjdGlvbi5fZW5kO1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zYWN0aW9uLmlzTWFuYWdlZCgpKSB7XG4gICAgICB2YXIgZHVyYXRpb24gPSB0cmFuc2FjdGlvbi5kdXJhdGlvbigpO1xuICAgICAgdmFyIHNpbWlsYXJTcGFucyA9IGdyb3VwU21hbGxDb250aW51b3VzbHlTaW1pbGFyU3BhbnMoZmlsdGVyZFNwYW5zLCBkdXJhdGlvbiwgU0lNSUxBUl9TUEFOX1RPX1RSQU5TQUNUSU9OX1JBVElPKTtcbiAgICAgIHRyYW5zYWN0aW9uLnNwYW5zID0gc2ltaWxhclNwYW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2FjdGlvbi5zcGFucyA9IGZpbHRlcmRTcGFucztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNhY3Rpb24ucmVzZXRTcGFucygpO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zYWN0aW9uO1xufVxuXG52YXIgUGVyZm9ybWFuY2VNb25pdG9yaW5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQZXJmb3JtYW5jZU1vbml0b3JpbmcoYXBtU2VydmVyLCBjb25maWdTZXJ2aWNlLCBsb2dnaW5nU2VydmljZSwgdHJhbnNhY3Rpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5fYXBtU2VydmVyID0gYXBtU2VydmVyO1xuICAgIHRoaXMuX2NvbmZpZ1NlcnZpY2UgPSBjb25maWdTZXJ2aWNlO1xuICAgIHRoaXMuX2xvZ2dpblNlcnZpY2UgPSBsb2dnaW5nU2VydmljZTtcbiAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UgPSB0cmFuc2FjdGlvblNlcnZpY2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUGVyZm9ybWFuY2VNb25pdG9yaW5nLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoZmxhZ3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnU2VydmljZS5ldmVudHMub2JzZXJ2ZShUUkFOU0FDVElPTl9FTkQgKyBBRlRFUl9FVkVOVCwgZnVuY3Rpb24gKHRyKSB7XG4gICAgICB2YXIgcGF5bG9hZCA9IF90aGlzLmNyZWF0ZVRyYW5zYWN0aW9uUGF5bG9hZCh0cik7XG5cbiAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgIF90aGlzLl9hcG1TZXJ2ZXIuYWRkVHJhbnNhY3Rpb24ocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmxhZ3NbSElTVE9SWV0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoSElTVE9SWSwgdGhpcy5nZXRIaXN0b3J5U3ViKCkpO1xuICAgIH1cblxuICAgIGlmIChmbGFnc1tYTUxIVFRQUkVRVUVTVF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoWE1MSFRUUFJFUVVFU1QsIHRoaXMuZ2V0WEhSU3ViKCkpO1xuICAgIH1cblxuICAgIGlmIChmbGFnc1tGRVRDSF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoRkVUQ0gsIHRoaXMuZ2V0RmV0Y2hTdWIoKSk7XG4gICAgfVxuXG4gICAgaWYgKGZsYWdzW0VWRU5UX1RBUkdFVF0pIHtcbiAgICAgIHBhdGNoRXZlbnRIYW5kbGVyLm9ic2VydmUoRVZFTlRfVEFSR0VULCB0aGlzLmdldEV2ZW50VGFyZ2V0U3ViKCkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0RXZlbnRUYXJnZXRTdWIgPSBmdW5jdGlvbiBnZXRFdmVudFRhcmdldFN1YigpIHtcbiAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmIChldmVudCA9PT0gU0NIRURVTEUgJiYgdGFzay5zb3VyY2UgPT09IEVWRU5UX1RBUkdFVCAmJiB0YXNrLmV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGFzay50YXJnZXQ7XG4gICAgICAgIHZhciBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICB2YXIgYWRkaXRpb25hbEluZm8gPSAnJztcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIGFkZGl0aW9uYWxJbmZvID0gXCJbXFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHRyID0gdHJhbnNhY3Rpb25TZXJ2aWNlLnN0YXJ0VHJhbnNhY3Rpb24oXCJDbGljayAtIFwiICsgdGFnTmFtZSArIGFkZGl0aW9uYWxJbmZvLCBVU0VSX0lOVEVSQUNUSU9OLCB7XG4gICAgICAgICAgbWFuYWdlZDogdHJ1ZSxcbiAgICAgICAgICBjYW5SZXVzZTogdHJ1ZSxcbiAgICAgICAgICByZXVzZVRocmVzaG9sZDogMTAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0cikge1xuICAgICAgICAgIHZhciBjbGFzc2VzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcblxuICAgICAgICAgIGlmIChjbGFzc2VzKSB7XG4gICAgICAgICAgICB0ci5hZGRDb250ZXh0KHtcbiAgICAgICAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRIaXN0b3J5U3ViID0gZnVuY3Rpb24gZ2V0SGlzdG9yeVN1YigpIHtcbiAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmICh0YXNrLnNvdXJjZSA9PT0gSElTVE9SWSAmJiBldmVudCA9PT0gSU5WT0tFKSB7XG4gICAgICAgIHRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKHRhc2suZGF0YS50aXRsZSwgJ3JvdXRlLWNoYW5nZScsIHtcbiAgICAgICAgICBtYW5hZ2VkOiB0cnVlLFxuICAgICAgICAgIGNhblJldXNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFhIUlN1YiA9IGZ1bmN0aW9uIGdldFhIUlN1YigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIHRhc2spIHtcbiAgICAgIGlmICh0YXNrLnNvdXJjZSA9PT0gWE1MSFRUUFJFUVVFU1QgJiYgIWdsb2JhbFN0YXRlLmZldGNoSW5Qcm9ncmVzcykge1xuICAgICAgICBfdGhpczIucHJvY2Vzc0FQSUNhbGxzKGV2ZW50LCB0YXNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRGZXRjaFN1YiA9IGZ1bmN0aW9uIGdldEZldGNoU3ViKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgdGFzaykge1xuICAgICAgaWYgKHRhc2suc291cmNlID09PSBGRVRDSCkge1xuICAgICAgICBfdGhpczMucHJvY2Vzc0FQSUNhbGxzKGV2ZW50LCB0YXNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wcm9jZXNzQVBJQ2FsbHMgPSBmdW5jdGlvbiBwcm9jZXNzQVBJQ2FsbHMoZXZlbnQsIHRhc2spIHtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuX2NvbmZpZ1NlcnZpY2U7XG4gICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZTtcblxuICAgIGlmIChldmVudCA9PT0gU0NIRURVTEUgJiYgdGFzay5kYXRhKSB7XG4gICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgIHZhciByZXF1ZXN0VXJsID0gbmV3IFVybChkYXRhLnVybCk7XG4gICAgICB2YXIgc3Bhbk5hbWUgPSBkYXRhLm1ldGhvZCArICcgJyArIChyZXF1ZXN0VXJsLnJlbGF0aXZlID8gcmVxdWVzdFVybC5wYXRoIDogc3RyaXBRdWVyeVN0cmluZ0Zyb21VcmwocmVxdWVzdFVybC5ocmVmKSk7XG5cbiAgICAgIGlmICghdHJhbnNhY3Rpb25TZXJ2aWNlLmdldEN1cnJlbnRUcmFuc2FjdGlvbigpKSB7XG4gICAgICAgIHRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKHNwYW5OYW1lLCBIVFRQX1JFUVVFU1RfVFlQRSwge1xuICAgICAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGFuID0gdHJhbnNhY3Rpb25TZXJ2aWNlLnN0YXJ0U3BhbihzcGFuTmFtZSwgJ2V4dGVybmFsLmh0dHAnLCB7XG4gICAgICAgIGJsb2NraW5nOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzcGFuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzRHRFbmFibGVkID0gY29uZmlnU2VydmljZS5nZXQoJ2Rpc3RyaWJ1dGVkVHJhY2luZycpO1xuICAgICAgdmFyIGR0T3JpZ2lucyA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdkaXN0cmlidXRlZFRyYWNpbmdPcmlnaW5zJyk7XG4gICAgICB2YXIgY3VycmVudFVybCA9IG5ldyBVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgdmFyIGlzU2FtZU9yaWdpbiA9IGNoZWNrU2FtZU9yaWdpbihyZXF1ZXN0VXJsLm9yaWdpbiwgY3VycmVudFVybC5vcmlnaW4pIHx8IGNoZWNrU2FtZU9yaWdpbihyZXF1ZXN0VXJsLm9yaWdpbiwgZHRPcmlnaW5zKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcblxuICAgICAgaWYgKGlzRHRFbmFibGVkICYmIGlzU2FtZU9yaWdpbiAmJiB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5pbmplY3REdEhlYWRlcihzcGFuLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dpblNlcnZpY2UuZGVidWcoXCJDb3VsZCBub3QgaW5qZWN0IGRpc3RyaWJ1dGVkIHRyYWNpbmcgaGVhZGVyIHRvIHRoZSByZXF1ZXN0IG9yaWdpbiAoJ1wiICsgcmVxdWVzdFVybC5vcmlnaW4gKyBcIicpIGZyb20gdGhlIGN1cnJlbnQgb3JpZ2luICgnXCIgKyBjdXJyZW50VXJsLm9yaWdpbiArIFwiJylcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnN5bmMpIHtcbiAgICAgICAgc3Bhbi5zeW5jID0gZGF0YS5zeW5jO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnNwYW4gPSBzcGFuO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IElOVk9LRSkge1xuICAgICAgdmFyIF9kYXRhID0gdGFzay5kYXRhO1xuXG4gICAgICBpZiAoX2RhdGEgJiYgX2RhdGEuc3Bhbikge1xuICAgICAgICB2YXIgX3NwYW4gPSBfZGF0YS5zcGFuLFxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfZGF0YS5yZXNwb25zZSxcbiAgICAgICAgICAgIF90YXJnZXQgPSBfZGF0YS50YXJnZXQ7XG4gICAgICAgIHZhciBzdGF0dXM7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9IF90YXJnZXQuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG91dGNvbWU7XG5cbiAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyAhPSAnYWJvcnQnKSB7XG4gICAgICAgICAgaWYgKHN0YXR1cyA+PSA0MDAgfHwgc3RhdHVzID09IDApIHtcbiAgICAgICAgICAgIG91dGNvbWUgPSBPVVRDT01FX0ZBSUxVUkU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dGNvbWUgPSBPVVRDT01FX1NVQ0NFU1M7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3NwYW4ub3V0Y29tZSA9IG91dGNvbWU7XG4gICAgICAgIHZhciB0ciA9IHRyYW5zYWN0aW9uU2VydmljZS5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcblxuICAgICAgICBpZiAodHIgJiYgdHIudHlwZSA9PT0gSFRUUF9SRVFVRVNUX1RZUEUpIHtcbiAgICAgICAgICB0ci5vdXRjb21lID0gb3V0Y29tZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zYWN0aW9uU2VydmljZS5lbmRTcGFuKF9zcGFuLCBfZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbmplY3REdEhlYWRlciA9IGZ1bmN0aW9uIGluamVjdER0SGVhZGVyKHNwYW4sIHRhcmdldCkge1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5fY29uZmlnU2VydmljZTtcbiAgICB2YXIgaGVhZGVyTmFtZSA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdkaXN0cmlidXRlZFRyYWNpbmdIZWFkZXJOYW1lJyk7XG4gICAgdmFyIGhlYWRlclZhbHVlID0gZ2V0RHRIZWFkZXJWYWx1ZShzcGFuKTtcbiAgICB2YXIgaXNIZWFkZXJWYWxpZCA9IGlzRHRIZWFkZXJWYWxpZChoZWFkZXJWYWx1ZSk7XG5cbiAgICBpZiAoaGVhZGVyTmFtZSAmJiBoZWFkZXJWYWx1ZSAmJiBpc0hlYWRlclZhbGlkKSB7XG4gICAgICBpZiAodHlwZW9mIHRhcmdldC5zZXRSZXF1ZXN0SGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRhcmdldC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmhlYWRlcnMgJiYgdHlwZW9mIHRhcmdldC5oZWFkZXJzLmFwcGVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0YXJnZXQuaGVhZGVycy5hcHBlbmQoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2hlYWRlck5hbWVdID0gaGVhZGVyVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5leHRyYWN0RHRIZWFkZXIgPSBmdW5jdGlvbiBleHRyYWN0RHRIZWFkZXIodGFyZ2V0KSB7XG4gICAgdmFyIGNvbmZpZ1NlcnZpY2UgPSB0aGlzLl9jb25maWdTZXJ2aWNlO1xuICAgIHZhciBoZWFkZXJOYW1lID0gY29uZmlnU2VydmljZS5nZXQoJ2Rpc3RyaWJ1dGVkVHJhY2luZ0hlYWRlck5hbWUnKTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBwYXJzZUR0SGVhZGVyVmFsdWUodGFyZ2V0W2hlYWRlck5hbWVdKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZpbHRlclRyYW5zYWN0aW9uID0gZnVuY3Rpb24gZmlsdGVyVHJhbnNhY3Rpb24odHIpIHtcbiAgICB2YXIgZHVyYXRpb24gPSB0ci5kdXJhdGlvbigpO1xuXG4gICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpIHdhcyBkaXNjYXJkZWQhIFwiO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gXCJUcmFuc2FjdGlvbiBkdXJhdGlvbiBpcyAwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBcIlRyYW5zYWN0aW9uIHdhc24ndCBlbmRlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0ci5pc01hbmFnZWQoKSkge1xuICAgICAgaWYgKGR1cmF0aW9uID4gVFJBTlNBQ1RJT05fRFVSQVRJT05fVEhSRVNIT0xEKSB7XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgdGhpcy5fbG9nZ2luU2VydmljZS5kZWJ1ZyhcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpIHdhcyBkaXNjYXJkZWQhIFRyYW5zYWN0aW9uIGR1cmF0aW9uIChcIiArIGR1cmF0aW9uICsgXCIpIGlzIGdyZWF0ZXIgdGhhbiBtYW5hZ2VkIHRyYW5zYWN0aW9uIHRocmVzaG9sZCAoXCIgKyBUUkFOU0FDVElPTl9EVVJBVElPTl9USFJFU0hPTEQgKyBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ci5zYW1wbGVkICYmIHRyLnNwYW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgIHRoaXMuX2xvZ2dpblNlcnZpY2UuZGVidWcoXCJ0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiKSB3YXMgZGlzY2FyZGVkISBUcmFuc2FjdGlvbiBkb2VzIG5vdCBoYXZlIGFueSBzcGFuc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlVHJhbnNhY3Rpb25EYXRhTW9kZWwgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbkRhdGFNb2RlbCh0cmFuc2FjdGlvbikge1xuICAgIHZhciB0cmFuc2FjdGlvblN0YXJ0ID0gdHJhbnNhY3Rpb24uX3N0YXJ0O1xuICAgIHZhciBzcGFucyA9IHRyYW5zYWN0aW9uLnNwYW5zLm1hcChmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgdmFyIHNwYW5EYXRhID0ge1xuICAgICAgICBpZDogc3Bhbi5pZCxcbiAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICBwYXJlbnRfaWQ6IHNwYW4ucGFyZW50SWQgfHwgdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgIHRyYWNlX2lkOiB0cmFuc2FjdGlvbi50cmFjZUlkLFxuICAgICAgICBuYW1lOiBzcGFuLm5hbWUsXG4gICAgICAgIHR5cGU6IHNwYW4udHlwZSxcbiAgICAgICAgc3VidHlwZTogc3Bhbi5zdWJ0eXBlLFxuICAgICAgICBhY3Rpb246IHNwYW4uYWN0aW9uLFxuICAgICAgICBzeW5jOiBzcGFuLnN5bmMsXG4gICAgICAgIHN0YXJ0OiBwYXJzZUludChzcGFuLl9zdGFydCAtIHRyYW5zYWN0aW9uU3RhcnQpLFxuICAgICAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbigpLFxuICAgICAgICBjb250ZXh0OiBzcGFuLmNvbnRleHQsXG4gICAgICAgIG91dGNvbWU6IHNwYW4ub3V0Y29tZVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cnVuY2F0ZU1vZGVsKFNQQU5fTU9ERUwsIHNwYW5EYXRhKTtcbiAgICB9KTtcbiAgICB2YXIgdHJhbnNhY3Rpb25EYXRhID0ge1xuICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgdHJhY2VfaWQ6IHRyYW5zYWN0aW9uLnRyYWNlSWQsXG4gICAgICBuYW1lOiB0cmFuc2FjdGlvbi5uYW1lLFxuICAgICAgdHlwZTogdHJhbnNhY3Rpb24udHlwZSxcbiAgICAgIGR1cmF0aW9uOiB0cmFuc2FjdGlvbi5kdXJhdGlvbigpLFxuICAgICAgc3BhbnM6IHNwYW5zLFxuICAgICAgY29udGV4dDogdHJhbnNhY3Rpb24uY29udGV4dCxcbiAgICAgIG1hcmtzOiB0cmFuc2FjdGlvbi5tYXJrcyxcbiAgICAgIGJyZWFrZG93bjogdHJhbnNhY3Rpb24uYnJlYWtkb3duVGltaW5ncyxcbiAgICAgIHNwYW5fY291bnQ6IHtcbiAgICAgICAgc3RhcnRlZDogc3BhbnMubGVuZ3RoXG4gICAgICB9LFxuICAgICAgc2FtcGxlZDogdHJhbnNhY3Rpb24uc2FtcGxlZCxcbiAgICAgIGV4cGVyaWVuY2U6IHRyYW5zYWN0aW9uLmV4cGVyaWVuY2UsXG4gICAgICBvdXRjb21lOiB0cmFuc2FjdGlvbi5vdXRjb21lXG4gICAgfTtcbiAgICByZXR1cm4gdHJ1bmNhdGVNb2RlbChUUkFOU0FDVElPTl9NT0RFTCwgdHJhbnNhY3Rpb25EYXRhKTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlVHJhbnNhY3Rpb25QYXlsb2FkID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb25QYXlsb2FkKHRyYW5zYWN0aW9uKSB7XG4gICAgdmFyIGFkanVzdGVkVHJhbnNhY3Rpb24gPSBhZGp1c3RUcmFuc2FjdGlvblNwYW5zKHRyYW5zYWN0aW9uKTtcbiAgICB2YXIgZmlsdGVyZWQgPSB0aGlzLmZpbHRlclRyYW5zYWN0aW9uKGFkanVzdGVkVHJhbnNhY3Rpb24pO1xuXG4gICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVUcmFuc2FjdGlvbkRhdGFNb2RlbCh0cmFuc2FjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQZXJmb3JtYW5jZU1vbml0b3Jpbmc7XG59KCk7XG5cbmV4cG9ydCB7IFBlcmZvcm1hbmNlTW9uaXRvcmluZyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21JZCwgc2V0TGFiZWwsIG1lcmdlLCBnZXREdXJhdGlvbiwgZ2V0VGltZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBOQU1FX1VOS05PV04sIFRZUEVfQ1VTVE9NIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbnZhciBTcGFuQmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BhbkJhc2UobmFtZSwgdHlwZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIG5hbWUgPSBOQU1FX1VOS05PV047XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICB0eXBlID0gVFlQRV9DVVNUT007XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQgfHwgZ2VuZXJhdGVSYW5kb21JZCgxNik7XG4gICAgdGhpcy50cmFjZUlkID0gb3B0aW9ucy50cmFjZUlkO1xuICAgIHRoaXMuc2FtcGxlZCA9IG9wdGlvbnMuc2FtcGxlZDtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG9wdGlvbnMudGltZXN0YW1wO1xuICAgIHRoaXMuX3N0YXJ0ID0gZ2V0VGltZShvcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgdGhpcy5fZW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLm91dGNvbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkVuZCA9IG9wdGlvbnMub25FbmQ7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3BhbkJhc2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5lbnN1cmVDb250ZXh0ID0gZnVuY3Rpb24gZW5zdXJlQ29udGV4dCgpIHtcbiAgICBpZiAoIXRoaXMuY29udGV4dCkge1xuICAgICAgdGhpcy5jb250ZXh0ID0ge307XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRMYWJlbHMgPSBmdW5jdGlvbiBhZGRMYWJlbHModGFncykge1xuICAgIHRoaXMuZW5zdXJlQ29udGV4dCgpO1xuICAgIHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIWN0eC50YWdzKSB7XG4gICAgICBjdHgudGFncyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFncyk7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gc2V0TGFiZWwoaywgdGFnc1trXSwgY3R4LnRhZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5hZGRDb250ZXh0ID0gZnVuY3Rpb24gYWRkQ29udGV4dCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY29udGV4dCA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGNvbnRleHRbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdGhpcy5lbnN1cmVDb250ZXh0KCk7XG4gICAgbWVyZ2UuYXBwbHkodm9pZCAwLCBbdGhpcy5jb250ZXh0XS5jb25jYXQoY29udGV4dCkpO1xuICB9O1xuXG4gIF9wcm90by5lbmQgPSBmdW5jdGlvbiBlbmQoZW5kVGltZSkge1xuICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgdGhpcy5fZW5kID0gZ2V0VGltZShlbmRUaW1lKTtcbiAgICB0aGlzLmNhbGxPbkVuZCgpO1xuICB9O1xuXG4gIF9wcm90by5jYWxsT25FbmQgPSBmdW5jdGlvbiBjYWxsT25FbmQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uRW5kKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0RHVyYXRpb24odGhpcy5fc3RhcnQsIHRoaXMuX2VuZCk7XG4gIH07XG5cbiAgcmV0dXJuIFNwYW5CYXNlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTcGFuQmFzZTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFNwYW5CYXNlIGZyb20gJy4vc3Bhbi1iYXNlJztcbmltcG9ydCB7IGFkZFNwYW5Db250ZXh0IH0gZnJvbSAnLi4vY29tbW9uL2NvbnRleHQnO1xuXG52YXIgU3BhbiA9IGZ1bmN0aW9uIChfU3BhbkJhc2UpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3BhbiwgX1NwYW5CYXNlKTtcblxuICBmdW5jdGlvbiBTcGFuKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TcGFuQmFzZS5jYWxsKHRoaXMsIG5hbWUsIHR5cGUsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgX3RoaXMucGFyZW50SWQgPSBfdGhpcy5vcHRpb25zLnBhcmVudElkO1xuICAgIF90aGlzLnN1YnR5cGUgPSB1bmRlZmluZWQ7XG4gICAgX3RoaXMuYWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKF90aGlzLnR5cGUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgdmFyIGZpZWxkcyA9IF90aGlzLnR5cGUuc3BsaXQoJy4nLCAzKTtcblxuICAgICAgX3RoaXMudHlwZSA9IGZpZWxkc1swXTtcbiAgICAgIF90aGlzLnN1YnR5cGUgPSBmaWVsZHNbMV07XG4gICAgICBfdGhpcy5hY3Rpb24gPSBmaWVsZHNbMl07XG4gICAgfVxuXG4gICAgX3RoaXMuc3luYyA9IF90aGlzLm9wdGlvbnMuc3luYztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Bhbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVuZCA9IGZ1bmN0aW9uIGVuZChlbmRUaW1lLCBkYXRhKSB7XG4gICAgX1NwYW5CYXNlLnByb3RvdHlwZS5lbmQuY2FsbCh0aGlzLCBlbmRUaW1lKTtcblxuICAgIGFkZFNwYW5Db250ZXh0KHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBTcGFuO1xufShTcGFuQmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNwYW47IiwiaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJy4uL2NvbW1vbi9wb2x5ZmlsbHMnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgUGVyZkVudHJ5UmVjb3JkZXIsIGNhcHR1cmVPYnNlcnZlckVudHJpZXMsIG1ldHJpY3MsIGNyZWF0ZVRvdGFsQmxvY2tpbmdUaW1lU3BhbiB9IGZyb20gJy4vbWV0cmljcyc7XG5pbXBvcnQgeyBleHRlbmQsIGdldEVhcmxpZXN0U3BhbiwgZ2V0TGF0ZXN0Tm9uWEhSU3BhbiwgaXNQZXJmVHlwZVN1cHBvcnRlZCB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBjYXB0dXJlTmF2aWdhdGlvbiB9IGZyb20gJy4vY2FwdHVyZS1uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFBBR0VfTE9BRCwgTkFNRV9VTktOT1dOLCBUUkFOU0FDVElPTl9TVEFSVCwgVFJBTlNBQ1RJT05fRU5ELCBURU1QT1JBUllfVFlQRSwgVFJBTlNBQ1RJT05fVFlQRV9PUkRFUiwgTEFSR0VTVF9DT05URU5URlVMX1BBSU5ULCBMT05HX1RBU0ssIFBBSU5ULCBUUlVOQ0FURURfVFlQRSwgRklSU1RfSU5QVVQsIExBWU9VVF9TSElGVCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRkVHJhbnNhY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vY29tbW9uL2NvbnRleHQnO1xuaW1wb3J0IHsgX19ERVZfXywgc3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBzbHVnaWZ5VXJsIH0gZnJvbSAnLi4vY29tbW9uL3VybCc7XG5cbnZhciBUcmFuc2FjdGlvblNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYW5zYWN0aW9uU2VydmljZShsb2dnZXIsIGNvbmZpZykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xuICAgIHRoaXMuY3VycmVudFRyYW5zYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVzcEludGVydmFsSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWNvcmRlciA9IG5ldyBQZXJmRW50cnlSZWNvcmRlcihmdW5jdGlvbiAobGlzdCkge1xuICAgICAgdmFyIHRyID0gX3RoaXMuZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCk7XG5cbiAgICAgIGlmICh0ciAmJiB0ci5jYXB0dXJlVGltaW5ncykge1xuICAgICAgICB2YXIgX3RyJHNwYW5zO1xuXG4gICAgICAgIHZhciBjYXB0dXJlUGFpbnQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHIudHlwZSA9PT0gUEFHRV9MT0FEKSB7XG4gICAgICAgICAgY2FwdHVyZVBhaW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfY2FwdHVyZU9ic2VydmVyRW50cmkgPSBjYXB0dXJlT2JzZXJ2ZXJFbnRyaWVzKGxpc3QsIHtcbiAgICAgICAgICBjYXB0dXJlUGFpbnQ6IGNhcHR1cmVQYWludFxuICAgICAgICB9KSxcbiAgICAgICAgICAgIHNwYW5zID0gX2NhcHR1cmVPYnNlcnZlckVudHJpLnNwYW5zLFxuICAgICAgICAgICAgbWFya3MgPSBfY2FwdHVyZU9ic2VydmVyRW50cmkubWFya3M7XG5cbiAgICAgICAgKF90ciRzcGFucyA9IHRyLnNwYW5zKS5wdXNoLmFwcGx5KF90ciRzcGFucywgc3BhbnMpO1xuXG4gICAgICAgIHRyLmFkZE1hcmtzKHtcbiAgICAgICAgICBhZ2VudDogbWFya3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNhY3Rpb25TZXJ2aWNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlQ3VycmVudFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQ3VycmVudFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgdHIgPSBuZXcgVHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jdXJyZW50VHJhbnNhY3Rpb24gPSB0cjtcbiAgICByZXR1cm4gdHI7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUcmFuc2FjdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VHJhbnNhY3Rpb24gJiYgIXRoaXMuY3VycmVudFRyYW5zYWN0aW9uLmVuZGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VHJhbnNhY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jcmVhdGVPcHRpb25zID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgdmFyIHByZXNldE9wdGlvbnMgPSB7XG4gICAgICB0cmFuc2FjdGlvblNhbXBsZVJhdGU6IGNvbmZpZy50cmFuc2FjdGlvblNhbXBsZVJhdGVcbiAgICB9O1xuICAgIHZhciBwZXJmT3B0aW9ucyA9IGV4dGVuZChwcmVzZXRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIGlmIChwZXJmT3B0aW9ucy5tYW5hZ2VkKSB7XG4gICAgICBwZXJmT3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHBhZ2VMb2FkVHJhY2VJZDogY29uZmlnLnBhZ2VMb2FkVHJhY2VJZCxcbiAgICAgICAgcGFnZUxvYWRTYW1wbGVkOiBjb25maWcucGFnZUxvYWRTYW1wbGVkLFxuICAgICAgICBwYWdlTG9hZFNwYW5JZDogY29uZmlnLnBhZ2VMb2FkU3BhbklkLFxuICAgICAgICBwYWdlTG9hZFRyYW5zYWN0aW9uTmFtZTogY29uZmlnLnBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lXG4gICAgICB9LCBwZXJmT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlcmZPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zdGFydE1hbmFnZWRUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIHN0YXJ0TWFuYWdlZFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIHBlcmZPcHRpb25zKSB7XG4gICAgdmFyIHRyID0gdGhpcy5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcbiAgICB2YXIgaXNSZWRlZmluZWQgPSBmYWxzZTtcblxuICAgIGlmICghdHIpIHtcbiAgICAgIHRyID0gdGhpcy5jcmVhdGVDdXJyZW50VHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAodHIuY2FuUmV1c2UoKSAmJiBwZXJmT3B0aW9ucy5jYW5SZXVzZSkge1xuICAgICAgdmFyIHJlZGVmaW5lVHlwZSA9IHRyLnR5cGU7XG4gICAgICB2YXIgY3VycmVudFR5cGVPcmRlciA9IFRSQU5TQUNUSU9OX1RZUEVfT1JERVIuaW5kZXhPZih0ci50eXBlKTtcbiAgICAgIHZhciByZWRlZmluZVR5cGVPcmRlciA9IFRSQU5TQUNUSU9OX1RZUEVfT1JERVIuaW5kZXhPZih0eXBlKTtcblxuICAgICAgaWYgKGN1cnJlbnRUeXBlT3JkZXIgPj0gMCAmJiByZWRlZmluZVR5cGVPcmRlciA8IGN1cnJlbnRUeXBlT3JkZXIpIHtcbiAgICAgICAgcmVkZWZpbmVUeXBlID0gdHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFwicmVkZWZpbmluZyB0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiLCBcIiArIHRyLnR5cGUgKyBcIilcIiwgJ3RvJywgXCIoXCIgKyAobmFtZSB8fCB0ci5uYW1lKSArIFwiLCBcIiArIHJlZGVmaW5lVHlwZSArIFwiKVwiLCB0cik7XG4gICAgICB9XG5cbiAgICAgIHRyLnJlZGVmaW5lKG5hbWUsIHJlZGVmaW5lVHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgICAgaXNSZWRlZmluZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJlbmRpbmcgcHJldmlvdXMgdHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIilcIiwgdHIpO1xuICAgICAgfVxuXG4gICAgICB0ci5lbmQoKTtcbiAgICAgIHRyID0gdGhpcy5jcmVhdGVDdXJyZW50VHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0ci50eXBlID09PSBQQUdFX0xPQUQpIHtcbiAgICAgIGlmICghaXNSZWRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRlci5zdGFydChMQVJHRVNUX0NPTlRFTlRGVUxfUEFJTlQpO1xuICAgICAgICB0aGlzLnJlY29yZGVyLnN0YXJ0KFBBSU5UKTtcbiAgICAgICAgdGhpcy5yZWNvcmRlci5zdGFydChGSVJTVF9JTlBVVCk7XG4gICAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnQoTEFZT1VUX1NISUZUKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcmZPcHRpb25zLnBhZ2VMb2FkVHJhY2VJZCkge1xuICAgICAgICB0ci50cmFjZUlkID0gcGVyZk9wdGlvbnMucGFnZUxvYWRUcmFjZUlkO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyZk9wdGlvbnMucGFnZUxvYWRTYW1wbGVkKSB7XG4gICAgICAgIHRyLnNhbXBsZWQgPSBwZXJmT3B0aW9ucy5wYWdlTG9hZFNhbXBsZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ci5uYW1lID09PSBOQU1FX1VOS05PV04gJiYgcGVyZk9wdGlvbnMucGFnZUxvYWRUcmFuc2FjdGlvbk5hbWUpIHtcbiAgICAgICAgdHIubmFtZSA9IHBlcmZPcHRpb25zLnBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNSZWRlZmluZWQgJiYgdGhpcy5fY29uZmlnLmdldCgnbW9uaXRvckxvbmd0YXNrcycpKSB7XG4gICAgICB0aGlzLnJlY29yZGVyLnN0YXJ0KExPTkdfVEFTSyk7XG4gICAgfVxuXG4gICAgaWYgKHRyLnNhbXBsZWQpIHtcbiAgICAgIHRyLmNhcHR1cmVUaW1pbmdzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHI7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0VHJhbnNhY3Rpb24gPSBmdW5jdGlvbiBzdGFydFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBwZXJmT3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgdHI7XG4gICAgdmFyIGZpcmVPbnN0YXJ0SG9vayA9IHRydWU7XG5cbiAgICBpZiAocGVyZk9wdGlvbnMubWFuYWdlZCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRUcmFuc2FjdGlvbjtcbiAgICAgIHRyID0gdGhpcy5zdGFydE1hbmFnZWRUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBwZXJmT3B0aW9ucyk7XG5cbiAgICAgIGlmIChjdXJyZW50ID09PSB0cikge1xuICAgICAgICBmaXJlT25zdGFydEhvb2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHIgPSBuZXcgVHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgcGVyZk9wdGlvbnMpO1xuICAgIH1cblxuICAgIHRyLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVUcmFuc2FjdGlvbkVuZCh0cik7XG4gICAgfTtcblxuICAgIGlmIChmaXJlT25zdGFydEhvb2spIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcInN0YXJ0VHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIiwgXCIgKyB0ci50eXBlICsgXCIpXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb25maWcuZXZlbnRzLnNlbmQoVFJBTlNBQ1RJT05fU1RBUlQsIFt0cl0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cjtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVHJhbnNhY3Rpb25FbmQgPSBmdW5jdGlvbiBoYW5kbGVUcmFuc2FjdGlvbkVuZCh0cikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5yZWNvcmRlci5zdG9wKCk7XG4gICAgdmFyIGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHRyLm5hbWUsXG4gICAgICAgICAgdHlwZSA9IHRyLnR5cGU7XG4gICAgICB2YXIgbGFzdEhpZGRlblN0YXJ0ID0gc3RhdGUubGFzdEhpZGRlblN0YXJ0O1xuXG4gICAgICBpZiAobGFzdEhpZGRlblN0YXJ0ID49IHRyLl9zdGFydCkge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgIF90aGlzMy5fbG9nZ2VyLmRlYnVnKFwidHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIG5hbWUgKyBcIiwgXCIgKyB0eXBlICsgXCIpIHdhcyBkaXNjYXJkZWQhIFRoZSBwYWdlIHdhcyBoaWRkZW4gZHVyaW5nIHRoZSB0cmFuc2FjdGlvbiFcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpczMuc2hvdWxkSWdub3JlVHJhbnNhY3Rpb24obmFtZSkgfHwgdHlwZSA9PT0gVEVNUE9SQVJZX1RZUEUpIHtcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICBfdGhpczMuX2xvZ2dlci5kZWJ1ZyhcInRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyBuYW1lICsgXCIsIFwiICsgdHlwZSArIFwiKSBpcyBpZ25vcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gUEFHRV9MT0FEKSB7XG4gICAgICAgIHZhciBwYWdlTG9hZFRyYW5zYWN0aW9uTmFtZSA9IF90aGlzMy5fY29uZmlnLmdldCgncGFnZUxvYWRUcmFuc2FjdGlvbk5hbWUnKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gTkFNRV9VTktOT1dOICYmIHBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgdHIubmFtZSA9IHBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyLmNhcHR1cmVUaW1pbmdzKSB7XG4gICAgICAgICAgdmFyIGNscyA9IG1ldHJpY3MuY2xzLFxuICAgICAgICAgICAgICBmaWQgPSBtZXRyaWNzLmZpZCxcbiAgICAgICAgICAgICAgdGJ0ID0gbWV0cmljcy50YnQsXG4gICAgICAgICAgICAgIGxvbmd0YXNrID0gbWV0cmljcy5sb25ndGFzaztcblxuICAgICAgICAgIGlmICh0YnQuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0ci5zcGFucy5wdXNoKGNyZWF0ZVRvdGFsQmxvY2tpbmdUaW1lU3Bhbih0YnQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ci5leHBlcmllbmNlID0ge307XG5cbiAgICAgICAgICBpZiAoaXNQZXJmVHlwZVN1cHBvcnRlZChMT05HX1RBU0spKSB7XG4gICAgICAgICAgICB0ci5leHBlcmllbmNlLnRidCA9IHRidC5kdXJhdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNQZXJmVHlwZVN1cHBvcnRlZChMQVlPVVRfU0hJRlQpKSB7XG4gICAgICAgICAgICB0ci5leHBlcmllbmNlLmNscyA9IGNscztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmlkID4gMCkge1xuICAgICAgICAgICAgdHIuZXhwZXJpZW5jZS5maWQgPSBmaWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGxvbmd0YXNrLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgdHIuZXhwZXJpZW5jZS5sb25ndGFzayA9IHtcbiAgICAgICAgICAgICAgY291bnQ6IGxvbmd0YXNrLmNvdW50LFxuICAgICAgICAgICAgICBzdW06IGxvbmd0YXNrLmR1cmF0aW9uLFxuICAgICAgICAgICAgICBtYXg6IGxvbmd0YXNrLm1heFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyLm5hbWUgPT09IE5BTUVfVU5LTk9XTikge1xuICAgICAgICB0ci5uYW1lID0gc2x1Z2lmeVVybChjdXJyZW50VXJsKTtcbiAgICAgIH1cblxuICAgICAgY2FwdHVyZU5hdmlnYXRpb24odHIpO1xuXG4gICAgICBfdGhpczMuYWRqdXN0VHJhbnNhY3Rpb25UaW1lKHRyKTtcblxuICAgICAgdmFyIGJyZWFrZG93bk1ldHJpY3MgPSBfdGhpczMuX2NvbmZpZy5nZXQoJ2JyZWFrZG93bk1ldHJpY3MnKTtcblxuICAgICAgaWYgKGJyZWFrZG93bk1ldHJpY3MpIHtcbiAgICAgICAgdHIuY2FwdHVyZUJyZWFrZG93bigpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29uZmlnQ29udGV4dCA9IF90aGlzMy5fY29uZmlnLmdldCgnY29udGV4dCcpO1xuXG4gICAgICBhZGRUcmFuc2FjdGlvbkNvbnRleHQodHIsIGNvbmZpZ0NvbnRleHQpO1xuXG4gICAgICBfdGhpczMuX2NvbmZpZy5ldmVudHMuc2VuZChUUkFOU0FDVElPTl9FTkQsIFt0cl0pO1xuXG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBfdGhpczMuX2xvZ2dlci5kZWJ1ZyhcImVuZCB0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiLCBcIiArIHRyLnR5cGUgKyBcIilcIiwgdHIpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIF90aGlzMy5fbG9nZ2VyLmRlYnVnKFwiZXJyb3IgZW5kaW5nIHRyYW5zYWN0aW9uKFwiICsgdHIuaWQgKyBcIiwgXCIgKyB0ci5uYW1lICsgXCIpXCIsIGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkanVzdFRyYW5zYWN0aW9uVGltZSA9IGZ1bmN0aW9uIGFkanVzdFRyYW5zYWN0aW9uVGltZSh0cmFuc2FjdGlvbikge1xuICAgIHZhciBzcGFucyA9IHRyYW5zYWN0aW9uLnNwYW5zO1xuICAgIHZhciBlYXJsaWVzdFNwYW4gPSBnZXRFYXJsaWVzdFNwYW4oc3BhbnMpO1xuXG4gICAgaWYgKGVhcmxpZXN0U3BhbiAmJiBlYXJsaWVzdFNwYW4uX3N0YXJ0IDwgdHJhbnNhY3Rpb24uX3N0YXJ0KSB7XG4gICAgICB0cmFuc2FjdGlvbi5fc3RhcnQgPSBlYXJsaWVzdFNwYW4uX3N0YXJ0O1xuICAgIH1cblxuICAgIHZhciBsYXRlc3RTcGFuID0gZ2V0TGF0ZXN0Tm9uWEhSU3BhbihzcGFucyk7XG5cbiAgICBpZiAobGF0ZXN0U3BhbiAmJiBsYXRlc3RTcGFuLl9lbmQgPiB0cmFuc2FjdGlvbi5fZW5kKSB7XG4gICAgICB0cmFuc2FjdGlvbi5fZW5kID0gbGF0ZXN0U3Bhbi5fZW5kO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2FjdGlvbkVuZCA9IHRyYW5zYWN0aW9uLl9lbmQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3BhbiA9IHNwYW5zW2ldO1xuXG4gICAgICBpZiAoc3Bhbi5fZW5kID4gdHJhbnNhY3Rpb25FbmQpIHtcbiAgICAgICAgc3Bhbi5fZW5kID0gdHJhbnNhY3Rpb25FbmQ7XG4gICAgICAgIHNwYW4udHlwZSArPSBUUlVOQ0FURURfVFlQRTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwYW4uX3N0YXJ0ID4gdHJhbnNhY3Rpb25FbmQpIHtcbiAgICAgICAgc3Bhbi5fc3RhcnQgPSB0cmFuc2FjdGlvbkVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZElnbm9yZVRyYW5zYWN0aW9uID0gZnVuY3Rpb24gc2hvdWxkSWdub3JlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25OYW1lKSB7XG4gICAgdmFyIGlnbm9yZUxpc3QgPSB0aGlzLl9jb25maWcuZ2V0KCdpZ25vcmVUcmFuc2FjdGlvbnMnKTtcblxuICAgIGlmIChpZ25vcmVMaXN0ICYmIGlnbm9yZUxpc3QubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlnbm9yZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBpZ25vcmVMaXN0W2ldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC50ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQudGVzdCh0cmFuc2FjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gdHJhbnNhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIHN0YXJ0U3BhbihuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRyID0gdGhpcy5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcblxuICAgIGlmICghdHIpIHtcbiAgICAgIHRyID0gdGhpcy5jcmVhdGVDdXJyZW50VHJhbnNhY3Rpb24odW5kZWZpbmVkLCBURU1QT1JBUllfVFlQRSwgdGhpcy5jcmVhdGVPcHRpb25zKHtcbiAgICAgICAgY2FuUmV1c2U6IHRydWUsXG4gICAgICAgIG1hbmFnZWQ6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB2YXIgc3BhbiA9IHRyLnN0YXJ0U3BhbihuYW1lLCB0eXBlLCBvcHRpb25zKTtcblxuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXCJzdGFydFNwYW4oXCIgKyBuYW1lICsgXCIsIFwiICsgc3Bhbi50eXBlICsgXCIpXCIsIFwib24gdHJhbnNhY3Rpb24oXCIgKyB0ci5pZCArIFwiLCBcIiArIHRyLm5hbWUgKyBcIilcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG4gIH07XG5cbiAgX3Byb3RvLmVuZFNwYW4gPSBmdW5jdGlvbiBlbmRTcGFuKHNwYW4sIGNvbnRleHQpIHtcbiAgICBpZiAoIXNwYW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgdmFyIHRyID0gdGhpcy5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKTtcbiAgICAgIHRyICYmIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcImVuZFNwYW4oXCIgKyBzcGFuLm5hbWUgKyBcIiwgXCIgKyBzcGFuLnR5cGUgKyBcIilcIiwgXCJvbiB0cmFuc2FjdGlvbihcIiArIHRyLmlkICsgXCIsIFwiICsgdHIubmFtZSArIFwiKVwiKTtcbiAgICB9XG5cbiAgICBzcGFuLmVuZChudWxsLCBjb250ZXh0KTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNhY3Rpb25TZXJ2aWNlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvblNlcnZpY2U7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBTcGFuIGZyb20gJy4vc3Bhbic7XG5pbXBvcnQgU3BhbkJhc2UgZnJvbSAnLi9zcGFuLWJhc2UnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21JZCwgbWVyZ2UsIG5vdywgZ2V0VGltZSwgZXh0ZW5kLCByZW1vdmVJbnZhbGlkQ2hhcnMgfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgUkVVU0FCSUxJVFlfVEhSRVNIT0xELCBUUlVOQ0FURURfVFlQRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2FwdHVyZUJyZWFrZG93biBhcyBfY2FwdHVyZUJyZWFrZG93biB9IGZyb20gJy4vYnJlYWtkb3duJztcblxudmFyIFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKF9TcGFuQmFzZSkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2FjdGlvbiwgX1NwYW5CYXNlKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3BhbkJhc2UuY2FsbCh0aGlzLCBuYW1lLCB0eXBlLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnRyYWNlSWQgPSBnZW5lcmF0ZVJhbmRvbUlkKCk7XG4gICAgX3RoaXMubWFya3MgPSB1bmRlZmluZWQ7XG4gICAgX3RoaXMuc3BhbnMgPSBbXTtcbiAgICBfdGhpcy5fYWN0aXZlU3BhbnMgPSB7fTtcbiAgICBfdGhpcy5fYWN0aXZlVGFza3MgPSBuZXcgU2V0KCk7XG4gICAgX3RoaXMuYmxvY2tlZCA9IGZhbHNlO1xuICAgIF90aGlzLmNhcHR1cmVUaW1pbmdzID0gZmFsc2U7XG4gICAgX3RoaXMuYnJlYWtkb3duVGltaW5ncyA9IFtdO1xuICAgIF90aGlzLnNhbXBsZWQgPSBNYXRoLnJhbmRvbSgpIDw9IF90aGlzLm9wdGlvbnMudHJhbnNhY3Rpb25TYW1wbGVSYXRlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2FjdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZE1hcmtzID0gZnVuY3Rpb24gYWRkTWFya3Mob2JqKSB7XG4gICAgdGhpcy5tYXJrcyA9IG1lcmdlKHRoaXMubWFya3MgfHwge30sIG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLm1hcmsgPSBmdW5jdGlvbiBtYXJrKGtleSkge1xuICAgIHZhciBza2V5ID0gcmVtb3ZlSW52YWxpZENoYXJzKGtleSk7XG5cbiAgICB2YXIgbWFya1RpbWUgPSBub3coKSAtIHRoaXMuX3N0YXJ0O1xuXG4gICAgdmFyIGN1c3RvbSA9IHt9O1xuICAgIGN1c3RvbVtza2V5XSA9IG1hcmtUaW1lO1xuICAgIHRoaXMuYWRkTWFya3Moe1xuICAgICAgY3VzdG9tOiBjdXN0b21cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuUmV1c2UgPSBmdW5jdGlvbiBjYW5SZXVzZSgpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gdGhpcy5vcHRpb25zLnJldXNlVGhyZXNob2xkIHx8IFJFVVNBQklMSVRZX1RIUkVTSE9MRDtcbiAgICByZXR1cm4gISF0aGlzLm9wdGlvbnMuY2FuUmV1c2UgJiYgIXRoaXMuZW5kZWQgJiYgbm93KCkgLSB0aGlzLl9zdGFydCA8IHRocmVzaG9sZDtcbiAgfTtcblxuICBfcHJvdG8ucmVkZWZpbmUgPSBmdW5jdGlvbiByZWRlZmluZShuYW1lLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc3RhcnRTcGFuID0gZnVuY3Rpb24gc3RhcnRTcGFuKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdHMgPSBleHRlbmQoe30sIG9wdGlvbnMpO1xuXG4gICAgb3B0cy5vbkVuZCA9IGZ1bmN0aW9uICh0cmMpIHtcbiAgICAgIF90aGlzMi5fb25TcGFuRW5kKHRyYyk7XG4gICAgfTtcblxuICAgIG9wdHMudHJhY2VJZCA9IHRoaXMudHJhY2VJZDtcbiAgICBvcHRzLnNhbXBsZWQgPSB0aGlzLnNhbXBsZWQ7XG5cbiAgICBpZiAoIW9wdHMucGFyZW50SWQpIHtcbiAgICAgIG9wdHMucGFyZW50SWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHZhciBzcGFuID0gbmV3IFNwYW4obmFtZSwgdHlwZSwgb3B0cyk7XG4gICAgdGhpcy5fYWN0aXZlU3BhbnNbc3Bhbi5pZF0gPSBzcGFuO1xuXG4gICAgaWYgKG9wdHMuYmxvY2tpbmcpIHtcbiAgICAgIHRoaXMuYWRkVGFzayhzcGFuLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BhbjtcbiAgfTtcblxuICBfcHJvdG8uaXNGaW5pc2hlZCA9IGZ1bmN0aW9uIGlzRmluaXNoZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmJsb2NrZWQgJiYgdGhpcy5fYWN0aXZlVGFza3Muc2l6ZSA9PT0gMDtcbiAgfTtcblxuICBfcHJvdG8uZGV0ZWN0RmluaXNoID0gZnVuY3Rpb24gZGV0ZWN0RmluaXNoKCkge1xuICAgIGlmICh0aGlzLmlzRmluaXNoZWQoKSkgdGhpcy5lbmQoKTtcbiAgfTtcblxuICBfcHJvdG8uZW5kID0gZnVuY3Rpb24gZW5kKGVuZFRpbWUpIHtcbiAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgIHRoaXMuX2VuZCA9IGdldFRpbWUoZW5kVGltZSk7XG5cbiAgICBmb3IgKHZhciBzaWQgaW4gdGhpcy5fYWN0aXZlU3BhbnMpIHtcbiAgICAgIHZhciBzcGFuID0gdGhpcy5fYWN0aXZlU3BhbnNbc2lkXTtcbiAgICAgIHNwYW4udHlwZSA9IHNwYW4udHlwZSArIFRSVU5DQVRFRF9UWVBFO1xuICAgICAgc3Bhbi5lbmQoZW5kVGltZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxsT25FbmQoKTtcbiAgfTtcblxuICBfcHJvdG8uY2FwdHVyZUJyZWFrZG93biA9IGZ1bmN0aW9uIGNhcHR1cmVCcmVha2Rvd24oKSB7XG4gICAgdGhpcy5icmVha2Rvd25UaW1pbmdzID0gX2NhcHR1cmVCcmVha2Rvd24odGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmJsb2NrID0gZnVuY3Rpb24gYmxvY2soZmxhZykge1xuICAgIHRoaXMuYmxvY2tlZCA9IGZsYWc7XG5cbiAgICBpZiAoIXRoaXMuYmxvY2tlZCkge1xuICAgICAgdGhpcy5kZXRlY3RGaW5pc2goKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhc2sgPSBmdW5jdGlvbiBhZGRUYXNrKHRhc2tJZCkge1xuICAgIGlmICghdGFza0lkKSB7XG4gICAgICB0YXNrSWQgPSAndGFzay0nICsgZ2VuZXJhdGVSYW5kb21JZCgxNik7XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVGFza3MuYWRkKHRhc2tJZCk7XG5cbiAgICByZXR1cm4gdGFza0lkO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVUYXNrID0gZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSWQpIHtcbiAgICB2YXIgZGVsZXRlZCA9IHRoaXMuX2FjdGl2ZVRhc2tzLmRlbGV0ZSh0YXNrSWQpO1xuXG4gICAgZGVsZXRlZCAmJiB0aGlzLmRldGVjdEZpbmlzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZXNldFNwYW5zID0gZnVuY3Rpb24gcmVzZXRTcGFucygpIHtcbiAgICB0aGlzLnNwYW5zID0gW107XG4gIH07XG5cbiAgX3Byb3RvLl9vblNwYW5FbmQgPSBmdW5jdGlvbiBfb25TcGFuRW5kKHNwYW4pIHtcbiAgICB0aGlzLnNwYW5zLnB1c2goc3Bhbik7XG4gICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVNwYW5zW3NwYW4uaWRdO1xuICAgIHRoaXMucmVtb3ZlVGFzayhzcGFuLmlkKTtcbiAgfTtcblxuICBfcHJvdG8uaXNNYW5hZ2VkID0gZnVuY3Rpb24gaXNNYW5hZ2VkKCkge1xuICAgIHJldHVybiAhIXRoaXMub3B0aW9ucy5tYW5hZ2VkO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2FjdGlvbjtcbn0oU3BhbkJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbjsiLCJ2YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciBzdGF0ZSA9IHtcbiAgYm9vdHN0cmFwVGltZTogbnVsbCxcbiAgbGFzdEhpZGRlblN0YXJ0OiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxufTtcbmV4cG9ydCB7IF9fREVWX18sIHN0YXRlIH07IiwiLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFbGFzdGljc2VhcmNoIEJWXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0SW5zdHJ1bWVudGF0aW9uRmxhZ3MsXG4gIFBBR0VfTE9BRCxcbiAgRVJST1IsXG4gIENPTkZJR19TRVJWSUNFLFxuICBMT0dHSU5HX1NFUlZJQ0UsXG4gIEFQTV9TRVJWRVJcbn0gZnJvbSAnQGVsYXN0aWMvYXBtLXJ1bS1jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcG1CYXNlIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZUZhY3RvcnksIGRpc2FibGUpIHtcbiAgICB0aGlzLl9kaXNhYmxlID0gZGlzYWJsZVxuICAgIHRoaXMuc2VydmljZUZhY3RvcnkgPSBzZXJ2aWNlRmFjdG9yeVxuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2VcbiAgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2Rpc2FibGVcbiAgfVxuXG4gIGlzQWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbmZpZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoQ09ORklHX1NFUlZJQ0UpXG4gICAgcmV0dXJuIHRoaXMuaXNFbmFibGVkKCkgJiYgdGhpcy5faW5pdGlhbGl6ZWQgJiYgY29uZmlnU2VydmljZS5nZXQoJ2FjdGl2ZScpXG4gIH1cblxuICBpbml0KGNvbmZpZykge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICBjb25zdCBbY29uZmlnU2VydmljZSwgbG9nZ2luZ1NlcnZpY2VdID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFtcbiAgICAgICAgQ09ORklHX1NFUlZJQ0UsXG4gICAgICAgIExPR0dJTkdfU0VSVklDRVxuICAgICAgXSlcbiAgICAgIC8qKlxuICAgICAgICogU2V0IEFnZW50IHZlcnNpb24gdG8gYmUgc2VudCBhcyBwYXJ0IG9mIG1ldGFkYXRhIHRvIHRoZSBBUE0gU2VydmVyXG4gICAgICAgKi9cbiAgICAgIGNvbmZpZ1NlcnZpY2Uuc2V0VmVyc2lvbignNS42LjInKVxuICAgICAgdGhpcy5jb25maWcoY29uZmlnKVxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgbGV2ZWwgaGVyZSB0byBhY2NvdW50IGZvciBib3RoIGFjdGl2ZSBhbmQgaW5hY3RpdmUgY2FzZXNcbiAgICAgICAqL1xuICAgICAgY29uc3QgbG9nTGV2ZWwgPSBjb25maWdTZXJ2aWNlLmdldCgnbG9nTGV2ZWwnKVxuICAgICAgbG9nZ2luZ1NlcnZpY2Uuc2V0TGV2ZWwobG9nTGV2ZWwpXG4gICAgICAvKipcbiAgICAgICAqIERlYWN0aXZlIGFnZW50IHdoZW4gdGhlIGFjdGl2ZSBjb25maWcgZmxhZyBpcyBzZXQgdG8gZmFsc2VcbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNDb25maWdBY3RpdmUgPSBjb25maWdTZXJ2aWNlLmdldCgnYWN0aXZlJylcbiAgICAgIGlmIChpc0NvbmZpZ0FjdGl2ZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2VGYWN0b3J5LmluaXQoKVxuXG4gICAgICAgIGNvbnN0IGZsYWdzID0gZ2V0SW5zdHJ1bWVudGF0aW9uRmxhZ3MoXG4gICAgICAgICAgY29uZmlnU2VydmljZS5nZXQoJ2luc3RydW1lbnQnKSxcbiAgICAgICAgICBjb25maWdTZXJ2aWNlLmdldCgnZGlzYWJsZUluc3RydW1lbnRhdGlvbnMnKVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgcGVyZm9ybWFuY2VNb25pdG9yaW5nID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFxuICAgICAgICAgICdQZXJmb3JtYW5jZU1vbml0b3JpbmcnXG4gICAgICAgIClcbiAgICAgICAgcGVyZm9ybWFuY2VNb25pdG9yaW5nLmluaXQoZmxhZ3MpXG5cbiAgICAgICAgaWYgKGZsYWdzW0VSUk9SXSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yTG9nZ2luZyA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZSgnRXJyb3JMb2dnaW5nJylcbiAgICAgICAgICBlcnJvckxvZ2dpbmcucmVnaXN0ZXJMaXN0ZW5lcnMoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VuZFBhZ2VMb2FkID0gKCkgPT5cbiAgICAgICAgICBmbGFnc1tQQUdFX0xPQURdICYmIHRoaXMuX3NlbmRQYWdlTG9hZE1ldHJpY3MoKVxuXG4gICAgICAgIGlmIChjb25maWdTZXJ2aWNlLmdldCgnY2VudHJhbENvbmZpZycpKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV2FpdGluZyBmb3IgdGhlIHJlbW90ZSBjb25maWcgYmVmb3JlIHNlbmRpbmcgdGhlIHBhZ2UgbG9hZCB0cmFuc2FjdGlvblxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZmV0Y2hDZW50cmFsQ29uZmlnKCkudGhlbihzZW5kUGFnZUxvYWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFBhZ2VMb2FkKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZSA9IHRydWVcbiAgICAgICAgbG9nZ2luZ1NlcnZpY2Uud2FybignUlVNIGFnZW50IGlzIGluYWN0aXZlJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBgZmV0Y2hDZW50cmFsQ29uZmlnYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYWx3YXlzIHJlc29sdmVcbiAgICogaWYgdGhlIGludGVybmFsIGNvbmZpZyBmZXRjaCBmYWlscyB0aGUgdGhlIHByb21pc2UgcmVzb2x2ZXMgdG8gYHVuZGVmaW5lZGAgb3RoZXJ3aXNlXG4gICAqIGl0IHJlc29sdmVzIHRvIHRoZSBmZXRjaGVkIGNvbmZpZy5cbiAgICovXG4gIGZldGNoQ2VudHJhbENvbmZpZygpIHtcbiAgICBjb25zdCBbXG4gICAgICBhcG1TZXJ2ZXIsXG4gICAgICBsb2dnaW5nU2VydmljZSxcbiAgICAgIGNvbmZpZ1NlcnZpY2VcbiAgICBdID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFtcbiAgICAgIEFQTV9TRVJWRVIsXG4gICAgICBMT0dHSU5HX1NFUlZJQ0UsXG4gICAgICBDT05GSUdfU0VSVklDRVxuICAgIF0pXG5cbiAgICByZXR1cm4gYXBtU2VydmVyXG4gICAgICAuZmV0Y2hDb25maWcoXG4gICAgICAgIGNvbmZpZ1NlcnZpY2UuZ2V0KCdzZXJ2aWNlTmFtZScpLFxuICAgICAgICBjb25maWdTZXJ2aWNlLmdldCgnZW52aXJvbm1lbnQnKVxuICAgICAgKVxuICAgICAgLnRoZW4oY29uZmlnID0+IHtcbiAgICAgICAgdmFyIHRyYW5zYWN0aW9uU2FtcGxlUmF0ZSA9IGNvbmZpZ1sndHJhbnNhY3Rpb25fc2FtcGxlX3JhdGUnXVxuICAgICAgICBpZiAodHJhbnNhY3Rpb25TYW1wbGVSYXRlKSB7XG4gICAgICAgICAgdHJhbnNhY3Rpb25TYW1wbGVSYXRlID0gTnVtYmVyKHRyYW5zYWN0aW9uU2FtcGxlUmF0ZSlcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB7IHRyYW5zYWN0aW9uU2FtcGxlUmF0ZSB9XG4gICAgICAgICAgY29uc3QgeyBpbnZhbGlkIH0gPSBjb25maWdTZXJ2aWNlLnZhbGlkYXRlKGNvbmZpZylcbiAgICAgICAgICBpZiAoaW52YWxpZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2Uuc2V0Q29uZmlnKGNvbmZpZylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlLCBhbGxvd2VkIH0gPSBpbnZhbGlkWzBdXG4gICAgICAgICAgICBsb2dnaW5nU2VydmljZS53YXJuKFxuICAgICAgICAgICAgICBgaW52YWxpZCB2YWx1ZSBcIiR7dmFsdWV9XCIgZm9yICR7a2V5fS4gQWxsb3dlZDogJHthbGxvd2VkfS5gXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBsb2dnaW5nU2VydmljZS53YXJuKCdmYWlsZWQgZmV0Y2hpbmcgY29uZmlnOicsIGVycm9yKVxuICAgICAgfSlcbiAgfVxuXG4gIF9zZW5kUGFnZUxvYWRNZXRyaWNzKCkge1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIHRyYW5zYWN0aW9uIGlzIHNldCBpbiB0cmFuc2FjdGlvbiBzZXJ2aWNlIHRvXG4gICAgICogYXZvaWQgZHVwbGljYXRpbmcgdGhlIGxvZ2ljIGF0IG11bHRpcGxlIHBsYWNlc1xuICAgICAqL1xuICAgIGNvbnN0IHRyID0gdGhpcy5zdGFydFRyYW5zYWN0aW9uKHVuZGVmaW5lZCwgUEFHRV9MT0FELCB7XG4gICAgICBtYW5hZ2VkOiB0cnVlLFxuICAgICAgY2FuUmV1c2U6IHRydWVcbiAgICB9KVxuXG4gICAgaWYgKCF0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHIuYWRkVGFzayhQQUdFX0xPQUQpXG4gICAgY29uc3Qgc2VuZFBhZ2VMb2FkTWV0cmljcyA9ICgpID0+IHtcbiAgICAgIC8vIHRvIG1ha2Ugc3VyZSBQZXJmb3JtYW5jZVRpbWluZy5sb2FkRXZlbnRFbmQgaGFzIGEgdmFsdWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdHIucmVtb3ZlVGFzayhQQUdFX0xPQUQpKVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICBzZW5kUGFnZUxvYWRNZXRyaWNzKClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzZW5kUGFnZUxvYWRNZXRyaWNzKVxuICAgIH1cbiAgfVxuXG4gIG9ic2VydmUobmFtZSwgZm4pIHtcbiAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKENPTkZJR19TRVJWSUNFKVxuICAgIGNvbmZpZ1NlcnZpY2UuZXZlbnRzLm9ic2VydmUobmFtZSwgZm4pXG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgcmVxdWlyZWQgY29uZmlnIGtleXMgYXJlIGludmFsaWQsIHRoZSBhZ2VudCBpcyBkZWFjdGl2YXRlZCB3aXRoXG4gICAqIGxvZ2dpbmcgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICpcbiAgICogdmFsaWRhdGlvbiBlcnJvciBmb3JtYXRcbiAgICoge1xuICAgKiAgbWlzc2luZzogWyAna2V5MScsICdrZXkyJ11cbiAgICogIGludmFsaWQ6IFt7XG4gICAqICAgIGtleTogJ2EnLFxuICAgKiAgICB2YWx1ZTogJ2FiY2QnLFxuICAgKiAgICBhbGxvd2VkOiAnc3RyaW5nJ1xuICAgKiAgfV1cbiAgICogfVxuICAgKi9cbiAgY29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbmZpZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoQ09ORklHX1NFUlZJQ0UpXG4gICAgY29uc3QgeyBtaXNzaW5nLCBpbnZhbGlkIH0gPSBjb25maWdTZXJ2aWNlLnZhbGlkYXRlKGNvbmZpZylcbiAgICBpZiAobWlzc2luZy5sZW5ndGggPT09IDAgJiYgaW52YWxpZC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbmZpZ1NlcnZpY2Uuc2V0Q29uZmlnKGNvbmZpZylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9nZ2luZ1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VGYWN0b3J5LmdldFNlcnZpY2UoTE9HR0lOR19TRVJWSUNFKVxuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gJywgJ1xuICAgICAgbGV0IG1lc3NhZ2UgPSBcIlJVTSBhZ2VudCBpc24ndCBjb3JyZWN0bHkgY29uZmlndXJlZC4gXCJcblxuICAgICAgaWYgKG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBtZXNzYWdlICs9IG1pc3Npbmcuam9pbihzZXBhcmF0b3IpICsgJyBpcyBtaXNzaW5nJ1xuICAgICAgICBpZiAoaW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBzZXBhcmF0b3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnZhbGlkLmZvckVhY2goKHsga2V5LCB2YWx1ZSwgYWxsb3dlZCB9LCBpbmRleCkgPT4ge1xuICAgICAgICBtZXNzYWdlICs9XG4gICAgICAgICAgYCR7a2V5fSBcIiR7dmFsdWV9XCIgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzISAoYWxsb3dlZDogJHthbGxvd2VkfSlgICtcbiAgICAgICAgICAoaW5kZXggIT09IGludmFsaWQubGVuZ3RoIC0gMSA/IHNlcGFyYXRvciA6ICcnKVxuICAgICAgfSlcbiAgICAgIGxvZ2dpbmdTZXJ2aWNlLmVycm9yKG1lc3NhZ2UpXG4gICAgICBjb25maWdTZXJ2aWNlLnNldENvbmZpZyh7IGFjdGl2ZTogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBzZXRVc2VyQ29udGV4dCh1c2VyQ29udGV4dCkge1xuICAgIHZhciBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKENPTkZJR19TRVJWSUNFKVxuICAgIGNvbmZpZ1NlcnZpY2Uuc2V0VXNlckNvbnRleHQodXNlckNvbnRleHQpXG4gIH1cblxuICBzZXRDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpIHtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShDT05GSUdfU0VSVklDRSlcbiAgICBjb25maWdTZXJ2aWNlLnNldEN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dClcbiAgfVxuXG4gIGFkZExhYmVscyhsYWJlbHMpIHtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShDT05GSUdfU0VSVklDRSlcbiAgICBjb25maWdTZXJ2aWNlLmFkZExhYmVscyhsYWJlbHMpXG4gIH1cblxuICAvLyBTaG91bGQgY2FsbCB0aGlzIG1ldGhvZCBiZWZvcmUgJ2xvYWQnIGV2ZW50IG9uIHdpbmRvdyBpcyBmaXJlZFxuICBzZXRJbml0aWFsUGFnZUxvYWROYW1lKG5hbWUpIHtcbiAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKENPTkZJR19TRVJWSUNFKVxuICAgIGNvbmZpZ1NlcnZpY2Uuc2V0Q29uZmlnKHtcbiAgICAgIHBhZ2VMb2FkVHJhbnNhY3Rpb25OYW1lOiBuYW1lXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0VHJhbnNhY3Rpb24obmFtZSwgdHlwZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFxuICAgICAgICAnVHJhbnNhY3Rpb25TZXJ2aWNlJ1xuICAgICAgKVxuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uU2VydmljZS5zdGFydFRyYW5zYWN0aW9uKG5hbWUsIHR5cGUsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRTcGFuKG5hbWUsIHR5cGUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdmFyIHRyYW5zYWN0aW9uU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShcbiAgICAgICAgJ1RyYW5zYWN0aW9uU2VydmljZSdcbiAgICAgIClcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvblNlcnZpY2Uuc3RhcnRTcGFuKG5hbWUsIHR5cGUsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFRyYW5zYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgdHJhbnNhY3Rpb25TZXJ2aWNlID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKFxuICAgICAgICAnVHJhbnNhY3Rpb25TZXJ2aWNlJ1xuICAgICAgKVxuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uU2VydmljZS5nZXRDdXJyZW50VHJhbnNhY3Rpb24oKVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVFcnJvcihlcnJvcikge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgZXJyb3JMb2dnaW5nID0gdGhpcy5zZXJ2aWNlRmFjdG9yeS5nZXRTZXJ2aWNlKCdFcnJvckxvZ2dpbmcnKVxuICAgICAgcmV0dXJuIGVycm9yTG9nZ2luZy5sb2dFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICBhZGRGaWx0ZXIoZm4pIHtcbiAgICB2YXIgY29uZmlnU2VydmljZSA9IHRoaXMuc2VydmljZUZhY3RvcnkuZ2V0U2VydmljZShDT05GSUdfU0VSVklDRSlcbiAgICBjb25maWdTZXJ2aWNlLmFkZEZpbHRlcihmbilcbiAgfVxufVxuIiwiLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFbGFzdGljc2VhcmNoIEJWXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuaW1wb3J0IHtcbiAgY3JlYXRlU2VydmljZUZhY3RvcnksXG4gIGJvb3RzdHJhcCxcbiAgaXNCcm93c2VyXG59IGZyb20gJ0BlbGFzdGljL2FwbS1ydW0tY29yZSdcbmltcG9ydCBBcG1CYXNlIGZyb20gJy4vYXBtLWJhc2UnXG5cbi8qKlxuICogVXNlIGEgc2luZ2xlIGluc3RhbmNlIG9mIEFwbUJhc2UgYWNyb3NzIGFsbCBpbnN0YW5jZSBvZiB0aGUgYWdlbnRcbiAqIGluY2x1ZGluZyB0aGUgaW5zdGFuZXMgdXNlZCBpbiBmcmFtZXdvcmsgc3BlY2lmaWMgaW50ZWdyYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGdldEFwbUJhc2UoKSB7XG4gIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LmVsYXN0aWNBcG0pIHtcbiAgICByZXR1cm4gd2luZG93LmVsYXN0aWNBcG1cbiAgfVxuICBjb25zdCBlbmFibGVkID0gYm9vdHN0cmFwKClcbiAgY29uc3Qgc2VydmljZUZhY3RvcnkgPSBjcmVhdGVTZXJ2aWNlRmFjdG9yeSgpXG4gIGNvbnN0IGFwbUJhc2UgPSBuZXcgQXBtQmFzZShzZXJ2aWNlRmFjdG9yeSwgIWVuYWJsZWQpXG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHdpbmRvdy5lbGFzdGljQXBtID0gYXBtQmFzZVxuICB9XG5cbiAgcmV0dXJuIGFwbUJhc2Vcbn1cblxuY29uc3QgYXBtQmFzZSA9IGdldEFwbUJhc2UoKVxuXG5jb25zdCBpbml0ID0gYXBtQmFzZS5pbml0LmJpbmQoYXBtQmFzZSlcblxuZXhwb3J0IGRlZmF1bHQgaW5pdFxuZXhwb3J0IHsgaW5pdCwgYXBtQmFzZSwgQXBtQmFzZSwgYXBtQmFzZSBhcyBhcG0gfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsYUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsYUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVkE7QUFZQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFKQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBUEE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbFRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdk9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDektBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25XQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7OztBQ3VCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
