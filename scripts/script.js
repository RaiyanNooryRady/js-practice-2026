let H1=document.getElementById('dev-heading');
H1.style.color='red';
H1.style.textAlign='center';
H1.style.backgroundColor='yellow';
H1.style.padding='10px';
H1.style.borderRadius='5px';
H1.style.fontFamily='Arial, sans-serif';
H1.style.boxShadow='2px 2px 5px rgba(0, 0, 0, 0.3)';
H1.style.width='50%';
H1.style.margin='20px auto';
H1.style.transition='all 0.3s ease';

let titleTag=document.title;
H1.innerText=`Welcome to ${titleTag} page`;


