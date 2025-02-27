// Import the sculpture data
const sculptureList = require('./data.js');

try {
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
} catch (error) {
    console.error("An error occurred:", error);
}
