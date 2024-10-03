const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

//mkdir logs dir if doesnt exists
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

// make 10 log files and write stuff in them
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Very important information ${i}`); 
    console.log(fileName); 
}
