import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
      pipe = new FilterPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return original array if input string not a string', () => {
    const array = [{name: 'Filter And Highlight'}, {abbr: 'fah'}]
    expect(pipe.transform(array, null)).toBe(array);
    expect(pipe.transform(array, undefined)).toBe(array);
  });

  it('return new array if input is in the search term', () => {
    const array = [{name: 'Filter And Highlight'}, {abbr: 'fah'}];
    expect(pipe.transform(array, 'fah')).toEqual([{abbr: 'fah'}]);
  });

  it('return original array if input is empty string', () => {
    const array = [{name: 'Filter And Highlight'}, {abbr: 'fah'}];
    expect(pipe.transform(array, '')).toEqual(array);
  });

  it('return new array if input is in nested array', () => {
    const array = [{name: 'Filter And Highlight', ver: [{prev: '1.0.0'},{current: '1.0.1'}]}, {abbr: 'fah'}];
    expect(pipe.transform(array, '1.0.0')).toEqual([{name: 'Filter And Highlight', ver: [{prev: '1.0.0'},{current: '1.0.1'}]}]);
  });

  it('filter a string array', () => {
    const array = ['filter', 'and', 'highlight'];
    expect(pipe.transform(array, 'and')).toEqual(['and']);
  });

  it('filter number array', () =>{
    const array = [1, 2, 3];
    expect(pipe.transform(array, '2', true)).toEqual([2]);
  })

  it('filter using numbers', () => {
    const array = [{age: 21}, {addr: '1234 Fake Street'}];
    expect(pipe.transform(array, '21')).toEqual([{age: 21}]);
  });

});
