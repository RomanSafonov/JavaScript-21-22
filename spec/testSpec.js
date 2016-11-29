
  var Foo = require('../src/js/test.js');
  describe(" add & mult ", function () {
          var elemA = Foo.add(2,3);
          var elemM = Foo.mult(2,3);


          it(' test of two foo', function(){
              expect(elemA).toBe(5);
              expect(elemM).toBe(6);
          });
  });
