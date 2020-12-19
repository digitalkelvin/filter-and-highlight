/**
 * @fileoverview added by tsickle
 * Generated from: lib/filter.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FilterPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyLWFuZC1oaWdobGlnaHQvc3JjLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7O0lBU3JCLFNBQVMsQ0FBQyxPQUFZLEVBQUUsS0FBYSxFQUFFLFdBQW9CLEtBQUs7O1lBRTFELFFBQWdCO1FBRXBCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBSTtZQUNILElBQUcsUUFBUSxFQUFDO2dCQUNWLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNyRDtZQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7Ozs7OztJQVNPLFVBQVUsQ0FBQyxPQUFZLEVBQUUsS0FBVSxFQUFFLFFBQWtCOztZQUN6RCxJQUFJLEdBQUcsS0FBSztRQUVoQixJQUFHLENBQUMsUUFBUSxFQUFDO1lBQ1gsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1Qjs7Ozs7O1FBRUQsU0FBUyxTQUFTLENBQUMsR0FBUSxFQUFFLEdBQW9CO1lBQy9DLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQUssSUFBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDaEUsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBSTtnQkFDSCxLQUFLLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtvQkFDMUIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7d0JBQ3pELFNBQVM7cUJBQ1Y7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3JDLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQzs0QkFDOUIsa0JBQWtCOzRCQUNsQixLQUFJLE1BQU0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztnQ0FDaEMsSUFBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFDO29DQUN4QixPQUFPLElBQUksQ0FBQztpQ0FDYjs2QkFDRjt5QkFDRjt3QkFDRCxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7NEJBQ2pDLE9BQU8sSUFBSSxDQUFDO3lCQUNiO3FCQUNGO3lCQUFNLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDaEUsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRjtRQUVILENBQUM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNUVGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWx0ZXInLFxufSlcblxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9iamVjdHMgYXJyYXkgb2Ygb2JqZWN0cyB3aGljaCB3aWxsIGJlIGZpbHRlcmVkXG4gICAqIEBwYXJhbSBpbnB1dCB0ZXJtIHVzZWQgaW4gc2VhcmNoXG4gICAqIEBwYXJhbSBpc051bWJlciB3aGV0aGVyIG9iamVjdCBpcyBzdHJpY3RseSBhIG51bWJlciBhcnJheVxuICAgKi9cblxuICB0cmFuc2Zvcm0ob2JqZWN0czogYW55LCBpbnB1dDogc3RyaW5nLCBpc051bWJlcjogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcblxuICAgIGxldCBpbnB1dE51bTogbnVtYmVyO1xuXG4gICAgaWYgKCFpbnB1dCB8fCAhb2JqZWN0cykge1xuICAgICAgcmV0dXJuIG9iamVjdHM7XG4gICAgfWVsc2V7XG4gICAgICBpZihpc051bWJlcil7XG4gICAgICAgIGlucHV0TnVtID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tJdGVtcyhvYmplY3RzLCBpbnB1dE51bSwgaXNOdW1iZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrSXRlbXMob2JqZWN0cywgaW5wdXQpO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3RzIGxpc3Qgb2YgaXRlbXMgZnJvbSBhcnJheVxuICAgKiBAcGFyYW0gaW5wdXQgdGVybSB1c2VkIHRvIGZpbHRlciBpdGVtc1xuICAgKiBAcGFyYW0gaXNOdW1iZXIgd2hldGhlciBhcnJheSBjb25zaXN0cyBvZiBudW1iZXJzIG9ubHlcbiAgICovXG4gIFxuICBwcml2YXRlIGNoZWNrSXRlbXMob2JqZWN0czogYW55LCBpbnB1dDogYW55LCBpc051bWJlcj86IGJvb2xlYW4pIHtcbiAgICBsZXQgY29tcCA9IGlucHV0O1xuICAgIFxuICAgIGlmKCFpc051bWJlcil7XG4gICAgICBjb21wID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2hlY2tJdGVtKG9iajogYW55LCBpbnA6IHN0cmluZyB8IG51bWJlcil7XG4gICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgJiYgb2JqLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb21wKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1lbHNlIGlmKHR5cGVvZiBvYmogPT09ICdudW1iZXInICYmIG9iai50b1N0cmluZygpLmluY2x1ZGVzKGNvbXApKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BlcnR5XSA9PT0gbnVsbCB8fCBvYmpbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KG9ialtwcm9wZXJ0eV0pKXtcbiAgICAgICAgICAgICAgLy8gRnV0dXJlIGZlYXR1cmU/XG4gICAgICAgICAgICAgIGZvcihjb25zdCBzdWJPYmogaW4gb2JqW3Byb3BlcnR5XSl7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2tJdGVtKHN1Yk9iaiwgaW5wKSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja0l0ZW0ob2JqW3Byb3BlcnR5XSwgaW5wKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG9ialtwcm9wZXJ0eV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbXApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gb2JqZWN0cy5maWx0ZXIob2JqID0+IHtcbiAgICAgIHJldHVybiBjaGVja0l0ZW0ob2JqLCBpbnB1dCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==