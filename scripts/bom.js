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
function firstFun() {
   // window.history.back();
   //window.alert('Hello, welcome to JavaScript!');
//    let text;
//    if(window.confirm('Are you happy?')){
//     text = 'You are happy!';
//    }
//    else{
//     text = 'You are not happy!';
//    }
//     console.log(text);
document.cookie='username= Raiyan';
console.log(document.cookie);
}
function secondFun() {
   // window.history.forward();
   let text;
    text=window.prompt('what is your name?');
    if(!text){
        console.log('user cancelled the prompt');
    }
    console.log(text);
}