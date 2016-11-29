'use strict';
// strAnswerRight


let strCheckedInput = "";
let element = document.getElementById('go-to');
let elem = document.getElementById('modal_form');
let overlayElem = document.getElementById('overlay');
var chBoxes = document.getElementsByTagName('input');
let closeBtn = document.getElementById('modal_close');


element.addEventListener("click", function () {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'block';
    setModalText();

});

function setModalText() {
    let  tmp = whatIsChecked();

    if (strCheckedInput == "000000000000") {
        elem.insertAdjacentHTML('afterBegin', `<h3 id="res"> Вы не ответили ни на один вопрос!</h3>`);
        elem.style.display = 'block';
        return strCheckedInput;
    }
    if (strCheckedInput == strRightAnswer) {
        tmp = " верный!"
    } else {
        tmp = " неверный! Попробуйте ответить еще."
    }
    let strToModal = `<h3 id="res">Ваш ответ
    ${tmp}
       <span>Правильный ответ: ${strRightAnswer};</span>
       </h3>
    `;

    insertToModal(strToModal);
}

function whatIsChecked() {
    for (var i = 0; i < chBoxes.length; i++) {
        if (chBoxes[i].checked == true) {
            strCheckedInput += "1";
        } else {
            strCheckedInput += "0";
        }
    }
}

function insertToModal (any) {
    elem.insertAdjacentHTML('afterBegin', any);
    elem.style.display = 'block';
}


closeBtn.addEventListener("click", function () {
    event.preventDefault();
    closeWindow();
});
overlayElem.addEventListener("click", function () {
    event.preventDefault();
    closeWindow();
});

let closeWindow = function () {
    overlayElem.style.display = 'none';
    elem.style.display = 'none';
    strCheckedInput = "";
    for (var i = 0; i < chBoxes.length; i++) {
        chBoxes[i].checked = false;
    }
    let resElem;
    ( resElem = document.getElementById('res')).parentNode.removeChild(resElem);
};
