import { Component, ViewEncapsulation, Renderer2, ViewChild, Input, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/filter-and-highlight.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterAndHighlightComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const fahInputs = document.getElementsByClassName('fah-input');
        /** @type {?} */
        let minLen = 1;
        if (this.options != null && 1) {
            minLen = 1;
        }
        for (const input of fahInputs) {
            ((/** @type {?} */ (input))).onkeyup = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                if (e.target.value.length > minLen) {
                    this.markText(e);
                }
                else {
                    this.renderNewHTML();
                }
            });
        }
        this.initialContent = this.content;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderNewHTML();
    }
    /**
     * This function replaces innerHTML with marked HTML.
     * @private
     * @return {?}
     */
    renderNewHTML() {
        this.renderer.setProperty(this.highlightContent.nativeElement, 'innerHTML', this.initialContent.nativeElement.innerHTML);
        this.adjustStyles();
    }
    /**
     * This function will replace innerHTML and apply spans to text that matches search input.
     *
     * @private
     * @param {?} e The keyboard input
     * @return {?}
     */
    markText(e) {
        /** @type {?} */
        const searchInput = document.activeElement;
        this.searchTerm = searchInput.value;
        /** @type {?} */
        let term = this.searchTerm;
        this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML;
        term = term.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        /** @type {?} */
        const re = '(?<!</?[^>]*|&[^;]*)(' + term + ')';
        try {
            this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML.replace(new RegExp(re, 'gi'), '<span class=\'fah-mark\'>$1</span>');
        }
        catch (e) { }
        this.adjustStyles();
    }
    /**
     * This function will apply the styles from the options object.
     * @private
     * @return {?}
     */
    adjustStyles() {
        /** @type {?} */
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
FilterAndHighlightComponent.decorators = [
    { type: Component, args: [{
                selector: 'fah-filter-and-highlight',
                template: `
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>

    <div [innerHTML]="highlightedContent" #highlightContent></div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      .fah-mark {
        background-color: yellow;
        font-weight: normal;
      }
    `]
            }] }
];
/** @nocollapse */
FilterAndHighlightComponent.ctorParameters = () => [
    { type: Renderer2 }
];
FilterAndHighlightComponent.propDecorators = {
    content: [{ type: ViewChild, args: ['content', { static: true },] }],
    highlightContent: [{ type: ViewChild, args: ['highlightContent', { static: false },] }],
    options: [{ type: Input, args: ['options',] }]
};
if (false) {
    /** @type {?} */
    FilterAndHighlightComponent.prototype.content;
    /** @type {?} */
    FilterAndHighlightComponent.prototype.highlightContent;
    /** @type {?} */
    FilterAndHighlightComponent.prototype.options;
    /** @type {?} */
    FilterAndHighlightComponent.prototype.initialContent;
    /** @type {?} */
    FilterAndHighlightComponent.prototype.highlightedContent;
    /** @type {?} */
    FilterAndHighlightComponent.prototype.searchTerm;
    /**
     * @type {?}
     * @private
     */
    FilterAndHighlightComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/filter.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterPipe {
    /**
     *
     * @param {?} objects array of objects which will be filtered
     * @param {?} input term used in search
     * @param {?=} isNumber whether object is strictly a number array
     * @return {?}
     */
    transform(objects, input, isNumber = false) {
        /** @type {?} */
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
     * @private
     * @param {?} objects list of items from array
     * @param {?} input term used to filter items
     * @param {?=} isNumber whether array consists of numbers only
     * @return {?}
     */
    checkItems(objects, input, isNumber) {
        /** @type {?} */
        let comp = input;
        if (!isNumber) {
            comp = input.toLowerCase();
        }
        /**
         * @param {?} obj
         * @param {?} inp
         * @return {?}
         */
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
        return objects.filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => {
            return checkItem(obj, input);
        }));
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filter',
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/filter-and-highlight.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterAndHighlightModule {
}
FilterAndHighlightModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FilterAndHighlightComponent, FilterPipe],
                imports: [],
                exports: [FilterAndHighlightComponent, FilterPipe],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: filter-and-highlight.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FilterAndHighlightComponent, FilterAndHighlightModule, FilterPipe };
//# sourceMappingURL=filter-and-highlight.js.map
