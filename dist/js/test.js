var whatIsChecked = function () {
    for (var i = 0; i < chBoxes.length; i++) {
        if (chBoxes[i].checked == true) {
            strCheckedInput += "1";
        } else {
            strCheckedInput += "0";
        }
    }
};