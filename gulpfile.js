var gulp = require('gulp');
var spawn = require('child_process').spawn;
var child;
var exec = require("child_process").exec;


gulp.task('saveUserData', (callback) => {
    var taskName = "startSite"
    exec("gulp " + taskName, function(err, stdout, stderr){
        console.log(stdout);
        callback(stderr);
    });
});

gulp.task('startSite', function (callback) {
    exec("Powershell.exe  -executionpolicy remotesigned . .\\iisactions.ps1; Start-IIS-Site -username 'ohl\\aa-mfrancis' -password '2427Kj3tkipy!@' -serverIpAddress '10.202.70.97' -siteName 'TicketingSystemDevApi'" , function(err, stdout, stderr){
       console.log(stdout); 
       callback(err)
    });
});

gulp.task('stopSite', function (callback) {
    exec("Powershell.exe  -executionpolicy remotesigned . .\\iisactions.ps1; Stop-IIS-Site -username 'ohl\\aa-mfrancis' -password '2427Kj3tkipy!@' -serverIpAddress '10.202.70.97' -siteName 'TicketingSystemDevApi'" , function(err, stdout, stderr){
       console.log(stdout); 
       callback(err)
    });
});

saveUserData = (data) => {
    userData = data;
    console.log(userData);
}


// gulp.task('stopIISSite', function(callback){
//     child = spawn("powershell.exe", ["./iisactions.ps1"]);
//     child.stdout.on("data",function(data){
//         console.log("Powershell Data: " + data);
//     });
//     child.stderr.on("data",function(data){
//         console.log("Powershell Errors: " + data);
//     });
//     child.on("exit",function(){
//         console.log("Powershell Script finished");
//         child.stdin.end(); //end input
//         callback();
//     });
// });

// gulp.task('startIISSite', function(callback){
//     child = spawn("powershell.exe", ["./iisactions.ps1"]);
//     child.stdout.on("data",function(data){
//         console.log("Powershell Data: " + data);
//     });
//     child.stderr.on("data",function(data){
//         console.log("Powershell Errors: " + data);
//     });
//     child.on("exit",function(){
//         console.log("Powershell Script finished");
//         child.stdin.end(); //end input
//         callback();
//     });
// });



