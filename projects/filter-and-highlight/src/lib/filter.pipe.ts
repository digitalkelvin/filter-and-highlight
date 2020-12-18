import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {

  /**
   *
   * @param objects array of objects which will be filtered
   * @param input term used in search
   * @param isNumber whether object is strictly a number array
   */

  transform(objects: any, input: string, isNumber: boolean = false): any {

    let inputNum: number;

    if (!input || !objects) {
      return objects;
    }else{
      if(isNumber){
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
  
  private checkItems(objects: any, input: any, isNumber?: boolean) {
    let comp = input;
    
    if(!isNumber){
      comp = input.toLowerCase();
    }
    
    function checkItem(obj: any, inp: string | number){
      if (typeof obj === 'string' && obj.toString().toLowerCase().includes(comp)) {
        return true;
      }else if(typeof obj === 'number' && obj.toString().includes(comp)){
        return true;
      }else{
        for (const property in obj) {
          if (obj[property] === null || obj[property] === undefined) {
            continue;
          }
          if (typeof obj[property] === 'object') {
            if(Array.isArray(obj[property])){
              // Future feature?
              for(const subObj in obj[property]){
                if(checkItem(subObj, inp)){
                  return true;
                }
              }
            }
            if (checkItem(obj[property], inp)) {
              return true;
            }
          } else if (obj[property].toString().toLowerCase().includes(comp)) {
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
