const sculptureList = require('./data.js'); // Import the sculpture data

const sculptureListLengths = sculptureList.map(sculpture => {
    let sculptureLength = {};
    
    for (const key in sculpture) {
        if (typeof sculpture[key] === 'string') {
            sculptureLength[key] = sculpture[key].length; // Store string length
        }
    }

    return sculptureLength;
});

console.log(sculptureListLengths);
