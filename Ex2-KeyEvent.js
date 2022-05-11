function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
function moveSelection(evt) {
    switch (evt.code) {
        case 37:
        case 'KeyA':
            leftArrowPressed();
            break;
        case 39:
        case 'KeyD':
            rightArrowPressed();
            break;
        case 38:
        case 'KeyW':
            upArrowPressed();
            break;
        case 40:
        case 'KeyS':
            downArrowPressed();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSelection);
}