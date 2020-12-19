(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('filter-and-highlight', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['filter-and-highlight'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["content"];
    var _c1 = ["highlightContent"];
    var _c2 = ["*"];
    var FilterAndHighlightComponent = /** @class */ (function () {
        function FilterAndHighlightComponent(renderer) {
            this.renderer = renderer;
        }
        FilterAndHighlightComponent.prototype.ngOnInit = function () {
            var e_1, _a;
            var _this = this;
            var self = this;
            var fahInputs = document.getElementsByClassName('fah-input');
            var minLen = 1;
            if (this.options != null && 1) {
                minLen = 1;
            }
            try {
                for (var fahInputs_1 = __values(fahInputs), fahInputs_1_1 = fahInputs_1.next(); !fahInputs_1_1.done; fahInputs_1_1 = fahInputs_1.next()) {
                    var input = fahInputs_1_1.value;
                    input.onkeyup = function (e) {
                        if (e.target.value.length > minLen) {
                            _this.markText(e);
                        }
                        else {
                            _this.renderNewHTML();
                        }
                    };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fahInputs_1_1 && !fahInputs_1_1.done && (_a = fahInputs_1.return)) _a.call(fahInputs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.initialContent = this.content;
        };
        FilterAndHighlightComponent.prototype.ngAfterViewInit = function () {
            this.renderNewHTML();
        };
        /**
         * This function replaces innerHTML with marked HTML.
         */
        FilterAndHighlightComponent.prototype.renderNewHTML = function () {
            this.renderer.setProperty(this.highlightContent.nativeElement, 'innerHTML', this.initialContent.nativeElement.innerHTML);
            this.adjustStyles();
        };
        /**
         * This function will replace innerHTML and apply spans to text that matches search input.
         *
         * @param e The keyboard input
         */
        FilterAndHighlightComponent.prototype.markText = function (e) {
            var searchInput = document.activeElement;
            this.searchTerm = searchInput.value;
            var term = this.searchTerm;
            this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML;
            term = term.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
            var re = '(?<!</?[^>]*|&[^;]*)(' + term + ')';
            try {
                this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML.replace(new RegExp(re, 'gi'), '<span class=\'fah-mark\'>$1</span>');
            }
            catch (e) { }
            this.adjustStyles();
        };
        /**
         * This function will apply the styles from the options object.
         */
        FilterAndHighlightComponent.prototype.adjustStyles = function () {
            var e_2, _a;
            var elems = document.getElementsByClassName('fah-mark');
            try {
                for (var elems_1 = __values(elems), elems_1_1 = elems_1.next(); !elems_1_1.done; elems_1_1 = elems_1.next()) {
                    var elem = elems_1_1.value;
                    elem.style.backgroundColor = this.options.backgroundColor;
                    elem.style.color = this.options.textColor;
                    elem.style.fontWeight = this.options.fontWeight;
                    elem.style.padding = this.options.padding;
                    elem.style.border = this.options.border;
                    elem.style.borderRadius = this.options.borderRadius;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (elems_1_1 && !elems_1_1.done && (_a = elems_1.return)) _a.call(elems_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        return FilterAndHighlightComponent;
    }());
    /** @nocollapse */ FilterAndHighlightComponent.ɵfac = function FilterAndHighlightComponent_Factory(t) { return new (t || FilterAndHighlightComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ FilterAndHighlightComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilterAndHighlightComponent, selectors: [["fah-filter-and-highlight"]], viewQuery: function FilterAndHighlightComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.highlightContent = _t.first);
            }
        }, inputs: { options: "options" }, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [[3, "hidden"], ["content", ""], [3, "innerHTML"], ["highlightContent", ""]], template: function FilterAndHighlightComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "div", 2, 3);
            }
            if (rf & 2) {
                i0.ɵɵproperty("hidden", true);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("innerHTML", ctx.highlightedContent, i0.ɵɵsanitizeHtml);
            }
        }, styles: ["\n      .fah-mark {\n        background-color: yellow;\n        font-weight: normal;\n      }\n    "], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterAndHighlightComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fah-filter-and-highlight',
                        template: "\n    <div #content [hidden]=\"true\">\n      <ng-content></ng-content>\n    </div>\n\n    <div [innerHTML]=\"highlightedContent\" #highlightContent></div>\n  ",
                        styles: [
                            "\n      .fah-mark {\n        background-color: yellow;\n        font-weight: normal;\n      }\n    ",
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: i0.Renderer2 }]; }, { content: [{
                    type: i0.ViewChild,
                    args: ['content', { static: true }]
                }], highlightContent: [{
                    type: i0.ViewChild,
                    args: ['highlightContent', { static: false }]
                }], options: [{
                    type: i0.Input,
                    args: ['options']
                }] });
    })();

    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        /**
         *
         * @param objects array of objects which will be filtered
         * @param input term used in search
         * @param isNumber whether object is strictly a number array
         */
        FilterPipe.prototype.transform = function (objects, input, isNumber) {
            if (isNumber === void 0) { isNumber = false; }
            var inputNum;
            if (!input || !objects) {
                return objects;
            }
            else {
                if (isNumber) {
                    inputNum = parseInt(input, 10);
                    return this.checkItems(objects, inputNum, isNumber);
                }
                input.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
                return this.checkItems(objects, input);
            }
        };
        /**
         *
         * @param objects list of items from array
         * @param input term used to filter items
         * @param isNumber whether array consists of numbers only
         */
        FilterPipe.prototype.checkItems = function (objects, input, isNumber) {
            var comp = input;
            if (!isNumber) {
                comp = input.toLowerCase();
            }
            function checkItem(obj, inp) {
                if (typeof obj === 'string' && obj.toString().toLowerCase().includes(comp)) {
                    return true;
                }
                else if (typeof obj === 'number' && obj.toString().includes(comp)) {
                    return true;
                }
                else {
                    for (var property in obj) {
                        if (obj[property] === null || obj[property] === undefined) {
                            continue;
                        }
                        if (typeof obj[property] === 'object') {
                            if (Array.isArray(obj[property])) {
                                // Future feature?
                                for (var subObj in obj[property]) {
                                    if (checkItem(subObj, inp)) {
                                        return true;
                                    }
                                }
                            }
                            if (checkItem(obj[property], inp)) {
                                return true;
                            }
                        }
                        else if (obj[property].toString().toLowerCase().includes(comp)) {
                            return true;
                        }
                    }
                }
            }
            return objects.filter(function (obj) {
                return checkItem(obj, input);
            });
        };
        return FilterPipe;
    }());
    /** @nocollapse */ FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    /** @nocollapse */ FilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'filter',
                    }]
            }], null, null);
    })();

    var FilterAndHighlightModule = /** @class */ (function () {
        function FilterAndHighlightModule() {
        }
        return FilterAndHighlightModule;
    }());
    /** @nocollapse */ FilterAndHighlightModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilterAndHighlightModule });
    /** @nocollapse */ FilterAndHighlightModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilterAndHighlightModule_Factory(t) { return new (t || FilterAndHighlightModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterAndHighlightModule, { declarations: [FilterAndHighlightComponent, FilterPipe], exports: [FilterAndHighlightComponent, FilterPipe] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilterAndHighlightModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [FilterAndHighlightComponent, FilterPipe],
                        imports: [],
                        exports: [FilterAndHighlightComponent, FilterPipe],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of filter-and-highlight
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilterAndHighlightComponent = FilterAndHighlightComponent;
    exports.FilterAndHighlightModule = FilterAndHighlightModule;
    exports.FilterPipe = FilterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=filter-and-highlight.umd.js.map
