var listOfKeys = [];
var listOfKeysCount = 0;

document.onkeydown = function Sound(e) {
    var element = e.key.toLowerCase();
    document.getElementById(element).click();
    // document.getElementById(element).classList.add('clicked');
    // setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 100);
    // if (document.getElementById('recordBtn').innerHTML == "Recording.....") {
    //     listOfKeys.push(element.toUpperCase());
    // }
}
function storing() {
    localStorage.setItem("Keys", JSON.stringify(listOfKeys));
    document.getElementById('recordBtn').innerHTML = "Record";
    alert("keys are recorded");
}
function recording() {
    listOfKeys.clear;
    localStorage.removeItem("Keys");
    document.getElementById('recordBtn').innerHTML = "Recording.....";
    alert("keys are being recorded");
}
function playNow(ctrl) {
    new Audio(`${ctrl.getAttribute("data-audio")}.wav`).play();
    var element=`${ctrl.getAttribute("id")}`;
    document.getElementById(element).classList.add('clicked');
    setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 100);
    if (document.getElementById('recordBtn').innerHTML == "Recording.....") {
        listOfKeys.push(element.toUpperCase());
    }
}
function play() {
    var len = listOfKeys.length;
    if(listOfKeysCount==0)
    {
        alert("playing..."+ localStorage.getItem('Keys'));
    }
    if (listOfKeysCount < len) {
        var element = listOfKeys[listOfKeysCount].toLowerCase();
        document.getElementById(element).click();
        document.getElementById(element).classList.add('clicked');
        setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 1000);
        listOfKeysCount = listOfKeysCount + 1;
        setTimeout(function () { play(); }, 1000);
    }

}

