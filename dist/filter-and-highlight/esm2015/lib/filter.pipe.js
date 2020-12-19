import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterPipe {
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
/** @nocollapse */ FilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{
                name: 'filter',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyLWFuZC1oaWdobGlnaHQvc3JjLyIsInNvdXJjZXMiOlsibGliL2ZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sVUFBVTtJQUVyQjs7Ozs7T0FLRztJQUVILFNBQVMsQ0FBQyxPQUFZLEVBQUUsS0FBYSxFQUFFLFdBQW9CLEtBQUs7UUFFOUQsSUFBSSxRQUFnQixDQUFDO1FBRXJCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBSTtZQUNILElBQUcsUUFBUSxFQUFDO2dCQUNWLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNyRDtZQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUVLLFVBQVUsQ0FBQyxPQUFZLEVBQUUsS0FBVSxFQUFFLFFBQWtCO1FBQzdELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVqQixJQUFHLENBQUMsUUFBUSxFQUFDO1lBQ1gsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtRQUVELFNBQVMsU0FBUyxDQUFDLEdBQVEsRUFBRSxHQUFvQjtZQUMvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxRSxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFLLElBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ2hFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQUk7Z0JBQ0gsS0FBSyxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7b0JBQzFCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO3dCQUN6RCxTQUFTO3FCQUNWO29CQUNELElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUM7NEJBQzlCLGtCQUFrQjs0QkFDbEIsS0FBSSxNQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0NBQ2hDLElBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBQztvQ0FDeEIsT0FBTyxJQUFJLENBQUM7aUNBQ2I7NkJBQ0Y7eUJBQ0Y7d0JBQ0QsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUNqQyxPQUFPLElBQUksQ0FBQzt5QkFDYjtxQkFDRjt5QkFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2hFLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7UUFFSCxDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3VGQXhFVSxVQUFVOzhFQUFWLFVBQVU7a0RBQVYsVUFBVTtjQUp0QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3RzIGFycmF5IG9mIG9iamVjdHMgd2hpY2ggd2lsbCBiZSBmaWx0ZXJlZFxuICAgKiBAcGFyYW0gaW5wdXQgdGVybSB1c2VkIGluIHNlYXJjaFxuICAgKiBAcGFyYW0gaXNOdW1iZXIgd2hldGhlciBvYmplY3QgaXMgc3RyaWN0bHkgYSBudW1iZXIgYXJyYXlcbiAgICovXG5cbiAgdHJhbnNmb3JtKG9iamVjdHM6IGFueSwgaW5wdXQ6IHN0cmluZywgaXNOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG5cbiAgICBsZXQgaW5wdXROdW06IG51bWJlcjtcblxuICAgIGlmICghaW5wdXQgfHwgIW9iamVjdHMpIHtcbiAgICAgIHJldHVybiBvYmplY3RzO1xuICAgIH1lbHNle1xuICAgICAgaWYoaXNOdW1iZXIpe1xuICAgICAgICBpbnB1dE51bSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSXRlbXMob2JqZWN0cywgaW5wdXROdW0sIGlzTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0l0ZW1zKG9iamVjdHMsIGlucHV0KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0cyBsaXN0IG9mIGl0ZW1zIGZyb20gYXJyYXlcbiAgICogQHBhcmFtIGlucHV0IHRlcm0gdXNlZCB0byBmaWx0ZXIgaXRlbXNcbiAgICogQHBhcmFtIGlzTnVtYmVyIHdoZXRoZXIgYXJyYXkgY29uc2lzdHMgb2YgbnVtYmVycyBvbmx5XG4gICAqL1xuICBcbiAgcHJpdmF0ZSBjaGVja0l0ZW1zKG9iamVjdHM6IGFueSwgaW5wdXQ6IGFueSwgaXNOdW1iZXI/OiBib29sZWFuKSB7XG4gICAgbGV0IGNvbXAgPSBpbnB1dDtcbiAgICBcbiAgICBpZighaXNOdW1iZXIpe1xuICAgICAgY29tcCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNoZWNrSXRlbShvYmo6IGFueSwgaW5wOiBzdHJpbmcgfCBudW1iZXIpe1xuICAgICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnICYmIG9iai50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29tcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9ZWxzZSBpZih0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyAmJiBvYmoudG9TdHJpbmcoKS5pbmNsdWRlcyhjb21wKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2JqKSB7XG4gICAgICAgICAgaWYgKG9ialtwcm9wZXJ0eV0gPT09IG51bGwgfHwgb2JqW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShvYmpbcHJvcGVydHldKSl7XG4gICAgICAgICAgICAgIC8vIEZ1dHVyZSBmZWF0dXJlP1xuICAgICAgICAgICAgICBmb3IoY29uc3Qgc3ViT2JqIGluIG9ialtwcm9wZXJ0eV0pe1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrSXRlbShzdWJPYmosIGlucCkpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tJdGVtKG9ialtwcm9wZXJ0eV0sIGlucCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChvYmpbcHJvcGVydHldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb21wKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG9iamVjdHMuZmlsdGVyKG9iaiA9PiB7XG4gICAgICByZXR1cm4gY2hlY2tJdGVtKG9iaiwgaW5wdXQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=