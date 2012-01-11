var mocha = require('mocha')
  , should = require('should')

function Bowling(){
  this._score = 0;

  this.roll = function(pins){
    this._score += pins;    
  }

  this.score = function(){
    return this._score;
  }
}

describe('a game of bowling', function(){
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('with all gutter balls', function(){
    beforeEach(function(){
      for(var i = 0; i < 20; i++) {
        bowling.roll(0);
      }
    })

    it('should have a score of 0', function(){
      bowling.score().should.equal(0);
    })
  })

  describe('with all ones', function(){
    beforeEach(function(){
      for(var i = 0; i < 20; i++) {
        bowling.roll(1);
      }
    })

    it('should have a score of 20', function(){
      bowling.score().should.equal(20);
    })
  })
})