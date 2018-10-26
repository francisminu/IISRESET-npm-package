const exec = require("child_process").exec;

exports.performIISOperations = (data, callback) => {
    if (data.action == 'start') {
        exec("Powershell.exe  -executionpolicy remotesigned . " + __dirname + "\\actions.ps1; StartIISSite -username " + data.username + " -password " + data.password + " -serverIpAddress " + data.serverIpAddress + " -siteName " + data.name, function (err, stdout, stderr) {
            console.log(stdout);
            callback(err)
        });
    }
    else if (data.action == 'stop') {
        exec("Powershell.exe  -executionpolicy remotesigned . " + __dirname + "\\actions.ps1; StopIISSite -username " + data.username + " -password " + data.password + " -serverIpAddress " + data.serverIpAddress + " -siteName " + data.name, function (err, stdout, stderr) {
            console.log(stdout);
            callback(err)
        });
    }
}

exports.performWindowsServiceOperations = (data, callback) => {
    if (data.action == 'start') {
        exec("cmdkey.exe /add:" + data.serverIpAddress + " /user:" + data.username + " /pass:" + data.password, () => {
            console.log('Starting service: ', data.name);
            exec("PsExec64.exe -s \\\\" + data.serverIpAddress + " -u " + data.username + " -p " + data.password + " c:\\windows\\system32\\sc start " + data.name, () => {
                console.log('Started service: ', data.name);
                exec("cmdkey.exe /delete:" + data.serverIpAddress + " /user:" + data.username + " /pass:" + data.password, () => {
                    console.log('Completed the requested operation.');
                    callback();
                });
            });
        });
    } else {
        exec("cmdkey.exe /add:" + data.serverIpAddress + " /user:" + data.username + " /pass:" + data.password, () => {
            console.log('Stopping service: ', data.name);
            exec("PsExec64.exe -s \\\\" + data.serverIpAddress + " -u " + data.username + " -p " + data.password + " c:\\windows\\system32\\sc stop " + data.name, () => {
                console.log('Stopped service: ', data.name);
                exec("cmdkey.exe /delete:" + data.serverIpAddress + " /user:" + data.username + " /pass:" + data.password, () => {
                    console.log('Completed the requested operation.');
                    callback();
                });
            });
        });
    }

}






