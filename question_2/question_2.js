//Q2.

//1. Method to resolve a request

var resolvePromise = () => {
    return new Promise((result)=>{
        setTimeout(()=>{
            result({message: "Success with delay :)"});
        }, 500);
    });
}

//2. Method to reject a request

var rejectPromise = () =>{
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject({error:'Exception with delay :('});
        }, 500);
    });
}

resolvePromise()
    .then(r => console.log(r))   
    .catch(e => console.error(e));

rejectPromise()
    .then(r => console.log(r))   
    .catch(e => console.error(e)); 