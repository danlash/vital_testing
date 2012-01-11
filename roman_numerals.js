var should = require('should')
  , _ = require('underscore')

function RomanNumeralCalculator(){
  this.calculate = function(number){
    if (typeof number === 'number')
      return arabicToRoman(number)
    else
      return romanToArabic(number)
  }

  function arabicToRoman(number){
    switch(number){
      case 1: return 'I';
      case 5: return 'V';
      case 10: return 'X';
      case 50: return 'L';
      case 100: return 'C';
      case 500: return 'D';
      case 1000: return 'M';
    }
  }

  function romanToArabic(number){
    var romans = {  'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1 };
    var total = 0
    _.each(romans, function(arabic, roman){
      while(number.indexOf(roman) === 0) {
        total += arabic;
        number = number.slice(roman.length)
      }
    })
    return total
  }
}

module.exports = RomanNumeralCalculator

var describe = describe || function(){}

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