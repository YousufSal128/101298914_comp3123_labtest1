const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Function to remove the Logs directory and its files
const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);

        // Loop through and delete each file
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`); 
            fs.unlinkSync(filePath); 
        });

        // Remove the directory itself after all files are deleted
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogs();
