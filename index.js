const process = require('process');

process.on('message', message => {
    console.log("message from process...");
    process.exit(0);
});