var should = require('should')

function RomanNumeralCalculator(){
  this.calculate = function(number){
    switch(number){
      case 1:
        return 'I';
      case 5:
        return 'V';
      case 10:
        return 'X';
      case 50:
        return 'L';
      case 100:
        return 'C';
      case 500:
        return 'D';
      case 1000:
        return 'M';
    }
  }
}

describe('number to roman conversion', function(){
  var roman;
  beforeEach(function(){
    roman = new RomanNumeralCalculator();
  })

  describe('single digit', function(){
    it('1 should I', function(){
      roman.calculate(1).should.equal('I');
    })

    it('5 should be V', function(){
      roman.calculate(5).should.equal('V');
    })

    it('10 should be X', function(){
      roman.calculate(10).should.equal('X');
    })

    it('50 should be L', function(){
      roman.calculate(50).should.equal('L');
    })

    it('100 should be C', function(){
      roman.calculate(100).should.equal('C');
    })

    it('500 should be D', function(){
      roman.calculate(500).should.equal('D');
    })

    it('1000 should be M', function(){
      roman.calculate(1000).should.equal('M');
    })
  })
})