//Q1. SGR

function lowerCaseWords(myArray) {
    return new Promise((resolve, reject) => {
        const filtered = myArray.filter(item => typeof item === 'string')
                                          .map(str => str.toLowerCase());
        if (filtered.length > 0) {
            resolve(filtered);  
        } else {
            reject("No strings where found.");  
        }
    });
}

//USe

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(r => console.log(r))  // Expected output: ['pizza', 'wings']
    .catch(e => console.error(e));