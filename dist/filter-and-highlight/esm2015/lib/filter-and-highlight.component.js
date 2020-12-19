import { Component, ElementRef, ViewChild, Renderer2, Input, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["content"];
const _c1 = ["highlightContent"];
const _c2 = ["*"];
export class FilterAndHighlightComponent {
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
/** @nocollapse */ FilterAndHighlightComponent.ɵfac = function FilterAndHighlightComponent_Factory(t) { return new (t || FilterAndHighlightComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ FilterAndHighlightComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilterAndHighlightComponent, selectors: [["fah-filter-and-highlight"]], viewQuery: function FilterAndHighlightComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.highlightContent = _t.first);
    } }, inputs: { options: "options" }, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [[3, "hidden"], ["content", ""], [3, "innerHTML"], ["highlightContent", ""]], template: function FilterAndHighlightComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "div", 2, 3);
    } if (rf & 2) {
        i0.ɵɵproperty("hidden", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("innerHTML", ctx.highlightedContent, i0.ɵɵsanitizeHtml);
    } }, styles: ["\n      .fah-mark {\n        background-color: yellow;\n        font-weight: normal;\n      }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterAndHighlightComponent, [{
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
    }], function () { return [{ type: i0.Renderer2 }]; }, { content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }], highlightContent: [{
            type: ViewChild,
            args: ['highlightContent', { static: false }]
        }], options: [{
            type: Input,
            args: ['options']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFuZC1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci1hbmQtaGlnaGxpZ2h0L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWx0ZXItYW5kLWhpZ2hsaWdodC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEdBR2xCLE1BQU0sZUFBZSxDQUFDOzs7OztBQXFCdkIsTUFBTSxPQUFPLDJCQUEyQjtJQVl0QyxZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUUzQyxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sU0FBUyxHQUFRLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFFZCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsRUFBQztZQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUM1QixLQUFxQixDQUFDLE9BQU8sR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZTtR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QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWgtZmlsdGVyLWFuZC1oaWdobGlnaHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2NvbnRlbnQgW2hpZGRlbl09XCJ0cnVlXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IFtpbm5lckhUTUxdPVwiaGlnaGxpZ2h0ZWRDb250ZW50XCIgI2hpZ2hsaWdodENvbnRlbnQ+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5mYWgtbWFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBbmRIaWdobGlnaHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaGlnaGxpZ2h0Q29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBoaWdobGlnaHRDb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM7XG5cbiAgaW5pdGlhbENvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgaGlnaGxpZ2h0ZWRDb250ZW50OiBhbnk7XG4gIHNlYXJjaFRlcm06IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZmFoSW5wdXRzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWgtaW5wdXQnKTtcblxuICAgIGxldCBtaW5MZW4gPSAxXG5cbiAgICBpZiAodGhpcy5vcHRpb25zICE9IG51bGwgJiYgMSl7XG4gICAgICBtaW5MZW4gPSAxO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgZmFoSW5wdXRzKSB7XG4gICAgICAoaW5wdXQgYXMgSFRNTEVsZW1lbnQpLm9ua2V5dXAgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiBtaW5MZW4pIHtcbiAgICAgICAgICB0aGlzLm1hcmtUZXh0KGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyTmV3SFRNTCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyTmV3SFRNTCgpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJlcGxhY2VzIGlubmVySFRNTCB3aXRoIG1hcmtlZCBIVE1MLiBcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyTmV3SFRNTCgpe1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICB0aGlzLmhpZ2hsaWdodENvbnRlbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdpbm5lckhUTUwnLFxuICAgICAgdGhpcy5pbml0aWFsQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTFxuICAgICk7XG4gICAgdGhpcy5hZGp1c3RTdHlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVwbGFjZSBpbm5lckhUTUwgYW5kIGFwcGx5IHNwYW5zIHRvIHRleHQgdGhhdCBtYXRjaGVzIHNlYXJjaCBpbnB1dC5cbiAgICogXG4gICAqIEBwYXJhbSBlIFRoZSBrZXlib2FyZCBpbnB1dFxuICAgKi9cblxuICBwcml2YXRlIG1hcmtUZXh0KGU6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0OiBhbnkgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGxldCB0ZXJtID0gdGhpcy5zZWFyY2hUZXJtO1xuXG4gICAgdGhpcy5oaWdobGlnaHRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbml0aWFsQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcblxuICAgIHRlcm0gPSB0ZXJtLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG5cbiAgICBjb25zdCByZSA9ICcoPzwhPC8/W14+XSp8JlteO10qKSgnICsgdGVybSArICcpJztcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodENvbnRlbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmluaXRpYWxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoXG4gICAgICAgIG5ldyBSZWdFeHAocmUsICdnaScpLFxuICAgICAgICAnPHNwYW4gY2xhc3M9XFwnZmFoLW1hcmtcXCc+JDE8L3NwYW4+J1xuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRoaXMuYWRqdXN0U3R5bGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGFwcGx5IHRoZSBzdHlsZXMgZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QuXG4gICAqL1xuXG4gIHByaXZhdGUgYWRqdXN0U3R5bGVzKCkge1xuICAgIGNvbnN0IGVsZW1zOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWgtbWFyaycpO1xuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICBlbGVtLnN0eWxlLmNvbG9yID0gdGhpcy5vcHRpb25zLnRleHRDb2xvcjtcbiAgICAgIGVsZW0uc3R5bGUuZm9udFdlaWdodCA9IHRoaXMub3B0aW9ucy5mb250V2VpZ2h0O1xuICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlciA9IHRoaXMub3B0aW9ucy5ib3JkZXI7XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMub3B0aW9ucy5ib3JkZXJSYWRpdXM7XG4gICAgfVxuICB9XG59XG4iXX0=