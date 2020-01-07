var listOfKeys = [];
var element;
document.onkeydown = function (e) {
    element = e.key.toLowerCase();
    document.getElementById(element).click();
    listOfKeys.push(element.toUpperCase());
    document.getElementById(element).classList.add('clicked');
    setTimeout(function () { document.getElementById(element).classList.remove('clicked'); }, 100);
}
function store() {
    var element=document.getElementById('recordbtn');
    localStorage.setItem("Keys", JSON.stringify(listOfKeys));
    document.getElementById('recordbtn').innerHTML="Recorded";
    textarea.innerHTML=localStorage.getItem("Keys");
}
function playNow(ctrl) {
    new Audio(`${ctrl.getAttribute("data-audio")}.wav`).play();
    storing(this);
}
function storageElements()
{
    //textarea.innerHTML=localStorage.getItem("Keys");
}