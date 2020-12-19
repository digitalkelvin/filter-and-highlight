import { ɵɵdirectiveInject, Renderer2, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵelement, ɵɵproperty, ɵɵadvance, ɵɵsanitizeHtml, ɵsetClassMetadata, Component, ViewEncapsulation, ViewChild, Input, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

const _c0 = ["content"];
const _c1 = ["highlightContent"];
const _c2 = ["*"];
class FilterAndHighlightComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
        const self = this;
        const fahInputs = document.getElementsByClassName('fah-input');
        let minLen = 1;
        if (this.options != null && 1) {
            minLen = 1;
        }
        for (const input of fahInputs) {
            input.onkeyup = (e) => {
                if (e.target.value.length > minLen) {
                    this.markText(e);
                }
                else {
                    this.renderNewHTML();
                }
            };
        }
        this.initialContent = this.content;
    }
    ngAfterViewInit() {
        this.renderNewHTML();
    }
    /**
     * This function replaces innerHTML with marked HTML.
     */
    renderNewHTML() {
        this.renderer.setProperty(this.highlightContent.nativeElement, 'innerHTML', this.initialContent.nativeElement.innerHTML);
        this.adjustStyles();
    }
    /**
     * This function will replace innerHTML and apply spans to text that matches search input.
     *
     * @param e The keyboard input
     */
    markText(e) {
        const searchInput = document.activeElement;
        this.searchTerm = searchInput.value;
        let term = this.searchTerm;
        this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML;
        term = term.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        const re = '(?<!</?[^>]*|&[^;]*)(' + term + ')';
        try {
            this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML.replace(new RegExp(re, 'gi'), '<span class=\'fah-mark\'>$1</span>');
        }
        catch (e) { }
        this.adjustStyles();
    }
    /**
     * This function will apply the styles from the options object.
     */
    adjustStyles() {
        const elems = document.getElementsByClassName('fah-mark');
        for (const elem of elems) {
            elem.style.backgroundColor = this.options.backgroundColor;
            elem.style.color = this.options.textColor;
            elem.style.fontWeight = this.options.fontWeight;
            elem.style.padding = this.options.padding;
            elem.style.border = this.options.border;
            elem.style.borderRadius = this.options.borderRadius;
        }
    }
}
/** @nocollapse */ FilterAndHighlightComponent.ɵfac = function FilterAndHighlightComponent_Factory(t) { return new (t || FilterAndHighlightComponent)(ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ FilterAndHighlightComponent.ɵcmp = ɵɵdefineComponent({ type: FilterAndHighlightComponent, selectors: [["fah-filter-and-highlight"]], viewQuery: function FilterAndHighlightComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.highlightContent = _t.first);
    } }, inputs: { options: "options" }, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [[3, "hidden"], ["content", ""], [3, "innerHTML"], ["highlightContent", ""]], template: function FilterAndHighlightComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵelement(3, "div", 2, 3);
    } if (rf & 2) {
        ɵɵproperty("hidden", true);
        ɵɵadvance(3);
        ɵɵproperty("innerHTML", ctx.highlightedContent, ɵɵsanitizeHtml);
    } }, styles: ["\n      .fah-mark {\n        background-color: yellow;\n        font-weight: normal;\n      }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterAndHighlightComponent, [{
        type: Component,
        args: [{
                selector: 'fah-filter-and-highlight',
                template: `
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>

    <div [innerHTML]="highlightedContent" #highlightContent></div>
  `,
                styles: [
                    `
      .fah-mark {
        background-color: yellow;
        font-weight: normal;
      }
    `,
                ],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: Renderer2 }]; }, { content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }], highlightContent: [{
            type: ViewChild,
            args: ['highlightContent', { static: false }]
        }], options: [{
            type: Input,
            args: ['options']
        }] }); })();

class FilterPipe {
    /**
     *
     * @param objects array of objects which will be filtered
     * @param input term used in search
     * @param isNumber whether object is strictly a number array
     */
    transform(objects, input, isNumber = false) {
        let inputNum;
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
    }
    /**
     *
     * @param objects list of items from array
     * @param input term used to filter items
     * @param isNumber whether array consists of numbers only
     */
    checkItems(objects, input, isNumber) {
        let comp = input;
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
                for (const property in obj) {
                    if (obj[property] === null || obj[property] === undefined) {
                        continue;
                    }
                    if (typeof obj[property] === 'object') {
                        if (Array.isArray(obj[property])) {
                            // Future feature?
                            for (const subObj in obj[property]) {
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
        return objects.filter(obj => {
            return checkItem(obj, input);
        });
    }
}
/** @nocollapse */ FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
/** @nocollapse */ FilterPipe.ɵpipe = ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{
                name: 'filter',
            }]
    }], null, null); })();

class FilterAndHighlightModule {
}
/** @nocollapse */ FilterAndHighlightModule.ɵmod = ɵɵdefineNgModule({ type: FilterAndHighlightModule });
/** @nocollapse */ FilterAndHighlightModule.ɵinj = ɵɵdefineInjector({ factory: function FilterAndHighlightModule_Factory(t) { return new (t || FilterAndHighlightModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FilterAndHighlightModule, { declarations: [FilterAndHighlightComponent, FilterPipe], exports: [FilterAndHighlightComponent, FilterPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterAndHighlightModule, [{
        type: NgModule,
        args: [{
                declarations: [FilterAndHighlightComponent, FilterPipe],
                imports: [],
                exports: [FilterAndHighlightComponent, FilterPipe],
            }]
    }], null, null); })();

/*
 * Public API Surface of filter-and-highlight
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilterAndHighlightComponent, FilterAndHighlightModule, FilterPipe };
//# sourceMappingURL=filter-and-highlight.js.map
