let newWindow ;
console.log(window);
console.log(navigator);
console.log(screen);
console.log(location);
console.log(history);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);

function openWindow() {
    newWindow = window.open('https://www.google.com');
}
function closeWindow() {
    if (newWindow) {
        newWindow.close();
    } else {
        console.log('No window to close');
    }
}