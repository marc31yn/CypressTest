
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//Describe or context

describe('Unit testing for our dummy application', () => {
  context('Math with POSITIVE number', ()=>{
    //it - specigy
    it('should add positive number',()=>{
      expect(add(1,2)).to.eq(3);
    });

    it('should subtract positive number',()=>{
      expect(subtract(4,2)).to.eq(2);
    });

    it('should divide positive number',()=>{
      expect(divide(4,2)).to.eq(2);
    });

    it('should multiply positive number',()=>{
      expect(multiply(4,2)).to.eq(8);
    })

  });

  describe('Math with DECIMAL number', ()=>{

    it('should add DECIMAL number',()=>{
      expect(add(2.2,2.2)).to.eq(4.4);
    });

    it('should subtract DECIMAL number',()=>{
      expect(subtract(4.4,2.2)).to.eq(2.2);
    });

  });


})