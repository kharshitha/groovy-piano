var listOfKeys = [];
var i = 0;
document.onkeydown = function Sound(e) {
    var element = e.key.toLowerCase();
    document.getElementById(element).click();
    document.getElementById(element).classList.add('clicked');
    setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 100);
    if (document.getElementById('recordBtn').innerHTML == "Recording.....") {
        listOfKeys.push(element.toUpperCase());
    }
}
function storing() {
    localStorage.setItem("Keys", JSON.stringify(listOfKeys));
    document.getElementById('recordBtn').innerHTML = "Record";
    alert("keys are recorded");
}
function recording() {
    listOfKeys.clear;
    document.getElementById('recordBtn').innerHTML = "Recording.....";
    alert("keys are being recorded");
}

function playNow(ctrl) {
    new Audio(`${ctrl.getAttribute("data-audio")}.wav`).play();
}
function play() {
    var len = listOfKeys.length;
    if (i < len) {
        var element = listOfKeys[i].toLowerCase();
        //debugger;
        document.getElementById(element).click();
        document.getElementById(element).classList.add('clicked');
        setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 1000);
        i = i + 1;
        setTimeout(function () { play(); }, 1000);
    }

}

