const takeOrder = (callback,customer)=>{
 console.log(`Taking order from customer ${customer}`);
 callback();
}
const processOrder = (callback,customer) =>{
    console.log(`Precessing order for customer ${customer}`);
    setTimeout(()=>{
        console.log(`Cooking for customer ${customer} completed`);
         console.log(`Order processed for customer ${customer}`); 
         callback();
    }, 3000);
   
}
const completeOrder = (customer) =>{
    console.log(`Order completed for customer ${customer}`);
}

takeOrder((customer)=>{
    processOrder((customer)=>{
        completeOrder(1);
    },1);
},1);
console.log('hello world');