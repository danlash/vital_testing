var should = require('should')
  , _ = require('underscore')
  , RomanNumeralCalculator = require('./roman_numerals')

describe('number to roman conversion', function(){
  var calc;
  beforeEach(function(){
    calc = new RomanNumeralCalculator();
  })

  describe('single digit', function(){

    var romans = { 'I':1, 'V':5, 'X': 10, 'L':50, 'C':100, 'D':500, 'M':1000 };

    _.each(romans, function(arabic, roman){
        it(roman + ' should be ' + arabic, function(){
          calc.calculate(arabic).should.equal(roman)
        })

        it(arabic + ' should be ' + roman, function(){
          calc.calculate(roman).should.equal(arabic)
        })
    })
  })

  describe('roman addition', function(){
    it('II should be 2', function(){
      calc.calculate('II').should.equal(2);
    })

    it('VI should be 6', function(){
      calc.calculate('VI').should.equal(6);
    })
  })

  describe('roman subtraction', function(){
    it('IV should be 4', function(){
      calc.calculate('IV').should.equal(4)
    })
  })
})