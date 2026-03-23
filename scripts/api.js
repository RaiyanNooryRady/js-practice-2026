const validation= ()=>{
    const inputObj=document.getElementById('id1');
    const demo= document.getElementById('demo');
   console.dir(inputObj);
   if(inputObj.validity.rangeOverflow){
     inputObj.setCustomValidity('You have made a range overflow error');
   }
   else if(inputObj.validity.rangeUnderflow){
    inputObj.setCustomValidity('You have made a range underflow error!');
   }
   else if(inputObj.validity.valueMissing){
    inputObj.setCustomValidity('You have entered an empty value!');
   }
    if(!inputObj.checkValidity()){
       demo.innerHTML=inputObj.validationMessage;
    }
}