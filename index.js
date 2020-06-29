const process = require('process');

process.on('message', message => {
    console.log("message from process...");
    console.log(message);
});