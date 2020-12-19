import { ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core';
export declare class FilterAndHighlightComponent implements OnInit, AfterViewInit {
    private renderer;
    content: ElementRef;
    highlightContent: ElementRef;
    options: any;
    initialContent: ElementRef;
    highlightedContent: any;
    searchTerm: string;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * This function replaces innerHTML with marked HTML.
     */
    private renderNewHTML;
    /**
     * This function will replace innerHTML and apply spans to text that matches search input.
     *
     * @param e The keyboard input
     */
    private markText;
    /**
     * This function will apply the styles from the options object.
     */
    private adjustStyles;
}
