var should = require('should')
  , _ = require('underscore')

function RomanNumeralCalculator(){
  this.calculate = function(number){
    if (typeof number === 'number')
      return arabicToRoman(number)
    else
      return romanToArabic(number)

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
      switch(number){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
      } 
    }
  }
}

describe('number to roman conversion', function(){
  var calc;
  beforeEach(function(){
    calc = new RomanNumeralCalculator();
  })

  describe('single digit', function(){

    romans = { 'I':1, 'V':5, 'X': 10, 'L':50, 'C':100, 'D':500, 'M':1000 };

    _.each(romans, function(arabic, roman){
        it(roman + ' should be ' + arabic, function(){
          calc.calculate(arabic).should.equal(roman)
        })

        it(arabic + ' should be ' + roman, function(){
          calc.calculate(roman).should.equal(arabic)
        })
    })

  })
})