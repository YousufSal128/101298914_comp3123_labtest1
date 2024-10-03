const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Function to create the Logs directory and log files
const createLogs = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    } else {
        console.log('Logs directory already exists.');
    }

    process.chdir(logsDir);

    // Create 10 log files with some text
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDir, fileName);

        fs.writeFileSync(filePath, `This is log file number ${i}`);

        console.log(`Created file: ${fileName}`);
    }
};

createLogs();
