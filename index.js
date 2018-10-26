const exec = require("child_process").exec;

exports.performIISOperations = (data, callback) => {
    if (data.action == 'start') {
        exec("Powershell.exe  -executionpolicy remotesigned . " + __dirname + "\\actions.ps1; Start-IIS-Site -username " + data.username + " -password " + data.password + " -serverIpAddress " + data.serverIpAddress + " -siteName " + data.siteName , function(err, stdout, stderr){
            console.log(stdout); 
            callback(err)
         });
    }
    else if (data.action == 'stop') {
        exec("Powershell.exe  -executionpolicy remotesigned . " + __dirname + "\\actions.ps1; Stop-IIS-Site -username " + data.username + " -password " + data.password + " -serverIpAddress " + data.serverIpAddress + " -siteName " + data.siteName , function(err, stdout, stderr){
            console.log(stdout); 
            callback(err)
         });
    }
}


// performIISOperations(data, () => {
//     console.log('Done with the action!!!!!');
// });

// let startSite = () => {
//     runGulpTask('startSite', 'gulpfile.js')
//         .then(() => {
//             console.log('Done with running the startSite gulp task.');
//         })
//         .catch((e) => {
//             console.log('Error executing the gulp task - startSite');
//         });
// }

// let stopSite = () => {
//     runGulpTask('stopSite', 'index.js')
//         .then(() => {
//             console.log('Done with running the stopSite gulp task.');
//         })
//         .catch((e) => {
//             console.log('Error executing the gulp task - stopSite');
//         });
// }





