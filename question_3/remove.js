const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    //read all files 
    fs.readdir(logsDir, (err, files) => {
        if (err) throw err;

        //delete each file and log name
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath); // Deletes the file
        });

        //remove logs dir
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    });
} else {
    console.log('Logs directory does not exist.');
}
