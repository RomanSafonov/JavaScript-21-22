/*
//подключаемся к файлу ../data/data.js и берем оттуда все, что помечено
 module.exports
*/
var Data = require('../data/data.js');

describe(" exist true answers", function () {

        it('Data file with questions exist', function(){
            expect(Data.q).not.toBeNull();
        });

        it('Exist true answer number', function(){
          expect(Data.q['topic']['q0']["true_answer"].length).toBe(3);
        });
});
