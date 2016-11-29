'use strict';

let { topic:{ q0: {top: top0, ask: ask0, answer1: a10, answer2: a20, answer3: a30, true_answer: ta0}}} = q;
let { topic:{ q1: {top: top1, ask: ask1, answer1: a11, answer2: a21, answer3: a31, true_answer: ta1}}} = q;
let { topic:{ q2: {top: top2, ask: ask2, answer1: a12, answer2: a22, answer3: a32, true_answer: ta2}}} = q;
let { topic:{ q3: {top: top3, ask: ask3, answer1: a13, answer2: a23, answer3: a33, true_answer: ta3}}} = q;
var strAnswerRight = `"${ta0}${ta1}${ta2}${ta2}"`;
console.log('answer = ', strAnswerRight);
let str = `<div class="container-fluid wrapper">
              <h1>Тест по основам JavaScript.</h1>
                <form action="#" method="POST" name="list_questions">
                  <div class="question">
                    <h3>${top0}</h3>
                    <h3><code>${ask0}</code></h3>
                    <h3>
                      <ol>
                        <li><input value="10" type="checkbox"><code>${a10}</code></li>
                        <li><input value="20" type="checkbox"><code>${a20}</code></li>
                        <li><input value="30" type="checkbox"><code>${a30}</code></li>
                      </ol>
                    </h3>
                  </div>
                  <hr>
                  <div class="question">
                    <h3>${top1}</h3>
                    <h3><code>${ask1}</code></h3>
                    <h3>
                      <ol>
                        <li><input value="10" type="checkbox"><code>${a11}</code></li>
                        <li><input value="20" type="checkbox"><code>${a21}</code></li>
                        <li><input value="30" type="checkbox"><code>${a31}</code></li>
                      </ol>
                    </h3>
                  </div>
                  <hr>
                  <div class="question">
                    <h3>${top2}</h3>
                    <h3><code>${ask2}</code></h3>
                    <h3>
                      <ol>
                        <li><input value="10" type="checkbox"><code>${a12}</code></li>
                        <li><input value="20" type="checkbox"><code>${a22}</code></li>
                        <li><input value="30" type="checkbox"><code>${a32}</code></li>
                      </ol>
                    </h3>
                  </div>
                  <hr>
                  <div class="question">
                    <h3>${top3}</h3>
                    <h3><code>${ask3}</code></h3>
                    <h3>
                      <ol>
                        <li><input value="10" type="checkbox"><code>${a13}</code></li>
                        <li><input value="20" type="checkbox"><code>${a23}</code></li>
                        <li><input value="30" type="checkbox"><code>${a33}</code></li>
                      </ol>
                    </h3>
                  </div>
                  <hr>
              <button type="submit" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" id="go-to">Проверить мои результаты</button>
           </div>
           `;

var strRightAnswer = `${ta0}${ta1}${ta2}${ta3}`;
document.getElementById('modal_form').insertAdjacentHTML('beforeBegin' , str);
module.exports.a = strRightAnswer;
