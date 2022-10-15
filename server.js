const fs = require('fs');

const writeAndappend = () => {
    console.log('Writing and appending to file');
    fs.writeFileSync('notepad.txt', 'I am a trainer and i live in Bhopal.');
    fs.appendFileSync('notepad.txt', 'I help people with web-development.');
}

module.exports = writeAndappend;