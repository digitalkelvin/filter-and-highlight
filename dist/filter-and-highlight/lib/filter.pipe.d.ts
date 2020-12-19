import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FilterPipe implements PipeTransform {
    /**
     *
     * @param objects array of objects which will be filtered
     * @param input term used in search
     * @param isNumber whether object is strictly a number array
     */
    transform(objects: any, input: string, isNumber?: boolean): any;
    /**
     *
     * @param objects list of items from array
     * @param input term used to filter items
     * @param isNumber whether array consists of numbers only
     */
    private checkItems;
    static ɵfac: i0.ɵɵFactoryDef<FilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FilterPipe, "filter">;
}
