let i=0;
console.log('worker js executed');
while(i<1000000000){
  i++;
}
postMessage(i);