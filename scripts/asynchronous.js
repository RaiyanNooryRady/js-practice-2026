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

//promise example
const ready = true;
const kichenReady = true;
const takeOrder2 = (customer) => {
    console.log(`Taking order from customer ${customer}`);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve(`Order taken for customer ${customer}`);
            }
            else {
                reject(`order failed! Pay first for customer ${customer}`);
            }
        }, 2000);
    });
    return promise;
}
const processOrder2 = (customer) => {
    console.log(`Precessing order for customer ${customer}`);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (kichenReady) {
                resolve(`Order processed for customer ${customer}.`);
            }
            else {
                reject(`order failed! Kitchen not ready for customer ${customer}`);
            }
        }, 4000);
    });
    return promise;
}
const completeOrder2 = (customer) => {
    console.log(`Order ready to delivery for customer ${customer}`);
    const promise = Promise.resolve(`Order completed for customer ${customer}`);
    return promise;
};
takeOrder2(1)
    .then((message) => {
        console.log(message);
        return processOrder2(1);
    })
    .then((message) => {
        console.log(message);
        return completeOrder2(1);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    })

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Project Meeting',
            location: 'Zoom',
            time: '10:00 AM'
        }
        resolve(meetingDetails);
    }
    else {
        reject('Meeting already scheduled.');
    }
});
const addToCalendar = (val) => {
    
    const calendar = `${val.name} has been scheduled on ${val.location} at ${val.time}`;
    
    return Promise.resolve(calendar);
};
meeting
    .then(addToCalendar)
    .then((message) => {
        console.log(message); 
    })
    .catch((err) => {
        console.log(err);
    }) 