let bulbImgId = document.getElementById('bulb-img');
let switchBtn = document.getElementById('switch-btn');
let currentState= 0;
switchBtn.addEventListener('click', function () {
    if(currentState === 0){

         bulbImgId.src= './images/pic_bulbon.gif';
         currentState=1;
    }
    else{
        bulbImgId.src='./images/pic_bulboff.gif';
        currentState=0;
    }
   
});