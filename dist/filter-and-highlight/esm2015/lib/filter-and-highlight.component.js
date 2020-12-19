/**
 * @fileoverview added by tsickle
 * Generated from: lib/filter-and-highlight.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Renderer2, Input, ViewEncapsulation, } from '@angular/core';
export class FilterAndHighlightComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFuZC1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci1hbmQtaGlnaGxpZ2h0L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWx0ZXItYW5kLWhpZ2hsaWdodC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsR0FHbEIsTUFBTSxlQUFlLENBQUM7QUFxQnZCLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFZdEMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7Ozs7SUFFM0MsUUFBUTs7Y0FDQSxJQUFJLEdBQUcsSUFBSTs7Y0FDWCxTQUFTLEdBQVEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQzs7WUFFL0QsTUFBTSxHQUFHLENBQUM7UUFFZCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsRUFBQztZQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUM3QixDQUFDLG1CQUFBLEtBQUssRUFBZSxDQUFDLENBQUMsT0FBTzs7OztZQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN0QjtZQUNILENBQUMsQ0FBQSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBTU8sYUFBYTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFDbkMsV0FBVyxFQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDNUMsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7OztJQVFPLFFBQVEsQ0FBQyxDQUFNOztjQUNmLFdBQVcsR0FBUSxRQUFRLENBQUMsYUFBYTtRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVTtRQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFNUYsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7O2NBRWhELEVBQUUsR0FBRyx1QkFBdUIsR0FBRyxJQUFJLEdBQUcsR0FBRztRQUUvQyxJQUFJO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDakcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUNwQixvQ0FBb0MsQ0FDckMsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFNTyxZQUFZOztjQUNaLEtBQUssR0FBUSxRQUFRLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDO1FBRTlELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7O1lBakhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQVNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO3lCQVBuQzs7Ozs7S0FLQzthQUdKOzs7O1lBekJDLFNBQVM7OztzQkEyQlIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7K0JBQ3JDLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7c0JBRy9DLEtBQUssU0FBQyxTQUFTOzs7O0lBSmhCLDhDQUE0RDs7SUFDNUQsdURBQzZCOztJQUU3Qiw4Q0FBMEI7O0lBRTFCLHFEQUEyQjs7SUFFM0IseURBQXdCOztJQUN4QixpREFBbUI7Ozs7O0lBRVAsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWgtZmlsdGVyLWFuZC1oaWdobGlnaHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2NvbnRlbnQgW2hpZGRlbl09XCJ0cnVlXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IFtpbm5lckhUTUxdPVwiaGlnaGxpZ2h0ZWRDb250ZW50XCIgI2hpZ2hsaWdodENvbnRlbnQ+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5mYWgtbWFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBbmRIaWdobGlnaHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaGlnaGxpZ2h0Q29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBoaWdobGlnaHRDb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM7XG5cbiAgaW5pdGlhbENvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgaGlnaGxpZ2h0ZWRDb250ZW50OiBhbnk7XG4gIHNlYXJjaFRlcm06IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZmFoSW5wdXRzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWgtaW5wdXQnKTtcblxuICAgIGxldCBtaW5MZW4gPSAxXG5cbiAgICBpZiAodGhpcy5vcHRpb25zICE9IG51bGwgJiYgMSl7XG4gICAgICBtaW5MZW4gPSAxO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgZmFoSW5wdXRzKSB7XG4gICAgICAoaW5wdXQgYXMgSFRNTEVsZW1lbnQpLm9ua2V5dXAgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiBtaW5MZW4pIHtcbiAgICAgICAgICB0aGlzLm1hcmtUZXh0KGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyTmV3SFRNTCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyTmV3SFRNTCgpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlcGxhY2VzIGlubmVySFRNTCB3aXRoIG1hcmtlZCBIVE1MLiBcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyTmV3SFRNTCgpe1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICB0aGlzLmhpZ2hsaWdodENvbnRlbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdpbm5lckhUTUwnLFxuICAgICAgdGhpcy5pbml0aWFsQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTFxuICAgICk7XG4gICAgdGhpcy5hZGp1c3RTdHlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVwbGFjZSBpbm5lckhUTUwgYW5kIGFwcGx5IHNwYW5zIHRvIHRleHQgdGhhdCBtYXRjaGVzIHNlYXJjaCBpbnB1dC5cbiAgICogXG4gICAqIEBwYXJhbSBlIFRoZSBrZXlib2FyZCBpbnB1dFxuICAgKi9cblxuICBwcml2YXRlIG1hcmtUZXh0KGU6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0OiBhbnkgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGxldCB0ZXJtID0gdGhpcy5zZWFyY2hUZXJtO1xuXG4gICAgdGhpcy5oaWdobGlnaHRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbml0aWFsQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcblxuICAgIHRlcm0gPSB0ZXJtLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG5cbiAgICBjb25zdCByZSA9ICcoPzwhPC8/W14+XSp8JlteO10qKSgnICsgdGVybSArICcpJztcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodENvbnRlbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmluaXRpYWxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoXG4gICAgICAgIG5ldyBSZWdFeHAocmUsICdnaScpLFxuICAgICAgICAnPHNwYW4gY2xhc3M9XFwnZmFoLW1hcmtcXCc+JDE8L3NwYW4+J1xuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRoaXMuYWRqdXN0U3R5bGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGFwcGx5IHRoZSBzdHlsZXMgZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QuXG4gICAqL1xuXG4gIHByaXZhdGUgYWRqdXN0U3R5bGVzKCkge1xuICAgIGNvbnN0IGVsZW1zOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWgtbWFyaycpO1xuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICBlbGVtLnN0eWxlLmNvbG9yID0gdGhpcy5vcHRpb25zLnRleHRDb2xvcjtcbiAgICAgIGVsZW0uc3R5bGUuZm9udFdlaWdodCA9IHRoaXMub3B0aW9ucy5mb250V2VpZ2h0O1xuICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlciA9IHRoaXMub3B0aW9ucy5ib3JkZXI7XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMub3B0aW9ucy5ib3JkZXJSYWRpdXM7XG4gICAgfVxuICB9XG59XG4iXX0=