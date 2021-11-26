import SortedList from '../index.js';

describe('SortedList', () => {

  let sl;

  beforeEach(()=>{
    sl = new SortedList();
  })
  describe('Constructor', () => {
    test('should create an empty SortedList', () => {
      const sl = new SortedList();
      expect(sl instanceof SortedList).toBe(true);
    });
    test('should have a property items', () => {
      const sl = new SortedList();
      expect(sl.items).toBeDefined();
    });
    test('should have a property length', () => {
      const sl = new SortedList();
      expect(sl.length).toBeDefined();
    });

  });
  describe('#add(x)', () => {

    test('should add a single value to SortedList', () => {
      expect(sl.length).toEqual(0);
      sl.add(1);
      expect(sl.length).toEqual(1);
    });
    test('should add a second value to SortedList, sorted', () => {
        sl.add(20);
        sl.add(10);
        expect(sl.get(1)).toEqual(10);
        expect(sl.get(2)).toEqual(20);
      });
    test('should add a third value to SortedList, sorted', ()=> {
         sl.add(30);
         sl.add(20);
         sl.add(10);
         expect(sl.get(1)).toEqual(10);
         expect(sl.get(2)).toEqual(20);
         expect(sl.get(3)).toEqual(30);
       });
      });
  describe('#get(i)',  ()=> {

    test('should return an OutOfBounds error if there is no element in that position', () => {
       const error = new TypeError('OutOfBounds Error')
       expect(()=>sl.get(20)).toThrow(error);

     })


    test('should return the element in that position', () => {
         let item = 10;
         for(let i=1; i<200; i++) {
           sl.add(item*i);
           expect(sl.get(i)).toBe(item*i);
         }
       });
      });

    describe('#max()', ()=> {

      test('should return an EmptyList error if there is no element in the list', () => {
        const error = new TypeError('EmptyList Error');
        expect(()=>sl.max()).toThrow(error);

      });

    test('should return the max element in the list', () => {
         sl.add(10);
         sl.add(20);

         expect(sl.max()).toBe(20);
       });
     });

    describe('#min()', ()=> {

    test('should return an EmptyList exception if there is no element in the list', () => {
      const error = new TypeError('EmptyList Error');
      expect(()=>sl.min()).toThrow(error);

    });

    test('should return the min element in the list', ()=> {
         sl.add(10);
         sl.add(20);

         expect(sl.min()).toBe(10);
       });
     });

    describe('#average()', ()=> {

    test('should return an EmptySortedList exception if there are no elements', ()=> {

        const error = new TypeError('EmptyList Error');
        expect(()=>sl.average()).toThrow(error);

      });

    test('should return the average of elements in the array', ()=> {
         for(let i=0; i<101; i++){
           sl.add(i*2);
         }
         expect(sl.average()).toBe(100);
       })
     });

    describe('sum()', ()=>{

    test('should return a EmptySortedList exception if there are no elements in the list', ()=> {

      const error = new TypeError('EmptyList Error');
      expect(()=>sl.average()).toThrow(error);

    });


    test('should add(sum) all elements of the array if there are elements in the list', ()=> {
         sl.add(1);
         sl.add(2);
         sl.add(3);
         expect(sl.sum()).toBe(6);
       });
      });
});
