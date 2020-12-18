import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  Input,
  ViewEncapsulation,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

@Component({
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
})
export class FilterAndHighlightComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  @ViewChild('highlightContent', { static: false })
  highlightContent: ElementRef;

  @Input('options') options;

  initialContent: ElementRef;

  highlightedContent: any;
  searchTerm: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const self = this;
    const fahInputs: any = document.getElementsByClassName('fah-input');

    let minLen = 1

    if (this.options != null && 1){
      minLen = 1;
    }

    for (const input of fahInputs) {
      (input as HTMLElement).onkeyup = (e: any) => {
        if (e.target.value.length > minLen) {
          this.markText(e);
        } else {
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
  private renderNewHTML(){
    this.renderer.setProperty(
      this.highlightContent.nativeElement,
      'innerHTML',
      this.initialContent.nativeElement.innerHTML
    );
    this.adjustStyles();
  }

  /**
   * This function will replace innerHTML and apply spans to text that matches search input.
   * 
   * @param e The keyboard input
   */

  private markText(e: any) {
    const searchInput: any = document.activeElement;
    this.searchTerm = searchInput.value;
    let term = this.searchTerm;

    this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML;

    term = term.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

    const re = '(?<!</?[^>]*|&[^;]*)(' + term + ')';

    try {
      this.highlightContent.nativeElement.innerHTML = this.initialContent.nativeElement.innerHTML.replace(
        new RegExp(re, 'gi'),
        '<span class=\'fah-mark\'>$1</span>'
      );
    } catch (e) {}
    this.adjustStyles();
  }

  /**
   * This function will apply the styles from the options object.
   */

  private adjustStyles() {
    const elems: any = document.getElementsByClassName('fah-mark');

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
