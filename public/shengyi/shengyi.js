var childProcess = require('child_process');
console.log(123);

childProcess.exec('npm run dev', function(err, stdout, stderr) {
    if (err) {
        console.log('exex ');
    }
})
